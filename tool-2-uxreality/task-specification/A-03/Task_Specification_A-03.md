# Task Specification — A-03: Import sản phẩm từ CSV và hiểu báo cáo kết quả

> **Vai trò:** Admin<br>
> **Phạm vi:** Admin Web<br>
> **Nguồn:** `../../Task_Specification_TEMPLATE.md`, EShop FR-16<br>
> **Trạng thái:** Đặc tả trước pilot; chưa phải kết quả kiểm thử.

## 1. Thông tin chung

- **Task ID:** `A-03`
- **Tên task:** Import file CSV hợp lệ và diễn giải kết quả nhập
- **Vai trò:** `Admin`
- **FR liên quan:** `FR-16`
- **UI/UX principles dự kiến:** `P2/P5/P8/P10`; **Nielsen heuristics dự kiến:** `N1/N5/N9/N10`
- **Priority:** `P1` (độ ưu tiên của task; không phải mã principle P1)
- **Phiên bản task:** `v1.0`
- **Mục tiêu nghiên cứu:** Đánh giá khả năng tìm chức năng import, chọn file hợp lệ, xem preview, chạy import và hiểu báo cáo của người dùng Admin.
- **Thời lượng mục tiêu:** 1–3 phút; xác minh giới hạn hiện hành của tài khoản UXReality ở pilot.

## 2. User task

> Hãy nhập danh sách sản phẩm từ file CSV **qa_valid.csv** được cung cấp và cho biết hệ thống báo cáo kết quả nhập như thế nào.

Lời nhiệm vụ trên là thông tin duy nhất được đưa cho người tham gia. Không chỉ định tab, nút chọn file, nút import hoặc nội dung báo cáo mong đợi.

## 3. Điều kiện ban đầu (Preconditions)

> Thông tin môi trường/URL/build được ghi ở log phiên, không đưa vào task specification. Phiên từ xa dùng Cloudflare Quick Tunnel (URL tạm, đổi mỗi lần khởi động tunnel) nên không cố định URL trong tài liệu.

- **Trạng thái đăng nhập:** Đã đăng nhập bằng tài khoản Admin seed trong sandbox cô lập; không đưa email, mật khẩu hoặc token vào prompt, screenshot, recording hay repository. Baseline dùng tài khoản seed do `database.js` tạo lại sau reset; đây là deviation so với yêu cầu tài khoản riêng trong Test Plan và phải được xác minh lại ở pilot.
- **Dữ liệu cần có:** File fixture thật tại `fixtures/qa_valid.csv`, được cung cấp cho participant qua attachment/download đã duyệt trước khi bắt đầu phép đo; có header `name,price,description,imageUrl,category_id` và đúng hai dòng hợp lệ:

  ```csv
  name,price,description,imageUrl,category_id
  QA CSV Phone A,100000,Sản phẩm CSV A,https://placehold.co/300x300/png?text=QA+A,1
  QA CSV Phone B,200000,Sản phẩm CSV B,https://placehold.co/300x300/png?text=QA+B,2
  ```

  Danh mục seed ID **1** (`Điện thoại`) và ID **2** (`Laptop`) tồn tại. Database chứa đúng 5 sản phẩm seed trước import; không có tên bắt đầu bằng `QA CSV`.
- **Trạng thái ban đầu:** Admin Web đã tải xong và mở khu vực quản lý sản phẩm; chưa chọn file, chưa có preview/import result; danh sách sản phẩm hiển thị 5 dòng seed; không có lỗi cũ.
- **Reset trước phiên:** Dừng backend, chạy `node database.js` trong `backend`, khởi động `node server.js`, rồi Admin Web. Lưu ý khởi động lại backend cũng tạo lại database; kiểm tra fixture sau khi backend đã chạy. Xóa `localStorage.adminToken`, hard reload và đăng nhập Admin seed qua kênh an toàn; xác nhận có đúng 5 sản phẩm và các danh mục ID 1–2 trước khi mở phiên. Sau mỗi phiên phải reset lại để sản phẩm import không ảnh hưởng phiên sau.
- **Thông tin không được cung cấp trước cho người tham gia:** Vị trí chức năng import/template, nút chọn file/import, số dòng thành công/lỗi mong đợi và giá trị của hai sản phẩm sẽ tạo.

## 4. Tiêu chí thành công

| ID | Điều kiện cần quan sát | Loại | Cách xác minh |
|---|---|---|---|
| SC-01 | Người tham gia tìm thấy chức năng import CSV, chọn đúng `qa_valid.csv`, preview đúng **2 dòng** và hoàn tất thao tác import | Outcome | Recording + preview/import result + state database |
| SC-02 | Người tham gia diễn giải đúng nội dung báo cáo mà giao diện đang hiển thị: số dòng thành công và thông báo lỗi nếu có; với fixture hợp lệ, có thể nói rõ không có lỗi được hiển thị | Usability | Screenshot báo cáo + lời nói cuối |
| SC-03 | Theo FR-16, báo cáo đúng là **2 dòng thành công, 0 lỗi** và sau reload có hai sản phẩm `QA CSV Phone A` (100.000 ₫) và `QA CSV Phone B` (200.000 ₫) | Optional | Reviewer đối chiếu báo cáo, API/database và danh sách sau reload |
| SC-04 | Báo cáo đủ rõ để người dùng hiểu kết quả; nếu báo cáo thiếu số lượng/lý do hoặc mâu thuẫn, ghi issue riêng. Người tham gia không bị tính sai khi họ diễn giải đúng nội dung đang hiển thị | Optional | Screenshot báo cáo + lời nói |
| SC-05 | Không có dòng lỗi trong baseline hợp lệ; mọi sai lệch về preview/rollback/validation được ghi ở SC-03 | Optional | Recording + API/database; không quy trách nhiệm cho participant nếu hệ thống xử lý sai fixture hợp lệ |

**Kết quả task:**

- `Success`: đạt SC-01 và SC-02; người tham gia chọn đúng file, hoàn tất import và diễn giải được báo cáo đang hiển thị, trong thời lượng cho phép, không cần trợ giúp nội dung ngoài protocol.
- `Partial`: đã chọn file và preview nhưng không hoàn tất import, hoặc người tham gia không diễn giải được nội dung báo cáo đang hiển thị.
- `Fail`: không tìm thấy chức năng, không thể chọn/import file, hoặc import sai file.
- `Invalid`: điều kiện ban đầu không đúng như chốt (Admin chưa đăng nhập, fixture tải lỗi/header sai, danh mục ID 1–2 không tồn tại, database không ở trạng thái 5 sản phẩm), lỗi kỹ thuật nghiêm trọng hoặc participant không thực hiện task.

> **Lưu ý phân tích:** Baseline này dùng file hoàn toàn hợp lệ để cô lập khả năng tìm/import/đọc báo cáo. Biến thể file mixed-invalid và rollback chỉ nên chạy sau khi baseline ổn định, bằng study riêng nếu UXReality giới hạn một task/project.

## 5. Metrics

| Metric | Định nghĩa cho task này | Nguồn | Ghi chú thiếu dữ liệu |
|---|---|---|---|
| Task outcome | Phân loại theo định nghĩa Success/Partial/Fail/Invalid ở mục 4 | Reviewer đối chiếu recording + báo cáo/state cuối | Không mặc định UXReality tự phân loại outcome |
| Completion time | Từ khi người tham gia bắt đầu đọc/đồng ý thực hiện prompt đến khi import kết thúc và người tham gia diễn giải báo cáo | UXReality timestamp nếu có; nếu không, recording/manual timer | Ghi rõ công cụ đo; không bao gồm setup/tải file ngoài màn hình |
| Observable error count | Số lần chọn sai file, tải lại không cần thiết, nhầm preview với kết quả, không tìm thấy nút import hoặc lặp thao tác | Recording/observer | Lỗi backend không quan sát được không tính; chuỗi cùng nguyên nhân gộp thành một lỗi |
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
| `QD2` | Likert 1–5 | Tôi tự tin rằng file **qa_valid.csv** đã được nhập thành công và tôi đọc đúng nội dung báo cáo đang hiển thị. | P5, P10 | N1, N9 |
| `Q01` | Likert 1–5 | Khi tôi thực hiện một thao tác, hệ thống cho tôi biết rõ thao tác đó đã được ghi nhận hoặc đang xử lý. | P5 | N1 |
| `Q02` | Likert 1–5 | Các thuật ngữ, nhãn và biểu tượng trên giao diện dễ hiểu đối với tôi. | P2 | — |
| `Q05` | Likert 1–5 | Giao diện giúp tôi tránh được những thao tác sai hoặc phát hiện vấn đề trước khi hoàn tất thao tác. | P8 | N5 |
| `Q09` | Likert 1–5 | Khi xảy ra lỗi, thông báo giúp tôi hiểu vấn đề và biết cách tiếp tục hoặc khắc phục. | P8 | N9 |
| `Q10` | Likert 1–5 | Khi không biết cách thực hiện một tác vụ, tôi có thể dễ dàng tìm được hướng dẫn phù hợp. | P5 | N10 |
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
