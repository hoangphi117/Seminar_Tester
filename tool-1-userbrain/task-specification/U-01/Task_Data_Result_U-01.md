# Data Result — U-01


## 1. Kết quả task

| Chỉ số | Kết quả |
|---|---:|
| Task / FR | U-01 / FR-12 |
| Vai trò | Customer |
| Số phiên hợp lệ | 10 |
| Success / Partial / Fail | 6 / 2 / 2 |
| Success rate | 60.0% |
| Median / mean time | 68.0s / 76.5s |
| Mean observable errors | 1.10 |
| QD1 difficulty mean (1–5) | 2.80 |
| QD2 confidence mean (1–5) | 3.50 |

## 2. Quan sát được nêu trong report

Người dùng có trường hợp được chuyển hướng về trang chủ nhưng không có thông báo quyền; một trường hợp nhầm trang Admin trắng là lỗi tải. Có 4/10 người bối rối hơn 60 giây theo phần phân tích issue.

Ví dụ participant được report nêu: U01-P02 (Success), U01-P05 (Fail), U01-P08 (Partial). Đây là các mã dẫn chiếu; chi tiết bằng chứng nằm trong Userbrain Report, không tái tạo transcript/video trong file này.

## 3. Expected theo task và SUT

Thực hiện task theo tiêu chí trong [Task Specification](Task_Specification_U-01.md). Các sai lệch code/FR và khuyến nghị được trình bày trong [Userbrain Report](../../Userbrain_Report.md), mục 6.

## 4. Nguồn và mức chi tiết

Nguồn số liệu: Userbrain Report, mục 5.2, 5.5 và UB-01. Bảng CSV [userbrain_task_aggregates.csv](../fixtures/userbrain_task_aggregates.csv) lưu các metrics gộp từ report; đây không phải raw participant export và không chứa dữ liệu từng phiên.