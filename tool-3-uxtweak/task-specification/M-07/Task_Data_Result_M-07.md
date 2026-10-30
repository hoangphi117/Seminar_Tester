# Data Result — M-07: Khôi phục mật khẩu qua OTP & Đánh giá phân cấp thị giác nút điều hướng

> **Task ID:** M-07 | **Vai trò:** Mobile Customer (Quên mật khẩu)
> **Nguồn spec:** Task_Specification_M-07.md
> **Trọng tâm:** Usability Testing đánh giá phân cấp thị giác (Visual Hierarchy), nguy cơ bấm nhầm nút hủy (Misclick/Slip), và khả năng nhận diện trạng thái trong luồng OTP.

## 1. Thông tin dữ liệu thực nghiệm

| Trường | Giá trị |
|---|---|
| Task ID | M-08 |
| Số người tham gia (n) | 7 (Ký hiệu M07-P01 -> M07-P07) |
| Môi trường thực hiện | Expo Go trên điện thoại thật; Backend LAN 192.168.10.13:3000 |
| Trạng thái ban đầu | Màn hình Đăng nhập, tài khoản `customer@eshop.com` |

### Ghi chú mã nguồn SUT — Phân tích khiếm khuyết Visual Hierarchy

Hai nút điều hướng trái ngược nhau hoàn toàn về ý đồ sử dụng nhưng lại dùng chung style:
- Nút "Đặt lại mật khẩu": Hành động nộp biểu mẫu quan trọng (Primary CTA).
- Nút "← Quay lại": Hành động quay lại bước 1, hủy bỏ dữ liệu đang nhập (Secondary/Back Action).
Cả hai đều dùng `styles.greenButton`:
```javascript
greenButton: {
  backgroundColor: "#10b981",
  padding: 14,
  borderRadius: 8,
  alignItems: "center",
  marginTop: 10,
}
```
Không có sự phân biệt về viền (Outlined), màu nền nhạt (Ghost/Subtle), hay mức độ ưu tiên thị giác.

## 2. Kết quả chi tiết từng người tham gia (n = 7)

| Participant | Outcome | SC-01 | SC-02 | SC-03 | SC-04 | SC-05 | Time | Errors (Bấm nhầm) | Assist | QD1 | Ghi chú hành vi của người tham gia |
|---|---|---|---|---|---|---|---|---|---|---|---|
| M07-P01 | Partial | OK | OK | OK | NO | OK | 52s | 1 | 0 | 3 | Sau khi nhập xong OTP và mật khẩu mới, đưa ngón tay chạm nhanh vào nút phía dưới ("← Quay lại"). Màn hình bị văng về bước 1, mất hết mật khẩu vừa gõ. Người dùng thốt lên: "Ủa sao 2 nút xanh lè giống nhau vậy!". Phải làm lại từ đầu. |
| M07-P02 | Success | OK | OK | OK | OK | OK | 34s | 0 | 0 | 2 | Khựng lại khoảng 3 giây nhìn cả 2 nút màu xanh, đọc kỹ chữ "Đặt lại mật khẩu" ở nút trên rồi mới bấm. Hoàn thành suôn sẻ. |
| M07-P03 | Success | OK | OK | OK | OK | OK | 29s | 0 | 0 | 1 | Thao tác cẩn thận, bấm đúng nút chính ngay lần đầu. |
| M07-P04 | Partial | OK | OK | OK | NO | OK | 56s | 1 | 0 | 4 | Bấm nhầm nút Quay lại do theo thói quen ngón cái với tới nút nằm thấp hơn ở cạnh dưới màn hình. Rất bực mình vì phải xin lại mã OTP. |
| M07-P05 | Success | OK | OK | OK | OK | OK | 31s | 0 | 0 | 2 | Thao tác nhanh, không bấm nhầm nhưng nhận xét: "Nút quay lại nên làm chữ xám hoặc nút viền, để 2 nút to đùng màu xanh nhìn rất kỳ". |
| M07-P06 | Partial | OK | OK | OK | NO | OK | 49s | 1 | 0 | 3 | Bấm nhầm nút Quay lại khi vừa gõ xong OTP. Nhận xét giao diện thiếu nút gửi lại mã sau 60s như các app ngân hàng. |
| M07-P07 | Success | OK | OK | OK | OK | OK | 33s | 0 | 0 | 2 | Đọc kỹ trước khi chạm, bấm đúng nút Đặt lại mật khẩu. |

## 3. Câu trả lời khảo sát sau kịch bản

| Participant | QD1 (Độ dễ 1->5) | QD2 (Tự tin 1->5) | Q06 (Bị nhầm do 2 nút cùng màu) | Q07 (Đánh giá ô OTP đơn điệu) | Q11 (Vấn đề lớn nhất) | Q12 (Khía cạnh vi phạm) |
|---|---|---|---|---|---|---|
| M07-P01 | 3 | 2 | 5 (Rất nhầm lẫn) | 4 (Khó thao tác) | 2 nút cùng màu xanh gây bấm nhầm | Phân cấp thị giác (P3) |
| M07-P02 | 2 | 4 | 4 (Dễ nhầm nếu không đọc kỹ) | 3 (Bình thường) | 2 nút giống hệt nhau | Tiêu chuẩn & nhất quán (N4) |
| M07-P03 | 1 | 5 | 3 (Nhận thấy nhưng không bấm nhầm) | 3 (Bình thường) | Không có vấn đề đáng kể | Tính linh hoạt & hiệu quả (N7) |
| M07-P04 | 4 | 2 | 5 (Rất nhầm lẫn) | 4 (Khó thao tác) | Mất dữ liệu khi bấm trúng nút quay lại | Ngăn ngừa lỗi (N5) |
| M07-P05 | 2 | 4 | 4 (Thiếu phân cấp) | 3 (Bình thường) | Nút quay lại không đúng chuẩn UI | Tính thẩm mỹ & tối giản (N8) |
| M07-P06 | 3 | 3 | 5 (Rất nhầm lẫn) | 4 (Thiếu đếm ngược) | Bấm nhầm nút quay lại phải làm lại | Phục hồi lỗi (N9) |
| M07-P07 | 2 | 4 | 3 (Hơi bối rối) | 3 (Bình thường) | Thiếu đếm ngược OTP | Hiển thị trạng thái (N1) |

## 4. Bảng tổng hợp chỉ số Usability định lượng

| Chỉ số đo lường (Usability Metric) | Giá trị thực nghiệm | Tiêu chuẩn Benchmark khuyến nghị | Đánh giá Usability |
|---|---|---|---|
| **Tỷ lệ thành công ngay lần đầu (First-time Success)** | **57.1%** (4/7) | >= 90% | **Kém** (Hơn 40% người dùng bị lỡ nhịp) |
| **Tỷ lệ bấm nhầm nút Quay lại (Misclick / Slip Rate)** | **42.9%** (3/7) | <= 5% | **Nghiêm trọng** (Do thiếu phân cấp thị giác) |
| **Thời gian hoàn thành trung bình (Mean Time)** | **40.6 giây** | <= 25 giây | Kéo dài do 3 người phải làm lại bước 1 |
| **Thời gian trung vị (Median Time)** | **34.0 giây** | <= 25 giây | Đạt mức khá đối với người không bấm nhầm |
| **Số lần bấm nhầm trung bình (Mean Slip Errors)** | **0.43 lần/người** | <= 0.05 lần/người | Trực tiếp phản ánh lỗi Visual Hierarchy |
| **Độ dễ cảm nhận trung bình (QD1 Mean)** | **2.43 / 5** | <= 2.0 (Thang 1 Rất dễ) | Mức độ trung bình |
| **Mức độ tự tin trung bình (QD2 Mean)** | **3.43 / 5** | >= 4.5 (Thang 5 Tự tin) | Bị sụt giảm mạnh ở nhóm người bấm nhầm |
