# Data Result — C-01: Tìm sản phẩm và xác định giá

> **Vai trò:** Customer<br>
> **Task ID:** `C-01`<br>
> **Nguồn spec:** `Task_Specification_C-01.md`<br>

## 1. Thông tin dữ liệu

| Trường | Giá trị |
|---|---|
| Task ID | `C-01` |
| Vai trò | Customer (Customer Web) |
| Số người (n) | 6 |
| Môi trường | Cloudflare Quick Tunnel (URL tạm, đổi mỗi lần khởi động) |
| Công cụ thu thập | UXReality (survey/questions) + review code SUT |

### Ghi chú đánh giá code liên quan (SUT)

- **Home.jsx** hiển thị giá sản phẩm bằng `Number(p.price).toLocaleString() + " VND"` → đơn vị **"VND"**, không phải `₫` như FR-05/FR-21 yêu cầu (C-01 SC-03).
- Search dùng `GET /api/products?search=<kw>` với `LIKE '%<kw>%'`; nếu không có kết quả, trang **chỉ hiển thị lưới rỗng, không có thông báo empty state** (vi phạm FR-05). Một người gõ sai từ khóa sẽ gặp trang trống gây mơ hồ.
- Dòng "Kết quả tìm kiếm cho: ..." dùng `dangerouslySetInnerHTML` (XSS, lệch FR-05) — không ảnh hưởng trực tiếp outcome task nhưng ghi nhận.

## 2. Kết quả từng người

| Participant | Outcome | SC-01 | SC-02 | Completion time | Observable errors | Assistance | QD1 (độ khó) | Ghi chú hành vi |
|---|---|---|---|---|---|---|---|---|
| C01-P01 | Success | ✓ | ✓ | 41s | 0 | 0 | 1 | Tìm bằng cách cuộn lưới danh sách, không dùng search; đọc "6,000,000 VND" đúng. |
| C01-P02 | Success | ✓ | ✓ | 26s | 0 | 0 | 1 | Dùng search "AirPods", ra 1 kết quả, đọc đúng. |
| C01-P03 | Success | ✓ | ✓ | 63s | 1 | 0 | 2 | Gõ sai từ khóa "Airpods pro 2" → 0 kết quả → trang rỗng không có thông báo; gõ lại "AirPods" đúng. |
| C01-P04 | Success | ✓ | ✓ | 34s | 0 | 0 | 1 | Dùng search "Tai nghe", tìm thấy đúng sản phẩm. |
| C01-P05 | Partial | — | — | 88s | 1 | 0 | 2 | Tìm đúng số tiền 6.000.000 nhưng khi nói lại chỉ vào thẻ nhầm (MacBook) → chưa gắn đúng giá với sản phẩm; chưa đạt SC-01/SC-02 trọn vẹn. |
| C01-P06 | Success | ✓ | ✓ | 57s | 1 | 0 | 2 | Đầu tiên lăn chuột thấy nhiều sản phẩm, bối rối đơn vị "VND" so với "₫"; sau đó xác nhận đúng "6,000,000 VND". |

## 3. Câu trả lời khảo sát

| Participant | QD1 | QD2 | Q02 | Q06 | Q07 | Q08 | Q11 | Q12 |
|---|---|---|---|---|---|---|---|---|
| C01-P01 | 1 | 5 | 5 | 5 | 5 | 4 | Không gặp vấn đề nào | Không có vấn đề đáng kể |
| C01-P02 | 1 | 5 | 5 | 5 | 5 | 4 | Không gặp vấn đề nào | Không có vấn đề đáng kể |
| C01-P03 | 2 | 4 | 4 | 4 | 4 | 3 | Không rõ hệ thống đang xử lý hay đã hoàn tất; Khác | Trạng thái / phản hồi |
| C01-P04 | 1 | 5 | 5 | 5 | 4 | 4 | Không gặp vấn đề nào | Không có vấn đề đáng kể |
| C01-P05 | 2 | 2 | 4 | 3 | 4 | 3 | Giao diện có quá nhiều thông tin gây nhiễu; Khác | Khả năng nhận diện thông tin |
| C01-P06 | 2 | 4 | 4 | 4 | 4 | 3 | Không hiểu nhãn, biểu tượng hoặc thuật ngữ | Ngôn ngữ / tính dễ hiểu |

> Ghi chú: Q02/Q06/Q07/Q08 theo bộ câu hỏi của task C-01; Q11 là Multiple Choice (chọn nhiều), Q12 là Single Choice.

## 4. Bảng tổng hợp

### 4.1. Metrics định lượng

| Chỉ số | Giá trị |
|---|---|
| Valid n | 6 |
| Success | 5 / 6 |
| Success rate | 83.3% |
| Partial | 1 / 6 (16.7%) |
| Fail | 0 / 6 (0%) |
| Invalid | 0 / 6 (0%) |
| Completion time — mean | 51.5s |
| Completion time — median | 49s |
| Observable errors — mean | 0.5 lỗi/lượt |
| Assistance — mean | 0.0 lần/lượt |
| QD1 (Perceived difficulty) — mean | 1.5 |

### 4.2. Phân bố câu trả lời Likert

| Câu hỏi | Mean (1–5) | Tỷ lệ chọn 4–5 |
|---|---|---|
| QD1 (thấp = dễ) | 1.5 | — |
| QD2 | 4.2 | 83.3% |
| Q02 | 4.5 | 100% |
| Q06 | 4.3 | 83.3% |
| Q07 | 4.3 | 100% |
| Q08 | 3.5 | 50% |

### 4.3. Phân bố Q11 (Multiple Choice, n=6, tỷ lệ có thể >100%)

| Phương án | Số lượt | Tỷ lệ |
|---|---|---|
| Không gặp vấn đề nào | 3 | 50.0% |
| Không rõ hệ thống đang xử lý hay đã hoàn tất | 1 | 16.7% |
| Khác | 2 | 33.3% |
| Giao diện có quá nhiều thông tin gây nhiễu | 1 | 16.7% |
| Không hiểu nhãn, biểu tượng hoặc thuật ngữ | 1 | 16.7% |

### 4.4. Phân bố Q12 (Single Choice, n=6)

| Phương án | Số người | Tỷ lệ |
|---|---|---|
| Không có vấn đề đáng kể | 3 | 50.0% |
| Khả năng nhận diện thông tin | 1 | 16.7% |
| Ngôn ngữ / tính dễ hiểu | 1 | 16.7% |
| Trạng thái / phản hồi | 1 | 16.7% |

## 5. Ghi chú nhanh (issues SUT quan sát được)

- **Đơn vị tiền "VND" thay vì `₫`** trên trang chủ (Home.jsx) — lệch FR-05/FR-21; participant đọc đúng nhãn đang hiển thị vẫn đạt outcome (theo SC-03). Xu hướng Q11/Q12 "Ngôn ngữ" thấp nhưng có dấu hiệu nhầm lẫn đơn vị ở 1 người.
- **Trang trống khi tìm kiếm không có kết quả** (không có empty state) — 1 lượt gặp phải, gây dừng/bối rối (P05 bối rối, P03 phải gõ lại) — liên quan N1/N6.
