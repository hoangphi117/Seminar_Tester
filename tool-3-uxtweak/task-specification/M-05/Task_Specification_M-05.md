# Đặc tả Task — M-05: Tra cứu lịch sử đơn hàng và hủy đơn trên Mobile

> **Vai trò:** Mobile Customer
> **Phạm vi:** Mobile App (React Native / Expo)
> **Nguồn:** EShop FR-10, FR-11, FR-20
> **Trạng thái:** Đặc tả sau phân tích mã nguồn SUT; phát hiện lỗi thiếu bảo vệ an toàn thao tác.

## 1. Thông tin chung

- **Task ID:** M-05
- **Tên task:** Tra cứu lịch sử đơn hàng và hủy đơn hàng đang chờ trên Mobile
- **Vai trò:** Mobile Customer
- **FR liên quan:** FR-10, FR-11, FR-20
- **UI/UX principles dự kiến:** P5/P8/P10; **Nielsen heuristics dự kiến:** N1/N3/N5
- **Priority:** P1
- **Phiên bản task:** v1.0
- **Môi trường:** Mobile App (Expo Go); backend tại IP LAN 192.168.10.13:3000

## 2. User task

> Bạn hãy vào mục "Lịch sử đơn hàng" trong hồ sơ cá nhân, tìm đơn hàng đang ở trạng thái "Chờ xác nhận" và thực hiện thao tác hủy đơn hàng đó.

## 3. Điều kiện ban đầu (Preconditions)

- **Trạng thái đăng nhập:** Đã đăng nhập tài khoản `customer@eshop.com`.
- **Dữ liệu có sẵn:** Tài khoản đã có sẵn ít nhất 1 đơn hàng ở trạng thái `pending` (Chờ xác nhận) vừa tạo từ task M-04.
- **Trạng thái ban đầu:** Đang mở màn hình Hồ sơ cá nhân.

## 4. Tiêu chí thành công

| ID | Điều kiện cần quan sát | Loại | Cách xác minh |
|---|---|---|---|
| SC-01 | Người tham gia định vị đúng đơn hàng có trạng thái "Chờ xác nhận" | Outcome | Quan sát màn hình lịch sử đơn hàng |
| SC-02 | Người tham gia bấm nút "Hủy đơn" | Outcome | Thao tác chạm nút đỏ Hủy đơn |
| SC-03 | Đơn hàng đổi trạng thái sang "Đã hủy" có thông báo rõ ràng | Usability / Integrity | Trạng thái đơn cập nhật thành công |

**Kết quả task:**
- Success: Đạt SC-01, SC-02 và SC-03.
- Partial: Hủy được đơn nhưng giật mình hoặc phản ánh bất an vì không có bước hỏi xác nhận xác nhận hủy.
- Fail: Bấm nhầm sang đơn hàng khác hoặc không tìm thấy danh sách đơn hàng.
- Invalid: Backend API gặp sự cố.

## 5. Câu hỏi sau task

- QD1, QD2 (Độ dễ thao tác và mức độ an tâm khi quản lý đơn hàng).
- Q03 (Thao tác có cho phép kiểm soát an toàn không?), Q04 (Hệ thống có cảnh báo trước khi xóa/hủy không?).
- Q11 và Q12.

## 6. Ghi chú quan sát cho Reviewer

- **Trọng tâm kiểm thử:** Nút `smallRedButton` ("Hủy đơn") trong `App.js` gọi thẳng hàm `cancelOrder(o.id)` mà **không hề hiển thị Confirmation Dialog**. Quan sát biểu cảm giật mình của người dùng khi một cú chạm tay duy nhất đã hủy ngay đơn hàng trị giá hàng chục triệu đồng.
