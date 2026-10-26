# Task Specification — A-01: Tìm thông tin trên Dashboard

> **Vai trò:** Admin<br>
> **Phạm vi:** Admin Web<br>
> **Nguồn:** `../../Task_Specification_TEMPLATE.md`, EShop FR-13<br>
> **Trạng thái:** Đặc tả trước pilot; chưa phải kết quả kiểm thử.

## 1. Thông tin chung

- **Task ID:** `A-01`
- **Tên task:** Tìm tổng doanh thu và tổng số đơn hàng trên Dashboard
- **Vai trò:** `Admin`
- **FR liên quan:** `FR-13`
- **UI/UX principles dự kiến:** `P1/P3/P6/P7`; **Nielsen heuristics dự kiến:** `N1/N6/N7/N8`
- **Priority:** `P1` (độ ưu tiên của task; không phải mã principle P1)
- **Phiên bản task:** `v1.0`
- **Mục tiêu nghiên cứu:** Đánh giá khả năng định vị, hiểu và đọc hai chỉ số tổng hợp của người dùng Admin.
- **Thời lượng mục tiêu:** 1–3 phút; xác minh giới hạn hiện hành của tài khoản UXReality ở pilot.

## 2. User task

> Bạn cần báo cáo nhanh **tổng doanh thu** và **tổng số đơn hàng** đang hiển thị. Hãy tìm hai thông tin đó trên dashboard và cho biết giá trị của từng chỉ số.

Lời nhiệm vụ trên là thông tin duy nhất được đưa cho người tham gia. Không chỉ định vị trí tab, thẻ số liệu hoặc cách tính.

## 3. Điều kiện ban đầu (Preconditions)

> Thông tin môi trường/URL/build được ghi ở log phiên, không đưa vào task specification. Phiên từ xa dùng Cloudflare Quick Tunnel (URL tạm, đổi mỗi lần khởi động tunnel) nên không cố định URL trong tài liệu.

- **Trạng thái đăng nhập:** Đã đăng nhập bằng tài khoản Admin seed trong sandbox cô lập; không đưa email, mật khẩu hoặc token vào prompt, screenshot, recording hay repository. Baseline dùng tài khoản seed do `database.js` tạo lại sau reset; đây là deviation so với yêu cầu tài khoản riêng trong Test Plan và phải được xác minh lại ở pilot.
- **Dữ liệu cần có:** Seed reset không tạo đơn hàng, vì vậy phải tạo fixture giao dịch sau khi backend đã chạy. Fixture chuẩn: đúng **2 đơn** của tài khoản Customer seed (ID **2**): `#1`, tổng **30.000.000 ₫**, trạng thái `delivered`; `#2`, tổng **28.000.000 ₫**, trạng thái `pending`. Không có đơn khác. Theo FR-13, dashboard phải thể hiện doanh thu **30.000.000 ₫** và tổng số đơn **2**.

  > Lưu ý: source hiện có các điểm lệch FR liên quan đến dashboard, gồm khả năng nhân đôi doanh thu của đơn `delivered` và các giới hạn về tổng tiền/đơn hàng từ phía client. Vì vậy, giá trị **30.000.000 ₫** là kỳ vọng theo FR-13 để đối chiếu, không phải giá trị participant phải đọc được từ SUT. Participant chỉ được yêu cầu đọc đúng những gì giao diện đang hiển thị.
- **Trạng thái ban đầu:** Admin Web đã tải xong và mở tab `Dashboard`; hai thẻ chỉ số hiển thị đầy đủ; không có toast lỗi hoặc dữ liệu tải lại dang dở.
- **Reset trước phiên:** Dừng backend, chạy `node database.js` trong `backend`, khởi động `node server.js`, rồi Admin Web. Lưu ý `server.js` import `database.js`, nên việc khởi động lại backend cũng tạo lại database; fixture phải được nạp **sau** khi backend đã chạy. Từ thư mục `task-specification`, chạy:

  ```powershell
  node fixtures/load_order_fixtures.js --db ../../../eshop-sut/backend/database.sqlite --scenario dashboard --confirm-sandbox
  ```

  Khi dùng staging, thay đường dẫn sau `--db` bằng đường dẫn chính xác của instance đó; chỉ chạy trên sandbox cô lập. Xóa `localStorage.adminToken`, hard reload và đăng nhập Admin seed qua kênh an toàn. Xác nhận API `GET /api/admin/orders` trả đúng 2 đơn, trạng thái lần lượt `delivered` và `pending` trước khi mở phiên. Sau phiên, chạy lại lệnh fixture để khôi phục baseline hoặc reset toàn bộ seed.
- **Thông tin không được cung cấp trước cho người tham gia:** Hai giá trị mong đợi **30.000.000 ₫** và **2**, vị trí Dashboard/chỉ số, nhãn bên trong thẻ và cách tính doanh thu.

## 4. Tiêu chí thành công

| ID | Điều kiện cần quan sát | Loại | Cách xác minh |
|---|---|---|---|
| SC-01 | Người tham gia tìm thấy hai chỉ số tổng doanh thu và tổng số đơn hàng trên Dashboard | Outcome | Recording + screenshot các thẻ được người tham gia chỉ ra |
| SC-02 | Người tham gia báo đúng **giá trị đang hiển thị** cho từng chỉ số và gắn đúng nhãn với từng giá trị | Usability | Lời nói cuối cùng + screenshot |
| SC-03 | Theo FR-13, giá trị đúng về nghiệp vụ phải là doanh thu **30.000.000 ₫** và tổng số đơn **2** | Optional | Reviewer đối chiếu UI/response với fixture; nếu lệch, ghi issue riêng |
| SC-04 | Không có thao tác thay đổi dữ liệu trong task | Optional | Recording + kiểm tra fixture sau phiên |

**Kết quả task:**

- `Success`: đạt SC-01 và SC-02; người tham gia tự tìm và đọc đúng hai giá trị đang hiển thị, trong thời lượng cho phép, không cần trợ giúp nội dung ngoài protocol.
- `Partial`: tìm thấy chỉ một chỉ số, hoặc tìm thấy cả hai nhưng đọc nhầm/đổi nhầm giá trị và cần nhắc lại yêu cầu.
- `Fail`: không tìm thấy chỉ số nào, không thể đọc giá trị, hoặc báo sai cả hai sau khi đã có cơ hội kiểm tra lại.
- `Invalid`: điều kiện ban đầu không đúng như chốt (Admin chưa đăng nhập, fixture không đúng 2 đơn, dashboard không tải dữ liệu), lỗi kỹ thuật nghiêm trọng hoặc participant không thực hiện task.

> **Lưu ý phân tích:** Outcome đánh giá khả năng tìm/đọc của người dùng. Nếu dashboard hiển thị sai tổng doanh thu, người tham gia vẫn có thể `Success` nếu đọc đúng giá trị đang hiển thị; sai lệch với FR-13 được ghi ở SC-03 và phân tích như issue độc lập.

## 5. Metrics

| Metric | Định nghĩa cho task này | Nguồn | Ghi chú thiếu dữ liệu |
|---|---|---|---|
| Task outcome | Phân loại theo định nghĩa Success/Partial/Fail/Invalid ở mục 4 | Reviewer đối chiếu recording + câu trả lời cuối | Không mặc định UXReality tự phân loại outcome |
| Completion time | Từ khi người tham gia bắt đầu đọc/đồng ý thực hiện prompt đến khi báo đủ hai giá trị | UXReality timestamp nếu có; nếu không, recording/manual timer | Ghi rõ công cụ đo; không bao gồm setup |
| Observable error count | Số lần mở nhầm khu vực, đọc nhầm thẻ, trả lời thiếu rồi phải hỏi lại hoặc lặp kiểm tra không cần thiết | Recording/observer | Không tính nhầm lẫn do nhãn mơ hồ là lỗi người dùng |
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
| `QD2` | Likert 1–5 | Tôi tự tin rằng hai giá trị tôi báo tương ứng đúng với **tổng doanh thu** và **tổng số đơn hàng** đang hiển thị. | P1 | N6 |
| `Q01` | Likert 1–5 | Khi tôi thực hiện một thao tác, hệ thống cho tôi biết rõ thao tác đó đã được ghi nhận hoặc đang xử lý. | — | N1 |
| `Q06` | Likert 1–5 | Tôi có thể tìm thấy lựa chọn và thông tin cần thiết trên giao diện mà không phải ghi nhớ từ các bước trước. | P3 | N6 |
| `Q07` | Likert 1–5 | Tôi có thể hoàn thành tác vụ với số bước và nỗ lực hợp lý. | P7 | N7 |
| `Q08` | Likert 1–5 | Bố cục chỉ hiển thị lượng thông tin cần thiết để tôi hiểu và hoàn thành tác vụ. | P3, P6 | N8 |
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
