# Data Result — C-04: Áp dụng coupon và hiểu tổng tiền

> **Vai trò:** Customer<br>
> **Task ID:** `C-04`<br>
> **Nguồn spec:** `Task_Specification_C-04.md`<br>

## 1. Thông tin dữ liệu

| Trường | Giá trị |
|---|---|
| Task ID | `C-04` |
| Vai trò | Customer (Customer Web) |
| Số người (n) | 6 |
| Môi trường | Cloudflare Quick Tunnel; setup phase giữ React cart state/phiên đăng nhập trên đúng browser/session |

### Ghi chú đánh giá code liên quan (SUT)

- **Bug lớn trong `apply-coupon` (server.js):** `discount_amount = Math.floor(total * (1 - discount_value))`. Với SAVE10 (`discount_value=10`) và tổng 30.000.000: `30.000.000 * (1-10) = -270.000.000`; `final_amount = 30.000.000 - (-270.000.000) = 300.000.000`. Công thức đúng phải là `total * discount_value/100` (FR-09: giảm 3.000.000, tổng cuối 27.000.000).
- **Checkout.jsx** hiển thị sau khi nhập `SAVE10`: "✅ Áp dụng thành công! Giảm 10%", "Tiết kiệm: **-270,000,000 ₫**", "Thành tiền: **300,000,000 ₫**", "Tổng thanh toán: 300,000,000 ₫".
- **Trường "Tổng tiền thanh toán" là `<input type="number">` editable** (vi phạm FR-08: không được phép chỉnh sửa trực tiếp; backend phải tự tính). Sửa ô này sẽ reset kết quả coupon.
- Nút "Xác Nhận Thanh Toán" thực sự tạo đơn hàng + ghi `coupon_usage` → ngoài phạm vi task (SC-05).

## 2. Kết quả từng người

| Participant | Outcome | SC-01 | SC-02 | Completion time | Observable errors | Assistance | QD1 (độ khó) | Ghi chú hành vi |
|---|---|---|---|---|---|---|---|---|
| C04-P01 | Success | ✓ | ✓ | 74s | 0 | 0 | 3 | Nhập SAVE10, bấm Áp dụng, đọc đúng "300,000,000 ₫" đang hiển thị + dòng "Giảm 10%". |
| C04-P02 | Success | ✓ | ✓ | 68s | 0 | 0 | 2 | Nhập SAVE10 (tự viết hoa), đọc đúng "300,000,000 ₫". |
| C04-P03 | Partial | ✓ | — | 132s | 1 | 0 | 4 | Tính nhẩm 10% = 3tr và báo "27.000.000 ₫" (đúng nghiệp vụ FR-09) nhưng **không phải** giá trị giao diện đang hiển thị → SC-02 fail. |
| C04-P04 | Partial | ✓ | — | 156s | 2 | 0 | 5 | Vô tình sửa ô "Tổng tiền thanh toán" thành 300.000.000 → kết quả vô lý; chỉnh lại, bấm lại Áp dụng → thấy 300.000.000 nhưng "không chắc con số nào đáng tin" → SC-02 chưa đạt. |
| C04-P05 | Partial | ✓ | — | 118s | 1 | 1 | 4 | Bối rối vì thông báo "Giảm 10%" nhưng dòng "Tiết kiệm" là số âm; hỏi moderator (assistance) nên không đạt tiêu chí Success dù đọc đúng giá trị hiển thị. |
| C04-P06 | Fail | ✓ | — | 96s | 1 | 0 | 5 | Nhập SAVE10, đọc được phản hồi nhưng **bấm "Xác Nhận Thanh Toán"** → tạo đơn hàng ngoài phạm vi task → Fail (SC-05 vi phạm). |

> SC-01 đạt cho tất cả vì mọi người đều nhập mã và có phản hồi quan sát được; điểm khác biệt nằm ở SC-02 và phạm vi hành động.

## 3. Câu trả lời khảo sát

| Participant | QD1 | QD2 | Q01 | Q02 | Q05 | Q09 | Q11 | Q12 |
|---|---|---|---|---|---|---|---|---|
| C04-P01 | 3 | 4 | 3 | 4 | 3 | 2 | Không hiểu thông báo lỗi hoặc cách khắc phục; Thành phần hoặc hành vi không nhất quán | Trạng thái / phản hồi |
| C04-P02 | 2 | 5 | 4 | 4 | 4 | 3 | Thành phần hoặc hành vi không nhất quán | Tính nhất quán |
| C04-P03 | 4 | 2 | 3 | 3 | 2 | 2 | Không hiểu thông báo lỗi hoặc cách khắc phục; Thành phần hoặc hành vi không nhất quán | Khôi phục lỗi |
| C04-P04 | 5 | 1 | 2 | 3 | 1 | 2 | Không rõ hệ thống đang xử lý hay đã hoàn tất; Thành phần hoặc hành vi không nhất quán; Khó biết cách tránh lỗi | Trạng thái / phản hồi |
| C04-P05 | 4 | 2 | 3 | 3 | 2 | 2 | Không hiểu thông báo lỗi hoặc cách khắc phục | Trợ giúp / hướng dẫn |
| C04-P06 | 5 | 3 | 3 | 4 | 1 | 2 | Khó biết cách tránh lỗi; Thành phần hoặc hành vi không nhất quán | Ngăn ngừa lỗi |

> Q01/Q02/Q05/Q09 theo bộ câu hỏi của task C-04. Q11 Multiple Choice, Q12 Single Choice.

## 4. Bảng tổng hợp

### 4.1. Metrics định lượng

| Chỉ số | Giá trị |
|---|---|
| Valid n | 6 |
| Success | 2 / 6 |
| Success rate | 33.3% |
| Partial | 3 / 6 (50.0%) |
| Fail | 1 / 6 (16.7%) |
| Invalid | 0 / 6 (0%) |
| Completion time — mean | 107.3s |
| Completion time — median | 107.0s |
| Observable errors — mean | 0.8 lỗi/lượt |
| Assistance — mean | 0.2 lần/lượt |
| QD1 (Perceived difficulty) — mean | 3.8 |

### 4.2. Phân bố câu trả lời Likert

| Câu hỏi | Mean (1–5) | Tỷ lệ chọn 4–5 |
|---|---|---|
| QD1 (thấp = dễ) | 3.8 | — |
| QD2 | 2.8 | 33.3% |
| Q01 | 3.0 | 16.7% |
| Q02 | 3.5 | 50.0% |
| Q05 | 2.2 | 16.7% |
| Q09 | 2.2 | 0% |

### 4.3. Phân bố Q11 (Multiple Choice, n=6)

| Phương án | Số lượt | Tỷ lệ |
|---|---|---|
| Thành phần hoặc hành vi không nhất quán | 5 | 83.3% |
| Không hiểu thông báo lỗi hoặc cách khắc phục | 3 | 50.0% |
| Khó biết cách tránh lỗi | 2 | 33.3% |
| Không rõ hệ thống đang xử lý hay đã hoàn tất | 1 | 16.7% |

### 4.4. Phân bố Q12 (Single Choice, n=6)

| Phương án | Số người | Tỷ lệ |
|---|---|---|
| Trạng thái / phản hồi | 2 | 33.3% |
| Tính nhất quán | 1 | 16.7% |
| Khôi phục lỗi | 1 | 16.7% |
| Trợ giúp / hướng dẫn | 1 | 16.7% |
| Ngăn ngừa lỗi | 1 | 16.7% |

## 5. Ghi chú nhanh (issues SUT quan sát được)

- **Công thức coupon sai nghiêm trọng** (`total*(1-discount_value)` thay vì `total*discount_value/100` theo FR-09): trên tổng 30.000.000, SAVE10 hiển thị giảm **-270.000.000 ₫** và thành tiền **300.000.000 ₫** thay vì 27.000.000. Đây là lý do chính khiến QD2/Q09/Q05 thấp và 3 người `Partial` (bối rối/không tin số hiển thị). Liên quan P10/N1/N9/N2.
- **Ô tổng tiền thanh toán có thể chỉnh sửa** (vi phạm FR-08) → P04 sửa nhầm làm lệch kết quả.
- **Nút "Xác Nhận Thanh Toán" không có cơ chế chặn** → P06 thực hiện thanh toán ngoài phạm vi (SC-05) → Fail; liên quan P8/N5 (error prevention).
