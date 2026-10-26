# Task Specification — C-02: Thêm sản phẩm vào giỏ và nhận biết phản hồi

> **Vai trò:** Customer<br>
> **Phạm vi:** Customer Web<br>
> **Nguồn:** `../../Task_Specification_TEMPLATE.md`, EShop FR-06, FR-24<br>
> **Trạng thái:** Đặc tả trước pilot; chưa phải kết quả kiểm thử.

## 1. Thông tin chung

- **Task ID:** `C-02`
- **Tên task:** Thêm 2 đơn vị `Tai nghe AirPods Pro 2` vào giỏ và nhận biết thay đổi đã được ghi nhận
- **Vai trò:** `Customer`
- **FR liên quan:** `FR-06`, `FR-24`
- **UI/UX principles dự kiến:** `P2/P5/P8/P10`; **Nielsen heuristics dự kiến:** `N1/N4/N5/N6`
- **Priority:** `P1` (độ ưu tiên của task; không phải mã principle P1)
- **Phiên bản task:** `v1.0`
- **Mục tiêu nghiên cứu:** Đánh giá khả năng chọn số lượng, thực hiện hành động mua và nhận biết phản hồi trạng thái của người dùng Customer.
- **Thời lượng mục tiêu:** 1–3 phút; xác minh giới hạn hiện hành của tài khoản UXReality ở pilot.

## 2. User task

> Bạn muốn mua **2 đơn vị sản phẩm Tai nghe AirPods Pro 2**. Hãy thêm sản phẩm vào giỏ hàng và cho biết điều gì khiến bạn chắc rằng lựa chọn đã được ghi nhận.

Lời nhiệm vụ trên là thông tin duy nhất được đưa cho người tham gia. Không chỉ định trang chi tiết, ô số lượng, nút thêm giỏ hoặc loại phản hồi dự kiến.

## 3. Điều kiện ban đầu (Preconditions)

> Thông tin môi trường/URL/build được ghi ở log phiên, không đưa vào task specification. Phiên từ xa dùng Cloudflare Quick Tunnel (URL tạm, đổi mỗi lần khởi động tunnel) nên không cố định URL trong tài liệu.

- **Trạng thái đăng nhập:** Chưa đăng nhập; không yêu cầu đăng nhập để bắt đầu task.
- **Dữ liệu cần có:** Seed sản phẩm `Tai nghe AirPods Pro 2`, giá **6.000.000 ₫**, danh mục `Phụ kiện`; trang chi tiết sản phẩm tải được và còn tồn tại trong seed.
- **Trạng thái ban đầu:** Người tham gia bắt đầu từ trang chủ; giỏ hàng ban đầu **trống** và không có sản phẩm cũ; dữ liệu sản phẩm đã tải xong. Không yêu cầu badge giỏ phải tồn tại vì khả năng hiển thị badge là một điểm cần quan sát, không phải điều kiện setup.
- **Reset trước phiên:** Khôi phục database từ seed bằng `node database.js` trong `backend`; khởi động lại backend và frontend; mở browser/profile sạch hoặc xóa `localStorage.token` để bảo đảm không có phiên đăng nhập cũ; xác nhận giỏ trống trước khi mở phiên. Không có fixture dữ liệu giao dịch cho task này.
- **Phương thức phiên:** Chưa cần setup phase có điều khiển; có thể chạy moderated hoặc unmoderated tùy kết quả pilot. Nếu có moderator, moderator chỉ đọc prompt và quan sát, không chỉ đường điều hướng.
- **Thông tin không được cung cấp trước cho người tham gia:** Giá sản phẩm, tên danh mục, đường dẫn đến chi tiết sản phẩm, vị trí điều khiển số lượng/nút thêm giỏ và phản hồi dự kiến.

## 4. Tiêu chí thành công

| ID | Điều kiện cần quan sát | Loại | Cách xác minh |
|---|---|---|---|
| SC-01 | Giỏ chứa sản phẩm `Tai nghe AirPods Pro 2` với tổng số lượng **2** | Outcome | Recording + trạng thái giỏ cuối/screenshot |
| SC-02 | Người tham gia nêu được dấu hiệu cho biết lựa chọn đã được ghi nhận, dựa trên phản hồi hoặc trạng thái giỏ mà giao diện thực sự hiển thị | Usability | Recording + lời nói của người tham gia |
| SC-03 | Theo FR-07, sản phẩm cùng ID phải được gộp thành một dòng; nếu giao diện hiển thị nhiều dòng cho cùng sản phẩm, ghi nhận issue riêng và không mặc định quy cho participant | Optional | Reviewer đối chiếu trạng thái giỏ với FR; lỗi gộp dòng không ảnh hưởng outcome nếu tổng số lượng vẫn là 2 |
| SC-04 | Giá đơn vị là **6.000.000 ₫** và thành tiền của dòng số lượng 2 tương đương **12.000.000 ₫**, theo định dạng đang hiển thị | Optional | Screenshot giỏ; đối chiếu trực quan, không dùng để chứng minh tính đúng backend |

**Kết quả task:**

- `Success`: đạt SC-01 và SC-02, trong thời lượng cho phép, không cần trợ giúp nội dung ngoài protocol.
- `Partial`: sản phẩm đúng đã vào giỏ nhưng tổng số lượng cuối chưa phải 2, hoặc tổng số lượng đúng nhưng người tham gia không nhận biết phản hồi/trạng thái.
- `Fail`: không thêm được sản phẩm, thêm sai sản phẩm, hoặc kết thúc phiên với tổng số lượng của sản phẩm mục tiêu khác 2.
- `Invalid`: điều kiện ban đầu không đúng như chốt (dữ liệu seed thiếu, giỏ không thể khởi tạo sạch), lỗi kỹ thuật nghiêm trọng hoặc participant không thực hiện task.

## 5. Metrics

| Metric | Định nghĩa cho task này | Nguồn | Ghi chú thiếu dữ liệu |
|---|---|---|---|
| Task outcome | Phân loại theo định nghĩa Success/Partial/Fail/Invalid ở mục 4 | Reviewer đối chiếu recording + trạng thái giỏ cuối | Không mặc định UXReality tự phân loại outcome |
| Completion time | Từ khi người tham gia bắt đầu đọc/đồng ý thực hiện prompt đến khi giỏ đúng số lượng và người tham gia nêu dấu hiệu xác nhận | UXReality timestamp nếu có; nếu không, recording/manual timer | Ghi rõ công cụ đo; không bao gồm setup |
| Observable error count | Số lần chọn sai sản phẩm, nhập sai số lượng, thử lại thêm giỏ, tìm sai nơi kiểm tra giỏ hoặc đi sai luồng; lỗi backend không quan sát được không tính | Recording/observer | Một chuỗi lặp do cùng nguyên nhân được gộp thành một lỗi |
| Assistance count | Số lần moderator gợi ý nội dung ngoài protocol; đọc lại prompt không tính | Moderator log | Nếu unmoderated, ghi `Not applicable` |
| Perceived difficulty | Câu hỏi `QD1` thang 1–5 ở mục 6 | UXReality survey nếu hỗ trợ; nếu không, ghi thủ công | Không suy ra khó khăn chỉ từ thời gian |
| Additional data | Recording, click/scroll, thời gian, heatmap/visual attention nếu đã bật và xác minh | UXReality/manual | Ghi `Not available` nếu không có; không suy diễn từ tín hiệu đơn lẻ |

## 6. Câu hỏi sau task

> Hỏi ngay sau khi người tham gia báo đã xong task, trước khi trao đổi thêm.
> Không nhắc lại đáp án. Thang Likert: 1 = Hoàn toàn không đồng ý · 2 = Không
> đồng ý · 3 = Trung lật · 4 = Đồng ý · 5 = Hoàn toàn đồng ý.
> Cách diễn đạt `Q01`–`Q12` giống hệt
> `../../UXReality_UX_Metrics_Heuristics_Template.md` để gộp kết quả giữa các task.

| Mã | Loại | Câu hỏi | Nguyên tắc | Heuristic |
|---|---|---|---|---|
| `QD1` | Likert 1–5 | Mức độ khó của nhiệm vụ từ 1 (rất dễ) đến 5 (rất khó) | — | — |
| `QD2` | Likert 1–5 | Tôi tự tin rằng sản phẩm **Tai nghe AirPods Pro 2** với số lượng **2** đã được ghi nhận trong giỏ hàng. | P5, P10 | N1, N6 |
| `Q01` | Likert 1–5 | Khi tôi thực hiện một thao tác, hệ thống cho tôi biết rõ thao tác đó đã được ghi nhận hoặc đang xử lý. | P5 | N1 |
| `Q02` | Likert 1–5 | Các thuật ngữ, nhãn và biểu tượng trên giao diện dễ hiểu đối với tôi. | P2 | N2 |
| `Q05` | Likert 1–5 | Giao diện giúp tôi tránh được những thao tác sai hoặc phát hiện vấn đề trước khi hoàn tất thao tác. | P8 | N5 |
| `Q06` | Likert 1–5 | Tôi có thể tìm thấy lựa chọn và thông tin cần thiết trên giao diện mà không phải ghi nhớ từ các bước trước. | — | N6 |
| `Q11` | Multiple Choice | Bạn gặp những vấn đề nào khi thực hiện tác vụ? *(Có thể chọn nhiều đáp án.)* | Tất cả | N1–N10 |
| `Q12` | Single Choice | Khía cạnh nào ảnh hưởng nhiều nhất đến trải nghiệm của bạn trong phiên kiểm thử? | Tất cả | N1–N10 |

> **Ghi chú ánh xạ:** `N4` (Consistency) được khai báo cho C-02 nhưng task chỉ diễn ra trong phạm vi một–hai màn hình, khó quan sát tính nhất quán chéo màn hình; do đó `Q04` không dùng riêng cho task này. Tính nhất quán được đánh giá ở bước tổng hợp liên task, không hỏi người tham gia trong phiên đơn lẻ.

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
