# Task Specification — C-03: Cập nhật số lượng và xóa sản phẩm trong giỏ

> **Vai trò:** Customer<br>
> **Phạm vi:** Customer Web<br>
> **Nguồn:** `../../Task_Specification_TEMPLATE.md`, EShop FR-07, FR-23, FR-24<br>
> **Trạng thái:** Đặc tả trước pilot; chưa phải kết quả kiểm thử.

## 1. Thông tin chung

- **Task ID:** `C-03`
- **Tên task:** Đổi số lượng `Tai nghe AirPods Pro 2` thành 3 và xóa `Bàn phím cơ Keychron Q1`
- **Vai trò:** `Customer`
- **FR liên quan:** `FR-07`, `FR-23`, `FR-24`
- **UI/UX principles dự kiến:** `P4/P5/P8`; **Nielsen heuristics dự kiến:** `N1/N3/N4/N5/N9`
- **Priority:** `P1` (độ ưu tiên của task; không phải mã principle P1)
- **Phiên bản task:** `v1.0`
- **Mục tiêu nghiên cứu:** Đánh giá khả năng chỉnh số lượng, xóa có xác nhận và hiểu trạng thái giỏ của người dùng Customer.
- **Thời lượng mục tiêu:** 1–3 phút; xác minh giới hạn hiện hành của tài khoản UXReality ở pilot.

## 2. User task

> Trong giỏ hàng đã chuẩn bị, hãy đổi số lượng sản phẩm **Tai nghe AirPods Pro 2** thành **3** và xóa sản phẩm **Bàn phím cơ Keychron Q1**. Hãy cho biết bạn hiểu kết quả như thế nào.

Lời nhiệm vụ trên là thông tin duy nhất được đưa cho người tham gia. Không chỉ định nút `+/-`, nút xóa, thao tác xác nhận hoặc vị trí nào hiển thị tổng tiền.

## 3. Điều kiện ban đầu (Preconditions)

> Thông tin môi trường/URL/build được ghi ở log phiên, không đưa vào task specification. Phiên từ xa dùng Cloudflare Quick Tunnel (URL tạm, đổi mỗi lần khởi động tunnel) nên không cố định URL trong tài liệu.

- **Trạng thái đăng nhập:** Không yêu cầu đăng nhập; luồng giỏ hàng trong Customer Web hiện không yêu cầu tài khoản cho thao tác xem/chỉnh sửa giỏ.
- **Dữ liệu cần có:** Hai sản phẩm seed `Tai nghe AirPods Pro 2` (đơn giá **6.000.000 ₫**) và `Bàn phím cơ Keychron Q1` (đơn giá **4.000.000 ₫**). Giỏ được chuẩn bị sẵn chứa đúng hai dòng: AirPods số lượng **2**, bàn phím số lượng **1**; tổng ban đầu **16.000.000 ₫**.
- **Trạng thái ban đầu:** Người tham gia bắt đầu tại trang giỏ hàng; giỏ đã tải xong; không có toast lỗi từ thao tác trước; nội dung giỏ khớp với fixture. Không yêu cầu badge giỏ phải tồn tại vì khả năng hiển thị badge là một điểm cần quan sát, không phải điều kiện setup.
- **Setup phase trước phép đo:** Thực hiện trên đúng browser/session của participant, trước khi bắt đầu phép đo và không tính vào completion time. Theo build hiện tại, mở chi tiết AirPods, đặt số lượng 2 và nhấn thêm giỏ hai lần vì lần nhấn đầu bị bỏ qua; thêm Keychron từ thẻ danh sách một lần để tạo dòng số lượng 1; mở giỏ và xác nhận hai dòng cùng tổng 16.000.000 ₫. Đây là thao tác vận hành của moderator/setup script, không phải hướng dẫn đưa cho người tham gia. Nếu build thay đổi, setup phải được kiểm tra lại và ghi vào log pilot.
- **Reset trước phiên:** Khôi phục database từ seed bằng `node database.js` trong `backend`; khởi động lại backend và frontend; xóa `localStorage.token` nếu có; thực hiện lại setup phase trên đúng browser/session của participant; xác nhận đúng hai dòng và số lượng trước khi mở phiên. Vì giỏ hiện chỉ tồn tại trong React state, không thể chuẩn bị riêng C-03 chỉ bằng seed database.
- **Điều kiện Go/No-Go:** Trước pilot phải chứng minh có thể bắt đầu phép đo UXReality mà không reload ứng dụng đã chuẩn bị và không làm mất React cart state (ví dụ bằng cách thử hai tab trên cùng Chrome). Nếu không thể giữ đúng cart, dừng thu thập dữ liệu chính thức cho C-03 cho tới khi staging có cơ chế fixture deterministic; không hạ phiên thành `Invalid` sau khi đã thấy kết quả.
- **Phương thức phiên:** Có thể chạy moderated hoặc unmoderated sau khi setup phase đã được xác minh; nếu có moderator, moderator không chỉ đường trong lúc phép đo.
- **Thông tin không được cung cấp trước cho người tham gia:** Tổng tiền sau thao tác, điều khiển `+/-`, nút xóa, yêu cầu xác nhận, nhãn tổng cộng và hướng dẫn điều hướng.

## 4. Tiêu chí thành công

| ID | Điều kiện cần quan sát | Loại | Cách xác minh |
|---|---|---|---|
| SC-01 | Dòng `Tai nghe AirPods Pro 2` có số lượng **3** | Outcome | Recording + trạng thái giỏ cuối/screenshot |
| SC-02 | Dòng `Bàn phím cơ Keychron Q1` không còn trong giỏ; nếu giao diện có dialog xác nhận, người tham gia thực hiện xác nhận trước khi xóa | Outcome | Recording + trạng thái giỏ cuối/screenshot |
| SC-03 | Người tham gia mô tả đúng kết quả cuối: giỏ còn một dòng AirPods số lượng 3 và tổng tiền tương đương **18.000.000 ₫** theo định dạng đang hiển thị | Usability | Lời nói cuối cùng và trạng thái giỏ |
| SC-04 | Việc xóa được thực hiện qua luồng có xác nhận, không xóa nhầm dòng khác | Optional | Recording; đánh dấu `N/A` nếu build không có dialog xác nhận và ghi nhận ngoại lệ FR |

**Kết quả task:**

- `Success`: đạt SC-01, SC-02 và SC-03, trong thời lượng cho phép, không cần trợ giúp nội dung ngoài protocol.
- `Partial`: chỉ đạt một trong hai thay đổi trạng thái bắt buộc, hoặc trạng thái cuối đúng nhưng người tham gia không mô tả/đọc đúng kết quả.
- `Fail`: không thực hiện được thay đổi nào, thay đổi sai số lượng, xóa nhầm sản phẩm, hoặc kết thúc phiên với trạng thái giỏ không đúng mục tiêu.
- `Invalid`: Fixture giỏ không đúng điều kiện, lỗi kỹ thuật nghiêm trọng, dữ liệu bị mất giữa chừng hoặc participant không thực hiện task.

> **Lưu ý phân tích:** FR-07 yêu cầu nút `+/-` chỉnh số lượng và FR-23/FR-24 yêu cầu dialog xác nhận khi xóa. Nếu bản build không cung cấp các điều khiển này, ghi nhận là FR deviation ở issue log riêng. Outcome vẫn dựa trên mức độ hoàn thành mục tiêu thực tế của người tham gia (ví dụ chỉ hoàn tất xóa thì `Partial`), nhưng không ghi nhận lỗi nhầm lẫn khi người tham gia đã tìm đúng cách mà giao diện không hỗ trợ.

## 5. Metrics

| Metric | Định nghĩa cho task này | Nguồn | Ghi chú thiếu dữ liệu |
|---|---|---|---|
| Task outcome | Phân loại theo định nghĩa Success/Partial/Fail/Invalid ở mục 4 | Reviewer đối chiếu recording + trạng thái giỏ cuối | Không mặc định UXReality tự phân loại outcome |
| Completion time | Từ khi người tham gia bắt đầu đọc/đồng ý thực hiện prompt đến khi giỏ đúng trạng thái và người tham gia mô tả kết quả | UXReality timestamp nếu có; nếu không, recording/manual timer | Ghi rõ công cụ đo; không bao gồm setup |
| Observable error count | Số lần tăng/giảm sai, xóa nhầm, đóng/hủy xác nhận rồi thử lại, tìm sai điều khiển hoặc lặp thao tác không cần thiết | Recording/observer | Lỗi backend không quan sát được không tính; chuỗi cùng nguyên nhân gộp thành một lỗi |
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
| `QD2` | Likert 1–5 | Tôi tự tin rằng giỏ hàng hiện đã đúng: **Tai nghe AirPods Pro 2** số lượng **3** và không còn **Bàn phím cơ Keychron Q1**. | P5 | N1 |
| `Q01` | Likert 1–5 | Khi tôi thực hiện một thao tác, hệ thống cho tôi biết rõ thao tác đó đã được ghi nhận hoặc đang xử lý. | P5 | N1 |
| `Q03` | Likert 1–5 | Khi cần, tôi có thể dễ dàng quay lại, hủy thao tác hoặc thoát khỏi bước hiện tại. | — | N3 |
| `Q04` | Likert 1–5 | Các nút, biểu tượng, thuật ngữ và cách tương tác được sử dụng nhất quán trong sản phẩm. | P4 | N4 |
| `Q05` | Likert 1–5 | Giao diện giúp tôi tránh được những thao tác sai hoặc phát hiện vấn đề trước khi hoàn tất thao tác. | P8 | N5 |
| `Q09` | Likert 1–5 | Khi xảy ra lỗi, thông báo giúp tôi hiểu vấn đề và biết cách tiếp tục hoặc khắc phục. | P8 | N9 |
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
