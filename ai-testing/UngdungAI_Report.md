# VI. ỨNG DỤNG AI TRONG USABILITY TESTING

Trong quá trình thực hiện Usability Testing, AI có thể đóng vai trò là
công cụ hỗ trợ Tester trong việc xây dựng kịch bản kiểm thử, tạo dữ
liệu, phân tích giao diện, xử lý kết quả và đề xuất cải tiến. Việc ứng
dụng AI giúp giảm thời gian xử lý thủ công, mở rộng phạm vi phân tích và
hỗ trợ phát hiện những vấn đề tiềm ẩn trong trải nghiệm người dùng.

Trong phạm vi dự án EShop, nhóm sử dụng AI để minh họa ba hoạt động
chính: Generate Test Scenarios, Vision AI và Analyze Test Results. Các
kết quả do AI tạo ra được xem là thông tin tham khảo, cần được con người
kiểm tra và xác thực trước khi sử dụng làm kết luận chính thức.

## 1. AI hỗ trợ ở đâu trong quy trình?

AI có thể tham gia hỗ trợ ở nhiều giai đoạn của quy trình Usability
Testing:

-   **Planning (Lập kế hoạch):** Hỗ trợ xây dựng kịch bản kiểm thử, xác
    định các tình huống sử dụng và tạo danh sách nhiệm vụ dựa trên yêu
    cầu của hệ thống.
-   **Testing (Kiểm thử):** Hỗ trợ tạo dữ liệu kiểm thử (Test Data), bao
    gồm dữ liệu hợp lệ, không hợp lệ và các trường hợp biên để kiểm tra
    khả năng tương tác của người dùng với hệ thống.
-   **Analysis (Phân tích):** Phân tích giao diện người dùng thông qua
    hình ảnh (Vision AI), hỗ trợ nhận diện các vấn đề về bố cục, khả
    năng hiển thị, điều hướng và phản hồi của hệ thống. AI cũng có thể
    tổng hợp kết quả kiểm thử và phản hồi từ người tham gia.
-   **Reporting (Báo cáo):** Hỗ trợ nhóm các phát hiện, đánh giá mức độ
    nghiêm trọng, xác định thứ tự ưu tiên và đề xuất các phương án cải
    thiện giao diện.

Quy trình ứng dụng AI có thể được mô tả như sau:

**Input → AI Processing → AI Output → Human Review → Final Result**

Trong đó, Tester chịu trách nhiệm kiểm tra tính chính xác, đối chiếu với
yêu cầu và bằng chứng thực tế trước khi đưa ra kết luận. AI chỉ đóng vai
trò hỗ trợ, không thay thế hoạt động đánh giá của con người.

## 2. Demo 1: Generate Test Scenarios

### 2.1. Mục tiêu

Generate Test Scenarios là việc sử dụng AI để tự động đề xuất các kịch
bản kiểm thử dựa trên thông tin đầu vào của hệ thống. Thay vì xây dựng
toàn bộ tình huống kiểm thử thủ công, Tester có thể cung cấp giao diện,
chức năng và quy trình nghiệp vụ để AI đề xuất các nhiệm vụ mà người
dùng có thể thực hiện.

Trong dự án EShop, nhóm sử dụng chức năng Product List làm đầu vào và
tập trung vào quy trình mua sắm cơ bản:

**Product → Cart → Checkout**

Mục tiêu là tạo ra các kịch bản kiểm thử giúp đánh giá khả năng tìm
kiếm, lựa chọn sản phẩm, thêm vào giỏ hàng và tiếp tục quy trình mua
sắm.

### 2.2. Input -- Dữ liệu đầu vào

Nhóm cung cấp cho AI các thông tin sau:

-   Giao diện Product List của EShop.
-   Danh sách sản phẩm hiển thị trên giao diện.
-   Quy trình nghiệp vụ: Product → Cart → Checkout.
-   Mục tiêu kiểm thử: Đánh giá mức độ dễ dàng khi người dùng tìm kiếm
    và mua sản phẩm.

**Prompt sử dụng:**

> Bạn là một chuyên gia UX Tester. Hãy phân tích giao diện Product List
> của hệ thống EShop và quy trình mua sắm Product → Cart → Checkout. Hãy
> tạo các Usability Test Scenarios để đánh giá khả năng người dùng tìm
> kiếm, lựa chọn sản phẩm, thêm sản phẩm vào giỏ hàng và tiếp tục thanh
> toán.
>
> Với mỗi scenario, hãy trình bày: 1. User Goal: Mục tiêu của người
> dùng. 2. Test Task: Nhiệm vụ cần thực hiện. 3. Expected Behavior: Hành
> vi mong đợi của hệ thống. 4. Usability Aspect: Khía cạnh usability cần
> đánh giá. 5. Metric: Chỉ số có thể sử dụng để đánh giá kết quả.
>
> Các nhiệm vụ phải mô phỏng tình huống mua sắm thực tế, không hướng dẫn
> người dùng từng thao tác cụ thể.

### 2.3. Output -- Kết quả AI tạo ra

Dựa trên giao diện và quy trình được cung cấp, AI có thể đề xuất các
kịch bản kiểm thử sau:

  --------------------------------------------------------------------------
  ID             User Goal      Test Task      Expected       Usability
                                               Behavior       Aspect
  -------------- -------------- -------------- -------------- --------------
  TC-01          Tìm sản phẩm   Tìm một sản    Người dùng dễ  Findability
                                phẩm cụ thể    dàng nhận biết 
                                trong danh     và tìm thấy    
                                sách           sản phẩm       

  TC-02          Chọn sản phẩm  Xác định sản   Thông tin sản  Clarity
                                phẩm phù hợp   phẩm rõ ràng,  
                                dựa trên tên   dễ so sánh     
                                và giá                        

  TC-03          Thêm vào giỏ   Thêm sản phẩm  Hệ thống xác   Feedback
                                đã chọn vào    nhận thao tác  
                                giỏ hàng       thành công     

  TC-04          Thay đổi số    Điều chỉnh số  Người dùng dễ  User Control
                 lượng          lượng sản phẩm dàng thay đổi  
                                trong giỏ      số lượng và    
                                               nhận biết kết  
                                               quả            

  TC-05          Tiếp tục mua   Kiểm tra giỏ   Người dùng     Navigation
                 hàng           hàng và chuyển nhận biết rõ   
                                sang Checkout  tổng tiền và   
                                               bước tiếp theo 
  --------------------------------------------------------------------------

Các chỉ số có thể sử dụng:

-   **Task Success Rate:** Tỷ lệ người dùng hoàn thành nhiệm vụ.
-   **Task Completion Time:** Thời gian hoàn thành nhiệm vụ.
-   **Error Count:** Số thao tác sai trong quá trình thực hiện.
-   **Assistance Count:** Số lần cần sự hỗ trợ của người điều phối.

Kết quả trên là các kịch bản được AI đề xuất, không phải kết quả của một
phiên kiểm thử thực tế.

### 2.4. Ý nghĩa của Demo

Việc sử dụng AI giúp Tester nhanh chóng xây dựng danh sách các tình
huống kiểm thử có hệ thống, đồng thời mở rộng các trường hợp có thể xảy
ra trong quy trình mua sắm.

Tuy nhiên, các kịch bản cần được kiểm tra lại để đảm bảo phù hợp với
chức năng thực tế của EShop, không trùng lặp và có thể thực hiện được.

## 3. Human Review: Xác thực các kịch bản do AI tạo ra

Sau khi AI tạo ra các Test Scenarios, Tester cần tiến hành Human Review
(đánh giá và xác thực bởi con người) trước khi đưa chúng vào quá trình
kiểm thử chính thức.

### 3.1. Các tiêu chí xác thực

Nhóm sử dụng ba tiêu chí chính:

-   **Relevance (Tính liên quan):** Kịch bản có phù hợp với chức năng và
    quy trình nghiệp vụ của EShop hay không?
-   **Testability (Khả năng kiểm thử):** Người tham gia có thể thực hiện
    nhiệm vụ và Tester có thể quan sát, ghi nhận kết quả hay không?
-   **Measurability (Khả năng đo lường):** Kết quả thực hiện có thể được
    đánh giá bằng các chỉ số cụ thể như Task Success Rate, Task
    Completion Time và Error Count hay không?

### 3.2. Phương pháp xử lý kết quả AI

Sau khi đánh giá, Tester có thể đưa ra ba quyết định:

-   **Accept:** Chấp nhận kịch bản nếu nội dung phù hợp, rõ ràng và có
    thể kiểm thử.
-   **Modify:** Điều chỉnh kịch bản nếu nhiệm vụ còn mơ hồ, thiếu tiêu
    chí đánh giá hoặc chưa sát với chức năng thực tế.
-   **Reject:** Loại bỏ kịch bản nếu nội dung không liên quan, không khả
    thi hoặc AI tạo ra thông tin không tồn tại trong hệ thống.

Ví dụ:

  -----------------------------------------------------------------------
  Kịch bản AI đề xuất     Kết quả Human Review    Lý do
  ----------------------- ----------------------- -----------------------
  Tìm kiếm sản phẩm       Accept                  Phù hợp với chức năng
                                                  Product List

  Thêm sản phẩm vào giỏ   Accept                  Có thể thực hiện và
  hàng                                            kiểm tra phản hồi

  Thay đổi số lượng sản   Modify                  Cần xác minh giao diện
  phẩm                                            thực tế có hỗ trợ thao
                                                  tác này

  Thanh toán sản phẩm     Modify                  Cần xác định rõ phạm vi
                                                  và điều kiện thực hiện
                                                  Checkout
  -----------------------------------------------------------------------

### 3.3. Kết luận

Human Review đảm bảo các kịch bản được sử dụng trong Usability Testing
phản ánh đúng chức năng của hệ thống và có thể thu thập bằng chứng thực
tế.

**AI Output ≠ Final Testing Evidence**

Kết quả do AI tạo ra chỉ là đề xuất ban đầu. Bằng chứng kiểm thử cuối
cùng phải đến từ quá trình thực hiện nhiệm vụ, quan sát hành vi và ghi
nhận kết quả thực tế của người tham gia.

## 4. Demo 2: Vision AI -- Phân tích giao diện người dùng

### 4.1. Mục tiêu

Vision AI là khả năng sử dụng mô hình AI có khả năng xử lý hình ảnh để
phân tích giao diện người dùng thông qua Screenshot.

Trong Usability Testing, Vision AI có thể hỗ trợ Tester nhận diện các
vấn đề tiềm ẩn liên quan đến bố cục, khả năng hiển thị, tính nhất quán,
thông tin và cách bố trí các thành phần giao diện.

Trong dự án EShop, nhóm sử dụng Screenshot của giao diện Product List và
Cart để yêu cầu AI phân tích các vấn đề có thể ảnh hưởng đến trải nghiệm
mua sắm.

### 4.2. Input -- Dữ liệu đầu vào

Đầu vào bao gồm:

-   Screenshot giao diện danh sách sản phẩm (Product List).
-   Screenshot giao diện giỏ hàng (Cart).
-   Thông tin về quy trình mua sắm Product → Cart → Checkout.

**Prompt sử dụng:**

> Bạn là một chuyên gia UI/UX và Usability Testing. Hãy phân tích các
> Screenshot giao diện EShop được cung cấp, tập trung vào Product List
> và Cart.
>
> Hãy tìm các vấn đề usability tiềm ẩn liên quan đến: 1. Visibility of
> System Status. 2. User Control and Freedom. 3. Consistency and
> Standards. 4. Error Prevention. 5. Recognition Rather Than Recall. 6.
> Aesthetic and Minimalist Design.
>
> Với mỗi vấn đề, hãy trình bày: - Vị trí hoặc thành phần giao diện liên
> quan. - Vấn đề có thể xảy ra. - Ảnh hưởng đến trải nghiệm người
> dùng. - Nielsen's Usability Heuristic liên quan. - Đề xuất cải thiện.
>
> Chỉ đưa ra các nhận định có thể quan sát hoặc suy luận từ Screenshot.
> Không khẳng định một chức năng bị lỗi nếu không có bằng chứng từ quá
> trình tương tác thực tế.

### 4.3. Output -- Kết quả AI phân tích

Từ giao diện EShop được cung cấp, AI đưa ra một số phát hiện tiềm năng:

**Finding 1 -- Add to Cart Feedback**

-   Quan sát: Người dùng có thể chưa nhận biết ngay thao tác thêm sản
    phẩm vào giỏ hàng đã thành công hay chưa.
-   Vấn đề tiềm ẩn: Phản hồi sau thao tác chưa đủ rõ ràng.
-   Heuristic liên quan: Visibility of System Status.
-   Đề xuất: Hiển thị thông báo xác nhận, cập nhật số lượng trên biểu
    tượng giỏ hàng hoặc cung cấp phản hồi trực quan ngay sau thao tác.

**Finding 2 -- Quantity Controls**

-   Quan sát: Các thao tác điều chỉnh số lượng sản phẩm trong giỏ hàng
    có thể chưa đủ rõ ràng hoặc khó nhận biết.
-   Vấn đề tiềm ẩn: Người dùng có thể mất thời gian tìm cách tăng hoặc
    giảm số lượng.
-   Heuristic liên quan: User Control and Freedom; Flexibility and
    Efficiency of Use.
-   Đề xuất: Bổ sung nút tăng/giảm số lượng có biểu tượng và trạng thái
    rõ ràng, đồng thời cập nhật tổng tiền tương ứng.

**Finding 3 -- Cart Total**

-   Quan sát: Người dùng cần đối chiếu giá sản phẩm, số lượng và tổng
    tiền trong giỏ hàng.
-   Vấn đề tiềm ẩn: Nếu thông tin tổng tiền không được trình bày nổi bật
    hoặc cập nhật rõ ràng, người dùng có thể nhầm lẫn về số tiền cần
    thanh toán.
-   Heuristic liên quan: Recognition Rather Than Recall; Visibility of
    System Status.
-   Đề xuất: Làm nổi bật tổng tiền, trình bày rõ đơn giá, số lượng và
    thành tiền của từng sản phẩm.

### 4.4. Ý nghĩa của Demo

Vision AI giúp Tester nhanh chóng rà soát giao diện và đưa ra các giả
thuyết về vấn đề usability mà không cần kiểm tra thủ công từng thành
phần ngay từ đầu.

Tuy nhiên, AI chỉ phân tích những gì có thể quan sát từ Screenshot. Các
vấn đề liên quan đến hành vi thực tế, phản hồi sau thao tác hoặc tính
chính xác của chức năng phải được kiểm tra trực tiếp trên hệ thống.

Do đó, các phát hiện từ Vision AI cần được đối chiếu với Nielsen's 10
Usability Heuristics và kết quả kiểm thử thực tế trước khi được xác
nhận.

## 5. AI phân tích kết quả kiểm thử (Analyze Test Results)

### 5.1. Mục tiêu

Sau khi hoàn thành các phiên Usability Testing, nhóm thu thập dữ liệu về
tỷ lệ hoàn thành nhiệm vụ, phản hồi của người tham gia và các vấn đề
được ghi nhận trong quá trình tương tác.

AI có thể hỗ trợ tổng hợp những dữ liệu này để xác định các vấn đề nổi
bật, phân nhóm phát hiện, đánh giá mức độ nghiêm trọng và đề xuất thứ tự
ưu tiên cải thiện.

### 5.2. Input -- Dữ liệu đầu vào

Nhóm sử dụng kết quả Usability Testing trên EShop, bao gồm:

-   Task Success Rate của các chức năng Customer Web và Admin Web.
-   Các kết quả Success, Partial và Fail.
-   Điểm đánh giá khảo sát của người tham gia.
-   Những vấn đề usability được ghi nhận trong quá trình kiểm thử.

Dữ liệu đầu vào được tổng hợp từ kết quả kiểm thử của nhóm tại các phần
trước của báo cáo.

### 5.3. Prompt sử dụng

> Bạn là một chuyên gia phân tích Usability Testing. Hãy phân tích dữ
> liệu kết quả kiểm thử của hệ thống EShop được cung cấp.
>
> Thực hiện các công việc sau: 1. Xác định những chức năng có tỷ lệ hoàn
> thành thấp. 2. Nhóm các vấn đề usability theo nguyên nhân và khu vực
> giao diện. 3. Đối chiếu các vấn đề với Nielsen's 10 Usability
> Heuristics. 4. Đánh giá mức độ ảnh hưởng đối với trải nghiệm người
> dùng. 5. Xác định thứ tự ưu tiên cải thiện. 6. Đề xuất giải pháp UI/UX
> phù hợp.
>
> Hãy phân biệt giữa dữ liệu thực tế và nhận định phân tích. Không tự
> tạo số liệu hoặc khẳng định nguyên nhân nếu dữ liệu đầu vào chưa đủ
> bằng chứng.

### 5.4. Output -- Kết quả phân tích

Dựa trên kết quả kiểm thử EShop đã trình bày ở phần IV, AI có thể hỗ trợ
tổng hợp các vấn đề nổi bật như sau:

**Finding 1 -- Khó khăn trong quản lý giỏ hàng**

-   Dữ liệu: C-03 có 1 Success, 3 Partial và 2 Fail, tỷ lệ Success chỉ
    đạt 16,7%.
-   Phân tích: Đây là chức năng có tỷ lệ hoàn thành thấp nhất trong các
    nhiệm vụ được kiểm thử. Người dùng gặp khó khăn khi thay đổi số
    lượng hoặc quản lý sản phẩm trong giỏ hàng.
-   Heuristic liên quan: User Control and Freedom; Flexibility and
    Efficiency of Use.
-   Đề xuất: Bổ sung các nút điều chỉnh số lượng dễ nhận biết, cung cấp
    thao tác xóa rõ ràng và cập nhật tổng tiền ngay sau khi thay đổi.

**Finding 2 -- Phản hồi sau thao tác thêm sản phẩm chưa rõ ràng**

-   Dữ liệu: C-02 có tỷ lệ Success 33,3%, với 3 Partial và 1 Fail.
-   Phân tích: Người dùng chưa phải lúc nào cũng hoàn thành nhiệm vụ một
    cách thuận lợi. Một trong những vấn đề cần kiểm tra là mức độ rõ
    ràng của phản hồi sau khi thêm sản phẩm.
-   Heuristic liên quan: Visibility of System Status.
-   Đề xuất: Hiển thị thông báo thêm sản phẩm thành công và cập nhật số
    lượng trên biểu tượng giỏ hàng.

**Finding 3 -- Khó khăn khi áp dụng coupon và thanh toán**

-   Dữ liệu: C-04 có tỷ lệ Success 33,3%, với 3 Partial và 1 Fail.
-   Phân tích: Quy trình áp dụng coupon và thanh toán có thể gây khó
    khăn cho người dùng trong việc nhận biết điều kiện áp dụng mã và xác
    định tổng tiền cần thanh toán.
-   Heuristic liên quan: Error Prevention; Help Users Recognize,
    Diagnose, and Recover from Errors.
-   Đề xuất: Hiển thị rõ điều kiện áp dụng coupon, giải thích nguyên
    nhân khi mã không hợp lệ và cập nhật tổng tiền sau khi áp dụng mã.

### 5.5. Xác định mức độ ưu tiên

Từ kết quả phân tích, có thể đề xuất thứ tự ưu tiên cải thiện ban đầu:

  -----------------------------------------------------------------------
  Mức ưu tiên             Vấn đề                  Cơ sở
  ----------------------- ----------------------- -----------------------
  Cao                     Quản lý giỏ hàng        Tỷ lệ Success thấp
                                                  nhất, chỉ 16,7%

  Cao                     Thêm sản phẩm vào giỏ   Tỷ lệ Success 33,3%,
                                                  nhiều kết quả Partial

  Cao                     Coupon và thanh toán    Tỷ lệ Success 33,3%,
                                                  ảnh hưởng đến quy trình
                                                  mua hàng

  Theo dõi                Tìm kiếm sản phẩm       Tỷ lệ Success 83,3%,
                                                  kết quả tương đối tốt
  -----------------------------------------------------------------------

Đây là thứ tự ưu tiên đề xuất dựa trên tỷ lệ hoàn thành nhiệm vụ, chưa
phải kết quả đánh giá Severity chính thức. Nhóm cần đối chiếu thêm số
lượng người gặp vấn đề, mức độ ảnh hưởng và bằng chứng quan sát trước
khi đưa ra quyết định cuối cùng.

### 5.6. Kết luận

AI giúp Tester tiết kiệm thời gian tổng hợp dữ liệu, nhanh chóng nhận
diện các chức năng có tỷ lệ hoàn thành thấp và đề xuất các hướng cải
thiện phù hợp.

Tuy nhiên, AI không thể tự xác định chính xác nguyên nhân của mọi vấn đề
chỉ dựa trên số liệu. Tester cần đối chiếu kết quả phân tích với video
phiên kiểm thử, ghi chú quan sát và phản hồi của người tham gia.

Quy trình xử lý kết quả được thực hiện theo hướng:

**AI → Phân tích → Con người xem xét → Đối chiếu bằng chứng → Kết quả
cuối cùng.**

## 6. Ưu điểm và Hạn chế của việc ứng dụng AI trong Usability Testing

### 6.1. Ưu điểm

-   **Nhanh chóng:** AI có thể tạo nhiều kịch bản kiểm thử và tổng hợp
    dữ liệu trong thời gian ngắn.
-   **Giảm công sức:** Hạn chế các thao tác xây dựng kịch bản, phân loại
    và tổng hợp kết quả thủ công.
-   **Hỗ trợ phân tích:** Có thể nhận diện các vấn đề tiềm ẩn trong giao
    diện và hỗ trợ nhóm hóa các phát hiện.
-   **Tạo nhiều kịch bản kiểm thử:** Gợi ý thêm các tình huống sử dụng,
    giúp Tester mở rộng phạm vi kiểm thử.
-   **Hỗ trợ viết tài liệu:** Tạo bản nháp báo cáo, bảng tổng hợp và đề
    xuất cải tiến, giúp quá trình documentation hiệu quả hơn.

### 6.2. Hạn chế

-   **Có thể tạo ra thông tin không chính xác:** AI có thể đưa ra các
    nhận định không phù hợp với chức năng thực tế của hệ thống.
-   **Kết quả phát hiện có thể sai:** Vision AI có thể hiểu nhầm thành
    phần giao diện hoặc suy luận nguyên nhân khi chưa có đủ bằng chứng.
-   **Phụ thuộc vào ngữ cảnh:** Chất lượng kết quả phụ thuộc vào mức độ
    đầy đủ và chính xác của dữ liệu, Screenshot và Prompt đầu vào.
-   **Không thể thay thế người dùng thực tế:** AI không thể thay thế
    hoàn toàn việc quan sát hành vi, cảm nhận và phản hồi của người tham
    gia trong các phiên Usability Testing.
-   **Cần con người xác thực:** Các kịch bản, phát hiện và đề xuất của
    AI cần được Tester kiểm tra, đối chiếu và xác nhận trước khi sử
    dụng.

### 6.3. Đánh giá chung

Việc ứng dụng AI trong Usability Testing mang lại nhiều lợi ích trong
quá trình xây dựng kịch bản, phân tích giao diện và xử lý kết quả kiểm
thử. AI giúp Tester giảm thời gian thực hiện các công việc mang tính lặp
lại và tập trung hơn vào việc đánh giá những vấn đề có ảnh hưởng đến
trải nghiệm người dùng.

Tuy nhiên, AI chỉ nên được xem là công cụ hỗ trợ. Kết quả cuối cùng vẫn
phải dựa trên dữ liệu thực tế, bằng chứng kiểm thử và đánh giá của con
người.

Đối với dự án EShop, việc kết hợp Generate Test Scenarios, Vision AI và
Analyze Test Results giúp minh họa cách AI có thể tham gia xuyên suốt
quy trình Usability Testing, từ giai đoạn lập kế hoạch đến phân tích và
đề xuất cải tiến.
