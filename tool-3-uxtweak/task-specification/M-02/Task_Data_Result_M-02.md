# Data Result — M-02: Thêm vào giỏ hàng trên Mobile và nhận biết phản hồi

> **Task ID:** M-02 | **Vai trò:** Mobile Customer

## 1. Thông tin dữ liệu

| Trường | Giá trị |
|---|---|
| Task ID | M-02 |
| Số người (n) | 7 |
| Môi trường | Expo Go; seed sản phẩm chuẩn; giỏ hàng trống trước phiên |

### Ghi chú code SUT

- **Bug Alert.alert chụp chặn:** `addToCart()` gọi `Alert.alert` native — người dùng phải bấm OK mới tiếp tục được. Không phải toast/badge nhẹ nhàng như FR-24 yêu cầu.
- **Double-click bug tiềm ẩn:** State `clickCount` không ngăn người dùng bấm 2 lần trước khi Alert đóng, dễ gây thêm kép số lượng.

## 2. Kết quả từng người

| Participant | Outcome | SC-01 | SC-02 | Time | Errors | Assist | QD1 | Ghi chú |
|---|---|---|---|---|---|---|---|---|
| M02-P01 | Success | OK | OK | 38s | 0 | 0 | 2 | Nhập số lượng 2, bấm thêm, tắt popup Alert, kiểm tra icon giỏ. |
| M02-P02 | Success | OK | OK | 42s | 1 | 0 | 2 | Bấm nút "Thêm vào giỏ" 2 lần do tưởng nút chưa nhận; Alert hiện 2 lần. |
| M02-P03 | Success | OK | OK | 29s | 0 | 0 | 1 | Hoàn thành nhanh, không hài lòng với Alert che màn hình. |
| M02-P04 | Success | OK | OK | 48s | 1 | 0 | 3 | Nhập số lượng rồi bấm ra ngoài ẩn bàn phím ảo trước khi bấm Thêm. |
| M02-P05 | Success | OK | OK | 33s | 0 | 0 | 2 | Hoàn thành đúng kịch bản. |
| M02-P06 | Success | OK | OK | 40s | 0 | 0 | 2 | Thao tác chuẩn xác; chỉ ra icon "Giỏ (1)" trên navbar là bằng chứng. |
| M02-P07 | Success | OK | OK | 36s | 0 | 0 | 2 | Bấm thêm vào giỏ, popup Alert hiện lên, bấm OK rồi vào giỏ kiểm tra. |

## 3. Câu trả lời khảo sát

| Participant | QD1 | QD2 | Q01 | Q05 | Q11 | Q12 |
|---|---|---|---|---|---|---|
| M02-P01 | 2 | 4 | 4 | 4 | Không gặp vấn đề nào | Trạng thái / phản hồi |
| M02-P02 | 2 | 4 | 3 | 4 | Hệ thống không rõ đang xử lý hay đã hoàn tất | Trạng thái / phản hồi |
| M02-P03 | 1 | 5 | 3 | 4 | Giao diện có quá nhiều thông tin gây nhiễu | Tính tối giản |
| M02-P04 | 3 | 4 | 3 | 3 | Hệ thống không rõ đang xử lý hay đã hoàn tất | Trạng thái / phản hồi |
| M02-P05 | 2 | 5 | 4 | 4 | Không gặp vấn đề nào | Không có vấn đề đáng kể |
| M02-P06 | 2 | 4 | 4 | 4 | Không gặp vấn đề nào | Trạng thái / phản hồi |
| M02-P07 | 2 | 5 | 4 | 4 | Không gặp vấn đề nào | Trạng thái / phản hồi |

## 4. Bảng tổng hợp

| Chỉ số | Giá trị |
|---|---|
| Success | 7 / 7 (100.0%) |
| Partial | 0 / 7 (0.0%) |
| Fail | 0 / 7 (0.0%) |
| Completion time — mean | 38.0s |
| Completion time — median | 38.0s |
| Observable errors — mean | 0.29 lỗi/lượt |
| Assistance required | 0 / 7 (0.0%) |
| QD1 mean | 2.0 |
| QD2 mean | 4.43 |
