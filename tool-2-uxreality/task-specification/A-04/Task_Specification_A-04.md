# Task Specification — A-04: Chuyển trạng thái đơn hàng hợp lệ

> **Vai trò:** Admin<br>
> **Phạm vi:** Admin Web<br>
> **Nguồn:** `../../Task_Specification_TEMPLATE.md`, EShop FR-10, FR-18<br>
> **Trạng thái:** Đặc tả trước pilot; chưa phải kết quả kiểm thử.

## 1. Thông tin chung

- **Task ID:** `A-04`
- **Tên task:** Chuyển đơn hàng `#1` từ `Chờ xác nhận` sang `Đã xác nhận`
- **Vai trò:** `Admin`
- **FR liên quan:** `FR-10`, `FR-18`
- **UI/UX principles dự kiến:** `P2/P4/P5/P8/P10`; **Nielsen heuristics dự kiến:** `N1/N2/N3/N4/N9`
- **Priority:** `P1` (độ ưu tiên của task; không phải mã principle P1)
- **Phiên bản task:** `v1.0`
- **Mục tiêu nghiên cứu:** Đánh giá khả năng tìm đơn, nhận biết hành động được phép, chuyển trạng thái và kiểm tra kết quả của người dùng Admin.
- **Thời lượng mục tiêu:** 1–3 phút; xác minh giới hạn hiện hành của tài khoản UXReality ở pilot.

## 2. User task

> Hãy tìm đơn hàng thử nghiệm **#1** và chuyển đơn từ trạng thái **Chờ xác nhận** sang trạng thái **Đã xác nhận**. Hãy cho biết bạn xác định trạng thái mới bằng cách nào.

Lời nhiệm vụ trên là thông tin duy nhất được đưa cho người tham gia. Không chỉ định tab quản lý đơn, nút hành động cụ thể hoặc API cần dùng.

## 3. Điều kiện ban đầu (Preconditions)

> Thông tin môi trường/URL/build được ghi ở log phiên, không đưa vào task specification. Phiên từ xa dùng Cloudflare Quick Tunnel (URL tạm, đổi mỗi lần khởi động tunnel) nên không cố định URL trong tài liệu.

- **Trạng thái đăng nhập:** Đã đăng nhập bằng tài khoản Admin seed trong sandbox cô lập; không đưa email, mật khẩu hoặc token vào prompt, screenshot, recording hay repository. Baseline dùng tài khoản seed do `database.js` tạo lại sau reset; đây là deviation so với yêu cầu tài khoản riêng trong Test Plan và phải được xác minh lại ở pilot.
- **Dữ liệu cần có:** Đúng **3 đơn** fixture của tài khoản Customer seed (ID **2**): mục tiêu `#1`, tổng **30.000.000 ₫**, trạng thái `pending` (UI: **Chờ xác nhận**), địa chỉ giao hàng giả `123 Lê Lợi, Quận 1, TP.HCM`; hai đơn nhiễu `#2` (**28.000.000 ₫**, `pending`) và `#3` (**45.000.000 ₫**, `confirmed`). Fixture được tạo sau khi backend đã chạy vì seed không có bản ghi `orders`.
- **Trạng thái ban đầu:** Admin Web đã tải xong và mở khu vực quản lý đơn hàng; bảng hiển thị đúng 3 dòng `#1`, `#2`, `#3`, trong đó `#1` ở trạng thái **Chờ xác nhận**; không có alert/toast lỗi cũ; trang không đang xử lý thao tác khác.
- **Reset trước phiên:** Dừng backend, chạy `node database.js` trong `backend`, khởi động `node server.js`, rồi Admin Web. Lưu ý khởi động lại backend cũng tạo lại database; fixture phải được nạp **sau** khi backend đã chạy. Chạy lệnh fixture `order-status` được ghi trong `README.md` để nạp 3 đơn nêu trên. Khi dùng staging, thay đường dẫn sau `--db` bằng đường dẫn chính xác của instance đó; chỉ chạy trên sandbox cô lập. Xóa `localStorage.adminToken`, hard reload và đăng nhập Admin seed qua kênh an toàn. Xác nhận API `GET /api/admin/orders` trả đúng 3 đơn với ID/trạng thái/tổng nêu trên trước khi mở phiên. Sau phiên, chạy lại lệnh fixture để đưa `#1` về `pending` hoặc reset toàn bộ seed.
- **Thông tin không được cung cấp trước cho người tham gia:** Vị trí tab/bảng đơn, nút chuyển trạng thái, API/state machine, phản hồi sau thao tác và cách kiểm tra ngoài màn hình.

## 4. Tiêu chí thành công

| ID | Điều kiện cần quan sát | Loại | Cách xác minh |
|---|---|---|---|
| SC-01 | Người tham gia tìm đúng đơn `#1` và thực hiện chuyển `pending` → `confirmed` | Outcome | Recording + response/state đơn sau phiên |
| SC-02 | Trạng thái mới được hiển thị là **Đã xác nhận**, và người tham gia nêu được dấu hiệu/cách kiểm tra từ giao diện | Usability | Screenshot + lời nói cuối |
| SC-03 | Đơn `#1` vẫn thuộc tài khoản Customer seed (ID **2**) và tổng vẫn **30.000.000 ₫**; hai đơn nhiễu `#2`, `#3` không bị thay đổi trạng thái | Optional | Reviewer đối chiếu API/database sau phiên |
| SC-04 | Không thử chuyển `canceled` hoặc trạng thái cuối trong baseline này; nếu participant cố thử một transition không hợp lệ, ghi nhận là lỗi tương tác của participant trong baseline, không mở thêm study/biến thể ngoài protocol | Optional | Recording; ghi rõ hành động đã thử |

**Kết quả task:**

- `Success`: đạt SC-01 và SC-02; đơn chuyển đúng sang `confirmed`, giao diện hiển thị trạng thái mới và người tham gia biết cách kiểm tra, trong thời lượng cho phép, không cần trợ giúp nội dung ngoài protocol.
- `Partial`: tìm thấy đơn và thực hiện một hành động nhưng không đạt đúng trạng thái đích, hoặc trạng thái backend đúng nhưng giao diện/lời nói không cho người tham gia xác nhận.
- `Fail`: không tìm thấy đơn, không chuyển được trạng thái, chuyển sai trạng thái/đơn, hoặc sửa dữ liệu ngoài phạm vi.
- `Invalid`: điều kiện ban đầu không đúng như chốt (Admin chưa đăng nhập, fixture không đúng 3 đơn với `#1` ở trạng thái `pending`, bảng đơn không tải được), lỗi kỹ thuật nghiêm trọng hoặc participant không thực hiện task.

> **Lưu ý phân tích:** Baseline chỉ đi qua transition hợp lệ `pending → confirmed`. Không kết hợp các transition `confirmed → shipping → delivered` hoặc hủy đơn vào cùng task để giữ task ngắn; các biến thể sai state machine chỉ chạy ở study riêng sau pilot.

## 5. Metrics

| Metric | Định nghĩa cho task này | Nguồn | Ghi chú thiếu dữ liệu |
|---|---|---|---|
| Task outcome | Phân loại theo định nghĩa Success/Partial/Fail/Invalid ở mục 4 | Reviewer đối chiếu recording + state đơn cuối | Không mặc định UXReality tự phân loại outcome |
| Completion time | Từ khi người tham gia bắt đầu đọc/đồng ý thực hiện prompt đến khi trạng thái mới hiển thị và người tham gia nêu cách kiểm tra | UXReality timestamp nếu có; nếu không, recording/manual timer | Ghi rõ công cụ đo; không bao gồm setup |
| Observable error count | Số lần chọn sai đơn, chọn hành động sai, xem lại nhiều lần không cần thiết hoặc đi sai luồng | Recording/observer | Lỗi backend không quan sát được không tính; chuỗi cùng nguyên nhân gộp thành một lỗi |
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
| `QD2` | Likert 1–5 | Tôi tự tin rằng đơn hàng **#1** đã chuyển sang trạng thái **Đã xác nhận** như hiển thị trên màn hình. | P5, P10 | N1, N4 |
| `Q01` | Likert 1–5 | Khi tôi thực hiện một thao tác, hệ thống cho tôi biết rõ thao tác đó đã được ghi nhận hoặc đang xử lý. | P5 | N1 |
| `Q02` | Likert 1–5 | Các thuật ngữ, nhãn và biểu tượng trên giao diện dễ hiểu đối với tôi. | P2 | N2 |
| `Q03` | Likert 1–5 | Khi cần, tôi có thể dễ dàng quay lại, hủy thao tác hoặc thoát khỏi bước hiện tại. | — | N3 |
| `Q04` | Likert 1–5 | Các nút, biểu tượng, thuật ngữ và cách tương tác được sử dụng nhất quán trong sản phẩm. | P4 | N4 |
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
