# Task Specification — UXReality / EShop (Customer Web + Admin Web)

> **Cách dùng:** Copy phần “Task Card Template” cho từng task. Danh mục dưới đây là đề xuất ban đầu; phải rà soát bằng pilot và không coi là kết quả kiểm thử. Thông tin môi trường/URL/phiên bản build và kết quả pilot được ghi ở log phiên, Analysis Package hoặc Raw Evidence theo Test Plan — **không** nằm trong task specification.

## 1. Danh mục task dự kiến

### 1.1. Task cốt lõi — Customer Web

| Task ID | FR | User task (lời giao nhiệm vụ trung lập) | Điều kiện khởi đầu | Tiêu chí thành công chính | Principles / Heuristics dự kiến |
|---|---|---|---|---|---|
| C-01 | FR-05 | “Hãy tìm sản phẩm **[X]** và cho biết giá đang hiển thị.” | Dữ liệu seed có sản phẩm X; task bắt đầu ở trang chủ | Tìm đúng sản phẩm và chỉ đúng giá | P2/P3/P7; N2/N6/N7/N8 |
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

> Thông tin về môi trường, URL và phiên bản build **không** đưa vào task specification; ghi ở log phiên/Analysis Package. Phiên từ xa dùng Cloudflare Quick Tunnel (URL tạm, đổi mỗi lần khởi động tunnel). Chỉ ghi các điều kiện dữ liệu, tài khoản, trạng thái và thao tác reset cần thiết cho phiên.

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
| Perceived difficulty | `[câu hỏi `QD1` ở mục 6]` | `[survey]` | `[điền]` |
| Additional data | `[click/scroll/heatmap/etc. nếu thực sự có]` | `[tool]` | `[điền]` |

### 2.6. Câu hỏi sau task

> Hỏi ngay sau khi người tham gia báo đã xong task và trước khi trao đổi thêm.
> Không nhắc lại đáp án. Thang Likert dùng thống nhất cho mọi task:
> 1 = Hoàn toàn không đồng ý · 2 = Không đồng ý · 3 = Trung lật ·
> 4 = Đồng ý · 5 = Hoàn toàn đồng ý.
>
> Câu hỏi mã `Q01`–`Q12` giữ nguyên cách diễn đạt như trong
> `UXReality_UX_Metrics_Heuristics_Template.md` để gộp được kết quả giữa các
> task. Bộ câu hỏi sau task **không dùng câu hỏi mở** để dễ tổng hợp; chủ yếu
> dùng Likert, Multiple Choice và Single Choice. Mỗi task chọn câu hỏi như sau:
>
> - Luôn có `QD1` (độ khó), `QD2` (mức tự tin về kết quả cuối — phục vụ tiêu
>   chí SC-02 của task), `Q11` (multi-choice) và `Q12` (single-choice).
> - Chọn câu Likert `Q01`–`Q10` có nguyên tắc (P) **hoặc** heuristic (N) nằm
>   trong bộ P/N của task (xem bảng ánh xạ bên dưới), tối đa 4–5 câu/task, ưu
>   tiên câu thuộc heuristic trọng tâm.
> - Bỏ qua câu chỉ phát huy khi có tình huống tương ứng mà task không tạo ra
>   (ví dụ `Q09` cần có lỗi, `Q10` cần có hướng dẫn) trừ khi task có gắn mã đó.
>
> Khi cần thu lời nói xác minh cho SC-02 mà không dùng câu mở, dùng `QD2` (thang
> 1–5) để thu mức tự tin; các chi tiết định tính được đối chiếu từ think-aloud
> trong recording ở bước phân tích.

| Mã | Loại | Câu hỏi | Nguyên tắc | Heuristic |
|---|---|---|---|---|
| `QD1` | Likert 1–5 | Mức độ khó của nhiệm vụ từ 1 (rất dễ) đến 5 (rất khó) | — | — |
| `QD2` | Likert 1–5 | Tôi tự tin rằng kết quả cuối của nhiệm vụ đã được hệ thống ghi nhận đúng như tôi mong muốn. | P5 | N1 |
| `Qxx` | Likert 1–5 | `[trích lại nguyên văn từ UX Metrics Template]` | `[P#]` | `[N#]` |
| `Q11` | Multiple Choice | Bạn gặp những vấn đề nào khi thực hiện tác vụ? *(Có thể chọn nhiều đáp án.)* | Tất cả | N1–N10 |
| `Q12` | Single Choice | Khía cạnh nào ảnh hưởng nhiều nhất đến trải nghiệm của bạn trong phiên kiểm thử? | Tất cả | N1–N10 |

#### Bảng ánh xạ câu hỏi Likert với nguyên tắc và heuristic

| Mã | Nguyên tắc chính | Heuristic | Nội dung câu hỏi |
|---|---|---|---|
| Q01 | P5 | N1 | Trạng thái và phản hồi của hệ thống |
| Q02 | P2 | N2 | Ngôn ngữ và tính dễ hiểu |
| Q03 | — | N3 | Quyền kiểm soát |
| Q04 | P4 | N4 | Tính nhất quán |
| Q05 | P8 | N5 | Ngăn ngừa lỗi |
| Q06 | P3 | N6 | Nhận diện thay vì ghi nhớ |
| Q07 | P7 | N7 | Hiệu quả thao tác |
| Q08 | P3, P6 | N8 | Tính tối giản và tập trung |
| Q09 | P8 | N9 | Khôi phục sau lỗi |
| Q10 | P5 | N10 | Trợ giúp và hướng dẫn |

#### Lựa chọn cho `Q11` (Multiple Choice)

*Giữ nguyên danh sách lựa chọn giống Metrics Template để gộp dữ liệu giữa các task.*

- Không rõ hệ thống đang xử lý hay đã hoàn tất
- Không hiểu nhãn, biểu tượng hoặc thuật ngữ
- Khó quay lại, hủy hoặc sửa thao tác
- Thành phần hoặc hành vi không nhất quán
- Khó biết cách tránh lỗi
- Phải ghi nhớ thông tin từ bước trước
- Có quá nhiều bước hoặc thao tác
- Giao diện có quá nhiều thông tin gây nhiễu
- Không hiểu thông báo lỗi hoặc cách khắc phục
- Không tìm được hướng dẫn
- Không gặp vấn đề nào
- Khác

#### Lựa chọn cho `Q12` (Single Choice)

- Trạng thái / phản hồi
- Ngôn ngữ / tính dễ hiểu
- Quyền kiểm soát
- Tính nhất quán
- Ngăn ngừa lỗi
- Khả năng nhận diện thông tin
- Hiệu quả thao tác
- Tính tối giản
- Khôi phục lỗi
- Trợ giúp / hướng dẫn
- Không có vấn đề đáng kể
- Khác

> **Ghi chú:** Bằng chứng thô và nhật ký quan sát ở `## Bằng chứng và quan sát`
> (trước đây) được quản lý trong Analysis Package / Raw Evidence theo Test Plan,
> không nằm trong task specification. Kết quả pilot và quyết định go/no-go được
> ghi trong pilot log riêng, không ở trong task specification.
