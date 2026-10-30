# Data Result — U-01

> **DỮ LIỆU GIẢ LẬP (SIMULATION), không phải phiên Userbrain thật.** Dùng 10 participant giả lập cho mỗi task; session thực tế = 0. Các số liệu được sinh theo scenario/assumption ghi dưới đây.

## 1. Tóm tắt giả lập

| Chỉ số | Giá trị mô phỏng |
|---|---:|
| Task / FR | U-01 / FR-12 |
| Vai trò setup | Customer role đã setup sẵn |
| Synthetic participant | 10 (SIM-U-01-P01…P10) |
| Session thực tế | 0 |
| Simulated outcome | Success 6/10 (60%); Partial 2/10; Fail 2/10; Invalid 0 |
| Mean / median time | 76.5s / 68s |
| Mean observable errors | 1.10 |
| QD1 difficulty mean (1–5) | 2.80 |
| QD2 confidence mean (1–5) | 3.50 |

## 2. Fixture và giả định mô phỏng

- Fixture theo [userbrain_test_fixtures.md](../fixtures/userbrain_test_fixtures.md).
- Mô phỏng giả định người dùng phải khám phá Admin entry point; UI chưa xác minh.
- Participant rows chi tiết nằm trong [simulated_results_n10.csv](../fixtures/simulated_results_n10.csv), lọc TaskId=U-01.
- Outcome/time/errors/ratings là dữ liệu được dựng để minh họa báo cáo; không dùng như bằng chứng người dùng hoặc kết luận về build thực tế.

## 3. Expected theo source/SRS

SRS: chỉ Admin role được vào Admin API. Code baseline: API kiểm tra JWT nhưng không kiểm tra role; Customer token có thể được chấp nhận. UI route chưa pilot.

## 4. Kết quả participant thực tế

Chưa có. Không nhập các metrics mô phỏng vào bảng kết quả thật của Userbrain.

