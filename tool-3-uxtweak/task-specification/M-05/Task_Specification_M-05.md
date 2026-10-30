# Đặc tả Task — M-05: Cập nhật thông tin cá nhân và số điện thoại trên Mobile

> **Vai trò:** Mobile Customer
> **Phạm vi:** Mobile App (React Native / Expo)
> **Nguồn:** EShop FR-03, FR-04, FR-20
> **Trạng thái:** Đặc tả sau phân tích mã nguồn SUT; phát hiện lỗi logic xác thực số điện thoại.

## 1. Thông tin chung

- **Task ID:** M-05
- **Tên task:** Cập nhật thông tin cá nhân và số điện thoại trên Mobile
- **Vai trò:** Mobile Customer
- **FR liên quan:** FR-03, FR-04, FR-20
- **UI/UX principles dự kiến:** P2/P8/P10; **Nielsen heuristics dự kiến:** N2/N5/N9
- **Priority:** P1
- **Phiên bản task:** v1.0
- **Môi trường:** Mobile App (Expo Go); backend tại IP LAN 192.168.10.13:3000

## 2. User task

> Bạn hãy vào mục "Hồ sơ của bạn", cập nhật số điện thoại nhận hàng thành số điện thoại cá nhân của bạn (ví dụ: 0912345678 như gợi ý) và lưu lại thông tin.

## 3. Điều kiện ban đầu (Preconditions)

- **Trạng thái đăng nhập:** Đã đăng nhập tài khoản test: `customer@eshop.com`.
- **Trạng thái ban đầu:** Đang ở màn hình Home, góc trên hiển thị "Chào, Customer".
- **Thông tin có sẵn:** Họ tên và Địa chỉ đã có dữ liệu seed mẫu.

## 4. Tiêu chí thành công

| ID | Điều kiện cần quan sát | Loại | Cách xác minh |
|---|---|---|---|
| SC-01 | Người tham gia mở thành công màn hình Hồ sơ | Outcome | Giao diện hiển thị form thông tin cá nhân |
| SC-02 | Người tham gia nhập số điện thoại định dạng chuẩn Việt Nam (bắt đầu bằng 0) | Outcome | Thao tác nhập liệu trên ô input điện thoại |
| SC-03 | Hệ thống lưu thành công thông tin cập nhật | Usability / Outcome | Nhận thông báo xác nhận lưu thành công |

**Kết quả task:**
- Success: Đạt SC-01, SC-02 và SC-03. *(Lưu ý: Do bug regex `/^[1-9][0-9]{8,9}$/`, nhập số 0 ở đầu sẽ bị app báo lỗi).*
- Partial: Nhập số điện thoại theo chuẩn VN bị lỗi, sau đó phải tự bỏ số 0 ở đầu (hoặc nhập số bắt đầu bằng 1-9) thì mới lưu được.
- Fail: Bị chặn lại ở bước lưu số điện thoại và bỏ cuộc vì liên tục nhận thông báo lỗi "Số điện thoại không hợp lệ".
- Invalid: Mất kết nối backend API.

## 5. Câu hỏi sau task

- QD1, QD2 (Độ dễ và độ tự tin khi cập nhật thông tin cá nhân).
- Q05 (Hệ thống có báo lỗi vô lý không?), Q07 (Thông điệp hướng dẫn có rõ ràng không?).
- Q11 và Q12.

## 6. Ghi chú quan sát cho Reviewer

- **Trọng tâm kiểm thử:** Xung đột giữa placeholder gợi ý `VD: 0912345678` và biểu thức chính quy `/^[1-9][0-9]{8,9}$/` trong hàm `handleUpdateProfile`. Quan sát phản ứng bất ngờ của người dùng khi làm đúng gợi ý mà bị báo lỗi.
