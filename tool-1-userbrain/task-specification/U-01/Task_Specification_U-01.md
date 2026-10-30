# U-01 — Kiểm tra khả năng truy cập khu vực Admin



- **ID / FR:** U-01 / FR-12
- **Vai trò:** Khách hàng đã đăng nhập (role user)
- **Prompt participant:** Mở khu vực quản trị EShop. Hãy cho biết bạn có thể xem và sử dụng chức năng quản trị hay không.
- **Preconditions & reset:** Browser được setup sẵn session Customer role, không cấp credential cho participant. Ghi URL/build trong session log.

## Tiêu chí hoàn thành

Thành công: xác định được trạng thái truy cập từ thông tin UI và báo lại; không yêu cầu vượt kiểm soát. Partial: tìm đúng trang nhưng không rõ trạng thái. Fail: không tìm/diễn giải được. Invalid: session không ở Customer role hoặc trang không tải.

## Baseline từ source 

API admin chỉ xác minh JWT, không kiểm tra role; vì vậy token Customer có thể gọi API quản trị. SRS yêu cầu chỉ Admin truy cập. Pilot xác minh phản hồi UI trên build thực tế.

## Thu thập dữ liệu

Ghi outcome, thời lượng nếu Userbrain/recording cho phép, observable errors, assistance (nếu moderated), perceived difficulty và timestamp/evidence. Kết quả thực nghiệm tổng hợp theo task được ghi tại file Task_Data_Result và Userbrain Report. Không suy rộng expected behavior thành participant evidence.



