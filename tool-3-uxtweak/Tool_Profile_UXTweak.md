# Hồ sơ Công cụ — UXTweak cho EShop Mobile App (React Native / Expo)

> **Dự án:** Usability Testing cho hệ thống EShop
> **Phân hệ phụ trách:** **Mobile App** (React Native / Expo) — hành trình mua hàng trên thiết bị di động
> **Vai trò trong đề tài Seminar:** Mảnh ghép kiểm thử trải nghiệm di động chuyên biệt, **bổ trợ và hoàn thiện phân hệ Web đã được kiểm thử bởi Tool 2 (UXReality)**.
> **Trạng thái:** Tài liệu hồ sơ công cụ và năng lực ứng dụng thực tế.

---

## 1. UXTweak là gì và vai trò trong đề tài?

**UXTweak** là nền tảng nghiên cứu trải nghiệm người dùng từ xa (Remote UX Research Platform) đa năng, tích hợp nhiều phương pháp kiểm thử: **Website Testing**, **Session Recording**, **Heatmaps**, **Tree Testing**, **Card Sorting**, **First Click Testing** và **Mobile Testing**.

### Định vị phân công trong đề tài Seminar:
Để tránh trùng lặp nội dung và tối ưu hóa tài nguyên nghiên cứu, toàn bộ hệ thống EShop được phân định kiểm thử rõ ràng giữa hai công cụ:
* **Tool 2 (UXReality):** Chuyên trách đánh giá 2 phân hệ Web trên máy tính — **Customer Web** và **Admin Web** (8 task kiểm thử).
* **Tool 3 (UXTweak):** Chuyên trách đánh giá phân hệ **Mobile App (React Native / Expo)** (8 task kiểm thử Usability trọng tâm, tập trung 100% vào trải nghiệm người dùng và công thái học cảm ứng), đánh giá hành vi người dùng trên màn hình cảm ứng di động.

> **Lưu ý nguyên tắc:** UXTweak không thay thế các công cụ kiểm thử chức năng tự động (Functional Automation Test) hay kiểm thử API/CSDL, mà tập trung vào **hiệu quả tương tác, tính dễ dùng và độ mượt mà trong trải nghiệm của người dùng thật**.

---

## 2. UXTweak giải quyết các câu hỏi nghiên cứu nào trên Mobile?

1. **Khả năng nhận diện & tìm kiếm:** Người dùng điện thoại có dễ dàng tiếp cận thanh tìm kiếm và đọc đúng thông tin sản phẩm trên màn hình nhỏ không?
2. **Độ nhạy & phản hồi thao tác cảm ứng:** Nút "Thêm vào giỏ" trên Mobile có phản hồi tức thời không, hay gây hiểu nhầm do cách hiển thị popup `Alert.alert` chặn màn hình?
3. **Phát hiện bug logic code qua hành vi:** Người dùng phản ứng như thế nào khi gặp lỗi số lượng tự cộng 1 (`parsed + 1`) trong giỏ hàng Mobile? Họ có tìm được cách khắc phục (workaround) hay bỏ cuộc?
4. **An toàn thao tác & Ngăn ngừa lỗi:** Thao tác xóa món hàng và quy trình nhập liệu thanh toán (số điện thoại, mã giảm giá) có bảo vệ người dùng khỏi sai sót không?
5. **Năng lực công cụ:** UXTweak hỗ trợ thu thập những bằng chứng định lượng (thời gian, tỉ lệ thành công, click stream) và định tính (survey cảm nhận) trên môi trường di động hiệu quả đến mức nào?

---

## 3. Quy trình thực hiện Usability Testing với UXTweak trên Mobile

```
[Khởi tạo Study Mobile trên UXTweak]
          ↓
[Cấu hình User Task & Bảng câu hỏi sau task (QD1, QD2, Heuristics)]
          ↓
[Mở ứng dụng Mobile (Expo Go) kết nối Backend qua IP LAN 192.168.10.13:3000]
          ↓
[Người tham gia nhận link test UXTweak trên smartphone & thực hiện kịch bản]
          ↓
[Thu thập: Session Recording + Click/Tap Flow + Khảo sát phản hồi tức thời]
          ↓
[Phân tích kết quả: Task Outcome, Time-on-Task, Usability Issues & Mapping P1-P10 / N1-N10]
```

---

## 4. Bảng thuật ngữ chuyên dụng

| Thuật ngữ | Định nghĩa trong nghiên cứu |
|---|---|
| **Mobile Usability Testing** | Kiểm thử khả năng sử dụng của ứng dụng di động trên thiết bị thật với người dùng mục tiêu. |
| **Participant / Tester** | Người tham gia kiểm thử (7 người thực tế, ký hiệu M01-P01 → M01-P07). |
| **Tap Stream / Click Path** | Chuỗi thao tác chạm, cuộn và tương tác màn hình được UXTweak ghi lại tự động. |
| **Single Ease Question (QD1)** | Thang đo độ dễ chuẩn 1–5 (1: Rất dễ → 5: Rất khó) đo lường ngay sau mỗi nhiệm vụ. |
| **Confidence Level (QD2)** | Thang đo mức độ tự tin vào kết quả thao tác (1: Hoàn toàn không tự tin → 5: Rất tự tin). |
| **Workaround** | Hành vi người dùng tự tìm cách "lách" qua lỗi code để hoàn thành mục tiêu (ví dụ: gõ số 2 để app nhảy ra 3). |
