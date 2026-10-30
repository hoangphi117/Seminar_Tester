# Data Result — U-02

> **DỮ LIỆU GIẢ LẬP (SIMULATION), không phải phiên Userbrain thật.** Dùng 10 participant giả lập cho mỗi task; session thực tế = 0. Các số liệu được sinh theo scenario/assumption ghi dưới đây.

## 1. Tóm tắt giả lập

| Chỉ số | Giá trị mô phỏng |
|---|---:|
| Task / FR | U-02 / FR-14 |
| Vai trò setup | Admin |
| Synthetic participant | 10 (SIM-U-02-P01…P10) |
| Session thực tế | 0 |
| Simulated outcome | Success 7/10 (70%); Partial 2/10; Fail 1/10; Invalid 0 |
| Mean / median time | 113.2s / 116.5s |
| Mean observable errors | 0.80 |
| QD1 difficulty mean (1–5) | 2.50 |
| QD2 confidence mean (1–5) | 3.90 |

## 2. Fixture và giả định mô phỏng

- Fixture theo [userbrain_test_fixtures.md](../fixtures/userbrain_test_fixtures.md).
- Mô phỏng giả định trang quản lý category có create/delete cơ bản; không phải UI evidence.
- Participant rows chi tiết nằm trong [simulated_results_n10.csv](../fixtures/simulated_results_n10.csv), lọc TaskId=U-02.
- Outcome/time/errors/ratings là dữ liệu được dựng để minh họa báo cáo; không dùng như bằng chứng người dùng hoặc kết luận về build thực tế.

## 3. Expected theo source/SRS

SRS: tạo/xem/xóa category, tên không rỗng. Code baseline: mutations cần JWT nhưng không role-check; POST không validate tên rỗng.

## 4. Kết quả participant thực tế

Chưa có. Không nhập các metrics mô phỏng vào bảng kết quả thật của Userbrain.

