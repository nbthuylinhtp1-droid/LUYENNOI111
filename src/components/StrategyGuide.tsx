import React from 'react';
import { DOCUMENT_ANALYSIS_DATA } from '../data/analysisGuide';
import { 
  Award, ShieldAlert, CheckCircle, Lightbulb, 
  Sparkles, FileText, ChevronRight, HelpCircle, Flame, Target 
} from 'lucide-react';

export const StrategyGuide: React.FC = () => {
  return (
    <div className="space-y-8 pb-16">
      {/* Top Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-orange-600 font-mono bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
            CẨM NANG CHIẾN THUẬT PHÒNG THI
          </span>
          <span className="text-xs text-blue-700 font-bold bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">Kinh Nghiệm Từ Ban Giám Khảo HSGQG</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-bold font-display text-slate-900 tracking-tight">
          Chiến Lược Chinh Phục Điểm 9.5 - 10.0 Bài Thi Nói HSG Tiếng Anh 12
        </h2>
        <p className="text-xs sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          Bài thi nói HSGQG không kiểm tra khả năng giao tiếp thường ngày (như hỏi đường hay sở thích), mà đánh giá 
          <strong className="text-blue-900"> bản lĩnh của một nhà hùng biện trẻ</strong> có khả năng mổ xẻ những vấn đề xã hội - công nghệ phức tạp bằng tư duy phản biện sắc bén và tiếng Anh học thuật thượng thừa.
        </p>
      </div>

      {/* Chi Tiết Rubric 4 Tiêu Chí Chấm Thi */}
      <section className="space-y-4">
        <h3 className="font-display font-bold text-lg text-slate-900 flex items-center gap-2">
          <Award className="w-5 h-5 text-blue-600" />
          Phân Tích 4 Tiêu Chí Chấm Điểm HSGQG (Scoring Rubric)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DOCUMENT_ANALYSIS_DATA.rubricBreakdown.map((rubric, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:border-blue-300 transition-all space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                  {rubric.criterion}
                </h4>
                <span className="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200 font-mono">
                  Trọng số {rubric.weight}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong className="text-blue-900">Tiêu chuẩn HSG:</strong> {rubric.hsgStandard}
              </p>
              <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-blue-950 leading-relaxed font-medium">
                💡 <strong className="text-orange-600">Mẹo của chuyên gia:</strong> {rubric.proTip}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5 Công Thức Mở Bài & Thesis Statement "Vạn Năng" */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm space-y-5">
        <div className="border-b border-slate-100 pb-3">
          <h3 className="font-display font-bold text-lg text-slate-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-orange-500" />
            5 Mẫu Thesis Statement Biện Chứng (Dialectical Formula)
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Cách đặt câu luận đề trong 45 giây đầu tiên khiến giám khảo nhận ra ngay bạn là thí sinh tầm cỡ giải Quốc Gia:
          </p>
        </div>

        <div className="space-y-3.5">
          <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/40 border border-blue-100 space-y-1.5">
            <span className="text-[11px] font-bold text-blue-900 font-mono bg-blue-100 px-2 py-0.5 rounded">CÔNG THỨC 1: CON DAO HAI LƯỠI (DOUBLE-EDGED SWORD)</span>
            <p className="text-xs sm:text-sm italic text-blue-950 font-serif-reading leading-relaxed">
              "While [Phenomenon X] undoubtedly fosters crucial [Benefit A], it poses a multifaceted threat to [Area B] if not carefully calibrated."
            </p>
            <p className="text-[11px] text-slate-500 font-medium">Áp dụng: Đề 01 (Làm thêm), Đề 07 (Học kết hợp), Đề 19 (Chỉnh sửa gen).</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-orange-50/40 border border-orange-100 space-y-1.5">
            <span className="text-[11px] font-bold text-orange-900 font-mono bg-orange-100 px-2 py-0.5 rounded">CÔNG THỨC 2: NGUY CƠ ĐÀO THẢI HỆ THỐNG (SYSTEMIC DISPLACEMENT)</span>
            <p className="text-xs sm:text-sm italic text-slate-900 font-serif-reading leading-relaxed">
              "While [Technology X] acts as an unprecedented catalyst for operational efficiency, it necessitates a radical overhaul of [Human System Y] to prevent widespread socioeconomic marginalization."
            </p>
            <p className="text-[11px] text-slate-500 font-medium">Áp dụng: Đề 02 (AI công sở), Đề 16 (Bóc lột kinh tế Gig).</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/40 border border-blue-100 space-y-1.5">
            <span className="text-[11px] font-bold text-blue-900 font-mono bg-blue-100 px-2 py-0.5 rounded">CÔNG THỨC 3: PHẢN BÁC NGHỊCH LÝ (THE FALSE DICHOTOMY)</span>
            <p className="text-xs sm:text-sm italic text-blue-950 font-serif-reading leading-relaxed">
              "Rather than viewing [Factor A] and [Factor B] as mutually exclusive forces, human progress thrives most when they exist in a state of dynamic equilibrium."
            </p>
            <p className="text-[11px] text-slate-500 font-medium">Áp dụng: Đề 03 (Cạnh tranh vs Hợp tác), Đề 04 (Khoảng cách thế hệ).</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-orange-50/40 border border-orange-100 space-y-1.5">
            <span className="text-[11px] font-bold text-orange-900 font-mono bg-orange-100 px-2 py-0.5 rounded">CÔNG THỨC 4: THẢM HỌA TRÁ HÌNH (CATASTROPHE MASQUERADING)</span>
            <p className="text-xs sm:text-sm italic text-slate-900 font-serif-reading leading-relaxed">
              "[Phenomenon X] is an ecological/psychological crisis masquerading as [Affordable/Harmless Y], demanding immediate systemic reform in [Domain Z]."
            </p>
            <p className="text-[11px] text-slate-500 font-medium">Áp dụng: Đề 06 (Thời trang nhanh), Đề 15 (Du lịch không gian), Đề 18 (Bẫy nợ BNPL).</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/40 border border-blue-100 space-y-1.5">
            <span className="text-[11px] font-bold text-blue-900 font-mono bg-blue-100 px-2 py-0.5 rounded">CÔNG THỨC 5: PHÁ HOẠI NHẬN THỨC (COGNITIVE VANDALISM)</span>
            <p className="text-xs sm:text-sm italic text-blue-950 font-serif-reading leading-relaxed">
              "The rise of [Phenomenon X] is not merely a transient cultural trend, but an act of cognitive vandalism that actively rewires the human mind and threatens the foundation of democratic discourse."
            </p>
            <p className="text-[11px] text-slate-500 font-medium">Áp dụng: Đề 12 (Deepfake AI), Đề 14 (Phong trào Neo-Luddite), Đề 20 (Giải trí mì ăn liền).</p>
          </div>
        </div>
      </section>

      {/* Những Lỗi Chết Người Cần Tránh Tuyệt Đối */}
      <section className="bg-rose-50/70 rounded-3xl p-6 sm:p-8 border border-rose-200/80 space-y-4">
        <h3 className="font-display font-bold text-lg text-rose-900 flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-rose-600" />
          5 Sai Lầm Chí Mạng Khiến Thí Sinh Bị Rớt Xuống Giải Ba / Khuyến Khích
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm text-slate-700">
          <div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-2xs space-y-1.5">
            <h5 className="font-bold text-rose-900">1. Đọc thuộc lòng dàn ý đã viết thành câu</h5>
            <p className="text-slate-600 text-xs leading-relaxed">
              Khi có 5 phút chuẩn bị, nhiều bạn cố viết cả đoạn văn hoàn chỉnh ra giấy nháp. Khi nói sẽ bị hiện tượng cắm đầu vào đọc, mất ngữ điệu tự nhiên, eye-contact và bị trừ điểm Fluency nặng nề.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-2xs space-y-1.5">
            <h5 className="font-bold text-rose-900">2. Lạc đề hoặc bỏ quên số liệu đề bài cho</h5>
            <p className="text-slate-600 text-xs leading-relaxed">
              Các đề HSG thường đi kèm số liệu khảo sát (ví dụ 65% nâng cao kỹ năng, 42% tụt điểm). Nếu bạn chỉ nói chung chung mà không nhắc tới các tỷ lệ này ở phần Mở bài, giám khảo sẽ đánh giá là chưa giải quyết trọn vẹn đề bài.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-2xs space-y-1.5">
            <h5 className="font-bold text-rose-900">3. Cháy giờ ở Luận điểm 1, bỏ cụt Luận điểm 2</h5>
            <p className="text-slate-600 text-xs leading-relaxed">
              Mải nói phần điểm tích cực hết 3 phút 30 giây, đến khi giám khảo bấm chuông báo còn 1 phút mới vội vàng nói phần tiêu cực và không kịp kết bài. Luôn nhớ: Luận điểm 1 chỉ nói tối đa 1 phút 30 giây.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-2xs space-y-1.5">
            <h5 className="font-bold text-rose-900">4. Đưa ra giải pháp hời hợt, khẩu hiệu</h5>
            <p className="text-slate-600 text-xs leading-relaxed">
              Kết bài bằng câu "Everyone should be aware of this problem" là cách kết bài của học sinh THCS. Thí sinh lớp 12 HSGQG phải đưa ra giải pháp cơ chế: Khung pháp lý bắt buộc (Legal regulations), chính sách học đường và chuyển đổi ý thức cộng đồng.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
