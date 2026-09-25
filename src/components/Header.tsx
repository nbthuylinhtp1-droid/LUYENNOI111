import React from 'react';
import { BookOpen, Mic, Brain, Award, Sparkles, Search, Compass, Flame, UserCheck } from 'lucide-react';

interface HeaderProps {
  activeTab: 'analysis' | 'topics' | 'simulator' | 'flashcards' | 'strategy';
  setActiveTab: (tab: 'analysis' | 'topics' | 'simulator' | 'flashcards' | 'strategy') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedTopicCount: number;
  studentName?: string;
  studentClass?: string;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  selectedTopicCount,
  studentName,
  studentClass,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-sm shadow-blue-500/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo & Document Title with Author Branding */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-sky-500 to-orange-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 flex-shrink-0 ring-2 ring-white">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-blue-950 text-base sm:text-lg tracking-tight truncate">
                  GIA SƯ LUYỆN NÓI HỌC SINH GIỎI QUỐC GIA 12
                </span>
                <span className="hidden md:inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-xs">
                  <Flame className="w-3 h-3 fill-white" />
                  {selectedTopicCount} Đề Luyện Tập
                </span>
              </div>
              <p className="text-xs text-slate-500 truncate hidden sm:block font-medium">
                Tác giả: <strong className="text-blue-900 font-bold">ThS - Nhà Giáo Ưu Tú Nguyễn Bùi Thùy Linh</strong> · Chuẩn 5 Phút Độc Thoại
              </p>
            </div>
          </div>

          {/* Quick Search with Blue focus & Orange accent */}
          <div className="hidden lg:flex items-center flex-1 max-w-xs relative">
            <Search className="w-4 h-4 text-blue-400 absolute left-3 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm chủ đề, từ vựng C1/C2..."
              className="w-full pl-9 pr-7 py-1.5 text-xs bg-blue-50/60 hover:bg-blue-50 focus:bg-white border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-xl outline-none transition-all placeholder:text-blue-400/80 text-slate-800 font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 text-xs text-slate-400 hover:text-slate-600 font-bold"
              >
                ✕
              </button>
            )}
          </div>

          {/* Navigation Controls with Student Badge */}
          <nav className="flex items-center gap-1 sm:gap-1.5">
            {studentName && (
              <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-blue-50 border border-blue-200 text-xs font-bold text-blue-900 mr-1">
                <UserCheck className="w-3.5 h-3.5 text-blue-600" />
                <span className="truncate max-w-[120px]">{studentName}</span>
                {studentClass && <span className="text-[10px] text-slate-400 font-normal">({studentClass})</span>}
              </div>
            )}

            <button
              onClick={() => setActiveTab('analysis')}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                activeTab === 'analysis'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 ring-1 ring-blue-500'
                  : 'text-slate-600 hover:text-blue-700 hover:bg-blue-50'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span className="hidden sm:inline">Phân Tích Đề</span>
              <span className="sm:hidden">Phân Tích</span>
            </button>

            <button
              onClick={() => setActiveTab('topics')}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                activeTab === 'topics'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 ring-1 ring-blue-500'
                  : 'text-slate-600 hover:text-blue-700 hover:bg-blue-50'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Chuyên Đề ({selectedTopicCount})</span>
            </button>

            <button
              onClick={() => setActiveTab('simulator')}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                activeTab === 'simulator'
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-500/25 ring-1 ring-orange-400'
                  : 'text-slate-600 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              <Mic className="w-4 h-4" />
              <span className="hidden sm:inline">Phòng Thi 5 Phút</span>
              <span className="sm:hidden">Luyện Nói</span>
            </button>

            <button
              onClick={() => setActiveTab('flashcards')}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                activeTab === 'flashcards'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 ring-1 ring-blue-500'
                  : 'text-slate-600 hover:text-blue-700 hover:bg-blue-50'
              }`}
            >
              <Brain className="w-4 h-4" />
              <span className="hidden sm:inline">Ôn Từ Vựng C1/C2</span>
              <span className="sm:hidden">Từ Vựng</span>
            </button>

            <button
              onClick={() => setActiveTab('strategy')}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                activeTab === 'strategy'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 ring-1 ring-blue-500'
                  : 'text-slate-600 hover:text-blue-700 hover:bg-blue-50'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span className="hidden md:inline">Chiến Thuật Giám Khảo</span>
              <span className="md:hidden">Bí Quyết</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
