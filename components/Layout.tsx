import React, { useState } from 'react';
import { AppView } from '../types';
import { NAV_ITEMS } from '../constants';
import { Menu, X, Bot, Heart } from 'lucide-react';

interface LayoutProps {
  currentView: AppView;
  onChangeView: (view: AppView) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ currentView, onChangeView, children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-sky-50 font-nunito">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col w-72 bg-white fixed h-full border-r-4 border-sky-100 z-20">
        <div className="p-6 flex items-center gap-3">
          <div className="bg-gradient-to-tr from-yellow-400 to-orange-500 p-3 rounded-2xl shadow-lg shadow-orange-200 animate-bounce-slight">
            <Bot className="w-8 h-8 text-white" />
          </div>
          <div>
            <span className="text-2xl font-black text-slate-800 tracking-tight block">AI Bolajon</span>
            <span className="text-xs font-bold text-sky-500 bg-sky-100 px-2 py-0.5 rounded-full">Beta</span>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-3 overflow-y-auto custom-scrollbar">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onChangeView(item.id)}
                className={`w-full flex items-center space-x-4 px-6 py-4 rounded-3xl transition-all duration-300 transform hover:scale-105 ${
                  isActive
                    ? 'bg-gradient-to-r from-sky-400 to-blue-500 text-white shadow-xl shadow-sky-200'
                    : 'text-slate-500 hover:bg-sky-50 hover:text-sky-600 font-bold'
                }`}
              >
                <Icon className={`w-7 h-7 ${isActive ? 'animate-pulse' : ''}`} strokeWidth={2.5} />
                <span className="font-extrabold text-lg">{item.label}</span>
              </button>
            );
          })}
        </nav>
        
        <div className="p-6 flex flex-col gap-4">
            <div className="bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-3xl p-4 text-white text-center shadow-lg transform rotate-2 hover:rotate-0 transition-transform cursor-pointer">
                <p className="font-bold text-lg mb-1">🚀 Kelajak sari!</p>
                <p className="text-white/80 text-sm">Har kuni o'rganing</p>
            </div>

            {/* Muallif */}
            <div className="text-center pt-2 border-t-2 border-slate-50">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Loyiha muallifi</p>
                <div className="flex items-center justify-center gap-1">
                    <span className="text-xs font-black text-slate-700 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                        Qadamova Zulayho
                    </span>
                </div>
            </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed w-full bg-white z-30 flex justify-between items-center p-4 shadow-sm border-b-2 border-sky-100">
         <div className="flex items-center space-x-2">
            <div className="bg-yellow-400 p-2 rounded-xl text-white">
                <Bot className="w-6 h-6" />
            </div>
            <span className="text-xl font-black text-slate-800">AI Bolajon</span>
         </div>
         <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-600 bg-slate-100 rounded-xl">
            {isMobileMenuOpen ? <X /> : <Menu />}
         </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-20 pt-24 px-6 md:hidden flex flex-col">
          <nav className="space-y-4 flex-1 overflow-y-auto">
             {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                        onChangeView(item.id);
                        setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-4 p-5 rounded-3xl text-xl font-bold shadow-sm border-2 ${
                      currentView === item.id
                        ? 'bg-sky-500 border-sky-500 text-white'
                        : 'bg-white border-slate-100 text-slate-600'
                    }`}
                  >
                    <Icon className="w-8 h-8" strokeWidth={2.5} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
          </nav>
          
          <div className="pb-8 pt-4 text-center border-t-2 border-slate-100">
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Loyiha muallifi</p>
             <p className="text-lg font-black text-sky-600 flex items-center justify-center gap-2">
                <Heart className="w-4 h-4 fill-pink-500 text-pink-500 animate-pulse" />
                Qadamova Zulayho
             </p>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 md:ml-72 pt-24 md:pt-0 min-h-screen transition-all duration-300 bg-sky-50 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] flex flex-col">
        <div className="max-w-6xl mx-auto p-4 md:p-8 flex-1 w-full">
            {children}
        </div>
        
        {/* Footer for Author Visibility on all pages */}
        <div className="text-center py-6 opacity-60 hover:opacity-100 transition-opacity mt-auto">
            <p className="text-sm font-bold text-slate-400">
                Loyiha muallifi: <span className="text-sky-600 font-black bg-sky-100 px-2 py-0.5 rounded-lg">Qadamova Zulayho</span>
            </p>
        </div>
      </main>
    </div>
  );
};

export default Layout;