# Tool Profile — UXTweak cho EShop Customer Web, Admin Web và Mobile App

> **Dự án:** Usability Testing cho hệ thống EShop
> **Phạm vi:** Customer Web, Admin Web và Mobile App (React Native / Expo)
> **Trạng thái:** Hồ sơ nghiên cứu công cụ; các khả năng chưa chạy thử được ghi rõ là cần xác minh.
> **Mục đích:** Làm cơ sở cho Test Plan, demo, phân tích usability và đánh giá UXTweak.

## 1. UXTweak là gì?

UXTweak là nền tảng nghiên cứu trải nghiệm người dùng từ xa (remote UX research). Nền tảng tích hợp nhiều phương pháp nghiên cứu trong một giao diện duy nhất: **Website Testing** (task-based testing trực tiếp trên URL thật), **Session Recording**, **Heatmaps**, **Tree Testing**, **Card Sorting**, **First Click Testing** và **Preference Testing**. Tùy gói tài khoản và loại nghiên cứu, không phải mọi tính năng đều sẵn có.

Trong project EShop, UXTweak được chọn để nghiên cứu **ba** bối cảnh riêng biệt:

- **Customer Web:** người mua tìm sản phẩm, xem chi tiết, thao tác giỏ hàng/checkout và áp mã giảm giá.
- **Admin Web:** người quản trị xem dashboard, chỉnh sửa sản phẩm, nhập sản phẩm từ CSV và xử lý đơn hàng.
- **Mobile App (React Native / Expo):** người mua trên thiết bị di động thực hiện hành trình mua hàng từ tìm kiếm tới thanh toán.

Không nên xem UXTweak là công cụ thay thế cho mọi loại kiểm thử phần mềm. Nó không mặc nhiên xác minh tính đúng đắn của API, cơ sở dữ liệu, business rule hoặc bảo mật.

## 2. UXTweak giải quyết câu hỏi nghiên cứu nào?

- Người dùng có nhận ra cách tìm kiếm sản phẩm trên cả Web lẫn Mobile không?
- Phản hồi sau thao tác "Thêm vào giỏ" có đủ rõ để người dùng tự tin về kết quả không?
- Bug số lượng tự cộng 1 trong giỏ hàng Mobile có được phát hiện trong phiên thực tế không?
- Người dùng Admin có đọc đúng dữ liệu trên Dashboard hay nhầm lẫn do bug nhân đôi doanh thu không?
- Khác biệt nào xuất hiện giữa trải nghiệm mua hàng trên Web và Mobile?

**Nguyên tắc diễn giải:** click path, heatmap, session recording hoặc câu trả lời survey là nguồn bằng chứng. Không một tín hiệu đơn lẻ nào tự chứng minh nguyên nhân hay kết luận giao diện tốt/xấu.

## 3. Nguyên lý hoạt động

1. **Tạo study:** chọn loại study phù hợp (Website Testing, v.v.) và mục tiêu.
2. **Chuẩn bị môi trường:** Web dùng Cloudflare Quick Tunnel; Mobile dùng Expo Go hoặc browser mobile với IP LAN `192.168.10.13:3000`.
3. **Thiết kế task:** mô tả mục tiêu người dùng, tránh chỉ dẫn click cụ thể.
4. **Thiết lập study:** nhập URL, nhiệm vụ, câu hỏi sau task; bật session recording / heatmap nếu gói hỗ trợ.
5. **Mời người tham gia:** chia sẻ link study; không cần extension cho Website Testing.
6. **Thực hiện task:** người tham gia tự thực hiện; nhóm không can thiệp trừ khi protocol quy định.
7. **Thu thập dữ liệu:** nền tảng ghi click path, thời gian, recording, heatmap.
8. **Review:** xem dashboard, session recordings, click path funnel và phản hồi survey.
9. **Phân tích:** nhóm đối chiếu với UI/UX Design Principles và Nielsen's 10 Usability Heuristics.
10. **Kết luận có căn cứ:** ghi nhận usability issue, mức ảnh hưởng, giới hạn dữ liệu và khuyến nghị.

## 4. Mức độ tự động hóa cần phân biệt

| Lớp                     | Ví dụ                                                     | Cách ghi trong báo cáo                           |
| ----------------------- | --------------------------------------------------------- | ------------------------------------------------ |
| Nền tảng tự động hỗ trợ | Click path, thời gian task, session recording, heatmap    | Chỉ ghi "đã xác minh" khi chạy thử thành công    |
| Nghiên cứu bán tự động  | Người tham gia làm task, tool ghi click path, nhóm review | Nêu rõ bước nào tool làm, bước nào con người làm |
| Phân tích của nhóm      | Gắn issue với heuristics, xác định severity, đề xuất UI   | Không mô tả là kết quả tự động của UXTweak       |

## 5. Thuật ngữ chính

| Thuật ngữ            | Nghĩa dùng trong project                                               |
| -------------------- | ---------------------------------------------------------------------- |
| Usability study      | Nghiên cứu cách người dùng thực hiện nhiệm vụ trên sản phẩm số.        |
| Study / project      | Nghiên cứu được tạo trên UXTweak; mỗi task là một study riêng.         |
| Task                 | Nhiệm vụ được giao, mô tả mục tiêu chứ không chỉ dẫn vị trí click.     |
| Participant / tester | Người tham gia; dùng ID ẩn danh như C-P01, A-P01, M-P01.               |
| Session recording    | Bản ghi phiên video kèm click path; phụ thuộc gói tài khoản.           |
| Click path / Funnel  | Chuỗi URL/selector người dùng đi qua, ghi tự động bởi UXTweak.         |
| Heatmap              | Hình trực quan hóa vùng click/scroll; đọc theo định nghĩa của UXTweak. |
| Mobile session       | Phiên thực hiện trên thiết bị di động thực hoặc simulator.             |
| Finding / insight    | Nhận định có căn cứ rút ra từ dữ liệu; có thể cần điều tra thêm.       |
| Usability issue      | Vấn đề làm người dùng khó đạt mục tiêu.                                |
| Pilot                | Chạy thử quy trình trước nghiên cứu chính thức.                        |
