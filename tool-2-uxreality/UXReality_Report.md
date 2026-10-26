# UXReality Report — Usability Testing trên EShop Customer Web và Admin Web

> **Trạng thái:** Báo cáo kết quả sau nghiên cứu.
> **Phạm vi:** Customer Web (C-01 → C-04) và Admin Web (A-01 → A-04).
> **Khung phân tích:** UI/UX Design Principles P1–P10 và Nielsen’s 10 Usability Heuristics N1–N10.

## Tóm tắt

- **Mục đích:** Đánh giá khám phá khả năng người dùng Customer và Admin hoàn thành 8 nhiệm vụ web ưu tiên trên EShop; nhận diện ma sát về điều hướng, hiểu thông tin, phản hồi trạng thái và xử lý lỗi; đồng thời đánh giá mức phù hợp của UXReality trong thu thập bằng chứng usability.
- **Phạm vi:** Customer Web gồm C-01 (tìm sản phẩm và đọc giá), C-02 (thêm vào giỏ và nhận biết phản hồi), C-03 (đổi số lượng và xóa sản phẩm), C-04 (áp dụng coupon và hiểu tổng tiền); Admin Web gồm A-01 (đọc dashboard), A-02 (sửa giá sản phẩm), A-03 (import CSV), A-04 (chuyển trạng thái đơn).
- **Tool/configuration:** UXReality; mỗi task một study riêng; thu survey/questions sau task, click/scroll tracking, heatmap/visual attention và eye-tracking/facial coding ở mức bổ trợ. Môi trường test được expose qua Cloudflare Quick Tunnel.
- **Người tham gia:** 6 Customer (C-P01 → C-P06) và 6 Admin (A-P01 → A-P06). Tổng cộng **48 task session**, tất cả hợp lệ.
- **Khung phân tích:** P1–P10 (UI/UX Design Principles vận hành hóa cho EShop) và N1–N10 (Nielsen’s 10 Usability Heuristics).
- **Phát hiện chính:** 23/48 phiên đạt Success (47,9%); 18/48 Partial (37,5%); 7/48 Fail (14,6%). Customer đạt 10/24 (41,7%), Admin đạt 13/24 (54,2%). Các vấn đề nổi bật: công thức coupon sai làm tổng tiền vô lý (C-04), dashboard nhân đôi doanh thu (A-01), sửa một sản phẩm làm đổi tên toàn bộ bảng (A-02), thiếu điều khiển số lượng trong giỏ (C-03), click đầu tiên vào “Thêm vào giỏ” bị bỏ qua và thiếu phản hồi (C-02), chuyển trạng thái đơn không xác nhận và không thể hoàn tác (A-04), preview import bị nhầm là kết quả (A-03).
- **Hạn chế chính:** Mẫu nhỏ và không xác suất (12 người, 48 phiên), chỉ phù hợp mục tiêu khám phá; không sử dụng session recording/replay để review lại toàn bộ phiên; không thu SUS và không audit accessibility đầy đủ; việc gắn mã P/N và severity do nhóm thực hiện thủ công; SUT có một số defect chức năng nghiêm trọng được phát hiện trong phiên usability nhưng không thay thế kiểm thử chức năng/bảo mật.

## 1. Giới thiệu

### 1.1. Bối cảnh

EShop có hai giao diện web trong phạm vi nghiên cứu: **Customer Web** dành cho mua hàng và **Admin Web** dành cho quản trị sản phẩm/đơn hàng. Nghiên cứu tập trung vào cách người dùng thực hiện nhiệm vụ và hiểu phản hồi giao diện, không thay thế kiểm thử API/backend, kiểm thử bảo mật hoặc kiểm thử hiệu năng.

Báo cáo sử dụng dữ liệu từ 8 task cốt lõi đã chạy: 4 task Customer và 4 task Admin. Hai task mở rộng C-05 (lịch sử đơn hàng) và A-05 (quản lý coupon) không được triển khai trong đợt này.

### 1.2. Mục tiêu

1. Xây dựng bộ task có thể lặp lại cho hai vai trò Customer và Admin.
2. Đo hoặc ghi nhận task outcome, thời gian, lỗi, trợ giúp và cảm nhận sau task theo khả năng dữ liệu thực tế.
3. Nhận diện các thao tác khiến người tham gia do dự, đi sai hướng, không hiểu kết quả hoặc cần trợ giúp.
4. Ánh xạ phát hiện sang nguyên tắc UI/UX và Nielsen heuristic thích hợp.
5. Đánh giá phần UXReality tự động hỗ trợ và phần nhóm phải thực hiện thủ công.
6. Đề xuất cải thiện có thể kiểm chứng lại; không đưa ra kết luận vượt quá cỡ mẫu và dữ liệu.

### 1.3. Câu hỏi nghiên cứu

- **RQ1 — Customer:** Người dùng có thể tìm, chọn và thao tác với sản phẩm/giỏ hàng/coupon trên Customer Web với mức độ rõ ràng và hiệu quả như thế nào?
- **RQ2 — Admin:** Người dùng có thể tìm thông tin quản trị, chỉnh sửa dữ liệu sản phẩm, import CSV và xử lý đơn hàng trên Admin Web như thế nào?
- **RQ3 — Design:** Những khó khăn quan sát được liên quan tới nguyên tắc UI/UX nào và heuristic nào của Nielsen?
- **RQ4 — Tool:** UXReality cung cấp được loại bằng chứng nào cho hai website, và bước nào vẫn phải ghi nhận/phân tích thủ công?

## 2. UXReality và cấu hình nghiên cứu

### 2.1. Tổng quan công cụ

UXReality là nền tảng nghiên cứu trải nghiệm người dùng từ xa, hỗ trợ nghiên cứu website, ứng dụng hoặc prototype. Theo tài liệu nhà cung cấp, nền tảng có thể thu thập bản ghi phiên, hành vi click/scroll, dữ liệu hướng nhìn/visual attention, phân tích biểu cảm khuôn mặt và phản hồi khảo sát; tuy nhiên khả năng thực tế phụ thuộc phương thức nghiên cứu, thiết bị, phiên bản và gói tài khoản.

Trong nghiên cứu này, UXReality được dùng làm công cụ **thu thập và hỗ trợ diễn giải hành vi người dùng trong khi làm nhiệm vụ**, không phải công cụ thay thế kiểm thử API, cơ sở dữ liệu, business rule hoặc bảo mật. Các khả năng đã dùng gồm survey/questions sau task, click/scroll tracking, heatmap/visual attention và eye-tracking/facial coding ở mức bổ trợ. Việc phân loại issue theo P/N, xác định severity và đề xuất cải thiện do nhóm thực hiện thủ công.

### 2.2. Study được sử dụng

| Role | Task ID | Môi trường | Trạng thái |
|---|---|---|---|
| Customer | C-01 | Cloudflare Quick Tunnel → Customer Web | Hoàn thành; 6/6 phiên hợp lệ |
| Customer | C-02 | Cloudflare Quick Tunnel → Customer Web | Hoàn thành; 6/6 phiên hợp lệ |
| Customer | C-03 | Cloudflare Quick Tunnel → Customer Web; setup phase giữ React cart state | Hoàn thành; 6/6 phiên hợp lệ |
| Customer | C-04 | Cloudflare Quick Tunnel → Customer Web; setup phase giữ cart và phiên đăng nhập | Hoàn thành; 6/6 phiên hợp lệ |
| Admin | A-01 | Cloudflare Quick Tunnel → Admin Web; fixture `dashboard` | Hoàn thành; 6/6 phiên hợp lệ |
| Admin | A-02 | Cloudflare Quick Tunnel → Admin Web; seed 5 sản phẩm | Hoàn thành; 6/6 phiên hợp lệ |
| Admin | A-03 | Cloudflare Quick Tunnel → Admin Web; file `qa_valid.csv` | Hoàn thành; 6/6 phiên hợp lệ |
| Admin | A-04 | Cloudflare Quick Tunnel → Admin Web; fixture `order-status` | Hoàn thành; 6/6 phiên hợp lệ |

Mỗi task được cấu hình thành một study riêng để giữ mục tiêu ngắn, tránh lẫn dữ liệu giữa Customer và Admin. URL Quick Tunnel là URL tạm, đổi mỗi lần khởi động lại tunnel; không cố định URL trong báo cáo.

**Demo:** <https://youtu.be/oELfSMJ5R5U>.

### 2.3. Khả năng đã sử dụng

| Tính năng | Cách dùng | Trạng thái xác minh | Hạn chế |
|---|---|---|---|
| Tạo study và cấu hình URL/task | Mỗi task một study; nhập URL Quick Tunnel, lời task và bộ câu hỏi sau task | Đã dùng trong 8 study | URL phụ thuộc tunnel; phải giữ tunnel sống suốt phiên |
| Survey/questions sau task | Likert 1–5, Multiple Choice, Single Choice; không dùng câu hỏi mở | Đã dùng; dữ liệu tổng hợp trong Task Data Result | Bộ câu hỏi khác nhau giữa các task nên không phải câu nào cũng có đủ 48 quan sát |
| Click/scroll tracking | Đối chiếu đường thao tác, click lặp, cuộn không hiệu quả | Đã dùng | Không thay thế quan sát hành vi có ngữ cảnh |
| Heatmap/visual attention | Bổ trợ xem vùng chú ý ở trang sản phẩm, giỏ hàng, dashboard | Đã dùng ở mức bổ trợ | Không dùng một tín hiệu đơn lẻ để kết luận nguyên nhân |
| Eye-tracking/facial coding | Thu dữ liệu hướng nhìn/biểu cảm ở mức bổ trợ | Đã dùng ở mức bổ trợ | Không suy ra cảm xúc hoặc nguyên nhân chắc chắn từ một biểu cảm |
| Dashboard/export dữ liệu | Đối chiếu số liệu tổng hợp | Chưa xác minh riêng | Số liệu trong báo cáo được tổng hợp và kiểm tra thủ công |
| Session recording/replay | Không sử dụng trong đợt này | Không dùng | Thiếu bản ghi để review lại toàn bộ phiên; hành vi dựa trên click/scroll/heatmap, quan sát và survey |
| AI-generated insight | Không sử dụng | Không xác minh | Không đưa vào báo cáo |
| Mobile study | Không sử dụng | Not tested | Ngoài phạm vi |

## 3. Phương pháp nghiên cứu

### 3.1. Phạm vi và FR được chọn

| Role | Task ID | EShop FR | Mục tiêu task | Core/Extension |
|---|---|---|---|---|
| Customer | C-01 | FR-05 | Tìm sản phẩm và xác định giá | Core |
| Customer | C-02 | FR-06, FR-24 | Thêm sản phẩm và nhận biết phản hồi | Core |
| Customer | C-03 | FR-07, FR-23, FR-24 | Điều chỉnh giỏ và xóa sản phẩm | Core |
| Customer | C-04 | FR-08, FR-09 | Áp dụng coupon và hiểu tổng tiền | Core |
| Admin | A-01 | FR-13 | Tìm thông tin trên dashboard | Core |
| Admin | A-02 | FR-15 | Sửa sản phẩm | Core |
| Admin | A-03 | FR-16 | Import CSV và hiểu kết quả | Core |
| Admin | A-04 | FR-10, FR-18 | Quản lý trạng thái đơn hàng | Core |
| Customer | C-05 | FR-11 | Xem lịch sử đơn hàng | Extension — không triển khai |
| Admin | A-05 | FR-17 | Tạo/quản lý coupon | Extension — không triển khai |

### 3.2. Người tham gia

| Participant ID | Role | Điều kiện tham gia | Task sessions hợp lệ | Ghi chú ẩn danh |
|---|---|---|---|---|
| C-P01 → C-P06 | Customer | Sử dụng được trình duyệt phổ biến; không biết trước giao diện EShop; không phải người thiết kế/phát triển giao diện | 4/người (C-01 → C-04) | Dùng mã ID; không lưu tên thật trong bảng phân tích |
| A-P01 → A-P06 | Admin | Kỹ năng máy tính cơ bản; được thông báo vai trò trong bối cảnh bài test; không được hướng dẫn vị trí nút | 4/người (A-01 → A-04) | Dùng mã ID; không lưu tên thật trong bảng phân tích |

Tổng cộng 6 người tham gia, 48 task session.

### 3.3. Môi trường và dữ liệu test

- **Môi trường:** EShop Customer Web và Admin Web chạy trên môi trường test/sandbox, expose qua **Cloudflare Quick Tunnel** (`cloudflared tunnel --url ...`). URL là tạm và đổi mỗi lần khởi động lại tunnel; tunnel phải sống suốt phiên đo.
- **Customer Web URL:** URL Quick Tunnel trỏ tới Customer Web (không cố định trong báo cáo).
- **Admin Web URL:** URL Quick Tunnel trỏ tới Admin Web (không cố định trong báo cáo).
- **Tài khoản:** Tài khoản Customer seed cho C-04; tài khoản Admin test cho các task Admin. Không ghi credential/token trong báo cáo.
- **Dataset:** 5 sản phẩm seed (`iPhone 15 Pro Max` 30.000.000 ₫; `Samsung Galaxy S24 Ultra` 28.000.000 ₫; `MacBook Pro M3` 45.000.000 ₫; `Tai nghe AirPods Pro 2` 6.000.000 ₫; `Bàn phím cơ Keychron Q1` 4.000.000 ₫); coupon `SAVE10` (10%, tối thiểu 300.000 ₫, còn hiệu lực); fixture `dashboard` (2 đơn) và `order-status` (3 đơn); file `qa_valid.csv`.
- **Điều kiện reset:** Dừng backend → chạy `node database.js` để seed lại → khởi động `node server.js` → nạp fixture cần thiết → xóa `localStorage.token`/`adminToken` → thực hiện setup phase cho C-03/C-04 trên đúng browser/session của participant.
- **UXReality:** Survey/questions sau task, click/scroll tracking, heatmap/visual attention, eye-tracking/facial coding ở mức bổ trợ; mỗi task một study.

### 3.4. Metrics và định nghĩa

| Metric | Định nghĩa | Nguồn | Tự động/Thủ công |
|---|---|---|---|
| Task outcome | `Success`, `Partial`, `Fail` hoặc `Invalid` theo tiêu chí đã định trước của từng task | Reviewer đối chiếu dữ liệu phiên và trạng thái cuối | Thủ công |
| Task success rate | Success / số phiên hợp lệ × 100% | Bảng phân tích nhóm | Thủ công |
| Completion time | Từ khi người tham gia bắt đầu đọc/đồng ý thực hiện prompt đến khi đạt tiêu chí hoặc dừng; không gồm setup phase | UXReality ghi nhận thời lượng; reviewer kiểm tra | Bán tự động |
| Observable errors | Click nhầm, nhập sai, lặp lại thao tác hoặc đi sai luồng theo định nghĩa task | Click/scroll tracking + quan sát phiên | Bán tự động |
| Assistance count | Số lần moderator phải trợ giúp ngoài protocol; đọc lại prompt không tính | Moderator log | Thủ công |
| Perceived difficulty | Câu hỏi `QD1` thang 1–5 sau task (1 = rất dễ, 5 = rất khó) | UXReality survey | Tự động |
| Confidence | Câu hỏi `QD2` thang 1–5 về mức tự tin vào kết quả cuối | UXReality survey | Tự động |
| Backtracking/repeated actions | Quay lại, lặp click hoặc điều hướng lại quan sát được | Click/scroll tracking + quan sát | Bán tự động |
| Principle/heuristic tags | Mã P và N gắn cho issue sau khi review | Nhóm nghiên cứu | Thủ công |

**Công thức:** `Task Success Rate = (số phiên Success / tổng số phiên hợp lệ) × 100%`. Mean/median time chỉ tính từ phiên hợp lệ có thời gian xác định. Không so sánh trực tiếp thời gian giữa task Customer và task Admin vì độ phức tạp khác nhau.

### 3.5. Quy trình tái lập

1. Xác minh khả thi: tạo study UXReality cho Customer Web và Admin Web; kiểm tra participant join, thời lượng, task/study, recording và dữ liệu đầu ra.
2. Chuẩn bị môi trường: seed database, nạp fixture, chuẩn bị `qa_valid.csv`, tài khoản test và URL Quick Tunnel.
3. Pilot C-01 và A-01 để kiểm tra môi trường, participant join, survey và cách chuẩn bị fixture.
4. Pilot C-03 và C-04 để xác minh setup phase giữ được React cart state và phiên đăng nhập; nếu không, dừng thu thập chính thức cho hai task này.
5. Chạy 6 phiên/task; reset dữ liệu và setup lại trước mỗi phiên; không trợ giúp ngoài protocol.
6. Kiểm tra chất lượng dữ liệu: outcome, thời gian, lỗi, assistance, câu trả lời survey; lưu vào `Task_Data_Result_*.md`.
7. Tổng hợp metrics, mã hóa observation theo P1–P10 và N1–N10, gán severity, review chéo và viết báo cáo.

## 4. Khung đánh giá UI/UX Design Principles và Nielsen Heuristics

### 4.1. UI/UX Design Principles

| Mã | Nguyên tắc | Bằng chứng được dùng để đánh giá |
|---|---|---|
| P1 | User-centeredness/task fit | Mục tiêu và outcome task |
| P2 | Clarity and affordance | Nhãn, thao tác, lời nói và hiểu nhầm |
| P3 | Visual hierarchy/information architecture | Thời gian tìm thông tin, đường đi, vùng chú ý nếu có |
| P4 | Consistency | So sánh pattern/label giữa các trang |
| P5 | Feedback and guidance | Phản hồi sau thao tác và trạng thái |
| P6 | Simplicity/cognitive load | Bước dư thừa, phân vân, thông tin không cần thiết |
| P7 | Efficiency and learnability | Outcome, thời gian, lỗi và đường thao tác |
| P8 | Error prevention/recovery | Lỗi thao tác, xác nhận, khả năng phục hồi |
| P9 | Accessibility/adaptability | Kiểm tra sơ bộ keyboard/focus, nhãn, contrast/responsive nếu có |
| P10 | Trust/transparency | Hiểu biết về tổng tiền, trạng thái, thông báo và kết quả |

Đây là bộ nguyên tắc do nhóm vận hành hóa dựa trên tài liệu UI/UX tham khảo; không được coi là danh sách chuẩn duy nhất toàn ngành.

### 4.2. Nielsen’s 10 Usability Heuristics

1. **N1 — Visibility of System Status:** hệ thống thông báo trạng thái kịp thời.
2. **N2 — Match Between System and the Real World:** dùng khái niệm/thuật ngữ gần với người dùng.
3. **N3 — User Control and Freedom:** hỗ trợ quay lại, hủy hoặc thoát khi cần.
4. **N4 — Consistency and Standards:** nhất quán và tuân theo quy ước.
5. **N5 — Error Prevention:** ngăn lỗi trước khi xảy ra.
6. **N6 — Recognition Rather Than Recall:** ưu tiên nhận biết hơn ghi nhớ.
7. **N7 — Flexibility and Efficiency of Use:** hỗ trợ hoàn thành nhiệm vụ hiệu quả.
8. **N8 — Aesthetic and Minimalist Design:** tránh thông tin không liên quan cạnh tranh với thông tin chính.
9. **N9 — Help Users Recognize, Diagnose, and Recover from Errors:** thông báo giúp hiểu và phục hồi lỗi.
10. **N10 — Help and Documentation:** có trợ giúp/hướng dẫn hữu ích khi cần.

Nguồn: Nielsen Norman Group, <https://www.nngroup.com/articles/ten-usability-heuristics/>.

### 4.3. Quy tắc gắn mã

1. Ghi observation khách quan từ dữ liệu phiên (hành vi, lời nói, click/scroll, câu trả lời survey).
2. Đối chiếu với tiêu chí thành công và FR liên quan của task.
3. Xác định tác động tới mục tiêu, thời gian, lỗi hoặc cảm nhận của người tham gia.
4. Chọn một hoặc vài mã P có quan hệ giải thích được với bằng chứng.
5. Chọn mã N phù hợp nhất; cho phép ghi nhiều heuristic nếu có lý do.
6. Ghi nguồn: `UT` (quan sát người dùng), `HE` (heuristic evaluation/code review của nhóm) hoặc `BOTH`.
7. Gán severity theo rubric S1–S4, nêu căn cứ; đề xuất cải thiện và metric/task dùng để retest.
8. Review chéo bởi thành viên chưa mã hóa finding ban đầu.

**Severity rubric:** S1 — Low (khó chịu nhỏ, không cản trở); S2 — Moderate (do dự, thêm bước, lỗi tự phục hồi); S3 — High (nhiều người gặp hoặc khiến task thất bại/cần hỗ trợ); S4 — Critical (chặn tác vụ quan trọng, nguy cơ hành động nghiêm trọng hoặc mất dữ liệu trong môi trường test).

## 5. Kết quả thực nghiệm

### 5.1. Tình trạng phiên

| Role | Task ID | Planned sessions | Actual sessions | Valid sessions | Invalid sessions + reason |
|---|---|---:|---:|---:|---|
| Customer | C-01 | 3–5 | 6 | 6 | 0 |
| Customer | C-02 | 3–5 | 6 | 6 | 0 |
| Customer | C-03 | 3–5 | 6 | 6 | 0 |
| Customer | C-04 | 3–5 | 6 | 6 | 0 |
| Admin | A-01 | 3–5 | 6 | 6 | 0 |
| Admin | A-02 | 3–5 | 6 | 6 | 0 |
| Admin | A-03 | 3–5 | 6 | 6 | 0 |
| Admin | A-04 | 3–5 | 6 | 6 | 0 |

Thực tế nhóm chạy 6 phiên/task, cao hơn mức tối thiểu 3–5 trong Test Plan. Tất cả 48 phiên đều hợp lệ; không có phiên nào bị loại vì lỗi kỹ thuật hoặc điều kiện test sai.

### 5.2. Metrics theo task

| Role | Task ID | Valid n | Success n | Success rate | Median time | Error count (mean) | Difficulty mean (QD1) | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---|
| Customer | C-01 | 6 | 5 | 83,3% | 49,0s | 0,5 | 1,5 | 1 Partial; 0 Fail. Lỗi chính: empty state khi tìm 0 kết quả, nhầm đơn vị tiền. |
| Customer | C-02 | 6 | 2 | 33,3% | 77,5s | 1,2 | 3,2 | 3 Partial; 1 Fail. 100% chọn Q11 “Không rõ trạng thái”. |
| Customer | C-03 | 6 | 1 | 16,7% | 129,5s | 2,2 | 4,5 | 3 Partial; 2 Fail. 5/6 không đạt số lượng 3 bằng đường thông thường. |
| Customer | C-04 | 6 | 2 | 33,3% | 107,0s | 0,8 | 3,8 | 3 Partial; 1 Fail. Tổng tiền hiển thị sai do công thức coupon. |
| Admin | A-01 | 6 | 4 | 66,7% | 51,0s | 0,5 | 2,0 | 2 Partial; 0 Fail. Doanh thu hiển thị 60.000.000 ₫ thay vì 30.000.000 ₫. |
| Admin | A-02 | 6 | 3 | 50,0% | 117,5s | 1,5 | 3,2 | 2 Partial; 1 Fail. Sửa 1 sản phẩm làm đổi tên toàn bộ bảng. |
| Admin | A-03 | 6 | 3 | 50,0% | 133,0s | 1,5 | 3,5 | 2 Partial; 1 Fail. Preview bị nhầm là kết quả import. |
| Admin | A-04 | 6 | 3 | 50,0% | 103,0s | 1,3 | 3,2 | 2 Partial; 1 Fail. Hủy đơn nhầm và không thể hoàn tác. |

### 5.3. Tổng hợp theo vai trò

| Role | Valid n | Success | Partial | Fail | Success rate | Mean time | Error mean | QD1 mean |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Customer | 24 | 10 | 10 | 4 | 41,7% | 92,7s | 1,2 | 3,25 |
| Admin | 24 | 13 | 8 | 3 | 54,2% | 104,5s | 1,2 | 2,98 |
| **Tổng** | **48** | **23** | **18** | **7** | **47,9%** | — | **1,2** | **3,11** |

Customer có tỷ lệ Success thấp hơn Admin, chủ yếu do C-03 (16,7%) và C-02/C-04 (33,3%). Tuy nhiên, hai nhóm task khác mục tiêu và độ phức tạp nên không so sánh trực tiếp như cùng một thước đo.

### 5.4. Khảo sát sau task

Các câu Likert 1–5 được tổng hợp theo trung bình có trọng số trên các task có hỏi câu đó. `N` thay đổi vì mỗi task chỉ chọn 4–5 câu thuộc bộ P/N của task.

| Câu | Nội dung | Customer mean (N) | Admin mean (N) | Tổng mean (N) |
|---|---|---:|---:|---:|
| Q01 | Trạng thái và phản hồi của hệ thống | 2,50 (18) | 3,48 (24) | 3,06 (42) |
| Q02 | Ngôn ngữ và tính dễ hiểu | 4,17 (18) | 4,10 (12) | 4,14 (30) |
| Q03 | Quyền kiểm soát | 2,50 (6) | 2,80 (6) | 2,65 (12) |
| Q04 | Tính nhất quán | 3,50 (6) | 3,10 (12) | 3,23 (18) |
| Q05 | Ngăn ngừa lỗi | 2,30 (18) | 3,10 (12) | 2,62 (30) |
| Q06 | Nhận diện thay vì ghi nhớ | 4,30 (12) | 4,70 (6) | 4,43 (18) |
| Q07 | Hiệu quả thao tác | 4,30 (6) | 4,50 (6) | 4,40 (12) |
| Q08 | Tính tối giản và tập trung | 3,50 (6) | 4,50 (6) | 4,00 (12) |
| Q09 | Khôi phục sau lỗi | 2,35 (12) | 2,53 (18) | 2,46 (30) |
| Q10 | Trợ giúp và hướng dẫn | — (0) | 3,30 (6) | 3,30 (6) |
| QD1 | Mức độ khó (thấp = dễ) | 3,25 (24) | 2,98 (24) | 3,11 (48) |
| QD2 | Tự tin vào kết quả cuối | 2,88 (24) | 3,58 (24) | 3,23 (48) |

**Đọc kết quả:** Q01 (N1), Q05 (N5), Q09 (N9), Q03 (N3) và QD2 thấp ở Customer, phù hợp với các vấn đề quan sát được về phản hồi sau thao tác, ngăn ngừa lỗi và khả năng phục hồi. Q02 (N2) và Q06 (N6) cao, cho thấy người dùng nhìn chung hiểu nhãn và tìm thấy thông tin; vấn đề nằm nhiều ở hành vi hệ thống hơn là từ vựng.

**Q11 — Vấn đề nổi bật theo task:**

| Task | Vấn đề được chọn nhiều nhất (tỷ lệ) | Q12 — Yếu tố ảnh hưởng nhất |
|---|---|---|
| C-01 | Không gặp vấn đề nào 50%; Khác 33,3%; trạng thái/nhãn/nhiễu 16,7% mỗi loại | Không có vấn đề đáng kể 50% |
| C-02 | Không rõ trạng thái hệ thống 100%; không nhất quán 33,3% | Trạng thái/phản hồi 66,7% |
| C-03 | Khó quay lại/hủy/sửa 66,7%; không nhất quán 66,7%; khó tránh lỗi 50% | Ngăn ngừa lỗi 66,7% |
| C-04 | Không nhất quán 83,3%; không hiểu thông báo lỗi 50% | Trạng thái/phản hồi 33,3% |
| A-01 | Không gặp vấn đề nào 50%; không nhất quán 50% | Không có vấn đề đáng kể 33,3% |
| A-02 | Không nhất quán 66,7% | Tính nhất quán 50% |
| A-03 | Không gặp vấn đề nào 50%; không rõ trạng thái 33,3%; khó tránh lỗi 33,3% | Không có vấn đề đáng kể 50% |
| A-04 | Không gặp vấn đề nào 50%; khó tránh lỗi 33,3% | Trạng thái/phản hồi 33,3%; không có vấn đề 33,3% |

### 5.5. Bằng chứng/quan sát tiêu biểu

- **C-01:** 5/6 Success. C01-P03 gõ sai từ khóa “Airpods pro 2” → lưới rỗng, không có thông báo, phải gõ lại “AirPods” (63s, 1 lỗi). C01-P05 tìm đúng số tiền nhưng chỉ vào thẻ MacBook khi nói lại → Partial. C01-P06 bối rối vì đơn vị “VND” thay vì “₫”.
- **C-02:** Chỉ 2/6 Success. 100% người chọn Q11 “Không rõ hệ thống đang xử lý hay đã hoàn tất”. C02-P01 và C02-P03 phải click “Thêm vào giỏ” hai lần vì lần đầu bị bỏ qua. C02-P04 click một lần ở thẻ trang chủ, không thấy phản hồi, giỏ chỉ có 1 sản phẩm. C02-P05 click 4 lần → giỏ có 4 sản phẩm thay vì 2. C02-P06 thấy hai dòng AirPods và phải hỏi moderator.
- **C-03:** Chỉ 1/6 Success. 5/6 không đưa AirPods về số lượng 3 bằng điều khiển trong giỏ; C03-P01 phải xóa dòng rồi thêm lại từ trang chi tiết. C03-P03 xóa nhầm AirPods thay vì Keychron vì không có dialog xác nhận. C03-P04 không tìm thấy điều khiển số lượng và hỏi moderator. QD1 trung bình 4,5.
- **C-04:** 2/6 Success. 6/6 nhập `SAVE10` và thấy phản hồi, nhưng giao diện hiển thị “Giảm 10%”, “Tiết kiệm -270.000.000 ₫” và “Thành tiền 300.000.000 ₫”. C04-P03 tính đúng 27.000.000 ₫ nhưng không khớp giao diện. C04-P04 vô tình sửa ô “Tổng tiền thanh toán”. C04-P05 hỏi moderator vì số âm. C04-P06 bấm “Xác Nhận Thanh Toán” ngoài phạm vi task.
- **A-01:** 4/6 Success. 5/6 đọc giá trị đang hiển thị 60.000.000 ₫; A01-P03 tự tính 30.000.000 ₫ nên Partial. A01-P01 băn khoăn nhãn “(Delivered)”; A01-P06 nhầm cặp nhãn–giá trị và hỏi moderator.
- **A-02:** 3/6 Success. Sau khi lưu, cả 5 dòng trong bảng đều đổi thành “Tai nghe AirPods Pro 2”; 4/6 chọn Q11 “Thành phần hoặc hành vi không nhất quán”. A02-P05 nhập “6.500.000” vào ô giá → trường bị xóa rỗng → Fail. A02-P04 không thấy nút “Sửa” ở vùng hiển thị đầu tiên và phải hỏi moderator.
- **A-03:** 3/6 Success. A03-P03 nhầm bảng “Xem trước (2 dòng)” là kết quả import nên không bấm “Import 2 sản phẩm” → SC-01 không đạt. A03-P04 bấm “Tải file mẫu” rồi import nhầm file mẫu → Fail. A03-P06 import đúng 2/2 nhưng không xác định được có lỗi hay không vì báo cáo không nêu số lỗi.
- **A-04:** 3/6 Success. A04-P05 hiểu nhầm nút “Hủy” là đóng bảng → đơn #1 thành “Đã hủy”, backend không cho chuyển ngược → Fail. A04-P04 chuyển đúng nhưng phải hỏi moderator vì không có toast. A04-P06 không xác định chắc dòng nào vừa đổi do 3 đơn trùng người đặt/địa chỉ và danh sách đảo thứ tự.

## 6. Phân tích và đánh giá usability issues

### 6.1. Issue log

| Issue ID | Role/Task | Mô tả | Bằng chứng | n/N | Nguồn | P code | N code | Severity | Đề xuất |
|---|---|---|---|---|---:|---|---|---|---|
| ISS-01 | C-01 | Không có empty state khi tìm kiếm 0 kết quả | C01-P03 gõ sai → lưới rỗng, gõ lại; C01-P05 bối rối | 2/6 | BOTH | P5, P3 | N1 | S2 | Thêm empty state, gợi ý từ khóa, nút xóa tìm kiếm |
| ISS-02 | C-01, A-02 | Đơn vị/định dạng tiền không nhất quán (“VND”, “6500000 ₫”) | C01-P06; A02-P03; A02-P05 | 1/6; 2/6 | BOTH | P4, P10 | N2, N4 | S2 | Dùng một formatter `vi-VN` với `₫`; input chấp nhận chuỗi đã định dạng |
| ISS-03 | C-02 | Click đầu tiên vào “Thêm vào giỏ” bị bỏ qua | 6/6 Q11; C02-P01, C02-P05 | 6/6 | BOTH | P5, P8 | N1, N5 | S3 | Bỏ guard `clickCount`; phản hồi ngay; disable khi đang gửi |
| ISS-04 | C-02 | Không có badge/toast khi thêm từ thẻ trang chủ | C02-P04; 6/6 Q11 | 6/6 | BOTH | P5 | N1, N4 | S3 | Badge số lượng + toast; cập nhật ngay sau khi thêm |
| ISS-05 | C-02 | Giỏ không gộp dòng cùng sản phẩm | C02-P02, C02-P06 thấy 2 dòng AirPods | 2/6 | BOTH | P4 | N4 | S3 | Gộp theo product id và tăng quantity |
| ISS-06 | C-03 | Không có nút +/- chỉnh số lượng trong giỏ | 5/6 không đạt qty 3; C03-P04 assistance; QD1 4,5 | 5/6 | BOTH | P2, P7, P8 | N3, N6 | S4 | Thêm +/- và input số lượng có validate; cập nhật thành tiền ngay |
| ISS-07 | C-03 | Xóa sản phẩm không có dialog xác nhận | C03-P03 xóa nhầm → Fail; Q05 1,5 | 1/6 | BOTH | P8 | N5, N3 | S3 | Dialog xác nhận nêu tên sản phẩm; undo snackbar |
| ISS-08 | C-03 | Nhãn “Tổng tạm tính” thay vì “Tổng cộng” | Code review `Cart.jsx` | — | HE | P4, P10 | N2 | S1 | Đổi nhãn theo FR-07 |
| ISS-09 | C-04 | Công thức coupon sai, tổng tiền vô lý | C04-P01 → P06; 3 Partial; QD2 2,8 | 6/6 | BOTH | P10, P5 | N1, N2, N9 | S4 | Sửa công thức; hiển thị breakdown; test regression |
| ISS-10 | C-04 | Ô “Tổng tiền thanh toán” cho phép chỉnh sửa | C04-P04 sửa nhầm | 1/6 | BOTH | P8 | N5 | S3 | Read-only; backend tự tính; validate |
| ISS-11 | C-04 | “Xác Nhận Thanh Toán” không chặn/không xác nhận | C04-P06 tạo đơn ngoài phạm vi → Fail | 1/6 | BOTH | P8 | N5 | S3 | Thêm bước xác nhận đơn; disable nếu coupon lỗi |
| ISS-12 | A-01 | Dashboard nhân đôi doanh thu đơn delivered | 5/6 đọc 60.000.000 ₫; A01-P03 tự tính 30.000.000 ₫ | 6/6 | BOTH | P10, P3 | N1, N2 | S4 | Sửa reduce; hiển thị định nghĩa; unit test |
| ISS-13 | A-01 | Nhãn “(Delivered)” gây hiểu nhầm phạm vi | A01-P01, A01-P06 | 2/6 | BOTH | P2, P10 | N2, N6 | S2 | Đổi nhãn rõ “Doanh thu đơn đã giao”; thêm tooltip |
| ISS-14 | A-02 | Sửa 1 sản phẩm làm đổi tên toàn bộ bảng | 4/6 Q11; Q04 2,7; A02-P03 | 4/6 | BOTH | P4, P10 | N4 | S4 | Chỉ update đúng id; refresh từ API; test |
| ISS-15 | A-02 | Input giá `type=number` không nhận “6.500.000”, xóa rỗng | A02-P05 Fail; Q05/Q09 thấp | 1/6 | BOTH | P8, P2 | N5, N9 | S3 | Dùng input text + parse; validate > 0; thông báo lỗi |
| ISS-16 | A-02 | Bảng rộng, nút “Sửa” ngoài vùng hiển thị đầu tiên | A02-P04 assistance | 1/6 | BOTH | P3, P7 | N7 | S2 | Sticky cột thao tác; responsive; chỉ báo cuộn ngang |
| ISS-17 | A-03 | Preview bị nhầm là kết quả import | A03-P03 không bấm Import; A03-P06; 2/6 Q11 | 2/6 | BOTH | P5, P2 | N1 | S3 | Tách bước preview/result; progress; tổng kết rõ |
| ISS-18 | A-03 | Báo cáo không nêu số dòng lỗi/“0 lỗi” | A03-P06 Partial | 1/6 | BOTH | P10, P5 | N1, N8 | S2 | Luôn hiển thị “thành công X, lỗi Y”; chi tiết lỗi |
| ISS-19 | A-03 | Link “Tải file mẫu” khác file cần import | A03-P04 Fail | 1/6 | BOTH | P2, P8 | N10, N5 | S3 | Đặt tên rõ; cảnh báo khi file không khớp header; tách link |
| ISS-20 | A-03 | Không rollback khi một dòng lỗi | Code review; không kích hoạt trong baseline hợp lệ | — | HE | P8 | N5, N9 | S3 | Transaction all-or-nothing; báo lỗi từng dòng |
| ISS-21 | A-04 | Danh sách đơn đảo thứ tự, 3 đơn trùng người/địa chỉ, 2 đơn pending | A04-P02, A04-P06; Q03 2,8 | 2/6 | BOTH | P3, P6 | N6, N3 | S3 | Sắp xếp/filter; highlight đơn mục tiêu; hiển thị ID rõ |
| ISS-22 | A-04 | Chuyển trạng thái không xác nhận; “Hủy” không hoàn tác | A04-P05 Fail; Q09 2,3 | 1/6 | BOTH | P8, P5 | N5, N3, N1 | S4 | Dialog xác nhận; đổi nhãn “Hủy đơn”; undo/rollback |
| ISS-23 | A-04 | Chỉ phản hồi qua badge, không toast | A04-P04 assistance; Q01 3,2 | 1/6 | BOTH | P5 | N1 | S2 | Toast + highlight dòng sau khi đổi |
| ISS-24 | C-01, A-04 | Render HTML không an toàn (từ khóa tìm kiếm, địa chỉ) | Code review `Home.jsx`, `App.jsx` | — | HE | P10 | N/A | S3 | Escape/không dùng `dangerouslySetInnerHTML`; CSP |

**Phân bố severity:** S4 = 5 issue (ISS-06, ISS-09, ISS-12, ISS-14, ISS-22); S3 = 12 issue; S2 = 6 issue; S1 = 1 issue.

### 6.2. Phân tích finding chi tiết

#### Finding ISS-09 — Công thức coupon sai làm tổng tiền vô lý

- **Nguồn:** BOTH (UT + code review).
- **Hành vi quan sát:** 6/6 người nhập `SAVE10` và nhận phản hồi “Áp dụng thành công! Giảm 10%”, nhưng dòng “Tiết kiệm” là **-270.000.000 ₫** và “Thành tiền” là **300.000.000 ₫**. C04-P03 tính đúng 27.000.000 ₫ nhưng không khớp giao diện; C04-P04 vô tình sửa ô tổng tiền; C04-P05 hỏi moderator vì số âm; C04-P06 bấm thanh toán ngoài phạm vi.
- **Tác động lên mục tiêu task:** Người dùng không thể tin hoặc giải thích tổng tiền sau giảm; 4/6 không đạt Success (3 Partial, 1 Fail).
- **Metric liên quan:** C-04 Success 2/6 (33,3%); QD2 2,8; Q09 2,2; QD1 3,8.
- **UI/UX Principle:** P10 — tổng tiền không minh bạch/đáng tin; P5 — phản hồi mâu thuẫn với kết quả.
- **Nielsen Heuristic:** N1 — trạng thái kết quả không đáng tin; N2 — “giảm 10%” không khớp mô hình thực tế; N9 — không giúp người dùng hiểu và phục hồi.
- **Severity và lý do:** S4 — Critical: hiển thị sai số tiền thanh toán, ảnh hưởng trực tiếp đến quyết định mua và niềm tin.
- **Nguyên nhân giả định:** Công thức `discount_amount = Math.floor(total * (1 - discount_value))` thay vì `total * discount_value / 100`; với `discount_value = 10` và tổng 30.000.000, kết quả âm rất lớn.
- **Đề xuất cải thiện:** Sửa công thức theo FR-09; hiển thị breakdown “Tạm tính / Giảm giá / Tổng thanh toán”; validate coupon ở backend; thêm regression test cho percent và fixed.
- **Cách retest:** Chạy lại C-04 với 6 phiên; kỳ vọng SC-03 đạt (giảm 3.000.000 ₫, tổng 27.000.000 ₫), Success ≥ 5/6, QD2 ≥ 4, Q09 ≥ 4.

#### Finding ISS-12 — Dashboard nhân đôi doanh thu

- **Nguồn:** BOTH (UT + code review).
- **Hành vi quan sát:** 5/6 người đọc giá trị đang hiển thị **60.000.000 ₫** cho một đơn delivered 30.000.000 ₫; A01-P03 tự tính 30.000.000 ₫ nên Partial. A01-P06 nhầm cặp nhãn–giá trị và hỏi moderator.
- **Tác động lên mục tiêu task:** Chỉ số quản trị cốt lõi sai; người dùng đọc đúng giá trị hiển thị vẫn đạt outcome theo tiêu chí, nhưng quyết định dựa trên số liệu sai.
- **Metric liên quan:** A-01 Success 4/6 (66,7%); QD2 3,8; Q01 3,7; QD1 2,0.
- **UI/UX Principle:** P10 — số liệu không minh bạch/đáng tin; P3 — thông tin quan trọng nhưng định nghĩa không rõ.
- **Nielsen Heuristic:** N1 — trạng thái hệ thống hiển thị sai; N2 — không khớp nghiệp vụ “doanh thu = tổng đơn delivered”.
- **Severity và lý do:** S4 — Critical: sai số liệu tài chính, có thể dẫn đến quyết định quản trị sai.
- **Nguyên nhân giả định:** `orders.reduce(... if status === 'delivered' return sum + total_amount * 2)` nhân đôi giá trị.
- **Đề xuất cải thiện:** Bỏ `* 2`; đổi nhãn thành “Doanh thu đơn đã giao”; thêm tooltip định nghĩa; unit test cho 0, 1 và nhiều đơn delivered.
- **Cách retest:** Chạy lại A-01; kỳ vọng hiển thị 30.000.000 ₫; Success ≥ 5/6; QD2 ≥ 4.

#### Finding ISS-14 — Sửa một sản phẩm làm đổi tên toàn bộ bảng

- **Nguồn:** BOTH (UT + code review).
- **Hành vi quan sát:** Sau khi lưu A-02, cả 5 dòng trong bảng đều hiển thị tên “Tai nghe AirPods Pro 2”. 4/6 chọn Q11 “Thành phần hoặc hành vi không nhất quán”; A02-P03 không xác nhận được giá trị đã lưu.
- **Tác động lên mục tiêu task:** Người dùng mất khả năng nhận diện sản phẩm và xác nhận thay đổi; nguy cơ hiểu sai dữ liệu và thao tác nhầm.
- **Metric liên quan:** A-02 Success 3/6 (50,0%); Q04 2,7; QD1 3,2; 4/6 Q11 không nhất quán.
- **UI/UX Principle:** P4 — dữ liệu/hành vi không nhất quán; P10 — mất tin cậy vào bảng sản phẩm.
- **Nielsen Heuristic:** N4 — nhất quán và tiêu chuẩn bị phá vỡ.
- **Severity và lý do:** S4 — Critical: một thao tác sửa có thể làm sai/hỏng hiển thị toàn bộ danh mục, nguy cơ mất dữ liệu hoặc thao tác nhầm.
- **Nguyên nhân giả định:** Hàm `map` gán `name` của form cho mọi phần tử thay vì chỉ phần tử có id tương ứng.
- **Đề xuất cải thiện:** Chỉ cập nhật phần tử có `id` khớp; refresh danh sách từ API sau khi lưu; hiển thị tóm tắt “đã đổi trường nào” và yêu cầu xác nhận nếu thay đổi ảnh hưởng nhiều bản ghi.
- **Cách retest:** Chạy lại A-02; kiểm tra chỉ một dòng đổi; Success ≥ 5/6; Q04 ≥ 4.

#### Finding ISS-06 — Không có điều khiển +/- chỉnh số lượng trong giỏ

- **Nguồn:** BOTH (UT + code review).
- **Hành vi quan sát:** 5/6 người không đưa được AirPods về số lượng 3 bằng điều khiển trong giỏ. C03-P01 phải xóa dòng rồi vào trang chi tiết đặt lại số lượng 3; C03-P04 không tìm thấy điều khiển và hỏi moderator.
- **Tác động lên mục tiêu task:** Task chính “đổi số lượng” gần như không thể hoàn thành theo đường thông thường; C-03 chỉ 1/6 Success.
- **Metric liên quan:** C-03 Success 1/6 (16,7%); Partial 3/6; Fail 2/6; QD1 4,5; Q03 2,5; Q05 1,5.
- **UI/UX Principle:** P2 — thiếu affordance cho thao tác số lượng; P7 — đường thao tác không hiệu quả; P8 — dễ dẫn đến xóa/thêm lại sai.
- **Nielsen Heuristic:** N3 — người dùng thiếu kiểm soát trực tiếp; N6 — phải nhớ và tìm cách khác thay vì nhận biết điều khiển.
- **Severity và lý do:** S4 — Critical: chặn tác vụ quan trọng (đổi số lượng) với 5/6 người.
- **Nguyên nhân giả định:** Giao diện giỏ chưa triển khai nút +/- và input số lượng theo FR-07; số lượng chỉ là text.
- **Đề xuất cải thiện:** Thêm nút +/- và ô nhập số lượng có validate (số nguyên dương); cập nhật thành tiền/tổng ngay; giữ nhãn “Tổng cộng”; thêm undo cho thao tác xóa.
- **Cách retest:** Chạy lại C-03; kỳ vọng Success ≥ 5/6; QD1 ≤ 2,5; Q03 ≥ 4; không cần workaround.

#### Finding ISS-22 — Chuyển trạng thái đơn không xác nhận, hủy không hoàn tác

- **Nguồn:** BOTH (UT + code review).
- **Hành vi quan sát:** A04-P05 hiểu nhầm nút “Hủy” là đóng bảng → đơn #1 thành “Đã hủy”; backend chỉ cho `canceled → delivered`, không thể quay lại `confirmed`. A04-P04 chuyển đúng nhưng phải hỏi moderator vì không có toast. A04-P06 không xác định chắc dòng nào vừa đổi.
- **Tác động lên mục tiêu task:** Một thao tác nhầm gây trạng thái cuối sai và không thể phục hồi; A-04 chỉ 3/6 Success.
- **Metric liên quan:** A-04 Success 3/6 (50,0%); Partial 2/6; Fail 1/6; Q03 2,8; Q09 2,3; QD1 3,2.
- **UI/UX Principle:** P8 — không ngăn lỗi và không hỗ trợ phục hồi; P5 — phản hồi trạng thái yếu.
- **Nielsen Heuristic:** N5 — thiếu xác nhận trước hành động nguy hiểm; N3 — không có quyền hoàn tác; N1 — không có thông báo rõ sau thao tác.
- **Severity và lý do:** S4 — Critical: hành động không thể hoàn tác, có nguy cơ làm sai dữ liệu đơn hàng trong môi trường test.
- **Nguyên nhân giả định:** Nút “Hủy” không có dialog xác nhận và nhãn không phân biệt “hủy đơn” với “đóng bảng”; state machine không hỗ trợ rollback.
- **Đề xuất cải thiện:** Dialog xác nhận nêu ID đơn và trạng thái đích; đổi nhãn “Hủy đơn” và tách khỏi nút đóng; thêm undo/rollback trong thời gian ngắn; toast + highlight dòng sau khi đổi.
- **Cách retest:** Chạy lại A-04; kỳ vọng 0 lần hủy nhầm; Success ≥ 5/6; Q03/Q09 ≥ 4.

#### Finding ISS-03 — Click đầu tiên vào “Thêm vào giỏ” bị bỏ qua

- **Nguồn:** BOTH (UT + code review).
- **Hành vi quan sát:** 5/6 người phải click “Thêm vào giỏ” ít nhất hai lần; C02-P04 chỉ click một lần ở thẻ trang chủ và không thấy phản hồi. 100% chọn Q11 “Không rõ hệ thống đang xử lý hay đã hoàn tất”. C02-P05 click 4 lần → giỏ có 4 sản phẩm thay vì 2.
- **Tác động lên mục tiêu task:** Người dùng không biết lần click đầu có hiệu lực hay không, dẫn đến click lặp và sai số lượng.
- **Metric liên quan:** C-02 Success 2/6 (33,3%); error mean 1,2; Q01 2,3; QD1 3,2.
- **UI/UX Principle:** P5 — thiếu phản hồi sau thao tác; P8 — không ngăn được lỗi click lặp.
- **Nielsen Heuristic:** N1 — không hiển thị trạng thái; N5 — không ngăn lỗi.
- **Severity và lý do:** S3 — High: ảnh hưởng 6/6 người, gây task fail/partial cho 4/6.
- **Nguyên nhân giả định:** Guard `clickCount === 0` bỏ qua lần click đầu thay vì xử lý thêm giỏ.
- **Đề xuất cải thiện:** Bỏ guard; xử lý thêm giỏ ngay từ lần đầu; disable nút trong khi gửi; toast/badge xác nhận.
- **Cách retest:** Chạy lại C-02; kỳ vọng 1 click = 1 dòng đúng số lượng; Success ≥ 5/6; Q01 ≥ 4.

#### Finding ISS-04 — Thiếu phản hồi khi thêm từ thẻ trang chủ

- **Nguồn:** BOTH (UT + code review).
- **Hành vi quan sát:** Không có toast và không có badge số lượng trên header. C02-P04 thêm một lần, không thấy phản hồi, không mở giỏ để kiểm tra; C02-P06 thấy hai dòng AirPods nhưng không hiểu trạng thái.
- **Tác động lên mục tiêu task:** Người dùng không nhận biết sản phẩm đã được thêm; SC-02 fail ở 3/6.
- **Metric liên quan:** C-02 Success 2/6; Q01 2,3; QD2 2,7; 6/6 Q11 trạng thái.
- **UI/UX Principle:** P5 — feedback không đầy đủ.
- **Nielsen Heuristic:** N1 — không hiển thị trạng thái; N4 — hành vi không nhất quán giữa trang chủ và trang chi tiết.
- **Severity và lý do:** S3 — High: ảnh hưởng toàn bộ 6/6, gây mất niềm tin vào thao tác.
- **Nguyên nhân giả định:** Giỏ là React state cục bộ, không có cơ chế thông báo toàn cục; header không hiển thị badge.
- **Đề xuất cải thiện:** Badge số lượng trên header; toast “Đã thêm vào giỏ”; cập nhật ngay sau thao tác; cho phép mở giỏ từ toast.
- **Cách retest:** Chạy lại C-02; kỳ vọng SC-02 ≥ 5/6; Q01 ≥ 4; không còn Q11 “không rõ trạng thái” ở đa số.

#### Finding ISS-07 — Xóa sản phẩm không có dialog xác nhận

- **Nguồn:** BOTH (UT + code review).
- **Hành vi quan sát:** C03-P03 xóa nhầm dòng AirPods thay vì Keychron; không có dialog xác nhận và không có undo; Q05 trung bình 1,5; 4/6 chọn Q11 “Khó quay lại, hủy hoặc sửa thao tác”.
- **Tác động lên mục tiêu task:** Một click nhầm làm sai trạng thái giỏ, không thể phục hồi; góp phần C-03 Fail 2/6.
- **Metric liên quan:** C-03 Fail 2/6; Q05 1,5; Q03 2,5.
- **UI/UX Principle:** P8 — không ngăn lỗi/không hỗ trợ phục hồi.
- **Nielsen Heuristic:** N5 — thiếu xác nhận; N3 — không có undo.
- **Severity và lý do:** S3 — High: gây xóa nhầm và task fail; ảnh hưởng đến toàn bộ người dùng vì không có cơ chế bảo vệ.
- **Nguyên nhân giả định:** Hàm xóa thực hiện ngay, không có dialog/undo.
- **Đề xuất cải thiện:** Dialog xác nhận nêu tên sản phẩm; undo snackbar sau khi xóa; phân biệt rõ nút xóa nguy hiểm bằng màu đỏ.
- **Cách retest:** Chạy lại C-03; kỳ vọng 0 lần xóa nhầm; Q05 ≥ 4.

#### Finding ISS-17 — Preview bị nhầm là kết quả import

- **Nguồn:** BOTH (UT + code review).
- **Hành vi quan sát:** A03-P03 thấy bảng “Xem trước (2 dòng)” và kết luận đã import xong, không bấm “Import 2 sản phẩm” → SC-01 fail. A03-P06 import đúng nhưng không xác định được có lỗi hay không vì báo cáo không nêu số lỗi.
- **Tác động lên mục tiêu task:** Người dùng tưởng đã hoàn tất khi dữ liệu chưa được import; A-03 chỉ 3/6 Success.
- **Metric liên quan:** A-03 Success 3/6 (50,0%); QD1 3,5; Q01 3,5; 2/6 Q11 “không rõ trạng thái”.
- **UI/UX Principle:** P5 — trạng thái trước/sau không rõ; P2 — nhãn “Xem trước” chưa đủ phân biệt với kết quả.
- **Nielsen Heuristic:** N1 — không phân biệt trạng thái preview và completed.
- **Severity và lý do:** S3 — High: khiến người dùng bỏ qua bước quan trọng và task fail.
- **Nguyên nhân giả định:** Preview và kết quả dùng cùng dạng bảng, không có bước/tiêu đề trạng thái rõ; nút Import bị disable cho tới khi có preview nên dễ bị hiểu là đã xong.
- **Đề xuất cải thiện:** Tách hai bước với tiêu đề “Bước 1: Xem trước” và “Bước 2: Kết quả import”; progress indicator; tổng kết “Thành công X, lỗi Y”; nút Import nổi bật.
- **Cách retest:** Chạy lại A-03; kỳ vọng Success ≥ 5/6; Q01 ≥ 4; không còn nhầm preview với kết quả.

#### Finding ISS-21 — Danh sách đơn khó phân biệt

- **Nguồn:** BOTH (UT + code review).
- **Hành vi quan sát:** Danh sách đảo thứ tự (`id DESC`: #3, #2, #1); 3 đơn cùng người đặt/địa chỉ; 2 đơn cùng `pending`. A04-P02 bấm nhầm ô ID của #2; A04-P06 không xác định chắc dòng nào vừa đổi.
- **Tác động lên mục tiêu task:** Người dùng khó tìm đúng đơn mục tiêu và khó xác nhận trạng thái sau thao tác.
- **Metric liên quan:** A-04 Success 3/6; Partial 2/6; Q03 2,8.
- **UI/UX Principle:** P3 — thông tin phân biệt đơn không nổi bật; P6 — tải nhận thức cao.
- **Nielsen Heuristic:** N6 — phải ghi nhớ ID/giá trị để phân biệt; N3 — khó kiểm soát thao tác trên đúng đơn.
- **Severity và lý do:** S3 — High: gây chọn nhầm và task fail/partial.
- **Nguyên nhân giả định:** Không có sắp xếp/filter, không highlight đơn mục tiêu, các cột định danh không đủ khác biệt.
- **Đề xuất cải thiện:** Cho phép sắp xếp/filter; hiển thị ID đơn nổi bật; highlight đơn sau thao tác; hiển thị chi tiết đơn trước khi đổi trạng thái.
- **Cách retest:** Chạy lại A-04; kỳ vọng 0 thao tác nhầm dòng; Success ≥ 5/6.

#### Finding ISS-02 — Định dạng tiền tệ không nhất quán

- **Nguồn:** BOTH (UT + code review).
- **Hành vi quan sát:** Trang chủ hiển thị “6,000,000 VND”; Admin hiển thị “6500000 ₫”. C01-P06 bối rối vì đơn vị “VND” so với “₫”; A02-P03 không xác nhận được giá đã lưu; A02-P05 nhập “6.500.000” vào ô giá thì trường bị xóa rỗng.
- **Tác động lên mục tiêu task:** Tăng thời gian đọc, gây nhầm lẫn đơn vị và lỗi nhập liệu ở Admin.
- **Metric liên quan:** C-01 Q02 4,5 nhưng có 1 người nhầm; A-02 QD1 3,2; A02-P05 Fail.
- **UI/UX Principle:** P4 — không nhất quán định dạng; P10 — khó tin vào con số.
- **Nielsen Heuristic:** N2 — đơn vị tiền chưa khớp thói quen Việt Nam; N4 — định dạng khác nhau giữa các trang.
- **Severity và lý do:** S2 — Moderate: gây do dự và lỗi nhập liệu có thể tự phục hồi, nhưng không phải nguyên nhân chính của phần lớn fail.
- **Nguyên nhân giả định:** Mỗi trang tự format giá theo cách khác nhau; input `type=number` không chấp nhận dấu phân cách nghìn.
- **Đề xuất cải thiện:** Dùng một formatter chung `Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })`; input cho phép chuỗi đã định dạng và parse an toàn; validate số dương.
- **Cách retest:** Chạy lại C-01 và A-02; kỳ vọng 0 nhầm đơn vị; A-02 Success ≥ 5/6.

#### Finding ISS-01 — Không có empty state khi tìm kiếm không có kết quả

- **Nguồn:** BOTH (UT + code review).
- **Hành vi quan sát:** C01-P03 gõ “Airpods pro 2” → 0 kết quả → trang chỉ còn lưới rỗng, không thông báo; người dùng phải gõ lại “AirPods” (63s, 1 lỗi). C01-P05 bối rối vì giao diện nhiều thông tin.
- **Tác động lên mục tiêu task:** Người dùng không biết từ khóa sai hay hệ thống lỗi; tăng thời gian và số lần thử.
- **Metric liên quan:** C-01 Success 5/6; Partial 1/6; QD1 1,5; error mean 0,5.
- **UI/UX Principle:** P5 — thiếu phản hồi khi không có kết quả; P3 — trạng thái trống không được diễn đạt.
- **Nielsen Heuristic:** N1 — không hiển thị trạng thái “không có kết quả”.
- **Severity và lý do:** S2 — Moderate: gây do dự và thêm bước, người dùng tự phục hồi được.
- **Nguyên nhân giả định:** Trang chỉ render lưới sản phẩm, không có nhánh xử lý mảng rỗng.
- **Đề xuất cải thiện:** Empty state có icon, thông báo “Không tìm thấy sản phẩm phù hợp”, gợi ý từ khóa và nút xóa tìm kiếm; hiển thị số kết quả.
- **Cách retest:** Chạy lại C-01 với kịch bản gõ sai; đo thời gian phục hồi và số lần thử; kỳ vọng không còn trang trống không thông báo.

## 7. Đánh giá UXReality

### 7.1. Khả năng đã xác minh

| Khả năng | Cách xác minh | Trạng thái |
|---|---|---|
| Tạo study và cấu hình URL/task | 8 study được tạo và chạy với URL Quick Tunnel | Đã dùng thành công |
| Survey/questions sau task | Thu Likert 1–5, Multiple Choice, Single Choice; dữ liệu tổng hợp trong 8 Task Data Result | Đã dùng thành công |
| Click/scroll tracking | Đối chiếu click lặp, cuộn, đường thao tác trong các task C-02, C-03, A-02, A-04 | Đã dùng thành công |
| Heatmap/visual attention | Bổ trợ xem vùng chú ý ở trang sản phẩm, giỏ hàng, dashboard | Đã dùng ở mức bổ trợ |
| Eye-tracking/facial coding | Thu dữ liệu hướng nhìn/biểu cảm ở mức bổ trợ | Đã dùng ở mức bổ trợ |
| Dashboard/export dữ liệu | Không xác minh riêng; số liệu được tổng hợp thủ công | Chưa xác minh |
| Session recording/replay | Không sử dụng trong đợt này | Không dùng |
| AI-generated insight | Không sử dụng | Không xác minh |
| Mobile study | Không sử dụng | Not tested |

Các kết luận trong báo cáo dựa chủ yếu trên task outcome, câu trả lời survey, click/scroll và quan sát phiên. Dữ liệu heatmap/eye-tracking/facial coding chỉ mang tính bổ trợ; không dùng một tín hiệu đơn lẻ để suy ra cảm xúc hoặc nguyên nhân.

### 7.2. Mức độ tự động hóa

| Công đoạn | UXReality làm | Nhóm làm thủ công | Trạng thái |
|---|---|---|---|
| Cấu hình study | Tạo project, nhập URL, lời task, bộ câu hỏi | Viết task trung lập, chuẩn bị fixture, reset database, giữ tunnel sống | Bán tự động |
| Thu dữ liệu phiên | Thu survey, click/scroll, heatmap, eye/facial | Setup phase giữ React cart state/token; quan sát phiên; kiểm tra chất lượng dữ liệu | Tự động một phần |
| Metrics | Cung cấp dữ liệu survey và click/scroll; không tự tính task outcome | Tính task outcome, success rate, completion time, error count, assistance | Bán tự động |
| Phân loại issue theo P/N | Không tự động | Nhóm mã hóa theo P1–P10 và N1–N10 | Thủ công |
| Severity/recommendation | Không tự động | Nhóm đánh giá severity và đề xuất cải thiện | Thủ công |
| Báo cáo | Không tự động tạo báo cáo phân tích | Tổng hợp, tính metrics, viết report, review chéo | Thủ công |

### 7.3. Điểm mạnh, hạn chế và mức phù hợp

**Điểm mạnh:**

- Chuẩn hóa survey sau task, giúp tổng hợp Likert/Multiple Choice/Single Choice giữa các task.
- Thu được click/scroll, heatmap và dữ liệu hướng nhìn/biểu cảm để bổ trợ quan sát hành vi.
- Hỗ trợ nghiên cứu từ xa qua URL, phù hợp với môi trường Quick Tunnel.
- Dữ liệu survey và hành vi được thu trong cùng một study, thuận tiện cho việc đối chiếu sau phiên.

**Hạn chế:**

- Không tự phân loại issue theo UI/UX Principles/Nielsen, không tự gán severity và không tự đề xuất cải thiện; các bước này vẫn do nhóm thực hiện.
- Không tự xác định task outcome theo tiêu chí Success/Partial/Fail/Invalid; reviewer phải đối chiếu dữ liệu phiên và trạng thái cuối.
- Giới hạn một task/study và thời lượng ngắn (theo tài liệu nhà cung cấp) khiến phải chia nhỏ luồng và chuẩn bị trạng thái đầu vào.
- Phụ thuộc URL Quick Tunnel tạm; nếu tunnel chết/đổi URL giữa phiên, điều kiện môi trường không còn đồng nhất.
- Với Customer Web, giỏ hàng là React state nên cần setup phase trên đúng browser/session; nếu không giữ được state, C-03/C-04 không đủ điều kiện thu dữ liệu chính thức.
- Với Admin Web, task làm thay đổi dữ liệu nên phải reset sandbox và serialize các phiên.
- Dữ liệu eye-tracking/facial coding phụ thuộc thiết bị, ánh sáng, hiệu chuẩn; không nên đồng nhất với nghiên cứu eye-tracking chuyên dụng.
- Không sử dụng session recording/replay trong đợt này nên thiếu bản ghi để review lại toàn bộ phiên.

**Mức phù hợp:** UXReality phù hợp cho giai đoạn **thu thập bằng chứng usability khám phá** (survey, click/scroll, heatmap, dữ liệu thị giác bổ trợ) và hỗ trợ tổng hợp phản hồi. Công cụ **không phù hợp** để thay thế phân tích chuyên gia (mã hóa P/N, severity, recommendation), kiểm thử chức năng/API/bảo mật hoặc các kết luận thống kê đại diện. Với Customer và Admin, mức phù hợp tương đương ở khâu thu survey và hành vi; Admin cần thêm quy trình reset dữ liệu và kiểm soát fixture chặt hơn.

## 8. Hạn chế nghiên cứu

- **Cỡ mẫu và cách tuyển:** 12 người (6 Customer + 6 Admin), tuyển thuận tiện; 48 task session. Mẫu phù hợp mục tiêu khám phá/đào tạo, không đủ để suy rộng ra toàn bộ khách hàng hoặc admin EShop.
- **Số task/phiên hợp lệ:** 8 task cốt lõi; 6 phiên/task; 48/48 phiên hợp lệ. Hai task mở rộng C-05/A-05 không triển khai.
- **Tính năng UXReality chưa dùng/chưa xác minh:** Không dùng session recording/replay; eye-tracking/facial coding chỉ dùng bổ trợ.
- **Metrics đo thủ công hoặc không có:** Task outcome, success rate, completion time, error count, assistance và P/N mapping do nhóm tính/mã hóa; không thu SUS; không audit accessibility đầy đủ (P9 chỉ kiểm tra sơ bộ qua quan sát).
- **Khác biệt Customer/Admin:** Hai nhóm task khác mục tiêu và độ phức tạp; không so sánh trực tiếp thời gian/success như cùng một thước đo.
- **Hạn chế của việc ánh xạ P/N:** Việc gắn mã P/N mang tính diễn giải; một issue có thể liên quan nhiều nguyên tắc/heuristic. Nhóm đã review chéo nhưng không đo inter-rater reliability.
- **Hạn chế của SUT:** Nhiều phát hiện phản ánh defect chức năng nghiêm trọng (công thức coupon, doanh thu, đổi tên hàng loạt, thiếu điều khiển số lượng). Đây là bằng chứng usability nhưng không thay thế kiểm thử chức năng/bảo mật đầy đủ.
- **Môi trường:** URL Quick Tunnel tạm; dữ liệu Admin thay đổi giữa các phiên và phải reset; giỏ Customer là React state nên phụ thuộc setup phase.

## 9. Kết luận và đề xuất

### 9.1. Trả lời câu hỏi nghiên cứu

- **RQ1 — Customer:** Người dùng hoàn thành C-01 tốt (83,3%) nhưng gặp khó khăn rõ rệt ở C-02 (33,3%), C-03 (16,7%) và C-04 (33,3%). Ma sát chính: thiếu phản hồi khi thêm giỏ, click đầu bị bỏ qua, không có điều khiển số lượng, xóa không xác nhận, công thức coupon sai và tổng tiền không đáng tin.
- **RQ2 — Admin:** Người dùng hoàn thành A-01 tốt hơn (66,7%); A-02, A-03, A-04 đều 50,0%. Ma sát chính: nhãn dashboard gây hiểu nhầm và doanh thu sai, sửa một sản phẩm làm đổi tên toàn bộ, preview import bị nhầm là kết quả, danh sách đơn khó phân biệt và hủy đơn không thể hoàn tác.
- **RQ3 — Design:** Các khó khăn tập trung vào **P5/N1** (phản hồi và trạng thái), **P8/N5/N3** (ngăn ngừa lỗi, quyền kiểm soát và phục hồi), **P4/N4** (nhất quán), **P10/N2** (tin cậy/minh bạch) và **P2/N6** (affordance/nhận diện). Q01, Q05, Q09, Q03 và QD2 thấp ở Customer phù hợp với các mã này.
- **RQ4 — Tool:** UXReality cung cấp được survey chuẩn hóa, click/scroll, heatmap và dữ liệu thị giác bổ trợ; không tự động hóa outcome, phân loại P/N, severity và recommendation. Các bước này vẫn phải làm thủ công, có review chéo.

### 9.2. Đề xuất ưu tiên

| Ưu tiên | Issue ID | Hành động | Metric/tiêu chí retest |
|---|---|---|---|
| P0 | ISS-09 | Sửa công thức coupon theo FR-09; hiển thị breakdown; regression test | C-04 Success ≥ 5/6; SC-03 đạt; QD2 ≥ 4 |
| P0 | ISS-12 | Bỏ nhân đôi doanh thu; làm rõ định nghĩa “Delivered” | A-01 hiển thị đúng 30.000.000 ₫; Success ≥ 5/6 |
| P0 | ISS-14 | Chỉ cập nhật đúng sản phẩm được sửa; refresh từ API | A-02 chỉ 1 dòng đổi; Success ≥ 5/6; Q04 ≥ 4 |
| P0 | ISS-24 | Loại bỏ `dangerouslySetInnerHTML`; escape dữ liệu | Không còn XSS ở search/address; security review |
| P1 | ISS-03, ISS-04 | Bỏ guard click đầu; thêm badge + toast | C-02 Success ≥ 5/6; Q01 ≥ 4 |
| P1 | ISS-06, ISS-07 | Thêm +/- và input số lượng; dialog xác nhận xóa + undo | C-03 Success ≥ 5/6; QD1 ≤ 2,5; Q05 ≥ 4 |
| P1 | ISS-22 | Dialog xác nhận chuyển trạng thái; đổi nhãn “Hủy đơn”; undo | A-04 0 hủy nhầm; Success ≥ 5/6; Q03/Q09 ≥ 4 |
| P1 | ISS-10, ISS-11 | Read-only tổng tiền; xác nhận trước thanh toán; validate backend | C-04 không sửa được tổng; 0 đơn ngoài phạm vi |
| P2 | ISS-17, ISS-19 | Tách preview/result; làm rõ file mẫu; cảnh báo file không khớp | A-03 Success ≥ 5/6; Q01 ≥ 4 |
| P2 | ISS-21 | Sắp xếp/filter; highlight đơn; hiển thị ID rõ | A-04 0 thao tác nhầm dòng |
| P2 | ISS-01, ISS-02 | Empty state; formatter tiền tệ thống nhất | C-01 không còn trang trống; 0 nhầm đơn vị |
| P2 | ISS-15 | Input giá chấp nhận chuỗi định dạng; validate > 0 | A-02 0 lỗi nhập giá |
| P2 | ISS-05, ISS-18, ISS-20 | Gộp dòng giỏ; báo cáo đủ số lỗi; rollback import | C-02 không còn dòng trùng; A-03 báo cáo rõ; CSV lỗi rollback |
| P3 | ISS-08, ISS-13, ISS-16, ISS-23 | Cải thiện nhãn, bố cục bảng và phản hồi sau thao tác | Theo dõi ở vòng retest |

### 9.4. Việc cần nghiên cứu/test lại

- Retest 8 task sau khi sửa các issue P0/P1, giữ nguyên bộ câu hỏi và tiêu chí để so sánh.
- Bổ sung session recording/replay cho một vòng nhỏ để đối chiếu think-aloud và hành vi click/scroll.
- Thêm SUS hoặc bộ câu hỏi chuẩn hóa để có thước đo tổng quan; hiện tại chỉ có Likert theo từng task.
- Kiểm tra accessibility sơ bộ (keyboard/focus, nhãn, contrast, responsive) cho các màn hình chính.
- Nếu mở rộng, chạy C-05 và A-05 để bao phủ lịch sử đơn hàng và quản lý coupon.
- Với Admin, bổ sung kịch bản CSV lỗi để kiểm tra rollback và thông báo lỗi từng dòng.

## 11. Tài liệu tham khảo

1. UXReality FAQ: <https://uxreality.com/faq>.
2. UXReality: <https://uxreality.com/>.
3. Microsoft Learn, *Key UI/UX design principles*: <https://learn.microsoft.com/en-us/dynamics365/guidance/develop/ui-ux-design-principles>.
4. Nielsen Norman Group, *10 Usability Heuristics for User Interface Design*: <https://www.nngroup.com/articles/ten-usability-heuristics/>.
5. EShop System Requirements Specification, `README.md`, version 2.0.
6. `Tool_Profile_UXReality.md` — hồ sơ công cụ và phạm vi đánh giá.
7. `Test_Plan_UXReality.md` — kế hoạch nghiên cứu, metrics và quy trình.
8. `Task_Specification_TEMPLATE.md` và 8 task specification C-01 → C-04, A-01 → A-04.
9. 8 file `Task_Data_Result_*.md` — dữ liệu kết quả từng task.
10. Demo video: <https://youtu.be/oELfSMJ5R5U>.
