# Test Plan — Userbrain cho EShop Web


## 1. Mục tiêu

Đánh giá usability của các luồng EShop chưa được giao cho UXReality/UXTweak: nhận biết quyền Admin, quản lý danh mục, phản hồi khóa đăng nhập trên Web và tra cứu/xóa user Admin. Không dùng usability session làm kiểm thử bảo mật/API tự động.

## 2. Đối chiếu phạm vi với hai công cụ

| Công cụ | Phạm vi đọc từ tài liệu hiện có | Task không làm lại trong Userbrain |
|---|---|---|
| UXReality | C-01…C-04, A-01…A-04; Test Plan còn ghi task mở rộng C-05 FR-11 và A-05 FR-17 (coupon CRUD) | Sản phẩm, giỏ/checkout, lịch sử đơn, dashboard, sửa sản phẩm, CSV, trạng thái đơn, coupon CRUD |
| UXTweak | M-01…M-09 trên Mobile; M-04 login+checkout; M-07 register; M-08 reset password; M-05 profile; M-06 order history/cancel | Các mục tiêu Mobile, đăng ký, reset password, hồ sơ, lịch sử đơn, login trong happy path checkout |
| Userbrain | U-01 FR-12; U-02 FR-14; U-03 FR-02 login lockout trên Customer Web; U-04 FR-19 | Chỉ bốn mục tiêu này; không làm FR-17 coupon Admin vì UXReality đã dành A-05 |

U-03 khác M-04 ở mục tiêu đo: hành vi/feedback khi nhiều lần nhập sai và tài khoản bị khóa, không phải đăng nhập để mua hàng. Cần giữ scope lockout rõ trong prompt và báo cáo.

## 3. Danh mục task và test data

| ID | Vai trò / thiết lập | FR | Outcome chính |
|---|---|---|---|
| U-01 | Customer role đã được nạp session trước; participant không login | FR-12 | Người tham gia xác định được có được vào khu vực Admin không |
| U-02 | Admin test account | FR-14 | Tạo/xác nhận/xóa category `Đồ dùng học tập` |
| U-03 | Customer Web, seed account reset sạch | FR-02 | Nhận biết thông báo khóa và thời gian thử lại sau password sai |
| U-04 | Admin test account + dummy user riêng | FR-19 | Tìm/xóa `QA-DELETE-ME`; bảo toàn Admin session |

Fixture cụ thể ở `task-specification/fixtures/userbrain_test_fixtures.md`. Không lưu password thật/token. Sai password U-03 là giá trị dùng riêng cho test; seed account phải reset trước từng phiên. FR-17 coupon không có fixture Userbrain do A-05 của UXReality.

## 4. Người tham gia và cỡ mẫu

- U-01/U-02/U-04 dùng người phù hợp với vai trò; nếu participant Admin đại diện chưa quen EShop Admin thì ghi rõ.
- U-03 dùng người có thể thực hiện task website cơ bản; login form khởi đầu sẵn, không yêu cầu đăng ký/reset password.
- Nghiên cứu đã báo cáo 10 phiên hợp lệ mỗi task (20 participant, mỗi người thực hiện 2 task theo vai trò). Xem [Userbrain Report](Userbrain_Report.md); không suy rộng mẫu khám phá thành đại diện thống kê.
- Dùng participant IDs ẩn danh.

## 5. Môi trường và reset

- Dùng Customer Web cho U-03, Admin Web cho U-01/U-02/U-04; pilot xác minh URL/build, browser, session, role và recording.
- Dữ liệu chỉ nằm trong sandbox cô lập. Backend seed có thể drop/recreate bảng khi khởi động; do đó reset DB, nạp fixture và xác minh trạng thái sau khi server đã sẵn sàng.
- U-01 cần chuẩn bị Customer JWT/session trên đúng origin mà Admin UI dùng; không yêu cầu participant nhập credential. Pilot phải xác minh setup này khả thi và an toàn.
- U-02 tạo/xóa category test. U-03 mỗi seed account chỉ dùng cho một phiên trước khi reset, tránh lock state chéo. U-04 chỉ xóa dummy user, không xóa Admin/Customer seed.
- Không chạy song song trên chung database nếu task có thể thay đổi dữ liệu.

## 6. Metrics và phân tích

Ghi outcome Success/Partial/Fail/Invalid, completion time nếu xác định được, observable errors, assistance nếu moderated, perceived difficulty 1–5 nếu setup hỗ trợ, evidence timestamp và participant quote. Mapping UI/UX Principles P1–P10/Nielsen N1–N10 do reviewer thực hiện sau phiên. Chưa có recording thì để `N/A`; source expected result không được tính là participant outcome.

## 7. Quy trình

1. Reset sandbox, nạp fixture và kiểm tra điều kiện ban đầu theo task spec.
2. Pilot đường vào website, role/session, recording và task duration; dừng nếu fixture hoặc setup sai.
3. Gửi nguyên văn prompt, không chỉ thao tác cụ thể.
4. Quan sát/ghi evidence; chấm outcome theo tiêu chí đã chốt.
5. Reset dữ liệu trước participant tiếp theo; phân biệt findings `UT`, `HE`, `BOTH`.
6. Tổng hợp participant data riêng với code/SRS baseline.

## 8. Go/no-go / giới hạn và retest

Các phiên nghiên cứu đã hoàn thành theo tổng hợp trong report. Với retest, không chạy nếu môi trường hoặc role sai, URL mất ổn định, account U-03 còn attempts/lock, fixture U-04 thiếu, hoặc không thể reset. Findings usability không thay thế kiểm thử API/bảo mật. Không thay đổi tiêu chí sau khi bắt đầu phiên retest.


