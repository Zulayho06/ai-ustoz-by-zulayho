import React from 'react';
import { LESSONS } from '../constants';
import { AppView } from '../types';
import { Play, Star, Trophy, Sparkles, Rocket } from 'lucide-react';

interface DashboardProps {
    onChangeView: (view: AppView, lessonId?: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onChangeView }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl shadow-purple-200 relative overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white opacity-10 rounded-full -mr-20 -mt-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-10 w-40 h-40 bg-yellow-400 opacity-20 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold mb-4 border border-white/30">
                    ✨ Bugun yangi narsa o'rganamiz!
                </div>
                <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight drop-shadow-lg">
                  Salom, bo'lajak <br/> <span className="text-yellow-300">Daho!</span> 👋
                </h1>
                <p className="text-purple-100 text-xl font-medium max-w-lg mb-8 leading-relaxed">
                  Robo-do'sting seni kutmoqda. Keling, birgalikda sehrli texnologiyalar olamiga sayohat qilamiz!
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-6">
                    <button 
                        onClick={() => onChangeView(AppView.LESSON)}
                        className="bg-yellow-400 text-purple-900 font-black py-4 px-10 rounded-full hover:bg-yellow-300 transition-all shadow-[0_10px_20px_rgba(250,204,21,0.4)] flex items-center gap-3 text-lg transform hover:-translate-y-1"
                    >
                        <Rocket className="w-6 h-6 fill-current" />
                        Sayohatni Boshlash
                    </button>
                    
                    {/* Author Badge in Hero */}
                    <div className="flex items-center gap-2 bg-purple-900/30 px-4 py-2 rounded-2xl border border-purple-400/30 backdrop-blur-sm">
                        <span className="text-purple-200 text-xs font-bold uppercase">Muallif:</span>
                        <span className="text-white font-black text-sm">Qadamova Zulayho</span>
                    </div>
                </div>
            </div>
            <div className="hidden md:block relative animate-float">
                <div className="w-64 h-64 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border-4 border-white/20">
                    <span className="text-9xl">🤖</span>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-sky-400 p-4 rounded-2xl shadow-lg animate-bounce-slight delay-100">
                    <Star className="w-8 h-8 text-white fill-white" />
                </div>
                <div className="absolute bottom-4 -left-8 bg-green-400 p-3 rounded-2xl shadow-lg animate-bounce-slight delay-300">
                    <Trophy className="w-6 h-6 text-white" />
                </div>
            </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border-2 border-slate-100 hover:border-yellow-200 transition-colors">
            <div className="flex items-center gap-4">
                <div className="p-4 bg-yellow-100 rounded-2xl text-yellow-600">
                    <Trophy className="w-8 h-8" />
                </div>
                <div>
                    <h3 className="text-slate-400 font-bold text-sm uppercase tracking-wider">Daraja</h3>
                    <p className="text-3xl font-black text-slate-800">1-Bosqich</p>
                </div>
            </div>
        </div>
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border-2 border-slate-100 hover:border-sky-200 transition-colors">
            <div className="flex items-center gap-4">
                <div className="p-4 bg-sky-100 rounded-2xl text-sky-600">
                    <Star className="w-8 h-8" fill="currentColor" />
                </div>
                <div>
                    <h3 className="text-slate-400 font-bold text-sm uppercase tracking-wider">Yulduzlar</h3>
                    <p className="text-3xl font-black text-slate-800">0</p>
                </div>
            </div>
        </div>
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border-2 border-slate-100 hover:border-green-200 transition-colors">
            <div className="flex items-center gap-4">
                <div className="p-4 bg-green-100 rounded-2xl text-green-600">
                    <Sparkles className="w-8 h-8" />
                </div>
                <div>
                    <h3 className="text-slate-400 font-bold text-sm uppercase tracking-wider">Holat</h3>
                    <p className="text-3xl font-black text-slate-800">Yangi</p>
                </div>
            </div>
        </div>
      </div>

      {/* Lessons Grid */}
      <div>
        <h2 className="text-3xl font-black text-slate-800 mb-6 flex items-center gap-3">
            <span className="bg-rose-500 text-white w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-lg shadow-rose-200">📚</span>
            Qiziqarli Darslar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LESSONS.map((lesson, idx) => (
                <div 
                    key={lesson.id} 
                    onClick={() => onChangeView(AppView.LESSON, lesson.id)}
                    className="group bg-white rounded-[2rem] p-6 border-4 border-transparent hover:border-sky-400 hover:shadow-xl hover:shadow-sky-100 transition-all cursor-pointer relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 group-hover:rotate-12 duration-500">
                        <Rocket className="w-32 h-32 text-sky-600" />
                    </div>
                    
                    <div className="relative z-10">
                        <span className={`inline-block px-4 py-2 rounded-full text-xs font-black uppercase tracking-wide mb-4 ${
                            idx % 3 === 0 ? 'bg-orange-100 text-orange-600' :
                            idx % 3 === 1 ? 'bg-purple-100 text-purple-600' :
                            'bg-teal-100 text-teal-600'
                        }`}>
                            {lesson.difficulty}
                        </span>
                        <h3 className="text-2xl font-black text-slate-800 mb-2 group-hover:text-sky-600 transition-colors">
                            {lesson.title}
                        </h3>
                        <p className="text-slate-500 font-medium mb-6 line-clamp-2">
                            {lesson.description}
                        </p>
                        <div className="flex items-center text-sky-500 font-bold group-hover:translate-x-2 transition-transform">
                            Boshlash <Play className="w-4 h-4 ml-2 fill-current" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;