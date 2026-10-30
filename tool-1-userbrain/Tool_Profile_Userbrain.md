# Tool Profile — Userbrain cho EShop Customer Web và Admin Web

> **Dự án:** Usability testing cho EShop  
> **Phạm vi:** Customer Web + Admin Web — U-01…U-04 (FR-02/12/14/19)  
> **Trạng thái:** Hồ sơ công cụ; cần chạy pilot trong tài khoản của nhóm trước khi ghi tính năng là đã xác minh.  
> **Nguồn tham khảo:** Tài liệu chính thức Userbrain, truy cập 30/10/2026.

## 1. Userbrain trong nghiên cứu này

Userbrain là nền tảng remote usability testing cho website, prototype và ứng dụng. Nghiên cứu EShop có thể dùng Userbrain để giao task, tuyển tester từ panel hoặc mời người tham gia của nhóm, ghi màn hình kèm âm thanh/think-aloud và thu phản hồi theo câu hỏi. Các kết quả video, câu trả lời và ghi chú của nhóm là bằng chứng đầu vào; nhóm vẫn phải xác định outcome, lỗi, severity và ánh xạ UI/UX Principles/Nielsen.

## 2. Tính năng Userbrain liên quan

| Khả năng | Cách áp dụng cho EShop | Trạng thái trong dự án |
|---|---|---|
| Test website qua URL | Dùng Customer Web hoặc Admin Web có thể truy cập công khai qua URL tạm của Cloudflare Quick Tunnel | Cần xác minh URL và build trong pilot |
| Nhiều task/question type trong một test | Tạo một test riêng gồm U-01–U-04, chia test/setup theo pilot nếu quá 20 phút; mỗi participant làm luồng phù hợp vai trò | Tài liệu Userbrain mô tả nhiều task type, phiên tối đa 20 phút; pilot xác nhận độ dài và giới hạn tài khoản |
| Screen + audio recording, think-aloud | Review hành vi, lời nói và thời gian bằng video | Được Userbrain mô tả; chưa ghi là đã chạy trong dự án cho đến khi pilot thành công |
| Câu hỏi | Task dài, rating scale, single choice, multiple choice, written response, redirect | Được tài liệu sản phẩm mô tả; cấu hình thực tế cần pilot |
| Tester panel và participant riêng | Panel có thể nhắm đặc điểm; cũng có thể tạo invite link cho participant của nhóm | Lựa chọn phụ thuộc gói và nguồn participant; xác minh tài khoản/định danh trước khi tuyển |
| Transcript / AI clips / AI insights / report | Dùng để hỗ trợ tìm thời điểm và tổng hợp; reviewer phải kiểm tra lại với video gốc | Tính năng được Userbrain công bố; phụ thuộc tài khoản và cần xác minh |
| Notes, clips, export | Ghi finding theo timestamp và xuất tài liệu nếu có | Kiểm tra trong pilot |
| Heatmap, eye tracking, facial coding | Không đưa vào protocol này; không có nguồn chính thức đã kiểm tra xác nhận đây là dữ liệu đo của Userbrain trong cấu hình dự án | Không giả định hỗ trợ |

## 3. Thiết kế test cho EShop

Userbrain chỉ nhận các mục tiêu chưa được giao cho UXReality/UXTweak: U-01 access control, U-02 category create/delete, U-03 Customer Web login lockout, U-04 Admin user lookup/delete. UXReality đã dành A-05 mở rộng cho FR-17 coupon CRUD nên Userbrain không kiểm tra quản lý coupon. U-03 khác đăng nhập thường trong UXTweak M-04 ở mục tiêu khóa do nhập sai liên tiếp. Pilot xác minh thời lượng, role/session và cách reset. Mọi thao tác ghi/xóa chỉ dùng sandbox.
## 4. Mức tự động hóa và giới hạn diễn giải

- Userbrain ghi nhận video màn hình/âm thanh theo cấu hình nghiên cứu và cung cấp công cụ review; nhóm kiểm tra video/câu trả lời để mã hóa outcome và finding.
- AI/transcript/automated report là trợ giúp tìm và tóm tắt, không thay thế xác minh evidence hoặc quyết định severity.
- Task success, completion time, observable errors, assistance, mapping P/N và kết luận theo nhóm là phần nhóm tự tổng hợp trừ khi pilot xác minh một chỉ số tự động cụ thể.
- Bản ghi có thể chứa tiếng nói, thông tin nhận dạng hoặc dữ liệu trên màn hình. Với participant thật, cần thông báo recording, lấy đồng thuận, hạn chế quyền truy cập và không commit video, thông tin định danh hoặc dữ liệu nhạy cảm vào repository.
- Quick Tunnel URL thay đổi và phải còn hoạt động trong suốt phiên. Ghi URL/build/configuration trong log phiên riêng, không commit credential hoặc URL nhạy cảm.

## 5. Nguồn chính thức

- [Userbrain Features](https://www.userbrain.com/en/features/)
- [Userbrain Easy Setup: task types và giới hạn 20 phút](https://www.userbrain.com/en/features/easy-setup/)
- [What can I test?](https://help.userbrain.com/help/what-can-i-test)
- [What is a test setup, and how many do I get?](https://help.userbrain.com/help/what-is-a-test-setup-and-how-many-do-i-get)
- [How do I invite my own users?](https://help.userbrain.com/help/how-can-i-test-with-my-own-users)
- [How Userbrain uses AI](https://help.userbrain.com/help/how-userbrain-uses-ai)
- [Pricing and current plan comparison](https://www.userbrain.com/en/pricing/)

> Giới hạn gói, tính năng và giao diện có thể đổi. Ghi trạng thái “Verified in pilot” chỉ sau khi nhóm chạy thử trong tài khoản đang dùng.





