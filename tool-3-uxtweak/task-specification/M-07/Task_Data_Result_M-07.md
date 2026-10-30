# Data Result — M-07: Đăng ký tài khoản mới & Đánh giá trải nghiệm thiết lập mật khẩu trên Mobile

> **Task ID:** M-07 | **Vai trò:** Mobile Visitor / Prospective Customer
> **Nguồn spec:** Task_Specification_M-07.md
> **Trọng tâm:** Usability Testing thuần túy trên biểu mẫu đăng ký di động, đánh giá ma sát nhận thức (Cognitive friction) và khả năng phòng ngừa lỗi (Error Prevention).

## 1. Thông tin dữ liệu thực nghiệm

| Trường | Giá trị |
|---|---|
| Task ID | M-07 |
| Số người tham gia (n) | 7 (Ký hiệu M07-P01 -> M07-P07) |
| Môi trường thực hiện | Ứng dụng Expo Go trên smartphone cá nhân; kết nối Backend LAN 192.168.10.13:3000 |
| Trạng thái ban đầu | Khách vãng lai tại màn hình Đăng nhập |

### Ghi chú mã nguồn SUT — Phân tích khiếm khuyết Usability

- **Thiếu icon hiển thị mật khẩu (`App.js` dòng 795-802):**
  ```javascript
  <Text style={styles.label}>Mật khẩu</Text>
  <TextInput
    style={styles.textInput}
    value={registerPassword}
    onChangeText={setRegisterPassword}
    secureTextEntry
  />
  <Text style={styles.hintText}>
    Yêu cầu: Tối thiểu 8 ký tự, có chữ hoa, chữ thường, số và ký tự đặc biệt.
  </Text>
  ```
  Trường nhập bị ẩn hoàn toàn bằng dấu chấm tròn (`secureTextEntry`). Hệ thống đòi hỏi 4 tiêu chí phức tạp nhưng không cung cấp bất kỳ cơ chế nào để người dùng kiểm tra xem mình đã gõ đúng ký tự đặc biệt trên bàn phím ảo hay chưa.
- **Nút hành động chính mang màu đỏ cảnh báo:**
  Nút submit sử dụng `styles.redButton` (`backgroundColor: "#dc2626"`). Người dùng có xu hướng khựng lại vì tưởng đây là nút hủy/xóa.

## 2. Kết quả chi tiết từng người tham gia (n = 7)

| Participant | Outcome | SC-01 | SC-02 | SC-03 | SC-04 | Time | Errors | Assist | QD1 | Ghi chú hành vi của người tham gia |
|---|---|---|---|---|---|---|---|---|---|---|
| M07-P01 | Partial | OK | OK | OK | OK | 58s | 2 | 0 | 3 | Gõ mật khẩu lần đầu bị thiếu ký tự đặc biệt. Lần 2 gõ ký tự @ nhưng bấm nhầm phím bên cạnh, hệ thống vẫn báo lỗi. Bực bội nói: "Sao không cho xem mật khẩu đang gõ cái gì?". Lần 3 gõ thật chậm mới thành công. |
| M07-P02 | Fail | OK | OK | NO | NO | 74s | 3 | 0 | 5 | Thử nhập mật khẩu 3 lần liên tiếp đều bị văng thông báo "Mật khẩu quá yếu!". Không rõ mình thiếu chữ hoa hay ký tự đặc biệt vì các chấm đen che hết. Bỏ cuộc không đăng ký tiếp. |
| M07-P03 | Success | OK | OK | OK | OK | 44s | 0 | 0 | 2 | Đọc kỹ dòng gợi ý trước khi gõ. Bật sẵn CapsLock và chuyển sang bàn phím ký tự để gõ cẩn thận `P@ssword123`. Hoàn thành suôn sẻ. |
| M07-P04 | Partial | OK | OK | OK | OK | 63s | 1 | 0 | 4 | Gõ nhầm 1 ký tự, muốn xóa sửa nhưng vì mật khẩu bị che nên đành xóa hết cả chuỗi mật khẩu gõ lại từ đầu. Góp ý nút màu đỏ nhìn như nút cảnh báo nguy hiểm. |
| M07-P05 | Success | OK | OK | OK | OK | 37s | 0 | 0 | 1 | Thao tác nhập liệu nhanh, quen dùng trình quản lý mật khẩu tự sinh nên điền thành công ngay lần đầu. |
| M07-P06 | Partial | OK | OK | OK | OK | 53s | 1 | 0 | 3 | Quên ký tự đặc biệt ở lần đầu do thói quen dùng mật khẩu thông thường. Bấm Đăng Ký thấy popup đỏ mới đọc lại dòng hint text phía dưới. |
| M07-P07 | Success | OK | OK | OK | OK | 42s | 0 | 0 | 2 | Nhập form bình thường, thắc mắc tại sao nút Đăng ký lại màu đỏ trong khi nút Đăng nhập ở màn hình trước lại màu xanh dương. |

## 3. Câu trả lời khảo sát sau kịch bản

| Participant | QD1 (Độ dễ 1->5) | QD2 (Tự tin 1->5) | Q05 (Chỉ rõ lỗi trước submit) | Q08 (Thiếu icon mắt gây ức chế) | Q11 (Vấn đề lớn nhất) | Q12 (Khía cạnh vi phạm) |
|---|---|---|---|---|---|---|
| M07-P01 | 3 | 2 | 1 (Hoàn toàn không) | 5 (Rất ức chế) | Không xem được mật khẩu đã gõ | Ngăn ngừa lỗi (N5) |
| M07-P02 | 5 | 1 | 1 (Hoàn toàn không) | 5 (Rất ức chế) | Không biết sai chỗ nào để sửa | Nhận biết & phục hồi lỗi (N9) |
| M07-P03 | 2 | 4 | 2 (Ít) | 3 (Bình thường) | Yêu cầu mật khẩu khá rườm rà | Thẩm mỹ & tối giản (N8) |
| M07-P04 | 4 | 2 | 1 (Hoàn toàn không) | 5 (Rất ức chế) | Xóa sửa ký tự gõ sai rất cực | Ngăn ngừa lỗi (N5) |
| M07-P05 | 1 | 5 | 3 (Trung bình) | 2 (Ít ảnh hưởng) | Không có vấn đề đáng kể | Tiêu chuẩn & nhất quán (N4) |
| M07-P06 | 3 | 3 | 2 (Ít) | 4 (Ức chế) | Thiếu thanh đo độ mạnh mật khẩu | Hiển thị trạng thái (N1) |
| M07-P07 | 2 | 4 | 2 (Ít) | 4 (Ức chế) | Nút đăng ký màu đỏ gây hoang mang | Nhất quán thị giác (P3) |

## 4. Bảng tổng hợp chỉ số Usability định lượng

| Chỉ số đo lường (Usability Metric) | Giá trị thực nghiệm | Tiêu chuẩn Benchmark khuyến nghị | Đánh giá Usability |
|---|---|---|---|
| **Tỷ lệ thành công (Success Rate)** | **42.9%** (3/7) | >= 80% | **Kém** (Rào cản tạo tài khoản cao) |
| **Tỷ lệ hoàn thành có ma sát (Partial)** | **42.9%** (3/7) | <= 15% | **Cao** (Người dùng phải gõ lại nhiều lần) |
| **Tỷ lệ bỏ cuộc (Fail Rate)** | **14.3%** (1/7) | 0% | **Báo động** (Mất khách hàng tiềm năng) |
| **Thời gian hoàn thành trung bình (Mean Time)** | **53.0 giây** | <= 30 giây | Chậm do thao tác gõ lại mật khẩu |
| **Thời gian trung vị (Median Time)** | **53.0 giây** | <= 30 giây | Phản ánh đúng độ trễ thao tác |
| **Số lỗi thao tác trung bình (Mean Errors)** | **1.00 lỗi/người** | <= 0.2 lỗi/người | Thường xuyên gõ sai ký tự ẩn |
| **Mức độ hỗ trợ kỹ thuật (Assistance)** | **0%** (0/7) | 0% | Người dùng tự xoay sở |
| **Độ dễ cảm nhận trung bình (QD1 Mean)** | **2.86 / 5** | <= 2.0 (Thang 1 Rất dễ) | Mức độ trung bình kém |
| **Mức độ tự tin trung bình (QD2 Mean)** | **3.00 / 5** | >= 4.2 (Thang 5 Tự tin) | Người dùng hoang mang khi gõ mật khẩu |
