# Đặc tả Task — M-07: Đăng ký tài khoản mới & Đánh giá trải nghiệm thiết lập mật khẩu trên Mobile

> **Vai trò:** Mobile Visitor / Prospective Customer
> **Phạm vi:** Mobile App (React Native / Expo)
> **Nguồn:** EShop FR-01, FR-20
> **Trọng tâm kiểm thử Usability:** Đánh giá độ khả dụng của biểu mẫu (Form Usability), khả năng phòng ngừa lỗi (Error Prevention) và cơ chế phản hồi thị giác khi nhập mật khẩu phức tạp trên bàn phím di động. Kịch bản kiểm thử thuần trải nghiệm người dùng, không phụ thuộc vào lỗi logic nghiệp vụ.

## 1. Thông tin chung

- **Task ID:** M-07
- **Tên task:** Đăng ký tài khoản mới & Đánh giá trải nghiệm thiết lập mật khẩu trên Mobile
- **Vai trò:** Mobile Customer
- **FR liên quan:** FR-01, FR-20
- **UI/UX principles dự kiến:** P2 (Clarity & Affordance), P3 (Visual Hierarchy), P8 (Error Prevention & Recovery)
- **Nielsen heuristics dự kiến:** N1 (Visibility of system status), N4 (Consistency and standards), N5 (Error prevention), N9 (Help users recognize and recover from errors)
- **Priority:** P1
- **Phiên bản task:** v1.0
- **Môi trường:** Mobile App (Expo Go); backend tại IP LAN 192.168.10.13:3000

## 2. User task

> Bạn là khách hàng mới tải ứng dụng EShop. Từ màn hình Đăng nhập, hãy truy cập mục "Đăng ký ngay", điền họ tên, email cá nhân và tự tạo một mật khẩu bảo mật theo hướng dẫn trên màn hình để tạo tài khoản mới thành công.

## 3. Điều kiện ban đầu (Preconditions)

- **Trạng thái đăng nhập:** Chưa đăng nhập (khách vãng lai).
- **Trạng thái màn hình:** Đang ở màn hình Đăng nhập (Login Screen).
- **Dữ liệu chuẩn bị:** Email thử nghiệm chưa tồn tại trong cơ sở dữ liệu (`newuser_p01@eshop.com`, ...).

## 4. Tiêu chí thành công

| ID | Điều kiện cần quan sát | Loại | Cách xác minh |
|---|---|---|---|
| SC-01 | Người tham gia định vị và chạm đúng liên kết "Đăng ký ngay" tại màn hình đăng nhập | Navigation / Affordance | Màn hình chuyển sang giao diện "Đăng Ký Tài Khoản" |
| SC-02 | Người tham gia điền đầy đủ Họ tên, Email hợp lệ | Form Input | Các trường Họ tên và Email được điền đầy đủ |
| SC-03 | Người tham gia thiết lập mật khẩu thỏa mãn chính sách bảo mật mà không cần hỗ trợ | Usability / Error Prevention | Nhập mật khẩu gồm chữ hoa, thường, số, ký tự đặc biệt |
| SC-04 | Người tham gia bấm nút "Đăng Ký" và nhận diện thông báo thành công | Feedback / System Status | Màn hình hiển thị popup "Đăng ký tài khoản thành công" và chuyển về màn hình đăng nhập |

**Phân loại kết quả task:**
- **Success:** Đạt đầy đủ SC-01, SC-02, SC-03 và SC-04 trong vòng dưới 45 giây, không gặp lỗi gõ sai mật khẩu quá 1 lần.
- **Partial:** Hoàn thành đăng ký nhưng phải gõ lại mật khẩu từ 2 lần trở lên do nhập sai ký tự đặc biệt/viết hoa (bị che bởi dấu chấm mà không có nút hiển thị mật khẩu) hoặc gặp khó khăn khi bàn phím che nút bấm.
- **Fail:** Bỏ cuộc giữa chừng sau nhiều lần nhận thông báo lỗi "Mật khẩu quá yếu!" mà không biết cụ thể mình gõ sai ký tự nào.
- **Invalid:** Mất kết nối mạng LAN đến backend.

## 5. Câu hỏi khảo sát sau task

- **QD1:** Đánh giá mức độ dễ dàng khi hoàn tất biểu mẫu đăng ký (Thang điểm 1 Rất dễ -> 5 Rất khó).
- **QD2:** Mức độ tự tin của bạn khi gõ mật khẩu trên màn hình (Thang điểm 1 Rất không tự tin -> 5 Rất tự tin).
- **Q05:** Biểu mẫu có chỉ rõ cho bạn biết mật khẩu đang thiếu yêu cầu nào trước khi bấm gửi không?
- **Q08:** Việc không có nút "Hiện mật khẩu" (biểu tượng con mắt) ảnh hưởng như thế nào đến trải nghiệm của bạn?
- **Q11, Q12:** Ghi nhận góp ý mở về trải nghiệm biểu mẫu di động.

## 6. Ghi chú quan sát chuyên sâu cho Reviewer

- **Trọng tâm Usability 1 — Thiếu tính năng Toggle Show/Hide Password (N5, N1):**
  Trường mật khẩu sử dụng thuộc tính `secureTextEntry={true}` nhưng **hoàn toàn không có icon con mắt** để người dùng kiểm tra lại mật khẩu vừa gõ. Trên bàn phím ảo smartphone màn hình nhỏ, phím ký tự đặc biệt nằm ở tầng ký tự thứ 2, người dùng rất dễ gõ nhầm nhưng không thể biết mình gõ ký tự nào.
- **Trọng tâm Usability 2 — Thiếu phản hồi inline thời gian thực (N1, N9):**
  Ứng dụng không có thanh đo độ mạnh mật khẩu (Password Strength Bar) hay danh sách checklist quy tắc chuyển màu xanh khi thỏa mãn. Người dùng chỉ biết mình thiếu điều kiện sau khi đã bấm nút "Đăng Ký" và nhận khối thông báo lỗi đỏ.
- **Trọng tâm Usability 3 — Vi phạm phân cấp thị giác màu nút (P3, N4):**
  Nút chính "Đăng Ký" được gán kiểu `styles.redButton` (màu đỏ rực). Theo quy ước thiết kế chuẩn (Mental Model), màu đỏ đại diện cho hành động nguy hiểm/xóa dữ liệu (Destructive action), gây tâm lý do dự và bất an cho người dùng mới.
