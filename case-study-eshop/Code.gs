/** EShop / Group07 — paste this entire file into Google Apps Script. */
const SURVEY = {
  title: 'Khảo sát trải nghiệm sử dụng EShop — Nhóm 07',
  consent: 'Tôi đồng ý tham gia khảo sát tự nguyện',
  roles: ['Khách hàng — Web EShop', 'Quản trị viên — Web Admin'],
  statuses: ['Hoàn thành độc lập', 'Hoàn thành có hỗ trợ', 'Không hoàn thành', 'Chưa thực hiện / không được giao', 'Không thể thực hiện do sự cố môi trường'],
  tasks: [
    {id:'U01', role:0, name:'Đăng ký tài khoản', fr:'FR-01, FR-22', goal:'Tạo tài khoản mới bằng thông tin thử nghiệm được cung cấp để thực hiện mua hàng.', prep:'Phiên đăng xuất; email test chưa tồn tại; cung cấp dữ liệu giả và mật khẩu hợp lệ.', comment:'Yếu tố nào bạn thấy gây cản trở hoặc bối rối trong quá trình thao tác?'},
    {id:'T2', role:0, name:'Đăng nhập', fr:'FR-02', goal:'Sử dụng tài khoản thử nghiệm được cung cấp để đăng nhập EShop.', prep:'Tài khoản riêng, không bị khóa; không cố tình yêu cầu nhập sai nhiều lần.'},
    {id:'U02', role:0, name:'Tìm, xem và chọn mua sản phẩm', fr:'FR-05, FR-06, FR-24', goal:'Tìm sản phẩm do điều phối viên chỉ định, xem thông tin chi tiết và chọn mua với số lượng 2.', prep:'Sản phẩm có sẵn, ví dụ iPhone 15 Pro Max. Ghi khả năng tự nhận biết phản hồi thêm giỏ trước khi hỏi.'},
    {id:'U03', role:0, name:'Điều chỉnh giỏ hàng', fr:'FR-07, FR-24', goal:'Điều chỉnh số lượng một mặt hàng thành 3, sau đó loại bỏ một mặt hàng khác khỏi giỏ hàng.', prep:'Giỏ có ít nhất hai loại sản phẩm; sau task vẫn đủ điều kiện giỏ cho SAVE10.'},
    {id:'U05', role:0, name:'Phản hồi khi mã giảm giá hết hạn', fr:'FR-09', goal:'Thử áp dụng mã EXPIRED và cho biết bạn hiểu phản hồi của EShop như thế nào, cùng hướng xử lý tiếp theo.', prep:'EXPIRED có trong dữ liệu test. Thực hiện trước U04 để không phải tạo lại giỏ đã thanh toán.'},
    {id:'U04', role:0, name:'Đặt hàng với mã giảm giá', fr:'FR-08, FR-09', goal:'Tiến hành đặt mua các sản phẩm trong giỏ hàng và áp dụng mã SAVE10 được cung cấp.', prep:'Giỏ từ 300.000 đồng; SAVE10 chưa dùng trên tài khoản này; chỉ đặt hàng giả lập.'},
    {id:'U06', role:0, name:'Theo dõi và hủy đơn hàng', fr:'FR-10, FR-11', goal:'Tra cứu đơn hàng vừa đặt, kiểm tra trạng thái hiện tại và thực hiện hủy đơn nếu hệ thống cho phép.', prep:'Có đơn pending/confirmed; ghi nhận người dùng hiểu trạng thái như thế nào.'},
    {id:'T8', role:0, name:'Cập nhật hồ sơ', fr:'FR-04', goal:'Cập nhật số điện thoại và địa chỉ giao hàng bằng dữ liệu thử nghiệm được cung cấp.', prep:'Đã đăng nhập; dùng thông tin giả. Nếu dữ liệu đúng bị từ chối, ghi kết quả thực tế.'},
    {id:'U07', role:0, name:'Khôi phục mật khẩu', fr:'FR-03, FR-22', goal:'Khôi phục mật khẩu tài khoản thử nghiệm bằng email và mã OTP trong môi trường demo.', prep:'Thực hiện cuối luồng khách hàng; không ghi mật khẩu/OTP vào khảo sát.'},
    {id:'A01', role:1, name:'Thêm sản phẩm', fr:'FR-15', goal:'Cửa hàng có sản phẩm mới. Hãy tạo sản phẩm với tên, giá, mô tả và danh mục được cung cấp.', prep:'Tài khoản admin test; danh mục tồn tại; tên sản phẩm giả duy nhất cho phiên.'},
    {id:'A02', role:1, name:'Nhập sản phẩm từ CSV', fr:'FR-16', goal:'Nhập danh sách sản phẩm từ các tệp được cung cấp và cho biết có dòng nào cần xử lý lại không.', prep:'Chuẩn bị CSV hợp lệ và CSV có lỗi, chạy riêng; quan sát hiểu báo cáo và rollback; SEQ đánh giá toàn tác vụ A02.'},
    {id:'A03', role:1, name:'Cập nhật trạng thái đơn', fr:'FR-18, FR-10', goal:'Tìm đơn được chỉ định, xác nhận đơn rồi chuyển đơn sang giao hàng.', prep:'Đơn pending test riêng; không dùng đơn đã hủy ở U06.'}
  ],
  sus: [
    'Tôi nghĩ mình sẽ muốn sử dụng EShop thường xuyên.',
    'Tôi thấy EShop phức tạp một cách không cần thiết.',
    'Tôi thấy EShop dễ sử dụng.',
    'Tôi nghĩ mình cần sự hỗ trợ của người có chuyên môn kỹ thuật để dùng được EShop.',
    'Tôi thấy các chức năng của EShop được tích hợp hợp lý.',
    'Tôi thấy EShop có quá nhiều điểm không nhất quán.',
    'Tôi nghĩ hầu hết mọi người sẽ học cách dùng EShop rất nhanh.',
    'Tôi thấy EShop rất rườm rà khi sử dụng.',
    'Tôi cảm thấy tự tin khi sử dụng EShop.',
    'Tôi cần học nhiều thứ trước khi có thể bắt đầu dùng EShop.'
  ],
  open: [
    'Có nhãn, nút hay thông báo nào bạn thấy khó hiểu không? Bạn đã hiểu nó như thế nào?',
    'Khi gặp lỗi hoặc thao tác nhầm, bạn có biết cách sửa không? Điều gì giúp hoặc cản trở bạn?',
    'Bạn thấy quá trình hoàn thành nhiệm vụ nhanh hay chậm so với mong đợi? Bước nào mất nhiều thời gian nhất?',
    'Bạn có yên tâm khi nhập thông tin và thanh toán trên trang này không? Điều gì làm bạn yên tâm hoặc lo ngại?',
    'Nếu được thay đổi một điều ở EShop, bạn sẽ thay đổi điều gì?'
  ]
};

function taoKhaoSatEShop() {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    const props = PropertiesService.getScriptProperties();
    const old = props.getProperty('ESHOP_SURVEY');
    if (old) {
      const saved = JSON.parse(old);
      if (!saved.ready) throw new Error('Lần tạo trước chưa hoàn tất. Mở các URL trong Execution log lần trước để kiểm tra; không chạy tạo lặp.');
      ensureTrigger_(saved.formId);
      return hienThiLienKet();
    }
    const ss = SpreadsheetApp.create(SURVEY.title + ' — Kết quả');
    ss.setSpreadsheetLocale('en_US');
    ss.setSpreadsheetTimeZone('Asia/Ho_Chi_Minh');
    const form = FormApp.create(SURVEY.title, false);
    const meta = {formId:form.getId(), sheetId:ss.getId(), ready:false, taskItems:{}, susItems:[]};
    props.setProperty('ESHOP_SURVEY', JSON.stringify(meta));
    console.log('Form đang tạo: ' + form.getEditUrl());
    console.log('Sheet: ' + ss.getUrl());
    buildForm_(form, meta);
    buildSheets_(ss, form);
    form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());
    ensureTrigger_(form.getId());
    meta.ready = true;
    props.setProperty('ESHOP_SURVEY', JSON.stringify(meta));
    return hienThiLienKet();
  } finally { lock.releaseLock(); }
}

function buildForm_(form, meta) {
  form.setDescription('Khảo sát phục vụ seminar Usability Testing của Nhóm 07. Chúng tôi đánh giá EShop, không đánh giá năng lực của bạn.\n\nMở form từ đầu phiên, thực hiện từng nhiệm vụ trên EShop rồi trả lời ngay ở phần tương ứng. Chỉ thực hiện nhiệm vụ được giao; có thể dừng bất cứ lúc nào. Thời lượng dự kiến: 30–40 phút cho phiên ưu tiên, lâu hơn nếu làm toàn bộ nhiệm vụ; chạy thử để chốt thời lượng.\n\nChỉ dùng tài khoản và dữ liệu thử nghiệm. Không nhập tên thật, email thật, mật khẩu, OTP hay thông tin thanh toán vào form. Phản hồi được lưu vào Google Sheets do nhóm quản lý, chỉ dùng cho nghiên cứu seminar. Đồng ý ghi hình/âm thanh là lựa chọn riêng; từ chối vẫn có thể tham gia.');
  form.setCollectEmail(false).setLimitOneResponsePerUser(false).setAllowResponseEdits(false)
    .setShowLinkToRespondAgain(false).setPublishingSummary(false).setShuffleQuestions(false)
    .setProgressBar(true).setConfirmationMessage('Cảm ơn bạn! Lựa chọn và phản hồi của bạn đã được ghi nhận.');
  const consent = form.addMultipleChoiceItem().setTitle('Bạn có đồng ý tham gia khảo sát không?').setRequired(true);
  meta.consentId = consent.getId();
  const profile = form.addPageBreakItem().setTitle('1. Thông tin trước phiên');
  mc_(form,'Độ tuổi',['Dưới 18','18–24','25–34','35–49','Từ 50 trở lên','Không muốn cung cấp'],true);
  mc_(form,'Nghề nghiệp / lĩnh vực',['Học sinh / sinh viên','Văn phòng','Kinh doanh','Nội trợ','Khác','Không muốn cung cấp'],true);
  meta.frequencyId = mc_(form,'Tần suất mua sắm online',['Hằng tuần','Hằng tháng','Vài lần mỗi năm','Hiếm khi / chưa từng'],true).getId();
  mc_(form,'Thiết bị thường dùng để mua sắm',['Điện thoại','Laptop / máy tính','Cả hai'],true);
  scale_(form,'Mức độ quen thuộc của bạn với công nghệ',5,'Rất ít quen thuộc','Rất quen thuộc');
  mc_(form,'Bạn đã từng dùng EShop trước phiên này chưa?',['Có','Không'],true);
  mc_(form,'Thiết bị đang dùng trong phiên',['Laptop / máy tính','Điện thoại','Máy tính bảng','Khác'],true);
  mc_(form,'Trình duyệt đang dùng',['Chrome','Edge','Firefox','Safari','Khác'],true);
  const role = mc_(form,'Vai trò trong phiên kiểm thử này',SURVEY.roles,true);
  meta.roleId = role.getId();
  const sections = [];
  SURVEY.tasks.forEach(task => {
    const gate = form.addPageBreakItem().setTitle('2. Nhiệm vụ ' + task.id + ' — ' + task.name).setHelpText(task.goal + '\n\nChuyển sang EShop để thực hiện nếu được giao, rồi quay lại đây. Không cần cố hoàn thành nếu bạn đã mắc kẹt.');
    const status = mc_(form,'[' + task.id + '] Kết quả theo tự báo cáo của bạn',SURVEY.statuses,true);
    // In a merged section Forms cannot make SEQ required conditionally.
    const seq = scale_(form,'[' + task.id + '] Nhìn chung, bạn thấy việc hoàn thành nhiệm vụ vừa rồi như thế nào?',7,'Rất khó','Rất dễ')
      .setRequired(false).setHelpText('Nếu đã thử nhiệm vụ, vui lòng chấm điểm ngay cả khi không hoàn thành. Nếu chưa thực hiện / không được giao hoặc chỉ gặp sự cố môi trường, để trống câu này.');
    const comment = form.addParagraphTextItem().setTitle('[' + task.id + '] ' + (task.comment || 'Yếu tố nào gây cản trở hoặc bối rối trong quá trình thao tác?')).setRequired(false);
    meta.taskItems[task.id] = {status:status.getId(), seq:seq.getId(), comment:comment.getId()};
    sections.push({task:task,gate:gate});
  });
  const finalGate = form.addPageBreakItem().setTitle('3. Xác nhận trải nghiệm trước đánh giá tổng thể');
  const experienced = form.addMultipleChoiceItem().setTitle('Trong phiên này, bạn đã trực tiếp thử thực hiện ít nhất một nhiệm vụ trên EShop chưa?').setHelpText('Có thể chọn Có dù nhiệm vụ không hoàn thành. Nếu chỉ gặp sự cố môi trường và chưa tương tác được, chọn Chưa.').setRequired(true);
  meta.experiencedId = experienced.getId();
  const susPage = form.addPageBreakItem().setTitle('4. Đánh giá tổng thể — SUS (10 câu)').setHelpText('Đánh giá phân hệ bạn vừa sử dụng trong phiên này. 1 = Hoàn toàn không đồng ý; 2 = Không đồng ý; 3 = Trung lập; 4 = Đồng ý; 5 = Hoàn toàn đồng ý. Trả lời theo cảm nhận, không có đáp án đúng/sai.');
  SURVEY.sus.forEach((text,i) => meta.susItems.push(scale_(form,'SUS' + (i+1) + '. ' + text,5,'Hoàn toàn không đồng ý','Hoàn toàn đồng ý').getId()));
  form.addPageBreakItem().setTitle('5. Ý kiến cuối phiên (không bắt buộc)').setHelpText('Bạn có thể nêu ví dụ cụ thể ở các nhiệm vụ vừa làm.');
  SURVEY.open.forEach(text => form.addParagraphTextItem().setTitle(text).setRequired(false));
  consent.setChoices([consent.createChoice(SURVEY.consent,profile),consent.createChoice('Tôi không đồng ý tham gia',FormApp.PageNavigationType.SUBMIT)]);
  experienced.setChoices([experienced.createChoice('Có',susPage),experienced.createChoice('Chưa',FormApp.PageNavigationType.SUBMIT)]);
  role.setChoices(SURVEY.roles.map((label,r) => role.createChoice(label,sections.find(s=>s.task.role===r).gate)));
  sections.forEach((section,i) => {
    const next = sections[i+1];
    // PageBreak navigation applies to the page BEFORE that break.
    if (next && next.task.role!==section.task.role) next.gate.setGoToPage(finalGate);
  });
}

/** Run once in the ORIGINAL Apps Script project to merge the existing Form. */
function gopNhiemVuVaSEQ() {
  const lock=LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    const meta=JSON.parse(PropertiesService.getScriptProperties().getProperty('ESHOP_SURVEY') || 'null');
    if (!meta || !meta.ready) throw new Error('Hãy chạy hàm này trong dự án Apps Script đã tạo khảo sát hoàn chỉnh.');
    const form=FormApp.openById(meta.formId);
    const count=gopCacPhanSEQ_(form,meta);
    console.log('Đã gộp '+count+' phần SEQ vào nhiệm vụ tương ứng. Câu hỏi và ID được giữ nguyên.');
    console.log('SEQ không đặt bắt buộc; người chưa làm có thể để trống. Mở lại Form và thử cả hai nhánh.');
    return hienThiLienKet();
  } finally { lock.releaseLock(); }
}

function gopCacPhanSEQ_(form,meta) {
  const items=form.getItems();
  const pageBefore=item=>{
    for(let i=item.getIndex()-1;i>=0;i--) if(items[i].getType()===FormApp.ItemType.PAGE_BREAK) return items[i];
    return null;
  };
  // Validate every task before changing any item. Never rebuild questions or responses.
  const plan=SURVEY.tasks.map(task=>{
    const ids=meta.taskItems[task.id];
    if (!ids) throw new Error('Thiếu cấu hình nhiệm vụ '+task.id+'. Chưa thay đổi Form.');
    const status=form.getItemById(ids.status), seq=form.getItemById(ids.seq), comment=form.getItemById(ids.comment);
    if (!status || !seq || !comment || status.getType()!==FormApp.ItemType.MULTIPLE_CHOICE || seq.getType()!==FormApp.ItemType.SCALE)
      throw new Error('Câu hỏi '+task.id+' đã bị xóa hoặc đổi loại. Chưa thay đổi Form.');
    const gate=pageBefore(status), rating=pageBefore(seq), commentPage=pageBefore(comment);
    if (!gate || !rating || !commentPage || commentPage.getId()!==rating.getId() || status.getIndex()>=seq.getIndex() || seq.getIndex()>=comment.getIndex())
      throw new Error('Thứ tự câu hỏi '+task.id+' không còn đúng cấu trúc. Chưa thay đổi Form.');
    const separate=gate.getId()!==rating.getId();
    if (separate && (rating.getTitle().trim()!=='SEQ — '+task.id || !pageBefore(rating) || pageBefore(rating).getId()!==gate.getId()))
      throw new Error('Không xác định được phần SEQ riêng của '+task.id+'. Chưa thay đổi Form.');
    return {status:status.asMultipleChoiceItem(),seq:seq.asScaleItem(),rating:separate ? rating : null};
  });
  plan.forEach(p=>{
    // Clear old answer-dependent jumps before removing their target sections.
    p.status.setChoices(p.status.getChoices().map(c=>p.status.createChoice(c.getValue())));
    p.seq.setRequired(false).setHelpText('Chấm điểm nếu đã thử nhiệm vụ, kể cả khi không hoàn thành. Nếu chưa làm hoặc chỉ gặp sự cố môi trường, để trống.');
  });
  const breaks=plan.filter(p=>p.rating).map(p=>p.rating).sort((a,b)=>b.getIndex()-a.getIndex());
  breaks.forEach(item=>form.deleteItem(item));
  return breaks.length;
}

function mc_(form,title,choices,required) {
  return form.addMultipleChoiceItem().setTitle(title).setChoiceValues(choices).setRequired(required);
}
function scale_(form,title,max,low,high) {
  return form.addScaleItem().setTitle(title).setBounds(1,max).setLabels(low,high).setRequired(true);
}

function buildSheets_(ss,form) {
  const guide = ss.getSheets()[0].setName('HUONG_DAN');
  const rows = [
    ['Mục','Nội dung'],['Form chỉnh sửa',form.getEditUrl()],['Link trả lời (chỉ dùng sau khi xuất bản)',form.getPublishedUrl()],
    ['Nguồn','Group07.pdf, mục V.8, trang 37–41; mục V.5–7, trang 31–37.'],
    ['Trước khi gửi','Xem trước và pilot 1–2 người; kiểm tra cả hai nhánh và đường bỏ qua; xuất bản form trong giao diện Google Forms.'],
    ['Môi trường','Điều phối viên cung cấp URL EShop truy cập được. localhost của bạn không dùng được từ máy người khác. Không cần deploy form bằng EShop.'],
    ['Thứ tự','Thông tin/đồng thuận → task/SEQ → SUS → câu mở. Một form, một lần gửi cuối phiên; thoát trước khi gửi thì chưa có phản hồi trong Sheet.'],
    ['Ghi âm/ghi hình','Chỉ ghi từng loại khi người tham gia đồng ý loại đó. Từ chối không bị loại khảo sát. Nhóm tự chốt nơi lưu, quyền truy cập và thời hạn lưu trước khi tuyển.'],
    ['Dữ liệu gốc','Google Forms tự tạo tab phản hồi. Không xóa/sửa tab đó. Các tab SUS và SEQ là dữ liệu dẫn xuất.'],
    ['SUS','Câu lẻ: x−1; câu chẵn: 5−x; tổng × 2,5. Chỉ tính đủ 10 câu hợp lệ. 0–100, không phải % hài lòng; 68 là mốc tham khảo của tài liệu.'],
    ['SEQ','1 rất khó → 7 rất dễ; chỉ tính nhiệm vụ đã thử, kể cả thất bại. Bỏ qua và sự cố môi trường không chấm SEQ.'],
    ['Quan sát','Nhập QUAN_SAT bằng đồng hồ và quan sát, một dòng/mã phiên/task. Không suy ra thời gian, lỗi hay thành công khách quan từ câu trả lời người dùng.'],
    ['Phân tích','TONG_HOP dùng dữ liệu quan sát cho tỷ lệ hoàn thành, thời gian trung vị và lỗi; SEQ/SUS từ form. Báo cỡ mẫu và tách khách hàng/admin.'],
    ['Không thực hiện','Không tính vào mẫu số. Lượt chỉ hỏng do môi trường phải ghi rõ lý do loại trong ghi chú.'],
    ['Tái tính','Chạy dongBoKetQua để khôi phục SUS/SEQ khi trigger lỗi hoặc sau khi xóa phản hồi pilot trong Google Forms. Không xóa dữ liệu quan sát.'],
    ['Mã đối chiếu','Không tự thu email, không giới hạn 1 phản hồi/tài khoản. Form mới dùng ID phản hồi làm mã phiên trong SUS/SEQ; dùng cùng mã trong QUAN_SAT. Không nhập mật khẩu hay OTP. Chính sách tổ chức vẫn có thể hạn chế truy cập.'],
    ['Giới hạn','Mẫu nhỏ: báo cả số lượt và tỷ lệ. SUS theo vai trò; không gộp thành điểm chung. Kết quả chưa đại diện toàn bộ người dùng.']
  ];
  writeTable_(guide,rows);
  const sus = ss.insertSheet('SUS');
  writeTable_(sus,[['ID phản hồi','Thời điểm','Mã phiên','Vai trò','Tần suất online'].concat(SURVEY.sus.map((_,i)=>'SUS'+(i+1)),['Điểm SUS','Kiểm tra'])]);
  prepareSeqSheets_(ss);
  const obs = ss.insertSheet('QUAN_SAT');
  writeTable_(obs,[['Mã phiên','Task','Kết quả quan sát','Thời gian (giây)','Số lỗi','Lần quay lại','Yêu cầu trợ giúp','Tự nhận biết phản hồi (Có/Không/NA)','Hành vi / phát biểu nguyên văn / sự cố','Mã vấn đề']]);
  obs.getRange('B2:B1000').setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(SURVEY.tasks.map(t=>t.id),true).setAllowInvalid(false).build());
  obs.getRange('C2:C1000').setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(SURVEY.statuses,true).setAllowInvalid(false).build());
  obs.getRange('D2:G1000').setDataValidation(SpreadsheetApp.newDataValidation().requireNumberGreaterThanOrEqualTo(0).setAllowInvalid(false).build());
  buildSummary_(ss);
  const issues=ss.insertSheet('VAN_DE');
  writeTable_(issues,[['Mã vấn đề','Mã phiên / task','Màn hình','Bước tái hiện','Quan sát / trích dẫn','Mong đợi','Thực tế','Ảnh hưởng','Số người gặp / số làm task','Ưu tiên P1–P4','Đề xuất sửa','Bằng chứng được phép']]);
  guide.setColumnWidth(2,780);
}

function writeTable_(sheet,rows) {
  sheet.getRange(1,1,rows.length,rows[0].length).setValues(rows).setWrap(true);
  sheet.setFrozenRows(1);
  sheet.getRange(1,1,1,rows[0].length).setBackground('#16324f').setFontColor('#ffffff').setFontWeight('bold');
  sheet.setColumnWidths(1,rows[0].length,160);
}

function ensureTrigger_(formId) {
  const exists=ScriptApp.getProjectTriggers().some(t=>t.getHandlerFunction()==='khiGuiKhaoSat' && t.getTriggerSourceId()===formId);
  if (!exists) ScriptApp.newTrigger('khiGuiKhaoSat').forForm(formId).onFormSubmit().create();
}

function hienThiLienKet() {
  const meta=JSON.parse(PropertiesService.getScriptProperties().getProperty('ESHOP_SURVEY') || 'null');
  if (!meta) throw new Error('Hãy chạy taoKhaoSatEShop trước.');
  const form=FormApp.openById(meta.formId);
  const links={chinhSuaForm:form.getEditUrl(),traLoiSauKhiXuatBan:form.getPublishedUrl(),sheet:SpreadsheetApp.openById(meta.sheetId).getUrl()};
  console.log(JSON.stringify(links,null,2));
  return links;
}

/** Read-only check: run after creation and after a real pilot submission. */
function kiemTraLienKet() {
  const meta=JSON.parse(PropertiesService.getScriptProperties().getProperty('ESHOP_SURVEY') || 'null');
  if (!meta) throw new Error('Chưa có khảo sát. Hãy chạy taoKhaoSatEShop trước.');
  const form=FormApp.openById(meta.formId), ss=SpreadsheetApp.openById(meta.sheetId);
  const required=['HUONG_DAN','SUS','SEQ','QUAN_SAT','TONG_HOP','VAN_DE'];
  const missing=required.filter(name=>!ss.getSheetByName(name));
  const triggers=ScriptApp.getProjectTriggers().filter(t=>
    t.getHandlerFunction()==='khiGuiKhaoSat' && t.getTriggerSourceId()===meta.formId &&
    t.getEventType()===ScriptApp.EventType.ON_FORM_SUBMIT);
  const linked=form.getDestinationType()===FormApp.DestinationType.SPREADSHEET && form.getDestinationId()===meta.sheetId;
  const report={
    cauHinhHoanTat:meta.ready===true,
    lienKetDungSheet:linked,
    tabConThieu:missing,
    soTriggerGuiForm:triggers.length,
    daXuatBan:form.supportsAdvancedResponderPermissions() ? form.isPublished() : null,
    dangNhanPhanHoi:form.isAcceptingResponses(),
    chinhSuaForm:form.getEditUrl(),
    traLoiSauKhiXuatBan:form.getPublishedUrl(),
    sheet:ss.getUrl()
  };
  report.cauTrucHopLe=report.cauHinhHoanTat && linked && missing.length===0 && triggers.length===1;
  console.log(JSON.stringify(report,null,2));
  if (!report.cauTrucHopLe) console.warn('Cấu trúc chưa hợp lệ. Kiểm tra liên kết, các tab và trigger trong báo cáo; không tạo lại khảo sát tự động.');
  console.log('Kiểm tra này chỉ đọc cấu hình. Gửi pilot bằng giao diện Form để xác nhận dữ liệu gốc và SUS/SEQ được cập nhật.');
  return report;
}

/** Installable FORM trigger, not a spreadsheet trigger. */
function khiGuiKhaoSat(e) {
  if (!e || !e.response) throw new Error('Hàm này chạy tự động khi gửi form. Dùng dongBoKetQua để tính lại.');
  const lock=LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    const meta=JSON.parse(PropertiesService.getScriptProperties().getProperty('ESHOP_SURVEY'));
    const ss=SpreadsheetApp.openById(meta.sheetId);
    prepareSeqSheets_(ss);
    storeResponse_(ss,meta,e.response);
    refreshChartData_(ss);
  } finally { lock.releaseLock(); }
}

function scoreSus_(values) {
  if (values.length!==10 || !values.every(v=>v!=='' && v!==null && Number.isInteger(Number(v)) && Number(v)>=1 && Number(v)<=5)) return '';
  return values.reduce((sum,v,i)=>sum+(i%2===0 ? Number(v)-1 : 5-Number(v)),0)*2.5;
}
function safeText_(value) {
  const text=String(value===undefined || value===null ? '' : value);
  return /^[=+@-]/.test(text) ? "'"+text : text;
}

/** Update the existing spreadsheet only; formulas follow future responses automatically. */
function capNhatDashboard() {
  const lock=LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    const meta=JSON.parse(PropertiesService.getScriptProperties().getProperty('ESHOP_SURVEY') || 'null');
    if (!meta || !meta.ready) throw new Error('Hãy chạy trong dự án Apps Script đã tạo khảo sát.');
    const ss=SpreadsheetApp.openById(meta.sheetId);
    prepareSeqSheets_(ss);
    rebuildWideSeq_(ss);
    const dashboard=buildDashboard_(ss);
    buildSummary_(ss);
    styleDataSheets_(ss);
    ensureChartEditTrigger_(meta.sheetId);
    SpreadsheetApp.flush();
    removeLegacySeq_(ss);
    console.log('Dashboard: '+ss.getUrl()+'#gid='+dashboard.getSheetId());
    ['SUS','SEQ','QUAN_SAT'].forEach(name=>console.log(name+': '+Math.max(0,ss.getSheetByName(name).getLastRow()-1)+' dòng dữ liệu.'));
    console.log('Số nhiệm vụ có SEQ trung bình dạng số: '+dashboard.getRange('B7:B18').getValues().filter(r=>typeof r[0]==='number').length+'/12.');
    console.log('Nếu đã có phản hồi trước khi bỏ chọn vai trò, chạy dongBoKetQua một lần để cập nhật SUS/SEQ.');
  } finally { lock.releaseLock(); }
}

function buildDashboard_(ss) {
  ['SUS','SEQ','QUAN_SAT'].forEach(name=>{
    if (!ss.getSheetByName(name)) throw new Error('Thiếu tab '+name+'. Chưa cập nhật dashboard.');
  });
  const marker='DASHBOARD EShop';
  let sheet=ss.getSheetByName('DASHBOARD');
  if (sheet && sheet.getRange('A1').getValue()!==marker)
    throw new Error('Tab DASHBOARD đã có nội dung riêng. Đổi tên tab đó trước khi tạo dashboard khảo sát.');
  if (!sheet) sheet=ss.insertSheet('DASHBOARD');
  const rows=dashboardRows_();
  // Unmerge before writing again; merged title rows must not swallow source cells.
  sheet.getRange('A1:Q5').breakApart();
  sheet.getRange(1,1,rows.length,17).setValues(rows).setWrap(true);
  sheet.setHiddenGridlines(true);
  sheet.setTabColor('#2563eb');
  sheet.getRange('A1:Q65').setFontFamily('Arial').setFontSize(10).setVerticalAlignment('middle');
  sheet.getRange('A1:Q5').breakApart();
  for(let r=1;r<=5;r++) sheet.getRange(r,1,1,17).merge();
  sheet.getRange('A1:Q1').setBackground('#16324f').setFontColor('#ffffff').setFontSize(20).setFontWeight('bold');
  sheet.getRange('A2:Q5').setBackground('#eff6ff').setFontColor('#334155');
  sheet.setRowHeight(1,48);
  sheet.setRowHeights(2,4,28);
  sheet.setRowHeight(6,48);
  sheet.setRowHeights(7,SURVEY.tasks.length,28);
  sheet.setFrozenRows(0);
  sheet.setFrozenColumns(0);
  sheet.setColumnWidths(1,12,90);
  sheet.setColumnWidth(1,220);
  sheet.setColumnWidth(10,260);
  sheet.getRange('A6:Q6').setBackground('#dbeafe').setFontWeight('bold');
  for(let i=0;i<SURVEY.tasks.length;i++) sheet.getRange(i+7,1,1,17).setBackground(i%2 ? '#f1f5f9' : '#ffffff');
  sheet.getRange(7,2,SURVEY.tasks.length,1).setNumberFormat('0.00');
  sheet.getRange('K7:K9').setNumberFormat('0.00');
  ['B7:C18','F7:H18','K7:L9','O7:Q18'].forEach(a1=>sheet.getRange(a1).setHorizontalAlignment('center'));
  // Charts use dedicated numeric cells, independent of formula recalculation/rendering.
  refreshChartData_(ss);
  SpreadsheetApp.flush();
  // Replace only charts owned by this function; retain user-added charts.
  sheet.getCharts().filter(c=>String(c.getOptions().get('title') || '').startsWith('EShop | '))
    .forEach(c=>sheet.removeChart(c));
  const last=SURVEY.tasks.length+80;
  const specs=[
    {range:'A80:B'+last,title:'EShop | SEQ trung bình theo nhiệm vụ',row:22,col:1,max:7,stacked:false},
    {range:'E80:H'+last,title:'EShop | Kết quả tự báo cáo từ Form',row:22,col:7,stacked:true},
    {range:'J80:K83',title:'EShop | SUS trung bình theo phạm vi phiên',row:43,col:1,max:100,stacked:false},
    {range:'N80:Q'+last,title:'EShop | Quan sát của điều phối viên (nhập QUAN_SAT)',row:43,col:7,stacked:true}
  ];
  specs.forEach(spec=>{
    const chart=sheet.newChart().asColumnChart().addRange(sheet.getRange(spec.range)).setNumHeaders(1)
      .setTransposeRowsAndColumns(false)
      .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.SHOW_BOTH)
      .setOption('useFirstColumnAsDomain',true).setOption('useFirstRowAsHeaders',true)
      .setPosition(spec.row,spec.col,0,0).setOption('title',spec.title)
      .setOption('width',620).setOption('height',380)
      .setOption('fontName','Arial').setOption('backgroundColor','#ffffff')
      .setOption('colors',spec.stacked ? ['#16a34a','#f59e0b','#ef4444'] : ['#2563eb'])
      .setOption('legend',{position:spec.stacked ? 'bottom' : 'none'})
      .setOption('vAxis',spec.max ? {viewWindow:{min:0,max:spec.max}} : {viewWindow:{min:0}})
      .setOption('isStacked',spec.stacked);
    sheet.insertChart(chart.build());
  });
  return sheet;
}

function chartDataRows_(seqRows,susRows,obsRows) {
  const rows=Array.from({length:SURVEY.tasks.length+1},()=>Array(17).fill(''));
  rows[0]=['Nhiệm vụ','SEQ trung bình','Số lượt SEQ','','Task tự báo cáo','Độc lập','Có hỗ trợ','Thất bại','','Phạm vi phiên','SUS trung bình','Số phiên hợp lệ','','Task quan sát','Độc lập','Có hỗ trợ','Thất bại'];
  const mean=values=>values.length ? values.reduce((sum,v)=>sum+v,0)/values.length : '';
  const numeric=(value,min,max)=>value!=='' && value!==null && value!==undefined && Number.isFinite(Number(value)) && Number(value)>=min && Number(value)<=max;
  SURVEY.tasks.forEach((task,i)=>{
    const row=rows[i+1],col=4+3*i;
    const scores=seqRows.filter(r=>SURVEY.statuses.indexOf(r[col])>=0 && SURVEY.statuses.indexOf(r[col])<3 && numeric(r[col+1],1,7)).map(r=>Number(r[col+1]));
    row[0]=row[4]=row[13]=task.id;row[1]=mean(scores);row[2]=scores.length;
    [0,1,2].forEach(n=>{
      row[5+n]=seqRows.filter(r=>r[col]===SURVEY.statuses[n]).length;
      row[14+n]=obsRows.filter(r=>r[1]===task.id && r[2]===SURVEY.statuses[n]).length;
    });
  });
  SURVEY.roles.concat(['Toàn bộ EShop (không chọn vai trò)']).forEach((role,i)=>{
    const values=susRows.filter(r=>r[3]===role && r[16]==='Hợp lệ' && numeric(r[15],0,100)).map(r=>Number(r[15]));
    rows[i+1][9]=role;rows[i+1][10]=mean(values);rows[i+1][11]=values.length;
  });
  return rows;
}

function refreshChartData_(ss) {
  const dashboard=ss.getSheetByName('DASHBOARD');
  if(!dashboard || dashboard.getRange('A1').getValue()!=='DASHBOARD EShop')return;
  const read=(name,width)=>{
    const sheet=ss.getSheetByName(name);
    return sheet && sheet.getLastRow()>1 ? sheet.getRange(2,1,sheet.getLastRow()-1,width).getValues() : [];
  };
  const rows=chartDataRows_(read('SEQ',wideSeqHeader_().length),read('SUS',17),read('QUAN_SAT',10));
  dashboard.getRange(80,1,rows.length,17).setValues(rows);
  dashboard.hideRows(80,rows.length);
}

function ensureChartEditTrigger_(sheetId) {
  if(!ScriptApp.getProjectTriggers().some(t=>t.getHandlerFunction()==='khiSuaQuanSat' && t.getTriggerSourceId()===sheetId))
    ScriptApp.newTrigger('khiSuaQuanSat').forSpreadsheet(sheetId).onEdit().create();
}

function khiSuaQuanSat(e) {
  if(!e || !e.range || e.range.getSheet().getName()!=='QUAN_SAT')return;
  const meta=JSON.parse(PropertiesService.getScriptProperties().getProperty('ESHOP_SURVEY') || 'null');
  if(!meta || e.source.getId()!==meta.sheetId)return;
  const lock=LockService.getScriptLock();lock.waitLock(30000);
  try {refreshChartData_(e.source);} finally {lock.releaseLock();}
}

function dashboardRows_() {
  const rows=Array.from({length:SURVEY.tasks.length+6},()=>Array(17).fill(''));
  rows[0][0]='DASHBOARD EShop';
  rows[1][0]='SEQ, SUS và kết quả tự báo cáo lấy từ Form. Biểu đồ quan sát riêng dùng QUAN_SAT do điều phối viên nhập.';
  rows[2][0]='Chưa có dữ liệu: điểm trung bình để trống. Số lượt 0 nghĩa là chưa có mẫu hợp lệ, không phải điểm 0.';
  rows[3][0]='SEQ: 1 rất khó → 7 rất dễ. SUS: 0–100, không phải % hài lòng. Xem số mẫu cạnh từng điểm.';
  rows[4][0]='Phiên không chọn vai trò được tổng hợp riêng; không suy diễn SUS riêng khách hàng/admin từ điểm của toàn phiên.';
  rows[5]=['Nhiệm vụ','SEQ trung bình','Số lượt SEQ','','Task tự báo cáo','Độc lập','Có hỗ trợ','Thất bại','','Phạm vi phiên','SUS trung bình','Số phiên hợp lệ','','Task quan sát','Độc lập','Có hỗ trợ','Thất bại'];
  SURVEY.tasks.forEach((task,i)=>{
    const r=i+7,row=rows[i+6];
    const stats=seqStats_(i);
    row[0]=task.id;
    row[1]=stats.average;
    row[2]=stats.count;
    row[4]=task.id;
    row[13]=task.id;
    [0,1,2].forEach(n=>{
      row[5+n]=stats.status(n);
      row[14+n]='=COUNTIFS(QUAN_SAT!B2:B,N'+r+',QUAN_SAT!C2:C,"'+SURVEY.statuses[n]+'")';
    });
  });
  SURVEY.roles.concat(['Toàn bộ EShop (không chọn vai trò)']).forEach((role,i)=>{
    const r=i+7,row=rows[i+6];
    row[9]=role;
    row[10]='=IFERROR(AVERAGEIFS(SUS!P2:P,SUS!D2:D,J'+r+',SUS!Q2:Q,"Hợp lệ"),"")';
    row[11]='=COUNTIFS(SUS!D2:D,J'+r+',SUS!Q2:Q,"Hợp lệ")';
  });
  return rows;
}

function summaryRows_() {
  const rows=Array.from({length:40},()=>Array(12).fill(''));
  rows[0][0]='TỔNG HỢP KHẢO SÁT ESHOP';
  rows[1][0]='SUS và SEQ từ Form • Quan sát nhập riêng • Dữ liệu thử phải loại trước khi báo cáo';
  rows[2][0]='Nếu SUS/SEQ trống, chạy dongBoKetQua; quan sát 0 nghĩa là chưa có lượt được nhập, không phải thất bại.';
  rows[4].splice(0,4,'Phạm vi phiên','Số phiên SUS hợp lệ','SUS trung bình','Ghi chú');
  SURVEY.roles.concat(['Toàn bộ EShop (không chọn vai trò)']).forEach((role,i)=>{
    const r=i+6;
    rows[r-1].splice(0,4,role,'=COUNTIFS(SUS!D2:D,A'+r+',SUS!Q2:Q,"Hợp lệ")',
      '=IFERROR(AVERAGEIFS(SUS!P2:P,SUS!D2:D,A'+r+',SUS!Q2:Q,"Hợp lệ"),"")','Thang 0–100; không phải % hài lòng');
  });
  rows[9][0]='01 / QUAN SÁT CỦA ĐIỀU PHỐI VIÊN — nhập dữ liệu tại QUAN_SAT';
  rows[10]=['Task','Lượt quan sát hợp lệ','Độc lập','Có hỗ trợ','Thất bại','Tỷ lệ độc lập','Tỷ lệ có hỗ trợ','Trung vị thời gian thành công (giây)','Lỗi TB/lượt có ghi lỗi','Số lượt SEQ','SEQ trung vị','SEQ trung bình'];
  rows[26][0]='02 / KẾT QUẢ TỰ BÁO CÁO — tự cập nhật từ Form, không thay thế quan sát';
  rows[27].splice(0,8,'Task','Tên nhiệm vụ','Độc lập','Có hỗ trợ','Thất bại','Chưa làm','Sự cố môi trường','Tổng lượt tự báo cáo');
  SURVEY.tasks.forEach((task,i)=>{
    let r=i+12,row=rows[r-1];
    const stats=seqStats_(i);
    row[0]=task.id;
    [0,1,2].forEach(n=>row[n+2]='=COUNTIFS(QUAN_SAT!B2:B,A'+r+',QUAN_SAT!C2:C,"'+SURVEY.statuses[n]+'")');
    row[1]='=SUM(C'+r+':E'+r+')';
    row[5]='=IFERROR(C'+r+'/B'+r+',"")';row[6]='=IFERROR(D'+r+'/B'+r+',"")';
    const success='((QUAN_SAT!C2:C="'+SURVEY.statuses[0]+'")+(QUAN_SAT!C2:C="'+SURVEY.statuses[1]+'"))';
    const valid='('+success+'+(QUAN_SAT!C2:C="'+SURVEY.statuses[2]+'"))';
    row[7]='=IFERROR(MEDIAN(FILTER(QUAN_SAT!D2:D,QUAN_SAT!B2:B=A'+r+','+success+',ISNUMBER(QUAN_SAT!D2:D))),"")';
    row[8]='=IFERROR(AVERAGE(FILTER(QUAN_SAT!E2:E,QUAN_SAT!B2:B=A'+r+','+valid+',ISNUMBER(QUAN_SAT!E2:E))),"")';
    row[9]=stats.count;
    row[10]=stats.median;
    row[11]=stats.average;
    r=i+29;row=rows[r-1];row[0]=task.id;row[1]=task.name;
    SURVEY.statuses.forEach((status,n)=>row[n+2]=stats.status(n));
    row[7]='=SUM(C'+r+':G'+r+')';
  });
  return rows;
}

function buildSummary_(ss) {
  const sheet=ss.getSheetByName('TONG_HOP') || ss.insertSheet('TONG_HOP');
  sheet.getRange('A1:L40').breakApart();
  sheet.getRange('A1:L40').setValues(summaryRows_()).setFontFamily('Arial').setFontSize(10).setWrap(true).setVerticalAlignment('middle');
  sheet.setHiddenGridlines(true);sheet.setTabColor('#0d9488');sheet.setFrozenRows(5);
  sheet.setColumnWidths(1,12,145);sheet.setColumnWidth(1,260);sheet.setColumnWidth(2,240);
  sheet.setRowHeights(1,40,32);
  [1,2,3,10,27].forEach(r=>sheet.getRange(r,1,1,12).merge());
  [1,10,27].forEach(r=>sheet.getRange(r,1,1,12).setBackground('#16324f').setFontColor('#ffffff').setFontWeight('bold'));
  sheet.getRange('A1:L1').setFontSize(20);sheet.setRowHeight(1,48);
  [5,11,28].forEach(r=>{sheet.getRange(r,1,1,12).setBackground('#ccfbf1').setFontColor('#134e4a').setFontWeight('bold');sheet.setRowHeight(r,64);});
  [[6,8],[12,23],[29,40]].forEach(([start,end])=>{
    for(let r=start;r<=end;r++)sheet.getRange(r,1,1,12).setBackground(r%2 ? '#f1f5f9' : '#ffffff').setFontColor('#334155');
  });
  sheet.getRange('F12:G23').setNumberFormat('0.0%');
  sheet.getRange('C6:C8').setNumberFormat('0.00');
  sheet.getRange('H12:I23').setNumberFormat('0.00');
  sheet.getRange('K12:L23').setNumberFormat('0.00');
  ['B6:C8','B12:L23','C29:H40'].forEach(a1=>sheet.getRange(a1).setHorizontalAlignment('center'));
  return sheet;
}

function styleDataSheets_(ss) {
  ['SUS','SEQ','QUAN_SAT','VAN_DE','HUONG_DAN'].forEach(name=>{
    const sheet=ss.getSheetByName(name);
    if(!sheet) return;
    const width=sheet.getLastColumn(),height=Math.max(sheet.getLastRow(),2);
    sheet.setHiddenGridlines(true);sheet.setFrozenRows(1);
    sheet.setTabColor(name==='QUAN_SAT' ? '#f59e0b' : '#64748b');
    sheet.getRange(1,1,height,width).setFontFamily('Arial').setFontSize(10).setVerticalAlignment('middle').setWrap(true);
    sheet.getRange(1,1,1,width).setBackground('#16324f').setFontColor('#ffffff').setFontWeight('bold');
    sheet.setRowHeight(1,44);sheet.setColumnWidths(1,width,170);
    if(name==='SUS') {
      // Include headers and future rows; numeric-looking text must also be centered.
      sheet.getRange('F:P').setHorizontalAlignment('center').setVerticalAlignment('middle');
      sheet.setColumnWidths(6,11,78);
      sheet.getRange('F2:O').setNumberFormat('0');sheet.getRange('P2:P').setNumberFormat('0.0');
      sheet.getRange(2,1,height-1,3).setWrap(false);
      sheet.setRowHeights(2,height-1,36);
    }
    if(name==='SEQ') SURVEY.tasks.forEach((task,i)=>{
      const col=5+i*3;
      sheet.setColumnWidth(col,210);sheet.setColumnWidth(col+1,90);sheet.setColumnWidth(col+2,360);
      sheet.getRange(2,col+1,height-1,1).setHorizontalAlignment('center').setNumberFormat('0');
    });
    if(name==='QUAN_SAT')sheet.setColumnWidth(9,420);
    if(name==='HUONG_DAN')sheet.setColumnWidth(2,780);
  });
  // Include the native Form responses and any other existing tab, without changing values.
  ss.getSheets().forEach(sheet=>centerNumericCells_(sheet,sheet.getLastRow(),sheet.getLastColumn()));
}

function centerNumericCells_(sheet,height,width) {
  if(height<2 || width<1) return;
  const rows=sheet.getRange(2,1,height-1,width).getValues(),ranges=[];
  rows.forEach((row,i)=>row.forEach((value,j)=>{
    if(typeof value==='number' || value instanceof Date)ranges.push(columnLetter_(j+1)+(i+2));
  }));
  for(let i=0;i<ranges.length;i+=500)sheet.getRangeList(ranges.slice(i,i+500)).setHorizontalAlignment('center');
}

function columnLetter_(col) {
  let text='';
  while(col>0){col--;text=String.fromCharCode(65+col%26)+text;col=Math.floor(col/26);}
  return text;
}

function seqStats_(i) {
  const statusCol=columnLetter_(5+3*i),scoreCol=columnLetter_(6+3*i);
  const status='SEQ!'+statusCol+'2:'+statusCol,score='SEQ!'+scoreCol+'2:'+scoreCol;
  const valid='FILTER('+score+',ISNUMBER('+score+'),'+score+'>=1,'+score+'<=7)';
  return {
    count:'=COUNTIFS('+score+',">=1",'+score+',"<=7")',
    average:'=IFERROR(AVERAGE('+valid+'),"")',
    median:'=IFERROR(MEDIAN('+valid+'),"")',
    status:n=>'=COUNTIF('+status+',"'+SURVEY.statuses[n]+'")'
  };
}

function wideSeqHeader_() {
  return ['ID phản hồi','Thời điểm','Mã phiên','Phạm vi phiên'].concat(
    ...SURVEY.tasks.map(t=>[t.id+' — Kết quả',t.id+' — SEQ',t.id+' — Nhận xét']));
}

/** Migrate the old SEQ tab by renaming it; retain every detail row and its ID. */
function prepareSeqSheets_(ss) {
  let detail=ss.getSheetByName('SEQ_CHI_TIET'),wide=ss.getSheetByName('SEQ');
  if(!detail && wide && wide.getRange(1,5).getValue()==='Task') {
    detail=wide.setName('SEQ_CHI_TIET');wide=null;
  }
  if(!wide) wide=ss.insertSheet('SEQ');
  const header=wideSeqHeader_();
  if(wide.getMaxColumns()<header.length)wide.insertColumnsAfter(wide.getMaxColumns(),header.length-wide.getMaxColumns());
  wide.getRange(1,1,1,header.length).setValues([header]);
}

function wideSeqRows_(details) {
  const groups=new Map();
  details.forEach(row=>{
    if(!row[0]) return;
    if(!groups.has(row[0]))groups.set(row[0],[row[0],row[1],row[2],''].concat(Array(SURVEY.tasks.length*3).fill('')));
    const target=groups.get(row[0]),i=SURVEY.tasks.findIndex(t=>t.id===row[4]);
    if(i>=0)target.splice(4+i*3,3,row[5],row[6],row[7]);
  });
  return Array.from(groups.values());
}

function rebuildWideSeq_(ss) {
  const detail=ss.getSheetByName('SEQ_CHI_TIET'),wide=ss.getSheetByName('SEQ');
  if(!detail) return;
  const legacy=wideSeqRows_(detail.getLastRow()>1 ? detail.getRange(2,1,detail.getLastRow()-1,8).getValues() : []);
  const current=wide.getLastRow()>1 ? wide.getRange(2,1,wide.getLastRow()-1,wideSeqHeader_().length).getValues() : [];
  const merged=new Map(current.filter(r=>r[0]).map(r=>[r[0],r]));
  // Scope is available in SUS; avoid inferring overall scope from one task's role.
  const sus=ss.getSheetByName('SUS'),scope=new Map();
  if(sus.getLastRow()>1)sus.getRange(2,1,sus.getLastRow()-1,4).getValues().forEach(r=>scope.set(r[0],r[3]));
  legacy.forEach(row=>{
    row[3]=scope.get(row[0]) || 'Không có SUS / chưa xác định phạm vi';
    if(!merged.has(row[0]))merged.set(row[0],row);
    else {
      const target=merged.get(row[0]);
      SURVEY.tasks.forEach((task,i)=>{const col=4+i*3;if(!target[col])target.splice(col,3,...row.slice(col,col+3));});
    }
  });
  const rows=Array.from(merged.values());
  if(wide.getLastRow()>1)wide.getRange(2,1,wide.getLastRow()-1,wideSeqHeader_().length).clearContent();
  if(rows.length)wide.getRange(2,1,rows.length,wideSeqHeader_().length).setValues(rows);
}

function removeLegacySeq_(ss) {
  const detail=ss.getSheetByName('SEQ_CHI_TIET');
  if(!detail) return;
  const wide=ss.getSheetByName('SEQ');
  const ids=new Set(wide.getLastRow()>1 ? wide.getRange(2,1,wide.getLastRow()-1,1).getValues().map(r=>r[0]) : []);
  if(detail.getLastRow()>1 && detail.getRange(2,1,detail.getLastRow()-1,1).getValues().some(r=>r[0] && !ids.has(r[0])))
    throw new Error('Còn phản hồi chưa chuyển sang SEQ. Giữ lại SEQ_CHI_TIET để tránh mất dữ liệu.');
  ss.deleteSheet(detail);
}

function storeResponse_(ss,meta,response) {
  const values={};
  response.getItemResponses().forEach(ir=>values[ir.getItem().getId()]=ir.getResponse());
  if (values[meta.consentId]!==SURVEY.consent) return;
  const id=response.getId(), stamp=response.getTimestamp();
  // Older forms may still contain the session-code question; new forms use response ID.
  const pid=safeText_(values[meta.pidId] || id), role=values[meta.roleId] || 'Toàn bộ EShop (không chọn vai trò)';
  const susSheet=ss.getSheetByName('SUS'),wideSheet=ss.getSheetByName('SEQ');
  // Replace derived rows by response ID if a trigger is delivered more than once.
  [susSheet,wideSheet].forEach(sheet=>{
    const n=sheet.getLastRow()-1;
    if (n>0) {
      const ids=sheet.getRange(2,1,n,1).getValues();
      for (let i=ids.length-1;i>=0;i--) if(ids[i][0]===id) sheet.deleteRow(i+2);
    }
  });
  if (values[meta.experiencedId]==='Có') {
    const answers=meta.susItems.map(itemId=>{
      const value=values[itemId];
      return value===undefined || value==='' ? '' : (Number.isInteger(Number(value)) && Number(value)>=1 && Number(value)<=5 ? Number(value) : value);
    });
    const score=scoreSus_(answers);
    susSheet.appendRow([id,stamp,pid,safeText_(role),safeText_(values[meta.frequencyId])].concat(answers,[score,score==='' ? 'Thiếu / sai dữ liệu' : 'Hợp lệ']));
  }
  const rows=[];
  // Read answered tasks even when the role question was removed from the live Form.
  SURVEY.tasks.forEach(task=>{
    const fields=meta.taskItems[task.id], status=values[fields.status];
    if (!status) return;
    const raw=values[fields.seq];
    const seq=SURVEY.statuses.indexOf(status)>=0 && SURVEY.statuses.indexOf(status)<3 && raw!=='' && Number.isInteger(Number(raw)) && Number(raw)>=1 && Number(raw)<=7 ? Number(raw) : '';
    rows.push([id,stamp,pid,safeText_(SURVEY.roles[task.role]),task.id,safeText_(status),seq,safeText_(values[fields.comment])]);
  });
  if(rows.length) {
    const wide=wideSeqRows_(rows)[0];wide[3]=safeText_(role);
    wideSheet.appendRow(wide);
  }
}

/** Creates THREE synthetic Form responses. Run manually only for testing. */
function taoPhanHoiThu() {
  const lock=LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    const props=PropertiesService.getScriptProperties();
    const meta=JSON.parse(props.getProperty('ESHOP_SURVEY') || 'null');
    if (!meta || !meta.ready) throw new Error('Hãy chạy trong dự án Apps Script đã tạo khảo sát.');
    const form=FormApp.openById(meta.formId),ss=SpreadsheetApp.openById(meta.sheetId);
    prepareSeqSheets_(ss);
    const saved=JSON.parse(props.getProperty('ESHOP_TEST_RESPONSES') || 'null') || {formId:meta.formId,ids:[]};
    if (saved.formId!==meta.formId) throw new Error('Bộ dữ liệu thử thuộc Form khác. Chưa gửi phản hồi.');
    const existing=form.getResponses();
    if(saved.ids.some(id=>!existing.some(r=>r.getId()===id)))
      throw new Error('Một số phản hồi thử đã được xóa. Không tạo lại tự động; kiểm tra ESHOP_TEST_RESPONSES.');
    // Build all responses before submitting any, so unknown question types fail early.
    const drafts=[0,1,2].map(n=>taoBanTraLoiThu_(form,meta,n));
    for(let n=0;n<3;n++) {
      let response=saved.ids[n] ? existing.find(r=>r.getId()===saved.ids[n]) : null;
      if (!response) {
        response=drafts[n].submit();
        saved.ids[n]=response.getId();
        props.setProperty('ESHOP_TEST_RESPONSES',JSON.stringify(saved));
      }
      // API submissions do not fire the installable form-submit trigger.
      storeResponse_(ss,meta,response);
      console.log('DU_LIEU_THU_'+(n+1)+' | ID phản hồi: '+response.getId()+' | SUS kỳ vọng: '+[50,100,0][n]);
    }
    refreshChartData_(ss);
    console.log('Đã có 3 phản hồi giả lập. Chạy lại không gửi thêm. QUAN_SAT được giữ nguyên.');
    console.log('Đây là dữ liệu thử, cần loại trước khi phân tích chính thức. Chưa kiểm chứng trigger hay điều hướng bằng giao diện.');
    return hienThiLienKet();
  } finally { lock.releaseLock(); }
}

function taoBanTraLoiThu_(form,meta,n) {
  const answers={},types=FormApp.ItemType;
  if(meta.susItems.length!==10 || [meta.consentId,meta.experiencedId].concat(meta.susItems).some(id=>!form.getItemById(id)))
    throw new Error('Cấu hình đồng thuận/SUS không còn khớp Form. Chưa gửi bộ phản hồi thử.');
  answers[meta.consentId]=SURVEY.consent;
  answers[meta.experiencedId]='Có';
  const roleItem=meta.roleId ? form.getItemById(meta.roleId) : null;
  if(roleItem) answers[meta.roleId]=SURVEY.roles[n%2];
  meta.susItems.forEach((id,i)=>answers[id]=n===0 ? 3 : (i%2===0 ? (n===1 ? 5 : 1) : (n===1 ? 1 : 5)));
  SURVEY.tasks.forEach((task,i)=>{
    const fields=meta.taskItems[task.id];
    if (!fields || !form.getItemById(fields.status) || !form.getItemById(fields.seq))
      throw new Error('Không tìm thấy câu hỏi '+task.id+'. Chưa gửi bộ phản hồi thử.');
    if(roleItem && task.role!==n%2) return;
    const status=(i+n)%5;
    answers[fields.status]=SURVEY.statuses[status];
    if(status<3) answers[fields.seq]=1+(i+n)%7;
    answers[fields.comment]='[DU_LIEU_THU_'+(n+1)+'] Phản hồi giả lập để kiểm tra hệ thống; không phải người tham gia thật.';
  });
  if (meta.pidId) answers[meta.pidId]='P900'+(n+1)+'_R1';
  let draft=form.createResponse();
  form.getItems().forEach(item=>{
    const id=item.getId(),type=item.getType();
    if(type===types.PAGE_BREAK || type===types.SECTION_HEADER || type===types.IMAGE || type===types.VIDEO) return;
    let value=answers[id],question;
    if(type===types.MULTIPLE_CHOICE) {
      question=item.asMultipleChoiceItem();
      // Unanswered task outcomes belong to the other role's branch.
      if(SURVEY.tasks.some(t=>meta.taskItems[t.id].status===id) && value===undefined) return;
      const choices=question.getChoices().map(c=>c.getValue());
      if(value===undefined) value=choices.includes('18–24') ? '18–24' : choices[0];
      if(!choices.includes(value)) throw new Error('Lựa chọn đã thay đổi: '+item.getTitle()+'. Chưa gửi bộ phản hồi thử.');
    } else if(type===types.SCALE) {
      question=item.asScaleItem();
      if(SURVEY.tasks.some(t=>meta.taskItems[t.id].seq===id) && value===undefined) return;
      if(value===undefined) value=question.getLowerBound();
    } else if(type===types.TEXT || type===types.PARAGRAPH_TEXT) {
      question=type===types.TEXT ? item.asTextItem() : item.asParagraphTextItem();
      if(value===undefined) value='[DU_LIEU_THU_'+(n+1)+'] Dữ liệu giả lập để kiểm tra; không dùng cho báo cáo.';
    } else throw new Error('Chưa hỗ trợ tạo mẫu cho câu: '+item.getTitle()+'. Chưa gửi bộ phản hồi thử.');
    draft=draft.withItemResponse(question.createResponse(value));
  });
  return draft;
}

/** Rebuild derived data only. Native responses and QUAN_SAT stay untouched. */
function dongBoKetQua() {
  const lock=LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    const meta=JSON.parse(PropertiesService.getScriptProperties().getProperty('ESHOP_SURVEY') || 'null');
    if(!meta || !meta.ready) throw new Error('Chưa có khảo sát hoàn chỉnh.');
    const form=FormApp.openById(meta.formId), responses=form.getResponses();
    const ss=SpreadsheetApp.openById(meta.sheetId);
    prepareSeqSheets_(ss);
    ['SUS','SEQ'].forEach(name=>{const s=ss.getSheetByName(name); if(s.getLastRow()>1) s.getRange(2,1,s.getLastRow()-1,s.getLastColumn()).clearContent();});
    responses.forEach(response=>storeResponse_(ss,meta,response));
    // Discard stale derived detail only AFTER every current Form response has been rebuilt.
    const legacy=ss.getSheetByName('SEQ_CHI_TIET');
    if(legacy && legacy.getLastRow()>1)legacy.getRange(2,1,legacy.getLastRow()-1,8).clearContent();
    refreshChartData_(ss);
    console.log('Đã đồng bộ '+responses.length+' phản hồi.');
  } finally { lock.releaseLock(); }
}
