# Data Result — M-09: Khám phá thông tin chi tiết sản phẩm & Đánh giá khả năng phục hồi khi gặp trang trống

> **Task ID:** M-09 | **Vai trò:** Mobile Customer
> **Nguồn spec:** Task_Specification_M-09.md
> **Trọng tâm:** Usability Testing đánh giá bẫy điều hướng ngõ cụt (Dead-End State), khả năng tự phục hồi của người dùng (User Freedom & Recovery), và độ sắc nét bố cục thông tin chi tiết sản phẩm.

## 1. Thông tin dữ liệu thực nghiệm

| Trường | Giá trị |
|---|---|
| Task ID | M-09 |
| Số người tham gia (n) | 7 (Ký hiệu M09-P01 -> M09-P07) |
| Môi trường thực hiện | Expo Go trên smartphone cá nhân; Backend LAN 192.168.10.13:3000 |
| Trạng thái ban đầu | Màn hình Home, duyệt danh sách sản phẩm |

### Ghi chú mã nguồn SUT — Phân tích khiếm khuyết Usability

- **Bẫy điều hướng ngõ cụt (`App.js` dòng 544-550):**
  Màn hình trống không có nút bấm điều hướng nào bên trong nội dung, người dùng không thể nhận biết cách quay lại.
- **Hình ảnh méo tỉ lệ (`App.js` dòng 558):**
  `resizeMode="stretch"` kéo giãn hình ảnh không bảo toàn tỉ lệ thực (aspect ratio), làm giảm độ tin cậy của sản phẩm cao cấp.

## 2. Kết quả chi tiết từng người tham gia (n = 7)

| Participant | Outcome | SC-01 | SC-02 | SC-03 | SC-04 | Time | Errors | Assist | QD1 | Ghi chú hành vi của người tham gia |
|---|---|---|---|---|---|---|---|---|---|---|
| M09-P01 | Partial | OK | OK | OK | NO | 54s | 1 | 0 | 4 | Xem chi tiết bình thường. Khi bấm vào sản phẩm rỗng, thấy màn hình trắng trơn có 1 dòng chữ, người dùng vuốt cạnh trái màn hình để Back nhưng không được. Đứng hình 15s mới nhìn thấy chữ "EShop" ở góc trên cùng để bấm về. |
| M09-P02 | Fail | OK | OK | OK | NO | 68s | 2 | 0 | 5 | Gặp trang trống, tưởng app bị đơ màn hình. Bấm vào màn hình nhiều lần không thấy gì, sau đó bấm phím Home của điện thoại và vuốt tắt app luôn. Đánh giá: Bị kẹt trong ngõ cụt. |
| M09-P03 | Success | OK | OK | OK | OK | 32s | 0 | 0 | 2 | Đọc chi tiết sản phẩm nhanh. Khi gặp trang trống, lập tức nhận ra thanh menu trên cùng và bấm logo EShop để về trang chủ. |
| M09-P04 | Partial | OK | OK | OK | NO | 49s | 1 | 0 | 4 | Nhận xét ảnh bàn phím bị dẹt ngang trông mất thẩm mỹ. Khi vào trang rỗng, loay hoay tìm nút quay lại nhưng không có, may mắn bấm trúng icon giỏ hàng trên thanh header rồi mới về Home. |
| M09-P05 | Success | OK | OK | OK | OK | 28s | 0 | 0 | 1 | Người dùng am hiểu công nghệ, điều hướng linh hoạt qua header navigation bar. |
| M09-P06 | Partial | OK | OK | OK | NO | 51s | 1 | 0 | 4 | Thắc mắc sao không có nút 'Quay lại danh mục'. Thấy trang trắng tưởng lỗi hệ thống nghiêm trọng. Sau đó chạm vào thanh tiêu đề mới thoát được. |
| M09-P07 | Success | OK | OK | OK | OK | 36s | 0 | 0 | 2 | Thao tác ổn định, hoàn thành xem thông số và tự thoát khỏi trang rỗng qua header bar. |

## 3. Câu trả lời khảo sát sau kịch bản

| Participant | QD1 (Độ dễ đọc tin) | QD2 (Độ dễ thoát trang rỗng) | Q01 (Ảnh bị biến dạng) | Q03 (Cảm giác rơi vào ngõ cụt) | Q11 (Vấn đề lớn nhất) | Q12 (Khía cạnh vi phạm) |
|---|---|---|---|---|---|---|
| M09-P01 | 3 | 2 | 4 (Hơi dẹt) | 5 (Hoàn toàn bế tắc) | Thiếu nút Quay lại trên màn hình | Quyền tự do & kiểm soát (N3) |
| M09-P02 | 4 | 1 | 4 (Bị méo) | 5 (Tưởng đơ app, phải tắt) | Trang trắng trơn không làm gì được | Nhận biết & phục hồi lỗi (N9) |
| M09-P03 | 2 | 4 | 3 (Bình thường) | 2 (Vẫn thoát được bằng header) | Khối mô tả dài chữ nhỏ | Thẩm mỹ & tối giản (N8) |
| M09-P04 | 3 | 2 | 5 (Méo rõ rệt) | 5 (Rất ức chế) | Ảnh méo tỉ lệ và thiếu nút quay lại | Rõ ràng & Affordance (P2) |
| M09-P05 | 2 | 4 | 4 (Kéo dãn) | 2 (Ít ảnh hưởng) | Cần chia tab thông số kỹ thuật | Phân cấp thị giác (P3) |
| M09-P06 | 3 | 2 | 4 (Bị dẹt) | 5 (Bối rối không biết thoát) | Tưởng app bị crash | Khả năng kiểm soát (N3) |
| M09-P07 | 2 | 4 | 3 (Chấp nhận được) | 3 (Thiếu nút rõ ràng) | Cần nút quay lại to ở góc trên | Tiêu chuẩn & nhất quán (N4) |

## 4. Bảng tổng hợp chỉ số Usability định lượng

| Chỉ số đo lường (Usability Metric) | Giá trị thực nghiệm | Tiêu chuẩn Benchmark khuyến nghị | Đánh giá Usability |
|---|---|---|---|
| **Tỷ lệ thành công (Success Rate)** | **42.9%** (3/7) | >= 85% | **Kém** (Chỉ người dùng rành công nghệ tự thoát được) |
| **Tỷ lệ lúng túng / mất phương hướng (Lostness Rate)** | **42.9%** (3/7) | <= 10% | **Rất cao** (Bối rối trước màn hình ngõ cụt) |
| **Tỷ lệ buộc phải tắt app (Abandon / Force Close)** | **14.3%** (1/7) | 0% | **Báo động** (Mất khách hàng hoàn toàn) |
| **Thời gian trung bình hoàn tất (Mean Time)** | **45.4 giây** | <= 25 giây | Kéo dài do thời gian bế tắc tìm đường thoát |
| **Thời gian trung vị (Median Time)** | **49.0 giây** | <= 25 giây | Phản ánh rõ trở ngại điều hướng |
| **Độ dễ đọc thông tin (QD1 Mean)** | **2.71 / 5** | <= 2.0 (Thang 1 Rất dễ) | Mức độ trung bình kém |
| **Độ dễ tự thoát khỏi trang rỗng (QD2 Mean)** | **2.71 / 5** | >= 4.2 (Thang 5 Rất dễ) | Kém, người dùng cảm thấy mất quyền kiểm soát |
