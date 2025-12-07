import React, { useState } from 'react';
import { LESSONS } from '../constants';
import ReactMarkdown from 'react-markdown';
import { explainConceptSimple } from '../services/geminiService';
import { BookOpen, CheckCircle, Wand2, Loader2, ArrowLeft } from 'lucide-react';

interface LessonViewProps {
  initialLessonId?: string;
}

const LessonView: React.FC<LessonViewProps> = ({ initialLessonId }) => {
  const [activeLessonId, setActiveLessonId] = useState<string>(initialLessonId || LESSONS[0].id);
  const [simplifiedText, setSimplifiedText] = useState<string | null>(null);
  const [isSimplifying, setIsSimplifying] = useState(false);

  const activeLesson = LESSONS.find(l => l.id === activeLessonId) || LESSONS[0];

  const handleSimplify = async () => {
    setIsSimplifying(true);
    const explanation = await explainConceptSimple(activeLesson.title);
    setSimplifiedText(explanation);
    setIsSimplifying(false);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 min-h-[calc(100vh-140px)]">
      {/* Lesson List Sidebar */}
      <div className="w-full lg:w-80 bg-white rounded-[2rem] shadow-lg shadow-sky-100 border-2 border-slate-100 overflow-hidden flex flex-col flex-shrink-0 h-fit">
        <div className="p-6 bg-yellow-50 border-b-2 border-yellow-100">
            <h3 className="font-black text-yellow-800 flex items-center gap-3 text-lg">
                <BookOpen className="w-6 h-6 text-yellow-600" />
                Sarguzashtlar
            </h3>
        </div>
        <div className="p-3 space-y-2">
            {LESSONS.map((lesson, index) => (
                <button
                    key={lesson.id}
                    onClick={() => {
                        setActiveLessonId(lesson.id);
                        setSimplifiedText(null);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`w-full text-left p-4 rounded-2xl transition-all relative group ${
                        activeLessonId === lesson.id 
                        ? 'bg-sky-500 text-white shadow-lg shadow-sky-300 transform scale-105 z-10' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-sky-600'
                    }`}
                >
                    <div className="flex items-center gap-3">
                         <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                             activeLessonId === lesson.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-400'
                         }`}>
                             {index + 1}
                         </span>
                         <span className="font-bold text-sm md:text-base flex-1 line-clamp-1">{lesson.title.split('(')[0]}</span>
                         {activeLessonId === lesson.id && <CheckCircle className="w-5 h-5 flex-shrink-0" />}
                    </div>
                </button>
            ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 border-2 border-slate-100 flex flex-col overflow-hidden relative">
        <div className="h-32 bg-gradient-to-r from-sky-400 to-blue-500 relative overflow-hidden">
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
             <div className="absolute top-4 left-4 w-20 h-20 bg-yellow-400/30 rounded-full blur-xl"></div>
        </div>

        <div className="px-6 md:px-10 -mt-16 pb-10 relative z-10">
            {/* Header Card */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-slate-50 mb-8">
                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wide border border-green-200">
                        {activeLesson.difficulty}
                    </span>
                    {activeLesson.topics.map(t => (
                        <span key={t} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold border border-slate-200">
                            #{t}
                        </span>
                    ))}
                </div>
                <h1 className="text-3xl md:text-4xl font-black text-slate-800 mb-2">{activeLesson.title}</h1>
                <p className="text-slate-500 font-medium text-lg">{activeLesson.description}</p>
            </div>

            {/* Simplifier Tool (Magic Wand) */}
            <div className="mb-8 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white border-2 border-violet-100 p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-start md:items-center">
                     <div className="bg-violet-100 p-4 rounded-2xl text-violet-600 animate-bounce-slight">
                        <Wand2 className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                        <h4 className="font-bold text-slate-800 text-lg">Sehrli Tushuntirish ✨</h4>
                        <p className="text-slate-500 text-sm mb-3">Qiyin tuyuldimi? Sehrli tayoqchani bosing va Robochadan sodda ertak eshiting!</p>
                        
                        {!simplifiedText ? (
                            <button 
                                onClick={handleSimplify}
                                disabled={isSimplifying}
                                className="bg-violet-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-violet-700 active:scale-95 transition-all flex items-center gap-2 shadow-lg shadow-violet-200"
                            >
                                {isSimplifying ? <Loader2 className="w-5 h-5 animate-spin" /> : <Wand2 className="w-5 h-5" />}
                                {isSimplifying ? "Sehr ishlamoqda..." : "Sehrlash!"}
                            </button>
                        ) : (
                            <div className="bg-violet-50 p-4 rounded-xl border-2 border-violet-100 animate-fade-in relative">
                                <div className="absolute -top-3 -left-3 bg-white p-1 rounded-full border border-violet-100 shadow-sm">
                                    <span className="text-xl">🧞‍♂️</span>
                                </div>
                                <p className="font-bold text-violet-800 italic mb-2">"{simplifiedText}"</p>
                                <button 
                                    onClick={() => setSimplifiedText(null)}
                                    className="text-xs font-bold text-violet-400 hover:text-violet-600 uppercase tracking-wide"
                                >
                                    Yopish
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Content */}
            <article className="prose prose-lg prose-slate max-w-none 
                prose-headings:font-black prose-headings:text-slate-800 
                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:font-medium
                prose-a:text-sky-500 prose-strong:text-sky-600
                prose-li:marker:text-yellow-400">
                <ReactMarkdown>{activeLesson.content}</ReactMarkdown>
            </article>

            {/* Footer Navigation */}
            <div className="mt-12 flex justify-center">
                <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    O'qib bo'ldim!
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LessonView;
