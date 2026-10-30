# Đặc tả Task — M-03: Điều chỉnh số lượng và xóa sản phẩm trong giỏ Mobile

> **Vai trò:** Mobile Customer
> **Phạm vi:** Mobile App (React Native / Expo)
> **Nguồn:** EShop FR-07, FR-20
> **Trạng thái:** Đặc tả trước pilot; phát hiện bug logic cốt lõi trong App.js.

## 1. Thông tin chung

- **Task ID:** M-03
- **Tên task:** Điều chỉnh số lượng AirPods thành 3 và xóa sản phẩm phụ trong giỏ Mobile
- **Vai trò:** Mobile Customer
- **FR liên quan:** FR-07, FR-20
- **UI/UX principles dự kiến:** P3/P5/P6; **Nielsen heuristics dự kiến:** N1/N3/N5/N9
- **Priority:** P1
- **Phiên bản task:** v1.0
- **Môi trường:** Mobile App (Expo Go); backend tại IP LAN 192.168.10.13:3000

## 2. User task

> Trong giỏ hàng đang có 2 món: AirPods Pro 2 và Bàn phím cơ Keychron Q1. Bạn hãy đổi số lượng AirPods thành 3, sau đó xóa Bàn phím cơ khỏi giỏ hàng.

## 3. Điều kiện ban đầu (Preconditions)

- **Trạng thái giỏ hàng ban đầu:** Có sẵn 2 món hàng: AirPods Pro 2 (số lượng 1) và Keychron Q1 (số lượng 1).
- **Reset trước phiên:** Nạp sẵn 2 sản phẩm vào state giỏ hàng trước khi trao máy cho participant.

## 4. Tiêu chí thành công

| ID | Điều kiện cần quan sát | Loại | Cách xác minh |
|---|---|---|---|
| SC-01 | Người tham gia nhập số lượng 3 cho AirPods Pro 2 | Outcome | Thao tác nhập liệu trên input |
| SC-02 | Người tham gia bấm nút Xóa để loại bỏ Keychron Q1 khỏi giỏ | Outcome | Keychron biến mất khỏi danh sách |
| SC-03 | Giỏ hàng hiển thị đúng số lượng 3 cho AirPods | Usability / Integrity | Trạng thái giỏ hàng cuối cùng |

**Kết quả task:**
- Success: Đạt SC-01, SC-02 và SC-03. *(Lưu ý: Do bug code `parsed + 1`, người dùng gõ 3 sẽ bị nhảy thành 4, dẫn đến không thể đạt Success tự nhiên).*
- Partial: Xóa được Keychron nhưng số lượng AirPods bị sai do bug code (thành 4 thay vì 3), người dùng bối rối thử sửa lại nhiều lần.
- Fail: Không thực hiện được thao tác hoặc bỏ cuộc vì số lượng liên tục nhảy sai.
- Invalid: App văng hoặc đóng đột ngột.

## 5. Câu hỏi sau task

- QD1, QD2 (Đánh giá mức độ thất vọng và khó khăn khi chỉnh số lượng).
- Q02 (Giao diện giỏ hàng có phản hồi đúng ý bạn không?), Q05 (Hệ thống có lỗi hiển thị không?).
- Q11 và Q12.

## 6. Ghi chú quan sát cho Reviewer

- **Trọng tâm kiểm thử:** Bug logic `parsed + 1` trong hàm `updateQuantity` của Mobile App. Quan sát biểu cảm và phản ứng của participant khi nhập số 3 nhưng app hiển thị số 4.
