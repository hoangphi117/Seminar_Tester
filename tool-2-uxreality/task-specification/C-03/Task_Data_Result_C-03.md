# Data Result — C-03: Cập nhật số lượng và xóa sản phẩm trong giỏ

> **Vai trò:** Customer<br>
> **Task ID:** `C-03`<br>
> **Nguồn spec:** `Task_Specification_C-03.md`<br>

## 1. Thông tin dữ liệu

| Trường | Giá trị |
|---|---|
| Task ID | `C-03` |
| Vai trò | Customer (Customer Web) |
| Số người (n) | 6 |
| Môi trường | Cloudflare Quick Tunnel; setup phase giữ React cart state trên đúng browser/session participant |

### Ghi chú đánh giá code liên quan (SUT)

- **Cart.jsx không có nút `+/-`** để chỉnh số lượng — chỉ có cột "Số lượng" hiển thị số dạng text và nút "Xóa" mỗi dòng. Vì vậy **không thể** đổi số lượng AirPods 2→3 bằng điều khiển trong giỏ (lệch FR-07).
- **removeFromCart(index)** xóa trực tiếp, **không có dialog xác nhận** (vi phạm FR-07/FR-24).
- Nhãn tổng là **"Tổng tạm tính"**, không phải "Tổng cộng" như FR-07 yêu cầu.
- Muốn đạt số lượng 3 chỉ có "đường vòng": xóa dòng AirPods rồi vào chi tiết đặt qty 3 và click 2 lần (lần đầu bị bỏ) → 1 dòng qty 3. Đây là phát hiện khó, cần khám phá.

## 2. Kết quả từng người

| Participant | Outcome | SC-01 | SC-02 | SC-03 | Completion time | Observable errors | Assistance | QD1 (độ khó) | Ghi chú hành vi |
|---|---|---|---|---|---|---|---|---|---|
| C03-P01 | Success | ✓ | ✓ | — | 171s | 3 | 0 | 4 | Tự tìm ra xóa dòng AirPods rồi vào chi tiết đặt qty 3 (click 2 lần) → 1 dòng qty 3; xóa Keychron; đọc tổng 18.000.000 ₫. |
| C03-P02 | Partial | — | — | — | 112s | 2 | 0 | 4 | Xóa Keychron ✓, AirPods vẫn qty 2 (không có +/-); đọc tổng 12.000.000 ₫. Chưa đạt SC-01. |
| C03-P03 | Fail | — | — | — | 138s | 2 | 0 | 5 | Xóa nhầm dòng AirPods thay vì Keychron (không có dialog xác nhận) → giỏ còn Keychron×1. |
| C03-P04 | Partial | — | — | — | 155s | 3 | 1 | 5 | Không tìm thấy điều khiển số lượng, hỏi moderator (assistance); xóa được Keychron; AirPods vẫn 2 → SC-01 chưa đạt. |
| C03-P05 | Fail | — | — | — | 121s | 2 | 0 | 5 | Xóa AirPods rồi thêm lại từ thẻ trang chủ (qty 1); Keychron không bị xóa → trạng thái cuối sai. |
| C03-P06 | Partial | — | — | — | 94s | 1 | 0 | 4 | Xóa Keychron ✓, AirPods vẫn qty 2; đọc tổng 12.000.000 ₫ → SC-01 chưa đạt. |

> SC-03 (tổng 18.000.000) chỉ đạt khi SC-01 đạt, nên chỉ P01 có SC-03. SC-02 (mô tả đúng kết quả) đạt ở những người đạt trạng thái cuối đúng; P02/P06 đọc đúng tổng sau khi chỉ xóa Keychron (12tr) → SC-01 fail nên outcome Partial.

## 3. Câu trả lời khảo sát

| Participant | QD1 | QD2 | Q01 | Q03 | Q04 | Q05 | Q09 | Q11 | Q12 |
|---|---|---|---|---|---|---|---|---|---|
| C03-P01 | 4 | 4 | 3 | 3 | 4 | 2 | 3 | Khó quay lại, hủy hoặc sửa thao tác; Khó biết cách tránh lỗi; Thành phần hoặc hành vi không nhất quán | Ngăn ngừa lỗi |
| C03-P02 | 4 | 2 | 2 | 3 | 4 | 2 | 3 | Khó quay lại, hủy hoặc sửa thao tác; Thành phần hoặc hành vi không nhất quán | Khả năng nhận diện thông tin |
| C03-P03 | 5 | 1 | 2 | 2 | 3 | 1 | 2 | Khó biết cách tránh lỗi; Thành phần hoặc hành vi không nhất quán | Ngăn ngừa lỗi |
| C03-P04 | 5 | 1 | 2 | 2 | 3 | 1 | 2 | Khó quay lại, hủy hoặc sửa thao tác; Không tìm được hướng dẫn; Khó biết cách tránh lỗi | Trợ giúp / hướng dẫn |
| C03-P05 | 5 | 1 | 2 | 2 | 3 | 1 | 2 | Thành phần hoặc hành vi không nhất quán; Phải ghi nhớ thông tin từ bước trước | Ngăn ngừa lỗi |
| C03-P06 | 4 | 2 | 2 | 3 | 4 | 2 | 3 | Khó quay lại, hủy hoặc sửa thao tác | Ngăn ngừa lỗi |

> Q01/Q03/Q04/Q05/Q09 theo bộ câu hỏi của task C-03. Q11 Multiple Choice, Q12 Single Choice.

## 4. Bảng tổng hợp

### 4.1. Metrics định lượng

| Chỉ số | Giá trị |
|---|---|
| Valid n | 6 |
| Success | 1 / 6 |
| Success rate | 16.7% |
| Partial | 3 / 6 (50.0%) |
| Fail | 2 / 6 (33.3%) |
| Invalid | 0 / 6 (0%) |
| Completion time — mean | 131.8s |
| Completion time — median | 129.5s |
| Observable errors — mean | 2.2 lỗi/lượt |
| Assistance — mean | 0.2 lần/lượt |
| QD1 (Perceived difficulty) — mean | 4.5 |

### 4.2. Phân bố câu trả lời Likert

| Câu hỏi | Mean (1–5) | Tỷ lệ chọn 4–5 |
|---|---|---|
| QD1 (thấp = dễ) | 4.5 | — |
| QD2 | 1.8 | 16.7% |
| Q01 | 2.2 | 0% |
| Q03 | 2.5 | 0% |
| Q04 | 3.5 | 50% |
| Q05 | 1.5 | 0% |
| Q09 | 2.5 | 0% |

### 4.3. Phân bố Q11 (Multiple Choice, n=6)

| Phương án | Số lượt | Tỷ lệ |
|---|---|---|
| Khó quay lại, hủy hoặc sửa thao tác | 4 | 66.7% |
| Thành phần hoặc hành vi không nhất quán | 4 | 66.7% |
| Khó biết cách tránh lỗi | 3 | 50.0% |
| Không tìm được hướng dẫn | 1 | 16.7% |
| Phải ghi nhớ thông tin từ bước trước | 1 | 16.7% |

### 4.4. Phân bố Q12 (Single Choice, n=6)

| Phương án | Số người | Tỷ lệ |
|---|---|---|
| Ngăn ngừa lỗi | 4 | 66.7% |
| Khả năng nhận diện thông tin | 1 | 16.7% |
| Trợ giúp / hướng dẫn | 1 | 16.7% |

## 5. Ghi chú nhanh (issues SUT quan sát được)

- **Không có nút `+/-` chỉnh số lượng trong giỏ** (lệch FR-07) → 4/6 không đạt được số lượng 3 bằng đường thông thường; độ khó cảm nhận cao (QD1 = 4.5).
- **Xóa không có dialog xác nhận** (lệch FR-07/FR-24) → 1 người xóa nhầm dòng dẫn Fail; Q05 (ngăn ngừa lỗi) rất thấp (mean 1.5).
- **Cần nhớ/gõ lại từ nơi khác** để đổi số lượng (không có điều khiển trực tiếp) → liên quan N3/N6.
