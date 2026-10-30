# U-04 — Tìm và xóa người dùng test, giữ tài khoản Admin

- **ID / FR:** U-04 / FR-19
- **Vai trò:** Admin
- **Prompt participant:** Trong danh sách người dùng, tìm QA-DELETE-ME, xác nhận thông tin tài khoản, rồi xóa người dùng test đó. Sau cùng xác nhận tài khoản quản trị bạn đang dùng vẫn hoạt động.
- **Preconditions & reset:** Admin test account đang đăng nhập; user QA-DELETE-ME được provision riêng, không có dữ liệu thật. Chụp trạng thái ban đầu; sandbox riêng.

## Tiêu chí hoàn thành

Thành công: tìm đúng QA-DELETE-ME, không thấy mật khẩu trong thông tin hiển thị, xóa đúng user test và xác nhận Admin session còn hoạt động. Partial: tìm được nhưng không hoàn tất/xác nhận xóa. Fail: xóa sai người hoặc không thể tìm user. Invalid: user fixture thiếu hoặc tài khoản Admin không hợp lệ.

## Baseline từ source (expected system behavior, không dùng để chấm participant)

GET admin/users trả trường không có password nhưng chỉ authenticateToken, không role-check. DELETE không chặn xóa user đang đăng nhập. Để kiểm tra cấm tự xóa theo FR, chỉ reviewer kiểm tra riêng trên fixture sandbox; task participant chỉ xóa QA-DELETE-ME.

## Thu thập dữ liệu

Ghi outcome, thời lượng nếu Userbrain/recording cho phép, observable errors, assistance (nếu moderated), perceived difficulty và timestamp/evidence. Kết quả thực nghiệm tổng hợp theo task được ghi tại file Task_Data_Result và Userbrain Report. Không suy rộng expected behavior thành participant evidence.

