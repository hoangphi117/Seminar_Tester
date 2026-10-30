# Data Result — M-04: Áp dụng coupon và thanh toán trên Mobile

> **Task ID:** M-04 | **Vai trò:** Mobile Customer

## 1. Thông tin dữ liệu

| Trường | Giá trị |
|---|---|
| Số người (n) | 7 |
| Môi trường | Expo Go; đăng nhập customer@eshop.com; giỏ hàng AirPods x2 = 12.000.000 đ; coupon SAVE10 chưa dùng |

### Ghi chú SUT — Bug nghiêm trọng

- **Bug mất sản phẩm cuối (handleConfirmCheckout):** `cart.slice(0, -1)` — nếu giỏ >= 2 món thì đơn hàng tạo ra bị mất món cuối cùng.
  - Trong task này chỉ có 1 loại sản phẩm (AirPods x2) => bug này không kích hoạt ở phiên này vì `cart.length = 1`, app gửi cart nguyên vẹn (`cart.length > 1 ? cart.slice(0, -1) : cart`).
  - Ghi nhận lỗi nghiêm trọng để kiến nghị fix ngay cho các đơn hàng nhiều món.
- **Công thức coupon SAVE10:** 12.000.000 * 10% = 1.200.000 đ giảm; còn 10.800.000 đ. Backend tính đúng.

## 2. Kết quả từng người

| Participant | Outcome | SC-01 | SC-02 | SC-03 | Time | Errors | Assist | QD1 | Ghi chú hành vi |
|---|---|---|---|---|---|---|---|---|---|
| M04-P01 | Success | OK | OK | OK | 52s | 0 | 0 | 2 | Đăng nhập trôi chảy, nhập SAVE10 giảm đúng 10%, bấm thanh toán thành công. |
| M04-P02 | Partial | OK | OK | OK | 95s | 2 | 0 | 3 | Thanh toán thành công nhưng nhận xét màn hình Lịch sử đơn hàng thiếu chi tiết. |
| M04-P03 | Success | OK | OK | OK | 46s | 0 | 0 | 2 | Nhập mã thành công, thanh toán nhanh. |
| M04-P04 | Partial | OK | OK | OK | 88s | 1 | 0 | 3 | Bấm thanh toán trước khi đăng nhập, bị văng sang Login mà không lưu giỏ — phải đăng nhập rồi thêm lại từ đầu. |
| M04-P05 | Success | OK | OK | OK | 55s | 0 | 0 | 2 | Hoàn thành thanh toán coupon. |
| M04-P06 | Partial | OK | Partial | OK | 92s | 2 | 0 | 3 | Áp mã OK, nhưng bối rối vì dấu phân cách tiền tệ (dấu phẩy vs dấu chấm); chấp nhận đúng sau khi giải thích. |
| M04-P07 | Success | OK | OK | OK | 58s | 0 | 0 | 2 | Đăng nhập trôi chảy, áp SAVE10 thành công, hoàn tất đặt hàng COD. |

## 3. Câu trả lời khảo sát

| Participant | QD1 | QD2 | Q01 | Q02 | Q10 | Q11 | Q12 |
|---|---|---|---|---|---|---|---|
| M04-P01 | 2 | 4 | 4 | 5 | 3 | Không gặp vấn đề nào | Trạng thái / phản hồi |
| M04-P02 | 3 | 3 | 3 | 4 | 3 | Hệ thống không rõ đang xử lý hay đã hoàn tất | Tính minh bạch |
| M04-P03 | 2 | 5 | 4 | 5 | 4 | Không gặp vấn đề nào | Không có vấn đề đáng kể |
| M04-P04 | 3 | 3 | 3 | 4 | 2 | Khó quay lại, hủy hoặc sửa thao tác | Quyền kiểm soát |
| M04-P05 | 2 | 4 | 4 | 5 | 3 | Không gặp vấn đề nào | Không có vấn đề đáng kể |
| M04-P06 | 3 | 3 | 4 | 4 | 3 | Không hiểu nhãn, biểu tượng hoặc thuật ngữ | Ngôn ngữ / tính dễ hiểu |
| M04-P07 | 2 | 4 | 4 | 5 | 3 | Không gặp vấn đề nào | Không có vấn đề đáng kể |

## 4. Bảng tổng hợp

| Chỉ số | Giá trị |
|---|---|
| Success | 4 / 7 (57.1%) |
| Partial | 3 / 7 (42.9%) |
| Fail | 0 / 7 (0.0%) |
| Completion time — mean | 69.4s |
| Completion time — median | 58.0s |
| Observable errors — mean | 0.71 lỗi/lượt |
| Assistance required | 0 / 7 (0.0%) |
| QD1 mean | 2.43 |
| QD2 mean | 3.71 |
