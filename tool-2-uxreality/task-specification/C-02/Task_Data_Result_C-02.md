# Data Result — C-02: Thêm sản phẩm vào giỏ và nhận biết phản hồi

> **Vai trò:** Customer<br>
> **Task ID:** `C-02`<br>
> **Nguồn spec:** `Task_Specification_C-02.md`<br>
> 
## 1. Thông tin dữ liệu

| Trường | Giá trị |
|---|---|
| Task ID | `C-02` |
| Vai trò | Customer (Customer Web) |
| Số người (n) | 6 |
| Môi trường | Cloudflare Quick Tunnel (URL tạm, đổi mỗi lần khởi động) |

### Ghi chú đánh giá code liên quan (SUT)

- **ProductDetail.jsx:** nút "Thêm vào giỏ hàng" **bỏ qua cú click đầu tiên** (`clickCount === 0` thì return, không thêm gì, không phản hồi). Người dùng phải click 2 lần mới thêm được 1 dòng.
- **CartContext.addToCart** luôn tạo **dòng mới**, không gộp theo sản phẩm (vi phạm FR-07: cùng sản phẩm phải tăng số lượng, không tạo dòng mới).
- **Header (App.jsx)** chỉ có link "Giỏ hàng", **không có badge số lượng** (vi phạm FR-23). Không có toast khi thêm từ thẻ trang chủ (FR-24).
- Do đó phản hồi duy nhất tin cậy là mở trang Giỏ hàng; từ trang chi tiết có nhãn "Đã thêm" tạm thời 2 giây.

## 2. Kết quả từng người

| Participant | Outcome | SC-01 | SC-02 | Completion time | Observable errors | Assistance | QD1 (độ khó) | Ghi chú hành vi |
|---|---|---|---|---|---|---|---|---|
| C02-P01 | Success | ✓ | ✓ | 68s | 1 | 0 | 3 | Vào chi tiết, đặt qty 2, click "Thêm vào giỏ" 2 lần (lần đầu bị bỏ) → 1 dòng AirPods qty 2; mở giỏ xác nhận. |
| C02-P02 | Success | ✓ | ✓ | 59s | 0 | 0 | 2 | Click "Thêm vào giỏ" ở thẻ trang chủ 2 lần → 2 dòng AirPods qty 1 mỗi dòng (tổng 2, SC-01 đạt; SC-03 issue gộp dòng). Mở giỏ xác nhận. |
| C02-P03 | Partial | ✓ | — | 84s | 1 | 0 | 3 | Chi tiết qty 2 sau 2 click → giỏ có 1 dòng qty 2, nhưng không mở giỏ, chỉ dựa vào nhãn "Đã thêm" 2s → không nhận biết chắc SC-02. |
| C02-P04 | Partial | — | — | 71s | 1 | 0 | 3 | Click "Thêm vào giỏ" ở trang chủ 1 lần → không phản hồi, không mở giỏ để xác nhận; giỏ chỉ có qty 1 → SC-01 chưa đạt. |
| C02-P05 | Fail | — | — | 96s | 2 | 0 | 4 | Click "Thêm vào giỏ" 4 lần ở trang chủ → tổng qty 4 ≠ 2; không nhận biết được trạng thái → Fail. |
| C02-P06 | Partial | — | — | 103s | 2 | 1 | 4 | Thêm 2 lần ở trang chủ → 2 dòng AirPods; bối rối không xác định được "dòng qty 2", hỏi moderator (assistance). SC-02 chưa đạt. |

## 3. Câu trả lời khảo sát

| Participant | QD1 | QD2 | Q01 | Q02 | Q05 | Q06 | Q11 | Q12 |
|---|---|---|---|---|---|---|---|---|
| C02-P01 | 3 | 5 | 4 | 5 | 4 | 5 | Không rõ hệ thống đang xử lý hay đã hoàn tất | Trạng thái / phản hồi |
| C02-P02 | 2 | 4 | 3 | 5 | 4 | 5 | Không rõ hệ thống đang xử lý hay đã hoàn tất; Thành phần hoặc hành vi không nhất quán | Tính nhất quán |
| C02-P03 | 3 | 2 | 2 | 5 | 3 | 5 | Không rõ hệ thống đang xử lý hay đã hoàn tất; Không tìm được hướng dẫn | Trạng thái / phản hồi |
| C02-P04 | 3 | 2 | 2 | 4 | 3 | 4 | Không rõ hệ thống đang xử lý hay đã hoàn tất | Trạng thái / phản hồi |
| C02-P05 | 4 | 1 | 1 | 4 | 2 | 4 | Không rõ hệ thống đang xử lý hay đã hoàn tất; Khó biết cách tránh lỗi | Trạng thái / phản hồi |
| C02-P06 | 4 | 2 | 2 | 4 | 3 | 3 | Không rõ hệ thống đang xử lý hay đã hoàn tất; Thành phần hoặc hành vi không nhất quán; Khó quay lại, hủy hoặc sửa thao tác | Tính nhất quán |

> Q01/Q02/Q05/Q06 theo bộ câu hỏi của task C-02. Q11 Multiple Choice, Q12 Single Choice.

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
| Completion time — mean | 80.2s |
| Completion time — median | 77.5s |
| Observable errors — mean | 1.2 lỗi/lượt |
| Assistance — mean | 0.2 lần/lượt |
| QD1 (Perceived difficulty) — mean | 3.2 |

### 4.2. Phân bố câu trả lời Likert

| Câu hỏi | Mean (1–5) | Tỷ lệ chọn 4–5 |
|---|---|---|
| QD1 (thấp = dễ) | 3.2 | — |
| QD2 | 2.7 | 33.3% |
| Q01 | 2.3 | 16.7% |
| Q02 | 4.5 | 100% |
| Q05 | 3.2 | 33.3% |
| Q06 | 4.3 | 83.3% |

### 4.3. Phân bố Q11 (Multiple Choice, n=6)

| Phương án | Số lượt | Tỷ lệ |
|---|---|---|
| Không rõ hệ thống đang xử lý hay đã hoàn tất | 6 | 100% |
| Thành phần hoặc hành vi không nhất quán | 2 | 33.3% |
| Không tìm được hướng dẫn | 1 | 16.7% |
| Khó biết cách tránh lỗi | 1 | 16.7% |
| Khó quay lại, hủy hoặc sửa thao tác | 1 | 16.7% |

### 4.4. Phân bố Q12 (Single Choice, n=6)

| Phương án | Số người | Tỷ lệ |
|---|---|---|
| Trạng thái / phản hồi | 4 | 66.7% |
| Tính nhất quán | 2 | 33.3% |

## 5. Ghi chú nhanh (issues SUT quan sát được)

- **Cú click đầu tiên vào "Thêm vào giỏ hàng" bị bỏ qua** (ProductDetail) — gây mơ hồ trạng thái, 100% participant liệt kê Q11 "Không rõ hệ thống đang xử lý hay đã hoàn tất". Liên quan N1/P5.
- **Không có badge/toast ở trang chủ** khi thêm ("Thêm vào giỏ" ở thẻ không phản hồi gì) — vi phạm FR-23/FR-24; nhiều người không tin là đã thêm.
- **Giỏ không gộp dòng cùng sản phẩm** (FR-07) — P02/P06 thấy 2 dòng AirPods → Q11 "Thành phần/hành vi không nhất quán"; liên quan N4.
