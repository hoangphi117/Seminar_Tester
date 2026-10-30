# U-03 — Nhận biết khóa tài khoản sau nhiều lần đăng nhập sai



- **ID / FR:** U-03 / FR-02
- **Vai trò:** Customer Web, tài khoản test đã provision sẵn
- **Prompt participant:** Bạn cần mở tài khoản EShop. Dùng email kiểm thử `test@eshop.com` và password kiểm thử được cung cấp, hãy thử đăng nhập cho tới khi giao diện cho biết cần làm gì tiếp theo. Sau đó nói điều bạn hiểu và dừng lại.
- **Preconditions & reset:** DB sandbox vừa reset, `login_attempts = 0`, `locked_until = NULL`. Cấp password cố ý sai `Wrong-Password-01!` trong trường test; không cấp/ghi password thật. Một participant/session trên fixture account; reset seed giữa phiên.

## Tiêu chí hoàn thành

- **Success:** participant nhận ra thông báo khóa/thời gian thử lại, dừng thao tác và mô tả được điều họ hiểu; không cần đăng nhập thành công.
- **Partial:** có gặp lỗi đăng nhập nhưng không nhận ra trạng thái khóa hoặc tiếp tục thử mà không hiểu hậu quả.
- **Fail:** không tìm được luồng đăng nhập hoặc không nhận biết kết quả sau chuỗi nhập sai.
- **Invalid:** account không ở trạng thái ban đầu, site/login hỏng, hoặc participant nhận nhầm credential/password thật.

## Baseline theo FR và source

FR-02 yêu cầu bộ đếm tăng đúng 1 sau mỗi lần sai; khóa sau ít nhất 3 lần liên tiếp trong 30 giây và thông báo phù hợp. `backend/server.js` cộng `login_attempts + 2`, gán khóa 180 giây từ lần sai thứ hai; thông báo khóa chỉ được trả ở request tiếp theo khi `locked_until` đang hiệu lực. Vì vậy source dự kiến user thấy thông báo khóa ở lần thử tiếp theo sau khi hệ thống đã đặt khóa, thời gian khóa là 3 phút. Xác minh trên build bằng pilot; phân biệt thời điểm backend đặt khóa với thông báo participant nhìn thấy.

## Thu thập dữ liệu

Ghi số lần nhập sai đến khi thông báo khóa xuất hiện, nội dung thông báo, cách participant hiểu thời gian chờ, thời lượng task và observable errors. Không thử đăng nhập đúng trong thời gian khóa. Kết quả participant được tổng hợp tại file Task_Data_Result và Userbrain Report.

