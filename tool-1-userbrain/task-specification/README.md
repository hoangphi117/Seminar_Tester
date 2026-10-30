# Task Specification — Userbrain / EShop

> Phạm vi riêng Userbrain: task web/API-facing của EShop không được giao cho UXReality hoặc UXTweak. Trạng thái trước pilot; không phải kết quả thực nghiệm.

## Ma trận task giữa ba công cụ

| Công cụ | Task đã có/được lên kế hoạch | Quyết định với Userbrain |
|---|---|---|
| UXReality | C-01…C-04, A-01…A-04; Test Plan còn nêu mở rộng C-05 (FR-11) và A-05 (FR-17 coupon CRUD) | Không lặp FR-05…FR-11, FR-13, FR-15…FR-18; riêng coupon Admin bị loại vì đã có A-05 |
| UXTweak | M-01…M-09 trên Mobile: mua hàng, profile, lịch sử/hủy đơn, đăng ký và reset mật khẩu; M-04 có đăng nhập thường trong checkout | Không lặp mục tiêu task đó; U-03 chỉ kiểm tra phản hồi riêng của khóa đăng nhập trên Customer Web |
| Userbrain | U-01 role access; U-02 category create/delete; U-03 login lockout; U-04 admin user lookup/delete | FR-12, FR-14, FR-02 (lockout), FR-19 |

## Danh mục task

| ID | Vai trò | FR | Mục tiêu | Fixture |
|---|---|---|---|---|
| U-01 | Customer đã đăng nhập (role user) | FR-12 | Kiểm tra có nhận biết và tiếp cận được khu vực Admin hay không | Customer session được setup trước |
| U-02 | Admin | FR-14 | Tạo, xác nhận rồi xóa danh mục test | `Đồ dùng học tập` chưa tồn tại |
| U-03 | Customer Web | FR-02 | Dùng password sai có chủ đích để nhận biết khóa tài khoản và thời gian thử lại | Seed account reset `login_attempts=0`, `locked_until=NULL` |
| U-04 | Admin | FR-19 | Tìm/xóa user test, xác nhận user Admin đang dùng vẫn còn | `QA-DELETE-ME` là tài khoản sandbox riêng |

Specs/data result ở các thư mục U-01…U-04 theo cấu trúc cùng dạng với Tool 2. Mỗi kết quả participant là N/A cho đến khi có recording.

## Code và expected result

- U-01: Admin API xác minh JWT nhưng không kiểm tra role; token Customer có thể gọi API quản trị. UI cần pilot xác minh.
- U-02: Category GET công khai; mutations yêu cầu token nhưng không role-check. POST không validate tên rỗng.
- U-03: FR-02 muốn cộng bộ đếm 1/lần sai, khóa 30 giây từ lần sai thứ ba. Backend cộng 2 và đặt khóa 180 giây ở lần sai thứ hai; thông báo khóa được trả ở request kế tiếp. Đây là baseline static code, không phải outcome người dùng.
- U-04: GET admin/users trả các trường không gồm password; API DELETE không chặn xóa chính user đăng nhập. Participant chỉ xóa dummy user khác.

## Dữ liệu và reset

Fixture chi tiết tại `fixtures/userbrain_test_fixtures.md`. Chỉ dùng DB sandbox riêng. Seed/backend restart có thể drop/recreate toàn DB; reset và xác minh trạng thái account trước từng phiên. Fixture CSV/order của UXReality không được sao chép vào Userbrain.





## Dataset minh họa (không phải kết quả Userbrain)`r`n`r`n[fixtures/simulated_results_n10.csv](fixtures/simulated_results_n10.csv) có 10 dòng dữ liệu cho mỗi task, tổng cộng 40 dòng qua 4 task. Tất cả rows mang EvidenceStatus=SIMULATED; actual Userbrain sessions hiện bằng 0. Đây là số liệu dựng để minh họa cấu trúc tổng hợp, không phải dữ liệu người tham gia thực nghiệm.`r`n
