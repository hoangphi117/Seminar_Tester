# Data Result — U-04

> **DỮ LIỆU GIẢ LẬP (SIMULATION), không phải phiên Userbrain thật.** Dùng 10 participant giả lập cho mỗi task; session thực tế = 0. Các số liệu được sinh theo scenario/assumption ghi dưới đây.

## 1. Tóm tắt giả lập

| Chỉ số | Giá trị mô phỏng |
|---|---:|
| Task / FR | U-04 / FR-19 |
| Vai trò setup | Admin |
| Synthetic participant | 10 (SIM-U-04-P01…P10) |
| Session thực tế | 0 |
| Simulated outcome | Success 7/10 (70%); Partial 2/10; Fail 1/10; Invalid 0 |
| Mean / median time | 115.9s / 114s |
| Mean observable errors | 1.10 |
| QD1 difficulty mean (1–5) | 2.60 |
| QD2 confidence mean (1–5) | 4.00 |

## 2. Fixture và giả định mô phỏng

- Fixture theo [userbrain_test_fixtures.md](../fixtures/userbrain_test_fixtures.md).
- Mô phỏng giả định trang list/search/delete user có sẵn; phải xác nhận UI trong pilot.
- Participant rows chi tiết nằm trong [simulated_results_n10.csv](../fixtures/simulated_results_n10.csv), lọc TaskId=U-04.
- Outcome/time/errors/ratings là dữ liệu được dựng để minh họa báo cáo; không dùng như bằng chứng người dùng hoặc kết luận về build thực tế.

## 3. Expected theo source/SRS

SRS: không lộ password và không cho xóa account đang login. Code baseline: GET bỏ password khỏi query; DELETE không chặn self-delete.

## 4. Kết quả participant thực tế

Chưa có. Không nhập các metrics mô phỏng vào bảng kết quả thật của Userbrain.

