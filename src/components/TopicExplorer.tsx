import React, { useState, useEffect, useRef } from 'react';
import { TopicData, VocabItem } from '../data/topicsData';
import { 
  Clock, BookOpen, Volume2, VolumeX, Play, Pause, RotateCcw, 
  Copy, Check, Sparkles, Filter, ChevronRight, BarChart2, 
  ExternalLink, Mic, Search, Share2, Layers, CheckCircle2,
  Brain, ArrowRight, HelpCircle
} from 'lucide-react';

interface TopicExplorerProps {
  topics: TopicData[];
  selectedTopicId: number;
  onSelectTopic: (id: number) => void;
  onStartExamForTopic: (topic: TopicData) => void;
}

export const TopicExplorer: React.FC<TopicExplorerProps> = ({
  topics,
  selectedTopicId,
  onSelectTopic,
  onStartExamForTopic
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  // Default to 'vocab' so student reviews vocabulary BEFORE speaking!
  const [topicSubTab, setTopicSubTab] = useState<'vocab' | 'outline' | 'sample'>('vocab');
  const [highlightVocab, setHighlightVocab] = useState<boolean>(true);
  const [copiedTask, setCopiedTask] = useState<boolean>(false);
  const [copiedScript, setCopiedScript] = useState<boolean>(false);
  
  // TTS State
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [audioSpeed, setAudioSpeed] = useState<number>(1.0);
  const [speakingWord, setSpeakingWord] = useState<string | null>(null);

  const currentTopic = topics.find(t => t.id === selectedTopicId) || topics[0];

  // Filter topics
  const filteredTopics = topics.filter(t => {
    if (activeCategory === 'all') return true;
    return t.category === activeCategory;
  });

  // Handle TTS for full sample talk
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [selectedTopicId]);

  const toggleSpeech = () => {
    if (!('speechSynthesis' in window)) {
      alert('Trình duyệt của bạn chưa hỗ trợ Web Speech API.');
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(currentTopic.sampleTalk);
    utterance.lang = 'en-US';
    utterance.rate = audioSpeed;

    utterance.onend = () => {
      setIsPlayingAudio(false);
    };

    utterance.onerror = () => {
      setIsPlayingAudio(false);
    };

    window.speechSynthesis.speak(utterance);
    setIsPlayingAudio(true);
  };

  const pronounceWord = (word: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    setSpeakingWord(word);
    utterance.onend = () => setSpeakingWord(null);
    utterance.onerror = () => setSpeakingWord(null);
    window.speechSynthesis.speak(utterance);
  };

  const copyText = (text: string, type: 'task' | 'script') => {
    navigator.clipboard.writeText(text);
    if (type === 'task') {
      setCopiedTask(true);
      setTimeout(() => setCopiedTask(false), 2000);
    } else {
      setCopiedScript(true);
      setTimeout(() => setCopiedScript(false), 2000);
    }
  };

  // Helper function to highlight vocab in sample talk
  const renderHighlightedSample = (text: string, vocabList: VocabItem[]) => {
    if (!highlightVocab) {
      return <p className="whitespace-pre-line leading-relaxed font-serif-reading text-slate-800 text-sm sm:text-base">{text}</p>;
    }

    // Split paragraphs
    const paragraphs = text.split('\n\n');

    return (
      <div className="space-y-4 font-serif-reading text-slate-800 text-sm sm:text-base leading-relaxed">
        {paragraphs.map((para, pIdx) => {
          let stageLabel = '';
          let stageColor = 'border-blue-200 bg-blue-50/50 text-blue-900';
          if (pIdx === 0) {
            stageLabel = 'Giai đoạn 1: Mở đầu & Nêu bối cảnh (approx. 45s)';
            stageColor = 'border-blue-200 bg-blue-50/70 text-blue-900';
          } else if (pIdx === 1) {
            stageLabel = 'Giai đoạn 2: Luận điểm 1 - Mặt tích cực / Động cơ (approx. 1m 30s)';
            stageColor = 'border-sky-200 bg-sky-50/70 text-sky-950';
          } else if (pIdx === 2 || pIdx === 3) {
            stageLabel = pIdx === 2 ? 'Giai đoạn 3: Luận điểm 2 - Mặt tối & Hệ lụy (approx. 2m 00s)' : 'Giai đoạn 3 (tiếp): Đào sâu bằng chứng thực nghiệm';
            stageColor = 'border-orange-200 bg-orange-50/60 text-orange-950';
          } else if (pIdx === paragraphs.length - 1) {
            stageLabel = 'Giai đoạn 4: Kết luận & Đề xuất giải pháp đa chiều (approx. 45s)';
            stageColor = 'border-indigo-200 bg-indigo-50/70 text-indigo-950';
          }

          return (
            <div key={pIdx} className="space-y-2 p-4 rounded-2xl border border-blue-100/80 bg-white hover:border-blue-200 transition-colors shadow-xs">
              <div className="flex items-center justify-between text-[11px] font-sans font-semibold text-slate-500 pb-1.5 border-b border-slate-100">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${stageColor}`}>
                  {stageLabel}
                </span>
                <span className="text-slate-400 font-mono">
                  Đoạn {pIdx + 1} / {paragraphs.length}
                </span>
              </div>
              <p className="pt-1 whitespace-pre-line text-slate-800 font-serif-reading leading-relaxed text-sm sm:text-base">
                {para}
              </p>
            </div>
          );
        })}
      </div>
    );
  };

  const wordCount = currentTopic.sampleTalk.split(/\s+/).filter(Boolean).length;
  const estimatedMin = (wordCount / 130).toFixed(1); // average 130 wpm

  return (
    <div className="space-y-6 pb-16">
      {/* Category Filter Bar with vibrant Blue and Orange */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        <span className="text-xs font-bold text-blue-900 flex items-center gap-1.5 pl-1 flex-shrink-0">
          <Filter className="w-3.5 h-3.5 text-orange-500" /> Phân loại chủ đề:
        </span>
        {[
          { key: 'all', label: `Tất cả (${topics.length})` },
          { key: 'Tech & AI', label: 'Công nghệ & AI' },
          { key: 'Environment & Ecology', label: 'Môi trường & Sinh thái' },
          { key: 'Society & Culture', label: 'Xã hội & Văn hóa' },
          { key: 'Economy & Work', label: 'Kinh tế & Việc làm' },
          { key: 'Youth & Psychology', label: 'Thanh thiếu niên & Tâm lý' }
        ].map(cat => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
              activeCategory === cat.key
                ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                : 'bg-white text-slate-600 hover:text-blue-700 hover:bg-blue-50 border border-blue-100'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Topics List (4 Cols) */}
        <div className="lg:col-span-4 bg-white rounded-3xl border border-blue-100 shadow-sm p-4 space-y-3 max-h-[820px] flex flex-col">
          <div className="flex items-center justify-between pb-2 border-b border-blue-50">
            <h3 className="font-display font-bold text-sm text-slate-900 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Kho Đề Thi ({filteredTopics.length})</span>
            </h3>
            <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-100 font-mono">
              Đang mở {topics.length} đề
            </span>
          </div>

          <div className="overflow-y-auto space-y-2 pr-1 flex-1">
            {filteredTopics.map(topic => {
              const isSelected = topic.id === selectedTopicId;
              return (
                <button
                  key={topic.id}
                  onClick={() => onSelectTopic(topic.id)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-50/80 border-blue-300 ring-2 ring-blue-500/20 shadow-sm'
                      : 'bg-slate-50/60 hover:bg-blue-50/30 border-slate-200/80'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="font-mono font-bold text-blue-700 bg-blue-100/60 px-2 py-0.5 rounded">
                      {topic.code}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">
                      {topic.category}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 line-clamp-1">
                    {topic.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                    {topic.vietnameseTitle}
                  </p>
                  <div className="mt-2.5 flex items-center gap-3 text-[10px] text-slate-400">
                    <span className="text-orange-600 font-semibold">{topic.advancedVocabulary.length} từ C1/C2</span>
                    <span>·</span>
                    <span>Dàn ý căn giờ</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Topic Detail (8 Cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Topic Detail Header */}
          <div className="bg-white rounded-3xl border border-blue-100 p-5 sm:p-7 shadow-sm space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-xl bg-blue-100/80 text-blue-900 font-mono font-bold text-xs border border-blue-200">
                  {currentTopic.code}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {currentTopic.category}
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onStartExamForTopic(currentTopic)}
                  className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-xl text-xs font-bold shadow-md shadow-orange-500/20 transition-all cursor-pointer"
                >
                  <Mic className="w-3.5 h-3.5" />
                  <span>Vào Phòng Thi Đề Này (5m)</span>
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-lg sm:text-2xl font-bold font-display text-slate-900 tracking-tight">
                {currentTopic.title}
              </h2>
              <p className="text-xs sm:text-sm text-blue-900 font-semibold mt-1">
                {currentTopic.vietnameseTitle}
              </p>
            </div>

            {/* Prompt Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-2 relative group">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-800">
                  Đề Bài Độc Thoại 5 Phút (Task Prompt)
                </span>
                <button
                  onClick={() => copyText(currentTopic.context + '\n\n' + currentTopic.task, 'task')}
                  className="text-blue-600 hover:text-blue-800 text-xs flex items-center gap-1 font-semibold transition-colors bg-white px-2.5 py-1 rounded-lg border border-blue-200 shadow-2xs cursor-pointer"
                  title="Sao chép đề bài"
                >
                  {copiedTask ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedTask ? 'Đã sao chép' : 'Sao chép'}</span>
                </button>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 italic border-l-2 border-orange-500 pl-3 leading-relaxed">
                "{currentTopic.context}"
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-900 pt-1">
                🎯 <strong>Task:</strong> {currentTopic.task}
              </p>
            </div>

            {/* Sub-tab Navigation: VOCAB FIRST ORDER */}
            <div className="flex items-center justify-between border-b border-slate-100 pt-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setTopicSubTab('vocab')}
                  className={`pb-3 px-3 text-xs sm:text-sm font-bold transition-all relative cursor-pointer flex items-center gap-1.5 ${
                    topicSubTab === 'vocab'
                      ? 'text-orange-600'
                      : 'text-slate-500 hover:text-blue-600'
                  }`}
                >
                  <Brain className="w-4 h-4 text-orange-500" />
                  <span>1. Ôn Từ Vựng C1/C2 (Học Trước)</span>
                  {topicSubTab === 'vocab' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
                  )}
                </button>

                <button
                  onClick={() => setTopicSubTab('outline')}
                  className={`pb-3 px-3 text-xs sm:text-sm font-bold transition-all relative cursor-pointer flex items-center gap-1.5 ${
                    topicSubTab === 'outline'
                      ? 'text-blue-600'
                      : 'text-slate-500 hover:text-blue-600'
                  }`}
                >
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>2. Dàn Ý Căn Giờ (4 Mốc)</span>
                  {topicSubTab === 'outline' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </button>

                <button
                  onClick={() => setTopicSubTab('sample')}
                  className={`pb-3 px-3 text-xs sm:text-sm font-bold transition-all relative cursor-pointer flex items-center gap-1.5 ${
                    topicSubTab === 'sample'
                      ? 'text-blue-600'
                      : 'text-slate-500 hover:text-blue-600'
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>3. Bài Mẫu 5 Phút Chuẩn HSGQG</span>
                  {topicSubTab === 'sample' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </button>
              </div>

              {topicSubTab === 'sample' && (
                <div className="flex items-center gap-3 pb-3 text-xs text-slate-500 font-semibold">
                  <span className="hidden sm:inline font-mono bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full border border-blue-100">{wordCount} từ (~{estimatedMin} phút)</span>
                </div>
              )}
            </div>
          </div>

          {/* Sub Tab 1: Ôn Từ Vựng C1/C2 Trước Khi Nói */}
          {topicSubTab === 'vocab' && (
            <div className="bg-white rounded-3xl border border-blue-100 p-5 sm:p-7 shadow-sm space-y-6">
              {/* Teacher Advice Box */}
              <div className="p-4 bg-orange-50/60 rounded-2xl border border-orange-200/80 flex items-start gap-3">
                <span className="text-orange-600 font-bold text-lg">💡</span>
                <div className="text-xs text-orange-950 space-y-1">
                  <p className="font-bold text-orange-900">
                    Lời dặn của Cô Nguyễn Bùi Thùy Linh trước khi luyện nói đề này:
                  </p>
                  <p className="leading-relaxed">
                    Hãy bấm vào biểu tượng chiếc loa để nghe phát âm chính xác các thuật ngữ dưới đây. Chọn ít nhất <strong>3 cụm từ C1/C2</strong> bạn thích nhất để chuẩn bị nháp và phát biểu trong 5 phút.
                  </p>
                </div>
              </div>

              {/* Vocabulary Grid */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-base text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-orange-500" />
                    Hệ Thống Từ Vựng C1/C2 & Collocations Đắt Giá Cho Đề Này
                  </h3>
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                    {currentTopic.advancedVocabulary.length} mục từ
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {currentTopic.advancedVocabulary.map((v, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl border border-blue-100 hover:border-blue-300 bg-blue-50/20 hover:bg-blue-50/50 transition-all space-y-2 group shadow-2xs"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            v.level === 'C2' ? 'bg-orange-100 text-orange-900 border border-orange-200' : 'bg-blue-100 text-blue-900 border border-blue-200'
                          }`}>
                            {v.level}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">({v.pos})</span>
                        </div>
                        <button
                          onClick={() => pronounceWord(v.term)}
                          className="text-slate-400 hover:text-blue-600 transition-colors p-1 cursor-pointer"
                          title="Nghe phát âm"
                        >
                          <Volume2 className={`w-4 h-4 ${speakingWord === v.term ? 'text-blue-600 animate-pulse' : ''}`} />
                        </button>
                      </div>

                      <h4 className="font-bold text-slate-900 text-sm group-hover:text-blue-700 transition-colors">
                        {v.term}
                      </h4>
                      <p className="text-xs text-slate-600 font-medium">
                        {v.vietnamese}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Empirical Research Data */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <h3 className="font-display font-bold text-base text-slate-900 flex items-center gap-2">
                  <BarChart2 className="w-4 h-4 text-blue-600" />
                  Số Liệu Nghiên Cứu Thực Nghiệm (Real-World Empirical Data)
                </h3>
                <div className="space-y-2.5">
                  {currentTopic.realWorldData.map((data, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-4 rounded-2xl bg-gradient-to-r from-blue-50/70 to-sky-50/50 border border-blue-200/80 text-xs sm:text-sm text-slate-800 font-medium leading-relaxed flex items-start gap-3 shadow-2xs"
                    >
                      <span className="text-blue-600 font-bold mt-0.5 font-mono text-base">📊</span>
                      <p>{data}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Step CTA */}
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setTopicSubTab('outline')}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>Đã thuộc từ vựng $\rightarrow$ Xem Dàn Ý Căn Giờ</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Sub Tab 2: Dàn Ý Căn Giờ */}
          {topicSubTab === 'outline' && (
            <div className="bg-white rounded-3xl border border-blue-100 p-5 sm:p-7 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-display font-bold text-base text-slate-900 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-500" />
                  Dàn Ý Chi Tiết & Khung Căn Giờ Từng Đoạn
                </h3>
                <span className="text-xs text-blue-700 font-bold font-mono bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">
                  Tổng thời gian: 5:00
                </span>
              </div>

              {/* Stage 1: Introduction */}
              <div className="border border-blue-200 bg-blue-50/40 rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-900 bg-blue-100 px-3 py-1 rounded-lg border border-blue-200">
                    1. INTRODUCTION ({currentTopic.outline.intro.timing})
                  </span>
                  <span className="text-[11px] text-blue-700 font-mono font-bold">Mục tiêu: Đặt vấn đề & Nêu Thesis</span>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <p><strong className="text-slate-900">• Hook & Context:</strong> {currentTopic.outline.intro.hookAndContext}</p>
                  <p><strong className="text-slate-900">• Case Summary:</strong> {currentTopic.outline.intro.coreProblem}</p>
                  <p><strong className="text-slate-900">• Thesis Statement:</strong> <span className="italic text-blue-950 font-semibold bg-white/70 px-2 py-0.5 rounded border border-blue-100 inline-block mt-1">{currentTopic.outline.intro.thesis}</span></p>
                </div>
              </div>

              {/* Stage 2: Body Paragraph 1 */}
              <div className="border border-sky-200 bg-sky-50/40 rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-sky-950 bg-sky-100 px-3 py-1 rounded-lg border border-sky-200">
                    2. BODY 1: {currentTopic.outline.body1.title} ({currentTopic.outline.body1.timing})
                  </span>
                  <span className="text-[11px] text-sky-800 font-mono font-bold">Mục tiêu: Mặt tích cực / Động cơ chính</span>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <p><strong className="text-slate-900">• Main Point:</strong> {currentTopic.outline.body1.mainPoint}</p>
                  <p><strong className="text-slate-900">• Explanation:</strong> {currentTopic.outline.body1.explanation}</p>
                  <p><strong className="text-slate-900">• Extension:</strong> {currentTopic.outline.body1.extension}</p>
                </div>
              </div>

              {/* Stage 3: Body Paragraph 2 */}
              <div className="border border-orange-200 bg-orange-50/40 rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-orange-950 bg-orange-100 px-3 py-1 rounded-lg border border-orange-200">
                    3. BODY 2: {currentTopic.outline.body2.title} ({currentTopic.outline.body2.timing})
                  </span>
                  <span className="text-[11px] text-orange-800 font-mono font-bold">Mục tiêu: Mặt tối & Bằng chứng thực tế</span>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <p><strong className="text-slate-900">• Main Point 1:</strong> {currentTopic.outline.body2.mainPoint1}</p>
                  <p><strong className="text-slate-900">• Main Point 2:</strong> {currentTopic.outline.body2.mainPoint2}</p>
                </div>
              </div>

              {/* Stage 4: Conclusion */}
              <div className="border border-indigo-200 bg-indigo-50/40 rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-indigo-950 bg-indigo-100 px-3 py-1 rounded-lg border border-indigo-200">
                    4. CONCLUSION & RECOMMENDATIONS ({currentTopic.outline.conclusion.timing})
                  </span>
                  <span className="text-[11px] text-indigo-800 font-mono font-bold">Mục tiêu: Tổng kết & Khuyến nghị</span>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <p><strong className="text-slate-900">• Restatement:</strong> {currentTopic.outline.conclusion.restatement}</p>
                  <p><strong className="text-slate-900">• Final Takeaway / Solution:</strong> <span className="italic text-indigo-950 font-semibold bg-white/70 px-2 py-0.5 rounded border border-indigo-100 inline-block mt-1">{currentTopic.outline.conclusion.finalTakeaway}</span></p>
                </div>
              </div>

              {/* Next Step CTA */}
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setTopicSubTab('sample')}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>Đã nắm dàn ý $\rightarrow$ Đọc & Nghe Bài Mẫu 5 Phút</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Sub Tab 3: Bài Mẫu Hoàn Chỉnh */}
          {topicSubTab === 'sample' && (
            <div className="bg-white rounded-3xl border border-blue-100 p-5 sm:p-7 shadow-sm space-y-4">
              {/* Media Player Controls */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-gradient-to-r from-blue-50/70 to-orange-50/40 rounded-2xl border border-blue-100">
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleSpeech}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold shadow-sm transition-all cursor-pointer ${
                      isPlayingAudio
                        ? 'bg-rose-600 hover:bg-rose-700 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20'
                    }`}
                  >
                    {isPlayingAudio ? (
                      <>
                        <Pause className="w-3.5 h-3.5" />
                        <span>Dừng đọc mẫu</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5" />
                        <span>Nghe AI phát âm mẫu (Audio TTS)</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-white px-3 py-1.5 rounded-xl border border-blue-200 shadow-2xs font-semibold">
                    <span>Tốc độ:</span>
                    <button
                      onClick={() => setAudioSpeed(0.8)}
                      className={`px-1.5 py-0.5 rounded-md cursor-pointer ${audioSpeed === 0.8 ? 'font-bold text-white bg-blue-600' : 'text-slate-600 hover:bg-slate-100'}`}
                    >
                      0.8x
                    </button>
                    <button
                      onClick={() => setAudioSpeed(1.0)}
                      className={`px-1.5 py-0.5 rounded-md cursor-pointer ${audioSpeed === 1.0 ? 'font-bold text-white bg-blue-600' : 'text-slate-600 hover:bg-slate-100'}`}
                    >
                      1.0x
                    </button>
                    <button
                      onClick={() => setAudioSpeed(1.2)}
                      className={`px-1.5 py-0.5 rounded-md cursor-pointer ${audioSpeed === 1.2 ? 'font-bold text-white bg-blue-600' : 'text-slate-600 hover:bg-slate-100'}`}
                    >
                      1.2x
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyText(currentTopic.sampleTalk, 'script')}
                    className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-blue-700 bg-white px-3 py-1.5 rounded-xl border border-blue-200 transition-colors shadow-2xs cursor-pointer"
                  >
                    {copiedScript ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedScript ? 'Đã sao chép' : 'Sao chép bài'}</span>
                  </button>
                </div>
              </div>

              {/* Sample Talk Text with Segmentation */}
              <div className="pt-2">
                {renderHighlightedSample(currentTopic.sampleTalk, currentTopic.advancedVocabulary)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
