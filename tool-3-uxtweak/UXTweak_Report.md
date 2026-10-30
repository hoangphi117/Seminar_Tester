# Báo cáo UXTweak — Usability Testing trên EShop Mobile App (React Native / Expo)

> **Trạng thái:** Báo cáo kết quả nghiên cứu hoàn chỉnh sau các phiên kiểm thử thực tế.
> **Phân hệ phụ trách:** **Mobile App** (React Native / Expo) — bao gồm 8 kịch bản kiểm thử Usability trọng tâm ([M-01](task-specification/M-01/Task_Specification_M-01.md) → [M-08](task-specification/M-08/Task_Specification_M-08.md)).
> **Phân công đề tài Seminar:** Phân hệ Web (Customer Web & Admin Web) đã được đánh giá bởi **Tool 2 (UXReality)**. Báo cáo này tập trung 100% vào việc khám phá và đánh giá trải nghiệm người dùng trên ứng dụng di động thông qua công cụ **UXTweak**.
> **Khung phân tích chuẩn:** 10 Nguyên tắc Thiết kế UI/UX (P1–P10) và 10 Heuristic của Nielsen (N1–N10).

---

## Tóm tắt điều hành (Executive Summary)

- **Mục đích nghiên cứu:** Đánh giá toàn diện khả năng hoàn thành hành trình mua hàng, đăng ký, xác thực và quản lý tài khoản của người tiêu dùng thực tế trên ứng dụng di động **EShop Mobile App**; phát hiện các điểm nghẽn tương tác trên màn hình cảm ứng, lỗi phân cấp thị giác, thiếu rào cản phòng ngừa lỗi và các bẫy điều hướng ngõ cụt (Dead-end states). Kịch bản kiểm thử tập trung thuần túy vào Usability, không phụ thuộc vào lỗi chức năng hay lỗi logic code.
- **Quy mô thực nghiệm:** **7 người tham gia thực tế (ký hiệu P01 → P07)** thực hiện 8 nhiệm vụ kiểm thử độ khả dụng, hoàn thành tổng cộng **56 lượt task sessions**. 100% phiên kiểm thử được ghi nhận video màn hình, chuỗi thao tác và khảo sát phản hồi chuẩn hóa.
- **Kết quả tổng quát trên Mobile App (56 sessions):**
  - **Tỉ lệ Thành công (Success):** **31 / 56 lượt (55.4%)**
  - **Tỉ lệ Bán phần (Partial):** **21 / 56 lượt (37.5%)**
  - **Tỉ lệ Thất bại (Fail):** **4 / 56 lượt (7.1%)**
  - **Thời gian hoàn thành trung bình:** **50.5 giây/nhiệm vụ**
  - **Điểm độ khó cảm nhận trung bình (QD1):** **2.50 / 5.0** (1 Rất dễ → 5 Rất khó)
  - **Điểm độ tự tin trung bình (QD2):** **3.52 / 5.0** (1 Rất không tự tin → 5 Rất tự tin)
  - **Số lỗi thao tác trung bình:** **0.82 lỗi/lượt**
- **Các phát hiện Usability trọng yếu (Key Usability Findings):**
  1. **Điểm mù biểu mẫu nhập mật khẩu (Task [M-06](task-specification/M-06/Task_Data_Result_M-06.md) — 42.9% Success):** Trường mật khẩu đòi hỏi 4 tiêu chí phức tạp nhưng bị che hoàn toàn bởi `secureTextEntry`, **hoàn toàn thiếu icon con mắt bật/tắt hiển thị**. Người dùng liên tục gõ nhầm ký tự trên bàn phím ảo nhỏ và không biết mình sai ở đâu, khiến 14.3% bỏ cuộc.
  2. **Xung đột phân cấp thị giác gây bấm nhầm (Task [M-07](task-specification/M-07/Task_Data_Result_M-07.md) — 42.9% Misclick):** Nút chính "Đặt lại mật khẩu" và nút hủy "← Quay lại" đều mang cùng màu xanh lục đậm và cùng kích thước, khiến 3/7 người dùng bấm nhầm nút quay lại, làm mất sạch mã OTP và mật khẩu vừa nhập.
  3. **Bẫy điều hướng ngõ cụt (Task [M-08](task-specification/M-08/Task_Data_Result_M-08.md) — 14.3% Abandon):** Khi gặp sản phẩm rỗng/hết hàng, màn hình chỉ hiện 1 dòng text mà không hề có nút Quay lại, khiến người dùng lúng túng tưởng app bị treo và có người phải tắt hẳn ứng dụng.
  4. **Bất tiện công thái học giỏ hàng & An toàn thao tác:** Thiếu bộ điều khiển Stepper (+/-) ở Task [M-03](task-specification/M-03/Task_Data_Result_M-03.md), đứt gãy giỏ khi bắt đăng nhập checkout ở Task [M-04](task-specification/M-04/Task_Data_Result_M-04.md), và thiếu xác nhận hủy đơn ở Task [M-05](task-specification/M-05/Task_Data_Result_M-05.md).

---

## 1. Giới thiệu & Định vị Nghiên cứu

### 1.1. Bối cảnh & Phân công công việc
Trong hệ thống bán hàng đa kênh EShop, ứng dụng di động đóng vai trò sống còn trong việc giữ chân khách hàng cá nhân. 
Để bài báo cáo seminar đạt tính bao quát và không bị lặp lại công việc:
* **Tool 2 (UXReality):** Đã đánh giá chuyên sâu 8 task trên môi trường Desktop Web (Customer Web và Admin Web).
* **Tool 3 (UXTweak):** Được phân công chuyên trách khảo sát hành vi người dùng trên **Mobile App (React Native)** thông qua 8 kịch bản Usability xuyên suốt:
  - **Khám phá & Chọn mua:** Tìm kiếm & hiển thị ảnh ([M-01](task-specification/M-01/Task_Specification_M-01.md)) → Thêm giỏ & Phản hồi trạng thái ([M-02](task-specification/M-02/Task_Specification_M-02.md)) → Khám phá chi tiết SP & Phục hồi ngõ cụt ([M-08](task-specification/M-08/Task_Specification_M-08.md)).
  - **Giỏ hàng & Thanh toán:** Quản lý giỏ hàng & Công thái học Stepper ([M-03](task-specification/M-03/Task_Specification_M-03.md)) → Luồng checkout & Áp coupon ([M-04](task-specification/M-04/Task_Specification_M-04.md)).
  - **Xác thực & Bảo vệ an toàn:** An toàn thao tác hủy đơn ([M-05](task-specification/M-05/Task_Specification_M-05.md)) → Đăng ký & Mật khẩu ẩn ([M-06](task-specification/M-06/Task_Specification_M-06.md)) → Khôi phục OTP & Phân cấp thị giác ([M-07](task-specification/M-07/Task_Specification_M-07.md)).

### 1.2. Câu hỏi nghiên cứu trọng tâm (Research Questions)
* **RQ1 (Tìm kiếm & Hiển thị):** Bố cục danh sách và thanh tìm kiếm trên màn hình điện thoại có trực quan không? Hình ảnh hiển thị có chuẩn mực không?
* **RQ2 (Phản hồi tương tác):** Cơ chế thông báo sau khi thêm vào giỏ hàng trên mobile có giúp người dùng an tâm tiếp tục mua sắm?
* **RQ3 (Biểu mẫu & Phòng ngừa lỗi):** Việc thiếu tính năng hiện mật khẩu (Eye toggle) và thiếu checklist inline ảnh hưởng như thế nào đến trải nghiệm khi đăng ký?
* **RQ4 (Phân cấp thị giác & An toàn thao tác):** Người dùng có bị nhầm lẫn khi các nút hành động trái ngược (Lưu vs Quay lại) có màu sắc giống hệt nhau không?
* **RQ5 (Quyền kiểm soát & Phục hồi điều hướng):** Người dùng phản ứng ra sao khi rơi vào màn hình ngõ cụt (Dead-end screen) không có lối thoát rõ ràng?
* **RQ6 (Đánh giá công cụ UXTweak):** Nền tảng UXTweak phát huy hiệu quả như thế nào khi đo lường các chỉ số khả dụng trên thiết bị di động?

---

## 2. Phương pháp Kiểm thử & Đối tượng tham gia

### 2.1. Đối tượng tham gia (n = 7)
Nhóm tuyển chọn **7 người tham gia thực tế (P01 → P07)**:
* Sở hữu điện thoại thông minh (Android/iOS), cài đặt sẵn ứng dụng Expo Go.
* Thường xuyên mua sắm online qua app di động ít nhất 2 lần/tháng.
* Thực hiện tuần tự 8 nhiệm vụ trên cùng một thiết bị và mạng LAN kết nối máy chủ backend.

### 2.2. Danh mục 8 Kịch bản Kiểm thử

| Task ID | Tên kịch bản | Mô tả nhiệm vụ đưa cho người dùng | Tiêu chí thành công chính |
|---|---|---|---|
| **[M-01](task-specification/M-01/Task_Specification_M-01.md)** | Tìm sản phẩm & Báo giá | *"Tìm sản phẩm 'AirPods Pro 2' trên app và cho biết giá hiển thị."* | SC-01: Định vị sản phẩm.<br>SC-02: Báo đúng giá 6.000.000 đ. |
| **[M-02](task-specification/M-02/Task_Specification_M-02.md)** | Thêm vào giỏ hàng | *"Thêm sản phẩm 'AirPods Pro 2' vào giỏ và xem thông báo của app."* | SC-01: Bấm nút Thêm giỏ.<br>SC-02: Nhận biết thông báo thành công. |
| **[M-03](task-specification/M-03/Task_Specification_M-03.md)** | Chỉnh số lượng & Xóa | *"Đổi số lượng AirPods thành 3 và xóa Keychron Q1 khỏi giỏ hàng."* | SC-01: Nhập số lượng 3.<br>SC-02: Xóa Keychron.<br>SC-03: Giỏ đúng 3 món. |
| **[M-04](task-specification/M-04/Task_Specification_M-04.md)** | Áp coupon & Thanh toán | *"Đăng nhập, áp mã SAVE10 và hoàn tất đặt hàng COD."* | SC-01: Đăng nhập.<br>SC-02: Áp mã giảm giá.<br>SC-03: Tạo đơn hàng thành công. |
| **[M-05](task-specification/M-05/Task_Specification_M-05.md)** | Tra cứu & Hủy đơn | *"Vào Lịch sử đơn hàng, tìm đơn Chờ xác nhận và thực hiện hủy đơn."* | SC-01: Định vị đơn pending.<br>SC-02: Bấm nút Hủy.<br>SC-03: Đơn đổi sang Đã hủy. |
| **[M-06](task-specification/M-06/Task_Specification_M-06.md)** | Đăng ký & Mật khẩu ẩn | *"Đăng ký tài khoản mới với mật khẩu bảo mật theo yêu cầu hệ thống."* | SC-01: Vào Đăng ký.<br>SC-02: Điền tên & email.<br>SC-03: Nhập mật khẩu đúng chuẩn.<br>SC-04: Tạo tài khoản thành công. |
| **[M-07](task-specification/M-07/Task_Specification_M-07.md)** | Khôi phục OTP & Phân cấp nút | *"Yêu cầu cấp mã OTP qua email, nhập mã OTP và đặt lại mật khẩu mới."* | SC-01: Yêu cầu OTP.<br>SC-02: Nhập OTP & MK mới.<br>SC-03: Bấm Đặt lại mật khẩu (tránh nút quay lại). |
| **[M-08](task-specification/M-08/Task_Specification_M-08.md)** | Chi tiết SP & Phục hồi ngõ cụt | *"Xem chi tiết sản phẩm Keychron Q1, sau đó thoát khỏi màn hình sản phẩm rỗng."* | SC-01: Mở chi tiết SP.<br>SC-02: Đọc thông số.<br>SC-03: Thoát khỏi trang rỗng an toàn. |

---

## 3. Tổng hợp Kết quả Thực nghiệm trên Mobile App

### 3.1. Bảng số liệu tổng hợp 8 Task (56 Sessions từ 7 người tham gia)

| Task ID | Nhiệm vụ kiểm thử | Success (Thành công) | Partial (Bán phần) | Fail (Thất bại) | Thời gian TB | Số lỗi thao tác TB | Độ khó cảm nhận QD1 | Độ tự tin QD2 |
|---|---|---|---|---|---|---|---|---|
| **[M-01](task-specification/M-01/Task_Data_Result_M-01.md)** | Tìm kiếm sản phẩm | **7 / 7 (100.0%)** | 0 / 7 (0.0%) | 0 / 7 (0.0%) | **30.1s** | 0.14 | **1.43 (Rất dễ)** | **4.86 (Rất cao)** |
| **[M-02](task-specification/M-02/Task_Data_Result_M-02.md)** | Thêm vào giỏ hàng | **7 / 7 (100.0%)** | 0 / 7 (0.0%) | 0 / 7 (0.0%) | **38.0s** | 0.29 | **2.00 (Dễ)** | **4.43 (Cao)** |
| **[M-03](task-specification/M-03/Task_Data_Result_M-03.md)** | Chỉnh số lượng & Xóa | **0 / 7 (0.0%)** ⚠️ | **5 / 7 (71.4%)** | **2 / 7 (28.6%)** | **92.1s** | **2.86** | **4.29 (Rất khó)** | **2.00 (Rất thấp)** |
| **[M-04](task-specification/M-04/Task_Data_Result_M-04.md)** | Coupon & Thanh toán | **4 / 7 (57.1%)** | 3 / 7 (42.9%) | 0 / 7 (0.0%) | **69.4s** | 0.71 | **2.43 (Bình thường)** | **3.71 (Trung bình)** |
| **[M-05](task-specification/M-05/Task_Data_Result_M-05.md)** | Tra cứu & Hủy đơn | **3 / 7 (42.9%)** | 4 / 7 (57.1%) | 0 / 7 (0.0%) | **35.4s** | 0.29 | **1.86 (Dễ)** | **4.00 (Khá cao)** |
| **[M-06](task-specification/M-06/Task_Data_Result_M-06.md)** | Đăng ký & Mật khẩu ẩn | **3 / 7 (42.9%)** | 3 / 7 (42.9%) | 1 / 7 (14.3%) | **53.0s** | 1.00 | **2.86 (Trung bình)** | **3.00 (Trung bình)** |
| **[M-07](task-specification/M-07/Task_Data_Result_M-07.md)** | Khôi phục OTP & Phân cấp nút | **4 / 7 (57.1%)** | 3 / 7 (42.9%) | 0 / 7 (0.0%) | **40.6s** | 0.43 | **2.43 (Bình thường)** | **3.43 (Khá)** |
| **[M-08](task-specification/M-08/Task_Data_Result_M-08.md)** | Chi tiết SP & Thoát trang rỗng | **3 / 7 (42.9%)** | 3 / 7 (42.9%) | 1 / 7 (14.3%) | **45.4s** | 0.86 | **2.71 (Trung bình)** | **2.71 (Hơi thấp)** |
| **TỔNG HỢP MOBILE** | **8 kịch bản Usability** | **31 / 56 (55.4%)** | **21 / 56 (37.5%)** | **4 / 56 (7.1%)** | **50.5s** | **0.82** | **2.50** | **3.52** |

---

### 3.2. Phân tích chi tiết các vấn đề Usability cốt lõi

#### Task M-06: Ma sát biểu mẫu & Sự thiếu hụt rào cản phòng ngừa lỗi (Error Prevention)
* Tỷ lệ thành công chỉ đạt **42.9%**, có 1 người bỏ cuộc (Fail) và 3 người phải thử lại nhiều lần (Partial).
* **Vấn đề cốt lõi:** Mật khẩu đòi hỏi độ phức tạp cao (hoa, thường, số, ký tự đặc biệt) nhưng lại bị che hoàn toàn bằng dấu chấm tròn mà **không có icon con mắt để hiển thị/ẩn**. Trên bàn phím ảo điện thoại nhỏ, người dùng thường xuyên bấm nhầm phím ký tự đặc biệt mà không hề hay biết.
* Không có phản hồi inline (thanh đo độ mạnh hoặc checklist chuyển màu xanh), người dùng chỉ biết mình nhập thiếu khi bấm "Đăng Ký" và nhận popup lỗi chung chung.
* Nút "Đăng Ký" sử dụng màu đỏ rực (`styles.redButton`), vốn theo mô hình tâm lý (Mental Model) là màu của hành động nguy hiểm/xóa dữ liệu, gây hoang mang cho người dùng mới.

#### Task M-07: Đứt gãy luồng khôi phục do vi phạm phân cấp thị giác (Visual Hierarchy)
* Có tới **42.9% (3/7 người dùng)** bấm nhầm vào nút "← Quay lại" thay vì nút "Đặt lại mật khẩu".
* **Vấn đề cốt lõi:** Cả hai nút "Đặt lại mật khẩu" (Primary Action) và "← Quay lại" (Cancel/Back Action) đều có cùng màu xanh lục đậm (`styles.greenButton`), cùng chiều cao và độ rộng full-width, được xếp chồng sát nhau. Người dùng thao tác nhanh bằng ngón cái rất dễ chạm trúng nút phía dưới, làm màn hình văng về bước 1 và mất toàn bộ OTP vừa nhập.
* Trường nhập OTP đơn điệu, không chia 4 ô số và thiếu bộ đếm thời gian gửi lại mã OTP (Resend countdown).

#### Task M-08: Bẫy điều hướng ngõ cụt (Dead-End State Trap)
* Tỷ lệ thành công chỉ đạt **42.9%**; 42.9% người dùng bị mất phương hướng (Lostness) và 14.3% (1 người) buộc phải tắt ứng dụng hoàn toàn.
* **Vấn đề cốt lõi:** Khi người dùng truy cập một sản phẩm không có dữ liệu/hết hàng, ứng dụng hiển thị một màn hình trắng chỉ chứa 1 dòng chữ thông báo mà **hoàn toàn không có nút Quay lại, không có nút Tiếp tục mua hàng, không hỗ trợ gesture vuốt để Back**.
* Người dùng thiếu kinh nghiệm công nghệ tưởng app bị crash hoặc đơ màn hình, dẫn đến việc thoát hẳn ứng dụng (Drop-off).
* Hình ảnh sản phẩm bị méo dẹt do thuộc tính `resizeMode="stretch"`, làm suy giảm thẩm mỹ và tính cao cấp của sản phẩm công nghệ.

#### Các kịch bản M-01 → M-05: Điểm nghẽn giao diện và an toàn thao tác
* **M-01 & M-02:** Tìm kiếm nhanh (30.1s) nhưng ảnh bị méo do stretch; thêm giỏ kích hoạt Alert chặn màn hình gây đứt gãy luồng mua.
* **M-03 (0% Success):** Quản lý giỏ hàng: Bất tiện trên màn hình cảm ứng do thiếu nút Stepper (+/-), người dùng phải chạm ô nhỏ gõ thủ công; cộng hưởng với hiện tượng phản hồi nhảy số khiến 100% người dùng bối rối và xóa đi gõ lại nhiều lần.
* **M-04:** Bấm thanh toán khi chưa đăng nhập làm mất trắng giỏ hàng (thiếu lưu `AsyncStorage`), thiếu màn hình tóm tắt xác nhận đơn hàng trước khi submit.
* **M-05:** Nút Hủy đơn hủy ngay tức khắc, hoàn toàn thiếu Confirm Dialog gây cảm giác bất an khi quản lý đơn hàng.

---

## 4. Bảng tổng hợp các Vấn đề Usability (Mobile Issues Log)

| Mã Issue | Tên vấn đề phát hiện | Vi phạm Principles | Vi phạm Heuristics | Mức độ nghiêm trọng | Giải pháp khắc phục đề xuất |
|---|---|---|---|---|---|
| **ISS-M-06-01** | **Form mật khẩu thiếu Toggle ẩn/hiện (Eye icon) & thiếu inline feedback** | P2 (Affordance), P8 (Error Prevention) | N1 (Status), N5 (Error Prevention), N9 (Recovery) | **MAJOR** | Bổ sung nút icon con mắt để bật/tắt `secureTextEntry`; hiển thị checklist thời gian thực đánh dấu xanh các tiêu chuẩn mật khẩu đã đạt. |
| **ISS-M-07-01** | **Vi phạm phân cấp thị giác:** Nút Đặt lại MK và nút Quay lại cùng màu xanh lục đậm | P3 (Visual Hierarchy), P2 (Clarity) | N4 (Consistency & Standards) | **MAJOR** | Đổi nút "← Quay lại" thành dạng viền mảnh (Outlined button) hoặc nút chữ xám (Ghost button), giữ màu xanh nổi bật cho nút chính. |
| **ISS-M-08-01** | **Bẫy điều hướng ngõ cụt:** Màn hình sản phẩm trống không có nút quay lại | P8 (Error Recovery) | N3 (User Control & Freedom), N9 (Recovery) | **MAJOR** | Bổ sung nút bấm to rõ ràng: *"← Quay lại danh mục sản phẩm"* và nút *"Về trang chủ"* khi màn hình không có dữ liệu. |
| **ISS-M-05-01** | Nút Hủy đơn hủy ngay lập tức, hoàn toàn thiếu Confirmation Dialog | P8 (Error Prevention) | N3 (User Control), N5 (Error Prevention) | **MAJOR** | Bổ sung hộp thoại cảnh báo: *"Bạn có chắc chắn muốn hủy đơn hàng này?"* trước khi gọi API hủy. |
| **ISS-M-03-01** | Thiếu bộ điều khiển tăng/giảm nhanh (+ / - Stepper) trên cảm ứng | P7 (Ergonomics) | N7 (Flexibility & Efficiency), N3 (Control) | **MAJOR** | Thiết kế bộ nút bấm Stepper `[ - ]  3  [ + ]` to bản để người dùng điều chỉnh số lượng bằng 1 cú chạm ngón cái. |
| **ISS-M-03-02** | Nút Xóa món hàng trong giỏ xóa ngay không có xác nhận | P8 (Error Prevention) | N3 (User Control), N5 (Error Prevention) | **MAJOR** | Bổ sung `Alert.alert` với 2 lựa chọn "Hủy" và "Xóa" để tránh việc người dùng vô tình chạm nhầm. |
| **ISS-M-04-01** | Bắt đăng nhập làm mất trắng giỏ hàng hiện tại | P8 (Error Recovery) | N3 (User Control), N5 (Error Prevention) | **MAJOR** | Lưu giỏ hàng tạm vào bộ nhớ máy (`AsyncStorage`) trước khi chuyển sang màn hình Đăng nhập. |
| **ISS-M-04-02** | Thiếu bước xác nhận tóm tắt đơn hàng (Order Review) trước khi thanh toán | P10 (Transparency) | N3 (Control), N5 (Error Prevention) | **MAJOR** | Bổ sung màn hình xem lại tổng tiền, địa chỉ giao hàng và mã coupon trước khi gửi lệnh đặt hàng. |
| **ISS-M-02-01** | Popup `Alert.alert` chặn màn hình khi thêm giỏ hàng | P5 (Feedback & Guidance) | N8 (Aesthetic & Minimalist) | **MAJOR** | Thay thế popup Alert bằng thanh thông báo Toast nhẹ tự biến mất sau 1.5 giây. |
| **ISS-M-06-02** | Nút chính "Đăng Ký" dùng màu đỏ cảnh báo (`redButton`) | P3 (Visual Hierarchy) | N4 (Consistency & Standards) | **MINOR** | Đổi nút Đăng ký sang màu xanh dương thương hiệu thống nhất với nút Sign In. |
| **ISS-M-07-02** | Ô nhập OTP dạng text đơn lẻ, thiếu định dạng ô số và đếm ngược | P5 (Feedback) | N1 (Status), N7 (Flexibility) | **MINOR** | Thiết kế lại thành 4 ô số riêng biệt, hỗ trợ `textContentType="oneTimeCode"` và bộ đếm ngược 60s gửi lại mã. |
| **ISS-M-01-01** | Ảnh sản phẩm bị méo lệch do `resizeMode="stretch"` | P2 (Clarity & Affordance) | N8 (Aesthetic & Minimalist) | **MINOR** | Đổi thuộc tính ảnh thành `resizeMode="contain"` để bảo toàn tỉ lệ hình ảnh gốc. |

---

## 5. Đánh giá Năng lực Công cụ UXTweak trên Môi trường Mobile

### 5.1. Ưu điểm nổi bật
1. **Tiếp cận người dùng tự nhiên:** Tester thực hiện bài kiểm tra trực tiếp trên điện thoại cá nhân thông qua đường link study duy nhất; thao tác chạm vuốt diễn ra chân thực, phản ánh đúng thói quen hàng ngày.
2. **Khảo sát phản xạ tức thì:** Bộ câu hỏi sau task (QD1, QD2, Likert) bật lên ngay sau khi người dùng kết thúc nhiệm vụ, giúp ghi nhận chính xác cảm xúc bực bội tại Task M-03, M-06, M-07 mà không bị phai nhạt theo thời gian.
3. **Định lượng chính xác ma sát thao tác:** Tỷ lệ bấm nhầm (Misclick rate 42.9% ở M-07) và thời gian ngập ngừng bế tắc (Mean time 53.0s ở M-06) là bằng chứng không thể chối cãi về khiếm khuyết Visual Hierarchy và Form Usability.

### 5.2. So sánh đối chiếu: Tool 2 (UXReality) vs Tool 3 (UXTweak)

| Tiêu chí đối chiếu | Tool 2: UXReality (Đánh giá Web) | Tool 3: UXTweak (Đánh giá Mobile) |
|---|---|---|
| **Phân hệ đảm nhiệm** | Customer Web & Admin Web (Máy tính) | Mobile App (Điện thoại cảm ứng) |
| **Phương thức tương tác** | Chuột, bàn phím, màn hình lớn | Chạm (Tap), vuốt (Scroll), bàn phím ảo |
| **Thế mạnh công nghệ** | Theo dõi hướng nhìn (Eye-tracking), cảm xúc khuôn mặt | Bản đồ thao tác chạm, funnel tỷ lệ rớt, đo lường misclick |
| **Kết quả đóng góp cho đề tài** | Khám phá các vấn đề cấu trúc bảng biểu, quản trị đơn hàng | Phát hiện các rào cản usability trên di động (mật khẩu ẩn, nút cùng màu, ngõ cụt điều hướng, thiếu stepper) |

---

## 6. Kết luận & Lộ trình Khắc phục Khuyến nghị cho Mobile App

### 6.1. Kết luận
Kiểm thử khả năng sử dụng trên Mobile App bằng UXTweak đã làm nổi bật các điểm nghẽn then chốt trong thiết kế trải nghiệm người dùng di động:
* **Công thái học cảm ứng:** Thiếu bộ điều khiển Stepper tăng/giảm số lượng trong giỏ hàng và ô nhập OTP đơn điệu gây khó khăn cho việc thao tác bằng một tay.
* **Phân cấp thị giác & Nhận thức:** Việc để nút chính và nút hủy dùng chung màu xanh lục (M-07) trực tiếp gây ra 42.9% tỷ lệ bấm nhầm; nút Đăng ký màu đỏ gây tâm lý e ngại.
* **Phòng ngừa lỗi & Lối thoát khẩn cấp:** Mật khẩu bị che kín không có nút xem lại (M-06), nút Hủy đơn thiếu hộp thoại xác nhận (M-05) và màn hình rỗng không có nút quay lại (M-08) tước đoạt quyền kiểm soát tự do của khách hàng.

### 6.2. Lộ trình khắc phục khuyến nghị
* **Ưu tiên 1 (Cải tiến An toàn thao tác & Lối thoát điều hướng trong 2 ngày):**
  * Bổ sung nút "← Quay lại danh mục" và "Về trang chủ" tại màn hình chi tiết sản phẩm rỗng để xóa bỏ bẫy ngõ cụt.
  * Bổ sung Confirmation Dialog trước khi thực thi lệnh Hủy đơn hàng và Xóa sản phẩm khỏi giỏ.
* **Ưu tiên 2 (Cải tiến Usability biểu mẫu & Phân cấp thị giác trong 3 ngày):**
  * Thêm nút bật/tắt hiển thị mật khẩu (Eye icon) và checklist đo độ mạnh mật khẩu tại form Đăng ký.
  * Phân biệt rõ ràng màu sắc nút trong màn hình Quên mật khẩu: nút "Đặt lại mật khẩu" màu xanh nổi bật, nút "← Quay lại" đổi sang nút viền xám hoặc text link.
  * Thêm cặp nút stepper `+` / `-` trong giỏ hàng để chỉnh số lượng nhanh bằng 1 chạm.
* **Ưu tiên 3 (Hoàn thiện trải nghiệm vi mô trong 1 tuần):**
  * Thay thế popup `Alert.alert` thêm giỏ bằng thông báo Toast tự tắt.
  * Lưu trữ giỏ hàng vào `AsyncStorage` để không bị mất khi chuyển sang đăng nhập.
  * Điều chỉnh `resizeMode="contain"` cho ảnh sản phẩm.

---

**Video Demo & Bằng chứng kiểm thử Mobile:** [https://youtu.be/clZZ81Av7XY](https://youtu.be/clZZ81Av7XY)
