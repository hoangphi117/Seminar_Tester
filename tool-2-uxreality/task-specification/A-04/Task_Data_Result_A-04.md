# Data Result — A-04: Chuyển trạng thái đơn hàng hợp lệ

> **Vai trò:** Admin<br>
> **Task ID:** `A-04`<br>
> **Nguồn spec:** `Task_Specification_A-04.md`<br>

## 1. Thông tin dữ liệu

| Trường | Giá trị |
|---|---|
| Task ID | `A-04` |
| Vai trò | Admin (Admin Web) |
| Số người (n) | 6 |
| Môi trường | Cloudflare Quick Tunnel; fixture `order-status` (3 đơn: #1 pending 30.000.000; #2 pending 28.000.000; #3 confirmed 45.000.000) |

### Ghi chú đánh giá code liên quan (SUT)

- Bảng đơn hàng được tải bằng `ORDER BY orders.id DESC` → thứ tự hiển thị là **#3, #2, #1** (đơn mục tiêu nằm cuối bảng). Không có điều khiển sắp xếp.
- Ba đơn cùng thuộc tài khoản Customer seed (ID 2) → cột "Người đặt" và "Địa chỉ" **giống hệt nhau**; chỉ phân biệt được bằng **ID** hoặc **tổng tiền**. Có **2 đơn cùng trạng thái `pending`** (#1 và #2) → rủi ro chọn nhầm.
- Nút hành động của đơn `pending`: **"Xác nhận"** (→ `confirmed`) và **"Hủy"** (→ `canceled`). **Không có dialog xác nhận** khi bấm.
- Backend chỉ cho phép `pending → confirmed | canceled`; từ `canceled` chỉ chuyển được sang `delivered` → **không thể hoàn tác** về `confirmed`.
- Sau khi chuyển, `fetchData()` tải lại và badge trạng thái đổi sang **"Đã xác nhận"** (nền indigo) → có phản hồi qua trạng thái bảng, **không có toast**.
- Địa chỉ render bằng `dangerouslySetInnerHTML` (vi phạm FR-18 về an toàn hiển thị).

## 2. Kết quả từng người

| Participant | Outcome | SC-01 | SC-02 | Completion time | Observable errors | Assistance | QD1 (độ khó) | Ghi chú hành vi |
|---|---|---|---|---|---|---|---|---|
| A04-P01 | Success | ✓ | ✓ | 74s | 0 | 0 | 2 | Cuộn xuống dòng #1 (30.000.000 ₫), bấm "Xác nhận" → badge đổi sang "Đã xác nhận"; đọc trạng thái mới trên bảng. |
| A04-P02 | Success | ✓ | ✓ | 88s | 1 | 0 | 3 | Ban đầu bấm nhầm vào ô ID của #2 (không gây thay đổi trạng thái), sau đó bấm đúng "Xác nhận" ở #1. |
| A04-P03 | Success | ✓ | ✓ | 66s | 0 | 0 | 2 | Nhận ra danh sách đảo thứ tự, tìm #1 bằng tổng tiền 30.000.000; bấm "Xác nhận"; xác nhận badge "Đã xác nhận". |
| A04-P04 | Partial | ✓ | — | 129s | 2 | 1 | 4 | Chuyển #1 sang "Đã xác nhận" ✓ nhưng không có toast nên hỏi moderator "làm sao chắc nó đã lưu?" (assistance) → chưa đạt tiêu chí Success trọn vẹn. |
| A04-P05 | Fail | — | — | 118s | 2 | 0 | 4 | Hiểu nhầm nút "Hủy" là đóng bảng → bấm "Hủy" ở #1 → đơn thành "Đã hủy"; backend không cho chuyển ngược về `confirmed` → trạng thái cuối sai, không thể khôi phục. |
| A04-P06 | Partial | ✓ | — | 147s | 3 | 0 | 4 | Chuyển #1 sang `confirmed` ✓ nhưng 3 đơn cùng người đặt/cùng địa chỉ và danh sách đảo thứ tự → không xác định chắc dòng nào vừa đổi, không xác nhận được trạng thái mới → SC-02 fail. |

## 3. Câu trả lời khảo sát

| Participant | QD1 | QD2 | Q01 | Q02 | Q03 | Q04 | Q09 | Q11 | Q12 |
|---|---|---|---|---|---|---|---|---|---|
| A04-P01 | 2 | 5 | 4 | 5 | 3 | 4 | 3 | Không gặp vấn đề nào | Trạng thái / phản hồi |
| A04-P02 | 3 | 5 | 4 | 4 | 3 | 4 | 3 | Không gặp vấn đề nào | Không có vấn đề đáng kể |
| A04-P03 | 2 | 5 | 4 | 5 | 4 | 4 | 3 | Không gặp vấn đề nào | Không có vấn đề đáng kể |
| A04-P04 | 4 | 3 | 3 | 4 | 2 | 3 | 2 | Không rõ hệ thống đang xử lý hay đã hoàn tất; Khó quay lại, hủy hoặc sửa thao tác | Trạng thái / phản hồi |
| A04-P05 | 4 | 2 | 2 | 3 | 2 | 2 | 1 | Khó biết cách tránh lỗi; Thành phần hoặc hành vi không nhất quán | Ngăn ngừa lỗi |
| A04-P06 | 4 | 2 | 2 | 4 | 3 | 4 | 2 | Khó biết cách tránh lỗi; Phải ghi nhớ thông tin từ bước trước; Khả năng nhận diện thông tin | Hiệu quả thao tác |

> Q01/Q02/Q03/Q04/Q09 theo bộ câu hỏi của task A-04. Q11 Multiple Choice, Q12 Single Choice.

## 4. Bảng tổng hợp

### 4.1. Metrics định lượng

| Chỉ số | Giá trị |
|---|---|
| Valid n | 6 |
| Success | 3 / 6 |
| Success rate | 50.0% |
| Partial | 2 / 6 (33.3%) |
| Fail | 1 / 6 (16.7%) |
| Invalid | 0 / 6 (0%) |
| Completion time — mean | 103.7s |
| Completion time — median | 103.0s |
| Observable errors — mean | 1.3 lỗi/lượt |
| Assistance — mean | 0.2 lần/lượt |
| QD1 (Perceived difficulty) — mean | 3.2 |

### 4.2. Phân bố câu trả lời Likert

| Câu hỏi | Mean (1–5) | Tỷ lệ chọn 4–5 |
|---|---|---|
| QD1 (thấp = dễ) | 3.2 | — |
| QD2 | 3.7 | 50.0% |
| Q01 | 3.2 | 50.0% |
| Q02 | 4.2 | 83.3% |
| Q03 | 2.8 | 16.7% |
| Q04 | 3.5 | 66.7% |
| Q09 | 2.3 | 0% |

### 4.3. Phân bố Q11 (Multiple Choice, n=6)

| Phương án | Số lượt | Tỷ lệ |
|---|---|---|
| Không gặp vấn đề nào | 3 | 50.0% |
| Khó biết cách tránh lỗi | 2 | 33.3% |
| Thành phần hoặc hành vi không nhất quán | 1 | 16.7% |
| Không rõ hệ thống đang xử lý hay đã hoàn tất | 1 | 16.7% |
| Khó quay lại, hủy hoặc sửa thao tác | 1 | 16.7% |
| Phải ghi nhớ thông tin từ bước trước | 1 | 16.7% |
| Khả năng nhận diện thông tin | 1 | 16.7% |

### 4.4. Phân bố Q12 (Single Choice, n=6)

| Phương án | Số người | Tỷ lệ |
|---|---|---|
| Trạng thái / phản hồi | 2 | 33.3% |
| Không có vấn đề đáng kể | 2 | 33.3% |
| Ngăn ngừa lỗi | 1 | 16.7% |
| Hiệu quả thao tác | 1 | 16.7% |

## 5. Ghi chú nhanh (issues SUT quan sát được)

- **Không có dialog xác nhận khi chuyển trạng thái** → P05 bấm nhầm "Hủy" và **không thể hoàn tác** (chỉ chuyển được `canceled → delivered`) → 1 Fail; Q05/N9 và Q03 (quyền kiểm soát) thấp. Liên quan P8/N5/N3.
- **Bảng đảo thứ tự (`id DESC`) + 3 đơn trùng người/địa chỉ + 2 đơn cùng `pending`** → khó xác định đúng đơn mục tiêu (P06), Q06/Q03 thấp. Liên quan N6/N3.
- **Chỉ có phản hồi qua badge trạng thái, không có toast** → 1 người phải hỏi moderator; Q01 mean 3.2. Liên quan N1.
