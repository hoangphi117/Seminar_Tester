# Test Plan — UXTweak cho EShop Customer Web, Admin Web và Mobile App

> **Loại tài liệu:** Kế hoạch nghiên cứu Usability Testing.
> **Trạng thái:** Kế hoạch đề xuất; chưa chứa kết quả thực nghiệm.
> **Phiên bản:** 1.0 — bao phủ Customer Web, Admin Web và Mobile App.
> **Framework phân tích:** UI/UX Design Principles + Nielsen's 10 Usability Heuristics.

## 1. Mục đích tài liệu

Tài liệu xác định mục tiêu, phạm vi, đối tượng, môi trường, nhiệm vụ, chỉ số, quy trình và cách phân tích dự kiến khi dùng UXTweak nghiên cứu usability của ba giao diện EShop. Đây là kế hoạch để triển khai có kiểm soát; các thiết lập và tính năng của UXTweak phải được xác minh bằng pilot.

## 2. Bối cảnh EShop

Hệ thống EShop gồm Frontend Web (Customer), Web Admin, Backend API và Mobile App (React Native + Expo). Bài kiểm thử này tập trung vào **ba giao diện**:

- **Customer Web** (`http://localhost:5173`): tìm sản phẩm, xem chi tiết, giỏ hàng, checkout/coupon.
- **Admin Web** (`http://localhost:5174`): dashboard, quản lý sản phẩm, import CSV, quản lý đơn hàng.
- **Mobile App** (IP LAN `192.168.10.13:3000`): hành trình mua hàng đầu đến cuối từ tìm kiếm tới thanh toán — **phần mở rộng so với tool-2-uxreality.**

## 3. Khung đánh giá làm kim chỉ nam

### 3.1. UI/UX Design Principles được vận hành hóa

| Mã | Nguyên tắc | Chỉ báo cần quan sát |
|---|---|---|
| P1 | User-centeredness / task fit | Người dùng có hoàn thành mục tiêu thực tế của vai trò không? |
| P2 | Clarity and affordance | Nhãn, biểu tượng, nút và trường nhập có dễ hiểu không? |
| P3 | Visual hierarchy and information architecture | Thông tin/hành động quan trọng có dễ tìm không? |
| P4 | Consistency and standards | Điều hướng, màu, thuật ngữ có nhất quán không? |
| P5 | Feedback and guidance | Hệ thống có xác nhận thao tác và kết quả kịp thời không? |
| P6 | Simplicity and cognitive load | Có bước, trường hoặc thông tin thừa gây quá tải không? |
| P7 | Efficiency and learnability | Người dùng có hoàn thành với nỗ lực hợp lý không? |
| P8 | Error prevention and recovery | Giao diện có giúp ngăn sai và sửa lỗi không? |
| P9 | Accessibility and adaptability | Tương phản, focus order, nhãn có hỗ trợ nhiều cách dùng không? |
| P10 | Trust and transparency | Giá, tổng tiền, trạng thái đơn có rõ ràng không? |

### 3.2. Nielsen's 10 Usability Heuristics

| Mã | Heuristic | Câu hỏi áp dụng vào EShop |
|---|---|---|
| N1 | Visibility of System Status | Người dùng có nhận biết trạng thái tải, lưu, thêm giỏ, import hoặc chuyển trạng thái đơn không? |
| N2 | Match Between System and the Real World | Thuật ngữ và luồng thao tác có gần với mô hình nghiệp vụ không? |
| N3 | User Control and Freedom | Có cách quay lại, hủy, sửa thao tác không mong muốn không? |
| N4 | Consistency and Standards | Cách trình bày/hành vi có nhất quán giữa các màn hình không? |
| N5 | Error Prevention | Có chặn nhập sai, file import không hợp lệ hoặc xóa nhầm không? |
| N6 | Recognition Rather Than Recall | Người dùng có thể nhìn thấy lựa chọn/trạng thái mà không cần nhớ lại không? |
| N7 | Flexibility and Efficiency of Use | Tìm kiếm, bảng, bộ lọc có hiệu quả không? |
| N8 | Aesthetic and Minimalist Design | Giao diện có ưu tiên thông tin quan trọng và giảm nhiễu không? |
| N9 | Help Users Recognize, Diagnose, and Recover from Errors | Thông báo lỗi có giải thích vấn đề và cách sửa không? |
| N10 | Help and Documentation | Có hướng dẫn phù hợp tại nơi cần không? |

Tham chiếu: <https://www.nngroup.com/articles/ten-usability-heuristics/>.

### 3.3. Quy tắc sử dụng khung

- `UT` — bằng chứng từ người tham gia thực hiện task (recording, hành vi, phản hồi, metrics).
- `HE` — vấn đề được chuyên gia/nhóm đánh giá bằng cách đi qua giao diện và so sánh với heuristics.
- `BOTH` — đã có cả quan sát người dùng và đánh giá heuristic.

## 4. Mục tiêu nghiên cứu

### 4.1. Mục tiêu tổng quát

Đánh giá khám phá khả năng người dùng Customer, Admin và Mobile hoàn thành các nhiệm vụ ưu tiên trên EShop, xác định ma sát về điều hướng, hiểu thông tin, phản hồi trạng thái và xử lý lỗi; đồng thời đánh giá mức phù hợp của UXTweak trong thu thập bằng chứng theo UI/UX Design Principles và Nielsen's 10 Usability Heuristics.

### 4.2. Mục tiêu cụ thể

1. Xây dựng bộ task có thể lặp lại cho ba vai trò Customer, Admin và Mobile Customer.
2. Đo hoặc ghi nhận task outcome, thời gian, lỗi, trợ giúp và cảm nhận sau task.
3. Nhận diện các thao tác khiến người tham gia do dự, đi sai hướng hoặc cần trợ giúp.
4. Ánh xạ phát hiện sang nguyên tắc UI/UX và Nielsen heuristic thích hợp.
5. So sánh trải nghiệm mua hàng giữa Customer Web và Mobile App để phát hiện sự khác biệt kênh.
6. Đánh giá phần UXTweak tự động hỗ trợ và phần nhóm phải thực hiện thủ công.

### 4.3. Câu hỏi nghiên cứu

- **RQ1 — Customer Web:** Người dùng có thể tìm, chọn và thao tác với sản phẩm/giỏ hàng/coupon trên Customer Web không?
- **RQ2 — Admin Web:** Người dùng có thể tìm thông tin quản trị, chỉnh sửa dữ liệu sản phẩm, import CSV và xử lý đơn hàng không?
- **RQ3 — Mobile App:** Người dùng Mobile có gặp khó khăn bổ sung nào so với Web trong hành trình mua hàng không? Bug nào trong code Mobile xuất hiện trong phiên thực tế?
- **RQ4 — Design:** Những khó khăn quan sát được liên quan tới nguyên tắc UI/UX nào và heuristic nào?
- **RQ5 — Tool:** UXTweak cung cấp được loại bằng chứng nào, và bước nào vẫn phải thủ công?

## 5. Phạm vi và FR được chọn

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
| Mobile | M-01 | FR-05, FR-20 | Tìm sản phẩm trên Mobile và xác định giá | Core |
| Mobile | M-02 | FR-06, FR-24 | Thêm vào giỏ hàng Mobile và nhận biết phản hồi | Core |
| Mobile | M-03 | FR-07, FR-20 | Điều chỉnh số lượng và xóa sản phẩm trong giỏ Mobile | Core |
| Mobile | M-04 | FR-08, FR-09, FR-20 | Áp dụng coupon và thanh toán trên Mobile | Core |

## 6. Người tham gia

Nghiên cứu áp dụng thiết kế nội nhóm (**Within-subjects design**): Cùng một nhóm người tham gia sẽ thực hiện các bài kiểm thử trên cả 3 phân hệ (Customer Web, Mobile App và Admin Web). Thiết kế này phù hợp với điều kiện thực tế của đồ án/seminar, đồng thời cho phép so sánh trực tiếp cảm nhận của cùng một người dùng trên 2 kênh mua sắm Web vs Mobile.

| Người tham gia | Mã định danh | Điều kiện & Đặc điểm |
|---|---|---|
| 7 người dùng thực tế | P01 → P07 | Có smartphone cá nhân, thường xuyên mua sắm online, có kỹ năng sử dụng máy tính và web cơ bản. |

- **Phân bổ vai trò trong phiên:**
  - Khách hàng Customer Web (C-P01 → C-P07): Thực hiện 4 task C-01 → C-04.
  - Quản trị viên Admin Web (A-P01 → A-P07): Thực hiện 4 task A-01 → A-04.
  - Khách hàng Mobile App (M-P01 → M-P07): Thực hiện 4 task M-01 → M-04.
- **Tổng cộng:** **7 người tham gia**, thực hiện tổng cộng **84 task sessions** (12 task × 7 người).

## 7. Môi trường kiểm thử

- **Customer Web / Admin Web:** Cloudflare Quick Tunnel — URL tạm, đổi mỗi lần khởi động tunnel; không cố định URL trong báo cáo.
- **Mobile App:** Expo Go kết nối IP LAN `192.168.10.13:3000`; backend chạy trên cùng mạng LAN với participant; cần xác minh kết nối trước mỗi phiên.
- **Reset database:** Xem `task-specification/README.md` về quy trình reset SQLite và nạp fixture.

## 8. Metrics chính

| Mã | Chỉ số | Đơn vị | Liên quan |
|---|---|---|---|
| M01 | Tỷ lệ hoàn thành task (Success rate) | % | P1, P7; N2, N6, N7 |
| M02 | Thời gian hoàn thành trung bình | giây | P7; N7 |
| M03 | Số lỗi quan sát được trung bình/lượt | lỗi/session | P8; N5, N9 |
| M04 | Tỷ lệ cần trợ giúp | % | P7; N6, N10 |
| M05 | Điểm khó nhận thức QD1 | 1–5 | P6; N7 |
| M06 | Điểm tự tin về kết quả QD2 | 1–5 | P5, P10; N1 |
