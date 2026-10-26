# Task Specification — UXReality / EShop

> **Phạm vi:** 8 task cốt lõi cho Customer Web và Admin Web<br>
> **Công cụ:** UXReality<br>
> **Nguồn:** `../Task_Specification_TEMPLATE.md`<br>
> **Trạng thái:** Đặc tả trước pilot; chưa có Study ID, kết quả phiên hoặc kết luận kiểm thử.

## Danh mục task

| Task ID | File | Vai trò | FR | Mục tiêu | Task priority |
|---|---|---|---|---|---|
| C-01 | [Tìm sản phẩm và xác định giá](Task_Specification_C-01.md) | Customer | FR-05 | Tìm `Tai nghe AirPods Pro 2` và báo giá đang hiển thị | P1 |
| C-02 | [Thêm sản phẩm vào giỏ và nhận biết phản hồi](Task_Specification_C-02.md) | Customer | FR-06, FR-24 | Thêm 2 đơn vị `Tai nghe AirPods Pro 2` và nhận biết kết quả | P1 |
| C-03 | [Cập nhật số lượng và xóa sản phẩm trong giỏ](Task_Specification_C-03.md) | Customer | FR-07, FR-23, FR-24 | Đổi số lượng AirPods thành 3 và xóa Keychron Q1 | P1 |
| C-04 | [Áp dụng coupon và hiểu tổng tiền](Task_Specification_C-04.md) | Customer | FR-08, FR-09 | Áp dụng `SAVE10` và xác định tổng sau giảm trước khi đặt hàng | P1 |
| A-01 | [Tìm thông tin trên Dashboard](Task_Specification_A-01.md) | Admin | FR-13 | Tìm tổng doanh thu và tổng số đơn | P1 |
| A-02 | [Cập nhật giá sản phẩm](Task_Specification_A-02.md) | Admin | FR-15 | Đổi giá AirPods Pro 2 thành 6.500.000 ₫ và nhận biết đã lưu | P1 |
| A-03 | [Import sản phẩm từ CSV](Task_Specification_A-03.md) | Admin | FR-16 | Import `qa_valid.csv` và diễn giải báo cáo | P1 |
| A-04 | [Chuyển trạng thái đơn hàng](Task_Specification_A-04.md) | Admin | FR-10, FR-18 | Chuyển đơn `#1` từ Chờ xác nhận sang Đã xác nhận | P1 |

## Quy tắc dùng bộ task

1. **Một task trên mỗi study/project.** FAQ công khai của UXReality hiện mô tả một task/project và thời lượng 1–3 phút; xác minh lại trong tài khoản thực tế ở pilot.
2. **Không gộp task.** Mỗi file là một study riêng nhằm giữ mục tiêu ngắn và tránh nhầm lẫn dữ liệu giữa Customer/Admin.
3. **Reset trước mỗi phiên.** Dữ liệu thay đổi phải được khôi phục về cùng trạng thái ban đầu; Admin task chỉ dùng dữ liệu sandbox.
4. **Không chạy phiên ghi dữ liệu đồng thời trên cùng database.** A-02/A-03 sửa sản phẩm và A-04 sửa đơn; ưu tiên một instance/database riêng cho từng phiên, nếu không thì phải serialize các phiên Admin.
5. **Phân biệt outcome và tuân thủ FR.** Outcome đo khả năng người dùng hoàn thành tương tác và hiểu phản hồi. Sai lệch nghiệp vụ/UI của SUT được ghi ở tiêu chí Optional hoặc issue log, không mặc định quy cho người tham gia.
6. **Không giả định UXReality tự chấm điểm.** Reviewer chịu trách nhiệm outcome, metrics, mapping P/N và severity.
7. **Bảo mật.** Không đưa credential/token vào prompt, URL, screenshot, recording, Git hoặc báo cáo; dùng participant ID ẩn danh.

> **Lưu ý tài khoản Admin:** `eshop-sut/setup_guide.md` và seed trong `backend/database.js` không khớp về thông tin đăng nhập Admin. Phải xác minh tài khoản bằng cách kiểm soát trước pilot và chỉ cấp credential qua kênh riêng; không sao chép giá trị mâu thuẫn vào task specification, URL hay repository.

## Chuẩn bị dữ liệu seed từ mã nguồn

Nguồn chính: `eshop-sut/backend/database.js`.

| Loại | Giá trị seed |
|---|---|
| Sản phẩm | `iPhone 15 Pro Max` — 30.000.000 ₫; `Samsung Galaxy S24 Ultra` — 28.000.000 ₫; `MacBook Pro M3` — 45.000.000 ₫; `Tai nghe AirPods Pro 2` — 6.000.000 ₫; `Bàn phím cơ Keychron Q1` — 4.000.000 ₫ |
| Danh mục | ID 1 `Điện thoại`; ID 2 `Laptop`; ID 3 `Phụ kiện` |
| Coupon | `SAVE10` — 10%, tối thiểu 300.000 ₫; `BIGBUY` — 50.000 ₫, tối thiểu 500.000 ₫; `VIP100` — 100.000 ₫, tối thiểu 300.000 ₫; `EXPIRED` — hết hạn năm 2020 |
| Giao dịch | Seed không tạo `orders` hoặc `coupon_usage`; các task cần giao dịch phải nạp fixture sau khi backend đã chạy |

### Lưu ý reset quan trọng

`backend/server.js` import `backend/database.js`, và `database.js` chạy `initDatabase()` khi module được nạp. Vì vậy **khởi động lại backend cũng xóa và tạo lại toàn bộ database**. Thứ tự chuẩn bị an toàn:

1. Dừng backend.
2. Chạy `node database.js` trong `backend` và chờ seed hoàn tất.
3. Khởi động `node server.js` và chờ API sẵn sàng.
4. Nạp fixture cần thiết **sau** bước 3.
5. Mở/hard reload frontend, xóa `localStorage.token` hoặc `localStorage.adminToken` khi cần, rồi xác nhận điều kiện ban đầu.

> **Lưu ý môi trường kiểm thử:** Môi trường từ xa dùng **Cloudflare Quick Tunnel** (`cloudflared tunnel --url ...`) để người tham gia truy cập. Quick Tunnel sinh URL tạm và URL **đổi mỗi lần khởi động lại tunnel**; phải bảo đảm tunnel còn sống suốt phiên đo và ghi URL/commit/build/cấu hình vào **log phiên và Analysis Package**, **không** đưa vào từng task specification. Trước pilot phải xác minh đường dẫn này truy cập được từ thiết bị participant và dữ liệu seed/fixture nạp đúng; nếu chưa có môi trường hợp lệ thì phiên từ xa không đủ điều kiện kỹ thuật và xử lý theo quy tắc `Invalid` đã định nghĩa. Không coi `localhost` của máy phát triển là môi trường của participant từ xa.

## Câu hỏi sau task

Mỗi task specification có mục **Câu hỏi sau task** với bộ câu hỏi bổ sung cho cảm nhận người dùng, được thiết kế để gộp được kết quả với `../UXReality_UX_Metrics_Heuristics_Template.md`:

- `QD1` — mức độ khó (Likert 1–5), xuất hiện ở mọi task; khớp metric *Perceived difficulty*.
- `QD2` — mức tự tin về kết quả cuối của task (Likert 1–5), dùng để xác minh tiêu chí `SC-02` mà không cần câu hỏi mở.
- `Q01`–`Q10` — Likert 1–5 giữ nguyên cách diễn đạt như Metrics Template; mỗi task chỉ chọn các câu có mã nguyên tắc (P) **hoặc** heuristic (N) thuộc bộ P/N của task, tối đa 4–5 câu.
- `Q11` (multi-choice) và `Q12` (single-choice) — danh sách lựa chọn giữ nguyên ở mọi task để gộp dữ liệu.

Bộ câu hỏi sau task **không dùng câu hỏi mở** để dễ tổng hợp; chi tiết định tính được đối chiếu từ think-aloud trong recording ở bước phân tích. Quy tắc chọn và bảng ánh xạ câu hỏi ↔ P/N nằm trong `../Task_Specification_TEMPLATE.md`. Giữ nguyên thang đo và cách diễn đạt trong cùng một đợt khảo sát.

## Fixture đi kèm

| Fixture | Dùng cho | Cách sử dụng |
|---|---|---|
| [`fixtures/qa_valid.csv`](fixtures/qa_valid.csv) | A-03 | File thật gồm header và hai dòng hợp lệ; cung cấp cho participant qua attachment/download đã duyệt trước khi bắt đầu phép đo |
| [`fixtures/load_order_fixtures.js`](fixtures/load_order_fixtures.js) | A-01, A-04 | Nạp deterministic vào SQLite của sandbox; không import SUT và không reset database |

Từ thư mục `task-specification`, dùng các lệnh sau sau khi backend đã sẵn sàng:

```powershell
# A-01: hai đơn, trong đó #1 delivered và #2 pending
node fixtures/load_order_fixtures.js --db ../../../eshop-sut/backend/database.sqlite --scenario dashboard --confirm-sandbox

# A-04: ba đơn; #1 và #2 pending, #3 confirmed
node fixtures/load_order_fixtures.js --db ../../../eshop-sut/backend/database.sqlite --scenario order-status --confirm-sandbox
```

Khi dùng database của staging, thay đường dẫn sau `--db` bằng đường dẫn chính xác của instance đó. Chỉ chạy script trên sandbox đã cô lập; cờ `--confirm-sandbox` không thay thế việc cô lập instance.

### Tài khoản sandbox

Baseline hiện tại chỉ có tài khoản seed do `database.js` tạo lại sau mỗi reset. Vì vậy các task dùng tài khoản Customer/Admin seed **trong sandbox cô lập** và ghi đây là một deviation so với yêu cầu tài khoản riêng trong Test Plan. Nếu chính sách nghiên cứu yêu cầu tài khoản riêng, nhóm phải provision tài khoản sau mỗi reset và ghi rõ cách làm trước pilot. Không ghi credential vào tài liệu này.

## Giỏ hàng phía client và setup phase

`frontend-web/src/context/CartContext.jsx` lưu giỏ trong React state, không có persistent cart table và không đọc `localStorage`. Vì vậy:

- C-03/C-04 cần một **setup phase trước phép đo** trên đúng browser/session của participant; setup không tính vào completion time và không phải lời task.
- Không thể chuẩn bị riêng giỏ C-03/C-04 chỉ bằng seed database.
- FAQ UXReality xác nhận có moderated và unmoderated study, nhưng tài liệu công khai không mô tả cơ chế moderator điều khiển trực tiếp browser của participant. Không được giả định tính năng này.
- Trước pilot, thử phương án hai tab trên cùng Chrome: tab ứng dụng được chuẩn bị và giữ nguyên; tab UXReality bắt đầu project; khi task xuất hiện, participant quay lại tab ứng dụng. Phải xác minh rằng việc bắt đầu project không reload ứng dụng làm mất React state.
- Nếu không thể bắt đầu phép đo trên tab đã chuẩn bị mà vẫn giữ đúng cart, C-03/C-04 là **No-go** cho dữ liệu chính thức cho tới khi staging có cơ chế fixture deterministic; không hạ phiên thành `Invalid` sau khi đã thấy kết quả.

### Setup tối thiểu theo build hiện tại

Đây là thao tác vận hành cho moderator/setup script, **không đưa vào lời task**:

- **C-03:** mở chi tiết AirPods, đặt số lượng 2 và nhấn thêm giỏ hai lần vì build hiện bỏ qua lần nhấn đầu; thêm Keychron từ thẻ danh sách một lần để tạo dòng số lượng 1; mở giỏ và xác nhận hai dòng cùng tổng 16.000.000 ₫.
- **C-04:** đăng nhập bằng tài khoản Customer seed qua kênh an toàn; thêm iPhone một lần từ thẻ danh sách; mở checkout và xác nhận tổng 30.000.000 ₫.

Nếu build thay đổi, setup phải được kiểm tra lại và ghi vào log pilot; không âm thầm thay fixture sau khi thấy kết quả.

## Thứ tự chạy đề xuất

1. Pilot C-01 và A-01 để kiểm tra môi trường kiểm thử, participant join, recording, thời lượng và cách chuẩn bị fixture.
2. Chạy một pilot C-03 và một pilot C-04 để xác minh setup phase giữ được React cart state. Nếu không, dừng hai task này và ghi No-go.
3. Chạy các task Customer còn lại với cùng một mẫu setup; reset sau từng phiên.
4. Chạy các task Admin còn lại; đặc biệt kiểm tra fixture đơn hàng và cách phân phối CSV trước khi mở phiên.
5. Sau pilot, cập nhật phiên bản task và ghi lý do thay đổi trong pilot log / Analysis Package; không sửa câu hỏi sau task, tiêu chí hoặc lời task sau khi đã thấy kết quả chính thức.
6. Chỉ sau khi mọi go/no-go đạt mới thu thập dữ liệu chính thức.

## Task mở rộng

`C-05` (FR-11, lịch sử đơn) và `A-05` (FR-17, quản lý coupon) là task mở rộng theo Test Plan. Chưa tạo file cho hai task này ở phiên bản hiện tại; chỉ triển khai sau khi pilot chứng minh thời lượng, nguồn participant và giới hạn study cho phép.
