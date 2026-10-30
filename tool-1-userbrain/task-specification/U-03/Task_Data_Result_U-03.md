# Data Result — U-03


## 1. Kết quả task

| Chỉ số | Kết quả |
|---|---:|
| Task / FR | U-03 / FR-02 |
| Vai trò | Customer |
| Số phiên hợp lệ | 10 |
| Success / Partial / Fail | 8 / 0 / 2 |
| Success rate | 80.0% |
| Median / mean time | 58.0s / 58.2s |
| Mean observable errors | 1.10 |
| QD1 difficulty mean (1–5) | 2.50 |
| QD2 confidence mean (1–5) | 3.90 |

## 2. Quan sát được nêu trong report

Backend đặt lock 180 giây; thông báo lock xuất hiện ở request kế tiếp. Report ghi nhận người dùng bấm lặp lại khi chưa hiểu trạng thái và góp ý thiếu đồng hồ đếm ngược.

Ví dụ participant được report nêu: U03-P01 (Success), U03-P06 (Fail), U03-P07 (Success). Đây là các mã dẫn chiếu; chi tiết bằng chứng nằm trong Userbrain Report, không tái tạo transcript/video trong file này.

## 3. Expected theo task và SUT

Thực hiện task theo tiêu chí trong [Task Specification](Task_Specification_U-03.md). Các sai lệch code/FR và khuyến nghị được trình bày trong [Userbrain Report](../../Userbrain_Report.md), mục 6.

## 4. Nguồn và mức chi tiết

Nguồn số liệu: Userbrain Report, mục 5.2, 5.5 và UB-04. Bảng CSV [userbrain_task_aggregates.csv](../fixtures/userbrain_task_aggregates.csv) lưu các metrics gộp từ report; đây không phải raw participant export và không chứa dữ liệu từng phiên.