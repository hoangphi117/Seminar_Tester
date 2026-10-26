# Task Specification — C-01: Tìm sản phẩm và xác định giá

> **Vai trò:** Customer<br>
> **Phạm vi:** Customer Web<br>
> **Nguồn:** `../../Task_Specification_TEMPLATE.md`, EShop FR-05<br>
> **Trạng thái:** Đặc tả trước pilot; chưa phải kết quả kiểm thử.

## 1. Thông tin chung

- **Task ID:** `C-01`
- **Tên task:** Tìm sản phẩm `Tai nghe AirPods Pro 2` và xác định giá hiển thị
- **Vai trò:** `Customer`
- **FR liên quan:** `FR-05`
- **UI/UX principles dự kiến:** `P2/P3/P7`; **Nielsen heuristics dự kiến:** `N2/N6/N7/N8`
- **Priority:** `P1` (độ ưu tiên của task; không phải mã principle P1)
- **Phiên bản task:** `v1.0`
- **Mục tiêu nghiên cứu:** Đánh giá khả năng tìm kiếm và đọc thông tin sản phẩm của người dùng Customer.
- **Thời lượng mục tiêu:** 1–3 phút; xác minh giới hạn hiện hành của tài khoản UXReality ở pilot.

## 2. User task

> Hãy tìm sản phẩm **Tai nghe AirPods Pro 2** và cho biết giá đang hiển thị.

Lời nhiệm vụ trên là thông tin duy nhất được đưa cho người tham gia. Không chỉ định ô tìm kiếm, thẻ sản phẩm, menu hoặc nút cần dùng.

## 3. Điều kiện ban đầu (Preconditions)

> Thông tin môi trường/URL/build được ghi ở log phiên, không đưa vào task specification. Phiên từ xa dùng Cloudflare Quick Tunnel (URL tạm, đổi mỗi lần khởi động tunnel) nên không cố định URL trong tài liệu.

- **Trạng thái đăng nhập:** Không yêu cầu đăng nhập; task phải hoàn thành được từ trang chủ.
- **Dữ liệu cần có:** Seed `Tai nghe AirPods Pro 2`, giá seed **6.000.000 ₫**, thuộc danh mục `Phụ kiện`; các sản phẩm seed còn lại vẫn tồn tại để tạo mức độ nhiễu thực tế.
- **Trạng thái ban đầu:** Trang chủ đã tải xong, danh sách sản phẩm hiển thị; không có thông báo lỗi tải dữ liệu; viewport desktop đã chốt và ghi nhận.
- **Reset trước phiên:** Khôi phục database từ seed bằng `node database.js` trong `backend`; khởi động lại backend và frontend; mở browser/profile sạch hoặc xóa `localStorage.token` để bảo đảm không có phiên đăng nhập cũ; xác nhận trang chủ có đủ 5 sản phẩm seed. Không có fixture dữ liệu giao dịch cho task này.
- **Phương thức phiên:** Chưa cần setup phase có điều khiển; có thể chạy moderated hoặc unmoderated tùy kết quả pilot. Nếu có moderator, moderator chỉ đọc prompt và quan sát, không chỉ đường điều hướng.
- **Thông tin không được cung cấp trước cho người tham gia:** Giá đúng **6.000.000 ₫**, tên danh mục, vị trí tìm kiếm/thẻ sản phẩm và hướng dẫn điều hướng.

## 4. Tiêu chí thành công

| ID | Điều kiện cần quan sát | Loại | Cách xác minh |
|---|---|---|---|
| SC-01 | Người tham gia xác định đúng sản phẩm `Tai nghe AirPods Pro 2` trong danh mục sản phẩm và báo đúng số tiền **6.000.000** cùng đơn vị đang hiển thị | Outcome | Recording/screenshot của sản phẩm mục tiêu (thẻ danh sách hoặc trang chi tiết) và câu trả lời cuối của người tham gia |
| SC-02 | Người tham gia cho biết họ đã nhận biết sản phẩm/giá qua thông tin nhìn thấy trên màn hình, không cần moderator chỉ đường | Usability | Lời nói và hành vi quan sát được trong recording |
| SC-03 | Theo FR-05, giá phải được hiển thị bằng `₫` với dấu phân cách nghìn; nếu giao diện dùng nhãn khác, ghi nhận là issue nhưng không tính người tham gia sai khi họ đọc đúng nhãn đang hiển thị | Optional | Reviewer đối chiếu screenshot; không quy trách nhiệm cho participant nếu hệ thống hiển thị sai định dạng |

**Kết quả task:**

- `Success`: đạt SC-01 và SC-02, trong thời lượng cho phép, không cần trợ giúp nội dung ngoài protocol.
- `Partial`: tìm thấy đúng sản phẩm nhưng câu trả lời cuối thiếu giá hoặc chưa gắn đúng giá với sản phẩm.
- `Fail`: không tìm thấy/chọn sai sản phẩm, hoặc kết thúc phiên với giá sai sau khi đã có cơ hội kiểm tra lại.
- `Invalid`: điều kiện ban đầu không đúng như chốt (dữ liệu seed không tồn tại, trang không tải được), mất kết nối nghiêm trọng hoặc participant không thực hiện task.

## 5. Metrics

| Metric | Định nghĩa cho task này | Nguồn | Ghi chú thiếu dữ liệu |
|---|---|---|---|
| Task outcome | Phân loại theo định nghĩa Success/Partial/Fail/Invalid ở mục 4 | Reviewer đối chiếu recording + câu trả lời cuối | Không mặc định UXReality tự phân loại outcome |
| Completion time | Từ khi người tham gia bắt đầu đọc/đồng ý thực hiện prompt đến khi đưa ra giá cuối cùng | UXReality timestamp nếu có; nếu không, reviewer dùng recording/manual timer | Ghi rõ công cụ dùng để đo; không bao gồm thời gian setup |
| Observable error count | Số lần nhập từ khóa sai, mở nhầm sản phẩm, lặp tìm kiếm không cần thiết hoặc đi sai luồng; không đếm lỗi backend không quan sát được | Recording/observer | Một chuỗi lặp lại ghi thành một lỗi nếu cùng nguyên nhân |
| Assistance count | Số lần moderator gợi ý nội dung ngoài protocol; đọc lại prompt không tính | Moderator log | Nếu unmoderated, ghi `Not applicable` |
| Perceived difficulty | Câu hỏi `QD1` thang 1–5 ở mục 6 | UXReality survey nếu hỗ trợ; nếu không, ghi thủ công | Không suy ra khó khăn chỉ từ thời gian |
| Additional data | Recording màn hình, click/scroll, thời gian và heatmap/visual attention nếu cấu hình đã được xác minh | UXReality/manual | Ghi `Not available` cho dữ liệu không được bật; không diễn giải tín hiệu đơn lẻ thành nguyên nhân |

## 6. Câu hỏi sau task

> Hỏi ngay sau khi người tham gia báo đã xong task, trước khi trao đổi thêm.
> Không nhắc lại đáp án. Thang Likert: 1 = Hoàn toàn không đồng ý · 2 = Không
> đồng ý · 3 = Trung lật · 4 = Đồng ý · 5 = Hoàn toàn đồng ý.
> Cách diễn đạt `Q01`–`Q12` giống hệt
> `../../UXReality_UX_Metrics_Heuristics_Template.md` để gộp kết quả giữa các task.

| Mã | Loại | Câu hỏi | Nguyên tắc | Heuristic |
|---|---|---|---|---|
| `QD1` | Likert 1–5 | Mức độ khó của nhiệm vụ từ 1 (rất dễ) đến 5 (rất khó) | — | — |
| `QD2` | Likert 1–5 | Tôi tự tin rằng giá tôi báo là giá của **đúng sản phẩm Tai nghe AirPods Pro 2** đang hiển thị trên màn hình. | P3 | N6 |
| `Q02` | Likert 1–5 | Các thuật ngữ, nhãn và biểu tượng trên giao diện dễ hiểu đối với tôi. | P2 | N2 |
| `Q06` | Likert 1–5 | Tôi có thể tìm thấy lựa chọn và thông tin cần thiết trên giao diện mà không phải ghi nhớ từ các bước trước. | P3 | N6 |
| `Q07` | Likert 1–5 | Tôi có thể hoàn thành tác vụ với số bước và nỗ lực hợp lý. | P7 | N7 |
| `Q08` | Likert 1–5 | Bố cục chỉ hiển thị lượng thông tin cần thiết để tôi hiểu và hoàn thành tác vụ. | P3 | N8 |
| `Q11` | Multiple Choice | Bạn gặp những vấn đề nào khi thực hiện tác vụ? *(Có thể chọn nhiều đáp án.)* | Tất cả | N1–N10 |
| `Q12` | Single Choice | Khía cạnh nào ảnh hưởng nhiều nhất đến trải nghiệm của bạn trong phiên kiểm thử? | Tất cả | N1–N10 |

### Lựa chọn cho `Q11` (Multiple Choice)

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

### Lựa chọn cho `Q12` (Single Choice)

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
