# Data Result — M-05: Cập nhật thông tin cá nhân và số điện thoại trên Mobile

> **Task ID:** M-05 | **Vai trò:** Mobile Customer
> **Nguồn spec:** Task_Specification_M-05.md

## 1. Thông tin dữ liệu

| Trường | Giá trị |
|---|---|
| Task ID | M-05 |
| Số người (n) | 7 |
| Môi trường | Expo Go; tài khoản customer@eshop.com; backend IP LAN 192.168.10.13:3000 |

### Ghi chú code SUT — Bug xác thực số điện thoại

- **Bug Regex chặn số 0 đầu (`App.js` - `handleUpdateProfile`):**
  ```javascript
  if (!/^[1-9][0-9]{8,9}$/.test(phone)) {
    Alert.alert("Lỗi", "Số điện thoại không hợp lệ. Vui lòng nhập đúng 9-10 chữ số.");
    return;
  }
  ```
- **Xung đột UI:** Placeholder ô nhập liệu ghi rõ: `placeholder="VD: 0912345678"`. Khi người dùng gõ số điện thoại chuẩn Việt Nam (bắt đầu bằng 0), biểu thức regex này đánh trượt vì chỉ chấp nhận số bắt đầu từ 1 đến 9!

## 2. Kết quả từng người

| Participant | Outcome | SC-01 | SC-02 | Time | Errors | Assist | QD1 | Ghi chú hành vi |
|---|---|---|---|---|---|---|---|---|
| M05-P01 | Partial | OK | Partial | 68s | 2 | 0 | 4 | Gõ số 0988123456 bị báo lỗi. Thử lại 2 lần vẫn lỗi. Thử xóa số 0 đầu (thành 988123456) thì lưu thành công. Bực bội vì SĐT bị thiếu số 0. |
| M05-P02 | Fail | OK | FAIL | 105s | 3 | 1 | 5 | Nhập đúng số điện thoại cá nhân (090...), bấm Cập nhật bị popup báo lỗi liên tục. Tưởng do mạng, thử lại nhiều lần rồi bỏ cuộc. |
| M05-P03 | Partial | OK | Partial | 75s | 2 | 0 | 3 | Gõ 0912... bị lỗi. Đọc kỹ thông báo "nhập đúng 9-10 chữ số", thử xóa số 0 đầu tiên thì app nhận. Đánh giá app bị lỗi validation. |
| M05-P04 | Fail | OK | FAIL | 110s | 4 | 1 | 5 | Bực mình vì làm theo đúng placeholder ví dụ nhưng app vẫn bảo sai. Cần moderator giải thích lỗi code mới chịu dừng test. |
| M05-P05 | Partial | OK | Partial | 62s | 1 | 0 | 3 | Nhập SĐT cá nhân bị lỗi, nhanh trí xóa số 0 đầu tiên thì lưu được. Nhận xét form không thân thiện với người dùng VN. |
| M05-P06 | Partial | OK | Partial | 80s | 2 | 0 | 4 | Bị chặn bởi thông báo Alert. Thử đổi qua số điện thoại bàn không được, cuối cùng gõ bừa 9 chữ số bắt đầu bằng 9 thì qua. |
| M05-P07 | Partial | OK | Partial | 72s | 2 | 0 | 4 | Gặp lỗi ngay cú bấm đầu tiên. Sau khi loay hoay 1 phút đã dùng workaround xóa số 0 để hoàn thành task. |

## 3. Câu trả lời khảo sát

| Participant | QD1 | QD2 | Q05 | Q07 | Q11 | Q12 |
|---|---|---|---|---|---|---|
| M05-P01 | 4 | 2 | 1 | 2 | Thành phần hoặc hành vi không nhất quán | Ngăn ngừa lỗi |
| M05-P02 | 5 | 1 | 1 | 1 | Thông báo lỗi không rõ ràng, khó hiểu | Ngôn ngữ / tính dễ hiểu |
| M05-P03 | 3 | 3 | 2 | 2 | Thành phần hoặc hành vi không nhất quán | Khả năng kiểm soát |
| M05-P04 | 5 | 1 | 1 | 1 | Thông báo lỗi không rõ ràng, khó hiểu | Ngăn ngừa lỗi |
| M05-P05 | 3 | 3 | 2 | 2 | Thành phần hoặc hành vi không nhất quán | Khả năng kiểm soát |
| M05-P06 | 4 | 2 | 1 | 2 | Thành phần hoặc hành vi không nhất quán | Ngăn ngừa lỗi |
| M05-P07 | 4 | 2 | 2 | 2 | Thành phần hoặc hành vi không nhất quán | Ngăn ngừa lỗi |

## 4. Bảng tổng hợp

| Chỉ số | Giá trị |
|---|---|
| Success | 0 / 7 (0.0%) ⚠️ |
| Partial | 5 / 7 (71.4%) |
| Fail | 2 / 28.6% (28.6%) |
| Completion time — mean | 81.7s |
| Completion time — median | 75.0s |
| Observable errors — mean | 2.29 lỗi/lượt |
| Assistance required | 2 / 7 (28.6%) |
| QD1 mean (Độ dễ: 1 Rất dễ -> 5 Rất khó) | 4.00 (Khó) |
| QD2 mean (Mức tự tin: 1 Rất không -> 5 Rất tự tin) | 2.00 (Rất thấp) |
