# Data Result — U-03

> **DỮ LIỆU GIẢ LẬP (SIMULATION), không phải phiên Userbrain thật.** Dùng 10 participant giả lập cho mỗi task; session thực tế = 0. Các số liệu được sinh theo scenario/assumption ghi dưới đây.

## 1. Tóm tắt giả lập

| Chỉ số | Giá trị mô phỏng |
|---|---:|
| Task / FR | U-03 / FR-02 |
| Vai trò setup | Customer Web |
| Synthetic participant | 10 (SIM-U-03-P01…P10) |
| Session thực tế | 0 |
| Simulated outcome | Success 8/10 (80%); Partial 0/10; Fail 2/10; Invalid 0 |
| Mean / median time | 58.2s / 58s |
| Mean observable errors | 1.10 |
| QD1 difficulty mean (1–5) | 2.50 |
| QD2 confidence mean (1–5) | 3.90 |

## 2. Fixture và giả định mô phỏng

- Fixture theo [userbrain_test_fixtures.md](../fixtures/userbrain_test_fixtures.md).
- Mô phỏng dựa trên backend lock state +180s ở lần sai thứ hai, thông báo ở request sau.
- Participant rows chi tiết nằm trong [simulated_results_n10.csv](../fixtures/simulated_results_n10.csv), lọc TaskId=U-03.
- Outcome/time/errors/ratings là dữ liệu được dựng để minh họa báo cáo; không dùng như bằng chứng người dùng hoặc kết luận về build thực tế.

## 3. Expected theo source/SRS

SRS: +1 counter mỗi lần sai, khóa 30s từ lần thứ ba. Code baseline: counter +2, lock 180s từ lần thứ hai, thông báo ở request kế tiếp.

## 4. Kết quả participant thực tế

Chưa có. Không nhập các metrics mô phỏng vào bảng kết quả thật của Userbrain.

