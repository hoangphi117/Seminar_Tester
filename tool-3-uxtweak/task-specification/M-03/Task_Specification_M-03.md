# Đặc tả Task — M-03: Điều chỉnh số lượng và xóa sản phẩm trong giỏ Mobile

> **Vai trò:** Mobile Customer
> **Phạm vi:** Mobile App (React Native / Expo)
> **Nguồn:** EShop FR-07, FR-20
> **Trạng thái:** Đặc tả kiểm thử Usability; tập trung vào công thái học cảm ứng di động, khả năng tương tác với ô điều chỉnh số lượng và an toàn thao tác giỏ hàng.

## 1. Thông tin chung

- **Task ID:** M-03
- **Tên task:** Quản lý giỏ hàng: Điều chỉnh số lượng và an toàn thao tác xóa sản phẩm trên Mobile
- **Vai trò:** Mobile Customer
- **FR liên quan:** FR-07, FR-20
- **UI/UX principles dự kiến:** P2 (Clarity & Affordance), P7 (Ergonomics), P8 (Error Prevention & Recovery)
- **Nielsen heuristics dự kiến:** N1 (Visibility of system status), N3 (User control and freedom), N5 (Error prevention), N7 (Flexibility and efficiency of use)
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
- Success: Đạt SC-01, SC-02 và SC-03 một cách thuận lợi; điều chỉnh đúng số lượng 3 và xóa món hàng an toàn.
- Partial: Hoàn thành xóa Keychron nhưng gặp trở ngại lớn khi nhập số lượng do thiếu nút bấm stepper (+/-) và phản hồi hệ thống không ổn định, phải xóa gõ lại nhiều lần.
- Fail: Bỏ cuộc giữa chừng do không điều khiển được số lượng trên ô text nhỏ hoặc bấm nhầm xóa mất sản phẩm ngoài ý muốn.
- Invalid: Mất kết nối API máy chủ.

## 5. Câu hỏi sau task

- QD1, QD2 (Độ dễ thao tác và mức độ tự tin khi điều chỉnh giỏ hàng).
- Q02 (Giao diện giỏ hàng có cung cấp điều khiển tăng/giảm trực quan không?), Q04 (Nút xóa có rủi ro gây bấm nhầm không?).
- Q11 và Q12 (Góp ý về cải tiến bộ điều khiển số lượng và an toàn giỏ hàng).

## 6. Ghi chú quan sát cho Reviewer

- **Trọng tâm Usability 1 — Thiếu bộ điều khiển Stepper (+ / -) trên màn hình cảm ứng (N7, P7):** Quan sát sự lóng ngóng của người dùng khi phải chạm vào ô text nhỏ, xóa số cũ và gõ số mới trên bàn phím ảo di động thay vì chỉ cần bấm nút cộng/trừ nhanh.
- **Trọng tâm Usability 2 — Nguy cơ chạm nhầm nút Xóa không có xác nhận (N5, N3):** Quan sát phản ứng bất ngờ hoặc ngập ngừng của người dùng khi nút Xóa màu đỏ nằm ngay sát cạnh món hàng mà không có hộp thoại hỏi lại hay nút hoàn tác.
- **Trọng tâm Usability 3 — Ma sát nhận thức (Cognitive Friction):** Ghi nhận phản ứng bối rối và số lần thử lại khi giá trị hiển thị không phản hồi tức thời theo kỳ vọng của người dùng.
