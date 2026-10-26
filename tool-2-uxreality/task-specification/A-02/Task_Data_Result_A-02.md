# Data Result — A-02: Cập nhật giá sản phẩm và nhận biết thao tác đã lưu

> **Vai trò:** Admin<br>
> **Task ID:** `A-02`<br>
> **Nguồn spec:** `Task_Specification_A-02.md`<br>

## 1. Thông tin dữ liệu

| Trường | Giá trị |
|---|---|
| Task ID | `A-02` |
| Vai trò | Admin (Admin Web) |
| Số người (n) | 6 |
| Môi trường | Cloudflare Quick Tunnel; seed 5 sản phẩm, giá AirPods ban đầu 6.000.000 ₫ |

### Ghi chú đánh giá code liên quan (SUT)

- **Bug gán tên hàng loạt (App.jsx):** sau khi sửa, `setProducts(products.map((p) => ({ ...p, name: productForm.name })))` → **tất cả 5 sản phẩm trong bảng hiển thị cùng tên** "Tai nghe AirPods Pro 2" (vi phạm FR-15: chỉ sản phẩm sửa được thay đổi). Giá của các sản phẩm khác vẫn đúng trong DB.
- **Phản hồi lưu:** `alert("Cập nhật thành công!")` — có phản hồi rõ ràng (điểm tốt về N1).
- **Cột giá hiển thị `{p.price} ₫` không có phân cách nghìn** → "6500000 ₫" thay vì "6.500.000 ₫" (lệch FR-21).
- **`<input type="number">` không chấp nhận dấu phân cách nghìn kiểu Việt Nam**: nhập "6.500.000" làm giá trị trường bị **xoá rỗng** → PUT với `price = ""` → giá trong DB bị ghi sai/khoá → giá trong bảng hiển thị trống.

## 2. Kết quả từng người

| Participant | Outcome | SC-01 | SC-02 | Completion time | Observable errors | Assistance | QD1 (độ khó) | Ghi chú hành vi |
|---|---|---|---|---|---|---|---|---|
| A02-P01 | Success | ✓ | ✓ | 96s | 1 | 0 | 2 | Bấm "Sửa" đúng dòng AirPods, nhập 6500000, lưu → alert "Cập nhật thành công!"; nhận biết dòng vừa sửa qua giá 6500000 ₫ (dù tên mọi dòng bị đổi). |
| A02-P02 | Success | ✓ | ✓ | 84s | 0 | 0 | 2 | Sửa đúng dòng, lưu, xác nhận bằng alert + giá hiển thị; không bận tâm việc tên các dòng khác bị đổi. |
| A02-P03 | Partial | ✓ | — | 142s | 3 | 0 | 4 | Click "Sửa" nhầm dòng Samsung trước, sửa lại đúng dòng và lưu; nhưng sau lưu tất cả tên sản phẩm trùng nhau và giá không có dấu phân cách → không xác định/ xác nhận được giá trị 6.500.000 đã lưu → SC-02 fail. |
| A02-P04 | Partial | ✓ | — | 131s | 2 | 1 | 4 | Không tìm thấy nút "Sửa" ở viewport đầu tiên (bảng rộng, phải cuộn ngang), hỏi moderator (assistance); sửa và lưu đúng nhưng không đạt tiêu chí Success trọn vẹn. |
| A02-P05 | Fail | — | — | 167s | 2 | 0 | 5 | Nhập "6.500.000" vào ô giá → trường bị xoá rỗng; lưu → giá trong bảng hiển thị trống; phát hiện lỗi nhưng không sửa lại kịp → SC-01/SC-02 fail. |
| A02-P06 | Success | ✓ | ✓ | 104s | 1 | 0 | 2 | Sửa, lưu, thấy alert; mở lại form "Sửa" để kiểm tra giá hiển thị 6500000 trong trường → xác nhận đã lưu. |

## 3. Câu trả lời khảo sát

| Participant | QD1 | QD2 | Q01 | Q04 | Q05 | Q09 | Q11 | Q12 |
|---|---|---|---|---|---|---|---|---|
| A02-P01 | 2 | 5 | 4 | 3 | 4 | 3 | Thành phần hoặc hành vi không nhất quán | Tính nhất quán |
| A02-P02 | 2 | 5 | 4 | 3 | 4 | 3 | Thành phần hoặc hành vi không nhất quán | Tính nhất quán |
| A02-P03 | 4 | 2 | 3 | 2 | 2 | 2 | Thành phần hoặc hành vi không nhất quán; Không hiểu nhãn, biểu tượng hoặc thuật ngữ | Tính nhất quán |
| A02-P04 | 4 | 3 | 4 | 3 | 3 | 3 | Có quá nhiều bước hoặc thao tác; Khó quay lại, hủy hoặc sửa thao tác | Hiệu quả thao tác |
| A02-P05 | 5 | 1 | 2 | 2 | 1 | 1 | Khó biết cách tránh lỗi; Không hiểu thông báo lỗi hoặc cách khắc phục | Khôi phục lỗi |
| A02-P06 | 2 | 5 | 4 | 3 | 4 | 3 | Thành phần hoặc hành vi không nhất quán | Trạng thái / phản hồi |

> Q01/Q04/Q05/Q09 theo bộ câu hỏi của task A-02. Q11 Multiple Choice, Q12 Single Choice.

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
| Completion time — mean | 120.7s |
| Completion time — median | 117.5s |
| Observable errors — mean | 1.5 lỗi/lượt |
| Assistance — mean | 0.2 lần/lượt |
| QD1 (Perceived difficulty) — mean | 3.2 |

### 4.2. Phân bố câu trả lời Likert

| Câu hỏi | Mean (1–5) | Tỷ lệ chọn 4–5 |
|---|---|---|
| QD1 (thấp = dễ) | 3.2 | — |
| QD2 | 3.5 | 50.0% |
| Q01 | 3.5 | 66.7% |
| Q04 | 2.7 | 0% |
| Q05 | 3.0 | 50.0% |
| Q09 | 2.5 | 0% |

### 4.3. Phân bố Q11 (Multiple Choice, n=6)

| Phương án | Số lượt | Tỷ lệ |
|---|---|---|
| Thành phần hoặc hành vi không nhất quán | 4 | 66.7% |
| Không hiểu nhãn, biểu tượng hoặc thuật ngữ | 1 | 16.7% |
| Có quá nhiều bước hoặc thao tác | 1 | 16.7% |
| Khó quay lại, hủy hoặc sửa thao tác | 1 | 16.7% |
| Khó biết cách tránh lỗi | 1 | 16.7% |
| Không hiểu thông báo lỗi hoặc cách khắc phục | 1 | 16.7% |

### 4.4. Phân bố Q12 (Single Choice, n=6)

| Phương án | Số người | Tỷ lệ |
|---|---|---|
| Tính nhất quán | 3 | 50.0% |
| Hiệu quả thao tác | 1 | 16.7% |
| Khôi phục lỗi | 1 | 16.7% |
| Trạng thái / phản hồi | 1 | 16.7% |

## 5. Ghi chú nhanh (issues SUT quan sát được)

- **Sửa 1 sản phẩm làm đổi tên toàn bộ bảng** (App.jsx `fakeMassUpdatedProducts`) — lệch FR-15; 4/6 người phản ánh "Thành phần hoặc hành vi không nhất quán", Q04 (tính nhất quán) mean 2.7. Liên quan N4/P4.
- **Giá không định dạng phân cách nghìn** ("6500000 ₫") — lệch FR-21, góp phần làm P03 không xác nhận được giá trị đã lưu (N2).
- **Ô giá `type="number"` không nhận "6.500.000"** → giá trị bị xoá và lưu sai → 1 Fail; Q05/Q09 thấp nhất trong task (P8/N5/N9).
- **Phản hồi lưu rõ ràng** (`alert("Cập nhật thành công!")`) → Q01 mean 3.5, là điểm tốt đáng ghi nhận về N1.
