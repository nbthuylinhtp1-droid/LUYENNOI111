import React, { useState, useMemo } from 'react';
import { ALL_TOPICS_30, VocabItem } from '../data/topicsData';
import { 
  Sparkles, Volume2, RotateCw, CheckCircle2, Bookmark, 
  Search, Filter, ChevronLeft, ChevronRight, BookOpen, Layers 
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface FlatVocabItem extends VocabItem {
  topicCode: string;
  topicTitle: string;
}

export const VocabFlashcards: React.FC = () => {
  const [selectedTopicFilter, setSelectedTopicFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [masteredTerms, setMasteredTerms] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'flashcard' | 'list'>('flashcard');

  // Flatten all vocab from 30 topics
  const allVocab: FlatVocabItem[] = useMemo(() => {
    const list: FlatVocabItem[] = [];
    ALL_TOPICS_30.forEach(topic => {
      topic.advancedVocabulary.forEach(v => {
        list.push({
          ...v,
          topicCode: topic.code,
          topicTitle: topic.title
        });
      });
    });
    return list;
  }, []);

  // Filtered vocab list
  const filteredVocab = useMemo(() => {
    return allVocab.filter(item => {
      const matchTopic = selectedTopicFilter === 'all' || item.topicCode === selectedTopicFilter;
      const matchSearch = item.term.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.vietnamese.toLowerCase().includes(searchQuery.toLowerCase());
      return matchTopic && matchSearch;
    });
  }, [allVocab, selectedTopicFilter, searchQuery]);

  // Safe index
  const safeIndex = Math.min(currentIndex, Math.max(0, filteredVocab.length - 1));
  const currentCard = filteredVocab[safeIndex];

  const handleNext = () => {
    setIsFlipped(false);
    if (safeIndex < filteredVocab.length - 1) {
      setCurrentIndex(safeIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    if (safeIndex > 0) {
      setCurrentIndex(safeIndex - 1);
    } else {
      setCurrentIndex(filteredVocab.length - 1);
    }
  };

  const toggleMastered = (term: string) => {
    if (masteredTerms.includes(term)) {
      setMasteredTerms(prev => prev.filter(t => t !== term));
    } else {
      setMasteredTerms(prev => [...prev, term]);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    }
  };

  const speakTerm = (term: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(term);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Top Header */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 border border-blue-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-blue-700 font-mono bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
              KHO TỪ VỰNG C1 / C2 HỌC THUẬT
            </span>
            <span className="text-xs text-orange-600 font-bold bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200">140+ Thuật Ngữ Đắt Giá</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mt-1">
            Luyện Thuộc Từ Vựng & Collocations Bứt Phá Điểm
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Chìa khóa bứt phá thang điểm Lexical Resource 25% trong bài thi HSGQG
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode('flashcard')}
            className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all ${
              viewMode === 'flashcard' ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
            }`}
          >
            Chế độ Flashcard
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all ${
              viewMode === 'list' ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
            }`}
          >
            Danh sách tra cứu ({filteredVocab.length})
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 sm:p-5 rounded-2xl border border-blue-100 shadow-2xs">
        <div className="flex items-center gap-2 flex-1 max-w-md relative">
          <Search className="w-4 h-4 text-blue-400 absolute left-3.5 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentIndex(0);
            }}
            placeholder="Tìm theo từ tiếng Anh hoặc nghĩa tiếng Việt..."
            className="w-full pl-9 pr-3.5 py-2 text-xs bg-blue-50/50 border border-blue-200 rounded-xl outline-none focus:border-blue-500 focus:bg-white text-slate-800 font-medium"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-blue-900 whitespace-nowrap">Theo đề:</span>
          <select
            value={selectedTopicFilter}
            onChange={(e) => {
              setSelectedTopicFilter(e.target.value);
              setCurrentIndex(0);
            }}
            className="text-xs bg-blue-50/50 border border-blue-200 rounded-xl px-3 py-2 outline-none focus:border-blue-500 max-w-xs truncate font-semibold text-slate-700"
          >
            <option value="all">Tất cả 30 Chuyên Đề</option>
            {ALL_TOPICS_30.map(t => (
              <option key={t.id} value={t.code}>
                {t.code}: {t.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Flashcard View */}
      {viewMode === 'flashcard' && (
        <div className="max-w-2xl mx-auto space-y-4">
          {filteredVocab.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-3xl border border-blue-100">
              <p className="text-slate-500 text-sm">Không tìm thấy từ vựng nào khớp với bộ lọc.</p>
            </div>
          ) : (
            <>
              {/* Card Container with Bright Blue and Orange Accents */}
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className="bg-white rounded-3xl border border-blue-200 shadow-md hover:shadow-xl hover:shadow-blue-500/10 transition-all p-8 sm:p-12 min-h-[320px] flex flex-col justify-between cursor-pointer select-none relative group"
              >
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
                      {currentCard.topicCode}
                    </span>
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                      currentCard.level === 'C2' ? 'bg-orange-100 text-orange-900 border border-orange-200' : 'bg-blue-100 text-blue-900 border border-blue-200'
                    }`}>
                      {currentCard.level}
                    </span>
                    <span className="text-slate-400 font-mono">({currentCard.pos})</span>
                  </div>

                  <button
                    onClick={(e) => speakTerm(currentCard.term, e)}
                    className="p-2 rounded-xl text-blue-600 hover:text-white hover:bg-blue-600 transition-colors bg-blue-50 border border-blue-100"
                    title="Nghe phát âm"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Card Center Content */}
                <div className="text-center py-6 space-y-4">
                  {!isFlipped ? (
                    <div>
                      <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
                        {currentCard.term}
                      </h3>
                      <p className="text-xs text-blue-600 font-bold mt-4 flex items-center justify-center gap-1.5">
                        <RotateCw className="w-3.5 h-3.5" /> Bấm vào thẻ để xem nghĩa & cách dùng
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <p className="text-2xl sm:text-3xl font-extrabold text-orange-600">
                        {currentCard.vietnamese}
                      </p>
                      <p className="text-xs text-slate-500 pt-2 font-medium">
                        Xuất hiện trong đề: <span className="font-bold text-blue-900">{currentCard.topicTitle}</span>
                      </p>
                    </div>
                  )}
                </div>

                {/* Card Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs text-slate-400">
                  <span className="font-medium text-slate-500">Thẻ {safeIndex + 1} / {filteredVocab.length}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMastered(currentCard.term);
                    }}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-bold transition-all ${
                      masteredTerms.includes(currentCard.term)
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{masteredTerms.includes(currentCard.term) ? 'Đã thành thạo' : 'Đánh dấu đã thuộc'}</span>
                  </button>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-center gap-4 pt-2">
                <button
                  onClick={handlePrev}
                  className="px-5 py-2.5 rounded-xl bg-white border border-blue-200 hover:bg-blue-50 text-blue-900 font-bold text-xs flex items-center gap-1.5 shadow-2xs transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Từ Trước</span>
                </button>
                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-md shadow-orange-500/20 transition-all"
                >
                  <span>Từ Tiếp Theo</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* List Search View */}
      {viewMode === 'list' && (
        <div className="bg-white rounded-3xl border border-blue-100 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-blue-50/70 border-b border-blue-200 text-blue-950 font-bold">
                  <th className="p-3.5">Thuật ngữ C1/C2</th>
                  <th className="p-3.5">Loại từ & Cấp độ</th>
                  <th className="p-3.5">Ý nghĩa tiếng Việt</th>
                  <th className="p-3.5">Chuyên đề áp dụng</th>
                  <th className="p-3.5 text-right">Phát âm</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {filteredVocab.map((item, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/40 transition-colors">
                    <td className="p-3.5 font-bold text-slate-900">
                      {item.term}
                    </td>
                    <td className="p-3.5">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        item.level === 'C2' ? 'bg-orange-100 text-orange-900 border border-orange-200' : 'bg-blue-100 text-blue-900 border border-blue-200'
                      }`}>
                        {item.level}
                      </span>
                      <span className="text-slate-400 font-mono ml-1.5">({item.pos})</span>
                    </td>
                    <td className="p-3.5 font-medium text-slate-800">
                      {item.vietnamese}
                    </td>
                    <td className="p-3.5 text-blue-700 font-mono text-xs font-semibold">
                      {item.topicCode}
                    </td>
                    <td className="p-3.5 text-right">
                      <button
                        onClick={() => speakTerm(item.term)}
                        className="text-blue-500 hover:text-blue-800 p-1.5 rounded-lg hover:bg-blue-50"
                        title="Nghe phát âm"
                      >
                        <Volume2 className="w-4 h-4 inline" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
