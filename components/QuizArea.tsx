import React, { useState } from 'react';
import { generateQuizQuestions } from '../services/geminiService';
import { QuizState, QuizQuestion } from '../types';
import { Brain, CheckCircle, XCircle, Gift, RefreshCw, Trophy, ArrowRight, Loader2, Star, Sparkles } from 'lucide-react';
import { LESSONS } from '../constants';

const QuizArea: React.FC = () => {
  const [topic, setTopic] = useState(LESSONS[0].title);
  const [loading, setLoading] = useState(false);
  const [quizState, setQuizState] = useState<QuizState | null>(null);

  const startQuiz = async () => {
    setLoading(true);
    setQuizState(null);
    const questions = await generateQuizQuestions(topic);
    
    if (questions.length > 0) {
      setQuizState({
        questions,
        currentQuestionIndex: 0,
        score: 0,
        isFinished: false,
        selectedAnswer: null,
        showExplanation: false
      });
    } else {
        alert("Xatolik bo'ldi. Internetni tekshirib ko'ring!");
    }
    setLoading(false);
  };

  const handleAnswer = (index: number) => {
    if (!quizState || quizState.selectedAnswer !== null) return;

    const currentQ = quizState.questions[quizState.currentQuestionIndex];
    const isCorrect = index === currentQ.correctAnswer;

    setQuizState({
      ...quizState,
      selectedAnswer: index,
      score: isCorrect ? quizState.score + 1 : quizState.score,
      showExplanation: true
    });
  };

  const nextQuestion = () => {
    if (!quizState) return;

    if (quizState.currentQuestionIndex >= quizState.questions.length - 1) {
      setQuizState({
        ...quizState,
        isFinished: true
      });
    } else {
      setQuizState({
        ...quizState,
        currentQuestionIndex: quizState.currentQuestionIndex + 1,
        selectedAnswer: null,
        showExplanation: false
      });
    }
  };

  // 1. Start Screen
  if (!quizState && !loading) {
    return (
      <div className="max-w-2xl mx-auto mt-6 bg-white rounded-[3rem] shadow-2xl shadow-indigo-100 p-10 text-center border-4 border-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400"></div>
        
        <div className="w-32 h-32 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce-slight">
            <span className="text-6xl">🎮</span>
        </div>
        
        <h2 className="text-4xl font-black text-slate-800 mb-4">Bilimlar O'yini!</h2>
        <p className="text-slate-500 text-lg mb-8 font-medium">
            Qaysi mavzuda o'ynashni xohlaysan? Tanla va boshla!
        </p>

        <div className="mb-8 relative z-10">
            <select 
                className="w-full p-5 rounded-2xl border-2 border-slate-200 bg-slate-50 text-lg font-bold text-slate-700 outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition-all cursor-pointer appearance-none"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
            >
                {LESSONS.map(l => (
                    <option key={l.id} value={l.title}>{l.title}</option>
                ))}
                <option value="Robotlar">🤖 Robotlar haqida</option>
                <option value="Kelajak">🚀 Kelajak texnologiyalari</option>
            </select>
        </div>

        <button 
            onClick={startQuiz}
            className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-black text-xl py-5 rounded-2xl hover:scale-105 transition-transform shadow-xl shadow-sky-200 flex items-center justify-center gap-3"
        >
            <Brain className="w-8 h-8" />
            O'yinni Boshlash
        </button>
      </div>
    );
  }

  // 2. Loading
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <div className="relative">
            <Loader2 className="w-20 h-20 text-sky-500 animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl">🤔</span>
            </div>
        </div>
        <h3 className="text-2xl font-black text-slate-800 mt-6 mb-2">Savollar pishmoqda...</h3>
        <p className="text-slate-500 font-medium">Robot amaki qiziq savollar tuzayapti</p>
      </div>
    );
  }

  // 3. Results
  if (quizState?.isFinished) {
    const percentage = Math.round((quizState.score / quizState.questions.length) * 100);
    const isWinner = percentage > 70;

    return (
      <div className="max-w-xl mx-auto mt-6 bg-white rounded-[3rem] p-10 text-center shadow-2xl relative border-4 border-slate-50">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
             {isWinner && <div className="absolute top-10 left-10 text-4xl animate-bounce">🎉</div>}
             {isWinner && <div className="absolute top-20 right-20 text-4xl animate-bounce delay-100">✨</div>}
        </div>

        <div className={`w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 ${isWinner ? 'bg-yellow-100' : 'bg-slate-100'}`}>
            <Trophy className={`w-16 h-16 ${isWinner ? 'text-yellow-500' : 'text-slate-400'}`} />
        </div>
        
        <h2 className="text-4xl font-black text-slate-800 mb-2">
            {isWinner ? "Qoyilmaqom!" : "Yaxshi urinish!"}
        </h2>
        <p className="text-slate-500 font-medium mb-8 text-lg">
            {isWinner ? "Sen haqiqiy dahosan!" : "Keyingi safar albatta yutasiz!"}
        </p>
        
        <div className="bg-slate-50 rounded-3xl p-6 mb-8">
            <div className={`text-6xl font-black mb-2 ${isWinner ? 'text-green-500' : 'text-slate-700'}`}>
                {percentage}%
            </div>
            <p className="text-slate-400 font-bold uppercase tracking-wider">Natija</p>
        </div>

        <button 
            onClick={() => setQuizState(null)}
            className="w-full bg-slate-800 text-white font-bold py-4 rounded-2xl hover:bg-slate-700 transition-all flex items-center justify-center gap-3 text-lg"
        >
            <RefreshCw className="w-6 h-6" />
            Yana o'ynash
        </button>
      </div>
    );
  }

  // 4. Question
  const question = quizState!.questions[quizState!.currentQuestionIndex];
  return (
    <div className="max-w-3xl mx-auto mt-4">
        {/* Progress Bar */}
        <div className="mb-8">
            <div className="flex justify-between items-end mb-2 px-2">
                <span className="text-slate-400 font-bold text-sm uppercase tracking-wider">Savol {quizState!.currentQuestionIndex + 1} / {quizState!.questions.length}</span>
                <div className="flex gap-1">
                    {[...Array(quizState!.questions.length)].map((_, i) => (
                        <div key={i} className={`h-2 w-8 rounded-full ${
                            i < quizState!.currentQuestionIndex ? 'bg-green-500' : 
                            i === quizState!.currentQuestionIndex ? 'bg-sky-500' : 'bg-slate-200'
                        }`}></div>
                    ))}
                </div>
            </div>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border-4 border-slate-50 relative overflow-hidden">
            {/* Question Text */}
            <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-8 leading-snug">
                {question.question}
            </h3>

            {/* Options */}
            <div className="grid grid-cols-1 gap-4">
                {question.options.map((opt, idx) => {
                    const isSelected = quizState!.selectedAnswer === idx;
                    const isCorrect = idx === question.correctAnswer;
                    const showResult = quizState!.selectedAnswer !== null;

                    let btnClass = "w-full p-6 rounded-2xl border-4 text-left transition-all relative transform hover:scale-[1.01] ";
                    
                    if (!showResult) {
                        btnClass += "border-slate-100 bg-white hover:border-sky-200 hover:shadow-lg text-slate-700";
                    } else {
                        if (isCorrect) {
                            btnClass += "border-green-400 bg-green-50 text-green-800 shadow-none";
                        } else if (isSelected) {
                            btnClass += "border-red-400 bg-red-50 text-red-800 shadow-none";
                        } else {
                            btnClass += "border-slate-100 bg-slate-50 text-slate-400 opacity-50";
                        }
                    }

                    return (
                        <button
                            key={idx}
                            onClick={() => handleAnswer(idx)}
                            disabled={showResult}
                            className={btnClass}
                        >
                            <span className="text-lg font-bold block pr-8">{opt}</span>
                            
                            {showResult && isCorrect && (
                                <CheckCircle className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 text-green-500 animate-bounce" />
                            )}
                            {showResult && isSelected && !isCorrect && (
                                <XCircle className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 text-red-500" />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>

        {/* Feedback / Explanation */}
        {quizState!.showExplanation && (
            <div className="mt-6 bg-gradient-to-r from-violet-500 to-purple-600 p-6 rounded-3xl text-white shadow-lg animate-float flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-2xl">
                    <Sparkles className="w-8 h-8 text-yellow-300" />
                </div>
                <div>
                    <h4 className="font-black text-xl mb-1">Bilib qo'ygan yaxshi! 💡</h4>
                    <p className="text-purple-100 font-medium text-lg leading-relaxed">{question.explanation}</p>
                </div>
            </div>
        )}

        {/* Next Button */}
        <div className="flex justify-end mt-8 pb-10">
            <button
                onClick={nextQuestion}
                disabled={quizState!.selectedAnswer === null}
                className="bg-yellow-400 text-slate-900 font-black py-4 px-10 rounded-2xl hover:bg-yellow-300 disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed transition-all transform hover:scale-105 flex items-center gap-3 text-xl shadow-xl shadow-yellow-200"
            >
                {quizState!.currentQuestionIndex === quizState!.questions.length - 1 ? 'Natijani ko\'rish' : 'Keyingi Savol'}
                <ArrowRight className="w-6 h-6" strokeWidth={3} />
            </button>
        </div>
    </div>
  );
};

export default QuizArea;
