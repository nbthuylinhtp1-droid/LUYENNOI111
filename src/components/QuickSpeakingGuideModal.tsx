import React from 'react';
import { 
  X, Clock, Award, CheckCircle2, ShieldAlert, Sparkles, 
  Brain, FileText, ArrowRight, Lightbulb, Zap, BookOpen 
} from 'lucide-react';

interface QuickSpeakingGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGoToSimulator: () => void;
  onGoToVocab: () => void;
}

export const QuickSpeakingGuideModal: React.FC<QuickSpeakingGuideModalProps> = ({
  isOpen,
  onClose,
  onGoToSimulator,
  onGoToVocab,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-blue-200 shadow-2xl p-6 sm:p-8 space-y-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1.5 border-b border-blue-100 pb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            HƯỚNG DẪN ĐỘC QUYỀN TỪ TÁC GIẢ
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-display text-blue-950">
            Chiến Lược Nói 5 Phút Đạt Điểm Cao Trong Kỳ Thi HSGQG Lớp 12
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Biên soạn bởi: <strong className="text-blue-900">ThS - Nhà Giáo Ưu Tú Nguyễn Bùi Thùy Linh</strong>
          </p>
        </div>

        {/* 2-Step Pre-speech Rule: TỪ VỰNG TRƯỚC -> NÓI 5 PHÚT SAU */}
        <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-2xl p-5 border border-blue-200 space-y-3">
          <h3 className="font-bold text-blue-950 text-sm flex items-center gap-2">
            <Brain className="w-4 h-4 text-blue-600" />
            Quy Tắc Vàng 2 Bước: Nạp Từ Vựng Trước Khi Bấm Giờ Nói
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-white p-3.5 rounded-xl border border-blue-100 space-y-1">
              <span className="font-extrabold text-blue-700 font-mono">BƯỚC 1: ÔN TỪ VỰNG C1/C2 (3 - 5 PHÚT)</span>
              <p className="text-slate-600 leading-relaxed">
                Đừng vội độc thoại ngay! Trước mỗi chủ đề, hãy chuyển sang tab <strong>"Từ Vựng C1/C2"</strong>, nghe phát âm và ghi nhớ tối thiểu 3-4 collocations đặc thù để gài vào bài nói.
              </p>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-blue-100 space-y-1">
              <span className="font-extrabold text-orange-600 font-mono">BƯỚC 2: CĂN GIỜ 4 MỐC PHÂN BỔ (5 PHÚT)</span>
              <p className="text-slate-600 leading-relaxed">
                Khi bấm giờ, luôn liếc thanh <strong>Pacing Indicator</strong>: Không sa đà nói mở bài quá 45 giây; dành trọn 2 phút cho luận điểm 2 và kết bài bằng giải pháp vĩ mô.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Mốc Thời Gian Vàng 5 Phút */}
        <div className="space-y-3">
          <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <Clock className="w-4 h-4 text-orange-500" />
            Khung Căn Giờ Vàng 5 Phút (The 5-Minute Blueprint)
          </h3>

          <div className="space-y-2.5 text-xs text-slate-700">
            <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-200/70 flex items-start gap-3">
              <span className="font-mono font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded text-[11px] whitespace-nowrap">
                0:00 - 0:45 (45s)
              </span>
              <div>
                <strong className="text-blue-950 block mb-0.5">1. Mở bài & Luận đề biện chứng (Introduction & Thesis Statement)</strong>
                <span>Chào ban giám khảo, tóm lược dữ kiện đề bài, dùng ngay cấu trúc: <em>"While [X] offers undeniable advantages, it simultaneously introduces a critical threat to [Y]..."</em></span>
              </div>
            </div>

            <div className="p-3 bg-sky-50/60 rounded-xl border border-sky-200/70 flex items-start gap-3">
              <span className="font-mono font-bold text-sky-800 bg-sky-100 px-2 py-0.5 rounded text-[11px] whitespace-nowrap">
                0:45 - 2:15 (1m 30s)
              </span>
              <div>
                <strong className="text-sky-950 block mb-0.5">2. Luận điểm 1: Mặt tích cực / Động lực chính (The Silver Lining / Merits)</strong>
                <span>Giải thích vì sao xu hướng/công nghệ này lại xuất hiện và được ủng hộ. Đưa ra cơ chế vận hành và ví dụ thực tế cụ thể.</span>
              </div>
            </div>

            <div className="p-3 bg-orange-50/60 rounded-xl border border-orange-200/70 flex items-start gap-3">
              <span className="font-mono font-bold text-orange-800 bg-orange-100 px-2 py-0.5 rounded text-[11px] whitespace-nowrap">
                2:15 - 4:15 (2m 00s)
              </span>
              <div>
                <strong className="text-orange-950 block mb-0.5">3. Luận điểm 2: Mặt tối & Hệ lụy hệ thống (The Dark Side & Empirical Data)</strong>
                <span className="font-medium text-orange-950">Phần nặng ký nhất (40% bài thi)! Viện dẫn số liệu từ Harvard, MIT, WHO, UNEP để chứng minh hệ lụy tâm lý, sinh thái hoặc bất công bằng xã hội.</span>
              </div>
            </div>

            <div className="p-3 bg-indigo-50/60 rounded-xl border border-indigo-200/70 flex items-start gap-3">
              <span className="font-mono font-bold text-indigo-800 bg-indigo-100 px-2 py-0.5 rounded text-[11px] whitespace-nowrap">
                4:15 - 5:00 (45s)
              </span>
              <div>
                <strong className="text-indigo-950 block mb-0.5">4. Kết luận & Giải pháp 2 mũi nhọn (Conclusion & Action Plan)</strong>
                <span>Khẳng định đây không phải vấn đề nhị nguyên (false dichotomy). Đưa ra giải pháp: Khung pháp lý nhà nước (Government legislation) + Trách nhiệm công dân/giáo dục.</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Lỗi Sai Chí Mạng Cần Tránh */}
        <div className="bg-rose-50/70 p-4 rounded-2xl border border-rose-200 space-y-2 text-xs">
          <h4 className="font-bold text-rose-900 flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4 text-rose-600" />
            3 Lỗi Thí Sinh Thường Mắc Khiến Điểm Không Đạt 9.0+:
          </h4>
          <ul className="list-disc list-inside space-y-1 text-slate-700 leading-relaxed">
            <li><strong>Cháy giờ ở luận điểm 1:</strong> Mải nói lợi ích hết 3 phút rưỡi, đến khi chuông reo còn 1 phút mới vội nói mặt tiêu cực và bỏ mất kết bài.</li>
            <li><strong>Cắm đầu đọc giấy nháp:</strong> Viết cả câu dài ra nháp rồi đọc đều đều. Giám khảo sẽ trừ điểm Fluency và tương tác ngay lập tức.</li>
            <li><strong>Kết bài khẩu hiệu sáo rỗng:</strong> Chỉ nói "Everyone should do something". Thí sinh HSGQG phải nêu tên các công cụ quản trị thực tế (watermarking, human-in-the-loop, carbon taxes).</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-2 border-t border-slate-100">
          <button
            onClick={() => {
              onClose();
              onGoToVocab();
            }}
            className="px-4 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Brain className="w-4 h-4" />
            <span>Ôn Tập Từ Vựng Chủ Đề Trước</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onGoToSimulator();
            }}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-xs shadow-md shadow-orange-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Zap className="w-4 h-4 fill-white" />
            <span>Vào Phòng Luyện Nói 5 Phút Ngay</span>
          </button>
        </div>
      </div>
    </div>
  );
};
