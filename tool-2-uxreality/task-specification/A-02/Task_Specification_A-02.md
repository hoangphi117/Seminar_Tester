# Task Specification — A-02: Cập nhật giá sản phẩm và nhận biết thao tác đã lưu

> **Vai trò:** Admin<br>
> **Phạm vi:** Admin Web<br>
> **Nguồn:** `../../Task_Specification_TEMPLATE.md`, EShop FR-15<br>
> **Trạng thái:** Đặc tả trước pilot; chưa phải kết quả kiểm thử.

## 1. Thông tin chung

- **Task ID:** `A-02`
- **Tên task:** Cập nhật giá `Tai nghe AirPods Pro 2` thành **6.500.000 ₫**
- **Vai trò:** `Admin`
- **FR liên quan:** `FR-15`
- **UI/UX principles dự kiến:** `P4/P5/P8`; **Nielsen heuristics dự kiến:** `N1/N4/N5/N9`
- **Priority:** `P1` (độ ưu tiên của task; không phải mã principle P1)
- **Phiên bản task:** `v1.0`
- **Mục tiêu nghiên cứu:** Đánh giá khả năng tìm đúng sản phẩm, sửa đúng trường và nhận biết kết quả lưu của người dùng Admin.
- **Thời lượng mục tiêu:** 1–3 phút; xác minh giới hạn hiện hành của tài khoản UXReality ở pilot.

## 2. User task

> Hãy cập nhật giá của sản phẩm kiểm thử **Tai nghe AirPods Pro 2** thành **6.500.000 ₫**. Sau khi lưu, hãy chỉ ra điều gì cho bạn biết thay đổi đã được ghi nhận.

Lời nhiệm vụ trên là thông tin duy nhất được đưa cho người tham gia. Không chỉ định tab, nút `Sửa`, trường giá, nút `Lưu sản phẩm` hoặc loại thông báo kết quả.

## 3. Điều kiện ban đầu (Preconditions)

> Thông tin môi trường/URL/build được ghi ở log phiên, không đưa vào task specification. Phiên từ xa dùng Cloudflare Quick Tunnel (URL tạm, đổi mỗi lần khởi động tunnel) nên không cố định URL trong tài liệu.

- **Trạng thái đăng nhập:** Đã đăng nhập bằng tài khoản Admin seed trong sandbox cô lập; không đưa email, mật khẩu hoặc token vào prompt, screenshot, recording hay repository. Baseline dùng tài khoản seed do `database.js` tạo lại sau reset; đây là deviation so với yêu cầu tài khoản riêng trong Test Plan và phải được xác minh lại ở pilot.
- **Dữ liệu cần có:** Seed sản phẩm `Tai nghe AirPods Pro 2` (ID **4**) có giá ban đầu **6.000.000 ₫**; các sản phẩm seed khác giữ nguyên. Dùng bản ghi sản phẩm này làm sandbox có thể khôi phục; không cần tạo dữ liệu thật.
- **Trạng thái ban đầu:** Admin Web đã tải xong và mở khu vực quản lý sản phẩm; bảng sản phẩm hiển thị đủ 5 sản phẩm seed với giá ban đầu; không có form sửa nào đang mở; không có toast lỗi cũ.
- **Reset trước phiên:** Dừng backend, chạy `node database.js` trong `backend`, khởi động `node server.js`, rồi Admin Web. Lưu ý khởi động lại backend cũng tạo lại database; nạp/kiểm tra fixture sau khi backend đã chạy. Xóa `localStorage.adminToken`, hard reload và đăng nhập Admin seed qua kênh an toàn; xác nhận giá `Tai nghe AirPods Pro 2` là **6.000.000 ₫** và bảng có đúng 5 sản phẩm trước khi mở phiên.
- **Thông tin không được cung cấp trước cho người tham gia:** Vị trí sản phẩm/tab, nút sửa/lưu, thông báo thành công, ID sản phẩm và các giá trị của sản phẩm khác.

## 4. Tiêu chí thành công

| ID | Điều kiện cần quan sát | Loại | Cách xác minh |
|---|---|---|---|
| SC-01 | Người tham gia mở đúng sản phẩm `Tai nghe AirPods Pro 2`, thay **đúng trường giá** thành **6.500.000 ₫** và lưu | Outcome | Recording + API/database state sau phiên |
| SC-02 | Người tham gia nêu được dấu hiệu cho biết thao tác lưu đã được ghi nhận, dựa trên phản hồi mà giao diện thực sự hiển thị; nếu giao diện không có phản hồi, người tham gia vẫn có thể dựa vào trạng thái bảng sau lưu nếu trạng thái đó đúng và họ nhận biết được | Usability | Recording/screenshot phản hồi + lời nói |
| SC-03 | Giá của `Tai nghe AirPods Pro 2` là **6.500.000 ₫** sau khi lưu; tên, mô tả, danh mục và giá của các sản phẩm khác không đổi | Optional | Reviewer đối chiếu API/database và bảng sau reload |
| SC-04 | Phản hồi sau lưu đủ rõ để người dùng xác nhận thao tác; nếu thông báo hoặc bảng hiển thị mâu thuẫn, ghi issue riêng. Người tham gia không bị tính sai khi họ nhận biết phản hồi đang hiển thị | Optional | Screenshot phản hồi + lời nói |
| SC-05 | Không có thao tác xóa hoặc tạo sản phẩm mới | Optional | Recording + đối chiếu trạng thái database |

**Kết quả task:**

- `Success`: đạt SC-01 và SC-02; giá được cập nhật đúng và người tham gia nhận biết kết quả lưu, trong thời lượng cho phép, không cần trợ giúp nội dung ngoài protocol.
- `Partial`: sửa/lưu đúng giá nhưng người tham gia không nêu được dấu hiệu xác nhận từ giao diện, dù hệ thống có hiển thị phản hồi.
- `Fail`: sửa sai sản phẩm/trường, không lưu được, lưu sai giá, hoặc thay đổi dữ liệu ngoài phạm vi.
- `Invalid`: điều kiện ban đầu không đúng như chốt (Admin chưa đăng nhập, giá seed không đúng **6.000.000 ₫**, bảng sản phẩm thiếu dữ liệu), lỗi kỹ thuật nghiêm trọng hoặc participant không thực hiện task.

> **Lưu ý phân tích:** Nếu UI sau lưu hiển thị sai tên của nhiều sản phẩm nhưng database chỉ đổi đúng sản phẩm, outcome dựa trên khả năng người dùng nhận biết kết quả; hiện tượng hiển thị sai được ghi tại SC-02/SC-03 và phân tích như issue độc lập.

## 5. Metrics

| Metric | Định nghĩa cho task này | Nguồn | Ghi chú thiếu dữ liệu |
|---|---|---|---|
| Task outcome | Phân loại theo định nghĩa Success/Partial/Fail/Invalid ở mục 4 | Reviewer đối chiếu recording + state sản phẩm cuối | Không mặc định UXReality tự phân loại outcome |
| Completion time | Từ khi người tham gia bắt đầu đọc/đồng ý thực hiện prompt đến khi giá được lưu và người tham gia nêu dấu hiệu xác nhận | UXReality timestamp nếu có; nếu không, recording/manual timer | Ghi rõ công cụ đo; không bao gồm setup |
| Observable error count | Số lần chọn sai sản phẩm, sửa nhầm tên/giá/mô tả, nhập sai giá, không tìm thấy nút lưu hoặc lặp lưu | Recording/observer | Lỗi backend không quan sát được không tính; chuỗi cùng nguyên nhân gộp thành một lỗi |
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
| `QD2` | Likert 1–5 | Tôi tự tin rằng giá của **Tai nghe AirPods Pro 2** đã được cập nhật thành **6.500.000 ₫**. | P5 | N1, N4 |
| `Q01` | Likert 1–5 | Khi tôi thực hiện một thao tác, hệ thống cho tôi biết rõ thao tác đó đã được ghi nhận hoặc đang xử lý. | P5 | N1 |
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
