# Đặc tả Task — M-02: Thêm sản phẩm vào giỏ trên Mobile và nhận biết phản hồi

> **Vai trò:** Mobile Customer
> **Phạm vi:** Mobile App (React Native / Expo)
> **Nguồn:** EShop FR-06, FR-24
> **Trạng thái:** Đặc tả trước pilot; kế thừa phương pháp từ C-02.

## 1. Thông tin chung

- **Task ID:** M-02
- **Tên task:** Thêm sản phẩm Tai nghe AirPods Pro 2 vào giỏ trên Mobile và nhận biết phản hồi
- **Vai trò:** Mobile Customer
- **FR liên quan:** FR-06, FR-24
- **UI/UX principles dự kiến:** P1/P4/P7; **Nielsen heuristics dự kiến:** N1/N4/N8
- **Priority:** P1
- **Phiên bản task:** v1.0
- **Môi trường:** Mobile App (Expo Go); backend tại IP LAN 192.168.10.13:3000

## 2. User task

> Bạn hãy thêm sản phẩm "Tai nghe AirPods Pro 2" vào giỏ hàng và cho biết ứng dụng có thông báo gì sau khi bấm nút.

## 3. Điều kiện ban đầu (Preconditions)

- **Trạng thái đăng nhập:** Chưa bắt buộc đăng nhập (giỏ hàng lưu state local trên mobile).
- **Dữ liệu cần có:** 5 sản phẩm seed chuẩn; giỏ hàng ban đầu trống (empty).
- **Trạng thái ban đầu:** Đang ở màn hình chi tiết sản phẩm hoặc danh sách sản phẩm.
- **Reset trước phiên:** Xóa giỏ hàng hiện tại bằng cách khởi động lại app hoặc bấm xóa hết món hàng.

## 4. Tiêu chí thành công

| ID | Điều kiện cần quan sát | Loại | Cách xác minh |
|---|---|---|---|
| SC-01 | Người tham gia bấm thành công nút "Thêm vào giỏ" cho AirPods Pro 2 | Outcome | Quan sát màn hình / session recording |
| SC-02 | Người tham gia nhận biết được thông báo thành công (Alert modal bật lên) | Usability | Lời nói / khảo sát |

**Kết quả task:**
- Success: Đạt cả SC-01 và SC-02 mà không bị nhầm lẫn.
- Partial: Thêm được nhưng không chắc chắn đã vào giỏ do phản hồi dạng Alert modal che khuất giao diện.
- Fail: Không bấm được nút thêm hoặc bỏ dở giữa chừng.
- Invalid: App bị crash hoặc mất kết nối mạng LAN đến backend.

## 5. Câu hỏi sau task

- QD1, QD2 đánh giá độ khó và độ tự tin.
- Q01 (Phản hồi hệ thống có tức thời không?), Q04 (Thông báo có gây gián đoạn thao tác không?).
- Q11 và Q12.

## 6. Ghi chú quan sát cho Reviewer

- Ghi nhận trải nghiệm của người dùng khi gặp `Alert.alert` chặn toàn bộ thao tác thay vì thông báo dạng Toast nhẹ nhàng.
