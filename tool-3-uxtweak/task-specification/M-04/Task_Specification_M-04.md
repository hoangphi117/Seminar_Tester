# Đặc tả Task — M-04: Đăng nhập, áp mã giảm giá và thanh toán trên Mobile

> **Vai trò:** Mobile Customer
> **Phạm vi:** Mobile App (React Native / Expo)
> **Nguồn:** EShop FR-08, FR-09, FR-20
> **Trạng thái:** Đặc tả trước pilot; kiểm thử luồng checkout hoàn chỉnh trên di động.

## 1. Thông tin chung

- **Task ID:** M-04
- **Tên task:** Đăng nhập, áp mã SAVE10 và thanh toán đơn hàng trên Mobile
- **Vai trò:** Mobile Customer
- **FR liên quan:** FR-08, FR-09, FR-20
- **UI/UX principles dự kiến:** P1/P2/P6; **Nielsen heuristics dự kiến:** N1/N5/N9/N10
- **Priority:** P1
- **Phiên bản task:** v1.0
- **Môi trường:** Mobile App (Expo Go); backend tại IP LAN 192.168.10.13:3000

## 2. User task

> Bạn hãy đăng nhập tài khoản khách hàng, áp mã giảm giá "SAVE10" vào đơn hàng và hoàn tất thủ tục thanh toán bằng hình thức COD (thanh toán khi nhận hàng).

## 3. Điều kiện ban đầu (Preconditions)

- **Tài khoản:** Đã tạo sẵn tài khoản test trên backend: `customer@eshop.com` / `123456`.
- **Giỏ hàng:** Đang có ít nhất 2 sản phẩm trong giỏ (tổng tiền > 300.000 đ đủ điều kiện áp mã SAVE10).
- **Reset trước phiên:** Đảm bảo coupon SAVE10 chưa hết hạn và user test chưa bị khóa.

## 4. Tiêu chí thành công

| ID | Điều kiện cần quan sát | Loại | Cách xác minh |
|---|---|---|---|
| SC-01 | Đăng nhập thành công vào tài khoản | Outcome | Token lưu vào state, chuyển sang màn hình checkout |
| SC-02 | Áp dụng mã SAVE10 thành công và thấy số tiền giảm 10% | Outcome / Usability | Dòng giảm giá hiển thị trên tổng tiền |
| SC-03 | Hoàn tất tạo đơn hàng với thông báo xác nhận thành công | Outcome | Màn hình Order Confirmation hiển thị mã đơn |

**Kết quả task:**
- Success: Đạt cả 3 tiêu chí SC-01, SC-02, SC-03.
- Partial: Đăng nhập và áp mã được nhưng gặp khó khăn ở khâu nhập thông tin giao hàng (SĐT / địa chỉ) hoặc gặp bất tiện khi bị bắt đăng nhập làm gián đoạn luồng mua sắm.
- Fail: Không thanh toán được hoặc thất bại ở bước xác thực.
- Invalid: Mất kết nối API backend trong lúc tạo đơn.

## 5. Câu hỏi sau task

- QD1, QD2 (Độ khó và độ tin tưởng của luồng thanh toán).
- Q08 (Quy trình thanh toán có rõ ràng, minh bạch không?), Q09 (Thông tin giảm giá có chính xác không?).
- Q11 và Q12.

## 6. Ghi chú quan sát cho Reviewer

- Kiểm tra xem người dùng có nhập đúng định dạng số điện thoại (10 chữ số) không; quan sát trải nghiệm chuyển đổi khi yêu cầu đăng nhập và tính minh bạch của thông tin giảm giá.
