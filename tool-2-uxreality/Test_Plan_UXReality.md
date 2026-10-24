# Test Plan — UXReality cho EShop Customer Web và Admin Web

> **Loại tài liệu:** Kế hoạch nghiên cứu Usability Testing.  
> **Trạng thái:** Kế hoạch đề xuất; chưa chứa kết quả thực nghiệm.  
> **Phiên bản:** 2.0 — điều chỉnh phạm vi sang Customer Web + Admin Web.  
> **Framework phân tích:** UI/UX Design Principles + Nielsen’s 10 Usability Heuristics.

## 1. Mục đích tài liệu

Tài liệu xác định mục tiêu, phạm vi, đối tượng, môi trường, nhiệm vụ, chỉ số, quy trình và cách phân tích dự kiến khi dùng UXReality nghiên cứu usability của hai giao diện EShop. Đây là kế hoạch để triển khai có kiểm soát; các thiết lập và tính năng của UXReality phải được xác minh bằng pilot.

## 2. Bối cảnh EShop

Theo `README.md` của EShop, hệ thống gồm Frontend Web (Customer), Web Admin, Backend API và Mobile App. Đề tài này tập trung vào **hai giao diện web** để bao phủ cả trải nghiệm khách mua hàng lẫn người quản trị.

- **Customer Web:** các hành trình tìm sản phẩm, xem chi tiết, giỏ hàng, checkout/coupon và lịch sử đơn hàng.
- **Admin Web:** xem dashboard, quản lý sản phẩm, import CSV, quản lý đơn hàng và (nếu còn thời gian) quản lý coupon.

Nghiên cứu đánh giá tính dễ hiểu, khả năng tìm thấy thao tác, hiệu quả hoàn thành nhiệm vụ, phản hồi trạng thái và xử lý lỗi. Không dùng UXReality làm bằng chứng duy nhất để kết luận API, database, business logic hoặc bảo mật đúng/sai.

## 3. Khung đánh giá làm kim chỉ nam

Hai khung dưới đây được xác định **trước khi thu thập dữ liệu** để giảm đánh giá tùy hứng. UXReality là công cụ hỗ trợ thu thập dữ liệu; nhóm sẽ áp dụng nguyên tắc và heuristics khi phân tích, trừ khi có tính năng đánh giá cụ thể được xác minh.

### 3.1. UI/UX Design Principles được vận hành hóa

| Mã | Nguyên tắc | Chỉ báo cần quan sát |
|---|---|---|
| P1 | User-centeredness / task fit | Người dùng có hoàn thành mục tiêu thực tế của vai trò Customer/Admin không? |
| P2 | Clarity and affordance | Nhãn, biểu tượng, nút và trường nhập có dễ hiểu, gợi ý đúng cách dùng không? |
| P3 | Visual hierarchy and information architecture | Thông tin/hành động quan trọng có dễ tìm và sắp xếp hợp lý không? |
| P4 | Consistency and standards | Điều hướng, màu, thuật ngữ, nút và trình bày trạng thái có nhất quán không? |
| P5 | Feedback and guidance | Hệ thống có xác nhận thao tác, tiến trình và kết quả/lỗi kịp thời không? |
| P6 | Simplicity and cognitive load | Có bước, trường, lựa chọn hoặc thông tin thừa gây quá tải không? |
| P7 | Efficiency and learnability | Người dùng có tìm được cách hoàn thành nhiệm vụ với nỗ lực hợp lý không? |
| P8 | Error prevention and recovery | Giao diện có giúp ngăn sai, xác nhận hành động nguy hiểm và sửa lỗi không? |
| P9 | Accessibility and adaptability | Văn bản, tương phản, focus/tab order, nhãn và bố cục có hỗ trợ nhiều cách sử dụng không? |
| P10 | Trust and transparency | Giá/tổng tiền, trạng thái đơn, kết quả import và thông báo có rõ ràng không? |

Bộ P1–P10 là bộ nguyên tắc vận hành hóa của nhóm, tham khảo hướng dẫn thiết kế UI/UX của Microsoft; không phải danh mục độc quyền hoặc duy nhất được gọi là “UI/UX Design Principles”.

### 3.2. Nielsen’s 10 Usability Heuristics

| Mã | Heuristic | Câu hỏi áp dụng vào EShop |
|---|---|---|
| N1 | Visibility of System Status | Người dùng có nhận biết trạng thái tải, lưu, thêm giỏ, import hoặc chuyển trạng thái đơn không? |
| N2 | Match Between System and the Real World | Thuật ngữ, trạng thái đơn, giá và luồng thao tác có gần với mô hình nghiệp vụ của người dùng không? |
| N3 | User Control and Freedom | Có cách quay lại, hủy, sửa hoặc thoát khỏi thao tác không mong muốn không? |
| N4 | Consistency and Standards | Cách trình bày/hành vi có nhất quán giữa các màn hình không? |
| N5 | Error Prevention | Có chặn nhập sai, thiếu trường, giá không hợp lệ, file import không hợp lệ hoặc xóa nhầm không? |
| N6 | Recognition Rather Than Recall | Người dùng có thể nhìn thấy lựa chọn/trạng thái mà không cần nhớ lại thông tin không? |
| N7 | Flexibility and Efficiency of Use | Tìm kiếm, bảng, bộ lọc và thao tác thường dùng có hiệu quả không? |
| N8 | Aesthetic and Minimalist Design | Giao diện có ưu tiên thông tin quan trọng và giảm nhiễu không? |
| N9 | Help Users Recognize, Diagnose, and Recover from Errors | Thông báo lỗi có giải thích vấn đề và cách sửa, ví dụ lỗi từng dòng CSV, không? |
| N10 | Help and Documentation | Có hướng dẫn, ví dụ CSV hoặc trợ giúp phù hợp tại nơi cần không? |

Tham chiếu Nielsen Norman Group: <https://www.nngroup.com/articles/ten-usability-heuristics/>.

### 3.3. Quy tắc sử dụng khung

Mỗi phát hiện được phân loại theo một trong hai nguồn (hoặc cả hai):

- `UT` — bằng chứng từ người tham gia thực hiện task (recording, hành vi, phản hồi, metrics).
- `HE` — vấn đề được chuyên gia/nhóm đánh giá bằng cách đi qua giao diện và so sánh với heuristics/principles.
- `BOTH` — đã có cả quan sát người dùng và đánh giá heuristic.

Một heuristic bị đánh dấu chưa đồng nghĩa đã chứng minh có lỗi. Với mỗi issue, cần ghi evidence, bối cảnh, tác động, mức độ ảnh hưởng và chỉ rõ nguyên tắc/heuristic liên quan. Không áp dụng một mã chỉ vì nó có vẻ gần đúng; nếu không có liên hệ, để `N/A` và giải thích.

## 4. Mục tiêu nghiên cứu

### 4.1. Mục tiêu tổng quát

Đánh giá khám phá khả năng người dùng Customer và Admin hoàn thành các nhiệm vụ web ưu tiên trên EShop, xác định ma sát về điều hướng, hiểu thông tin, phản hồi trạng thái và xử lý lỗi; đồng thời đánh giá mức phù hợp của UXReality trong thu thập bằng chứng để phân tích theo UI/UX Design Principles và Nielsen’s 10 Usability Heuristics.

### 4.2. Mục tiêu cụ thể

1. Xây dựng bộ task có thể lặp lại cho hai vai trò Customer và Admin.
2. Đo hoặc ghi nhận task outcome, thời gian, lỗi, trợ giúp và cảm nhận sau task theo khả năng dữ liệu thực tế.
3. Nhận diện các thao tác khiến người tham gia do dự, đi sai hướng, không hiểu kết quả hoặc cần trợ giúp.
4. Ánh xạ phát hiện sang nguyên tắc UI/UX và Nielsen heuristic thích hợp.
5. Đánh giá phần UXReality tự động hỗ trợ và phần nhóm phải thực hiện thủ công.
6. Đề xuất cải thiện có thể kiểm chứng lại; không đưa ra kết luận vượt quá cỡ mẫu và dữ liệu.

## 5. Câu hỏi nghiên cứu

- **RQ1 — Customer:** Người dùng có thể tìm, chọn và thao tác với sản phẩm/giỏ hàng/coupon trên Customer Web với mức độ rõ ràng và hiệu quả như thế nào?
- **RQ2 — Admin:** Người dùng có thể tìm thông tin quản trị, chỉnh sửa dữ liệu sản phẩm, import CSV và xử lý đơn hàng trên Admin Web như thế nào?
- **RQ3 — Design:** Những khó khăn quan sát được liên quan tới nguyên tắc UI/UX nào và heuristic nào của Nielsen?
- **RQ4 — Tool:** UXReality cung cấp được loại bằng chứng nào cho hai website, và bước nào vẫn phải ghi nhận/phân tích thủ công?

## 6. Phạm vi

### 6.1. Trong phạm vi — 8 task cốt lõi

**Customer Web (4 task cốt lõi)**

| Task ID | FR liên quan | Mục tiêu task | Ưu tiên |
|---|---|---|---|
| C-01 | FR-05 | Tìm sản phẩm cụ thể và xác định giá hiển thị | P1 |
| C-02 | FR-06, FR-24 | Mở chi tiết sản phẩm, chọn số lượng, thêm vào giỏ và xác định phản hồi thành công | P1 |
| C-03 | FR-07, FR-23, FR-24 | Cập nhật số lượng trong giỏ và/hoặc xóa một sản phẩm test theo đúng luồng | P1 |
| C-04 | FR-08, FR-09 | Áp dụng coupon hợp lệ vào giỏ được chuẩn bị sẵn và xác định số tiền sau giảm trước khi đặt đơn | P1 |

**Admin Web (4 task cốt lõi)**

| Task ID | FR liên quan | Mục tiêu task | Ưu tiên |
|---|---|---|---|
| A-01 | FR-13 | Tìm và diễn giải tổng doanh thu và tổng số đơn trên dashboard | P1 |
| A-02 | FR-15 | Sửa một sản phẩm test và xác định thao tác đã được lưu | P1 |
| A-03 | FR-16 | Import file CSV mẫu hợp lệ và diễn giải báo cáo kết quả | P1 |
| A-04 | FR-10, FR-18 | Tìm đơn test và chuyển trạng thái theo luồng được phép | P1 |

### 6.2. Mở rộng nếu thời gian cho phép

| Task ID | FR | Mục tiêu | Lý do xếp sau |
|---|---|---|---|
| C-05 | FR-11 | Tìm một đơn trong lịch sử và xác định trạng thái hiện tại | Mở rộng hành trình sau checkout |
| A-05 | FR-17 | Tạo hoặc kiểm tra coupon và xác định các trường bắt buộc | Bổ sung thao tác quản trị form |

Tám task P1 tạo phạm vi ban đầu đủ đại diện cho cả hai vai trò. Hai task mở rộng chỉ được thêm sau khi pilot chứng minh giới hạn công cụ, thời gian và nguồn người tham gia cho phép.

### 6.3. Ngoài phạm vi

- Mobile App.
- Kiểm thử tự động API/database, bảo mật, performance hoặc kiểm tra logic backend độc lập.
- Khẳng định đại diện cho toàn bộ khách hàng EShop từ mẫu nhỏ.
- Tuyên bố UXReality hỗ trợ một tính năng automation nếu chưa được xác minh trực tiếp.

### 6.4. Các EShop FR làm cơ sở

Nhóm sẽ sử dụng `README.md` EShop làm đặc tả; ưu tiên FR-05 đến FR-09 và FR-13, FR-15, FR-16, FR-18; dùng FR-10, FR-11, FR-17, FR-21 đến FR-24 làm cơ sở bổ sung khi phù hợp. FR mô tả yêu cầu hệ thống; usability analysis vẫn tập trung vào mức độ người dùng hiểu và hoàn thành tác vụ.

## 7. Người tham gia

### 7.1. Nhóm Customer

- Có khả năng sử dụng trình duyệt phổ biến.
- Có thể có kinh nghiệm mua sắm online khác nhau.
- Không cần biết trước giao diện EShop.
- Không nên sử dụng người thiết kế/chính người phát triển giao diện làm nhóm người dùng đại diện duy nhất.

### 7.2. Nhóm Admin

- Có kỹ năng máy tính cơ bản và được thông báo vai trò trong bối cảnh bài test.
- Không được hướng dẫn trước vị trí nút cụ thể hoặc cách hoàn thành task.
- Nếu không tuyển được admin thực tế, dùng người tham gia đại diện, nhưng báo cáo phải nêu rõ họ là người mới với Admin Web và kết quả chỉ có tính khám phá.

### 7.3. Cỡ mẫu đề xuất

Đề xuất ban đầu: **3–5 phiên hợp lệ cho mỗi task cốt lõi** để một nhóm sinh viên có thể quan sát các vấn đề nổi bật. Với 8 task, tương đương 24–40 task sessions; mỗi task là một study riêng nếu UXReality hiện hành giới hạn một task/study. Cỡ mẫu này chỉ phù hợp mục tiêu khám phá/đào tạo, không phải ước lượng đại diện thống kê.

Nếu nguồn lực hạn chế, chạy pilot trước rồi ưu tiên các task P1. Báo cáo nêu số phiên hợp lệ thực tế theo từng task, không gộp số phiên Customer và Admin thành một mẫu đồng nhất.

### 7.4. Mã người tham gia

- `C-P01`, `C-P02`… cho Customer.
- `A-P01`, `A-P02`… cho Admin.
- Không lưu tên thật trong bảng phân tích; tách thông tin liên hệ (nếu cần mời) khỏi dữ liệu nghiên cứu.

## 8. Môi trường và dữ liệu kiểm thử

### 8.1. Môi trường

- Customer Web mặc định trong README: `http://localhost:5173`.
- Admin Web mặc định trong README: `http://localhost:5174`.
- Backend API mặc định: `http://localhost:3000`.
- `localhost` chỉ có thể truy cập từ máy tương ứng; kiểm thử từ xa cần staging/tunnel an toàn hoặc môi trường demo có thể truy cập được. Không mở máy phát triển ra Internet nếu chưa cân nhắc bảo mật.
- Ghi lại OS, trình duyệt, viewport, thiết bị, mạng, URL, commit/build hoặc version EShop và ngày chạy.

### 8.2. Tài khoản và dữ liệu

- Dùng tài khoản Customer/Admin dành riêng cho kiểm thử; không đưa mật khẩu hoặc token vào tài liệu, screenshot/video, Git hay URL.
- Dùng sản phẩm, đơn hàng, coupon và CSV test có dữ liệu giả lập.
- Trước C-04, chuẩn bị tài khoản đã đăng nhập, cart có tổng đạt ngưỡng của coupon, coupon còn hiệu lực và chưa vượt lượt dùng; không thực hiện thanh toán cuối cùng nếu mục tiêu chỉ là đánh giá giao diện trước xác nhận.
- Trước A-02, tạo sản phẩm sandbox có thể chỉnh sửa và khôi phục.
- Trước A-03, chuẩn bị CSV hợp lệ; có thể dùng CSV lỗi làm biến thể riêng sau khi nghiên cứu cơ bản ổn định.
- Trước A-04, chuẩn bị đơn hàng ở trạng thái cho phép chuyển đổi và ghi rõ trạng thái ban đầu/kết thúc cần quan sát.
- Sau test, khôi phục dữ liệu để phiên sau có điều kiện giống nhau.

### 8.3. UXReality setup

Xác minh bằng pilot: cách tạo study, hỗ trợ URL Customer/Admin, phương thức participant join, thiết bị, thời lượng, số task/study, quyền camera/microphone, recording, loại visualization và khả năng export. FAQ công khai có mô tả 1–3 phút mỗi task; cần xác nhận trong tài khoản hiện tại trước khi chốt.

## 9. Metrics và định nghĩa

| Metric | Định nghĩa | Nguồn | Cách dùng |
|---|---|---|---|
| Task outcome | `Success`, `Partial`, `Fail` hoặc `Invalid` theo tiêu chí đã định nghĩa trước | Reviewer đối chiếu recording/trạng thái cuối; tool nếu thực sự cung cấp | Đo khả năng đạt mục tiêu |
| Task success rate | Success / số phiên hợp lệ × 100% | Bảng phân tích nhóm | Chỉ so sánh trong cùng task và điều kiện tương đương |
| Completion time | Từ điểm bắt đầu theo protocol đến khi đạt tiêu chí hoặc dừng; xác định từ tool hoặc timestamp thủ công | Tool nếu có; nếu không, recording/manual timer | So sánh phiên cùng task; nêu cách đo |
| Observable errors | Click nhầm, nhập sai, lặp lại thao tác hoặc đi sai luồng theo định nghĩa task | Recording/observer | Không đếm lỗi nghiệp vụ backend nếu không quan sát được từ usability session |
| Assistance count | Số lần người điều phối phải trợ giúp ngoài protocol | Moderator log | Chỉ áp dụng với phương pháp có điều phối |
| Perceived difficulty | Câu hỏi tự đánh giá 1–5 sau task | Survey | Mô tả phản hồi, không thay thế hành vi |
| Backtracking / repeated actions | Quay lại, lặp click hoặc điều hướng lại quan sát được | Recording/behavior data nếu có | Dấu hiệu để điều tra, không tự động là lỗi |
| Principle/heuristic tags | Mã P và N gắn cho issue sau khi review | Nhóm nghiên cứu | Là khung phân tích, không phải metric tự động của UXReality |

**Công thức:**

- `Task Success Rate = (số phiên Success / tổng số phiên hợp lệ) × 100%`.
- Mean/median time chỉ tính từ phiên hợp lệ có thời gian xác định; ghi số lượng mẫu đi kèm.
- Nếu metric chỉ tính thủ công, ghi rõ người tính, protocol và cách xử lý trường hợp thiếu dữ liệu.

Không cần bắt buộc thu mọi metric. Chỉ báo cáo thứ thực sự thu thập được và đánh dấu `Not available` hoặc `Not collected` khi phù hợp.

## 10. Kế hoạch phân tích bằng UI/UX Principles và Nielsen Heuristics

### 10.1. Đơn vị phân tích

Một finding là một quan sát có thể mô tả rõ, có bằng chứng, bối cảnh task và tác động. Nhiều quan sát có thể gộp thành một issue nếu có cùng bản chất và cùng nguyên tắc bị ảnh hưởng; không gộp chỉ vì chúng nằm trên cùng một trang.

### 10.2. Bộ mã nguyên tắc

Sử dụng mã P1–P10 trong Tool Profile:

- P1 User-centeredness / task fit
- P2 Clarity and affordance
- P3 Visual hierarchy and information architecture
- P4 Consistency and standards
- P5 Feedback and guidance
- P6 Simplicity / cognitive load
- P7 Efficiency and learnability
- P8 Error prevention and recovery
- P9 Accessibility and adaptability
- P10 Trust and transparency

Nielsen’s heuristics dùng mã N1–N10 theo tên chuẩn ở mục 3.2. Chỉ gắn các mã có quan hệ giải thích được với bằng chứng.

### 10.3. Quy trình phân tích

1. Xem phiên và ghi observation khách quan, kèm timestamp/ID nếu có.
2. Đối chiếu với tiêu chí hoàn thành và FR liên quan.
3. Xác định tác động tới mục tiêu, thời gian, lỗi hoặc cảm nhận người tham gia.
4. Gắn mã UI/UX principle và Nielsen heuristic.
5. Phân biệt `UT`, `HE` hoặc `BOTH`.
6. Gán severity theo rubric ở Analysis Package, nêu căn cứ.
7. Đề xuất cải thiện cụ thể, sau đó xác định metric/task có thể dùng để kiểm tra lại.
8. Review chéo bởi thành viên chưa mã hóa finding ban đầu.

### 10.4. Severity rubric đề xuất

| Mức | Quy tắc gợi ý |
|---|---|
| S1 — Low | Gây khó chịu hoặc không nhất quán nhỏ; không cản trở hoàn thành nhiệm vụ. |
| S2 — Moderate | Gây do dự, thêm bước hoặc lỗi có thể tự phục hồi. |
| S3 — High | Nhiều người gặp vấn đề hoặc vấn đề khiến task thất bại/cần hỗ trợ. |
| S4 — Critical | Chặn tác vụ quan trọng, có nguy cơ dẫn đến hành động nghiêm trọng hoặc mất dữ liệu trong môi trường test. |

Đây là rubric vận hành hóa cho project; cần dùng nhất quán và ghi lý do. Không suy severity chỉ dựa vào số lần xuất hiện; cần xét ảnh hưởng.

## 11. Quy trình thực hiện

### Giai đoạn A — Kiểm tra khả thi

1. Đăng nhập UXReality.
2. Tạo pilot Customer Web, rồi Admin Web.
3. Kiểm tra participant join, thời lượng, task/study limit, recording/metrics/exports.
4. Ghi khả năng đã xác minh và lỗi phát sinh.
5. Quyết định task nào giữ, rút ngắn hoặc chuyển sang phương thức dự phòng.

**Đầu ra:** bảng feasibility và cấu hình pilot.

### Giai đoạn B — Chuẩn bị nghiên cứu

1. Chốt 8 task cốt lõi và các FR tương ứng.
2. Chuẩn bị staging, tài khoản, dữ liệu và cách reset.
3. Viết lời dẫn trung lập, post-task question và success criteria.
4. Tạo study riêng cho từng task nếu nền tảng yêu cầu.
5. Lập trước bảng mapping P/N, tránh sửa tiêu chí sau khi thấy kết quả chỉ để hợp thức hóa phát hiện.

**Đầu ra:** Test Plan phiên bản chốt, Task Specification, study setup và test data.

### Giai đoạn C — Pilot

1. Chạy ít nhất một phiên thử cho mỗi loại môi trường (Customer và Admin), ưu tiên một task ngắn ở mỗi vai trò.
2. Kiểm tra URL/đăng nhập, dữ liệu ban đầu, chất lượng ghi hình, khả năng xác định outcome và thời lượng.
3. Ghi lỗi cấu hình, điểm câu chữ gây dẫn dắt hoặc task vượt thời lượng.
4. Hiệu chỉnh task và ghi lý do thay đổi.

**Đầu ra:** pilot log và quyết định go/no-go.

### Giai đoạn D — Nghiên cứu chính thức

1. Mời người tham gia theo nhóm Customer/Admin.
2. Thông báo consent, recording và cách sử dụng dữ liệu.
3. Gửi task tương ứng, không dạy vị trí điều khiển.
4. Lưu session ID, task outcome và vấn đề cấu hình.
5. Loại phiên lỗi kỹ thuật theo quy tắc đã định trước; không loại phiên thất bại chỉ vì người dùng không hoàn thành.

**Đầu ra:** danh sách phiên hợp lệ và nguồn bằng chứng được nhóm tự lưu trữ.

### Giai đoạn E — Phân tích

1. Tổng hợp metrics theo task, không gộp Customer/Admin nếu nhiệm vụ không tương đương.
2. Mã hóa observation theo P1–P10 và N1–N10.
3. Lập issue log có evidence ID/timestamp.
4. Gán severity, tần suất quan sát và đề xuất.
5. Review chéo và ghi lại bất đồng trước khi thống nhất.

**Đầu ra:** Analysis Package, issue log và recommendation list.

### Giai đoạn F — Đánh giá UXReality

1. Điền bảng tính năng theo trạng thái `Verified in pilot`, `Documented by vendor`, `Not tested`, `Not available in tested configuration` hoặc `Partially supported`.
2. Đánh giá khả năng thu thập/so sánh task của Customer và Admin.
3. Ghi phần nào tự động, phần nào nhóm cần làm thủ công.
4. Đánh giá theo tiêu chí rubric, nhưng không chấm cho khả năng chưa kiểm chứng như đã hoạt động.
5. Tổng hợp hạn chế và bài học cho seminar.

**Đầu ra:** Tool Evaluation và báo cáo UXReality.

## 12. Quy tắc hợp lệ và chất lượng dữ liệu

- Không dùng kết quả pilot như kết quả chính thức trừ khi ghi rõ là pilot.
- Không xóa phiên có task fail nếu không có lỗi kỹ thuật; thất bại task có thể là bằng chứng usability.
- Chỉ loại phiên khi có lý do xác định trước: URL sai, mất kết nối nghiêm trọng, recording không dùng được, người tham gia không thực hiện task hoặc điều kiện test sai.
- Ghi mọi lần thay đổi task, URL, dataset hoặc cấu hình giữa các phiên.
- Không so sánh thời gian giữa Customer task và Admin task như cùng một thước đo nếu độ phức tạp khác nhau.
- Tách observed fact, participant quote, interpretation và hypothesized cause.
- Đối với heatmap/eye-tracking/facial coding, nêu rõ công cụ/thiết bị, dữ liệu thiếu và giới hạn diễn giải.

## 13. Quyền riêng tư và quản lý dữ liệu

- Có thông báo và đồng thuận trước khi ghi màn hình/âm thanh/camera.
- Sử dụng participant ID; không đưa tên thật, email, địa chỉ hoặc dữ liệu đơn hàng thật vào báo cáo.
- Dùng môi trường staging với dữ liệu giả lập; không thực hiện thay đổi nguy hiểm trên hệ thống production.
- Dùng tài khoản test riêng và reset dữ liệu sau session.
- Hạn chế chia sẻ recording; không đưa bản ghi hoặc thông tin đăng nhập lên repository công khai.
- Nếu dùng AI ngoài UXReality, chỉ đưa dữ liệu đã ẩn danh và kiểm tra điều khoản phù hợp.

## 14. Rủi ro và phương án giảm thiểu

| Rủi ro | Tác động | Giảm thiểu |
|---|---|---|
| UXReality không hỗ trợ đầy đủ một trong hai website/thiết bị | Không thực hiện được toàn bộ scope | Pilot sớm; thử staging/desktop; báo GV nếu cần đổi phương pháp |
| Task vượt giới hạn thời gian | Người dùng bỏ dở; dữ liệu không so sánh được | Rút gọn mục tiêu, chuẩn bị trạng thái đầu vào, chia task thành study riêng |
| Admin task thay đổi dữ liệu | Ảnh hưởng các phiên sau | Dataset sandbox và bước reset trước/sau |
| Quá nhiều FR | Thiếu thời gian chạy đủ phiên | Giữ 8 task P1, chỉ mở rộng nếu có năng lực |
| Dữ liệu thị giác/biểu cảm thiếu tin cậy | Diễn giải sai sự chú ý/cảm xúc | Đối chiếu recording, task outcome và phản hồi; nêu limitation |
| Gắn heuristic chủ quan | Kết luận thiếu nhất quán | Định nghĩa codebook, review chéo, giữ evidence link |
| Lộ dữ liệu người tham gia | Rủi ro riêng tư | Consent, pseudonymization, quyền truy cập hạn chế, không commit public |

## 15. Đầu ra nghiên cứu dự kiến

| ID | Đầu ra | Nội dung tối thiểu |
|---|---|---|
| TP-01 | Tool Profile | Tổng quan, nguyên lý, khả năng/giới hạn, trạng thái xác minh |
| TP-02 | Test Plan | Phạm vi Customer/Admin, môi trường, participant, quy trình, metrics |
| TP-03 | Task Specification | 8 task cốt lõi, FR mapping, preconditions, success criteria, principles/heuristics liên quan |
| TP-04 | Raw Evidence (do nhóm quản lý) | Recording, ảnh cấu hình, survey, dashboard exports nếu có; tổ chức thủ công theo session ID |
| TP-05 | Analysis Package | Metric table, observation log, issue log, principle/heuristic mapping, severity, recommendations |
| TP-06 | Tool Evaluation | Khả năng thực tế, mức tự động hóa, hạn chế và mức phù hợp |
| TP-07 | UXReality Report | Quy trình tái lập được, kết quả và kết luận dựa trên evidence |
| TP-08 | Demo assets | Video setup, task cơ bản, task Admin/luồng phức tạp, replay, data-driven comparison, checkpoint/AI nếu phù hợp |

## 16. Nguồn tham khảo

1. UXReality FAQ: <https://uxreality.com/faq> (truy cập 24/10/2026; xác minh lại thông tin sản phẩm trong tài khoản).
2. UXReality: <https://uxreality.com/>.
3. Microsoft Learn, *Key UI/UX design principles*: <https://learn.microsoft.com/en-us/dynamics365/guidance/develop/ui-ux-design-principles>.
4. Nielsen Norman Group, *10 Usability Heuristics for User Interface Design*: <https://www.nngroup.com/articles/ten-usability-heuristics/>.
5. EShop `README.md`, System Requirements Specification, version 2.0.
