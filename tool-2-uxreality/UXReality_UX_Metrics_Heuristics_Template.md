# UXReality -- UX Metrics & Evaluation Questions Template

> **Mục đích:** Chuẩn hóa các chỉ số tổng hợp và câu hỏi khảo sát thu
> thập từ UXReality để phục vụ bước phân tích sau theo **UI/UX Design
> Principles** và **Nielsen's 10 Usability Heuristics**. Tài liệu này
> chỉ lưu dữ liệu, câu hỏi và mối liên hệ đánh giá; không chứa phân
> tích, kết luận hoặc đề xuất cải thiện.
>
> **Quy ước:** Chỉ điền dữ liệu UXReality thực sự cung cấp hoặc dữ liệu
> có thể tính từ kết quả hợp lệ. Nếu không có dữ liệu, ghi `N/A`. Các
> câu hỏi khảo sát ở dưới là câu hỏi đề xuất để bổ sung dữ liệu, không
> mặc định là câu hỏi có sẵn trong UXReality.

## 1. Thông tin dữ liệu

  Trường                          Giá trị
  ------------------------------- ---------------------------
  Sản phẩm / website / ứng dụng   `[Tên]`
  Phiên bản được kiểm thử         `[Phiên bản]`
  Thời gian kiểm thử              `[Ngày hoặc khoảng ngày]`
  Số người tham gia hợp lệ        `[N]`
  Các tác vụ được kiểm thử        `[Danh sách ngắn]`
  Nguồn dữ liệu                   `UXReality`

## 2. Chỉ số UX tổng hợp

  --------------------------------------------------------------------------
  Mã         Chỉ số       Giá trị tổng Đơn vị           N hợp lệ Liên quan
                                   hợp                           đến nguyên
                                                                 tắc
  ---------- ---------- -------------- ---------- -------------- -----------
  M01        Tỷ lệ hoàn         `[__]` \%                 `[__]` Hiệu quả sử
             thành tác                                           dụng; H2,
             vụ                                                  H6, H7

  M02        Thời gian          `[__]` giây               `[__]` Hiệu suất;
             hoàn thành                                          H7
             trung bình                                          

  M03        Thời gian          `[__]` giây               `[__]` Hiệu suất;
             hoàn thành                                          H7
             trung vị                                            

  M04        Số lỗi             `[__]` lỗi/lượt           `[__]` H5, H9
             trung bình                                          
             mỗi lượt                                            

  M05        Tỷ lệ bỏ           `[__]` \%                 `[__]` H1, H2, H4,
             dở tác vụ                                           H6

  M06        Tỷ lệ cần          `[__]` \%                 `[__]` H6, H10
             trợ giúp                                            

  M07        Số lần             `[__]` lần                `[__]` H7
             click                                               
             trung bình                                          
             mỗi tác vụ                                          

  M08        Số lần             `[__]` lần                `[__]` H7
             tương tác                                           
             trung bình                                          
             mỗi tác vụ                                          

  M09        Thời gian    `[__ / N/A]` giây               `[__]` H1, H6
             đến tương                                           
             tác đầu                                             
             tiên                                                

  M10        Chỉ số chú   `[__ / N/A]` Theo nguồn         `[__]` Chỉ dùng
             ý / gaze                                            làm bằng
             có sẵn từ                                           chứng bổ
             nguồn                                               trợ, không
                                                                 tự suy ra
                                                                 heuristic
  --------------------------------------------------------------------------

**Ghi chú về H:** H1--H10 là mã Nielsen's 10 Usability Heuristics được
liệt kê tại mục 4. Mối liên hệ là hướng phân loại ban đầu, không phải
kết luận rằng chỉ số đó tự nó chứng minh có vi phạm heuristic.

### 2.1. Chỉ số theo tác vụ

  --------------------------------------------------------------------------------
  Mã tác   Tên tác vụ       Tỷ lệ hoàn  Thời gian     Số lỗi   Tỷ lệ bỏ   N hợp lệ
  vụ                         thành (%) trung bình trung bình     dở (%) 
                                           (giây)                       
  -------- ---------------- ---------- ---------- ---------- ---------- ----------
  T01      `[Tên tác vụ]`       `[__]`     `[__]`     `[__]`     `[__]`     `[__]`

  T02      `[Tên tác vụ]`       `[__]`     `[__]`     `[__]`     `[__]`     `[__]`

  T03      `[Tên tác vụ]`       `[__]`     `[__]`     `[__]`     `[__]`     `[__]`
  --------------------------------------------------------------------------------

## 3. SUS -- System Usability Scale

**Thang trả lời:** 1 = Hoàn toàn không đồng ý · 2 = Không đồng ý · 3 =
Trung lập · 4 = Đồng ý · 5 = Hoàn toàn đồng ý.

  ------------------------------------------------------------------------
  Mã           Câu hỏi SUS  Loại          Điểm trung bình         N hợp lệ
                                              câu trả lời 
                                                   (1--5) 
  ------------ ------------ ------------ ---------------- ----------------
  SUS01        Tôi nghĩ     Likert Scale           `[__]`           `[__]`
               rằng tôi                                   
               muốn sử dụng                               
               hệ thống này                               
               thường                                     
               xuyên.                                     

  SUS02        Tôi thấy hệ  Likert Scale           `[__]`           `[__]`
               thống này                                  
               phức tạp một                               
               cách không                                 
               cần thiết.                                 

  SUS03        Tôi nghĩ hệ  Likert Scale           `[__]`           `[__]`
               thống này dễ                               
               sử dụng.                                   

  SUS04        Tôi nghĩ     Likert Scale           `[__]`           `[__]`
               rằng tôi sẽ                                
               cần sự hỗ                                  
               trợ của                                    
               người có                                   
               kiến thức kỹ                               
               thuật để sử                                
               dụng hệ                                    
               thống này.                                 

  SUS05        Tôi thấy các Likert Scale           `[__]`           `[__]`
               chức năng                                  
               trong hệ                                   
               thống được                                 
               tích hợp                                   
               tốt.                                       

  SUS06        Tôi thấy có  Likert Scale           `[__]`           `[__]`
               quá nhiều                                  
               điểm không                                 
               nhất quán                                  
               trong hệ                                   
               thống này.                                 

  SUS07        Tôi nghĩ     Likert Scale           `[__]`           `[__]`
               rằng hầu hết                               
               mọi người sẽ                               
               học cách sử                                
               dụng hệ                                    
               thống này                                  
               rất nhanh.                                 

  SUS08        Tôi thấy hệ  Likert Scale           `[__]`           `[__]`
               thống này                                  
               khó sử dụng.                               

  SUS09        Tôi cảm thấy Likert Scale           `[__]`           `[__]`
               tự tin khi                                 
               sử dụng hệ                                 
               thống này.                                 

  SUS10        Tôi cần học  Likert Scale           `[__]`           `[__]`
               nhiều điều                                 
               trước khi có                               
               thể bắt đầu                                
               sử dụng hệ                                 
               thống này.                                 
  ------------------------------------------------------------------------

### 3.1. Chỉ số SUS tổng hợp

  Mã        Chỉ số                     Giá trị tổng hợp Đơn vị         N hợp lệ
  --------- ------------------------ ------------------ ------------ ----------
  SUS-M01   Điểm SUS trung bình                  `[__]` Điểm / 100       `[__]`
  SUS-M02   Điểm SUS trung vị                    `[__]` Điểm / 100       `[__]`
  SUS-M03   Độ lệch chuẩn điểm SUS         `[__ / N/A]` Điểm             `[__]`

**Quy tắc tính SUS:** Câu lẻ (1, 3, 5, 7, 9) đóng góp `câu trả lời − 1`;
câu chẵn (2, 4, 6, 8, 10) đóng góp `5 − câu trả lời`. Cộng 10 giá trị
đóng góp rồi nhân 2,5. Tính điểm cho từng phản hồi đủ 10 câu hợp lệ rồi
mới tổng hợp điểm SUS cá nhân. SUS là thước đo tổng quan, không xác định
riêng heuristic nào có vấn đề.

## 4. Danh mục Nielsen's 10 Usability Heuristics

Danh mục này dùng làm mã phân loại khi phân tích bằng chứng ở bước sau.

  -----------------------------------------------------------------------
  Mã                      Heuristic               Nội dung cần quan sát
  ----------------------- ----------------------- -----------------------
  H1                      Visibility of System    Có phản hồi, trạng thái
                          Status -- Hiển thị      tải, xác nhận hoặc tiến
                          trạng thái hệ thống     trình sau thao tác
                                                  không?

  H2                      Match Between the       Ngôn ngữ, biểu tượng,
                          System and the Real     thứ tự và khái niệm có
                          World -- Phù hợp với    gần với cách người dùng
                          thế giới thực           hiểu không?

  H3                      User Control and        Có quay lại, hủy, thoát
                          Freedom -- Quyền kiểm   hoặc hoàn tác khi cần
                          soát và tự do của người không?
                          dùng                    

  H4                      Consistency and         Các thành phần, thuật
                          Standards -- Tính nhất  ngữ và hành vi có nhất
                          quán và tiêu chuẩn      quán không?

  H5                      Error Prevention --     Giao diện có ngăn lỗi
                          Ngăn ngừa lỗi           trước khi xảy ra, xác
                                                  nhận hành động rủi ro
                                                  hoặc giới hạn đầu vào
                                                  không?

  H6                      Recognition Rather Than Có hiển thị lựa chọn,
                          Recall -- Nhận diện     hướng dẫn và thông tin
                          thay vì ghi nhớ         cần thiết thay vì yêu
                                                  cầu người dùng nhớ
                                                  không?

  H7                      Flexibility and         Luồng thao tác có hiệu
                          Efficiency of Use --    quả; có hỗ trợ người
                          Linh hoạt và hiệu quả   dùng thường xuyên khi
                          sử dụng                 phù hợp không?

  H8                      Aesthetic and           Nội dung có tập trung
                          Minimalist Design --    vào thông tin cần
                          Thiết kế thẩm mỹ và tối thiết, tránh nhiễu và
                          giản                    quá tải không?

  H9                      Help Users Recognize,   Thông báo lỗi có dễ
                          Diagnose, and Recover   hiểu, chỉ ra vấn đề và
                          from Errors -- Hỗ trợ   hướng khắc phục không?
                          nhận diện, chẩn đoán và 
                          khôi phục lỗi           

  H10                     Help and Documentation  Có hướng dẫn dễ tìm, dễ
                          -- Trợ giúp và tài liệu hiểu và tập trung vào
                                                  tác vụ không?
  -----------------------------------------------------------------------

## 5. Câu hỏi khảo sát gắn với UI/UX Design Principles và Nielsen Heuristics

> Các câu dưới đây là **câu hỏi đề xuất**, không phải tuyên bố rằng
> UXReality đã tích hợp sẵn. Dùng thang 1--5 cho Likert Scale; giữ
> nguyên cách diễn đạt và thang đo trong cùng một đợt khảo sát.

### Q01 -- Trạng thái và phản hồi của hệ thống

-   **Loại:** Likert Scale
-   **Câu hỏi:** Khi tôi thực hiện một thao tác, hệ thống cho tôi biết
    rõ thao tác đó đã được ghi nhận hoặc đang xử lý.
-   **Thang đo:** 1 = Hoàn toàn không đồng ý · 2 = Không đồng ý · 3 =
    Trung lập · 4 = Đồng ý · 5 = Hoàn toàn đồng ý
-   **Liên quan:** Feedback; Visibility of System Status (H1)

  Chỉ số tổng hợp             Giá trị
  ------------------------- ---------
  Điểm trung bình (1--5)       `[__]`
  Tỷ lệ chọn mức 4--5 (%)      `[__]`
  N hợp lệ                     `[__]`

### Q02 -- Ngôn ngữ và tính dễ hiểu

-   **Loại:** Likert Scale
-   **Câu hỏi:** Các thuật ngữ, nhãn và biểu tượng trên giao diện dễ
    hiểu đối với tôi.
-   **Thang đo:** 1--5 theo quy ước trên
-   **Liên quan:** Match Between System and Real World (H2); Clarity

  Chỉ số tổng hợp             Giá trị
  ------------------------- ---------
  Điểm trung bình (1--5)       `[__]`
  Tỷ lệ chọn mức 4--5 (%)      `[__]`
  N hợp lệ                     `[__]`

### Q03 -- Quyền kiểm soát

-   **Loại:** Likert Scale
-   **Câu hỏi:** Khi cần, tôi có thể dễ dàng quay lại, hủy thao tác hoặc
    thoát khỏi bước hiện tại.
-   **Thang đo:** 1--5 theo quy ước trên
-   **Liên quan:** User Control and Freedom (H3)

  Chỉ số tổng hợp             Giá trị
  ------------------------- ---------
  Điểm trung bình (1--5)       `[__]`
  Tỷ lệ chọn mức 4--5 (%)      `[__]`
  N hợp lệ                     `[__]`

### Q04 -- Tính nhất quán

-   **Loại:** Likert Scale
-   **Câu hỏi:** Các nút, biểu tượng, thuật ngữ và cách tương tác được
    sử dụng nhất quán trong sản phẩm.
-   **Thang đo:** 1--5 theo quy ước trên
-   **Liên quan:** Consistency and Standards (H4); Consistency

  Chỉ số tổng hợp             Giá trị
  ------------------------- ---------
  Điểm trung bình (1--5)       `[__]`
  Tỷ lệ chọn mức 4--5 (%)      `[__]`
  N hợp lệ                     `[__]`

### Q05 -- Ngăn ngừa lỗi

-   **Loại:** Likert Scale
-   **Câu hỏi:** Giao diện giúp tôi tránh được những thao tác sai hoặc
    phát hiện vấn đề trước khi hoàn tất thao tác.
-   **Thang đo:** 1--5 theo quy ước trên
-   **Liên quan:** Error Prevention (H5); Error Prevention

  Chỉ số tổng hợp             Giá trị
  ------------------------- ---------
  Điểm trung bình (1--5)       `[__]`
  Tỷ lệ chọn mức 4--5 (%)      `[__]`
  N hợp lệ                     `[__]`

### Q06 -- Nhận diện thay vì ghi nhớ

-   **Loại:** Likert Scale
-   **Câu hỏi:** Tôi có thể tìm thấy lựa chọn và thông tin cần thiết
    trên giao diện mà không phải ghi nhớ từ các bước trước.
-   **Thang đo:** 1--5 theo quy ước trên
-   **Liên quan:** Recognition Rather Than Recall (H6); Information
    Visibility

  Chỉ số tổng hợp             Giá trị
  ------------------------- ---------
  Điểm trung bình (1--5)       `[__]`
  Tỷ lệ chọn mức 4--5 (%)      `[__]`
  N hợp lệ                     `[__]`

### Q07 -- Hiệu quả thao tác

-   **Loại:** Likert Scale
-   **Câu hỏi:** Tôi có thể hoàn thành tác vụ với số bước và nỗ lực hợp
    lý.
-   **Thang đo:** 1--5 theo quy ước trên
-   **Liên quan:** Flexibility and Efficiency of Use (H7); Efficiency

  Chỉ số tổng hợp             Giá trị
  ------------------------- ---------
  Điểm trung bình (1--5)       `[__]`
  Tỷ lệ chọn mức 4--5 (%)      `[__]`
  N hợp lệ                     `[__]`

### Q08 -- Tính tối giản và tập trung

-   **Loại:** Likert Scale
-   **Câu hỏi:** Bố cục chỉ hiển thị lượng thông tin cần thiết để tôi
    hiểu và hoàn thành tác vụ.
-   **Thang đo:** 1--5 theo quy ước trên
-   **Liên quan:** Aesthetic and Minimalist Design (H8); Visual
    Hierarchy; Simplicity

  Chỉ số tổng hợp             Giá trị
  ------------------------- ---------
  Điểm trung bình (1--5)       `[__]`
  Tỷ lệ chọn mức 4--5 (%)      `[__]`
  N hợp lệ                     `[__]`

### Q09 -- Khôi phục sau lỗi

-   **Loại:** Likert Scale
-   **Câu hỏi:** Khi xảy ra lỗi, thông báo giúp tôi hiểu vấn đề và biết
    cách tiếp tục hoặc khắc phục.
-   **Thang đo:** 1--5 theo quy ước trên
-   **Liên quan:** Help Users Recognize, Diagnose, and Recover from
    Errors (H9); Error Recovery

  Chỉ số tổng hợp             Giá trị
  ------------------------- ---------
  Điểm trung bình (1--5)       `[__]`
  Tỷ lệ chọn mức 4--5 (%)      `[__]`
  N hợp lệ                     `[__]`

### Q10 -- Trợ giúp và hướng dẫn

-   **Loại:** Likert Scale
-   **Câu hỏi:** Khi không biết cách thực hiện một tác vụ, tôi có thể dễ
    dàng tìm được hướng dẫn phù hợp.
-   **Thang đo:** 1--5 theo quy ước trên
-   **Liên quan:** Help and Documentation (H10); Help and Guidance

  Chỉ số tổng hợp             Giá trị
  ------------------------- ---------
  Điểm trung bình (1--5)       `[__]`
  Tỷ lệ chọn mức 4--5 (%)      `[__]`
  N hợp lệ                     `[__]`

### Q11 -- Vấn đề gặp phải trong phiên kiểm thử

-   **Loại:** Multiple Choice
-   **Câu hỏi:** Bạn gặp những vấn đề nào khi thực hiện tác vụ? *(Có thể
    chọn nhiều đáp án.)*
-   **Lựa chọn:**
    -   Không rõ hệ thống đang xử lý hay đã hoàn tất
    -   Không hiểu nhãn, biểu tượng hoặc thuật ngữ
    -   Khó quay lại, hủy hoặc sửa thao tác
    -   Thành phần hoặc hành vi không nhất quán
    -   Khó biết cách tránh lỗi
    -   Phải ghi nhớ thông tin từ bước trước
    -   Có quá nhiều bước hoặc thao tác
    -   Giao diện có quá nhiều thông tin gây nhiễu
    -   Không hiểu thông báo lỗi hoặc cách khắc phục
    -   Không tìm được hướng dẫn
    -   Không gặp vấn đề nào
    -   Khác

  Phương án                                    Số lượt chọn   Tỷ lệ người trả lời chọn (%)
  ------------------------------------------ -------------- ------------------------------
  Không rõ trạng thái hệ thống                       `[__]`                         `[__]`
  Không hiểu nhãn / biểu tượng / thuật ngữ           `[__]`                         `[__]`
  Khó quay lại / hủy / sửa thao tác                  `[__]`                         `[__]`
  Không nhất quán                                    `[__]`                         `[__]`
  Khó tránh lỗi                                      `[__]`                         `[__]`
  Phải ghi nhớ thông tin                             `[__]`                         `[__]`
  Quá nhiều bước                                     `[__]`                         `[__]`
  Quá nhiều thông tin gây nhiễu                      `[__]`                         `[__]`
  Khó hiểu / khắc phục lỗi                           `[__]`                         `[__]`
  Không tìm được hướng dẫn                           `[__]`                         `[__]`
  Không gặp vấn đề nào                               `[__]`                         `[__]`
  Khác                                               `[__]`                         `[__]`

### Q12 -- Vấn đề cần ưu tiên xem xét

-   **Loại:** Single Choice
-   **Câu hỏi:** Khía cạnh nào ảnh hưởng nhiều nhất đến trải nghiệm của
    bạn trong phiên kiểm thử?
-   **Lựa chọn:** Trạng thái / phản hồi; Ngôn ngữ / tính dễ hiểu; Quyền
    kiểm soát; Tính nhất quán; Ngăn ngừa lỗi; Khả năng nhận diện thông
    tin; Hiệu quả thao tác; Tính tối giản; Khôi phục lỗi; Trợ giúp /
    hướng dẫn; Không có vấn đề đáng kể; Khác

  Phương án                        Số người chọn   Tỷ lệ (%)
  ------------------------------ --------------- -----------
  Trạng thái / phản hồi                   `[__]`      `[__]`
  Ngôn ngữ / tính dễ hiểu                 `[__]`      `[__]`
  Quyền kiểm soát                         `[__]`      `[__]`
  Tính nhất quán                          `[__]`      `[__]`
  Ngăn ngừa lỗi                           `[__]`      `[__]`
  Khả năng nhận diện thông tin            `[__]`      `[__]`
  Hiệu quả thao tác                       `[__]`      `[__]`
  Tính tối giản                           `[__]`      `[__]`
  Khôi phục lỗi                           `[__]`      `[__]`
  Trợ giúp / hướng dẫn                    `[__]`      `[__]`
  Không có vấn đề đáng kể                 `[__]`      `[__]`
  Khác                                    `[__]`      `[__]`

## 6. Bảng ánh xạ câu hỏi với nguyên tắc

  -----------------------------------------------------------------------
  Mã câu hỏi        Loại              Nguyên tắc chính  Heuristic
  ----------------- ----------------- ----------------- -----------------
  Q01               Likert Scale      Feedback /        H1
                                      Visibility        

  Q02               Likert Scale      Clarity / Match   H2
                                      to real world     

  Q03               Likert Scale      User control      H3

  Q04               Likert Scale      Consistency       H4

  Q05               Likert Scale      Error prevention  H5

  Q06               Likert Scale      Recognition over  H6
                                      recall            

  Q07               Likert Scale      Efficiency        H7

  Q08               Likert Scale      Simplicity /      H8
                                      Visual hierarchy  

  Q09               Likert Scale      Error recovery    H9

  Q10               Likert Scale      Help and guidance H10

  Q11               Multiple Choice   Các heuristic     H1--H10
                                      H1--H10           

  Q12               Single Choice     Các nguyên tắc /  H1--H10
                                      heuristic được    
                                      người dùng cảm    
                                      nhận là ảnh hưởng 
                                      nhiều nhất        
  -----------------------------------------------------------------------

## 7. Quy ước tổng hợp dữ liệu

-   Chỉ lưu dữ liệu tổng hợp, không lưu câu trả lời gắn với từng người
    tham gia.
-   Ghi rõ `N` hợp lệ cho từng chỉ số/câu hỏi.
-   Với Multiple Choice, tổng tỷ lệ phương án có thể vượt 100%.
-   Khi gộp các nhóm có quy mô mẫu khác nhau, không lấy trung bình đơn
    giản của các giá trị trung bình; sử dụng trung bình có trọng số theo
    số quan sát hợp lệ.
-   Điểm SUS phải được tính theo quy tắc chuẩn ở cấp phản hồi trước khi
    tổng hợp.
-   Không coi điểm trung bình khảo sát hoặc chỉ số hành vi là bằng chứng
    độc lập đủ để kết luận một heuristic bị vi phạm. Việc ánh xạ chỉ
    giúp tổ chức dữ liệu; đánh giá cuối cùng cần kết hợp quan sát giao
    diện, hành vi và ngữ cảnh tác vụ.
-   Nếu UXReality không cung cấp một chỉ số, ghi `N/A`. Các câu hỏi khảo
    sát đề xuất cần được triển khai riêng nếu nền tảng không hỗ trợ thu
    thập trực tiếp.
