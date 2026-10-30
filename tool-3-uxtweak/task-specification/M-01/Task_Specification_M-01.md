# Đặc tả Task — M-01: Tìm sản phẩm trên Mobile và xác định giá

> **Vai trò:** Mobile Customer
> **Phạm vi:** Mobile App (React Native / Expo)
> **Nguồn:** EShop FR-05, FR-20
> **Trạng thái:** Đặc tả trước pilot; kế thừa phương pháp từ bộ task Customer Web.

## 1. Thông tin chung

- **Task ID:** M-01
- **Tên task:** Tìm sản phẩm Tai nghe AirPods Pro 2 trên Mobile và xác định giá
- **Vai trò:** Mobile Customer
- **FR liên quan:** FR-05, FR-20
- **UI/UX principles dự kiến:** P2/P3/P7; **Nielsen heuristics dự kiến:** N2/N6/N7/N8
- **Priority:** P1
- **Phiên bản task:** v1.0
- **Môi trường:** Mobile App chạy trên Expo Go hoặc trình duyệt mobile; backend tại IP LAN 192.168.10.13:3000

## 2. User task

> Bạn hãy tìm sản phẩm "Tai nghe AirPods Pro 2" trên ứng dụng điện thoại và cho biết giá hiển thị của sản phẩm đó.

Lời nhiệm vụ trên là thông tin duy nhất được đưa cho người tham gia. Không chỉ định vị trí tìm kiếm hoặc cách cuộn.

## 3. Điều kiện ban đầu (Preconditions)

- **Trạng thái đăng nhập:** Chưa đăng nhập; task không yêu cầu xác thực.
- **Dữ liệu cần có:** Dữ liệu seed chuẩn — 5 sản phẩm bao gồm "Tai nghe AirPods Pro 2" giá 6.000.000 đ.
- **Trạng thái ban đầu:** App đã mở, hiển thị màn hình Home với danh sách sản phẩm đã tải xong.
- **Reset trước phiên:** Khởi động lại backend (`node server.js`), xác nhận API `/api/products` trả về 5 sản phẩm; mở Expo Go và tải app; xác nhận danh sách hiển thị đầy đủ.
- **Thông tin không được cung cấp trước:** Giá của AirPods Pro 2 và vị trí trong danh sách.

## 4. Tiêu chí thành công

| ID | Điều kiện cần quan sát | Loại | Cách xác minh |
|---|---|---|---|
| SC-01 | Người tham gia tìm thấy sản phẩm "Tai nghe AirPods Pro 2" trên màn hình | Outcome | Quan sát màn hình / session recording |
| SC-02 | Người tham gia báo đúng giá 6.000.000 đ đang hiển thị | Usability | Lời nói cuối cùng / khảo sát |

**Kết quả task:**
- Success: Đạt SC-01 và SC-02 trong thời lượng cho phép, không cần trợ giúp nội dung.
- Partial: Tìm thấy sản phẩm nhưng báo sai giá, hoặc mất quá nhiều thời gian do danh sách hiển thị lỗi.
- Fail: Không tìm thấy sản phẩm hoặc báo sai giá sau khi đã có cơ hội kiểm tra lại.
- Invalid: Backend không chạy, app không tải được danh sách sản phẩm, hoặc người tham gia không thực hiện task.

## 5. Câu hỏi sau task

- QD1, QD2 xuất hiện ở mọi task.
- Q06 (Dễ dàng tìm thấy sản phẩm mong muốn?), Q07 (Thông tin giá rõ ràng?), Q08 (Bố cục danh sách hợp lý?).
- Q11 (Vấn đề gặp phải — multi-choice) và Q12 (Mức độ ảnh hưởng — single-choice).

## 6. Ghi chú quan sát cho Reviewer

- Để ý xem người dùng có nhận xét gì về hình ảnh sản phẩm bị méo do thuộc tính `resizeMode="stretch"` hay không.
