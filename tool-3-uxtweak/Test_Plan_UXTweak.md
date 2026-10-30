# Kế hoạch Kiểm thử (Test Plan) — UXTweak cho EShop Mobile App

> **Loại tài liệu:** Kế hoạch nghiên cứu Usability Testing trên nền tảng di động.
> **Phân hệ mục tiêu:** **Mobile App (React Native / Expo)**.
> **Phiên bản:** 2.3 — Khảo sát toàn diện 8 kịch bản kiểm thử độ khả dụng (Usability Testing) thuần túy trên Mobile App.
> **Khung phân tích chuẩn:** 10 Nguyên tắc Thiết kế UI/UX (P1–P10) và 10 Heuristic của Nielsen (N1–N10).

---

## 1. Mục đích & Phạm vi tài liệu

Tài liệu này xác định mục tiêu, đối tượng, môi trường kiểm thử, danh mục **8 kịch bản task kiểm thử Usability** (M-01 → M-08), hệ thống chỉ số đo lường và quy trình vận hành nghiên cứu Usability Testing cho ứng dụng di động **EShop Mobile App** bằng công cụ **UXTweak**.

Phân hệ Web (Customer Web và Admin Web) đã được hoàn thành đánh giá độc lập bởi **Tool 2 (UXReality)**. Kế hoạch này tập trung 100% nguồn lực vào việc đánh giá trải nghiệm người dùng trên thiết bị di động, bao quát từ khâu tìm kiếm, mua hàng, thanh toán đến biểu mẫu đăng ký, khôi phục mật khẩu và phục hồi điều hướng.

---

## 2. Bối cảnh Hệ thống EShop Mobile

* **Mã nguồn Mobile:** Thư mục `eshop-sut/frontend-mobile` (xây dựng bằng React Native và Expo).
* **Môi trường kết nối:** Ứng dụng chạy trên thiết bị smartphone thật qua ứng dụng Expo Go hoặc trình duyệt di động, kết nối trực tiếp đến Backend API qua địa chỉ IP LAN cố định `192.168.10.13:3000`.
* **Cơ sở dữ liệu:** SQLite backend đồng bộ, chứa dữ liệu seed chuẩn 5 mặt hàng công nghệ.

---

## 3. Khung đánh giá UI/UX làm kim chỉ nam

### 3.1. Các nguyên tắc UI/UX Design Principles (P1–P10) trọng tâm cho Mobile:
* **P1 (Task Fit):** Khách hàng có hoàn tất được toàn bộ chu trình mua hàng và quản lý tài khoản trên điện thoại không?
* **P2 (Clarity & Affordance):** Nhãn nút, biểu tượng giỏ hàng, ô nhập mật khẩu và hình ảnh sản phẩm có hiển thị trực quan, đúng tỉ lệ không?
* **P3 (Visual Hierarchy):** Các nút bấm chính/phụ (Primary vs Secondary CTA) có được phân cấp rõ ràng để tránh bấm nhầm không?
* **P5 (Feedback & Guidance):** Thao tác thêm vào giỏ, nhập mật khẩu có đưa ra phản hồi kịp thời, không gây ức chế?
* **P7 (Ergonomics):** Vị trí và kích thước các nút bấm có thuận tiện cho ngón tay cái thao tác trên màn hình cảm ứng không?
* **P8 (Error Prevention & Recovery):** Ứng dụng có bảo vệ người dùng trước việc chạm nhầm nút xóa, vô tình hủy đơn, gõ sai mật khẩu ẩn hoặc kẹt vào màn hình ngõ cụt?
* **P10 (Trust & Transparency):** Giá tiền, tiền giảm giá coupon và thông tin đơn hàng có hoàn toàn minh bạch, chính xác?

### 3.2. Hệ thống 10 Nielsen Heuristics (N1–N10):
Đặc biệt quan sát: **N1** (Hiển thị trạng thái hệ thống), **N2** (Khớp với thực tế), **N3** (Quyền tự do và kiểm soát của người dùng), **N4** (Tính nhất quán và tiêu chuẩn), **N5** (Ngăn ngừa lỗi), **N7** (Linh hoạt và hiệu quả sử dụng), **N8** (Thiết kế thẩm mỹ & tối giản) và **N9** (Giúp người dùng nhận biết và khắc phục lỗi).

---

## 4. Danh mục 8 Kịch bản Kiểm thử Hành trình Di động (Pure Usability Tasks)

| Task ID | Mã FR liên quan | Tên nhiệm vụ | Trọng tâm kiểm chứng Usability thuần túy | Mức ưu tiên |
|---|---|---|---|---|
| **M-01** | FR-05, FR-20 | Tìm kiếm sản phẩm & Báo giá trên Mobile | Bố cục danh sách & tìm kiếm màn hình nhỏ; quan sát ảnh méo do `resizeMode="stretch"`. | **P1 (Core)** |
| **M-02** | FR-06, FR-24 | Thêm sản phẩm vào giỏ hàng Mobile | Đánh giá phản hồi thao tác; ma sát do popup `Alert.alert` chặn màn hình, thiếu badge giỏ hàng. | **P1 (Core)** |
| **M-03** | FR-07, FR-20 | Quản lý giỏ hàng: Chỉnh số lượng & Xóa món | Công thái học cảm ứng khi thiếu Stepper (+/-), bất ổn định nhập liệu và an toàn thao tác xóa. | **P1 (Core)** |
| **M-04** | FR-08, FR-09, FR-20 | Đăng nhập, áp coupon & Thanh toán | Luồng checkout di động: áp mã SAVE10, đứt gãy giỏ khi login, thiếu màn hình review đơn hàng. | **P1 (Core)** |
| **M-05** | FR-10, FR-11, FR-20 | Tra cứu lịch sử & An toàn hủy đơn | Quyền kiểm soát và an toàn thao tác: Nút Hủy đơn thực thi ngay, hoàn toàn thiếu Confirm Dialog. | **P1 (Core)** |
| **M-06** | FR-01, FR-20 | Đăng ký tài khoản & Đánh giá nhập mật khẩu | **Form Usability & Error Prevention:** Mật khẩu phức tạp bị che giấu (`secureTextEntry`), hoàn toàn thiếu toggle con mắt ẩn/hiện, thiếu phản hồi inline, nút màu đỏ gây hoang mang. | **P1 (Usability)** |
| **M-07** | FR-02, FR-20 | Khôi phục mật khẩu & Đánh giá phân cấp thị giác | **Visual Hierarchy & Action Clarity:** Nút chính "Đặt lại mật khẩu" và nút hủy "← Quay lại" dùng chung màu xanh lục đậm gây bấm nhầm; trường OTP đơn điệu thiếu đếm ngược. | **P1 (Usability)** |
| **M-08** | FR-05, FR-20 | Khám phá chi tiết sản phẩm & Phục hồi trang rỗng | **Dead-End Recovery & Media Affordance:** Màn hình rỗng không có nút quay lại (bẫy bế tắc người dùng); ảnh méo do stretch; khối mô tả dài không phân đoạn tab. | **P2 (Usability)** |

---

## 5. Người tham gia & Quy mô mẫu

* **Số lượng người tham gia:** **7 người dùng thực tế (ký hiệu P01 → P07)**.
* **Đặc điểm mẫu:** Sở hữu smartphone Android/iOS cá nhân, thường xuyên mua sắm online trên app di động, thao tác công nghệ độc lập.
* **Quy mô thực nghiệm:** 7 người × 8 task = **56 lượt task sessions hoàn chỉnh**.
* **Đảm bảo tính khoa học:** Theo nghiên cứu của Nielsen Norman Group, thử nghiệm lặp lại với 7 người dùng trên cùng một nền tảng cho phép bộc lộ trên 85% các khiếm khuyết usability cốt lõi của sản phẩm.

---

## 6. Môi trường & Quy trình Reset an toàn

1. **Khởi động Backend:** Chạy `node server.js` tại `eshop-sut/backend` trên máy trạm IP LAN `192.168.10.13`.
2. **Kiểm tra kết nối mạng:** Mở trình duyệt điện thoại tester truy cập `http://192.168.10.13:3000/api/products`.
3. **Mở App qua Expo Go:** Quét mã QR Expo để nạp ứng dụng.
4. **Quy trình reset trước mỗi phiên:** Đảm bảo database ở trạng thái chuẩn, coupon `SAVE10` sẵn sàng, và giỏ hàng/đơn hàng được thiết lập đúng điều kiện ban đầu của từng task.
