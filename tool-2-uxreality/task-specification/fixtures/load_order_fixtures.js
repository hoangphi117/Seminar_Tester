#!/usr/bin/env node
"use strict";

/**
 * Load deterministic order fixtures into an EShop sandbox database.
 *
 * This script writes directly to SQLite because the SUT exposes no endpoint for
 * inserting arbitrary order fixtures. It does NOT import database.js and does
 * NOT reset the database. Run it only against an isolated sandbox instance and
 * only after the backend is ready.
 *
 * Usage:
 *   node load_order_fixtures.js --db <path-to-database.sqlite> \
 *     --scenario dashboard|order-status --confirm-sandbox
 */

const fs = require("fs");
const path = require("path");
const { createRequire } = require("module");

function fail(message) {
  console.error(`ERROR: ${message}`);
  process.exit(1);
}

function parseArgs(argv) {
  const parsed = {};
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (!arg.startsWith("--")) fail(`Unexpected argument: ${arg}`);
    const key = arg.slice(2);
    if (key === "confirm-sandbox") {
      parsed[key] = true;
      continue;
    }
    const value = argv[i + 1];
    if (!value || value.startsWith("--")) fail(`Missing value for --${key}`);
    parsed[key] = value;
    i += 1;
  }
  return parsed;
}

function openDatabase(dbPath) {
  const backendPackage = path.resolve(
    __dirname,
    "../../../../eshop-sut/backend/package.json",
  );
  if (!fs.existsSync(backendPackage)) {
    fail(
      `Cannot find backend package.json at ${backendPackage}. Run npm install in eshop-sut/backend first.`,
    );
  }

  const backendRequire = createRequire(backendPackage);
  let sqlite3;
  try {
    sqlite3 = backendRequire("sqlite3").verbose();
  } catch (error) {
    fail(`Cannot load sqlite3 from the backend package: ${error.message}`);
  }

  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(dbPath, (error) => {
      if (error) reject(error);
      else resolve(db);
    });
  });
}

function run(db, sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function onRun(error) {
      if (error) reject(error);
      else resolve({ lastID: this.lastID, changes: this.changes });
    });
  });
}

function get(db, sql, params = []) {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (error, row) => {
      if (error) reject(error);
      else resolve(row);
    });
  });
}

function all(db, sql, params = []) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (error, rows) => {
      if (error) reject(error);
      else resolve(rows);
    });
  });
}

function close(db) {
  return new Promise((resolve) => db.close(() => resolve()));
}

async function assertSeedState(db) {
  const counts = await get(
    db,
    `SELECT
       (SELECT COUNT(*) FROM categories) AS categories,
       (SELECT COUNT(*) FROM products) AS products,
       (SELECT COUNT(*) FROM users) AS users,
       (SELECT COUNT(*) FROM coupons) AS coupons`,
  );

  if (counts.categories !== 3 || counts.products !== 5) {
    fail(
      `Database is not in the expected seed state (categories=${counts.categories}, products=${counts.products}). Run node database.js, start the backend, then run this script.`,
    );
  }

  const customer = await get(db, "SELECT id, role FROM users WHERE id = 2");
  if (!customer || customer.role !== "user") {
    fail("Seed Customer account with id=2 was not found. Reset and seed the sandbox first.");
  }

  const products = await all(
    db,
    "SELECT id, name, price FROM products ORDER BY id",
  );
  const expectedProducts = [
    [1, "iPhone 15 Pro Max", 30000000],
    [2, "Samsung Galaxy S24 Ultra", 28000000],
    [3, "MacBook Pro M3", 45000000],
    [4, "Tai nghe AirPods Pro 2", 6000000],
    [5, "Bàn phím cơ Keychron Q1", 4000000],
  ];
  for (const [id, name, price] of expectedProducts) {
    const product = products.find((item) => item.id === id);
    if (!product || product.name !== name || product.price !== price) {
      fail(`Seed product id=${id} (${name}) is missing or changed. Reset the sandbox first.`);
    }
  }

  const coupon = await get(
    db,
    "SELECT id, type, discount_value, min_order_amount FROM coupons WHERE code = 'SAVE10'",
  );
  if (
    !coupon ||
    coupon.type !== "percent" ||
    coupon.discount_value !== 10 ||
    coupon.min_order_amount !== 300000
  ) {
    fail("Seed coupon SAVE10 is missing or changed. Reset the sandbox first.");
  }
}

async function replaceOrders(db, rows) {
  await run(db, "BEGIN IMMEDIATE");
  try {
    await run(db, "DELETE FROM orders");
    await run(db, "DELETE FROM sqlite_sequence WHERE name = 'orders'");
    for (const row of rows) {
      await run(
        db,
        `INSERT INTO orders
           (user_id, total_amount, status, shipping_address)
         VALUES (?, ?, ?, ?)`,
        [row.userId, row.totalAmount, row.status, row.address],
      );
    }
    await run(db, "COMMIT");
  } catch (error) {
    await run(db, "ROLLBACK");
    throw error;
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.db) fail("--db <path> is required.");
  if (!args["confirm-sandbox"]) {
    fail("--confirm-sandbox is required to prevent accidental writes to a shared database.");
  }

  const scenarios = {
    dashboard: [
      {
        userId: 2,
        totalAmount: 30000000,
        status: "delivered",
        address: "123 Lê Lợi, Quận 1, TP.HCM",
      },
      {
        userId: 2,
        totalAmount: 28000000,
        status: "pending",
        address: "123 Lê Lợi, Quận 1, TP.HCM",
      },
    ],
    "order-status": [
      {
        userId: 2,
        totalAmount: 30000000,
        status: "pending",
        address: "123 Lê Lợi, Quận 1, TP.HCM",
      },
      {
        userId: 2,
        totalAmount: 28000000,
        status: "pending",
        address: "123 Lê Lợi, Quận 1, TP.HCM",
      },
      {
        userId: 2,
        totalAmount: 45000000,
        status: "confirmed",
        address: "123 Lê Lợi, Quận 1, TP.HCM",
      },
    ],
  };

  if (!Object.prototype.hasOwnProperty.call(scenarios, args.scenario)) {
    fail("--scenario must be one of: dashboard, order-status.");
  }

  const dbPath = path.resolve(args.db);
  if (!fs.existsSync(dbPath)) fail(`Database file does not exist: ${dbPath}`);
  if (path.basename(dbPath) !== "database.sqlite") {
    fail(`Refusing to load fixtures into unexpected file: ${dbPath}`);
  }

  const db = await openDatabase(dbPath);
  try {
    await assertSeedState(db);
    await replaceOrders(db, scenarios[args.scenario]);

    const orders = await all(
      db,
      "SELECT id, user_id, total_amount, status FROM orders ORDER BY id",
    );
    console.log(`Fixture loaded: scenario=${args.scenario}`);
    console.log(`Database: ${dbPath}`);
    for (const order of orders) {
      console.log(
        `  #${order.id} user_id=${order.user_id} total=${order.total_amount} status=${order.status}`,
      );
    }
    console.log(
      "Assertions: seed categories=3, products=5, users=2, coupons=4, coupon SAVE10 present.",
    );
  } finally {
    await close(db);
  }
}

main().catch((error) => {
  console.error(`ERROR: ${error.stack || error.message}`);
  process.exit(1);
});
