# Data Result — M-03: Điều chỉnh số lượng và xóa sản phẩm trong giỏ Mobile

> **Task ID:** M-03 | **Vai trò:** Mobile Customer

## 1. Thông tin dữ liệu

| Trường | Giá trị |
|---|---|
| Số người (n) | 7 |
| Môi trường | Expo Go; giỏ hàng setup trước với AirPods x2 + Keychron x1 |

### Ghi chú SUT — Phân tích khiếm khuyết Usability & Trở ngại tương tác

- **Thiếu bộ điều khiển Stepper (+ / -) trên cảm ứng:** Ô nhập số lượng chỉ là một `TextInput` nhỏ, người dùng buộc phải chạm vào ô hẹp, đợi bàn phím số nảy lên, xóa số cũ rồi gõ số mới; hoàn toàn thiếu cặp nút bấm tăng/giảm nhanh bằng 1 chạm theo chuẩn thiết kế di động (N7, P7).
- **Nút Xóa thiếu rào cản phòng ngừa lỗi (N5, N3):** Nút "Xóa" màu đỏ nằm ngay sát mép thẻ sản phẩm, khi chạm vào là xóa món hàng ngay lập tức mà không có Dialog xác nhận hay nút Hoàn tác (Undo), rất dễ gây xóa nhầm khi vuốt cuộn màn hình.
- **Ma sát nhận thức nghiêm trọng (Cognitive Friction):** Hệ thống không phản hồi chính xác giá trị người dùng vừa gõ (nhảy số lượng `parsed + 1`), khiến người dùng mất phương hướng, bối rối và xóa đi gõ lại nhiều lần.

## 2. Kết quả từng người

| Participant | Outcome | SC-01 | SC-02 | Time | Errors | Assist | QD1 | Ghi chú hành vi |
|---|---|---|---|---|---|---|---|---|
| M03-P01 | Partial | Partial | OK | 85s | 3 | 0 | 4 | Gõ 3 ra 4, xóa đi gõ lại 3 lần vẫn ra 4. Xóa Keychron không hỏi xác nhận làm bất ngờ. Cuối cùng bỏ cuộc số lượng, để nguyên 4. |
| M03-P02 | Fail | FAIL | OK | 110s | 4 | 1 | 5 | Bất lực với ô số lượng vì gõ số nào cũng bị cộng thêm 1. Bỏ cuộc không chỉnh được 3. Xóa Keychron thành công. Cần trợ giúp từ moderator. |
| M03-P03 | Partial | Partial | OK | 72s | 2 | 0 | 4 | Phát hiện workaround: gõ 2 sẽ ra 3 (đúng ý). Xóa item thành công nhưng giật mình vì không có dialog hỏi lại. |
| M03-P04 | Fail | FAIL | OK | 120s | 3 | 1 | 5 | Tưởng bàn phím nhảy double số, cần moderator giải thích. Xóa Keychron thành công. |
| M03-P05 | Partial | Partial | OK | 90s | 3 | 0 | 4 | Chấp nhận để số lượng là 4 vì không tài nào set về 3 được. Xóa Keychron thành công. |
| M03-P06 | Partial | Partial | OK | 80s | 2 | 0 | 4 | Thử đi thử lại ô số lượng, bối rối cao độ. Cuối cùng dùng workaround gõ 2 ra 3. Xóa OK. |
| M03-P07 | Partial | Partial | OK | 88s | 3 | 0 | 4 | Gõ số 3 bị nhảy thành 4, xóa gõ lại 2 lần vẫn thành 4, bất đắc dĩ để số lượng là 4; xóa Keychron thành công. |

## 3. Câu trả lời khảo sát

| Participant | QD1 | QD2 | Q01 | Q03 | Q05 | Q11 | Q12 |
|---|---|---|---|---|---|---|---|
| M03-P01 | 4 | 2 | 2 | 2 | 1 | Thành phần hoặc hành vi không nhất quán; Hệ thống không rõ đang xử lý hay đã hoàn tất | Ngăn ngừa lỗi |
| M03-P02 | 5 | 1 | 1 | 2 | 1 | Thành phần hoặc hành vi không nhất quán; Có quá nhiều bước hoặc thao tác | Ngăn ngừa lỗi |
| M03-P03 | 4 | 3 | 2 | 2 | 2 | Thành phần hoặc hành vi không nhất quán | Ngăn ngừa lỗi |
| M03-P04 | 5 | 1 | 1 | 1 | 1 | Thành phần hoặc hành vi không nhất quán; Có quá nhiều bước hoặc thao tác | Ngăn ngừa lỗi |
| M03-P05 | 4 | 2 | 2 | 2 | 1 | Hệ thống không rõ đang xử lý hay đã hoàn tất | Ngăn ngừa lỗi |
| M03-P06 | 4 | 3 | 2 | 2 | 2 | Thành phần hoặc hành vi không nhất quán | Ngăn ngừa lỗi |
| M03-P07 | 4 | 2 | 2 | 2 | 1 | Thành phần hoặc hành vi không nhất quán | Ngăn ngừa lỗi |

## 4. Bảng tổng hợp

| Chỉ số | Giá trị |
|---|---|
| Success | 0 / 7 (0.0%) ⚠️ |
| Partial | 5 / 7 (71.4%) |
| Fail | 2 / 7 (28.6%) |
| Completion time — mean | 92.1s |
| Completion time — median | 88.0s |
| Observable errors — mean | 2.86 lỗi/lượt |
| Assistance required | 2 / 7 (28.6%) |
| QD1 mean (Độ dễ: 1 Rất dễ -> 5 Rất khó) | 4.29 (Rất khó) |
| QD2 mean (Mức tự tin: 1 Rất không -> 5 Rất tự tin) | 2.0 (Rất thấp) |
