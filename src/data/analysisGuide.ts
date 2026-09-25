export interface AnalysisSection {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  content: string;
  keyPoints: {
    heading: string;
    description: string;
    example?: string;
  }[];
}

export const DOCUMENT_ANALYSIS_DATA = {
  documentTitle: "LÀM CÁCH NÀO ĐẠT ĐIỂM CAO TRONG BÀI THI NÓI HSG TIẾNG ANH 12",
  targetExam: "Kỳ thi Chọn Học Sinh Giỏi Quốc Gia (HSGQG) & Cấp Tỉnh / Thành Phố môn Tiếng Anh Lớp 12",
  documentScope: "Gồm 20 Chuyên đề nói (Speaking Topics) nghị luận xã hội - công nghệ - môi trường thời sự 2026, đi kèm Dàn ý chi tiết chuẩn thời gian 5 phút, Kho từ vựng C1/C2 & Collocations học thuật, Số liệu nghiên cứu thực tế (Empirical Data) và Bài phát biểu mẫu hoàn chỉnh (Full Scripted Sample Talk).",
  
  corePillars: [
    {
      title: "Khung thời gian chuẩn 5 phút (Golden Timing Blueprint)",
      description: "Phân bổ chính xác từng giây: Mở bài (approx. 45s) -> Luận điểm 1 (approx. 1m 30s) -> Luận điểm 2 (approx. 2m 00s) -> Kết bài & Giải pháp (approx. 45s). Giúp thí sinh nói vừa khít 4:45 - 5:00, không bị ngắt ngang hay thiếu giờ.",
      stat: "45s - 90s - 120s - 45s"
    },
    {
      title: "Tư duy Biện chứng (Dialectical / Double-Edged Sword)",
      description: "Không nhìn nhận vấn đề một chiều. Mọi chủ đề đều được phân tích dưới lăng kính mâu thuẫn: Cơ hội vs Rủi ro, Tự do vs Bị bóc lột, Công nghệ đột phá vs Suy thoái nhận thức và bất bình đẳng sinh thái.",
      stat: "Thesis - Antithesis - Synthesis"
    },
    {
      title: "Hệ thống từ vựng C1/C2 & Thuật ngữ liên ngành",
      description: "Không dùng từ vựng chung chung. Tài liệu trang bị các cụm từ học thuật chuyên sâu thuộc Triết học, Thần kinh học, Xã hội học, Kinh tế học (Epistemological nihilism, Hedonic treadmill, Biophilic urbanism, Cognitive offloading).",
      stat: "140+ Thuật ngữ C1/C2"
    },
    {
      title: "Số liệu Nghiên cứu thực nghiệm uy tín toàn cầu",
      description: "Khác biệt của bài nói điểm 9.5-10.0 so với bài nói phổ thông là có viện dẫn số liệu từ các viện nghiên cứu hàng đầu: Harvard Adult Development Study, MIT, WEF, UNESCO, The Lancet, Pew Research Center, UNEP.",
      stat: "100% Chủ đề có Data"
    }
  ],

  rubricBreakdown: [
    {
      criterion: "Fluency & Coherence (Trôi chảy & Mạch lạc)",
      weight: "25%",
      hsgStandard: "Nói liền mạch, duy trì tốc độ 120-140 từ/phút trong suốt 5 phút mà không ngập ngừng kéo dài. Sử dụng hệ thống liên từ chỉ dẫn (Signposting language) chuẩn mực như: 'Let us first examine...', 'However, these benefits cannot blindly justify...', 'This brings us to...', 'In conclusion...'",
      proTip: "Tận dụng 45 giây kết luận để đưa ra giải pháp 2 mũi nhọn (Two-pronged approach / Tripartite collaboration) thay vì chỉ tóm tắt lại bài."
    },
    {
      criterion: "Lexical Resource (Vốn từ vựng học thuật)",
      weight: "25%",
      hsgStandard: "Sử dụng chính xác các Collocation và Thuật ngữ trừu tượng C1-C2. Tránh các từ thông dụng (rất xấu/tốt) mà thay bằng 'catastrophic ecological footprint', 'arbitrary de-platforming', 'existential workplace cynicism'.",
      proTip: "Mỗi luận điểm phải gài ít nhất 2-3 cụm từ vựng mục tiêu, giải thích ngắn gọn theo ngữ cảnh để chứng minh khả năng làm chủ ngôn ngữ với Ban Giám Khảo."
    },
    {
      criterion: "Grammatical Range & Accuracy (Cấu trúc ngữ pháp cao cấp)",
      weight: "25%",
      hsgStandard: "Sử dụng linh hoạt các cấu trúc đảo ngữ (Inversion), câu phức có mệnh đề quan hệ rút gọn, thể giả định, câu chẻ (Cleft sentences: 'It is this exact competitive friction that gave us...'), và danh từ hóa (Nominalization).",
      proTip: "Dùng các cặp đối lập 'While..., it simultaneously...' trong Thesis Statement để thể hiện chiều sâu tư duy ngay từ 45 giây đầu tiên."
    },
    {
      criterion: "Depth of Critical Thinking & Task Fulfillment (Tư duy phản biện)",
      weight: "25%",
      hsgStandard: "Giải quyết triệt để yêu cầu đề bài. Đưa ra dẫn chứng thực tế (Empirical data) và nhìn nhận đa chiều (kinh tế, tâm lý học, đạo đức xã hội, luật pháp quốc tế) chứ không sa vào kể lể cá nhân.",
      proTip: "HSGQG đòi hỏi tầm nhìn của một nhà chính sách trẻ (Youth policymaker): Luôn kết thúc bằng khuyến nghị vĩ mô cho chính phủ, nhà trường và trách nhiệm cá nhân."
    }
  ],

  strategicFormulas: [
    {
      step: "BƯỚC 1: MỞ BÀI ĐỘT PHÁ (0:00 - 0:45)",
      formula: "Formal Greeting -> Hook & Macro Context -> Prompt Data Synthesis -> Paradox/Core Dilemma -> Dialectical Thesis Statement",
      template: '"Good morning/afternoon, honorable members of the jury. Today, I would like to address a pressing contemporary crisis that sits at the intersection of [X] and [Y]: [Topic]. While [X] promises unparalleled advantages in [A], it simultaneously brings forth a dark undercurrent of [B]. Therefore, I contend that [Thesis]."',
      analysis: "Không lãng phí thời gian vào lời chào dài dòng. Đi thẳng vào việc định nghĩa vấn đề dưới dạng xung đột (conflict) để gây ấn tượng mạnh với giám khảo."
    },
    {
      step: "BƯỚC 2: LUẬN ĐIỂM 1 - MẶT TÍCH CỰC HOẶC ĐỘNG CƠ (0:45 - 2:15)",
      formula: "Signpost -> Core Merit/Driver -> Underlying Mechanism -> Real-life Extension -> Concrete Application",
      template: '"Let us first examine the undeniable merits of [X]... Traditional paradigms have long been criticized for... By contrast, [X] shifts this mold by... For instance, in [Industry/Context]..."',
      analysis: "1 phút 30 giây là thời gian vàng để chứng minh bạn hiểu rõ vì sao hiện tượng/công nghệ này lại xuất hiện và được ủng hộ, thể hiện sự khách quan của người nói."
    },
    {
      step: "BƯỚC 3: LUẬN ĐIỂM 2 - MẶT TỐI & HỆ LỤY HỆ THỐNG (2:15 - 4:15)",
      formula: "Counter-Pivot Transition -> Core Hazard 1 (Cognitive/Ecological/Ethical) -> Empirical Study/Data Citation -> Core Hazard 2 (Systemic/Socio-economic) -> The Human Toll",
      template: '"However, these dividends cannot blindly justify the substantial costs... Data from [Institution] revealed that... Furthermore, we cannot turn a blind eye to... This creates a terrifying reality where..."',
      analysis: "Đây là phần nặng ký nhất (2 phút - 40% bài nói). Hãy dùng số liệu từ MIT, Harvard, WEF để biến lập luận từ phỏng đoán thành chân lý khoa học có sức nặng không thể chối cãi."
    },
    {
      step: "BƯỚC 4: KẾT LUẬN & KIẾN TẠO GIẢI PHÁP (4:15 - 5:00)",
      formula: "Philosophical Synthesis -> Two-Pronged / Tripartite Action Plan -> Memorable Punchline (Takeaway)",
      template: '"In conclusion, [X] is neither purely a blessing nor an inherent curse; it is a reality that must be meticulously calibrated. The ultimate solution demands a two-pronged approach: Governments must [Policy/Regulation], while we as individuals must [Mindset Shift]. Ultimately, [Memorable closing quote/truth]. Thank you."',
      analysis: "Không bao giờ kết thúc cụt ngủn bằng 'That is all'. Luôn có một câu châm ngôn hoặc ẩn dụ đắt giá để để lại dư ba sâu sắc trong lòng người chấm."
    }
  ]
};
