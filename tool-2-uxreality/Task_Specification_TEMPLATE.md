# Task Specification — UXReality / EShop (Customer Web + Admin Web)

> **Cách dùng:** Copy phần “Task Card Template” cho từng task. Danh mục dưới đây là đề xuất ban đầu; phải rà soát bằng pilot và không coi là kết quả kiểm thử.

## 1. Danh mục task dự kiến

### 1.1. Task cốt lõi — Customer Web

| Task ID | FR | User task (lời giao nhiệm vụ trung lập) | Điều kiện khởi đầu | Tiêu chí thành công chính | Principles / Heuristics dự kiến |
|---|---|---|---|---|---|
| C-01 | FR-05 | “Hãy tìm sản phẩm **[X]** và cho biết giá đang hiển thị.” | Trang Customer Web truy cập được; sản phẩm X tồn tại; task bắt đầu ở trang chủ | Tìm đúng sản phẩm và chỉ đúng giá | P2/P3/P7; N2/N6/N7/N8 |
| C-02 | FR-06, FR-24 | “Bạn muốn mua 2 đơn vị sản phẩm **[X]**. Hãy thêm sản phẩm vào giỏ và cho biết điều gì khiến bạn chắc rằng lựa chọn đã được ghi nhận.” | Product X có sẵn; trạng thái người dùng và giỏ được xác định trước | Thêm đúng sản phẩm/số lượng; người dùng xác định được phản hồi/trạng thái giỏ | P2/P5/P8/P10; N1/N4/N5/N6 |
| C-03 | FR-07, FR-23, FR-24 | “Trong giỏ hàng đã chuẩn bị, hãy đổi số lượng sản phẩm **[X]** thành 3 và xóa sản phẩm **[Y]**. Hãy cho biết bạn hiểu kết quả như thế nào.” | Giỏ có X và Y; reset trước mỗi session | Số lượng X hiển thị là 3; Y được xóa theo đúng luồng xác nhận; người dùng hiểu trạng thái kết quả | P4/P5/P8; N1/N3/N4/N5/N9 |
| C-04 | FR-08, FR-09 | “Với đơn hàng đang chuẩn bị, hãy áp dụng mã **SAVE10** và cho biết số tiền sau giảm giá trước khi xác nhận đặt hàng.” | User đã đăng nhập; giỏ đạt ngưỡng coupon; coupon hoạt động/chưa hết lượt; không cần hoàn tất đặt đơn | Mã được nhập/áp dụng hoặc có phản hồi rõ; người dùng xác định đúng số tiền cuối cùng theo giao diện | P2/P5/P8/P10; N1/N2/N5/N9 |

### 1.2. Task cốt lõi — Admin Web

| Task ID | FR | User task (lời giao nhiệm vụ trung lập) | Điều kiện khởi đầu | Tiêu chí thành công chính | Principles / Heuristics dự kiến |
|---|---|---|---|---|---|
| A-01 | FR-13 | “Bạn cần báo cáo nhanh tổng doanh thu hiển thị và tổng số đơn hàng. Hãy tìm hai thông tin đó trên dashboard.” | Admin đã đăng nhập; dữ liệu demo được nạp | Tìm đúng hai chỉ số và giải thích được nhãn hiển thị | P1/P3/P6/P7; N1/N6/N7/N8 |
| A-02 | FR-15 | “Hãy cập nhật giá của sản phẩm kiểm thử **[P]** thành **[giá test]**. Sau khi lưu, hãy chỉ ra điều gì cho bạn biết thay đổi đã được ghi nhận.” | Admin test đăng nhập; sản phẩm P có thể sửa; dữ liệu có thể reset | Mở đúng sản phẩm, sửa đúng trường, lưu và xác định được trạng thái kết quả | P4/P5/P8; N1/N4/N5/N9 |
| A-03 | FR-16 | “Hãy nhập danh sách sản phẩm từ file CSV được cung cấp và cho biết hệ thống báo cáo kết quả nhập như thế nào.” | Admin test đăng nhập; CSV hợp lệ theo header yêu cầu; dùng staging | Tìm đúng chức năng import, chọn file, hoàn thành và diễn giải kết quả hiển thị | P2/P5/P8/P10; N1/N5/N9/N10 |
| A-04 | FR-10, FR-18 | “Hãy tìm đơn hàng thử nghiệm **[Order ID]** và chuyển đơn sang trạng thái tiếp theo được phép. Hãy xác định cách kiểm tra trạng thái mới.” | Admin test đăng nhập; đơn test ở trạng thái chuyển được; trạng thái đích đã xác định trước | Tìm đúng đơn, thực hiện chuyển đổi hợp lệ và xác định trạng thái sau thao tác | P2/P4/P5/P8/P10; N1/N2/N3/N4/N9 |

### 1.3. Task mở rộng nếu đủ thời gian

| Task ID | FR | User task | Thành công dự kiến | Principles / Heuristics dự kiến |
|---|---|---|---|---|
| C-05 | FR-11 | “Hãy tìm đơn hàng **[Order ID]** trong lịch sử và cho biết trạng thái hiện tại.” | Tìm đúng đơn và diễn giải được trạng thái | P2/P3/P4/P10; N1/N2/N6 |
| A-05 | FR-17 | “Hãy tạo một coupon thử nghiệm với thông tin được cung cấp và chỉ ra các trường bạn cần điền trước khi lưu.” | Tạo được coupon test hoặc nhận diện rõ lỗi/thiếu thông tin | P2/P4/P8; N4/N5/N6/N9 |

> **Lưu ý về thời lượng:** FAQ công khai của UXReality từng mô tả task dài 1–3 phút và một nhiệm vụ mỗi study. Hãy xác minh giới hạn tài khoản hiện hành. Nếu còn giới hạn này, tạo study riêng cho từng task, rút gọn task bằng trạng thái chuẩn bị trước, không ghép các luồng dài vào cùng một task.

## 2. Task Card Template

### 2.1. Thông tin chung

- **Task ID:** `[C-01 / A-01 / ...]`
- **Tên task:** `[điền]`
- **Vai trò:** `[Customer / Admin]`
- **FR liên quan:** `[FR-xx]`
- **Study ID trong UXReality:** `[điền sau khi tạo]`
- **Priority:** `[P1 / P2]`
- **Phiên bản task:** `[v1.0]`

### 2.2. User task

> `[Ghi chính xác câu nhiệm vụ trung lập được đưa cho người tham gia. Không hướng dẫn họ click vào đâu hoặc bấm nút nào.]`

### 2.3. Điều kiện ban đầu (Preconditions)

- URL/build: `[điền]`
- Trạng thái đăng nhập: `[điền]`
- Dữ liệu cần có: `[product/order/cart/coupon/CSV]`
- Trạng thái ban đầu: `[điền]`
- Reset trước phiên: `[cách khôi phục]`
- Thông tin không được cung cấp trước cho người tham gia: `[điền]`

### 2.4. Tiêu chí thành công

| ID | Điều kiện cần quan sát | Loại | Cách xác minh |
|---|---|---|---|
| SC-01 | `[điều kiện kết quả chính]` | Outcome | `[trạng thái cuối / recording / quan sát]` |
| SC-02 | `[người tham gia nhận ra kết quả/feedback]` | Usability | `[lời nói / survey / hành vi]` |
| SC-03 | `[điều kiện bổ sung nếu có]` | Optional | `[cách xác minh]` |

**Kết quả task:** `Success / Partial / Fail / Invalid` theo định nghĩa đã chốt.

### 2.5. Metrics

| Metric | Định nghĩa cho task này | Nguồn | Ghi chú thiếu dữ liệu |
|---|---|---|---|
| Task outcome | `[Success/Partial/Fail/Invalid]` | `[reviewer/tool]` | `[điền]` |
| Completion time | `[start/end rule]` | `[tool/manual]` | `[điền]` |
| Observable error count | `[loại sai thao tác được tính]` | `[recording/observer]` | `[điền]` |
| Assistance count | `[định nghĩa nếu có moderator]` | `[moderator log]` | `[điền]` |
| Perceived difficulty | `[câu hỏi thang 1–5]` | `[survey]` | `[điền]` |
| Additional data | `[click/scroll/heatmap/etc. nếu thực sự có]` | `[tool]` | `[điền]` |

### 2.6. Checkpoints quan sát

> Checkpoint ở đây là tiêu chí mà nhóm sẽ đối chiếu; không mặc định là automated assertion do UXReality thực hiện.

| Checkpoint ID | Điều muốn quan sát | Gắn với principle | Heuristic | Bằng chứng cần ghi |
|---|---|---|---|---|
| CP-01 | `[điền]` | `[P#]` | `[N#]` | `[timestamp / screenshot / quote]` |
| CP-02 | `[điền]` | `[P#]` | `[N#]` | `[timestamp / screenshot / quote]` |

### 2.7. Câu hỏi sau task

1. Mức độ khó của nhiệm vụ từ 1 (rất dễ) đến 5 (rất khó): `[ ]`
2. Phần nào khiến bạn phải dừng lại hoặc không chắc chắn? `[câu hỏi mở]`
3. Sau thao tác cuối, bạn có chắc kết quả đã được ghi nhận không? Vì sao? `[câu hỏi mở]`

### 2.8. Bằng chứng và quan sát

| Participant ID | Session ID | Outcome | Time | Errors | Evidence/timestamp | Observation ID | P code | N code | Notes |
|---|---|---|---:|---:|---|---|---|---|---|
| `[C-P01/A-P01]` | `[ID]` | `[ ]` | `[ ]` | `[ ]` | `[ID @ timestamp]` | `[OBS-ID]` | `[P#]` | `[N#]` | `[điền]` |

### 2.9. Kết quả pilot và quyết định

- Task chạy trong thời lượng cho phép? `[Yes/No/Not tested]`
- Người tham gia hiểu lời giao nhiệm vụ? `[điền]`
- Cấu hình ghi nhận hoạt động? `[điền]`
- Những thay đổi sau pilot và lý do: `[điền]`
- Reviewer: `[điền]`
- Ngày/phiên bản: `[điền]`
