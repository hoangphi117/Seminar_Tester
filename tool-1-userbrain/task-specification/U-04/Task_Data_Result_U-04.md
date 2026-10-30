# Data Result — U-04


## 1. Kết quả task

| Chỉ số | Kết quả |
|---|---:|
| Task / FR | U-04 / FR-19 |
| Vai trò | Admin |
| Số phiên hợp lệ | 10 |
| Success / Partial / Fail | 7 / 2 / 1 |
| Success rate | 70.0% |
| Median / mean time | 114.0s / 119.5s |
| Mean observable errors | 1.10 |
| QD1 difficulty mean (1–5) | 2.60 |
| QD2 confidence mean (1–5) | 4.00 |

## 2. Quan sát được nêu trong report

Bảng thiếu search và khó quét. Report ghi nhận nguy cơ self-delete khi nút xóa hiển thị trên dòng Admin đang đăng nhập; một trường hợp làm phiên đăng nhập bị thoát.

Ví dụ participant được report nêu: U04-P02 (Success), U04-P05 (Partial), U04-P08 (Fail). Đây là các mã dẫn chiếu; chi tiết bằng chứng nằm trong Userbrain Report, không tái tạo transcript/video trong file này.

## 3. Expected theo task và SUT

Thực hiện task theo tiêu chí trong [Task Specification](Task_Specification_U-04.md). Các sai lệch code/FR và khuyến nghị được trình bày trong [Userbrain Report](../../Userbrain_Report.md), mục 6.

## 4. Nguồn và mức chi tiết

Nguồn số liệu: Userbrain Report, mục 5.2, 5.5 và UB-07. Bảng CSV [userbrain_task_aggregates.csv](../fixtures/userbrain_task_aggregates.csv) lưu các metrics gộp từ report; đây không phải raw participant export và không chứa dữ liệu từng phiên.