import React, { useState, useEffect, useRef } from 'react';
import { TopicData } from '../data/topicsData';
import { 
  Play, Pause, RotateCcw, Mic, Square, Volume2, 
  Clock, CheckCircle, AlertTriangle, Lightbulb, 
  FileText, Sparkles, ChevronRight, Award, Download, Flame,
  Radio, BookOpen, VolumeX, CheckCircle2, User, HelpCircle,
  Zap, ArrowRight, Layers
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface SpeakingSimulatorProps {
  topics: TopicData[];
  selectedTopic: TopicData;
  onSelectTopic: (id: number) => void;
  studentName?: string;
  studentClass?: string;
  onOpenSpeakingGuide?: () => void;
}

export const SpeakingSimulator: React.FC<SpeakingSimulatorProps> = ({
  topics,
  selectedTopic,
  onSelectTopic,
  studentName = 'Học sinh',
  studentClass = '12 Chuyên Anh',
  onOpenSpeakingGuide
}) => {
  // Practice step tab: 'vocab' (Step 1), 'guide' (Step 2), or 'speak' (Step 3)
  const [activeStep, setActiveStep] = useState<'vocab' | 'guide' | 'speak'>('speak');

  // Vocab memorization state for current topic
  const [memorizedVocab, setMemorizedVocab] = useState<Record<string, boolean>>({});
  const [playingTerm, setPlayingTerm] = useState<string | null>(null);

  // Timer modes: 'prep' (5 mins) or 'speak' (5 mins)
  const [examMode, setExamMode] = useState<'prep' | 'speak'>('speak');
  const [timeLeft, setTimeLeft] = useState<number>(300); // 300 seconds = 5 minutes
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [notes, setNotes] = useState<string>('');
  
  // Audio recording state
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordingSeconds, setRecordingSeconds] = useState<number>(0);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);
  const [micVolumeLevel, setMicVolumeLevel] = useState<number>(0);
  const [recordingError, setRecordingError] = useState<string | null>(null);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const recordingTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Pronounce vocabulary using SpeechSynthesis
  const speakTerm = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    utterance.onstart = () => setPlayingTerm(text);
    utterance.onend = () => setPlayingTerm(null);
    utterance.onerror = () => setPlayingTerm(null);
    window.speechSynthesis.speak(utterance);
  };

  const toggleVocabMemorized = (term: string) => {
    setMemorizedVocab(prev => ({
      ...prev,
      [term]: !prev[term]
    }));
  };

  // Main countdown timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsRunning(false);
            if (isRecording) {
              stopRecording();
            }
            confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 }
            });
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft, isRecording]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopMicrophoneStream();
      if (recordingTimerRef.current) clearInterval(recordingTimerRef.current);
    };
  }, []);

  // When changing topic, reset audio and timer
  useEffect(() => {
    setIsRunning(false);
    setTimeLeft(300);
    setRecordedAudioUrl(null);
    setRecordingSeconds(0);
    if (isRecording) {
      stopRecording();
    }
  }, [selectedTopic.id]);

  const stopMicrophoneStream = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    if (analyserRef.current) {
      analyserRef.current.disconnect();
      analyserRef.current = null;
    }
    if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
      audioContextRef.current.close().catch(() => {});
      audioContextRef.current = null;
    }
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
      mediaStreamRef.current = null;
    }
    setMicVolumeLevel(0);
  };

  const startRecording = async () => {
    setRecordingError(null);
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Trình duyệt của bạn không hỗ trợ ghi âm trực tiếp (MediaDevices API). Hãy sử dụng Chrome, Edge hoặc Safari phiên bản mới nhất.');
      }

      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        } 
      });

      mediaStreamRef.current = stream;

      // Audio visualizer setup
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const audioCtx = new AudioCtx();
        audioContextRef.current = audioCtx;
        const source = audioCtx.createMediaStreamSource(stream);
        const analyser = audioCtx.createAnalyser();
        analyser.fftSize = 64;
        source.connect(analyser);
        analyserRef.current = analyser;

        const dataArray = new Uint8Array(analyser.frequencyBinCount);
        const updateLevel = () => {
          if (!analyserRef.current) return;
          analyserRef.current.getByteFrequencyData(dataArray);
          let sum = 0;
          for (let i = 0; i < dataArray.length; i++) {
            sum += dataArray[i];
          }
          const avg = sum / dataArray.length;
          const levelPercent = Math.min(100, Math.round((avg / 128) * 100));
          setMicVolumeLevel(levelPercent);
          animationFrameRef.current = requestAnimationFrame(updateLevel);
        };
        updateLevel();
      } catch (err) {
        console.warn('AudioContext Visualizer could not initialize:', err);
      }

      // Check supported MIME type
      let mimeType = 'audio/webm';
      if (typeof MediaRecorder.isTypeSupported === 'function') {
        if (MediaRecorder.isTypeSupported('audio/webm;codecs=opus')) {
          mimeType = 'audio/webm;codecs=opus';
        } else if (MediaRecorder.isTypeSupported('audio/webm')) {
          mimeType = 'audio/webm';
        } else if (MediaRecorder.isTypeSupported('audio/mp4')) {
          mimeType = 'audio/mp4';
        } else if (MediaRecorder.isTypeSupported('audio/ogg;codecs=opus')) {
          mimeType = 'audio/ogg;codecs=opus';
        }
      }

      const mediaRecorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: mimeType || 'audio/webm' });
        const url = URL.createObjectURL(audioBlob);
        setRecordedAudioUrl(url);
        stopMicrophoneStream();
      };

      mediaRecorder.start(250);
      setIsRecording(true);
      setRecordingSeconds(0);

      // Auto start countdown timer if not already running
      if (!isRunning) {
        setIsRunning(true);
      }

      recordingTimerRef.current = setInterval(() => {
        setRecordingSeconds(prev => prev + 1);
      }, 1000);

    } catch (err: unknown) {
      console.error('Error starting recording:', err);
      const errorMsg = err instanceof Error ? err.message : String(err);
      if (errorMsg.includes('Permission denied') || errorMsg.includes('NotAllowedError')) {
        setRecordingError('Trình duyệt chưa được cấp quyền truy cập Microphone. Vui lòng nhấn vào biểu tượng ổ khóa/micro trên thanh địa chỉ URL để chọn "Cho phép" (Allow), sau đó bấm thử lại.');
      } else {
        setRecordingError(`Không thể kích hoạt micro: ${errorMsg}`);
      }
      setIsRecording(false);
      stopMicrophoneStream();
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
    if (recordingTimerRef.current) {
      clearInterval(recordingTimerRef.current);
      recordingTimerRef.current = null;
    }
    setIsRecording(false);
    stopMicrophoneStream();
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(300);
    if (isRecording) {
      stopRecording();
    }
  };

  const switchMode = (mode: 'prep' | 'speak') => {
    setIsRunning(false);
    setExamMode(mode);
    setTimeLeft(300);
    if (isRecording) {
      stopRecording();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const elapsed = 300 - timeLeft;

  // Real-time stage detection during speaking mode
  let currentStage = {
    name: 'Giai đoạn 1: Mở Đầu & Đặt Vấn Đề (Introduction)',
    nameEn: 'Intro: Hook & Dialectical Thesis',
    timeRange: '0:00 - 0:45',
    guidance: 'Dùng Hook thời sự, định nghĩa bản chất vấn đề và chốt Thesis Statement biện chứng.'
  };

  if (elapsed > 45 && elapsed <= 135) {
    currentStage = {
      name: 'Giai đoạn 2: Luận Điểm 1 (Mặt sáng & Lợi ích cốt lõi)',
      nameEn: 'Body 1: The Silver Lining & Positive Merits',
      timeRange: '0:45 - 2:15',
      guidance: 'Phân tích các giá trị kinh tế/xã hội tích cực, đưa dẫn chứng cụ thể và lập luận chặt chẽ.'
    };
  } else if (elapsed > 135 && elapsed <= 255) {
    currentStage = {
      name: 'Giai đoạn 3: Luận Điểm 2 (Mặt tối & Hệ lụy hệ thống)',
      nameEn: 'Body 2: The Dark Side & Real-World Data',
      timeRange: '2:15 - 4:15',
      guidance: 'Trọng tâm bài thi (2 phút): Nêu tác hại sâu sắc, trích dẫn số liệu thực nghiệm uy tín.'
    };
  } else if (elapsed > 255) {
    currentStage = {
      name: 'Giai đoạn 4: Kết Luận & Đề Xuất Giải Pháp',
      nameEn: 'Conclusion & Recommendations',
      timeRange: '4:15 - 5:00',
      guidance: 'Khẳng định lại lập trường và đề xuất giải pháp 2 mũi nhọn (Chính sách + Ý thức).'
    };
  }

  const memorizedCount = selectedTopic.advancedVocabulary.filter(v => memorizedVocab[v.term]).length;
  const safeStudentFile = (studentName || 'HocSinh').replace(/[^a-zA-Z0-9]/g, '_');
  const safeClassFile = (studentClass || 'Lop12').replace(/[^a-zA-Z0-9]/g, '_');

  return (
    <div className="space-y-6 pb-16">
      {/* Top Banner with Student Info & Step Switcher */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 border border-blue-100 shadow-sm space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-orange-600 font-mono bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200">
                PHÒNG THI MÔ PHỎNG HSG
              </span>
              <span className="text-xs text-blue-600 font-bold bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                Chuẩn 5 Phút Độc Thoại
              </span>
              <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                <User className="w-3 h-3" />
                {studentName} - {studentClass}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mt-1.5">
              Phòng Luyện Nói & Ghi Âm Tự Động (5 Phút)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Quy trình chuẩn 3 bước: Ôn tập từ vựng $\rightarrow$ Xem chiến thuật 5 phút $\rightarrow$ Bấm giờ & Ghi âm độc thoại.
            </p>
          </div>

          {/* Topic Selector Dropdown */}
          <div className="flex items-center gap-2">
            <label className="text-xs font-bold text-blue-900 whitespace-nowrap">Chọn đề ({topics.length} đề):</label>
            <select
              value={selectedTopic.id}
              onChange={(e) => onSelectTopic(Number(e.target.value))}
              className="text-xs bg-blue-50/60 border border-blue-200 rounded-xl px-3.5 py-2.5 outline-none focus:border-blue-500 font-semibold text-slate-800 max-w-xs truncate shadow-2xs"
            >
              {topics.map(t => (
                <option key={t.id} value={t.id}>
                  {t.code}: {t.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 3 Sequential Learning Steps Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <button
            onClick={() => setActiveStep('vocab')}
            className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
              activeStep === 'vocab'
                ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20'
                : 'bg-blue-50/50 hover:bg-blue-50 text-slate-800 border-blue-200/80'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className={`w-8 h-8 rounded-xl font-mono font-bold text-xs flex items-center justify-center ${
                activeStep === 'vocab' ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'
              }`}>
                01
              </span>
              <div>
                <p className="text-xs font-extrabold">Bước 1: Ôn Từ Vựng Chủ Đề</p>
                <p className={`text-[11px] ${activeStep === 'vocab' ? 'text-blue-100' : 'text-slate-500'}`}>
                  {memorizedCount}/{selectedTopic.advancedVocabulary.length} từ C1/C2 đã thuộc
                </p>
              </div>
            </div>
            <BookOpen className="w-4 h-4 opacity-80" />
          </button>

          <button
            onClick={() => setActiveStep('guide')}
            className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
              activeStep === 'guide'
                ? 'bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-500/20'
                : 'bg-orange-50/50 hover:bg-orange-50 text-slate-800 border-orange-200/80'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className={`w-8 h-8 rounded-xl font-mono font-bold text-xs flex items-center justify-center ${
                activeStep === 'guide' ? 'bg-white text-orange-600' : 'bg-orange-500 text-white'
              }`}>
                02
              </span>
              <div>
                <p className="text-xs font-extrabold">Bước 2: Chiến Thuật 5 Phút</p>
                <p className={`text-[11px] ${activeStep === 'guide' ? 'text-orange-100' : 'text-slate-500'}`}>
                  4 mốc căn giờ & công thức điểm cao
                </p>
              </div>
            </div>
            <Lightbulb className="w-4 h-4 opacity-80" />
          </button>

          <button
            onClick={() => setActiveStep('speak')}
            className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
              activeStep === 'speak'
                ? 'bg-blue-900 text-white border-blue-900 shadow-md shadow-blue-900/20'
                : 'bg-slate-50 hover:bg-blue-50/50 text-slate-800 border-slate-200'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className={`w-8 h-8 rounded-xl font-mono font-bold text-xs flex items-center justify-center ${
                activeStep === 'speak' ? 'bg-orange-400 text-slate-900' : 'bg-slate-800 text-white'
              }`}>
                03
              </span>
              <div>
                <p className="text-xs font-extrabold">Bước 3: Bấm Giờ & Ghi Âm</p>
                <p className={`text-[11px] ${activeStep === 'speak' ? 'text-blue-200' : 'text-slate-500'}`}>
                  Đồng hồ 5 phút + Máy thu âm
                </p>
              </div>
            </div>
            <Mic className="w-4 h-4 opacity-80" />
          </button>
        </div>
      </div>

      {/* STEP 1: VOCABULARY PRE-REVIEW ACCORDION / VIEW */}
      {activeStep === 'vocab' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-blue-100 pb-4">
            <div>
              <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200">
                BƯỚC 1: KHỞI ĐỘNG VỐN TỪ VỰNG CHUYÊN NGÀNH
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-1 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                Bộ Từ Vựng C1/C2 Cho: {selectedTopic.code}
              </h3>
              <p className="text-xs text-slate-500">
                Học sinh cần nắm chắc phát âm và nghĩa của các từ này để vận dụng tự nhiên trong bài nói 5 phút.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveStep('guide')}
                className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs rounded-xl shadow-xs flex items-center gap-1.5 cursor-pointer"
              >
                <span>Sang Bước 2: Xem Cách Nói</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {selectedTopic.advancedVocabulary.map((v, idx) => {
              const isMemorized = !!memorizedVocab[v.term];
              return (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border transition-all ${
                    isMemorized
                      ? 'bg-emerald-50/50 border-emerald-300'
                      : 'bg-white hover:bg-blue-50/40 border-blue-100'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2 py-0.5 text-[11px] font-mono font-extrabold bg-blue-100 text-blue-800 rounded-md">
                      {v.level}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => speakTerm(v.term)}
                        title="Nghe phát âm chuẩn"
                        className="p-1.5 hover:bg-blue-100 text-blue-600 rounded-lg cursor-pointer transition-colors"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => toggleVocabMemorized(v.term)}
                        title={isMemorized ? 'Đã nhớ' : 'Đánh dấu đã thuộc'}
                        className={`p-1.5 rounded-lg cursor-pointer transition-colors ${
                          isMemorized ? 'bg-emerald-600 text-white' : 'hover:bg-slate-100 text-slate-400'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {v.term}
                  </h4>
                  <p className="text-xs font-semibold text-orange-600 mt-0.5">
                    {v.vietnamese}
                  </p>
                  {v.exampleInSpeech && (
                    <p className="text-[11px] text-slate-600 italic mt-2 border-t border-slate-100 pt-2 leading-relaxed">
                      "{v.exampleInSpeech}"
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="text-blue-900">
              💡 <strong>Số liệu minh chứng:</strong> {selectedTopic.realWorldData[0]}
            </div>
            <button
              onClick={() => setActiveStep('speak')}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xs flex items-center gap-2 cursor-pointer flex-shrink-0"
            >
              <span>Vào Phòng Thi Bấm Giờ Ngay</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: SPEAKING STRATEGY & RUBRIC GUIDANCE */}
      {activeStep === 'guide' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-orange-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-orange-100 pb-4">
            <div>
              <span className="text-xs font-mono font-bold text-orange-700 bg-orange-50 px-2.5 py-0.5 rounded-md border border-orange-200">
                BƯỚC 2: HƯỚNG DẪN NÓI 5 PHÚT ĐẠT ĐIỂM CAO
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-1 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-orange-500" />
                Khung Căn Giờ Vàng Của ThS.NGƯT Nguyễn Bùi Thùy Linh
              </h3>
              <p className="text-xs text-slate-500">
                Bí quyết giúp học sinh kiểm soát chuẩn xác thời lượng 5 phút độc thoại mà không bị hụt ý hoặc cháy giáo án.
              </p>
            </div>
            <div className="flex items-center gap-2">
              {onOpenSpeakingGuide && (
                <button
                  onClick={onOpenSpeakingGuide}
                  className="px-3.5 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs rounded-xl border border-blue-200 flex items-center gap-1.5 cursor-pointer"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>Cẩm Nang Đầy Đủ</span>
                </button>
              )}
              <button
                onClick={() => setActiveStep('speak')}
                className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs rounded-xl shadow-xs flex items-center gap-1.5 cursor-pointer"
              >
                <span>Sang Bước 3: Vào Luyện Nói</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 4 Time Stages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-extrabold bg-blue-600 text-white px-2 py-0.5 rounded-md">
                  0:00 - 0:45
                </span>
                <span className="text-xs font-bold text-blue-800">45 Giây</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm">1. Mở Đầu & Thesis</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mở bằng thời sự nóng (Hook). Khẳng định luận đề biện chứng đa chiều: <em>"While [A] brings notable merits, it simultaneously spawns [B]..."</em>
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-extrabold bg-amber-500 text-white px-2 py-0.5 rounded-md">
                  0:45 - 2:15
                </span>
                <span className="text-xs font-bold text-amber-800">90 Giây</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm">2. Luận Điểm 1 (Mặt sáng)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Phân tích lợi ích hiển nhiên, giá trị kinh tế/xã hội. Dùng các liên từ cấp cao: <em>"First and foremost...", "On the macroeconomic front..."</em>
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-extrabold bg-rose-600 text-white px-2 py-0.5 rounded-md">
                  2:15 - 4:15
                </span>
                <span className="text-xs font-bold text-rose-800">120 Giây</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm">3. Luận Điểm 2 (Mặt tối)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Trọng tâm bài thi: Khai thác hệ lụy xã hội, đạo đức, và trích dẫn số liệu thực nghiệm để tạo sức nặng học thuật.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-extrabold bg-emerald-600 text-white px-2 py-0.5 rounded-md">
                  4:15 - 5:00
                </span>
                <span className="text-xs font-bold text-emerald-800">45 Giây</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm">4. Kết Luận & Giải Pháp</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tái khẳng định quan điểm và đưa ra giải pháp song hành: Khung pháp lý nhà nước + Trách nhiệm công dân.
              </p>
            </div>
          </div>

          <div className="p-4 bg-orange-50 rounded-2xl border border-orange-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="text-orange-950">
              🎯 <strong>Lời dặn của Giám khảo:</strong> Tốc độ nói tối ưu là 130 - 145 từ/phút. Tránh dùng từ ngữ quá bình dân như <em>"a lot of"</em> hay <em>"good/bad"</em>, hãy thay bằng <em>"a plethora of"</em>, <em>"salutary"</em> và <em>"deleterious"</em>.
            </div>
            <button
              onClick={() => setActiveStep('speak')}
              className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-xs flex items-center gap-2 cursor-pointer flex-shrink-0"
            >
              <span>Tiến Hành Luyện Nói Ngay</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Permission / Recording Error Notice */}
      {recordingError && (
        <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-start gap-3 shadow-xs">
          <AlertTriangle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold text-rose-900">Thông báo về quyền Microphone:</p>
            <p className="leading-relaxed">{recordingError}</p>
            <p className="text-[11px] text-rose-700 font-medium pt-1">
              💡 Hướng dẫn: Nhấp vào biểu tượng Micro/Khóa trên thanh URL trình duyệt $\rightarrow$ Chọn "Cho phép" (Allow) $\rightarrow$ Bấm nút "Thử lại ghi âm".
            </p>
          </div>
        </div>
      )}

      {/* STEP 3 / MAIN INTERFACE: TIMER, RECORDER & SCRATCHPAD */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Interactive Timer & Live Stage Gauge (7 Cols) */}
        <div className="lg:col-span-7 space-y-5">
          {/* Main Timer Display Card with Deep Blue and Vivid Orange Glowing Numbers */}
          <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-blue-950/20 border border-blue-500/20 relative overflow-hidden space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 p-1 bg-white/10 backdrop-blur-md rounded-xl border border-white/10">
                <button
                  onClick={() => switchMode('speak')}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    examMode === 'speak' ? 'bg-orange-500 text-white shadow-sm' : 'text-blue-200 hover:text-white'
                  }`}
                >
                  Nói Độc Thoại (5 Phút)
                </button>
                <button
                  onClick={() => switchMode('prep')}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    examMode === 'prep' ? 'bg-blue-600 text-white shadow-sm' : 'text-blue-200 hover:text-white'
                  }`}
                >
                  Chuẩn Bị Nháp (5 Phút)
                </button>
              </div>

              {isRecording ? (
                <div className="flex items-center gap-2 bg-rose-500/25 text-rose-300 border border-rose-500/50 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
                  <span>Đang ghi: {formatTime(recordingSeconds)}</span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 text-xs text-blue-200/80 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10 font-medium">
                  <Radio className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Micro sẵn sàng</span>
                </div>
              )}
            </div>

            {/* Huge Digital Clock */}
            <div className="text-center py-2">
              <div className="text-7xl sm:text-8xl lg:text-9xl font-mono font-black tracking-tight bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400 bg-clip-text text-transparent drop-shadow-sm">
                {formatTime(timeLeft)}
              </div>
              <p className="text-xs text-blue-200/80 mt-2 font-medium">
                {examMode === 'speak' ? 'Thời gian còn lại của bài độc thoại 5 phút' : 'Thời gian lập dàn ý chuẩn bị (5 phút)'}
              </p>
            </div>

            {/* Live Audio Volume Visualizer while recording */}
            {isRecording && (
              <div className="space-y-1.5 bg-black/30 p-3.5 rounded-2xl border border-rose-500/30">
                <div className="flex items-center justify-between text-[11px] text-blue-200">
                  <span className="flex items-center gap-1.5 font-bold text-rose-400">
                    <Mic className="w-3.5 h-3.5 animate-pulse" /> Tín hiệu âm thanh Micro (Live Signal):
                  </span>
                  <span className="font-mono">{micVolumeLevel}%</span>
                </div>
                {/* Visualizer bars */}
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden flex items-center p-0.5">
                  <div
                    className="h-full rounded-full transition-all duration-75 bg-gradient-to-r from-emerald-500 via-amber-400 to-rose-500"
                    style={{ width: `${Math.max(5, micVolumeLevel)}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>Yên tĩnh</span>
                  <span>Âm lượng tốt</span>
                  <span>Quá lớn</span>
                </div>
              </div>
            )}

            {/* Real-time Stage Notification Bar */}
            {examMode === 'speak' && (
              <div className="bg-white/10 backdrop-blur-md border border-orange-500/30 rounded-2xl p-4 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-extrabold text-orange-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 fill-orange-400" />
                    {currentStage.name}
                  </span>
                  <span className="font-mono text-sky-300 font-bold">{currentStage.timeRange}</span>
                </div>
                <p className="text-xs text-blue-100 leading-relaxed">
                  💡 {currentStage.guidance}
                </p>
              </div>
            )}

            {/* Action Buttons with Orange for Main Call, Blue/Slate for Secondary */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              {!isRunning ? (
                <button
                  onClick={() => setIsRunning(true)}
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-sm rounded-xl transition-all shadow-lg shadow-orange-500/25 flex items-center gap-2 cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Bắt Đầu Tính Giờ</span>
                </button>
              ) : (
                <button
                  onClick={() => setIsRunning(false)}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm rounded-xl transition-all shadow-lg shadow-blue-600/25 flex items-center gap-2 cursor-pointer"
                >
                  <Pause className="w-4 h-4 fill-white" />
                  <span>Tạm Dừng</span>
                </button>
              )}

              <button
                onClick={resetTimer}
                className="px-4 py-3 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-xl border border-white/15 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Đặt Lại</span>
              </button>

              {!isRecording ? (
                <button
                  onClick={startRecording}
                  className="px-5 py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-rose-600/25 flex items-center gap-2 cursor-pointer"
                >
                  <Mic className="w-4 h-4" />
                  <span>Bật Micro & Ghi Âm</span>
                </button>
              ) : (
                <button
                  onClick={stopRecording}
                  className="px-5 py-3 bg-rose-700 hover:bg-rose-800 text-white border border-rose-400 font-bold text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-rose-600/30"
                >
                  <Square className="w-4 h-4 fill-white" />
                  <span>Dừng & Lưu Bản Thu</span>
                </button>
              )}
            </div>

            {/* Audio Playback Player if Recorded */}
            {recordedAudioUrl && (
              <div className="pt-4 border-t border-white/15 space-y-3 bg-white/5 p-4 rounded-2xl">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-blue-100">
                  <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4" />
                    Bản thu hoàn tất ({formatTime(recordingSeconds)}) của {studentName} ({studentClass})! Bấm nghe lại:
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={recordedAudioUrl}
                      download={`HSG12_${safeStudentFile}_${safeClassFile}_${selectedTopic.code.replace(/\s+/g, '_')}.webm`}
                      className="text-orange-400 hover:text-orange-300 font-bold flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-lg border border-white/15"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Tải file bài thi ({studentName})
                    </a>
                  </div>
                </div>
                <audio controls src={recordedAudioUrl} className="w-full h-11 rounded-xl bg-white/90" />
                <p className="text-[11px] text-blue-200/80 italic">
                  💡 Bí quyết tự chấm: Lắng nghe xem bài nói có duy trì tốc độ đều đặn 120-140 từ/phút không, có bị ngập ngừng ở các đoạn nối (Signposting phrases) và có phát âm rõ các thuật ngữ C1/C2 không.
                </p>
              </div>
            )}
          </div>

          {/* Quick Cue Card for the Selected Topic */}
          <div className="bg-white rounded-3xl p-6 border border-blue-100 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-bold text-sm text-slate-900 flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-600" />
                Thẻ Nhớ Từ Vựng & Số Liệu Nhanh (Cue Card)
              </h3>
              <button
                onClick={() => setActiveStep('vocab')}
                className="text-xs text-blue-600 hover:text-blue-800 font-bold flex items-center gap-1"
              >
                <span>Xem danh sách đầy đủ</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedTopic.advancedVocabulary.map((v, i) => (
                <span
                  key={i}
                  className="text-xs bg-blue-50/70 hover:bg-orange-50 text-blue-900 hover:text-orange-900 border border-blue-200/80 rounded-xl px-3 py-1 font-semibold transition-colors cursor-default"
                  title={v.vietnamese}
                >
                  {v.term} ({v.level})
                </span>
              ))}
            </div>
            <div className="text-xs text-slate-700 bg-blue-50/40 p-3.5 rounded-2xl border border-blue-200/60 leading-relaxed">
              <strong className="text-blue-900">Số liệu then chốt:</strong> {selectedTopic.realWorldData[0]}
            </div>
          </div>
        </div>

        {/* Right Column: Scratchpad & Prompt Card (5 Cols) */}
        <div className="lg:col-span-5 space-y-5">
          {/* Prompt Review Card */}
          <div className="bg-white rounded-3xl p-6 border border-blue-100 shadow-sm space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-blue-700 font-mono bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                {selectedTopic.code} · ĐỀ BÀI CHÍNH THỨC
              </span>
              <span className="text-[11px] text-slate-400 font-medium">{selectedTopic.category}</span>
            </div>
            <h4 className="text-sm font-bold text-slate-900">
              {selectedTopic.title}
            </h4>
            <p className="text-xs text-slate-600 italic bg-blue-50/30 p-3 rounded-2xl border border-blue-100/80 leading-relaxed">
              "{selectedTopic.context}"
            </p>
            <p className="text-xs text-slate-800 font-semibold pt-1">
              Task: {selectedTopic.task}
            </p>
          </div>

          {/* Scratchpad (Giấy Nháp Phòng Thi) */}
          <div className="bg-white rounded-3xl p-6 border border-blue-100 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-bold text-sm text-slate-900 flex items-center gap-2">
                <FileText className="w-4 h-4 text-orange-500" />
                Giấy Nháp Phòng Thi (Scratchpad)
              </h3>
              <button
                onClick={() => setNotes(`[0:00 - 0:45] Intro:\n- Hook:\n- Thesis: While..., it simultaneously...\n\n[0:45 - 2:15] Body 1 (Merits):\n- Point:\n- Example:\n\n[2:15 - 4:15] Body 2 (Costs & Data):\n- Point:\n- Evidence (Data):\n\n[4:15 - 5:00] Conclusion & Policy:\n- Tripartite solution:`)}
                className="text-xs text-blue-600 hover:text-blue-800 font-bold cursor-pointer"
              >
                + Chèn Mẫu Nháp
              </button>
            </div>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ghi chú nhanh các luận điểm, từ vựng C1/C2 bạn dự định nói trong 5 phút..."
              className="w-full h-64 text-xs font-mono bg-blue-50/20 border border-blue-200 rounded-2xl p-3.5 outline-none focus:border-blue-500 focus:bg-white resize-none text-slate-800"
            />
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Mẹo: Khi chuẩn bị nháp, chỉ ghi gạch đầu dòng từ khóa, tuyệt đối không viết nguyên văn cả câu để tránh hiện tượng cắm đầu đọc vấp.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
