import React, { useState } from 'react';
import { 
  User, GraduationCap, Award, Sliders, CheckCircle2, 
  HelpCircle, BookOpen, Clock, Sparkles, ChevronRight,
  Flame, Check
} from 'lucide-react';

interface StudentProfileBannerProps {
  studentName: string;
  setStudentName: (name: string) => void;
  studentClass: string;
  setStudentClass: (cls: string) => void;
  questionCount: number;
  setQuestionCount: (count: number) => void;
  totalAvailable: number;
  onOpenQuickGuide: () => void;
}

export const StudentProfileBanner: React.FC<StudentProfileBannerProps> = ({
  studentName,
  setStudentName,
  studentClass,
  setStudentClass,
  questionCount,
  setQuestionCount,
  totalAvailable,
  onOpenQuickGuide,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(!studentName);
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-6 border border-blue-100 shadow-sm shadow-blue-500/5 space-y-4 mb-6">
      {/* Top Author & App Branding line */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-3 border-b border-blue-50 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-orange-500 flex items-center justify-center text-white shadow-xs">
            <Award className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black tracking-tight text-blue-950 uppercase font-display">
                GIA SƯ LUYỆN NÓI HỌC SINH GIỎI QUỐC GIA 12
              </span>
              <span className="hidden sm:inline text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-50 text-orange-600 border border-orange-200">
                HSGQG Standard
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium">
              Tác giả: <strong className="text-blue-900 font-bold">ThS - Nhà Giáo Ưu Tú Nguyễn Bùi Thùy Linh</strong>
            </p>
          </div>
        </div>

        {/* Quick Guide Button */}
        <button
          onClick={onOpenQuickGuide}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs font-bold shadow-xs shadow-orange-500/20 transition-all cursor-pointer w-fit"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Bí Quyết 5 Phút Đạt Điểm Cao (HSGQG)</span>
        </button>
      </div>

      {/* Student Profile Inputs & Question Limit Selector */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        {/* Name & Class Column (7 Cols) */}
        <div className="md:col-span-7 bg-blue-50/40 p-4 rounded-2xl border border-blue-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-blue-900 uppercase tracking-wider flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-blue-600" />
              Thông Tin Học Sinh Dự Thi:
            </span>
            {studentName && !isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="text-[11px] text-orange-600 hover:text-orange-700 font-bold"
              >
                Chỉnh sửa
              </button>
            )}
          </div>

          {isEditing ? (
            <form onSubmit={handleSave} className="flex flex-col sm:flex-row gap-2.5 items-center">
              <div className="flex-1 w-full relative">
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Nhập họ và tên học sinh (vd: Nguyễn Văn A)..."
                  className="w-full text-xs font-medium bg-white border border-blue-200 focus:border-blue-500 rounded-xl px-3 py-2 outline-none"
                  required
                />
              </div>

              <div className="w-full sm:w-40 relative">
                <input
                  type="text"
                  value={studentClass}
                  onChange={(e) => setStudentClass(e.target.value)}
                  placeholder="Lớp (vd: 12 Chuyên Anh)..."
                  className="w-full text-xs font-medium bg-white border border-blue-200 focus:border-blue-500 rounded-xl px-3 py-2 outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors whitespace-nowrap cursor-pointer"
              >
                Lưu hồ sơ
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-between bg-white px-3.5 py-2.5 rounded-xl border border-blue-100">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xs">
                  {studentName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 mr-2">{studentName}</span>
                  <span className="text-xs text-blue-700 font-semibold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    Lớp: {studentClass || '12 Chuyên Anh'}
                  </span>
                </div>
              </div>
              {savedSuccess && (
                <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Đã cập nhật
                </span>
              )}
            </div>
          )}
        </div>

        {/* Question Count Selector (5 Cols - Up to 30) */}
        <div className="md:col-span-5 bg-orange-50/40 p-4 rounded-2xl border border-orange-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-orange-950 uppercase tracking-wider flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-orange-600" />
              Số Lượng Chủ Đề Luyện Tập:
            </span>
            <span className="text-xs font-mono font-black text-orange-600 bg-white px-2 py-0.5 rounded-md border border-orange-200">
              {questionCount} / {totalAvailable} Đề
            </span>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="range"
              min={5}
              max={Math.min(30, totalAvailable)}
              step={1}
              value={questionCount}
              onChange={(e) => setQuestionCount(Number(e.target.value))}
              className="flex-1 accent-orange-500 cursor-pointer h-2 bg-orange-200 rounded-lg"
            />
            <div className="flex gap-1">
              {[10, 20, 30].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setQuestionCount(num)}
                  className={`px-2 py-1 text-[11px] font-bold rounded-lg border transition-all cursor-pointer ${
                    questionCount === num
                      ? 'bg-orange-500 text-white border-orange-600 shadow-2xs'
                      : 'bg-white text-orange-800 border-orange-200 hover:bg-orange-100/50'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
          <p className="text-[10px] text-slate-500 mt-1.5 leading-tight">
            *Tối đa 30 chuyên đề chuẩn format HSGQG. Bạn có thể chọn từ 5 đến 30 đề phù hợp với kế hoạch ôn luyện.
          </p>
        </div>
      </div>
    </div>
  );
};
