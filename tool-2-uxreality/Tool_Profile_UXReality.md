# Tool Profile — UXReality cho EShop Customer Web và Admin Web

> **Dự án:** Usability Testing cho hệ thống EShop  
> **Phạm vi:** Customer Web và Admin Web  
> **Trạng thái:** Hồ sơ nghiên cứu công cụ; các khả năng chưa chạy thử được ghi rõ là cần xác minh.  
> **Mục đích:** Làm cơ sở cho Test Plan, demo, phân tích usability và đánh giá UXReality.

## 1. UXReality là gì?

UXReality là nền tảng nghiên cứu trải nghiệm người dùng từ xa (remote UX research / remote usability testing). Theo tài liệu công khai của nhà cung cấp, nền tảng hỗ trợ nghiên cứu website, ứng dụng hoặc prototype và có thể thu thập các loại dữ liệu như bản ghi phiên, hành vi click/scroll, dữ liệu hướng nhìn hoặc visual attention, phân tích biểu cảm khuôn mặt và phản hồi khảo sát. Tùy phương thức nghiên cứu, thiết bị, phiên bản và gói tài khoản, không phải mọi dữ liệu đều nhất thiết khả dụng.

Trong project EShop, UXReality được xem là công cụ **thu thập và hỗ trợ diễn giải hành vi người dùng trong khi làm nhiệm vụ**. Nhóm sẽ dùng công cụ để nghiên cứu hai bối cảnh khác nhau:

- **Customer Web:** người mua tìm sản phẩm, xem chi tiết, thao tác giỏ hàng/checkout và xem đơn hàng.
- **Admin Web:** người quản trị xem dashboard, chỉnh sửa sản phẩm, nhập sản phẩm từ CSV và xử lý đơn hàng.

Không nên xem UXReality là công cụ thay thế cho mọi loại kiểm thử phần mềm. Nó không mặc nhiên xác minh tính đúng đắn của API, cơ sở dữ liệu, business rule hoặc bảo mật. Các yêu cầu này chỉ liên quan khi một nhiệm vụ và bằng chứng quan sát phù hợp; việc xác minh chức năng/backend vẫn cần phương pháp kiểm thử riêng.

## 2. UXReality giải quyết câu hỏi nghiên cứu nào?

UXReality có thể hỗ trợ nhóm điều tra các câu hỏi như:

- Người dùng có nhận ra cách tìm kiếm sản phẩm hay mục quản lý sản phẩm không?
- Người dùng có hiểu thông tin, nhãn, trạng thái và hành động trên màn hình không?
- Sau khi bấm “Thêm vào giỏ”, lưu sản phẩm, hoặc import CSV, người dùng có nhận biết được kết quả không?
- Người dùng có đi theo đường thao tác hợp lý hay thường xuyên quay lại, click nhầm hoặc do dự?
- Người dùng có hiểu thông báo lỗi và biết cách phục hồi không?
- Khác biệt nào xuất hiện giữa trải nghiệm mua hàng của Customer và quy trình thao tác của Admin?

**Nguyên tắc diễn giải:** video, click/scroll, heatmap, eye-tracking, facial coding hoặc lời nói là nguồn bằng chứng. Không một tín hiệu đơn lẻ nào tự chứng minh nguyên nhân tâm lý hay kết luận giao diện tốt/xấu. Cần đối chiếu với mục tiêu task, hành động quan sát được, câu trả lời của người tham gia và tiêu chí thành công.

## 3. Nguyên lý hoạt động

Quy trình nghiên cứu khái quát:

1. **Tạo study:** xác định website/app/prototype và mục tiêu nghiên cứu.
2. **Chuẩn bị môi trường:** cung cấp URL có thể truy cập, chọn thiết bị/phương thức phù hợp và kiểm tra quyền truy cập.
3. **Thiết kế task:** viết nhiệm vụ theo mục tiêu người dùng, tránh chỉ dẫn người tham gia bấm chính xác vào đâu.
4. **Thiết lập study:** nhập URL, nhiệm vụ, câu hỏi và các tuỳ chọn ghi nhận mà tài khoản đang hỗ trợ.
5. **Mời/người tham gia truy cập:** làm theo hướng dẫn của phiên bản công cụ; trên máy tính có thể cần extension, còn phương thức mobile có thể khác.
6. **Thực hiện task:** người tham gia tự thực hiện nhiệm vụ theo hướng dẫn; nhóm không nên trợ giúp trừ khi protocol quy định rõ.
7. **Thu thập dữ liệu:** nền tảng ghi nhận các dữ liệu được bật và tương thích với cấu hình.
8. **Review:** xem dashboard, recording, visualization và phản hồi.
9. **Phân tích:** nhóm phân loại quan sát, đối chiếu dữ liệu với metrics, UI/UX Design Principles và Nielsen’s 10 Usability Heuristics.
10. **Kết luận có căn cứ:** ghi nhận usability issue, mức ảnh hưởng, giới hạn dữ liệu và khuyến nghị cải thiện.

```text
Research goal + EShop FRs
          ↓
User/task design + test environment
          ↓
Configure UXReality study (one focused task per study if required)
          ↓
Pilot → correct configuration and task wording
          ↓
Participant performs task
          ↓
Recording / behavior data / survey (only what is available)
          ↓
Evidence review + metric calculation
          ↓
Map findings to UI/UX Principles + Nielsen Heuristics
          ↓
Issue log + severity + evidence-based recommendation
          ↓
Tool evaluation and report
```

## 4. Mức độ tự động hóa cần phân biệt

Nhà cung cấp mô tả UXReality là một phương pháp tự động hóa việc thiết lập/thu thập/xử lý dữ liệu nghiên cứu. Trong báo cáo seminar, nhóm cần phân biệt rõ ba lớp:

| Lớp | Ví dụ | Cách ghi trong báo cáo |
|---|---|---|
| Nền tảng tự động hỗ trợ | Ghi nhận phiên hoặc hiển thị dashboard khi study/configuration hỗ trợ | Chỉ ghi là “đã xác minh” khi chạy thử thành công; nếu mới đọc tài liệu, ghi “vendor documentation”. |
| Nghiên cứu bán tự động | Người tham gia làm task, nền tảng ghi dữ liệu, nhóm review và mã hóa kết quả | Nêu rõ bước nào do tool làm và bước nào do con người làm. |
| Phân tích của nhóm | Đánh giá task success, gắn issue với heuristics, xác định severity và đề xuất UI | Không mô tả đây là kết quả AI/tự động của UXReality nếu nhóm tự phân tích. |

Các yêu cầu Record & Playback, Data-driven và Checkpoints phải được trình bày theo khả năng thực tế. “Phát lại video phiên người dùng” không giống “ghi script rồi phát lại tự động”; “so sánh nhiều phiên” không nhất thiết là chạy dữ liệu CSV; và “checkpoint” do nhóm quan sát không phải automated assertion. Không tuyên bố UXReality có các tính năng automation truyền thống nếu chưa xác minh trong sản phẩm.

## 5. Thuật ngữ chính

| Thuật ngữ | Nghĩa dùng trong project |
|---|---|
| Usability study | Nghiên cứu cách người dùng thực hiện nhiệm vụ trên sản phẩm số. |
| Study / project | Nghiên cứu được tạo trên UXReality; dùng đúng thuật ngữ mà giao diện phiên bản hiện tại hiển thị. |
| Task | Nhiệm vụ được giao, mô tả mục tiêu chứ không chỉ dẫn vị trí click. |
| Participant / tester | Người tham gia; dùng ID ẩn danh như `C-P01`, `A-P01`. |
| Session recording | Bản ghi phiên, phạm vi ghi phụ thuộc cài đặt và quyền được cấp. |
| Eye tracking / visual attention | Phương pháp hoặc dữ liệu ước lượng/phân tích vùng chú ý thị giác theo khả năng công cụ và thiết bị. |
| Heatmap | Hình trực quan hóa được công cụ tạo ra; cần đọc theo cách định nghĩa của công cụ. |
| Facial coding | Phân tích tín hiệu biểu cảm; không được suy ra cảm xúc hoặc nguyên nhân chắc chắn từ một biểu cảm đơn lẻ. |
| Click/scroll behavior | Hành vi click/chạm và cuộn được ghi nhận nếu tính năng tương ứng hoạt động. |
| Survey / open-ended answer | Phản hồi do người tham gia tự báo cáo. |
| Dashboard | Màn hình tổng hợp dữ liệu/biểu đồ của study. |
| Finding / insight | Nhận định có căn cứ rút ra từ dữ liệu; có thể cần điều tra thêm. |
| Usability issue | Vấn đề làm người dùng khó đạt mục tiêu, tăng lỗi, thời gian hoặc sự không chắc chắn. |
| Pilot | Chạy thử quy trình trước nghiên cứu chính thức. |
| Heuristic evaluation | Đánh giá giao diện bằng bộ nguyên tắc/heuristics bởi người đánh giá; không đồng nhất với user testing. |

## 6. Tính năng cần khảo sát cho Customer Web và Admin Web

Các hàng dưới đây là **khả năng cần kiểm chứng**, không phải khẳng định rằng mọi tính năng đều có trong gói tài khoản của nhóm.

| Khả năng | Ứng dụng dự kiến | Trạng thái trước pilot |
|---|---|---|
| Nghiên cứu website đang hoạt động | Kiểm tra Customer Web và Admin Web ở môi trường test | Chưa xác minh trực tiếp |
| Session recording / replay | Xem lại thao tác tìm kiếm, giỏ hàng, dashboard, form Admin | Chưa xác minh trực tiếp |
| Click/scroll tracking | Nhận diện đường thao tác, click lặp hoặc cuộn không hiệu quả | Chưa xác minh trực tiếp |
| Eye tracking / visual attention / heatmap | Hỗ trợ xem khu vực chú ý ở trang sản phẩm, giỏ hàng, dashboard hoặc bảng dữ liệu | Chưa xác minh trực tiếp; phụ thuộc phương thức và thiết bị |
| Facial coding | Chỉ sử dụng nếu phù hợp, được hỗ trợ và có đồng thuận rõ ràng | Chưa xác minh trực tiếp; không bắt buộc cho phạm vi seminar |
| Survey / câu hỏi mở | Thu thập mức khó/dễ và phản hồi sau task | Chưa xác minh trực tiếp |
| Dashboard / export | Lưu dữ liệu cần phân tích và báo cáo | Chưa xác minh loại export trong tài khoản |
| Methodology/custom question | Tạo câu hỏi và cấu hình nghiên cứu phù hợp | Chưa xác minh trực tiếp |
| AI-generated insight | Chỉ sử dụng nếu là tính năng có thật trong cấu hình hiện hành; không mặc định | Chưa xác minh trực tiếp |

### 6.1. Giới hạn task cần xác minh

FAQ công khai của UXReality mô tả thời lượng mỗi task là 1, 2 hoặc 3 phút và phương pháp tự động có thể cấu hình một nhiệm vụ mỗi study. Trang FAQ này đã được crawl từ trước nên có thể chưa phản ánh đầy đủ phiên bản hiện hành. Trước khi chốt phương án, nhóm phải tạo pilot cho cả Customer Web và Admin Web, kiểm tra số task/study, thời lượng, loại thiết bị, truy cập URL và dữ liệu đầu ra. Nếu giới hạn vẫn tồn tại, hãy tạo study riêng cho mỗi task và cắt task thành mục tiêu ngắn; không ép một luồng dài vượt giới hạn.

## 7. Hai khung đánh giá làm kim chỉ nam

UXReality thu thập dữ liệu; **UI/UX Design Principles và Nielsen’s 10 Usability Heuristics là khung do nhóm áp dụng để diễn giải, phân loại và đánh giá phát hiện**. Không mặc định nền tảng tự chấm điểm theo hai khung này.

### 7.1. UI/UX Design Principles được vận hành hóa cho EShop

“UI/UX Design Principles” không phải một danh sách duy nhất được chuẩn hóa chung cho mọi sản phẩm. Vì vậy, nhóm quy định trước bộ nguyên tắc thực hành dưới đây, tham khảo hướng dẫn của Microsoft về consistency, simplicity, user-centricity, efficiency, feedback/guidance và accessibility, cùng các quy ước usability liên quan.

| Mã | Nguyên tắc | Câu hỏi đánh giá trên Customer/Admin Web |
|---|---|---|
| P1 | Lấy người dùng và mục tiêu làm trung tâm | Giao diện hỗ trợ đúng mục tiêu mua hàng hay quản trị mà người dùng đang cố hoàn thành không? |
| P2 | Rõ ràng, dễ hiểu và có affordance | Nhãn, biểu tượng, trạng thái và nút hành động có gợi ý đúng cách dùng không? |
| P3 | Phân cấp thị giác và kiến trúc thông tin | Thông tin quan trọng, hành động chính, bộ lọc và trạng thái có dễ tìm không? |
| P4 | Nhất quán | Tên gọi, màu, bố cục, hành vi nút và định dạng dữ liệu có nhất quán giữa các màn hình không? |
| P5 | Phản hồi kịp thời | Sau thao tác, người dùng có biết hệ thống đang tải, đã lưu, đã thêm hay đã xảy ra lỗi không? |
| P6 | Đơn giản và giảm tải nhận thức | Có quá nhiều thông tin, trường nhập, bước hoặc lựa chọn làm người dùng khó quyết định không? |
| P7 | Hiệu quả và dễ học | Người mới có tìm được đường đi; người dùng thường xuyên có thực hiện nhiệm vụ với nỗ lực hợp lý không? |
| P8 | Ngăn ngừa lỗi và hỗ trợ phục hồi | Giao diện có hạn chế nhập sai, xác nhận thao tác nguy hiểm và giúp người dùng sửa lỗi không? |
| P9 | Accessibility và khả năng thích ứng | Chữ, tương phản, nhãn, focus/tab order và bố cục có hỗ trợ nhiều cách sử dụng không? Phạm vi kiểm tra cần ghi rõ. |
| P10 | Tin cậy và minh bạch | Giá, tổng tiền, trạng thái đơn, kết quả import, cảnh báo và việc thu thập dữ liệu có rõ ràng không? |

### 7.2. Nielsen’s 10 Usability Heuristics

Dùng tên heuristics theo Nielsen Norman Group. Heuristics là nguyên tắc tổng quát để đánh giá giao diện, không phải checklist chức năng hay kết quả thống kê tự động.

| Mã | Heuristic | Ví dụ câu hỏi trong EShop |
|---|---|---|
| N1 | Visibility of System Status — Hiển thị trạng thái hệ thống | Sau khi thêm giỏ, lưu sản phẩm, chuyển trạng thái đơn hoặc import CSV, có phản hồi rõ ràng không? |
| N2 | Match Between System and the Real World — Phù hợp thế giới thực | Tên gọi, đơn vị tiền, trạng thái và thứ tự thông tin có gần với cách người dùng hiểu nghiệp vụ không? |
| N3 | User Control and Freedom — Quyền kiểm soát và tự do | Người dùng có thể quay lại, hủy thao tác hoặc thoát khỏi luồng không mong muốn một cách rõ ràng không? |
| N4 | Consistency and Standards — Nhất quán và tiêu chuẩn | Nút, nhãn, cách điều hướng và cách trình bày có nhất quán giữa các trang không? |
| N5 | Error Prevention — Ngăn ngừa lỗi | Có ngăn giá không hợp lệ, thiếu trường bắt buộc, import sai định dạng hoặc xóa nhầm không? |
| N6 | Recognition Rather Than Recall — Nhận biết thay vì ghi nhớ | Các tùy chọn, trạng thái, giá trị và cách thao tác có hiển thị đủ để người dùng không phải ghi nhớ không? |
| N7 | Flexibility and Efficiency of Use — Linh hoạt và hiệu quả | Tìm kiếm, bộ lọc, bảng và thao tác thường dùng có giúp hoàn thành nhanh không? |
| N8 | Aesthetic and Minimalist Design — Thiết kế thẩm mỹ và tối giản | Thông tin quan trọng có nổi bật, hay bị cạnh tranh bởi nội dung ít liên quan? |
| N9 | Help Users Recognize, Diagnose, and Recover from Errors — Hỗ trợ nhận biết, chẩn đoán và phục hồi lỗi | Thông báo lỗi có nêu vấn đề và cách khắc phục, ví dụ lỗi từng dòng CSV, không? |
| N10 | Help and Documentation — Trợ giúp và tài liệu | Có hướng dẫn mẫu CSV, giải thích trường coupon hoặc trợ giúp khi cần không? |

### 7.3. Cách phối hợp hai khung

1. **Quan sát từ user test:** ghi chính xác hành vi và lời nói, không chẩn đoán vội.
2. **Đối chiếu tiêu chí task/FR:** xem hành vi có cản trở mục tiêu hay vi phạm yêu cầu EShop không.
3. **Gắn nguyên tắc UI/UX:** chọn một hoặc vài mã P có liên quan.
4. **Gắn Nielsen heuristic:** chọn mã N phù hợp nhất; cho phép ghi nhiều heuristic nếu có lý do.
5. **Đánh giá bằng chứng:** chỉ ghi vấn đề nếu có bằng chứng; phân biệt sự kiện, diễn giải và giả thuyết nguyên nhân.
6. **Severity và đề xuất:** đánh giá mức độ ảnh hưởng, tần suất quan sát được và cách cải thiện có thể kiểm chứng lại.

User testing cho biết người dùng thực sự làm gì; heuristic evaluation giúp giải thích vấn đề dưới góc nhìn các nguyên tắc; hai phương pháp bổ trợ chứ không thay thế nhau. Nhóm nên ghi rõ nguồn phát hiện là `UT` (quan sát người dùng), `HE` (heuristic evaluation của người đánh giá) hoặc `BOTH`.

## 8. Ánh xạ phạm vi EShop dự kiến

| Khu vực | EShop FR | Nhiệm vụ tiêu biểu | UI/UX / heuristics cần chú ý |
|---|---|---|---|
| Customer: tìm kiếm | FR-05 | Tìm và xác định sản phẩm | P2/P3/P7; N2/N6/N7/N8 |
| Customer: chi tiết và thêm giỏ | FR-06, FR-24 | Chọn số lượng và thêm vào giỏ | P2/P5/P8/P10; N1/N4/N5/N6 |
| Customer: giỏ hàng | FR-07, FR-23, FR-24 | Điều chỉnh số lượng hoặc xóa sản phẩm | P4/P5/P8; N1/N3/N4/N5/N9 |
| Customer: checkout/coupon | FR-08, FR-09 | Áp dụng mã, hiểu tổng tiền sau giảm | P2/P5/P8/P10; N1/N2/N5/N9 |
| Customer: lịch sử đơn | FR-11 | Tìm đơn và hiểu trạng thái | P2/P3/P4/P10; N1/N2/N6 |
| Admin: dashboard | FR-13 | Tìm doanh thu và tổng số đơn | P1/P3/P6/P7; N1/N6/N7/N8 |
| Admin: product CRUD | FR-15 | Sửa sản phẩm kiểm thử và nhận biết việc lưu | P4/P5/P8; N1/N4/N5/N9 |
| Admin: CSV import | FR-16 | Import file và hiểu báo cáo kết quả | P2/P5/P8/P10; N1/N5/N9/N10 |
| Admin: order management | FR-10, FR-18 | Tìm đơn kiểm thử, chuyển trạng thái hợp lệ | P2/P4/P5/P8/P10; N1/N2/N3/N4/N9 |
| Admin: coupon CRUD (mở rộng) | FR-17 | Tạo coupon với các trường bắt buộc | P2/P4/P8; N4/N5/N6/N9 |

## 9. Hạn chế, rủi ro và cách giảm thiểu

### 9.1. Hạn chế về phương pháp

- Dữ liệu hướng nhìn hoặc biểu cảm có thể phụ thuộc thiết bị, chất lượng hình ảnh, ánh sáng và hiệu chuẩn; không nên đồng nhất với nghiên cứu eye-tracking chuyên dụng nếu chưa biết cơ chế thực tế.
- Một nhóm sinh viên nhỏ thường chỉ hỗ trợ nghiên cứu khám phá; không đủ để suy rộng kết quả ra toàn bộ khách hàng.
- Một task thành công không chứng minh toàn bộ giao diện dễ dùng; một task thất bại cũng không tự động chứng minh nguyên nhân là UI.
- Các task ở Customer và Admin khác mục tiêu, nên không so sánh trực tiếp thời gian/success như thể chúng là cùng loại tác vụ.

### 9.2. Hạn chế kỹ thuật

- `localhost` trên máy phát triển không dùng trực tiếp cho người tham gia từ xa. Cần môi trường staging có thể truy cập, an toàn và có dữ liệu giả lập.
- Admin task có thể thay đổi dữ liệu. Chỉ dùng tài khoản Admin test và dữ liệu sandbox; có kế hoạch reset sau phiên.
- Study/task time limits, thiết bị tương thích, export và quyền camera/microphone phải được kiểm tra bằng pilot.
- Không tuyên bố chức năng tự động hóa chưa xác minh. Nếu UXReality không phù hợp với một yêu cầu seminar, ghi limitation và trình bày cách bù thủ công hoặc cần công cụ bổ trợ.

### 9.3. Quyền riêng tư

- Thông báo cho người tham gia về recording, camera/microphone và mục đích sử dụng dữ liệu; lấy đồng ý trước khi bắt đầu.
- Dùng mã ID, không lưu tên thật trong bảng phân tích.
- Không chia sẻ video/biểu cảm/giọng nói rộng rãi và không tải dữ liệu nhận diện lên dịch vụ AI bên ngoài nếu chưa kiểm tra điều khoản và có đồng thuận thích hợp.
- Xóa hoặc hạn chế quyền truy cập dữ liệu khi không còn cần thiết.

## 10. Nguồn tham khảo

1. UXReality, FAQ: <https://uxreality.com/faq> (truy cập 24/10/2026; một số nội dung có thể cũ, cần xác minh trực tiếp trong tài khoản).
2. UXReality: <https://uxreality.com/>.
3. UXReality for Chrome: <https://chromewebstore.google.com/detail/uxreality-for-chrome/ibpbamgbgdeaiabiedppnlpiegijnbdp>.
4. Microsoft Learn, *Key UI/UX design principles*: <https://learn.microsoft.com/en-us/dynamics365/guidance/develop/ui-ux-design-principles>.
5. Nielsen Norman Group, Jakob Nielsen, *10 Usability Heuristics for User Interface Design*: <https://www.nngroup.com/articles/ten-usability-heuristics/> (trang ghi lần rà soát 30/01/2024).
6. EShop System Requirements Specification, `README.md`, version 2.0, 14/05/2026 — dùng làm cơ sở ánh xạ FR/UI requirements.

> **Trạng thái trước thực nghiệm:** tài liệu định nghĩa phương pháp và phạm vi đề xuất. Cần cập nhật tính năng, giới hạn và đánh giá UXReality sau pilot, không suy diễn từ tài liệu nhà cung cấp thành kết quả đã dùng thử.
