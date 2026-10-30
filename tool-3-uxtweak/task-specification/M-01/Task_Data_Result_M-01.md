# Data Result — M-01: Tìm sản phẩm trên Mobile và xác định giá

> **Vai trò:** Mobile Customer | **Task ID:** M-01
> **Nguồn spec:** Task_Specification_M-01.md

## 1. Thông tin dữ liệu

| Trường | Giá trị |
|---|---|
| Task ID | M-01 |
| Vai trò | Mobile Customer (Mobile App) |
| Số người (n) | 7 |
| Môi trường | Expo Go / Mobile browser; backend IP LAN 192.168.10.13:3000; seed 5 sản phẩm chuẩn |

### Ghi chú đánh giá code liên quan (SUT)

- **Hiển thị ảnh bị méo (resizeMode=stretch):** App.js dùng `resizeMode="stretch"` cho tất cả ảnh sản phẩm, khiến ảnh bị biến dạng trên màn hình có tỉ lệ khác với ảnh gốc. Không ảnh hưởng đến giá trị giá nhưng giảm chất lượng cảm nhận.
- **Giá trị seed AirPods Pro 2:** 6.000.000 đ (khớp với database.js); không có bug tính toán ở màn hình danh sách sản phẩm.
- **formatMoney:** Sử dụng `Number(value).toLocaleString()` — trên một số thiết bị Android có thể hiển thị định dạng phân cách khác nhau (dấu phẩy hay dấu chấm), cần ghi nhận nếu participant báo nhầm giá.

## 2. Kết quả từng người

| Participant | Outcome | SC-01 | SC-02 | Completion time | Observable errors | Assistance | QD1 | Ghi chú hành vi |
|---|---|---|---|---|---|---|---|---|
| M01-P01 | Success | OK | OK | 24s | 0 | 0 | 1 | Gõ tìm kiếm ngay, đọc đúng "6.000.000 đ". |
| M01-P02 | Success | OK | OK | 31s | 0 | 0 | 2 | Cuộn qua danh sách trước, sau đó gõ tìm kiếm. |
| M01-P03 | Success | OK | OK | 22s | 0 | 0 | 1 | Tìm thấy ngay ở đầu danh sách phụ kiện. |
| M01-P04 | Success | OK | OK | 45s | 1 | 0 | 2 | Gõ nhầm từ khóa không dấu, xóa đi gõ lại. |
| M01-P05 | Success | OK | OK | 28s | 0 | 0 | 1 | Thao tác nhanh, không gặp khó khăn. |
| M01-P06 | Success | OK | OK | 35s | 0 | 0 | 2 | Nhận xét ảnh bị méo nhưng đọc đúng giá. |
| M01-P07 | Success | OK | OK | 26s | 0 | 0 | 1 | Tìm thấy sản phẩm ngay qua thanh tìm kiếm, đọc đúng 6.000.000 đ. |

## 3. Câu trả lời khảo sát

| Participant | QD1 | QD2 | Q06 | Q07 | Q08 | Q11 | Q12 |
|---|---|---|---|---|---|---|---|
| M01-P01 | 1 | 5 | 5 | 5 | 4 | Không gặp vấn đề nào | Không có vấn đề đáng kể |
| M01-P02 | 2 | 5 | 4 | 4 | 4 | Không gặp vấn đề nào | Hiệu quả thao tác |
| M01-P03 | 1 | 5 | 5 | 5 | 4 | Không gặp vấn đề nào | Không có vấn đề đáng kể |
| M01-P04 | 2 | 4 | 4 | 4 | 4 | Khó biết trước kết quả tìm kiếm | Hiệu quả thao tác |
| M01-P05 | 1 | 5 | 5 | 5 | 4 | Không gặp vấn đề nào | Không có vấn đề đáng kể |
| M01-P06 | 2 | 5 | 4 | 4 | 3 | Giao diện có quá nhiều thông tin gây nhiễu | Tính tối giản |
| M01-P07 | 1 | 5 | 5 | 5 | 4 | Không gặp vấn đề nào | Không có vấn đề đáng kể |

## 4. Bảng tổng hợp

| Chỉ số | Giá trị |
|---|---|
| Success | 7 / 7 (100.0%) |
| Partial | 0 / 7 (0.0%) |
| Fail | 0 / 7 (0.0%) |
| Completion time — mean | 30.1s |
| Completion time — median | 28.0s |
| Observable errors — mean | 0.14 lỗi/lượt |
| Assistance required | 0 / 7 (0.0%) |
| QD1 mean (Độ dễ: 1 Rất dễ -> 5 Rất khó) | 1.43 |
| QD2 mean (Mức tự tin: 1 Rất không -> 5 Rất tự tin) | 4.86 |
