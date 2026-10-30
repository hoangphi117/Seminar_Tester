# Data Result — M-06: Tra cứu lịch sử đơn hàng và hủy đơn trên Mobile

> **Task ID:** M-06 | **Vai trò:** Mobile Customer
> **Nguồn spec:** Task_Specification_M-06.md

## 1. Thông tin dữ liệu

| Trường | Giá trị |
|---|---|
| Task ID | M-06 |
| Số người (n) | 7 |
| Môi trường | Expo Go; tài khoản customer@eshop.com; có sẵn đơn hàng pending |

### Ghi chú code SUT — Khiếm khuyết an toàn thao tác

- **Hủy đơn không có Dialog xác nhận (`App.js`):**
  ```javascript
  {(o.status === "pending" || o.status === "confirmed") && (
    <TouchableOpacity
      style={styles.smallRedButton}
      onPress={() => cancelOrder(o.id)}
    >
      <Text style={styles.smallButtonText}>Hủy đơn</Text>
    </TouchableOpacity>
  )}
  ```
  Nút màu đỏ nằm sát mép thẻ đơn hàng. Khi người dùng bấm vào, ứng dụng lập tức gửi request `PUT /orders/:id/cancel` mà **không hề có hộp thoại xác nhận (Confirm Dialog)** hỏi lại người dùng!
- **Vi phạm nghiêm trọng:** Vi phạm trực tiếp Nielsen Heuristic **N5: Error Prevention** và **N3: User Control & Freedom**. Thao tác hủy đơn là hành động mang tính phá hủy (destructive), không thể hoàn tác, nhưng lại không có bất kỳ rào cản bảo vệ nào.

## 2. Kết quả từng người

| Participant | Outcome | SC-01 | SC-02 | SC-03 | Time | Errors | Assist | QD1 | Ghi chú hành vi |
|---|---|---|---|---|---|---|---|---|---|
| M06-P01 | Partial | OK | OK | OK | 35s | 0 | 0 | 2 | Bấm Hủy đơn, app thông báo thành công ngay lập tức. Người dùng giật mình nói: "Ủa sao không hỏi lại lỡ bấm nhầm thì sao?". |
| M06-P02 | Partial | OK | OK | OK | 42s | 1 | 0 | 3 | Cuộn tìm đơn hơi lâu. Bấm Hủy đơn thì đơn hủy liền, nhận xét nút quá nhạy, dễ quẹt nhầm khi cuộn màn hình. |
| M06-P03 | Success | OK | OK | OK | 25s | 0 | 0 | 1 | Thao tác tìm và hủy nhanh chóng, đọc đúng trạng thái "Đã hủy". |
| M06-P04 | Partial | OK | OK | OK | 48s | 1 | 0 | 2 | Vô tình chạm nhẹ vào nút Hủy đơn khi đang định cuộn xem chi tiết, đơn bị hủy luôn. Thấy rất nguy hiểm. |
| M06-P05 | Success | OK | OK | OK | 28s | 0 | 0 | 1 | Thao tác chuẩn xác, không gặp trở ngại. |
| M06-P06 | Partial | OK | OK | OK | 39s | 0 | 0 | 2 | Hủy đơn thành công nhưng góp ý cần có popup "Bạn có chắc chắn muốn hủy không?". |
| M06-P07 | Success | OK | OK | OK | 31s | 0 | 0 | 2 | Hoàn thành hủy đơn pending đúng kịch bản, xác nhận trạng thái cập nhật ngay. |

## 3. Câu trả lời khảo sát

| Participant | QD1 | QD2 | Q01 | Q03 | Q04 | Q11 | Q12 |
|---|---|---|---|---|---|---|---|
| M06-P01 | 2 | 4 | 4 | 2 | 1 | Khó quay lại, hủy hoặc sửa thao tác | Khả năng kiểm soát |
| M06-P02 | 3 | 3 | 3 | 2 | 2 | Khó quay lại, hủy hoặc sửa thao tác | Ngăn ngừa lỗi |
| M06-P03 | 1 | 5 | 5 | 4 | 4 | Không gặp vấn đề nào | Không có vấn đề đáng kể |
| M06-P04 | 2 | 3 | 4 | 1 | 1 | Thành phần hoặc hành vi không nhất quán | Ngăn ngừa lỗi |
| M06-P05 | 1 | 5 | 5 | 4 | 4 | Không gặp vấn đề nào | Không có vấn đề đáng kể |
| M06-P06 | 2 | 4 | 4 | 2 | 2 | Khó quay lại, hủy hoặc sửa thao tác | Khả năng kiểm soát |
| M06-P07 | 2 | 4 | 4 | 3 | 3 | Không gặp vấn đề nào | Trạng thái / phản hồi |

## 4. Bảng tổng hợp

| Chỉ số | Giá trị |
|---|---|
| Success | 3 / 7 (42.9%) |
| Partial | 4 / 7 (57.1%) |
| Fail | 0 / 7 (0.0%) |
| Completion time — mean | 35.4s |
| Completion time — median | 35.0s |
| Observable errors — mean | 0.29 lỗi/lượt |
| Assistance required | 0 / 7 (0.0%) |
| QD1 mean (Độ dễ: 1 Rất dễ -> 5 Rất khó) | 1.86 (Dễ) |
| QD2 mean (Mức tự tin: 1 Rất không -> 5 Rất tự tin) | 4.00 (Khá cao) |
