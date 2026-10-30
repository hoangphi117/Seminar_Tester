# Userbrain Test Data — Fixture Set v1


| Task | Fixture | Dữ liệu / trạng thái ban đầu | Reset |
|---|---|---|---|
| U-01 | Customer role | Seed customer id=2, role `user`; session được operator setup trước, không đưa credential cho participant | Reset browser/session sau phiên |
| U-02 | Category create/delete | `Đồ dùng học tập`, bảo đảm chưa tồn tại | Xóa category test; reset DB nếu trạng thái không sạch |
| U-03 | Login lockout | `test@eshop.com`; `login_attempts=0`; `locked_until=NULL`; input password cố ý sai `Wrong-Password-01!` | Recreate DB từ seed trước từng phiên; một phiên trên mỗi fixture account |
| U-04 | User management | `QA-DELETE-ME`; `qa-delete-me@example.test`; role `user`; khác Admin đang đăng nhập | Xóa dummy user hoặc recreate DB sau phiên |

**Không có coupon fixture Userbrain:** UXReality đã dành A-05 (mở rộng) cho FR-17 quản lý coupon. Coupon checkout cũng đã có trong UXReality C-04 và UXTweak M-04. Vì vậy Userbrain không kiểm tra FR-17 để tránh trùng.

## Reset

Chỉ dùng DB sandbox riêng. Seed của EShop khởi chạy lại có thể drop/recreate toàn bộ bảng; không chạy cùng lúc với test khác dùng chung DB. Sau reset, setup lại Customer session và dummy U-04 record cần thiết. Không lưu giá trị mật khẩu hay token vào repository.
