# V. SỬ DỤNG GOOGLE FORMS VÀ GOOGLE SHEETS TRONG KHẢO SÁT

## 1. Mục đích và vai trò

Trong hoạt động Usability Testing trên EShop, nhóm sử dụng Google Forms để thu thập đánh giá của người tham gia và Google Sheets để lưu trữ, xử lý và trực quan hóa kết quả. Sự kết hợp này giúp ghi nhận mức độ dễ sử dụng của từng nhiệm vụ, đánh giá khả dụng tổng thể và tập hợp ý kiến cải tiến.

Google Forms cung cấp dữ liệu tự báo cáo; Google Sheets hỗ trợ đối chiếu dữ liệu đó với ghi nhận của điều phối viên và bảng đánh giá heuristic đã trình bày ở phần III. Qua đó, nhóm có thêm cơ sở xác định vấn đề giao diện và đề xuất hướng khắc phục.

## 2. Thu thập phản hồi bằng Google Forms

Biểu mẫu **“Khảo sát trải nghiệm sử dụng EShop — Nhóm 07”** được tổ chức theo trình tự:

| Phần | Nội dung |
|---|---|
| Đồng thuận và thông tin trước phiên | Giới thiệu mục đích, quyền tham gia tự nguyện; hỏi độ tuổi, nghề nghiệp, thói quen mua sắm, mức độ quen thuộc với công nghệ và thiết bị sử dụng. |
| Nhiệm vụ và đánh giá SEQ | Giao tình huống, ghi kết quả tự báo cáo, mức độ dễ/khó và nhận xét ngay sau thao tác. |
| Đánh giá tổng thể SUS | Gồm 10 câu trên thang 1–5, dành cho người đã trực tiếp thử ít nhất một nhiệm vụ. |
| Ý kiến cuối phiên | Thu thập điểm khó hiểu, trở ngại và đề xuất cải tiến EShop. |

Biểu mẫu gồm **12 nhiệm vụ** thuộc hai phân hệ khách hàng và Admin, bao quát đăng ký, đăng nhập, tìm sản phẩm, giỏ hàng, đặt hàng, quản lý tài khoản, thêm sản phẩm, import CSV và cập nhật đơn. Phiên bản sử dụng đi tuần tự qua các nhiệm vụ, không chia nhánh theo vai trò; người chưa làm có thể chọn trạng thái tương ứng.

Mỗi nhiệm vụ đặt tình huống, câu hỏi kết quả, SEQ và nhận xét trên cùng một phần. Kết quả có năm trạng thái: hoàn thành độc lập, hoàn thành có hỗ trợ, không hoàn thành, chưa thực hiện và sự cố môi trường. SEQ sử dụng thang **1–7**, từ **Rất khó** đến **Rất dễ**. Người đã thử vẫn chấm khi không hoàn thành; người chưa làm hoặc chỉ gặp sự cố môi trường để trống.

Người tham gia mở [liên kết khảo sát](https://forms.gle/CGAhVfdGLgkB26Gv9) hoặc quét mã QR, thao tác trên EShop rồi quay lại trả lời. Toàn bộ phản hồi được gửi một lần ở cuối phiên. Biểu mẫu yêu cầu sử dụng dữ liệu thử nghiệm, không nhập mật khẩu, OTP hoặc thông tin thanh toán thật.

## 3. Xử lý và phân tích bằng Google Sheets

Google Forms được liên kết với bảng tính kết quả. Khi người tham gia gửi biểu mẫu, câu trả lời được lưu vào tab phản hồi gốc; Apps Script hỗ trợ chuẩn hóa, tính điểm và cập nhật các bảng phân tích.

| Tab | Chức năng |
|---|---|
| Form Responses 1 | Lưu câu trả lời gốc từ Google Forms. |
| HUONG_DAN | Ghi liên kết và quy ước sử dụng bảng tính. |
| SUS | Mỗi phản hồi một dòng, gồm 10 câu, điểm tổng và kiểm tra tính hợp lệ. |
| SEQ | Mỗi phản hồi một dòng; từng nhiệm vụ có kết quả, điểm SEQ và nhận xét. |
| QUAN_SAT | Điều phối viên ghi kết quả, thời gian, số lỗi và trợ giúp. |
| TONG_HOP | Tổng hợp các chỉ số và số lượt hợp lệ. |
| DASHBOARD | Trực quan hóa kết quả bằng biểu đồ. |
| VAN_DE | Ghi vấn đề, bằng chứng, mức ưu tiên và đề xuất sửa. |
| HEURISTIC | Ghi kết quả kiểm tra giao diện theo nguyên tắc Nielsen. |

### 3.1. Tổng hợp SEQ và tính điểm SUS

**SEQ** được tổng hợp theo từng nhiệm vụ, gồm số lượt hợp lệ, điểm trung bình và trung vị. Chỉ tính điểm nguyên 1–7 của nhiệm vụ đã thử; điểm thiếu không được thay bằng 0. Điểm SEQ phản ánh cảm nhận dễ/khó, cần được đọc cùng kết quả nhiệm vụ và nhận xét.

**SUS** chỉ được tính khi đủ 10 câu trả lời hợp lệ trên thang 1–5. Với câu lẻ, lấy điểm trả lời trừ 1; với câu chẵn, lấy 5 trừ điểm trả lời. Tổng điểm đóng góp nhân 2,5 tạo thành điểm **0–100**. SUS thể hiện khả dụng tổng thể, không phải phần trăm hài lòng. Các phiên không chọn vai trò được tổng hợp theo phạm vi trải nghiệm chung của EShop.

### 3.2. Trực quan hóa và đối chiếu kết quả

Dashboard được cấu hình bốn biểu đồ: SEQ trung bình theo nhiệm vụ, kết quả tự báo cáo, SUS theo phạm vi phiên và kết quả quan sát của điều phối viên. Các bảng hiển thị số mẫu cạnh điểm trung bình, căn giữa cột số và định dạng thống nhất để thuận tiện so sánh.

Dữ liệu tự báo cáo và quan sát được trình bày riêng. Thời gian, số lỗi và mức trợ giúp chỉ được phân tích khi có ghi nhận thực tế trong QUAN_SAT; Google Forms không tự đo các chỉ số này. Vì vậy, biểu đồ quan sát chưa có dữ liệu khi điều phối viên chưa nhập kết quả.

Tab HEURISTIC bổ sung 25 mục kiểm tra theo 10 nguyên tắc Nielsen, gồm cách kiểm tra, kết quả mong đợi, bằng chứng và mức nghiêm trọng 0–4. Các phát hiện được đối chiếu với nhận xét khảo sát và ghi vào VAN_DE để xem xét ưu tiên cải tiến.

## 4. Minh họa quy trình áp dụng trên EShop

Quy trình được minh họa qua nhiệm vụ **tìm, xem và chọn mua sản phẩm**:

1. Người tham gia đọc mục tiêu trong Form, sau đó chuyển sang EShop để tìm sản phẩm và chọn mua số lượng được giao.
2. Sau thao tác, người tham gia quay lại Form, chọn kết quả, chấm SEQ và ghi trở ngại nếu có.
3. Người điều phối ghi thời gian, lỗi hoặc trợ giúp vào QUAN_SAT nếu phiên có quan sát trực tiếp.
4. Sau khi hoàn tất phiên và gửi Form, phản hồi được lưu trong Sheets, đối chiếu bằng ID phản hồi và đưa vào bảng tổng hợp.
5. Nhóm xem điểm SEQ, kết quả và nhận xét để xác định bước cần kiểm tra thêm, rồi ghi vấn đề cùng bằng chứng vào VAN_DE.

Đây là minh họa cách sử dụng bộ công cụ, không phải kết quả thực nghiệm. Trước khi báo cáo số liệu, nhóm cần loại phản hồi giả lập và lượt pilot, đồng thời kiểm tra số mẫu hợp lệ và dữ liệu thiếu.

## 5. Ưu điểm và hạn chế

**Ưu điểm:** dễ chia sẻ bằng liên kết hoặc QR, thống nhất câu hỏi giữa các phiên và giảm thao tác tổng hợp thủ công. Việc kết hợp điểm số, nhận xét và biểu đồ giúp nhóm theo dõi trải nghiệm ở cả cấp nhiệm vụ và toàn hệ thống.

**Hạn chế:** phản hồi phụ thuộc vào cảm nhận và mức độ hợp tác của người tham gia. Các công cụ không tự ghi nhận toàn bộ hành vi thao tác; dữ liệu thời gian và lỗi cần được quan sát riêng. Khi mẫu nhỏ, kết quả chỉ hỗ trợ đánh giá trong phạm vi nghiên cứu và cần được diễn giải cùng bằng chứng thực tế.

**Tài liệu triển khai:** [Biểu mẫu khảo sát](https://forms.gle/CGAhVfdGLgkB26Gv9) · [Bảng kết quả và checklist](https://docs.google.com/spreadsheets/d/1E5lycp6sKcYUMeNaBJdv4MGBCTynp1XVUEnxc0ZIIM4/edit).


