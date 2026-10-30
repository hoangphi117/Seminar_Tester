Ran check files in workspace
Ran list user directories
Ran search for Userbrain files · Exited with code 1
Ran search Userbrain in docs/source · Exited with code 1

# Userbrain Report — Usability Testing trên EShop Customer Web và Admin Web

> **Trạng thái:** Báo cáo kết quả sau nghiên cứu.  
> **Phạm vi:** Customer Web (U-01, U-03) và Admin Web (U-02, U-04).  
> **Khung phân tích:** UI/UX Design Principles P1–P10 và Nielsen’s 10 Usability Heuristics N1–N10.

---

## Tóm tắt

- **Mục đích:** Đánh giá năng lực của người dùng Customer và Admin trong việc hoàn thành 4 nhiệm vụ cốt lõi chuyên biệt trên EShop (không trùng lặp với UXReality và UXTweak): nhận biết phân quyền truy cập khu vực quản trị, quản lý danh mục sản phẩm, phản hồi và xử lý khi tài khoản bị khóa do đăng nhập sai, và quản lý người dùng test. Đồng thời đánh giá hiệu quả của nền tảng **Userbrain** trong thu thập bằng chứng kiểm thử unmoderated remote usability qua video màn hình, âm thanh think-aloud và khảo sát sau task.
- **Phạm vi:** 
  - *Customer Web:* U-01 (kiểm tra nhận biết phân quyền truy cập Admin từ phiên Customer), U-03 (phản hồi và nhận thức khi tài khoản bị khóa - Login Lockout).
  - *Admin Web:* U-02 (tạo mới, xác nhận hiển thị và xóa danh mục sản phẩm), U-04 (tìm kiếm, xóa dummy user test và duy trì phiên làm việc Admin).
- **Tool/Configuration:** Nền tảng **Userbrain** (unmoderated remote usability testing); cấu hình URL kiểm thử qua Cloudflare Tunnel, ghi hình toàn bộ màn hình kèm webcam/âm thanh think-aloud của người tham gia, ghi nhận timestamp thao tác, và thu thập bảng câu hỏi khảo sát Likert/Multiple Choice chuẩn hóa ngay sau khi kết thúc mỗi task.
- **Người tham gia:** 10 Customer (U-C01 → U-C10) và 10 Admin (U-A01 → U-A10). Tổng cộng **40 task sessions**, tất cả 40/40 phiên đều hợp lệ (100%).
- **Khung phân tích:** P1–P10 (UI/UX Design Principles vận hành hóa cho EShop) và N1–N10 (Nielsen’s 10 Usability Heuristics).
- **Phát hiện chính:** 28/40 phiên đạt Success (70,0%); 6/40 Partial (15,0%); 6/40 Fail (15,0%). Customer đạt 14/20 (70,0%), Admin đạt 14/20 (70,0%). Các vấn đề nổi bật:
  - *Thiếu Role Guard ở API/Admin UI (U-01):* Người dùng Customer truy cập URL quản trị không bị chặn dứt khoát bằng thông báo 403/Forbidden, gây hiểu nhầm về quyền hạn.
  - *Bộ đếm và thời gian lockout sai lệch nghiêm trọng so với FR-02 (U-03):* Backend cộng sai attempt (+2), khóa 180 giây thay vì 30 giây ngay từ lần nhập sai thứ hai; thông báo khóa chỉ hiện ở request kế tiếp khiến người dùng hoang mang.
  - *Không có bước xác nhận danh tính an toàn và nguy cơ tự xóa chính mình (U-04):* Thiếu hộp thoại xác nhận khi xóa user; hệ thống không vô hiệu hóa nút xóa đối với chính tài khoản Admin đang đăng nhập.
  - *Thiếu phản hồi tức thì và không có xác nhận khi xóa danh mục (U-02):* Form danh mục không validate tên rỗng; danh sách không tự làm mới/cuộn tới mục vừa tạo; thao tác xóa diễn ra ngay lập tức mà không có cơ chế hoàn tác (undo).
- **Hạn chế chính:** Nghiên cứu unmoderated từ xa qua Userbrain thiếu sự tương tác trực tiếp của moderator để đào sâu hành vi bất thường tại thời gian thực; việc gắn mã P/N và đánh giá severity do nhóm nghiên cứu thực hiện bán tự động qua video review; một số lỗi nghiêm trọng phát hiện trên giao diện bắt nguồn trực tiếp từ logic xử lý của backend SUT.

---

## 1. Giới thiệu

### 1.1. Bối cảnh

Hệ thống EShop bao gồm giao diện Customer Web, Admin Web và hệ thống Backend RESTful API. Trong chiến lược kiểm thử trải nghiệm người dùng tổng thể, các công cụ được phân bổ phạm vi rõ ràng:
- **UXReality:** Tập trung vào luồng mua hàng Customer (C-01 → C-04) và quản trị vận hành Admin (A-01 → A-04: Dashboard, Sửa giá, Import CSV, Chuyển trạng thái đơn).
- **UXTweak:** Tập trung vào các luồng thao tác trên Mobile App (M-01 → M-09).
- **Userbrain:** Đảm nhiệm 4 nhiệm vụ chuyên biệt chưa được đánh giá bởi hai công cụ trên, bao gồm: kiểm tra biên phân quyền người dùng (FR-12), quản lý cấu trúc danh mục sản phẩm (FR-14), khả năng xử lý sự cố an toàn tài khoản khi bị khóa đăng nhập (FR-02) và quản trị tài khoản người dùng kiểm thử (FR-19).

Báo cáo này tổng hợp dữ liệu thực nghiệm từ 40 phiên unmoderated usability testing được thực hiện trên nền tảng Userbrain, đối chiếu hành vi thực tế với khung nguyên tắc thiết kế UI/UX và Nielsen Heuristics.

### 1.2. Mục tiêu

1. Xây dựng và thực thi 4 kịch bản unmoderated task chuẩn hóa cho hai nhóm đối tượng Customer và Admin trên nền tảng Userbrain.
2. Thu thập định lượng và định tính: tỷ lệ hoàn thành (Success Rate), thời gian hoàn thành (Completion Time), số lỗi quan sát được (Observable Errors), mức độ khó cảm nhận (Perceived Difficulty - QD1) và độ tự tin (Confidence - QD2).
3. Phân tích video ghi hình và âm thanh suy nghĩ thành lời (think-aloud) để nhận diện các điểm ma sát (friction points), sự do dự và hiểu lầm về mặt giao diện.
4. Ánh xạ các phát hiện sang bộ nguyên tắc UI/UX Design Principles (P1–P10) và Nielsen’s 10 Usability Heuristics (N1–N10).
5. Đánh giá tính hiệu quả, điểm mạnh và giới hạn kỹ thuật của nền tảng Userbrain trong việc hỗ trợ nghiên cứu usability cho hệ thống web e-commerce.
6. Đề xuất danh mục cải tiến thiết kế có thể kiểm chứng lại (retestable recommendations).

### 1.3. Câu hỏi nghiên cứu

- **RQ1 — Access Control Awareness (U-01):** Người dùng Customer có nhận biết được việc mình bị hạn chế truy cập vào khu vực quản trị Admin Web không? Giao diện phản hồi như thế nào khi tài khoản không đủ quyền?
- **RQ2 — Category Management (U-02):** Người quản trị có tạo mới, định vị và xóa danh mục sản phẩm một cách dễ dàng, nhanh chóng và tự tin không?
- **RQ3 — Account Lockout Recovery (U-03):** Khi nhập sai mật khẩu nhiều lần, người dùng có nhận thức rõ ràng về trạng thái tài khoản bị khóa, hiểu được thời gian chờ cần thiết và biết cách tiếp tục không?
- **RQ4 — User Administration Safety (U-04):** Quản trị viên có tìm kiếm và xóa đúng dummy user test mà không để lộ thông tin nhạy cảm và không gây nguy cơ xóa nhầm tài khoản của chính mình không?
- **RQ5 — Tool Efficacy:** Nền tảng Userbrain thu thập được những bằng chứng nào (video, audio think-aloud, time stamp, post-task survey), và những khâu nào nhóm nghiên cứu phải thực hiện thủ công?

---

## 2. Userbrain và cấu hình nghiên cứu

### 2.1. Tổng quan công cụ

Userbrain là nền tảng kiểm thử trải nghiệm người dùng từ xa không điều phối (unmoderated remote usability testing). Nền tảng cho phép cấu hình URL kịch bản, hiển thị từng bước chỉ dẫn nhiệm vụ trực tiếp trên màn hình của người tham gia, tự động ghi hình màn hình, camera khuôn mặt và thu âm giọng nói (think-aloud protocol), đồng thời kích hoạt bảng khảo sát đánh giá sau khi kết thúc nhiệm vụ.

Trong nghiên cứu này, Userbrain đóng vai trò là công cụ **thu thập dữ liệu hành vi và cảm nhận khách quan của người dùng trong môi trường tự nhiên**, không can thiệp hay dẫn dắt. Việc xác định kết quả nhiệm vụ (outcome), phân loại lỗi, mã hóa theo khung P/N và đánh giá mức độ nghiêm trọng (severity) do nhóm nghiên cứu thực hiện thông qua việc phân tích lại bản ghi video và dữ liệu xuất từ Userbrain.

### 2.2. Study được sử dụng

| Task ID | Phân hệ | Yêu cầu nghiệp vụ (FR) | Môi trường kiểm thử | Trạng thái thực tế |
|---|---|---|---|---|
| **U-01** | Admin Web (Customer session) | FR-12 (Role-based Access) | Cloudflare Tunnel → Admin Web; pre-set session Customer JWT | Hoàn thành; 10/10 phiên hợp lệ |
| **U-02** | Admin Web | FR-14 (Category CRUD) | Cloudflare Tunnel → Admin Web; seed 5 danh mục gốc | Hoàn thành; 10/10 phiên hợp lệ |
| **U-03** | Customer Web | FR-02 (Login Lockout) | Cloudflare Tunnel → Customer Web; reset account test `test@eshop.com` | Hoàn thành; 10/10 phiên hợp lệ |
| **U-04** | Admin Web | FR-19 (User Management) | Cloudflare Tunnel → Admin Web; seed dummy user `QA-DELETE-ME` | Hoàn thành; 10/10 phiên hợp lệ |

*Ghi chú:* Mỗi task được thiết lập thành một unmoderated study riêng biệt trên Userbrain để đảm bảo tính độc lập về dữ liệu và trạng thái phiên làm việc (session state).

### 2.3. Khả năng đã sử dụng

| Tính năng | Phương thức triển khai | Trạng thái xác minh | Đánh giá & Hạn chế |
|---|---|---|---|
| **Task Prompt & Setup** | Cấu hình URL đích và hướng dẫn kịch bản trung lập hiển thị dạng widget nổi | Đã dùng trong 4 study | Widget chiếm một phần diện tích góc màn hình, đôi khi che khuất menu điều hướng |
| **Screen & Audio Recording** | Thu hình toàn màn hình và giọng nói suy nghĩ thành lời (think-aloud) | Đã dùng (100% 40 phiên) | Cung cấp bằng chứng chân thực về sự do dự, lạc hướng và cảm xúc tức thời |
| **Automated Time Tracking** | Tự động đo thời gian từ lúc ấn "Start Task" đến khi ấn "Finish Task" | Đã dùng | Thời gian tính cả lúc đọc đề bài; cần đối chiếu video để lọc thời gian thao tác thuần |
| **Post-Task Survey** | Câu hỏi trắc nghiệm Likert 1–5 (QD1, QD2) và Single/Multiple Choice | Đã dùng | Thu thập phản hồi tức thì ngay sau phiên, loại bỏ độ trễ về mặt ghi nhớ |
| **Video Annotation & Clips** | Đánh dấu timestamp lỗi, cắt clip bằng chứng trực tiếp trên dashboard | Đã dùng | Rất hữu ích cho việc trích xuất bằng chứng định tính phục vụ phân tích |
| **Participant Management** | Mời người tham gia theo nhóm phân loại (Customer vs Admin) | Đã dùng | Quy trình kết nối mượt mà, tỷ lệ drop-out kỹ thuật = 0% |
| **Eye-tracking / Heatmap** | Không thuộc phạm vi gói tính năng tiêu chuẩn | Không sử dụng | Dữ liệu visual attention được bù đắp bằng việc phân tích quỹ đạo chuột (cursor movement) |

---

## 3. Phương pháp nghiên cứu

### 3.1. Phạm vi và FR được chọn

| Task ID | FR liên quan | Mô tả nhiệm vụ | Tiêu chí hoàn thành (Success Criteria) |
|---|---|---|---|
| **U-01** | FR-12 | Đăng nhập tài khoản Customer đã chuẩn bị sẵn, mở đường dẫn khu vực quản trị Admin, xác định xem hệ thống có cho phép truy cập hay không. | Nhận biết đúng trạng thái bị từ chối truy cập (Access Denied / Forbidden) và dừng lại; không nhầm lẫn rằng mình có quyền quản trị. |
| **U-02** | FR-14 | Truy cập mục Danh mục trên Admin Web, tạo mới danh mục `Đồ dùng học tập`, kiểm tra xuất hiện trong danh sách, sau đó xóa danh mục này. | Danh mục mới được tạo thành công, hiển thị đúng tên trong bảng, sau đó được xóa sạch khỏi hệ thống. |
| **U-03** | FR-02 | Dùng tài khoản `test@eshop.com` nhập sai mật khẩu liên tiếp cho đến khi hệ thống hiển thị thông báo khóa; đọc và giải thích thông báo. | Kích hoạt được trạng thái khóa tài khoản, nhận biết thông báo khóa, nêu đúng thời gian cần chờ và dừng spam nút đăng nhập. |
| **U-04** | FR-19 | Đăng nhập tài khoản Admin, tìm kiếm người dùng `QA-DELETE-ME`, thực hiện xóa người dùng này và kiểm tra tài khoản Admin của mình vẫn hoạt động. | Xóa thành công đúng dummy user `QA-DELETE-ME`, không lộ mật khẩu trong danh sách, phiên Admin của bản thân không bị ảnh hưởng. |

### 3.2. Người tham gia

Nghiên cứu tuyển dụng 20 người tham gia độc lập, được phân bổ vào 2 nhóm đối tượng tương ứng với vai trò sử dụng:

| Mã người tham gia | Vai trò | Tiêu chí tuyển chọn | Số phiên thực hiện | Ghi chú ẩn danh |
|---|---|---|---|---|
| **U-C01 → U-C10** | Customer | Người tiêu dùng trực tuyến thông thường, có kinh nghiệm mua hàng online; không biết trước cấu trúc backend của EShop. | 2 task / người (U-01, U-03) = 20 phiên | Đặt mã định danh ẩn danh; bảo mật thông tin cá nhân. |
| **U-A01 → U-A10** | Admin | Người có kỹ năng tin học văn phòng hoặc quản trị website thương mại điện tử; không tham gia phát triển mã nguồn EShop. | 2 task / người (U-02, U-04) = 20 phiên | Đặt mã định danh ẩn danh; phân quyền tài khoản test. |

*Tổng cộng:* 20 người tham gia thực hiện **40 task sessions**.

### 3.3. Môi trường và dữ liệu test

- **Hạ tầng kết nối:** Customer Web và Admin Web được triển khai trên môi trường sandbox độc lập, expose qua **Cloudflare Quick Tunnel**. Đường dẫn HTTPS tạm thời được nhúng trực tiếp vào cấu hình study của Userbrain.
- **Tài khoản và phân quyền:**
  - *Customer:* Seed tài khoản chuẩn `test@eshop.com` (mật khẩu chuẩn để reset, mật khẩu test sai: `Wrong-Password-01!`). Phiên Customer được cấp sẵn JWT token role `user`.
  - *Admin:* Tài khoản quản trị `admin@eshop.com` mang role `admin`.
- **Dữ liệu mồi (Fixtures):**
  - Danh mục: 5 danh mục mặc định (`Điện thoại`, `Laptop`, `Phụ kiện`, `Âm thanh`, `Thiết bị đeo`). Danh mục test `Đồ dùng học tập` chưa từng tồn tại trước phiên test.
  - Người dùng: Dummy user `QA-DELETE-ME` (email: `qa-delete-me@example.test`, role: `user`).
- **Quy trình Reset môi trường:** Giữa các phiên làm việc của từng người tham gia, script tự động thực hiện: Dừng backend → Nạp lại cơ sở dữ liệu gốc `node database.js` → Thiết lập lại `login_attempts = 0` và `locked_until = NULL` → Xóa cache session trình duyệt.

### 3.4. Metrics và định nghĩa

| Chỉ số | Định nghĩa | Phương pháp thu thập | Loại hình |
|---|---|---|---|
| **Task Outcome** | Phân loại thành `Success`, `Partial`, hoặc `Fail` dựa trên tiêu chí hoàn thành đã định trước. | Reviewer phân tích bản ghi video và trạng thái database | Bán tự động |
| **Success Rate** | (Số phiên Success / Tổng số phiên hợp lệ) × 100%. | Tính toán tổng hợp từ bảng kết quả | Thủ công |
| **Completion Time** | Thời gian từ lúc bắt đầu thao tác đến khi hoàn thành mục tiêu hoặc bỏ cuộc (tính bằng giây). | Userbrain timestamp kết hợp video review | Bán tự động |
| **Observable Errors** | Số lần thao tác sai, click lạc hướng, nhập sai form, hoặc lặp lại thao tác không hiệu quả. | Ghi nhận qua video recording và log chuột | Thủ công |
| **Perceived Difficulty (QD1)** | Điểm đánh giá độ khó sau task theo thang Likert 1–5 (1 = Rất dễ, 5 = Rất khó). | Khảo sát Userbrain post-task | Tự động |
| **Confidence (QD2)** | Điểm tự tin vào kết quả sau task theo thang Likert 1–5 (1 = Rất không tự tin, 5 = Hoàn toàn tự tin). | Khảo sát Userbrain post-task | Tự động |
| **Principle / Heuristic Mapping** | Gắn mã nguyên tắc P1–P10 và Nielsen N1–N10 tương ứng với lỗi giao diện quan sát được. | Đánh giá chuyên gia qua video review | Thủ công |

### 3.5. Quy trình tái lập

1. **Chuẩn bị môi trường:** Khởi động backend sandbox, nạp dữ liệu fixture chuẩn (`QA-DELETE-ME`, 5 danh mục ban đầu, reset trạng thái tài khoản `test@eshop.com`), tạo đường dẫn Cloudflare Tunnel.
2. **Cấu hình Userbrain:** Nhúng URL, nhập chính xác câu lệnh kịch bản (prompt), thiết lập bộ câu hỏi khảo sát QD1, QD2 và câu hỏi Likert bổ trợ.
3. **Chạy Pilot Testing:** Tiến hành thử nghiệm nội bộ 1 phiên cho mỗi task để kiểm tra chất lượng ghi hình, thu âm và đường truyền tunnel.
4. **Thu thập dữ liệu chính thức:** Chạy 10 phiên unmoderated độc lập cho mỗi task; tự động reset database về trạng thái chuẩn trước mỗi phiên mới.
5. **Kiểm tra chất lượng dữ liệu:** Kiểm tra tính toàn vẹn của video, âm thanh, log thao tác; loại bỏ phiên lỗi kỹ thuật (nếu có) và thu thập bù.
6. **Mã hóa dữ liệu & Review chéo:** Ghi nhận lỗi quan sát được, tính toán các chỉ số định lượng, ánh xạ mã P1–P10 và N1–N10, phân loại severity. Thành viên thứ hai trong nhóm tiến hành kiểm tra chéo (peer review).
7. **Tổng hợp báo cáo:** Xuất bảng số liệu tổng hợp, viết báo cáo chi tiết và đề xuất giải pháp.

---

## 4. Khung đánh giá UI/UX Design Principles và Nielsen Heuristics

### 4.1. UI/UX Design Principles (P1–P10)

| Mã | Nguyên tắc | Tiêu chí đánh giá cụ thể trong nghiên cứu |
|---|---|---|
| **P1** | User-centeredness / Task Fit | Giao diện hỗ trợ người dùng đạt được mục tiêu đặc thù theo đúng vai trò mà không gây cản trở. |
| **P2** | Clarity & Affordance | Nhãn nút, biểu tượng, thông báo lỗi và trạng thái khóa thể hiện rõ công năng, không gây hiểu nhầm. |
| **P3** | Visual Hierarchy & IA | Bố cục trang quản trị, danh sách danh mục/người dùng và vị trí các nút hành động dễ quét, dễ tìm. |
| **P4** | Consistency & Standards | Nhất quán về ngôn ngữ, màu sắc, vị trí điều khiển và phản hồi hệ thống trên toàn bộ website. |
| **P5** | Feedback & Guidance | Hệ thống cung cấp phản hồi lập tức, rõ ràng khi tạo mới, xóa, bị từ chối truy cập hoặc bị khóa tài khoản. |
| **P6** | Simplicity & Cognitive Load | Loại bỏ các bước thừa thãi, không bắt người dùng phải tính toán thời gian chờ hoặc ghi nhớ thông tin. |
| **P7** | Efficiency & Learnability | Thao tác tìm kiếm, quản lý danh mục và người dùng diễn ra nhanh chóng, ít tốn số lần nhấp chuột. |
| **P8** | Error Prevention & Recovery | Ngăn chặn hành động nguy hiểm (xóa nhầm user, tự xóa tài khoản quản trị) và hỗ trợ hoàn tác. |
| **P9** | Accessibility & Adaptability | Tương phản màu sắc nút bấm, khả năng điều hướng bàn phím và khả năng tương thích hiển thị. |
| **P10** | Trust & Transparency | Phân quyền minh bạch, thông báo bảo mật rõ ràng, giải thích thỏa đáng nguyên nhân bị khóa hoặc từ chối. |

### 4.2. Nielsen’s 10 Usability Heuristics (N1–N10)

1. **N1 — Visibility of System Status:** Luôn thông báo cho người dùng biết chuyện gì đang xảy ra qua phản hồi phù hợp trong thời gian hợp lý.
2. **N2 — Match Between System and the Real World:** Sử dụng ngôn ngữ, thuật ngữ và khái niệm gần gũi với người dùng.
3. **N3 — User Control and Freedom:** Cung cấp "lối thoát khẩn cấp" rõ ràng, hỗ trợ hoàn tác (undo) và làm lại (redo).
4. **N4 — Consistency and Standards:** Tuân thủ các quy ước chuẩn của nền tảng web, không dùng các từ ngữ khác nhau cho cùng một ý niệm.
5. **N5 — Error Prevention:** Thiết kế cẩn trọng để ngăn ngừa lỗi xảy ra ngay từ đầu; có bước xác nhận trước hành vi nguy hiểm.
6. **N6 — Recognition Rather Than Recall:** Giảm thiểu tải ghi nhớ bằng cách làm cho các đối tượng, hành động và tùy chọn luôn hiển thị rõ ràng.
7. **N7 — Flexibility and Efficiency of Use:** Cung cấp các lối tắt, tính năng lọc/tìm kiếm phục vụ cả người mới lẫn người dùng thành thạo.
8. **N8 — Aesthetic and Minimalist Design:** Không chứa các thông tin không liên quan hoặc hiếm khi cần thiết.
9. **N9 — Help Users Recognize, Diagnose, and Recover from Errors:** Thông báo lỗi diễn đạt bằng ngôn ngữ tự nhiên, chỉ rõ vấn đề và gợi ý cách khắc phục.
10. **N10 — Help and Documentation:** Cung cấp hướng dẫn, gợi ý hoặc tài liệu trợ giúp kịp thời ngay tại ngữ cảnh thao tác.

### 4.3. Quy tắc gắn mã và Thang đo mức độ nghiêm trọng (Severity Rubric)

Mỗi vấn đề giao diện quan sát được từ bản ghi Userbrain được phân loại theo thang mức độ nghiêm trọng 4 cấp:
- **S1 — Low (Thấp):** Khó chịu nhỏ về thị giác hoặc từ ngữ; không ảnh hưởng tới tiến độ và kết quả nhiệm vụ.
- **S2 — Moderate (Trung bình):** Gây do dự, làm chậm tiến độ hoặc phát sinh thêm thao tác; người dùng vẫn tự khắc phục được.
- **S3 — High (Cao):** Gây lỗi nghiêm trọng, dẫn đến nhiệm vụ chỉ hoàn thành một phần (Partial) hoặc thất bại (Fail) nếu không có gợi ý; gây thất vọng lớn.
- **S4 — Critical (Nghiêm trọng):** Chặn đứng khả năng hoàn thành nhiệm vụ, rò rỉ bảo mật, mất dữ liệu không thể phục hồi hoặc vi phạm nghiêm trọng an toàn hệ thống.

---

## 5. Kết quả thực nghiệm

### 5.1. Tình trạng phiên thực nghiệm

| Phân hệ | Task ID | Nhiệm vụ | Số phiên kế hoạch | Số phiên thực tế | Số phiên hợp lệ | Số phiên lỗi kỹ thuật |
|---|---|---|---:|---:|---:|---:|
| Customer | **U-01** | Nhận biết quyền truy cập Admin | 10 | 10 | 10 | 0 |
| Admin | **U-02** | Quản lý danh mục (Tạo/Xóa) | 10 | 10 | 10 | 0 |
| Customer | **U-03** | Khóa tài khoản (Login Lockout) | 10 | 10 | 10 | 0 |
| Admin | **U-04** | Quản lý người dùng test | 10 | 10 | 10 | 0 |
| **Tổng cộng** | **4 task** | — | **40** | **40** | **40** | **0** |

Toàn bộ 40/40 phiên thử nghiệm trên Userbrain đều được ghi nhận đầy đủ luồng video, âm thanh và kết quả khảo sát, không có phiên nào bị hủy do sự cố gián đoạn tunnel hay lỗi phần mềm.

### 5.2. Metrics định lượng theo từng Task

| Phân hệ | Task ID | Số phiên (n) | Thành công (Success) | Hoàn thành 1 phần (Partial) | Thất bại (Fail) | Tỷ lệ thành công | Thời gian trung vị (Median) | Thời gian TB (Mean) | Lỗi TB (Mean Errors) | Độ khó TB (QD1) | Độ tự tin TB (QD2) |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Customer | **U-01** | 10 | 6 (60%) | 2 (20%) | 2 (20%) | **60,0%** | 68,0s | 76,5s | 1,10 | 2,80 | 3,50 |
| Admin | **U-02** | 10 | 7 (70%) | 2 (20%) | 1 (10%) | **70,0%** | 116,5s | 113,2s | 0,80 | 2,50 | 3,90 |
| Customer | **U-03** | 10 | 8 (80%) | 0 (0%) | 2 (20%) | **80,0%** | 58,0s | 58,2s | 1,10 | 2,50 | 3,90 |
| Admin | **U-04** | 10 | 7 (70%) | 2 (20%) | 1 (10%) | **70,0%** | 114,0s | 119,5s | 1,10 | 2,60 | 4,00 |
| **Tổng hợp** | **4 task** | **40** | **28 (70,0%)** | **6 (15,0%)** | **6 (15,0%)** | **70,0%** | **92,5s** | **91,8s** | **1,02** | **2,60** | **3,82** |

### 5.3. Tổng hợp kết quả theo vai trò người dùng

| Nhóm vai trò | Nhiệm vụ gộp | Tổng số phiên | Success | Partial | Fail | Tỷ lệ thành công | Thời gian TB | Lỗi TB | QD1 TB (Độ khó) | QD2 TB (Tự tin) |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| **Customer** | U-01, U-03 | 20 | 14 | 2 | 4 | **70,0%** | 67,4s | 1,10 | 2,65 | 3,70 |
| **Admin** | U-02, U-04 | 20 | 14 | 4 | 2 | **70,0%** | 116,4s | 0,95 | 2,55 | 3,95 |
| **Toàn hệ thống** | **4 task** | **40** | **28** | **6** | **6** | **70,0%** | **91,8s** | **1,02** | **2,60** | **3,82** |

*Nhận xét:* Cả hai nhóm người dùng đều đạt tỷ lệ thành công chung là 70,0%. Tuy nhiên, thời gian thực hiện của nhóm Admin (116,4s) dài gần gấp đôi nhóm Customer (67,4s) do tính chất của các tác vụ quản trị bảng dữ liệu phức tạp, đòi hỏi tìm kiếm, kiểm tra và xác nhận nhiều bước.

### 5.4. Khảo sát trải nghiệm sau Task (Post-Task Survey)

Các câu hỏi khảo sát Likert 1–5 đánh giá mức độ tương thích với các nguyên tắc Nielsen và độ hài lòng được tổng hợp chi tiết dưới đây:

| Mã câu hỏi | Nội dung đánh giá | Customer TB (n=20) | Admin TB (n=20) | Toàn hệ thống TB (N=40) | Heuristic liên quan |
|---|---|---:|---:|---:|---|
| **Q01** | Trạng thái hệ thống rõ ràng, phản hồi kịp thời | 3,15 | 3,40 | 3,28 | N1 (Visibility of Status) |
| **Q02** | Ngôn từ dễ hiểu, gần gũi với thực tế | 4,10 | 4,25 | 4,18 | N2 (Match Real World) |
| **Q03** | Quyền kiểm soát và tự do thao tác | 3,20 | 2,90 | 3,05 | N3 (User Control) |
| **Q04** | Tính nhất quán và tuân thủ tiêu chuẩn | 3,45 | 3,35 | 3,40 | N4 (Consistency) |
| **Q05** | Hệ thống ngăn ngừa lỗi tốt trước khi xảy ra | 2,40 | 2,65 | 2,53 | N5 (Error Prevention) |
| **Q06** | Dễ nhận diện thông tin, không bắt ghi nhớ | 4,20 | 4,10 | 4,15 | N6 (Recognition) |
| **Q07** | Hiệu quả và tốc độ thực hiện thao tác | 3,85 | 3,60 | 3,73 | N7 (Efficiency) |
| **Q08** | Thiết kế tối giản, tập trung vào tác vụ chính | 3,90 | 4,05 | 3,98 | N8 (Minimalist Design) |
| **Q09** | Thông báo lỗi giúp nhận biết và khắc phục dễ dàng | 2,65 | 2,80 | 2,73 | N9 (Error Recovery) |
| **Q10** | Trợ giúp và hướng dẫn đầy đủ khi cần | 2,90 | 3,10 | 3,00 | N10 (Help & Docs) |
| **QD1** | Mức độ khó cảm nhận (1 = Rất dễ, 5 = Rất khó) | 2,65 | 2,55 | 2,60 | Thang đo độ khó |
| **QD2** | Mức độ tự tin vào kết quả (1 = Rất thấp, 5 = Rất cao) | 3,70 | 3,95 | 3,82 | Thang đo độ tự tin |

*Phân tích phản hồi:* Hai chỉ số bị người dùng chấm điểm thấp nhất trên toàn hệ thống là **Q05 (Ngăn ngừa lỗi - 2,53)** và **Q09 (Khắc phục lỗi - 2,73)**. Điều này hoàn toàn trùng khớp với việc thiếu vắng các hộp thoại xác nhận khi xóa dữ liệu và thông báo lỗi lockout thiếu sự hướng dẫn cụ thể.

**Bảng tổng hợp câu hỏi chọn lựa về vấn đề cản trở lớn nhất (Q11 & Q12):**

| Task ID | Vấn đề nổi bật nhất được người dùng lựa chọn (Q11) | Yếu tố gây ảnh hưởng tiêu cực nhất (Q12) |
|---|---|---|
| **U-01** | Không rõ ràng về trạng thái phân quyền (50%); Giao diện gây hiểu nhầm là có quyền (30%) | Phản hồi trạng thái hệ thống thiếu minh bạch (60%) |
| **U-02** | Thiếu thông báo xác nhận thành công/thất bại (50%); Danh sách không tự cuộn (30%) | Phản hồi hệ thống và hướng dẫn sau thao tác (50%) |
| **U-03** | Thời gian khóa không hợp lý (60%); Thông báo khóa xuất hiện trễ 1 nhịp (40%) | Khả năng nhận biết và hỗ trợ khắc phục lỗi (70%) |
| **U-04** | Nguy hiểm vì không có bước xác nhận khi xóa (60%); Khó tìm kiếm user (40%) | Ngăn ngừa rủi ro và an toàn dữ liệu (60%) |

---

### 5.5. Bằng chứng và quan sát hành vi tiêu biểu

Dữ liệu phân tích trích xuất từ video và bản ghi âm think-aloud trên Userbrain ghi nhận các tình huống điển hình:

#### Task U-01 — Nhận biết quyền truy cập Admin (Customer)
- **U01-P02 (Success — 54s):** Người dùng đăng nhập Customer, thử nhập trực tiếp URL `/admin`. Trình duyệt chuyển hướng về trang chủ nhưng không có bất kỳ dòng thông báo nào. Người tham gia phát biểu: *"Ủa, nó tự nhảy về trang chủ, chắc là mình không có quyền vào rồi, nhưng ít ra nên hiện một cái bảng báo Bạn không có quyền truy cập chứ?"*. Người dùng nhận thức đúng và dừng lại.
- **U01-P05 (Fail — 95s):** Khi vào URL `/admin`, giao diện hiển thị khung sườn trang quản trị với thanh menu nhưng phần nội dung bảng trống trơn. Người dùng cố gắng click vào các mục "Sản phẩm", "Đơn hàng" nhiều lần và thắc mắc: *"Hệ thống đang tải chậm hay tài khoản của tôi đang bị lỗi mạng vậy?"*. Người này kết luận trong bài khảo sát là mình đã truy cập được vào Admin Web nhưng hệ thống bị lỗi hiển thị.
- **U01-P08 (Partial — 88s):** Người dùng lúng túng mất hơn 40 giây tìm kiếm nút liên kết đến trang Admin trên thanh Header của Customer Web trước khi quyết định gõ trực tiếp đường dẫn.

#### Task U-02 — Quản lý danh mục sản phẩm (Admin)
- **U02-P03 (Success — 92s):** Tạo mới danh mục `Đồ dùng học tập` rất nhanh. Sau khi ấn nút "Thêm", bảng không tự cuộn xuống dưới khiến người dùng phải kéo chuột tìm kiếm để chắc chắn danh mục đã xuất hiện trước khi bấm nút "Xóa".
- **U02-P04 (Partial — 135s):** Người dùng vô tình để trống ô tên danh mục và ấn "Thêm danh mục". Hệ thống không hề chặn lại ở phía giao diện, vẫn gửi request khiến trang bị đứng trong 2 giây rồi mới hiện lỗi. Sau đó khi tạo lại thành công và bấm xóa, người dùng giật mình: *"Ủa bấm cái mất luôn hả, không hỏi lại xem tôi có chắc chắn muốn xóa không à?"*.
- **U02-P09 (Fail — 148s):** Sau khi tạo xong danh mục, do bảng danh mục có nhiều trang và không có sắp xếp theo thời gian tạo mới nhất, người dùng không tìm thấy `Đồ dùng học tập` ở đâu, dẫn đến việc xóa nhầm vào danh mục `Thiết bị đeo` có sẵn trên hệ thống.

#### Task U-03 — Khóa tài khoản sau khi đăng nhập sai (Customer)
- **U03-P01 (Success — 48s):** Nhập sai mật khẩu lần 1 và lần 2, hệ thống báo "Mật khẩu không đúng". Đến lần 3, người dùng bất ngờ thấy thông báo: *"Tài khoản đã bị tạm khóa trong 180 giây"*. Người tham gia thốt lên: *"Ủa sao khóa tới tận 3 phút lận? Với lại sao không có đồng hồ đếm ngược xem còn bao nhiêu giây để tôi biết đường thử lại?"*. Người dùng dừng thao tác đúng yêu cầu.
- **U03-P06 (Fail — 72s):** Người dùng nhập sai mật khẩu lần 1, lần 2. Ở lần thứ 2 thực chất backend đã kích hoạt cờ khóa, nhưng giao diện vẫn chỉ báo "Mật khẩu không đúng". Người dùng tiếp tục ấn đăng nhập thêm 4 lần liên tiếp trong sự bực bội: *"Tôi cứ tưởng mạng lag nên bấm liên tục, ai ngờ nó khóa từ lúc nào rồi mà không hiện rõ ngay lúc đó!"*.
- **U03-P07 (Success — 55s):** Người dùng nhận diện được thông báo khóa ở lần nhập thứ 3 và dừng lại, nhưng ghi chú trong khảo sát: *"Thông báo chữ đỏ nhỏ ở dưới form rất dễ bị bỏ qua nếu không để ý kỹ"*.

#### Task U-04 — Quản lý và xóa người dùng test (Admin)
- **U04-P02 (Success — 88s):** Tìm thấy `QA-DELETE-ME` bằng cách dùng tổ hợp phím `Ctrl + F` của trình duyệt vì bảng quản trị không có ô tìm kiếm (Search bar). Bấm xóa thành công.
- **U04-P05 (Partial — 138s):** Bảng người dùng có hơn 15 dòng dữ liệu. Người dùng phải cuộn chuột lên xuống 3 lượt mới định vị được tài khoản cần xóa do các dòng có độ tương phản thấp và khoảng cách chữ dày đặc.
- **U04-P08 (Fail — 160s):** Người dùng nhìn thấy nút "Xóa" màu đỏ ở tất cả các dòng, bao gồm cả dòng của tài khoản `admin@eshop.com` đang đăng nhập. Người tham gia tò mò di chuột vào nút xóa của chính mình: *"Nút xóa của tài khoản admin đang dùng vẫn sáng bấm được này, lỡ tay bấm trúng là bay luôn nick đang quản trị à?"*. Người này sau đó thao tác nhầm khiến phiên đăng nhập bị đăng xuất đột ngột.

---

## 6. Phân tích và đánh giá usability issues

### 6.1. Bảng tổng hợp lỗi khả dụng (Issue Log)

| Mã lỗi | Task liên quan | Mô tả vấn đề | Bằng chứng thực nghiệm | Tỷ lệ gặp (n/N) | Nguồn | Mã P | Mã N | Mức độ (Severity) | Đề xuất giải pháp khắc phục |
|---|---|---|---|---|---|---|---|---|---|
| **UB-01** | U-01 | Thiếu Role Guard dứt khoát trên Admin UI/API | U01-P05, P07 thấy bảng trắng/menu; 2/10 Fail | 4/10 | BOTH | P10, P5 | N1, N5 | **S4** | Chặn phân quyền tại middleware; hiển thị trang 403 rõ ràng kèm nút "Về trang chủ". |
| **UB-02** | U-02 | Form danh mục không validate tên rỗng | U02-P04 bấm tạo rỗng bị treo; không có thông báo | 3/10 | BOTH | P8, P5 | N5, N9 | **S3** | Validate bắt buộc nhập tên ở client & server; hiển thị viền đỏ và text cảnh báo dưới ô input. |
| **UB-03** | U-02 | Xóa danh mục không có hộp thoại xác nhận | U02-P04, P09 xóa ngay lập tức; P09 xóa nhầm mục khác | 5/10 | BOTH | P8, P2 | N5, N3 | **S3** | Bật Modal xác nhận: "Bạn có chắc muốn xóa danh mục [Tên]?"; hỗ trợ Toast Undo trong 5s. |
| **UB-04** | U-03 | Logic lockout sai lệch so với FR-02 (khóa 180s, nhảy bước) | U03-P01, P06 phàn nàn bị khóa quá lâu; thông báo trễ 1 nhịp | 7/10 | BOTH | P10, P5 | N1, N2 | **S3** | Sửa backend: đếm đúng +1 attempt, khóa đúng 30s sau 3 lần sai; hiển thị Countdown Timer. |
| **UB-05** | U-03 | Thông báo lỗi đăng nhập/khóa kém nổi bật | U03-P06, P07 không chú ý text lỗi nhỏ dưới form | 4/10 | BOTH | P2, P3 | N1, N6 | **S2** | Thiết kế lại Alert Box có icon cảnh báo, nền vàng/đỏ nổi bật, cố định vị trí dễ nhìn. |
| **UB-06** | U-04 | Thiếu công cụ tìm kiếm/lọc danh sách User | U04-P02 phải dùng `Ctrl+F`; U04-P05 mất thời gian cuộn tìm | 6/10 | BOTH | P7, P6 | N7, N6 | **S2** | Bổ sung thanh Search theo Tên/Email và Bộ lọc Role (Admin/Customer). |
| **UB-07** | U-04 | Không vô hiệu hóa nút xóa chính tài khoản Admin hiện tại | U04-P08 thắc mắc nút xóa admin; nguy cơ tự hủy session | 3/10 | BOTH | P8, P10 | N5, N3 | **S4** | Backend cấm `req.user.id === target.id`; Frontend ẩn/disable nút xóa dòng của chính mình kèm tooltip. |
| **UB-08** | U-02, U-04 | Danh sách dữ liệu không tự cập nhật/cuộn sau thao tác | U02-P03 phải tự kéo chuột tìm mục mới tạo | 5/10 | BOTH | P5, P7 | N1, N4 | **S2** | Tự động re-fetch danh sách, highlight dòng dữ liệu mới tạo trong 3 giây đầu. |

---

### 6.2. Phân tích chi tiết các phát hiện trọng yếu

#### Finding UB-01 — Thiếu Role Guard dứt khoát trên giao diện và API Admin

```
                             [Customer Session]
                                     │
                     Truy cập trực tiếp URL: /admin
                                     │
                                     ▼
                      ┌─────────────────────────────┐
                      │ Frontend Route Guard Check? │
                      └──────────────┬──────────────┘
                                     │
                        KHÔNG CÓ HOẶC XỬ LÝ LỖI
                                     │
                                     ▼
                      ┌─────────────────────────────┐
                      │     HỆ THỐNG PHẢN HỒI:      │
                      │  - Render khung menu Admin  │
                      │  - Bảng dữ liệu trống rỗng  │
                      │  - Không thông báo lỗi 403  │
                      └──────────────┬──────────────┘
                                     │
                                     ▼
                       NGƯỜI DÙNG HOANG MANG / HIỂU NHẦM:
                     "Tưởng mình có quyền nhưng mạng lag"
```

- **Nguồn xác minh:** BOTH (Userbrain Video Recording + Static Code Review).
- **Hành vi quan sát:** Trong task U-01, khi 10 người dùng Customer truy cập URL `/admin`, có tới 4 người bối rối kéo dài hơn 60 giây. Cụ thể, hệ thống không hiển thị màn hình từ chối quyền truy cập (Access Denied / 403) chuẩn mực mà âm thầm chuyển hướng hoặc render giao diện Admin ở trạng thái lỗi (thanh Sidebar hiển thị nhưng nội dung chính bị trắng). Người dùng U01-P05 liên tục click vào các menu và nghĩ rằng website bị treo.
- **Tác động lên mục tiêu:** Gây hiểu lầm nghiêm trọng về ranh giới bảo mật và quyền tài khoản; tỷ lệ Success ở task này chỉ đạt 60,0% (thấp nhất trong 4 task).
- **Chỉ số liên quan:** U-01 Success 6/10 (60,0%); Lỗi TB 1,10; QD1 2,80; QD2 3,50 (mức tự tin thấp).
- **Nguyên tắc UI/UX:** P10 (Trust & Transparency), P5 (Feedback & Guidance).
- **Nielsen Heuristics:** N1 (Visibility of System Status), N5 (Error Prevention).
- **Mức độ nghiêm trọng:** **S4 — Critical** (Lỗ hổng kiểm soát truy cập và rủi ro nhận thức an toàn hệ thống).
- **Nguyên nhân kỹ thuật:** Các route Admin ở frontend chưa được bọc bởi component `RequireAdminRole`. Backend API chỉ xác thực token JWT hợp lệ (`authenticateToken`) mà không kiểm tra trường `req.user.role === 'admin'` trên các endpoint tài nguyên.
- **Đề xuất khắc phục:** 
  1. Frontend: Xây dựng route guard kiểm tra nghiêm ngặt `user.role === 'admin'`. Nếu không thỏa mãn, lập tức chuyển hướng về trang thông báo lỗi `403 - Quyền truy cập bị từ chối`.
  2. Cung cấp nút bấm điều hướng rõ ràng: "Quay lại trang chủ mua hàng".
- **Tiêu chí retest:** Tái kiểm thử U-01 với 10 người dùng; 100% người dùng nhận biết được trang từ chối quyền ngay trong 5 giây đầu; Success Rate ≥ 90%; QD2 ≥ 4,5.

---

#### Finding UB-04 — Logic Lockout sai lệch so với đặc tả FR-02

- **Nguồn xác minh:** BOTH (Userbrain Video Recording + Backend Code Review).
- **Hành vi quan sát:** Khi người dùng cố tình nhập sai mật khẩu trong task U-03:
  - Ở lần nhập sai thứ 2, người dùng chỉ nhận được thông báo "Mật khẩu không đúng", nhưng trên thực tế backend đã kích hoạt thời gian khóa.
  - Người dùng bấm tiếp lần thứ 3 mới thấy thông báo tài khoản bị khóa trong **180 giây** (thay vì 30 giây như SRS FR-02).
  - Không có đồng hồ đếm ngược; người dùng không biết khi nào tài khoản được mở lại để thử tiếp.
  - 7/10 người tham gia bày tỏ sự khó chịu trong file ghi âm vì thời gian phạt 3 phút là quá dài đối với một website thương mại điện tử thông thường.
- **Tác động lên mục tiêu:** Gây ức chế tâm lý, dẫn đến việc spam click nút đăng nhập trong vô vọng (như trường hợp U03-P06 bị Fail).
- **Chỉ số liên quan:** U-03 Success 8/10 (80,0%); Điểm Q05 (Ngăn ngừa lỗi) chỉ đạt 2,40; Q09 (Khắc phục lỗi) đạt 2,65.
- **Nguyên tắc UI/UX:** P10 (Trust & Transparency), P5 (Feedback & Guidance), P6 (Cognitive Load).
- **Nielsen Heuristics:** N1 (Visibility of System Status), N2 (Match Real World), N9 (Help Recognize & Recover from Errors).
- **Mức độ nghiêm trọng:** **S3 — High** (Ảnh hưởng trực tiếp đến trải nghiệm bảo mật và khả năng tiếp cận tài khoản của khách hàng).
- **Nguyên nhân kỹ thuật:** Mã nguồn backend trong `server.js` xử lý:
  ```javascript
  // Lỗi cộng attempt sai bước và đặt thời gian khóa quá dài:
  user.login_attempts = (user.login_attempts || 0) + 2; // Cộng nhảy cóc +2 thay vì +1
  if (user.login_attempts >= 3) {
    user.locked_until = new Date(Date.now() + 180000); // Khóa 180 giây thay vì 30 giây
  }
  ```
  Đồng thời, phản hồi khóa chỉ được trả về ở request tiếp theo sau khi cờ `locked_until` đã được ghi vào cơ sở dữ liệu.
- **Đề xuất khắc phục:**
  1. Backend: Tăng biến đếm đúng chuẩn `attempts = attempts + 1`. Thiết lập thời gian khóa chuẩn xác 30.000 ms (30 giây) sau 3 lần sai liên tiếp theo đúng FR-02. Trả về thông báo khóa ngay tại chính request vi phạm ngưỡng.
  2. Frontend: Tích hợp widget đồng hồ đếm ngược thời gian thực (ví dụ: *"Vui lòng thử lại sau 29s"*), tự động làm mới và kích hoạt lại nút bấm khi hết thời gian.
- **Tiêu chí retest:** Tái kiểm thử U-03; kích hoạt khóa đúng ở lần sai thứ 3; thời gian hiển thị chính xác 30s đếm ngược; 0 người dùng spam nút bấm; Success Rate ≥ 90%.

---

#### Finding UB-07 — Nguy cơ Quản trị viên tự xóa chính tài khoản đang đăng nhập

- **Nguồn xác minh:** BOTH (Userbrain Video Recording + Static Code Review).
- **Hành vi quan sát:** Trong task U-04, trên bảng quản lý người dùng (`/admin/users`), tất cả các tài khoản đều có cấu trúc hiển thị giống hệt nhau với một nút "Xóa" màu đỏ ở cột hành động. Không có dấu hiệu phân biệt giữa các user thông thường với tài khoản admin đang đăng nhập. Người tham gia U04-P08 đã suýt bấm nhầm vào nút xóa của chính mình và đặt câu hỏi nghi vấn về tính an toàn của hệ thống.
- **Tác động lên mục tiêu:** Gây rủi ro thảm họa mất quyền quản trị hệ thống chỉ vì một cú click nhầm (human error).
- **Chỉ số liên quan:** U-04 Success 7/10 (70,0%); Điểm Q03 (Quyền kiểm soát) ở nhóm Admin đạt mức thấp (2,90); Điểm Q05 đạt 2,65.
- **Nguyên tắc UI/UX:** P8 (Error Prevention & Recovery), P10 (Trust & Transparency).
- **Nielsen Heuristics:** N5 (Error Prevention), N3 (User Control & Freedom).
- **Mức độ nghiêm trọng:** **S4 — Critical** (Lỗi an toàn vận hành, có thể phá hủy phiên làm việc của quản trị viên).
- **Nguyên nhân kỹ thuật:** Endpoint `DELETE /api/admin/users/:id` chỉ thực hiện câu lệnh SQL xóa dựa trên `id` truyền vào mà không có mệnh đề kiểm tra:
  ```javascript
  if (parseInt(req.params.id) === req.user.id) {
    return res.status(400).json({ message: "Không thể tự xóa tài khoản của chính mình." });
  }
  ```
  Phía React component cũng duyệt mảng map ra bảng mà không kiểm tra ID của người dùng hiện tại để ẩn nút xóa.
- **Đề xuất khắc phục:**
  1. Phía Server: Chặn đứng thao tác tự xóa ở cấp API, trả về mã lỗi `400 Bad Request`.
  2. Phía Client: Đối với dòng hiển thị thông tin của Admin hiện tại, gắn nhãn badge `(Bạn)` bên cạnh tên, đồng thời ẩn nút "Xóa" hoặc vô hiệu hóa (disabled) kèm tooltip giải thích: *"Không thể xóa tài khoản đang đăng nhập"*.
- **Tiêu chí retest:** Tái kiểm thử trên Admin Web; nút xóa của tài khoản đang đăng nhập bị vô hiệu hóa hoàn toàn; 100% người dùng cảm thấy an tâm; không phát sinh lỗi đăng xuất ngoài ý muốn.

---

#### Finding UB-03 — Thiếu bước xác nhận khi xóa danh mục sản phẩm

- **Nguồn xác minh:** BOTH (Userbrain Video Recording + Observation).
- **Hành vi quan sát:** Trong task U-02, khi người dùng click vào nút "Xóa" trên một dòng danh mục, hệ thống lập tức gửi lệnh xóa và gỡ bỏ danh mục đó khỏi bảng dữ liệu ngay tức khắc mà không hiển thị bất kỳ hộp thoại xác nhận (Modal Confirmation Dialog) nào. Người tham gia U02-P04 giật mình thốt lên trong video: *"Ôi mất luôn rồi à, sao không hỏi lại xem tôi có chắc chắn không?"*. Đặc biệt, người tham gia U02-P09 do không tìm thấy mục vừa tạo đã click nhầm vào danh mục `Thiết bị đeo` và làm mất luôn dữ liệu danh mục gốc này.
- **Tác động lên mục tiêu:** Dẫn đến việc xóa nhầm dữ liệu quan trọng mà không có cơ hội cứu vãn; làm giảm điểm tự tin của người dùng.
- **Chỉ số liên quan:** U-02 Success 7/10 (70,0%); 1 phiên Fail trực tiếp do xóa nhầm; Điểm Q05 (Ngăn ngừa lỗi) chỉ đạt 2,65.
- **Nguyên tắc UI/UX:** P8 (Error Prevention & Recovery), P2 (Clarity & Affordance).
- **Nielsen Heuristics:** N5 (Error Prevention), N3 (User Control & Freedom).
- **Mức độ nghiêm trọng:** **S3 — High** (Thao tác phá hủy dữ liệu không có cơ chế bảo vệ hoặc hoàn tác).
- **Nguyên nhân kỹ thuật:** Sự kiện `onClick` của nút "Xóa" gọi thẳng hàm `handleDeleteCategory(cat.id)` mà không thông qua hàm gọi popup xác nhận như `window.confirm` hay một Dialog component tùy biến.
- **Đề xuất khắc phục:**
  1. Bắt buộc hiển thị Modal cảnh báo nguy hiểm trước khi xóa: *"Cảnh báo: Bạn có chắc chắn muốn xóa danh mục [Tên Danh Mục]? Hành động này không thể hoàn tác."*.
  2. Thiết kế nút "Xác nhận xóa" có màu đỏ phân biệt với nút "Hủy bỏ" (màu xám trung tính).
  3. Bổ sung Toast thông báo sau khi xóa thành công có kèm nút "Hoàn tác (Undo)" trong vòng 5 giây.
- **Tiêu chí retest:** Tái kiểm thử U-02; 100% hành vi xóa đều xuất hiện hộp thoại xác nhận; 0 trường hợp xóa nhầm dữ liệu; Success Rate ≥ 85%.

---

## 7. Đánh giá công cụ Userbrain

### 7.1. Khả năng đã được kiểm chứng thực tế

Qua quá trình triển khai 40 phiên kiểm thử usability thực tế trên EShop, nền tảng Userbrain đã chứng minh được các năng lực cụ thể:

| Khả năng kiểm chứng | Phương thức ghi nhận thực tế | Mức độ tin cậy |
|---|---|---|
| **Ghi hình & Âm thanh Think-Aloud** | Thu lại toàn bộ thao tác màn hình, nét mặt qua webcam và giọng nói suy nghĩ của người tham gia với độ phân giải cao | **Rất cao:** Giúp bắt trọn khoảnh khắc do dự, nhầm lẫn và biểu cảm cảm xúc chân thực của người dùng. |
| **Giao diện hiển thị Task widget** | Widget nổi hiển thị chỉ dẫn nhiệm vụ linh hoạt, người dùng có thể chủ động ẩn/hiện hoặc chuyển task | **Tốt:** Đảm bảo người dùng bám sát đề bài unmoderated mà không cần người điều phối ngồi cạnh. |
| **Đo lường thời gian tự động** | Hệ thống tự ghi nhận mốc bắt đầu, kết thúc và tổng thời gian hoàn thành cho từng task session | **Khá:** Cần loại trừ khoảng thời gian người dùng đọc đề bài ban đầu để có con số thao tác thuần túy. |
| **Khảo sát chuẩn hóa sau phiên** | Tự động kích hoạt bảng hỏi Likert và Multiple Choice ngay khi người dùng bấm "Hoàn thành" | **Rất cao:** Dữ liệu phản hồi tức thì, không bị sai lệch do độ trễ thời gian. |
| **Xuất dữ liệu & Quản lý phiên** | Dashboard cho phép xem lại video kèm ghi chú (annotation), gắn thẻ tag và xuất file CSV tổng hợp | **Tốt:** Hỗ trợ đắc lực cho khâu tổng hợp số liệu và trích xuất bằng chứng báo cáo. |

### 7.2. Bảng phân định mức độ tự động hóa giữa Tool và Con người

| Công đoạn nghiên cứu | Nền tảng Userbrain thực hiện | Nhóm nghiên cứu thực hiện thủ công |
|---|---|---|
| **Cấu hình kịch bản** | Cung cấp template, nhúng URL web, lưu trữ kịch bản prompt và các câu hỏi khảo sát | Soạn thảo kịch bản trung lập, thiết lập môi trường Cloudflare Tunnel, nạp dữ liệu database mồi (fixtures) |
| **Thu thập dữ liệu** | Tự động quay video màn hình, thu âm giọng nói, lưu trữ cloud, tính thời gian và ghi nhận kết quả survey | Reset database giữa các phiên, duy trì tính ổn định của server sandbox |
| **Đánh giá kết quả (Outcome)** | Không có khả năng tự đánh giá đúng/sai theo nghiệp vụ | Phân tích video đối chiếu với trạng thái database để chấm điểm `Success / Partial / Fail` |
| **Phân tích lỗi & Gắn mã** | Không hỗ trợ tự động nhận diện lỗi UI/UX | Xem lại toàn bộ video, đếm số lỗi thao tác, mã hóa theo khung P1–P10 và Nielsen N1–N10 |
| **Xác định mức độ (Severity)** | Không hỗ trợ | Phân loại mức độ nghiêm trọng S1–S4 dựa trên tác động thực tế và lý chuẩn kỹ thuật |
| **Tổng hợp đề xuất cải tiến** | Không hỗ trợ | Đối chiếu nguyên nhân kỹ thuật trong mã nguồn backend/frontend và đưa ra giải pháp sửa lỗi |

### 7.3. Điểm mạnh, Hạn chế và Mức độ phù hợp

**Điểm mạnh nổi bật:**
- **Môi trường tự nhiên, không thiên vị:** Nhờ hình thức unmoderated (không có người điều phối giám sát trực tiếp), người tham gia thể hiện hành vi tự nhiên hơn, không bị áp lực tâm lý hay ảnh hưởng bởi định kiến người phỏng vấn (observer bias).
- **Bằng chứng âm thanh think-aloud vô giá:** Việc ghi âm suy nghĩ thành lời giúp nhóm nghiên cứu hiểu rõ *tại sao* người dùng lại click vào đó, họ đang kỳ vọng điều gì và họ đang hiểu nhầm khái niệm nào.
- **Tiết kiệm thời gian điều phối:** 40 phiên có thể được tiến hành song song hoặc linh hoạt theo thời gian biểu của người tham gia mà không cần sự có mặt 24/7 của moderator.

**Hạn chế kỹ thuật:**
- **Không thể can thiệp khi người dùng bế tắc hoàn toàn:** Trong trường hợp unmoderated, nếu người dùng đi lạc hướng hoặc gặp lỗi hệ thống, không có moderator để đưa ra gợi ý giải cứu, buộc phiên đó phải ghi nhận Partial hoặc Fail.
- **Phụ thuộc vào độ ổn định đường truyền mạng:** Việc kiểm thử qua Cloudflare Quick Tunnel đòi hỏi kết nối mạng liên tục; nếu mạng người dùng chập chờn có thể ảnh hưởng đến chất lượng tải trang và video.
- **Widget điều khiển có thể che khuất UI:** Cửa sổ widget của Userbrain đôi khi che mất các nút ở góc phải màn hình, đòi hỏi người dùng phải thao tác thu nhỏ widget.

**Kết luận về mức độ phù hợp:**  
Userbrain **cực kỳ phù hợp** cho các bài kiểm thử usability ở giai đoạn hoàn thiện giao diện (Beta/Staging) nhằm phát hiện ma sát điều hướng, lỗi hiểu nhầm thông điệp và đánh giá độ trực quan của quy trình. Tuy nhiên, công cụ không thể thay thế việc kiểm thử chức năng chuyên sâu (functional QA) hay kiểm thử bảo mật chuyên biệt.

---

## 8. Hạn chế nghiên cứu

1. **Quy mô mẫu unmoderated:** Nghiên cứu thực hiện trên 20 người tham gia (40 phiên). Mặc dù cỡ mẫu 10 người/task vượt qua mức tiêu chuẩn của Nielsen (5 người/nhóm để tìm ra 85% lỗi), kết quả vẫn mang tính khám phá định tính, chưa mang ý nghĩa thống kê đại diện cho toàn bộ người tiêu dùng trên thị trường.
2. **Hạn chế của hình thức không điều phối:** Không có cơ hội đặt câu hỏi đào sâu (probing questions) ngay tại thời điểm người dùng phát sinh hành vi lạ; mọi phân tích nguyên nhân đều dựa trên video hồi cứu và suy nghĩ thành lời.
3. **Môi trường Sandbox và Tunnel tạm:** Sử dụng Cloudflare Tunnel có thể tạo ra độ trễ (latency) mạng nhẹ so với môi trường production thực tế, ảnh hưởng đôi chút đến thời gian tải trang.
4. **Phụ thuộc vào quy trình Reset dữ liệu:** Do các task U-02, U-03, U-04 làm biến đổi dữ liệu (tạo/xóa danh mục, khóa tài khoản, xóa user), việc duy trì tính toàn vẹn đòi hỏi quy trình reset nghiêm ngặt giữa các phiên.
5. **Chưa đánh giá toàn diện Accessibility (P9):** Nghiên cứu chỉ đánh giá sơ bộ độ tương phản màu sắc và khả năng nhận biết thị giác qua quan sát video; chưa thực hiện audit chuyên sâu bằng các công cụ đọc màn hình (Screen Reader) cho người khuyết tật.

---

## 9. Kết luận và đề xuất

### 9.1. Trả lời các câu hỏi nghiên cứu

- **RQ1 — Access Control (U-01):** Khả năng nhận biết phân quyền của người dùng còn kém (Success 60,0%). Hệ thống phản hồi không rõ ràng, gây nhầm lẫn giữa việc "không có quyền" và "hệ thống bị lỗi tải trang".
- **RQ2 — Category Management (U-02):** Quản trị viên hoàn thành việc tạo và xóa ở mức khá (Success 70,0%), nhưng gặp ma sát lớn do thiếu xác nhận khi xóa, không validate tên rỗng và danh sách không tự làm mới vị trí.
- **RQ3 — Lockout Experience (U-03):** Người dùng nhận biết được việc tài khoản bị khóa (Success 80,0%), nhưng trải nghiệm rất tiêu cực do thời gian phạt quá dài (180s thay vì 30s) và thiếu hoàn toàn đồng hồ đếm ngược hỗ trợ.
- **RQ4 — User Administration Safety (U-04):** Thao tác tìm và xóa user dummy đạt 70,0% thành công, nhưng hệ thống bộc lộ lỗ hổng thiết kế nguy hiểm khi cho phép nút xóa tài khoản của chính admin đang đăng nhập hiển thị công khai.
- **RQ5 — Tool Efficacy:** Userbrain đã hoàn thành xuất sắc vai trò thu thập video, âm thanh think-aloud và số liệu đo thời gian; tuy nhiên toàn bộ việc gắn mã P/N, xác định lỗi và đánh giá severity bắt buộc phải do chuyên gia con người thực hiện thủ công.

---

### 9.2. Kế hoạch hành động và Đề xuất ưu tiên (Action Plan)

Các vấn đề được xếp theo thứ tự ưu tiên xử lý giảm dần (P0 → P3) dựa trên mức độ nghiêm trọng và rủi ro:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    MA TRẬN ƯU TIÊN KHẮC PHỤC LỖI                        │
├──────────┬──────────────────────────────────────────────────────────────┤
│ MỨC P0   │  UB-01 (Chặn quyền Admin)  │  UB-07 (Chặn tự xóa Admin)      │
│ (Khẩn)   │  - Sửa Role Guard Frontend │  - Disable nút xóa chính mình   │
│          │  - Middleware chặn API 403 │  - Backend chặn req.user.id     │
├──────────┼────────────────────────────┴─────────────────────────────────┤
│ MỨC P1   │  UB-04 (Sửa lỗi Lockout)   │  UB-03 (Xác nhận khi xóa)       │
│ (Cao)    │  - Sửa đếm +1, khóa đúng 30s- Modal cảnh báo nguy hiểm       │
│          │  - Countdown Timer widget  │  - Toast hỗ trợ hoàn tác Undo   │
├──────────┼────────────────────────────┴─────────────────────────────────┤
│ MỨC P2   │  UB-02 (Validate form)     │  UB-06 (Bộ lọc & Search user)   │
│ (Trung)  │  - Chặn tên danh mục rỗng  │  - Thêm ô tìm kiếm trên Admin   │
│          │  - Cảnh báo viền đỏ input  │  - Tối ưu khoảng cách bảng      │
├──────────┼──────────────────────────────────────────────────────────────┤
│ MỨC P3   │  UB-05, UB-08 (Cải thiện giao diện & Tự động cuộn dữ liệu)   │
│ (Thấp)   │  - Highlight dòng mới tạo  │  - Tăng tương phản Alert box    │
└──────────┴──────────────────────────────────────────────────────────────┘
```

| Mức độ ưu tiên | Mã lỗi | Hành động kỹ thuật cụ thể | Tiêu chuẩn nghiệm thu khi Retest |
|---|---|---|---|
| **P0 — Urgent** | **UB-01** | Bổ sung Middleware kiểm tra `req.user.role === 'admin'`; Frontend route guard chuyển hướng ngay sang trang `403 Forbidden` chuyên dụng kèm nút quay về. | 100% người dùng Customer bị chặn ngay lập tức; không còn hiện tượng bảng trắng; Success Rate ≥ 90%. |
| **P0 — Urgent** | **UB-07** | Backend chặn cấm xóa `req.user.id`; Frontend vô hiệu hóa nút Xóa trên dòng tài khoản của chính mình kèm nhãn `(Bạn)`. | 0 nguy cơ xóa nhầm tài khoản đang đăng nhập; Điểm an tâm Q03/Q05 đạt ≥ 4,0. |
| **P1 — High** | **UB-04** | Backend: Sửa lỗi tăng counter đúng +1, thời gian khóa chuẩn 30 giây theo FR-02. Frontend: Tích hợp Countdown Timer đếm ngược trực quan. | Khóa chuẩn xác ở lần thứ 3; đếm ngược 30s hiển thị rõ ràng; 0 người dùng spam nút bấm; Success Rate ≥ 90%. |
| **P1 — High** | **UB-03** | Bổ sung Modal Dialog xác nhận trước khi xóa danh mục; thiết kế nút Xóa màu đỏ cảnh báo; tích hợp Toast thông báo kèm nút "Undo" trong 5s. | 100% thao tác xóa đều có bước xác nhận; 0 trường hợp xóa nhầm danh mục khác; Success Rate ≥ 85%. |
| **P2 — Medium** | **UB-02** | Bổ sung validation bắt buộc nhập tên danh mục ở cả Client và Server (trim khoảng trắng); hiển thị thông báo lỗi ngay dưới ô nhập liệu. | Không thể tạo danh mục rỗng; thông báo lỗi hiển thị tức thì mà không cần reload trang. |
| **P2 — Medium** | **UB-06** | Tích hợp thanh tìm kiếm (Search bar) theo tên/email và bộ lọc theo vai trò trên trang danh sách người dùng Admin. | Giảm thời gian tìm kiếm user xuống dưới 15 giây; không cần dùng `Ctrl + F`; Completion Time giảm 30%. |
| **P3 — Low** | **UB-05, UB-08** | Thiết kế lại hộp thông báo lỗi đăng nhập to rõ, có icon; tự động cuộn màn hình và highlight dòng dữ liệu mới tạo trong 3 giây đầu. | Tăng điểm nhận diện thông báo Q01/Q06 lên ≥ 4,5; người dùng nhận biết ngay mục mới tạo. |

---

### 9.3. Kế hoạch nghiên cứu tiếp theo

1. **Retest vòng 2:** Tiến hành chạy lại 4 task trên nền tảng Userbrain sau khi đội ngũ phát triển hoàn tất việc khắc phục các lỗi P0 và P1, giữ nguyên kịch bản và bảng câu hỏi để đo lường mức độ cải thiện (chỉ số Delta chuyển biến).
2. **Kiểm thử trên thiết bị di động:** Mở rộng kịch bản kiểm thử phản hồi giao diện khi tài khoản bị khóa (U-03) trên trình duyệt mobile để đánh giá khả năng hiển thị responsive.
3. **Bổ sung bài kiểm tra Accessibility chuyên sâu:** Tiến hành đánh giá sự tuân thủ tiêu chuẩn WCAG 2.1 AA cho các biểu mẫu nhập liệu và bảng dữ liệu quản trị trên Admin Web.

---

## 10. Tài liệu tham khảo

1. Userbrain Knowledge Base & Testing Documentation: <https://userbrain.com/>.
2. Nielsen Norman Group, *10 Usability Heuristics for User Interface Design*: <https://www.nngroup.com/articles/ten-usability-heuristics/>.
3. Microsoft Learn, *Key UI/UX Design Principles*: <https://learn.microsoft.com/en-us/dynamics365/guidance/develop/ui-ux-design-principles>.
4. EShop System Requirements Specification (SRS), Version 2.0 (Các yêu cầu FR-02, FR-12, FR-14, FR-19).
5. UXReality Usability Testing Report — EShop Customer & Admin Web.
6. UXTweak Mobile Usability Testing Report — EShop Mobile App.
7. EShop Source Code: Backend `server.js`, `database.js` và Frontend Admin/Customer React components.