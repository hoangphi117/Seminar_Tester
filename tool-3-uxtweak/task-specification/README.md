# Danh mục Đặc tả Kịch bản Kiểm thử — EShop Mobile App (UXTweak)

> **Phạm vi nghiên cứu:** 8 task kiểm thử trên ứng dụng di động **Mobile App (React Native / Expo)**, tập trung 100% vào đánh giá độ khả dụng (Usability Testing: Công thái học cảm ứng, phản hồi trạng thái, phân cấp thị giác, phòng ngừa lỗi và phục hồi ngõ cụt), không chứa kịch bản kiểm thử bug logic/chức năng.
> **Công cụ hỗ trợ:** UXTweak.
> **Phân công đề tài:** Phân hệ Web (Customer Web & Admin Web) đã được đánh giá ở bài test Tool 2 (UXReality). Thư mục này chuyên biệt hóa cho Mobile App nhằm tránh trùng lặp nội dung.

---

## Danh mục 8 Task Mobile Kiểm thử Usability Chuẩn mực

| Task ID | Vai trò | FR liên quan | Tên nhiệm vụ | Trọng tâm kiểm thử Usability (Thuần UI/UX) | Mức ưu tiên | Thư mục chi tiết |
|---|---|---|---|---|---|---|
| **M-01** | Mobile Customer | FR-05, FR-20 | Tìm sản phẩm AirPods Pro 2 trên Mobile và báo giá | Trải nghiệm tìm kiếm, duyệt danh sách màn hình hẹp, tỉ lệ ảnh (`resizeMode="stretch"`) | **P1** | [M-01/](M-01/Task_Specification_M-01.md) |
| **M-02** | Mobile Customer | FR-06, FR-24 | Thêm AirPods vào giỏ trên Mobile và nhận biết phản hồi | Đánh giá phản hồi thêm giỏ và ma sát từ Alert popup chặn màn hình, thiếu badge giỏ hàng | **P1** | [M-02/](M-02/Task_Specification_M-02.md) |
| **M-03** | Mobile Customer | FR-07, FR-20 | Quản lý giỏ hàng: Điều chỉnh số lượng và xóa món hàng | Công thái học cảm ứng khi thiếu Stepper (+/-), bất ổn định nhập liệu và an toàn thao tác xóa | **P1** | [M-03/](M-03/Task_Specification_M-03.md) |
| **M-04** | Mobile Customer | FR-08, FR-09, FR-20 | Đăng nhập, áp mã SAVE10 và thanh toán đơn hàng | Luồng checkout di động, tính trực quan khi áp coupon, đứt gãy giỏ khi login, thiếu order review | **P1** | [M-04/](M-04/Task_Specification_M-04.md) |
| **M-05** | Mobile Customer | FR-10, FR-11, FR-20 | Tra cứu lịch sử đơn hàng và an toàn thao tác hủy đơn | Quyền tự do và an toàn thao tác: Nút Hủy đơn thiếu Confirm Dialog (Error Prevention) | **P1** | [M-05/](M-05/Task_Specification_M-05.md) |
| **M-06** | Prospective Customer | FR-01, FR-20 | Đăng ký tài khoản mới & Đánh giá trải nghiệm thiết lập mật khẩu | **Form Usability & Error Prevention:** Mật khẩu phức tạp bị che giấu (`secureTextEntry`), thiếu toggle hiện mật khẩu (Eye icon), thiếu checklist inline, nút đỏ | **P1** | [M-06/](M-06/Task_Specification_M-06.md) |
| **M-07** | Mobile Customer | FR-02, FR-20 | Khôi phục mật khẩu qua OTP & Đánh giá phân cấp thị giác nút bấm | **Visual Hierarchy & Action Clarity:** Nút chính "Đặt lại mật khẩu" và nút hủy "← Quay lại" cùng màu xanh lục gây bấm nhầm; trường OTP đơn điệu | **P1** | [M-07/](M-07/Task_Specification_M-07.md) |
| **M-08** | Mobile Customer | FR-05, FR-20 | Khám phá chi tiết sản phẩm & Khả năng thoát khỏi trang rỗng | **Dead-End Recovery & Media Affordance:** Màn hình rỗng không có nút quay lại (bẫy bế tắc người dùng); ảnh méo do stretch; khối mô tả dài không phân tab | **P2** | [M-08/](M-08/Task_Specification_M-08.md) |

---

## Quy tắc thực hiện kịch bản trên Mobile

1. **Một task trên mỗi study:** Mỗi kịch bản cấu hình thành một link study UXTweak độc lập để dữ liệu tap/click và video không bị trộn lẫn.
2. **Không gợi ý thao tác:** Người tham gia chỉ nhận được duy nhất lời nhắc User Task; quan sát viên không chỉ tay vào màn hình hay mớm cách giải quyết.
3. **Môi trường kết nối LAN:** Luôn kiểm tra địa chỉ IP `192.168.10.13:3000` trước phiên test để tránh lỗi rớt mạng API giữa chừng.
4. **Tập trung vào trải nghiệm người dùng:** Ghi nhận chuỗi thao tác, thời gian ngập ngừng, vị trí bấm nhầm, sự bối rối và cảm nhận định tính qua thang đo SEQ/SUS.

---

## Dữ liệu Seed & Quy trình Reset cho Mobile

Backend sử dụng cơ sở dữ liệu `database.sqlite` với 5 sản phẩm công nghệ cơ bản:
* Tai nghe AirPods Pro 2: 6.000.000 đ
* Bàn phím cơ Keychron Q1: 4.000.000 đ
* iPhone 15 Pro Max: 30.000.000 đ
* Samsung Galaxy S24 Ultra: 28.000.000 đ
* MacBook Pro M3: 45.000.000 đ

Lệnh reset database nhanh khi cần:
```powershell
cd eshop-sut/backend
node database.js
node server.js
```
