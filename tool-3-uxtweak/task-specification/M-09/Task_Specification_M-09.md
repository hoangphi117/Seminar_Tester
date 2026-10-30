# Đặc tả Task — M-09: Khám phá thông tin chi tiết sản phẩm & Đánh giá khả năng phục hồi khi gặp trang trống

> **Vai trò:** Mobile Customer
> **Phạm vi:** Mobile App (React Native / Expo)
> **Nguồn:** EShop FR-05, FR-20
> **Trọng tâm kiểm thử Usability:** Đánh giá khả năng quét thông tin (Information Scannability), nhận diện cử chỉ đa phương tiện (Media Affordance) và khả năng kiểm soát/phục hồi của người dùng khi truy cập vào một sản phẩm không tồn tại (Dead-End State / Trap Navigation). Kiểm thử thuần khả năng sử dụng, không chứa bug logic.

## 1. Thông tin chung

- **Task ID:** M-09
- **Tên task:** Khám phá thông tin chi tiết sản phẩm & Đánh giá khả năng phục hồi khi gặp trang trống
- **Vai trò:** Mobile Customer
- **FR liên quan:** FR-05, FR-20
- **UI/UX principles dự kiến:** P2 (Clarity & Affordance), P3 (Visual Hierarchy), P8 (Error Prevention & Recovery)
- **Nielsen heuristics dự kiến:** N1 (Visibility of system status), N3 (User control and freedom), N8 (Aesthetic and minimalist design), N9 (Help users recognize and recover from errors)
- **Priority:** P2
- **Phiên bản task:** v1.0
- **Môi trường:** Mobile App (Expo Go); backend tại IP LAN 192.168.10.13:3000

## 2. User task

> Phần 1: Từ màn hình chính, bạn hãy bấm vào xem chi tiết sản phẩm "Bàn phím cơ Keychron Q1", tìm đọc thông số kỹ thuật và quan sát hình ảnh sản phẩm.
> Phần 2: Sau đó, thử bấm vào một mục sản phẩm đặc biệt trong danh mục khuyến mãi (được thiết lập dữ liệu trống/đã hết hàng) và tìm cách quay trở lại danh sách sản phẩm ban đầu để tiếp tục mua sắm.

## 3. Điều kiện ban đầu (Preconditions)

- **Trạng thái đăng nhập:** Tùy ý (đã hoặc chưa đăng nhập).
- **Trạng thái màn hình:** Đang ở màn hình Danh sách sản phẩm (Home Screen).
- **Dữ liệu chuẩn bị:** Sản phẩm ID 2 (Keychron Q1) có đầy đủ dữ liệu; một đường dẫn/nút thử nghiệm mở sản phẩm ID rỗng (ID 999 hoặc object `{}`) mô phỏng sản phẩm bị ẩn hoặc lỗi liên kết.

## 4. Tiêu chí thành công

| ID | Điều kiện cần quan sát | Loại | Cách xác minh |
|---|---|---|---|
| SC-01 | Người tham gia mở thành công màn hình Chi tiết sản phẩm Keychron Q1 | Navigation | Giao diện hiển thị chi tiết sản phẩm với ảnh, giá, mô tả |
| SC-02 | Người tham gia định vị và đọc được thông tin mô tả chi tiết sản phẩm | Scannability | Tìm đúng thông tin đặc tính bàn phím trong khối mô tả |
| SC-03 | Người tham gia nhận biết chất lượng hiển thị hình ảnh (tỉ lệ ảnh có bị méo mó hay không) | Visual / Affordance | Đánh giá hình ảnh hiển thị qua `resizeMode` |
| SC-04 | Người tham gia truy cập sản phẩm rỗng và cố gắng tìm cách thoát/quay lại màn hình chính | User Control & Freedom | Quan sát phản ứng khi gặp màn hình thông báo trắng trơn không có nút Back |

**Phân loại kết quả task:**
- **Success:** Hoàn thành xem chi tiết sản phẩm; khi gặp màn hình trống, người tham gia nhận biết tình trạng ngõ cụt và sử dụng thanh điều hướng trên cùng (NavBar brand logo/Home link) để thoát ra an toàn.
- **Partial:** Bối rối trước màn hình trống, phải vuốt mép màn hình (Back gesture) nhiều lần nhưng không có phản hồi, mất hơn 30s mới tìm thấy logo trên thanh Header để bấm về Home.
- **Fail:** Hoàn toàn bế tắc trước màn hình trắng trống rỗng, tưởng ứng dụng bị đóng băng (freeze/crash) và buộc phải tắt hẳn app (Force Close) để mở lại.
- **Invalid:** Mất kết nối API.

## 5. Câu hỏi khảo sát sau task

- **QD1:** Đánh giá mức độ dễ dàng khi đọc thông tin chi tiết sản phẩm (Thang 1 Rất dễ -> 5 Rất khó).
- **QD2:** Mức độ dễ dàng khi muốn quay lại màn hình trước đó từ trang sản phẩm trống (Thang 1 Rất dễ -> 5 Rất khó).
- **Q01:** Hình ảnh sản phẩm hiển thị trên màn hình có bị méo mó hay biến dạng tỉ lệ không?
- **Q03:** Khi gặp màn hình thông báo "Sản phẩm không tồn tại", bạn có cảm thấy mình bị rơi vào ngõ cụt (Dead-end) không có đường thoát không?
- **Q11, Q12:** Bạn mong muốn giao diện chi tiết sản phẩm cải tiến thêm những thành phần nào?

## 6. Ghi chú quan sát chuyên sâu cho Reviewer

- **Trọng tâm Usability 1 — Bẫy điều hướng ngõ cụt (Dead-End Trap State - N3, N9):**
  Trong `App.js` dòng 544-550:
  ```javascript
  if (Object.keys(product).length === 0) {
    return renderScreen(
      <View style={styles.padded}>
        <Text>Sản phẩm không tồn tại (Lỗi trắng trang do data rỗng)</Text>
      </View>,
    );
  }
  ```
  Khi sản phẩm rỗng, app render một `View` chỉ chứa duy nhất một dòng `Text` thông báo, **hoàn toàn không có nút "Quay lại", không có nút "Tiếp tục mua hàng", không hỗ trợ gesture vuốt để Back**. Đây là vi phạm nghiêm trọng nguyên tắc **Nielsen N3: User Control & Freedom** (Bẫy người dùng vào trạng thái bế tắc).
- **Trọng tâm Usability 2 — Trải nghiệm hiển thị ảnh sản phẩm (P2, N8):**
  Thuộc tính `resizeMode="stretch"` kéo dãn hình ảnh để lấp đầy khung 240dp, làm méo mó tỉ lệ gốc của sản phẩm phần cứng công nghệ. Thiếu chỉ báo vuốt ảnh (Carousel indicators).
- **Trọng tâm Usability 3 — Bố cục thông tin dạng khối thô (P3):**
  Toàn bộ mô tả kỹ thuật bị dồn vào một thẻ `<Text>` không phân đoạn tab (Tổng quan / Thông số / Đánh giá), gây mệt mỏi thị giác khi đọc trên màn hình di động hẹp.
