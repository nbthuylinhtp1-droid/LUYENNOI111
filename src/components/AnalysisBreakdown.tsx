import React from 'react';
import { DOCUMENT_ANALYSIS_DATA } from '../data/analysisGuide';
import { TOPICS_DATA } from '../data/topicsData';
import { 
  Clock, BookOpen, Sparkles, CheckCircle2, 
  ArrowRight, Award, Brain, BarChart3, Globe, Lightbulb, 
  FileText, Zap, ChevronRight, Check, Flame, Target
} from 'lucide-react';

interface AnalysisBreakdownProps {
  onSelectTopic: (id: number) => void;
  onNavigateToSimulator: () => void;
  onNavigateToFlashcards: () => void;
}

export const AnalysisBreakdown: React.FC<AnalysisBreakdownProps> = ({
  onSelectTopic,
  onNavigateToSimulator,
  onNavigateToFlashcards
}) => {
  return (
    <div className="space-y-10 pb-16">
      {/* Hero Executive Summary Banner - Radiant Royal Blue & Energetic Orange */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-950 text-white p-6 sm:p-10 shadow-2xl shadow-blue-900/20 border border-blue-400/20">
        {/* Glow circles */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 translate-y-12 w-96 h-96 bg-sky-400/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
            <Award className="w-4 h-4" />
            Báo Cáo Phân Tích Chuyên Môn Độc Quyền
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
            PHÂN TÍCH TOÀN DIỆN TÀI LIỆU
            <span className="block bg-gradient-to-r from-sky-300 via-white to-orange-300 bg-clip-text text-transparent font-black mt-1">
              "LÀM CÁCH NÀO ĐẠT ĐIỂM CAO TRONG BÀI THI NÓI HSG TIẾNG ANH 12"
            </span>
          </h1>

          <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-3xl">
            Bộ cẩm nang luyện thi nói quy chuẩn và hiện đại nhất dành riêng cho các kỳ thi 
            <strong className="text-white"> Học Sinh Giỏi Quốc Gia (HSGQG)</strong> và 
            <strong className="text-white"> HSG Cấp Tỉnh/Thành Phố Lớp 12</strong>. Toàn bộ 20 chuyên đề được cấu trúc chính xác theo format độc thoại 5 phút, thỏa mãn các tiêu chí khắt khe nhất về tư duy phản biện biện chứng, kiểm soát nhịp độ nói và từ vựng C1/C2 đỉnh cao.
          </p>

          <div className="pt-2 flex flex-wrap gap-2.5 text-xs text-blue-100">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15 shadow-xs">
              <BookOpen className="w-4 h-4 text-orange-400" />
              <span><strong>20</strong> Chuyên đề thời sự 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15 shadow-xs">
              <Clock className="w-4 h-4 text-sky-300" />
              <span><strong>Căn giờ 5 phút</strong> (45s - 90s - 120s - 45s)</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15 shadow-xs">
              <Brain className="w-4 h-4 text-orange-400" />
              <span><strong>140+</strong> Thuật ngữ C1/C2 học thuật</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15 shadow-xs">
              <BarChart3 className="w-4 h-4 text-sky-300" />
              <span><strong>100%</strong> Số liệu Harvard, MIT, UNEP, WEF</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Trụ Cột Đột Phá Của Tài Liệu */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2">
              <Target className="w-6 h-6 text-blue-600" />
              4 Giá Trị Cốt Lõi Tạo Nên Bài Nói Đạt Giải Nhất/Nhì
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Lý do tài liệu này vượt trội hơn các giáo trình luyện nói IELTS hay giao tiếp thông thường
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DOCUMENT_ANALYSIS_DATA.corePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-blue-100 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 transition-all group space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                  {pillar.stat}
                </span>
                <span className="text-xs font-mono text-blue-500 font-bold bg-blue-50 px-2 py-0.5 rounded">
                  TRỤ CỘT #0{idx + 1}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Phân Tích Công Thức Căn Giờ Vàng 5 Phút (The Golden Timing Matrix) */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider">
            <Clock className="w-4 h-4 text-orange-500" />
            Phương Pháp Luận Căn Giờ Chính Xác
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mt-1">
            Ma Trận Thời Gian Vàng: 4 Giai Đoạn Độc Thoại 5 Phút
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Điểm yếu chí mạng của 80% thí sinh thi HSG là cháy giờ ở luận điểm 1 hoặc nói hời hợt để kịp kết luận. Tài liệu phân định rõ từng mốc:
          </p>
        </div>

        {/* Visual Progress Bar of 5 Minutes - Blue and Orange Gradient */}
        <div className="space-y-3 bg-blue-50/50 p-5 rounded-2xl border border-blue-100">
          <div className="flex text-xs font-semibold text-slate-700 justify-between">
            <span className="text-blue-700">0:00 (Bắt đầu)</span>
            <span className="text-sky-700">0:45 (Hết Mở bài)</span>
            <span className="text-emerald-700">2:15 (Hết Luận điểm 1)</span>
            <span className="text-orange-700">4:15 (Hết Luận điểm 2)</span>
            <span className="text-blue-900 font-bold">5:00 (Vừa khít)</span>
          </div>

          <div className="grid grid-cols-12 h-5 rounded-full overflow-hidden border border-blue-200 shadow-inner bg-slate-200">
            <div className="col-span-2 bg-blue-500 relative group cursor-pointer transition-transform hover:opacity-90 flex items-center justify-center text-[10px] text-white font-bold" title="Introduction: 45s (15%)">
              45s
            </div>
            <div className="col-span-3 bg-sky-400 relative group cursor-pointer transition-transform hover:opacity-90 flex items-center justify-center text-[10px] text-white font-bold" title="Body 1: 1m30s (30%)">
              1m 30s
            </div>
            <div className="col-span-5 bg-gradient-to-r from-orange-500 to-amber-500 relative group cursor-pointer transition-transform hover:opacity-90 flex items-center justify-center text-[10px] text-white font-bold shadow-xs" title="Body 2: 2m00s (40%)">
              2m 00s (Trọng tâm)
            </div>
            <div className="col-span-2 bg-indigo-600 relative group cursor-pointer transition-transform hover:opacity-90 flex items-center justify-center text-[10px] text-white font-bold" title="Conclusion: 45s (15%)">
              45s
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-xs pt-1 justify-center sm:justify-start font-medium text-slate-700">
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-md bg-blue-500 inline-block shadow-xs"></span> Mở bài: 45s (15%)</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-md bg-sky-400 inline-block shadow-xs"></span> Luận điểm 1: 1m 30s (30%)</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-md bg-orange-500 inline-block shadow-xs"></span> Luận điểm 2 (Trọng tâm): 2m 00s (40%)</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-md bg-indigo-600 inline-block shadow-xs"></span> Kết bài & Giải pháp: 45s (15%)</span>
          </div>
        </div>

        {/* Detailed Breakdown Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {DOCUMENT_ANALYSIS_DATA.strategicFormulas.map((formula, idx) => (
            <div key={idx} className="bg-slate-50/70 hover:bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono text-blue-900 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
                  {formula.step}
                </span>
                <span className="text-xs text-orange-600 font-bold bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
                  Chuẩn format HSG
                </span>
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Cấu trúc logic</p>
                <p className="text-xs sm:text-sm font-medium text-slate-800 font-mono bg-white p-2.5 rounded-xl border border-slate-200">
                  {formula.formula}
                </p>
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Câu mẫu dẫn dắt (Signposting Template)</p>
                <p className="text-xs italic text-blue-950 bg-blue-50/70 p-3 rounded-xl border border-blue-200/60 leading-relaxed font-serif-reading">
                  {formula.template}
                </p>
              </div>
              <p className="text-xs text-slate-600">
                <strong className="text-orange-600">Bí quyết ăn điểm:</strong> {formula.analysis}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bảng Đối Chiếu: Bài Nói Thường vs Bài Nói Đạt Giải Nhất HSG */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-orange-500" />
            Bảng Đối Chiếu Tư Duy: Thí Sinh Phổ Thông vs Thí Sinh Đạt Giải HSGQG
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Khác biệt cốt lõi giải thích vì sao cùng 5 phút nói, có bạn chỉ dừng ở 6.0-7.0 điểm nhưng bài mẫu trong tài liệu đạt mức 9.5-10.0.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100/90 text-slate-800">
                <th className="p-3.5 font-bold">Khía Cạnh Đánh Giá</th>
                <th className="p-3.5 font-bold text-slate-600">Thí Sinh Trung Bình (B2 - C1 thấp)</th>
                <th className="p-3.5 font-bold text-blue-950 bg-blue-50/80 border-l border-blue-200">Thí Sinh Đạt Giải HSGQG (Theo Tài Liệu)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr className="hover:bg-blue-50/30 transition-colors">
                <td className="p-3.5 font-bold text-slate-800">Cách tiếp cận đề</td>
                <td className="p-3.5 text-slate-600">Một chiều (hoàn toàn ủng hộ hoặc phản đối), đưa ra các ví dụ đời thường cá nhân ("In my opinion...", "My friend...")</td>
                <td className="p-3.5 text-blue-900 bg-blue-50/40 font-medium border-l border-blue-100">
                  Tư duy biện chứng (Dialectical): Phân tích mâu thuẫn hệ thống, nhận định đây là "double-edged sword", cân bằng giữa lợi ích kinh tế và cái giá nhân văn.
                </td>
              </tr>
              <tr className="hover:bg-blue-50/30 transition-colors">
                <td className="p-3.5 font-bold text-slate-800">Từ vựng (Lexical Resource)</td>
                <td className="p-3.5 text-slate-600">Dùng từ đơn giản, lặp từ: "big problem", "very bad", "helpful", "good future", "stop using phones".</td>
                <td className="p-3.5 text-blue-900 bg-blue-50/40 font-medium border-l border-blue-100">
                  Thuật ngữ triết học - kinh tế - sinh học: <span className="font-semibold text-orange-600">"epistemological nihilism", "hedonic treadmill", "cognitive offloading", "presenteeism", "dopaminergic exploitation"</span>.
                </td>
              </tr>
              <tr className="hover:bg-blue-50/30 transition-colors">
                <td className="p-3.5 font-bold text-slate-800">Dẫn chứng & Số liệu</td>
                <td className="p-3.5 text-slate-600">Phỏng đoán cảm tính: "Many people say that...", "Nowadays almost everyone agrees..."</td>
                <td className="p-3.5 text-blue-900 bg-blue-50/40 font-medium border-l border-blue-100">
                  Dữ liệu thực chứng uy tín: Trích dẫn Harvard Adult Study, MIT Media Lab, The Lancet Psychiatry, UNEP, WEF với số liệu phần trăm chính xác.
                </td>
              </tr>
              <tr className="hover:bg-blue-50/30 transition-colors">
                <td className="p-3.5 font-bold text-slate-800">Đề xuất giải pháp</td>
                <td className="p-3.5 text-slate-600">Chung chung, khẩu hiệu: "People should be more careful", "The government must do something".</td>
                <td className="p-3.5 text-blue-900 bg-blue-50/40 font-medium border-l border-blue-100">
                  Mô hình phối hợp 3 bên (Tripartite collaboration): Khung pháp lý bắt buộc (luật bảo vệ quyền ngắt kết nối, mã hóa thủy ấn AI) kết hợp chuyển đổi tư duy giáo dục.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 20 Chuyên Đề Thời Sự Cấp Tiến 2026 */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              Bản Đồ 20 Chuyên Đề Nói Trong Tài Liệu
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Nhấp vào bất kỳ đề thi nào để mở bài phát biểu mẫu 5 phút và dàn ý chi tiết
            </p>
          </div>
          <button
            onClick={() => onSelectTopic(1)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-white bg-blue-50 hover:bg-blue-600 px-3.5 py-2 rounded-xl border border-blue-200 transition-all shadow-xs w-fit"
          >
            <span>Khám phá đề đầu tiên</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {TOPICS_DATA.map((topic) => (
            <div
              key={topic.id}
              onClick={() => onSelectTopic(topic.id)}
              className="bg-white p-4 rounded-2xl border border-blue-100 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-bold text-blue-700 font-mono bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    {topic.code}
                  </span>
                  <span className="text-slate-400 font-medium text-[10px]">{topic.category}</span>
                </div>
                <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2">
                  {topic.title}
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                  {topic.vietnameseTitle}
                </p>
              </div>

              <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="text-orange-600 font-semibold">{topic.advancedVocabulary.length} từ C1/C2</span>
                <span className="text-blue-600 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                  Xem ngay <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lộ Trình Luyện Tập Tối Ưu - Radiant Blue & Energetic Orange */}
      <section className="bg-gradient-to-br from-blue-500/10 via-sky-500/5 to-orange-500/10 rounded-3xl p-6 sm:p-8 border border-blue-200/80 space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider">
          <Lightbulb className="w-4 h-4 text-orange-500" />
          Kế Hoạch Khai Thác Tài Liệu Hiệu Quả Nhất
        </div>
        <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900">
          Quy Trình 3 Bước Biến 20 Bài Mẫu Thành Kỹ Năng Phản Xạ Của Bản Thân
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="bg-white p-5 rounded-2xl border border-blue-100 shadow-sm space-y-2">
            <span className="w-7 h-7 rounded-xl bg-blue-600 text-white text-xs font-bold flex items-center justify-center shadow-sm">1</span>
            <h4 className="font-bold text-slate-900 text-sm">Nạp Khung Từ Vựng C1/C2</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Vào tab <strong>Từ Vựng C1/C2</strong>, luyện các thuật ngữ tinh hoa như <em>epistemological nihilism, hedonic treadmill, biophilic urbanism</em>.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-blue-100 shadow-sm space-y-2">
            <span className="w-7 h-7 rounded-xl bg-orange-500 text-white text-xs font-bold flex items-center justify-center shadow-sm">2</span>
            <h4 className="font-bold text-slate-900 text-sm">Ghi Nhớ Dàn Ý Căn Giờ</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Không học vẹt từng câu của bài mẫu. Hãy nhớ <strong>4 mốc thời gian</strong> và các luận điểm chính để tập mở rộng ý bằng văn phong tự nhiên.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-blue-100 shadow-sm space-y-2">
            <span className="w-7 h-7 rounded-xl bg-blue-700 text-white text-xs font-bold flex items-center justify-center shadow-sm">3</span>
            <h4 className="font-bold text-slate-900 text-sm">Vào Phòng Thi 5 Phút Thật</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Bật tab <strong>Phòng Thi 5 Phút</strong>, bấm đồng hồ đếm ngược, nhìn thanh Pacing Indicator để tự điều chỉnh nhịp nói vừa khít 4:45 - 5:00 và ghi âm nghe lại.
            </p>
          </div>
        </div>

        <div className="pt-2 flex flex-wrap gap-3">
          <button
            onClick={onNavigateToSimulator}
            className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md shadow-orange-500/25 transition-all flex items-center gap-2"
          >
            <Zap className="w-4 h-4 fill-white" />
            <span>Vào Phòng Luyện Thi Nói 5 Phút Ngay</span>
          </button>
          <button
            onClick={onNavigateToFlashcards}
            className="px-5 py-2.5 bg-white hover:bg-blue-50 text-blue-700 text-xs sm:text-sm font-bold rounded-xl border border-blue-200 shadow-sm transition-all flex items-center gap-2"
          >
            <Brain className="w-4 h-4 text-blue-600" />
            <span>Luyện 140+ Thuật Ngữ C1/C2</span>
          </button>
        </div>
      </section>
    </div>
  );
};
