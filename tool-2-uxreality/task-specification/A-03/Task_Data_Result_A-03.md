# Data Result — A-03: Import sản phẩm từ CSV và hiểu báo cáo kết quả

> **Vai trò:** Admin<br>
> **Task ID:** `A-03`<br>
> **Nguồn spec:** `Task_Specification_A-03.md`<br>

## 1. Thông tin dữ liệu

| Trường | Giá trị |
|---|---|
| Task ID | `A-03` |
| Vai trò | Admin (Admin Web) |
| Số người (n) | 6 |
| Môi trường | Cloudflare Quick Tunnel; file `qa_valid.csv` cung cấp sẵn qua attachment/download đã duyệt |

### Ghi chú đánh giá code liên quan (SUT)

- Vùng "📂 Import sản phẩm từ CSV" nằm ở đầu tab **Sản phẩm**, gồm: ô chọn file, link **"Tải file mẫu (template.csv)"**, nút **"Import N sản phẩm"** (disable cho tới khi có preview).
- Chọn file → hiện bảng preview "Xem trước (N dòng)" → bấm "Import N sản phẩm" → mới thực sự gọi `POST /api/admin/import-products`. **Preview không phải là kết quả import.**
- Kết quả hợp lệ: "✅ Import hoàn tất: **2/2** sản phẩm được thêm"; danh sách lỗi chỉ hiện khi có lỗi → báo cáo **không nêu rõ "0 lỗi"**, người dùng phải suy luận từ việc không có danh sách lỗi.
- Link "Tải file mẫu" tải file mẫu **khác** `qa_valid.csv` (1 dòng "Tên sản phẩm mẫu") → nếu dùng nhầm sẽ import sai file.
- **Không có rollback** khi một dòng lỗi (vi phạm FR-16 all-or-nothing) — không kích hoạt trong baseline hợp lệ này.
- Link "Tải file mẫu" là điểm hỗ trợ tốt cho N10.

## 2. Kết quả từng người

| Participant | Outcome | SC-01 | SC-02 | Completion time | Observable errors | Assistance | QD1 (độ khó) | Ghi chú hành vi |
|---|---|---|---|---|---|---|---|---|
| A03-P01 | Success | ✓ | ✓ | 112s | 1 | 0 | 3 | Chọn `qa_valid.csv` → preview "Xem trước (2 dòng)" → bấm "Import 2 sản phẩm" → thấy "✅ Import hoàn tất: 2/2 sản phẩm được thêm", không có dòng lỗi nào hiển thị. |
| A03-P02 | Success | ✓ | ✓ | 98s | 0 | 0 | 2 | Tìm thẳng khu vực import ở đầu tab, preview 2 dòng, import, đọc báo cáo 2/2, không lỗi. |
| A03-P03 | Partial | — | — | 156s | 2 | 0 | 4 | Nhầm **preview là kết quả** → không bấm "Import 2 sản phẩm"; kết luận "đã xong" và báo "preview có 2 dòng" → import chưa hoàn tất → SC-01 fail. |
| A03-P04 | Fail | — | — | 145s | 2 | 1 | 5 | Bấm "Tải file mẫu (template.csv)" rồi import nhầm file mẫu → báo cáo "1/1", xuất hiện sản phẩm "Tên sản phẩm mẫu"; hỏi moderator (assistance) → import sai file → Fail. |
| A03-P05 | Success | ✓ | ✓ | 121s | 1 | 0 | 3 | Import đúng file, đọc "2/2 sản phẩm được thêm" và xác nhận không có thông báo lỗi nào. |
| A03-P06 | Partial | ✓ | — | 168s | 3 | 0 | 4 | Import thành công 2/2 nhưng không diễn giải được báo cáo đầy đủ (không khẳng định được có lỗi hay không, vì báo cáo không nêu số lỗi) → SC-02 fail. |

## 3. Câu trả lời khảo sát

| Participant | QD1 | QD2 | Q01 | Q02 | Q05 | Q09 | Q10 | Q11 | Q12 |
|---|---|---|---|---|---|---|---|---|---|
| A03-P01 | 3 | 5 | 4 | 4 | 4 | 3 | 4 | Không gặp vấn đề nào | Không có vấn đề đáng kể |
| A03-P02 | 2 | 5 | 4 | 5 | 4 | 3 | 4 | Không gặp vấn đề nào | Không có vấn đề đáng kể |
| A03-P03 | 4 | 2 | 3 | 4 | 3 | 3 | 3 | Không rõ hệ thống đang xử lý hay đã hoàn tất; Khó biết cách tránh lỗi | Trạng thái / phản hồi |
| A03-P04 | 5 | 1 | 3 | 3 | 1 | 2 | 2 | Khó biết cách tránh lỗi; Không tìm được hướng dẫn | Trợ giúp / hướng dẫn |
| A03-P05 | 3 | 5 | 4 | 4 | 4 | 3 | 4 | Không gặp vấn đề nào | Không có vấn đề đáng kể |
| A03-P06 | 4 | 2 | 3 | 4 | 3 | 3 | 3 | Không rõ hệ thống đang xử lý hay đã hoàn tất | Trạng thái / phản hồi |

> Q01/Q02/Q05/Q09/Q10 theo bộ câu hỏi của task A-03. Q11 Multiple Choice, Q12 Single Choice.

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
| Completion time — mean | 133.3s |
| Completion time — median | 133.0s |
| Observable errors — mean | 1.5 lỗi/lượt |
| Assistance — mean | 0.2 lần/lượt |
| QD1 (Perceived difficulty) — mean | 3.5 |

### 4.2. Phân bố câu trả lời Likert

| Câu hỏi | Mean (1–5) | Tỷ lệ chọn 4–5 |
|---|---|---|
| QD1 (thấp = dễ) | 3.5 | — |
| QD2 | 3.3 | 50.0% |
| Q01 | 3.5 | 50.0% |
| Q02 | 4.0 | 83.3% |
| Q05 | 3.2 | 50.0% |
| Q09 | 2.8 | 0% |
| Q10 | 3.3 | 50.0% |

### 4.3. Phân bố Q11 (Multiple Choice, n=6)

| Phương án | Số lượt | Tỷ lệ |
|---|---|---|
| Không gặp vấn đề nào | 3 | 50.0% |
| Không rõ hệ thống đang xử lý hay đã hoàn tất | 2 | 33.3% |
| Khó biết cách tránh lỗi | 2 | 33.3% |
| Không tìm được hướng dẫn | 1 | 16.7% |

### 4.4. Phân bố Q12 (Single Choice, n=6)

| Phương án | Số người | Tỷ lệ |
|---|---|---|
| Không có vấn đề đáng kể | 3 | 50.0% |
| Trạng thái / phản hồi | 2 | 33.3% |
| Trợ giúp / hướng dẫn | 1 | 16.7% |

## 5. Ghi chú nhanh (issues SUT quan sát được)

- **Preview rất dễ bị nhầm là kết quả import** (P03 không bấm nút Import) → 2 người chọn Q11 "Không rõ hệ thống đang xử lý hay đã hoàn tất"; liên quan N1/P5.
- **Báo cáo không nêu rõ số dòng lỗi** (chỉ hiện danh sách lỗi khi có lỗi) → P06 không diễn giải được SC-02; liên quan N1/N8.
- **Link "Tải file mẫu" dễ gây nhầm với file cần import** (template ≠ `qa_valid.csv`) → 1 Fail; liên quan N10/P8.
- **Điểm tốt:** có link tải file mẫu (hỗ trợ N10) và thông báo thành công rõ ràng ("2/2") → Q02 mean 4.0.
