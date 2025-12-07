import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { sendChatMessage } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';
import { Send, Bot, User, Loader2, Sparkles, Trash2, Smile } from 'lucide-react';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Salom kichkintoy! 🤖 Men Robo-Do'stman! Menga xohlagan savolingni ber, men hammasini bilaman! Nima haqida gaplashamiz? 🚀",
      timestamp: Date.now()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      const responseText = await sendChatMessage(history, userMsg.text);

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText || "Kechirasiz, biroz charchadim shekilli. Yana qaytara olasizmi?",
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
      setMessages([{
        id: 'welcome',
        role: 'model',
        text: "Sahifa yangilandi! 🌟 Yana nima haqida suhbatlashamiz?",
        timestamp: Date.now()
      }]);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border-4 border-slate-100 overflow-hidden relative">
      {/* Header */}
      <div className="bg-white border-b-2 border-slate-100 p-5 flex justify-between items-center z-10">
        <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-tr from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-sky-200 animate-bounce-slight">
                <Bot className="w-8 h-8 text-white" />
            </div>
            <div>
                <h2 className="font-black text-xl text-slate-800">Robo-Do'st</h2>
                <div className="flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full w-fit">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs font-bold text-green-700 uppercase tracking-wide">Aloqada</span>
                </div>
            </div>
        </div>
        <button 
            onClick={clearChat} 
            className="p-3 bg-slate-100 rounded-xl text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all" 
            title="Chatni tozalash"
        >
            <Trash2 className="w-6 h-6" />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-slate-50">
        {messages.map((msg) => {
          const isUser = msg.role === 'user';
          return (
            <div
              key={msg.id}
              className={`flex items-end gap-4 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {/* Avatar */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-md ${
                  isUser ? 'bg-indigo-500' : 'bg-sky-500'
              }`}>
                 {isUser ? <User className="w-6 h-6 text-white" /> : <Bot className="w-6 h-6 text-white" />}
              </div>
              
              {/* Bubble */}
              <div
                className={`max-w-[80%] p-5 shadow-sm relative text-lg ${
                  isUser
                    ? 'bg-indigo-500 text-white rounded-3xl rounded-br-none'
                    : 'bg-white text-slate-700 border-2 border-slate-200 rounded-3xl rounded-bl-none'
                }`}
              >
                {isUser ? (
                    <p className="font-medium">{msg.text}</p>
                ) : (
                    <div className="prose prose-p:font-medium prose-p:text-slate-700 prose-headings:font-bold prose-headings:text-slate-800">
                        <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                )}
              </div>
            </div>
          );
        })}
        
        {isLoading && (
          <div className="flex items-end gap-4">
            <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                 <Bot className="w-6 h-6 text-white animate-spin" />
            </div>
            <div className="bg-white px-6 py-4 rounded-3xl rounded-bl-none border-2 border-slate-200 shadow-sm flex items-center gap-2">
                <span className="text-sm font-bold text-slate-400">Robo o'ylamoqda</span>
                <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-sky-400 rounded-full animate-bounce delay-75"></div>
                    <div className="w-2 h-2 bg-sky-400 rounded-full animate-bounce delay-150"></div>
                    <div className="w-2 h-2 bg-sky-400 rounded-full animate-bounce delay-300"></div>
                </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-5 bg-white border-t-2 border-slate-100">
        <div className="relative flex items-center bg-slate-100 rounded-2xl transition-all focus-within:bg-white focus-within:ring-4 focus-within:ring-sky-100 focus-within:border-sky-300 border-2 border-transparent">
          <div className="pl-4 text-slate-400">
             <Smile className="w-6 h-6 hover:text-yellow-400 cursor-pointer transition-colors" />
          </div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Savolingni yoz..."
            disabled={isLoading}
            className="flex-1 bg-transparent border-none py-5 px-4 focus:outline-none text-slate-800 placeholder:text-slate-400 font-bold text-lg"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="m-2 p-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl hover:shadow-lg disabled:opacity-50 disabled:shadow-none transition-all transform active:scale-95"
          >
            <Send className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
