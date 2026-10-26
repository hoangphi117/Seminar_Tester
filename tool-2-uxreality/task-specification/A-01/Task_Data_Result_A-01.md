# Data Result — A-01: Tìm thông tin trên Dashboard

> **Vai trò:** Admin<br>
> **Task ID:** `A-01`<br>
> **Nguồn spec:** `Task_Specification_A-01.md`<br>

## 1. Thông tin dữ liệu

| Trường | Giá trị |
|---|---|
| Task ID | `A-01` |
| Vai trò | Admin (Admin Web) |
| Số người (n) | 6 |
| Môi trường | Cloudflare Quick Tunnel; fixture `dashboard` (2 đơn: #1 delivered 30.000.000, #2 pending 28.000.000) |

### Ghi chú đánh giá code liên quan (SUT)

- **Bug nhân đôi doanh thu (App.jsx):** `totalRevenue = orders.reduce(... if status === 'delivered' return sum + total_amount * 2)`. Với 1 đơn delivered 30.000.000 → dashboard hiển thị **60.000.000 ₫**, không phải 30.000.000 như FR-13 (chỉ tính tổng `total_amount` của đơn delivered).
- "Tổng số đơn hàng" = `orders.length` = 2 ✓.
- Thẻ đúng là "Tổng doanh thu (Delivered)" — có kèm từ "(Delivered)" có thể gây hiểu nhầm về phạm vi tính.
- Nhận định từ task spec: participant chỉ cần đọc đúng giá trị **đang hiển thị** → với 1 đơn delivered, giá trị hiển thị là 60.000.000; sai lệch FR-13 ghi ở SC-03 là issue SUT, không quy trách nhiệm cho participant.

## 2. Kết quả từng người

| Participant | Outcome | SC-01 | SC-02 | Completion time | Observable errors | Assistance | QD1 (độ khó) | Ghi chú hành vi |
|---|---|---|---|---|---|---|---|---|
| A01-P01 | Success | ✓ | ✓ | 47s | 0 | 0 | 2 | Nhìn thẳng 2 thẻ trên Dashboard, đọc "60,000,000 ₫" và "2"; hơi băn khoăn dòng "(Delivered)" nhưng xác nhận đúng. |
| A01-P02 | Success | ✓ | ✓ | 39s | 0 | 0 | 1 | Tìm thấy ngay, đọc "60,000,000 ₫" và "2" đúng. |
| A01-P03 | Partial | — | — | 96s | 1 | 0 | 3 | Báo doanh thu "30.000.000 ₫" (tự tính từ đơn delivered) thay vì giá trị 60.000.000 đang hiển thị → SC-02 fail; chỉ số đơn = 2 đúng. |
| A01-P04 | Success | ✓ | ✓ | 55s | 1 | 0 | 2 | Mở nhầm tab "Đơn hàng" trước rồi quay lại Dashboard tìm đúng 2 thẻ. |
| A01-P05 | Success | ✓ | ✓ | 43s | 0 | 0 | 1 | Đọc đúng "60,000,000 ₫" và "2". |
| A01-P06 | Partial | — | — | 82s | 1 | 1 | 3 | Đọc đúng "60,000,000 ₫" và "2" nhưng nhầm lẫn cặp nhãn–giá trị ban đầu (nhìn "Tổng số đơn hàng" nghĩ là số tiền), hỏi moderator (assistance) → không đạt tiêu chí Success trọn vẹn. |

## 3. Câu trả lời khảo sát

| Participant | QD1 | QD2 | Q01 | Q06 | Q07 | Q08 | Q11 | Q12 |
|---|---|---|---|---|---|---|---|---|
| A01-P01 | 2 | 4 | 4 | 5 | 5 | 5 | Thành phần hoặc hành vi không nhất quán | Tính nhất quán |
| A01-P02 | 1 | 5 | 4 | 5 | 5 | 5 | Không gặp vấn đề nào | Không có vấn đề đáng kể |
| A01-P03 | 3 | 2 | 3 | 4 | 4 | 4 | Thành phần hoặc hành vi không nhất quán; Không hiểu thông báo lỗi hoặc cách khắc phục | Khôi phục lỗi |
| A01-P04 | 2 | 5 | 4 | 5 | 4 | 4 | Không gặp vấn đề nào | Hiệu quả thao tác |
| A01-P05 | 1 | 4 | 4 | 5 | 5 | 5 | Không gặp vấn đề nào | Không có vấn đề đáng kể |
| A01-P06 | 3 | 3 | 3 | 4 | 4 | 4 | Không hiểu nhãn, biểu tượng hoặc thuật ngữ; Thành phần hoặc hành vi không nhất quán | Ngôn ngữ / tính dễ hiểu |


## 4. Bảng tổng hợp

### 4.1. Metrics định lượng

| Chỉ số | Giá trị |
|---|---|
| Valid n | 6 |
| Success | 4 / 6 |
| Success rate | 66.7% |
| Partial | 2 / 6 (33.3%) |
| Fail | 0 / 6 (0%) |
| Invalid | 0 / 6 (0%) |
| Completion time — mean | 60.3s |
| Completion time — median | 51.0s |
| Observable errors — mean | 0.5 lỗi/lượt |
| Assistance — mean | 0.2 lần/lượt |
| QD1 (Perceived difficulty) — mean | 2.0 |

### 4.2. Phân bố câu trả lời Likert

| Câu hỏi | Mean (1–5) | Tỷ lệ chọn 4–5 |
|---|---|---|
| QD1 (thấp = dễ) | 2.0 | — |
| QD2 | 3.8 | 66.7% |
| Q01 | 3.7 | 66.7% |
| Q06 | 4.7 | 100% |
| Q07 | 4.5 | 100% |
| Q08 | 4.5 | 100% |

### 4.3. Phân bố Q11 (Multiple Choice, n=6)

| Phương án | Số lượt | Tỷ lệ |
|---|---|---|
| Không gặp vấn đề nào | 3 | 50.0% |
| Thành phần hoặc hành vi không nhất quán | 3 | 50.0% |
| Không hiểu thông báo lỗi hoặc cách khắc phục | 1 | 16.7% |
| Không hiểu nhãn, biểu tượng hoặc thuật ngữ | 1 | 16.7% |

### 4.4. Phân bố Q12 (Single Choice, n=6)

| Phương án | Số người | Tỷ lệ |
|---|---|---|
| Không có vấn đề đáng kể | 2 | 33.3% |
| Khôi phục lỗi | 1 | 16.7% |
| Hiệu quả thao tác | 1 | 16.7% |
| Ngôn ngữ / tính dễ hiểu | 1 | 16.7% |
| Tính nhất quán | 1 | 16.7% |

## 5. Ghi chú nhanh

- **Dashboard nhân đôi doanh thu của đơn `delivered`** (App.jsx, `total_amount * 2`) → hiển thị 60.000.000 ₫ thay vì 30.000.000 ₫ (lệch FR-13). Participant đọc đúng 60.000.000 vẫn đạt outcome; sai lệch ghi ở SC-03 là issue SUT (liên quan P10/N1/P7).
- **Nhãn "Tổng doanh thu (Delivered)" kèm hậu tố** gây hiểu nhầm phạm vi tính → 1 người Partial vì tự suy diễn giá trị, 1 người cần nhắc nhãn–giá trị (liên quan N2/N6).
