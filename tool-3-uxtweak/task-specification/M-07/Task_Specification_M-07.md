# Đặc tả Task — M-07: Khôi phục mật khẩu qua OTP & Đánh giá phân cấp thị giác nút điều hướng

> **Vai trò:** Mobile Customer (Quên thông tin đăng nhập)
> **Phạm vi:** Mobile App (React Native / Expo)
> **Nguồn:** EShop FR-02, FR-20
> **Trọng tâm kiểm thử Usability:** Đánh giá mức độ rõ ràng của cấu trúc phân cấp thị giác (Visual Hierarchy), khả năng phân biệt giữa hành động chính (Primary Action) và hành động hủy/quay lại (Cancel/Dismiss), cùng khả năng tương tác với ô nhập mã OTP trên di động. Không có lỗi logic mã nguồn.

## 1. Thông tin chung

- **Task ID:** M-07
- **Tên task:** Khôi phục mật khẩu qua OTP & Đánh giá phân cấp thị giác nút điều hướng
- **Vai trò:** Mobile Customer
- **FR liên quan:** FR-02, FR-20
- **UI/UX principles dự kiến:** P2 (Clarity & Affordance), P3 (Visual Hierarchy), P5 (Feedback & Guidance)
- **Nielsen heuristics dự kiến:** N1 (Visibility of system status), N4 (Consistency and standards), N7 (Flexibility and efficiency of use)
- **Priority:** P1
- **Phiên bản task:** v1.0
- **Môi trường:** Mobile App (Expo Go); backend tại IP LAN 192.168.10.13:3000

## 2. User task

> Bạn không nhớ mật khẩu tài khoản `customer@eshop.com`. Hãy chọn tính năng "Quên mật khẩu?" tại màn hình đăng nhập, yêu cầu nhận mã OTP qua email, sau đó nhập mã OTP được cấp và thiết lập mật khẩu mới để lấy lại quyền truy cập tài khoản.

## 3. Điều kiện ban đầu (Preconditions)

- **Trạng thái đăng nhập:** Chưa đăng nhập.
- **Trạng thái màn hình:** Đang ở màn hình Đăng nhập (Login Screen).
- **Tài khoản thử nghiệm:** `customer@eshop.com`.
- **Mã OTP mô phỏng trên testbed:** Khi gửi yêu cầu, backend sinh mã OTP và hiển thị hoặc gửi về hộp thư test (ví dụ mã mặc định `1234`).

## 4. Tiêu chí thành công

| ID | Điều kiện cần quan sát | Loại | Cách xác minh |
|---|---|---|---|
| SC-01 | Người tham gia chạm đúng nút "Quên mật khẩu?" tại màn hình Đăng nhập | Navigation | Chuyển đến màn hình Quên Mật Khẩu bước 1 |
| SC-02 | Người tham gia nhập email và bấm "Lấy mã OTP" | Action | Hệ thống chuyển sang bước 2 hiển thị ô nhập OTP và mật khẩu mới |
| SC-03 | Người tham gia nhập mã OTP và mật khẩu mới | Form Input | Hoàn tất điền cả 2 trường thông tin |
| SC-04 | Người tham gia phân biệt đúng và chạm nút "Đặt lại mật khẩu" mà KHÔNG bấm nhầm vào nút "← Quay lại" | Usability / Visual Hierarchy | Chạm chính xác nút Primary Action, không bấm nhầm nút Cancel cùng màu |
| SC-05 | Người tham gia hoàn tất đổi mật khẩu thành công | Outcome | Nhận thông báo "Đổi mật khẩu thành công!" và quay lại màn hình Login |

**Phân loại kết quả task:**
- **Success:** Hoàn thành đầy đủ từ SC-01 đến SC-05, bấm chuẩn xác nút "Đặt lại mật khẩu" ngay lần đầu tiên.
- **Partial:** Bị bấm nhầm vào nút "← Quay lại" (do 2 nút cùng màu xanh lục và cùng kích thước), làm mất dữ liệu OTP/mật khẩu vừa gõ và phải thực hiện lại bước 1.
- **Fail:** Bấm nhầm nút "← Quay lại" nhiều lần hoặc bối rối không biết mã OTP có hiệu lực bao lâu nên dừng kịch bản.
- **Invalid:** Backend không phản hồi dịch vụ OTP.

## 5. Câu hỏi khảo sát sau task

- **QD1:** Đánh giá mức độ dễ dàng khi thực hiện đặt lại mật khẩu (Thang 1 Rất dễ -> 5 Rất khó).
- **QD2:** Mức độ tự tin khi bấm nút xác nhận (Thang 1 Rất không tự tin -> 5 Rất tự tin).
- **Q06:** Bạn có nhận thấy hai nút "Đặt lại mật khẩu" và "← Quay lại" có màu sắc và kích thước giống hệt nhau không? Bạn có bị nhầm lẫn giữa hai nút này không?
- **Q07:** Trường nhập OTP có dễ thao tác không? Bạn có mong muốn ô OTP tự động tách thành 4 ô vuông và tự nhận diện tin nhắn không?
- **Q11, Q12:** Góp ý mở về bố cục các nút điều hướng.

## 6. Ghi chú quan sát chuyên sâu cho Reviewer

- **Trọng tâm Usability 1 — Vi phạm phân cấp thị giác nghiêm trọng (`App.js` dòng 876-887):**
  ```javascript
  <TouchableOpacity
    style={styles.greenButton}
    onPress={handleResetPassword}
  >
    <Text style={styles.buttonText}>Đặt lại mật khẩu</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={styles.greenButton}
    onPress={() => setForgotStep(1)}
  >
    <Text style={styles.buttonText}>← Quay lại</Text>
  </TouchableOpacity>
  ```
  Nút chính (Primary CTA) và nút phụ (Secondary Action / Hủy) đều mang cùng màu xanh lục `#10b981`, cùng chiều cao, cùng độ rộng full-width, đặt xếp chồng sát nhau. Đây là lỗi thiết kế kinh điển vi phạm nguyên tắc **Visual Hierarchy (P3)** và **Nielsen N4 (Consistency & Standards)**.
- **Trọng tâm Usability 2 — Thiếu Affordance và tính năng hiện đại của trường OTP (N7):**
  Ô nhập OTP chỉ là một `TextInput` thông thường, không có layout chia 4 ô số (Digit OTP blocks), không có cơ chế `textContentType="oneTimeCode"` để tự động điền mã xác thực.
- **Trọng tâm Usability 3 — Thiếu đồng hồ đếm ngược gửi lại OTP (N1):**
  Hệ thống không hiển thị thời gian mã OTP hết hạn hoặc đồng hồ đếm ngược cho phép gửi lại mã (Resend countdown).
