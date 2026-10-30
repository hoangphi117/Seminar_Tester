# U-02 — Tạo và xóa danh mục sandbox

> Userbrain / EShop — đặc tả trước pilot; đây không phải kết quả participant.

- **ID / FR:** U-02 / FR-14
- **Vai trò:** Admin
- **Prompt participant:** Tạo danh mục “Đồ dùng học tập”, xác nhận danh mục đã xuất hiện, sau đó xóa danh mục vừa tạo.
- **Preconditions & reset:** Admin test account đã đăng nhập; tên chưa có trong danh sách; backend sandbox. Không dùng danh mục seed. Reset dữ liệu sau phiên.

## Tiêu chí hoàn thành

Thành công: tạo đúng tên, xác nhận xuất hiện, xóa đúng danh mục do mình vừa tạo và xác nhận không còn. Partial: tạo thành công nhưng không hoàn tất xóa/xác nhận. Fail: tạo sai hoặc xóa nhầm danh mục. Invalid: quyền/data/UI không đúng điều kiện.

## Baseline từ source (expected system behavior, không dùng để chấm participant)

POST/DELETE categories yêu cầu token nhưng không kiểm tra role; POST không validate tên rỗng ở backend. GET categories công khai. Pilot xác minh UI, validation và feedback.

## Thu thập dữ liệu

Ghi outcome, thời lượng nếu Userbrain/recording cho phép, observable errors, assistance (nếu moderated), perceived difficulty và timestamp/evidence. Khi chưa có session, ghi N/A; không suy đoán participant response.

