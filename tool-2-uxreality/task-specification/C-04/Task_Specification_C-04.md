# Task Specification — C-04: Áp dụng coupon và hiểu tổng tiền

> **Vai trò:** Customer<br>
> **Phạm vi:** Customer Web<br>
> **Nguồn:** `../../Task_Specification_TEMPLATE.md`, EShop FR-08, FR-09<br>
> **Trạng thái:** Đặc tả trước pilot; chưa phải kết quả kiểm thử.

## 1. Thông tin chung

- **Task ID:** `C-04`
- **Tên task:** Áp dụng mã `SAVE10` cho đơn hàng đang chuẩn bị và xác định số tiền sau giảm
- **Vai trò:** `Customer`
- **FR liên quan:** `FR-08`, `FR-09`
- **UI/UX principles dự kiến:** `P2/P5/P8/P10`; **Nielsen heuristics dự kiến:** `N1/N2/N5/N9`
- **Priority:** `P1` (độ ưu tiên của task; không phải mã principle P1)
- **Phiên bản task:** `v1.0`
- **Mục tiêu nghiên cứu:** Đánh giá khả năng nhập coupon, hiểu phản hồi và xác định tổng thanh toán của người dùng Customer.
- **Thời lượng mục tiêu:** 1–3 phút; xác minh giới hạn hiện hành của tài khoản UXReality ở pilot.

## 2. User task

> Với đơn hàng đang chuẩn bị, hãy áp dụng mã **SAVE10** và cho biết số tiền sau giảm giá trước khi xác nhận đặt hàng.

Lời nhiệm vụ trên là thông tin duy nhất được đưa cho người tham gia. Không chỉ định ô mã, nút áp dụng, trường tổng tiền hoặc nút xác nhận thanh toán.

## 3. Điều kiện ban đầu (Preconditions)

> Thông tin môi trường/URL/build được ghi ở log phiên, không đưa vào task specification. Phiên từ xa dùng Cloudflare Quick Tunnel (URL tạm, đổi mỗi lần khởi động tunnel) nên không cố định URL trong tài liệu.

- **Trạng thái đăng nhập:** Đã đăng nhập bằng tài khoản Customer seed trong sandbox cô lập; không đưa mật khẩu/token vào prompt, screenshot, recording hay repository. Baseline dùng tài khoản seed do `database.js` tạo lại sau reset; đây là deviation so với yêu cầu tài khoản riêng trong Test Plan và phải được xác minh lại ở pilot.
- **Dữ liệu cần có:** Seed coupon `SAVE10`: loại `percent`, giá trị **10%**, ngưỡng tối thiểu **300.000 ₫**, hạn `2099-12-31`, active, tối đa **1 lần/người**; `coupon_usage` chưa có bản ghi cho tài khoản Customer. Giỏ chứa một dòng seed `iPhone 15 Pro Max`, số lượng **1**, tổng **30.000.000 ₫**; người tham gia đang ở trang checkout.
- **Trạng thái ban đầu:** Trang checkout đã tải xong, hiển thị đúng một sản phẩm và tổng trước giảm **30.000.000 ₫**; trường coupon trống; không có kết quả coupon/lỗi cũ.
- **Setup phase trước phép đo:** Thực hiện trên đúng browser/session của participant, trước khi bắt đầu phép đo và không tính vào completion time. Theo build hiện tại, đăng nhập bằng tài khoản Customer seed qua kênh an toàn; thêm iPhone một lần từ thẻ danh sách; mở checkout và xác nhận tổng 30.000.000 ₫. Đây là thao tác vận hành của moderator/setup script, không phải hướng dẫn đưa cho người tham gia. Nếu build thay đổi, setup phải được kiểm tra lại và ghi vào log pilot.
- **Reset trước phiên:** Dừng backend, chạy `node database.js` trong `backend` để tạo lại toàn bộ bảng và seed, khởi động `node server.js`, rồi Customer Web. Xóa `localStorage.token`, hard reload trình duyệt và thực hiện lại setup phase trên đúng phiên trình duyệt của participant; xác nhận `coupon_usage` rỗng và tổng giỏ **30.000.000 ₫**. Vì giỏ hiện là React state trong bộ nhớ, phải chuẩn bị trên đúng phiên trình duyệt của participant, không thể chỉ dựa vào seed database.
- **Điều kiện Go/No-Go:** Trước pilot phải chứng minh có thể bắt đầu phép đo UXReality mà không reload ứng dụng đã chuẩn bị và không làm mất React cart state/token (ví dụ bằng cách thử hai tab trên cùng Chrome). Nếu không thể giữ đúng cart và phiên đăng nhập, dừng thu thập dữ liệu chính thức cho C-04 cho tới khi staging có cơ chế fixture deterministic; không hạ phiên thành `Invalid` sau khi đã thấy kết quả.
- **Phương thức phiên:** Có thể chạy moderated hoặc unmoderated sau khi setup phase đã được xác minh; nếu có moderator, moderator không chỉ đường trong lúc phép đo.
- **Thông tin không được cung cấp trước cho người tham gia:** Công thức hoặc kết quả mong đợi **3.000.000 ₫** / **27.000.000 ₫**, vị trí ô coupon/nút áp dụng, trạng thái trường tổng tiền và hướng dẫn điều hướng.

## 4. Tiêu chí thành công

| ID | Điều kiện cần quan sát | Loại | Cách xác minh |
|---|---|---|---|
| SC-01 | Người tham gia nhập `SAVE10` và yêu cầu áp dụng mã cho đơn hàng đang chuẩn bị; giao diện trả về một phản hồi có thể quan sát được | Outcome | Recording + screenshot phản hồi coupon |
| SC-02 | Người tham gia xác định đúng số tiền sau giảm **mà giao diện đang hiển thị** và giải thích được nguồn thông tin đó | Usability | Lời nói cuối cùng + recording/screenshot |
| SC-03 | Theo FR-09 và công thức nghiệp vụ, giảm **3.000.000 ₫** và tổng cuối **27.000.000 ₫**; đây là kiểm tra tuân thủ riêng, không quy trách nhiệm cho người tham gia nếu hệ thống hiển thị sai | Optional | Reviewer đối chiếu response/trạng thái backend hoặc network log |
| SC-04 | Phản hồi coupon đủ rõ để người dùng hiểu kết quả; nếu thông báo mâu thuẫn với các giá trị, ghi issue riêng. Người tham gia vẫn không bị tính sai khi đọc đúng giá trị đang hiển thị | Optional | Screenshot phản hồi + lời nói |
| SC-05 | Người tham gia không xác nhận thanh toán trong task này | Optional | Recording; không có order mới |

**Kết quả task:**

- `Success`: đạt SC-01 và SC-02; người tham gia hoàn thành tương tác coupon và đọc đúng số tiền **đang được giao diện hiển thị**, trong thời lượng cho phép, không cần trợ giúp nội dung ngoài protocol.
- `Partial`: đã nhập `SAVE10` nhưng gặp phản hồi lỗi/không rõ, hoặc không xác định được số tiền cuối hiển thị dù đã nhận ra coupon có phản hồi.
- `Fail`: không nhập hoặc không thực hiện được thao tác áp dụng mã, hoặc xác nhận thanh toán ngoài phạm vi task.
- `Invalid`: Fixture không đúng điều kiện (tài khoản chưa đăng nhập, coupon không còn active/hết lượt do setup sai, giỏ không đúng **30.000.000 ₫**), lỗi kỹ thuật nghiêm trọng hoặc participant không thực hiện task.

> **Lưu ý phân tích:** Nếu hệ thống áp dụng sai phần trăm và hiển thị số tiền không đúng FR-09, vẫn ghi outcome theo khả năng người dùng sử dụng giao diện; ghi nhận sai lệch nghiệp vụ tại SC-03 như một usability/compliance issue riêng, không gán lỗi cho người tham gia.

## 5. Metrics

| Metric | Định nghĩa cho task này | Nguồn | Ghi chú thiếu dữ liệu |
|---|---|---|---|
| Task outcome | Phân loại theo định nghĩa Success/Partial/Fail/Invalid ở mục 4 | Reviewer đối chiếu recording + phản hồi hiển thị | Không mặc định UXReality tự phân loại outcome |
| Completion time | Từ khi người tham gia bắt đầu đọc/đồng ý thực hiện prompt đến khi nêu số tiền cuối đang hiển thị | UXReality timestamp nếu có; nếu không, recording/manual timer | Ghi rõ công cụ đo; không bao gồm setup |
| Observable error count | Số lần nhập sai mã, áp dụng lại không cần thiết, sửa tổng tiền không theo yêu cầu, tìm sai trường hoặc lặp thao tác | Recording/observer | Lỗi backend không quan sát được không tính; chuỗi cùng nguyên nhân gộp thành một lỗi |
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
| `QD2` | Likert 1–5 | Tôi tự tin rằng tôi đã nhập đúng mã **SAVE10** và đọc đúng số tiền sau giảm đang hiển thị. | P10 | N1, N2 |
| `Q01` | Likert 1–5 | Khi tôi thực hiện một thao tác, hệ thống cho tôi biết rõ thao tác đó đã được ghi nhận hoặc đang xử lý. | P5 | N1 |
| `Q02` | Likert 1–5 | Các thuật ngữ, nhãn và biểu tượng trên giao diện dễ hiểu đối với tôi. | P2 | N2 |
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
