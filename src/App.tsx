import React, { useState, useEffect } from 'react';
import { ALL_TOPICS_30, TopicData } from './data/topicsData';
import { Header } from './components/Header';
import { StudentProfileBanner } from './components/StudentProfileBanner';
import { QuickSpeakingGuideModal } from './components/QuickSpeakingGuideModal';
import { AnalysisBreakdown } from './components/AnalysisBreakdown';
import { TopicExplorer } from './components/TopicExplorer';
import { SpeakingSimulator } from './components/SpeakingSimulator';
import { VocabFlashcards } from './components/VocabFlashcards';
import { StrategyGuide } from './components/StrategyGuide';
import { Award, BookOpen, Mic, Brain, Sparkles, Compass, Flame } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'analysis' | 'topics' | 'simulator' | 'flashcards' | 'strategy'>('analysis');
  const [selectedTopicId, setSelectedTopicId] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Student Profile state with localStorage persistence
  const [studentName, setStudentName] = useState<string>(() => {
    return localStorage.getItem('hsg_student_name') || 'Nguyễn Minh Anh';
  });
  const [studentClass, setStudentClass] = useState<string>(() => {
    return localStorage.getItem('hsg_student_class') || '12 Chuyên Anh';
  });
  
  // Question Count selection (up to 30)
  const [questionCount, setQuestionCount] = useState<number>(() => {
    const saved = localStorage.getItem('hsg_question_count');
    return saved ? Number(saved) : 20;
  });

  // Modal for author 5-minute speaking guidance
  const [isGuideModalOpen, setIsGuideModalOpen] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('hsg_student_name', studentName);
  }, [studentName]);

  useEffect(() => {
    localStorage.setItem('hsg_student_class', studentClass);
  }, [studentClass]);

  useEffect(() => {
    localStorage.setItem('hsg_question_count', String(questionCount));
  }, [questionCount]);

  // Active topics subset based on student questionCount setting
  const activeTopics = ALL_TOPICS_30.slice(0, Math.min(questionCount, ALL_TOPICS_30.length));
  const currentTopic = activeTopics.find(t => t.id === selectedTopicId) || activeTopics[0] || ALL_TOPICS_30[0];

  const handleSelectTopicFromAnywhere = (id: number) => {
    setSelectedTopicId(id);
    setActiveTab('topics');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartExamForTopic = (topic: TopicData) => {
    setSelectedTopicId(topic.id);
    setActiveTab('simulator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f0f7ff] text-slate-900 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* Top Sticky Header with Author & App Title */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedTopicCount={activeTopics.length}
        studentName={studentName}
        studentClass={studentClass}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-5">
        {/* Student Profile Banner & Question Count Selector (Always visible or in tabs) */}
        <StudentProfileBanner
          studentName={studentName}
          setStudentName={setStudentName}
          studentClass={studentClass}
          setStudentClass={setStudentClass}
          questionCount={questionCount}
          setQuestionCount={setQuestionCount}
          totalAvailable={ALL_TOPICS_30.length}
          onOpenQuickGuide={() => setIsGuideModalOpen(true)}
        />

        {activeTab === 'analysis' && (
          <AnalysisBreakdown
            onSelectTopic={handleSelectTopicFromAnywhere}
            onNavigateToSimulator={() => {
              setActiveTab('simulator');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToFlashcards={() => {
              setActiveTab('flashcards');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'topics' && (
          <TopicExplorer
            topics={activeTopics}
            selectedTopicId={selectedTopicId}
            onSelectTopic={(id) => setSelectedTopicId(id)}
            onStartExamForTopic={handleStartExamForTopic}
          />
        )}

        {activeTab === 'simulator' && (
          <SpeakingSimulator
            topics={activeTopics}
            selectedTopic={currentTopic}
            onSelectTopic={(id) => setSelectedTopicId(id)}
            studentName={studentName}
            studentClass={studentClass}
            onOpenSpeakingGuide={() => setIsGuideModalOpen(true)}
          />
        )}

        {activeTab === 'flashcards' && (
          <VocabFlashcards />
        )}

        {activeTab === 'strategy' && (
          <StrategyGuide />
        )}
      </main>

      {/* Quick Speaking Guide Modal from Author */}
      <QuickSpeakingGuideModal
        isOpen={isGuideModalOpen}
        onClose={() => setIsGuideModalOpen(false)}
        onGoToSimulator={() => {
          setIsGuideModalOpen(false);
          setActiveTab('simulator');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onGoToVocab={() => {
          setIsGuideModalOpen(false);
          setActiveTab('flashcards');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Fresh Blue and Orange Footer with Formal Author Credit */}
      <footer className="border-t border-blue-100 bg-white/90 backdrop-blur-md py-8 mt-12 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-orange-500 flex items-center justify-center text-white font-bold text-xs shadow-sm shadow-blue-500/20">
              HSG
            </div>
            <div>
              <span className="font-extrabold text-blue-950 block text-sm">
                GIA SƯ LUYỆN NÓI HỌC SINH GIỎI QUỐC GIA 12
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                Tác giả: <strong className="text-blue-900 font-bold">ThS - Nhà Giáo Ưu Tú Nguyễn Bùi Thùy Linh</strong> · Đội tuyển HSGQG môn Tiếng Anh
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 text-xs font-semibold">
            <span className="text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              {activeTopics.length} / 30 Chuyên Đề Đang Mở
            </span>
            <span className="text-orange-700 bg-orange-50 px-3 py-1 rounded-full border border-orange-200 font-mono">
              Chuẩn 5:00 Phút HSGQG
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
