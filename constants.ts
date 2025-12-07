import { Lesson, AppView } from './types';
import { BookOpen, Rocket, Bot, Sparkles, Gamepad2, Star } from 'lucide-react';

export const LESSONS: Lesson[] = [
  {
    id: '1',
    title: "Sehrli Kompyuter (AI Nima?)",
    description: "Qanday qilib kompyuterlar fikrlashni va gapirishni o'rganadi?",
    difficulty: "Boshlang'ich",
    topics: ["Sehrli Miya", "Robotlar", "Kelajak"],
    content: `
# 🤖 Sehrli Kompyuter (AI)

Salom do'stim! Bugun biz sen bilan **Sun'iy Intellekt** (yoki qisqacha **AI**) nima ekanligini bilib olamiz. 

## AI bu nima? 🤔
Tasavvur qil, sening o'yinchog'ing gapira olsa, senga ertak aytib bersa va sen bilan o'ynasa! Ajoyib-a? 
AI - bu kompyuterga xuddi inson kabi **o'ylashni**, **ko'rishni** va **eshitishni** o'rgatadigan sehrli dastur.

## U nimalar qila oladi?
*   🗣️ **Siri va Google**: Sening savollaringga javob beradi.
*   🚗 **Tesla**: Haydovchisiz o'zi yuradigan mashina.
*   🎨 **Rasm chizish**: Sening so'zlaringdan ajoyib rasmlar yaratadi.

AI - bu sening aqlli yordamching! U charchamaydi va har doim o'rganishga tayyor.
`
  },
  {
    id: '2',
    title: "Robotlar Maktabi (Machine Learning)",
    description: "Biz robotlarga xuddi kuchukchalarga o'rgatgandek dars o'tamiz!",
    difficulty: "O'rta",
    topics: ["O'rgatish", "Mushuk vs Kuchuk", "Ma'lumotlar"],
    content: `
# 🏫 Robotlar Maktabi

Siz maktabda o'qish va yozishni o'rganasiz, to'g'rimi? Kompyuterlar ham o'rganishi kerak! Buni biz **Machine Learning** (Mashinali O'qitish) deb ataymiz.

## Qanday o'rgatamiz? 🍎

Tasavvur qil, biz robotga **Mushuk** 🐱 va **Kuchuk** 🐶 ni ajratishni o'rgatmoqchimiz.

1.  Biz unga 1000 ta mushuk rasmini va 1000 ta kuchuk rasmini ko'rsatamiz.
2.  "Mana bu mushuk, bunisi esa kuchuk" deymiz.
3.  Robot rasmlarni ko'rib, ularning farqini (quloqlari, burni, dumi) o'zi topib oladi.

Keyingi safar unga yangi rasm ko'rsatsang, u: *"Ha! Bu aniq mushuk!"* deb aytadi.

Demak, robotlar ko'p misollar ko'rish orqali aqlli bo'lishadi!
`
  },
  {
    id: '3',
    title: "Super Miya (Neyron Tarmoqlar)",
    description: "Kompyuterning ichida ham xuddi bizdagi kabi kichkina miya bor!",
    difficulty: "Yuqori",
    topics: ["Miya hujayralari", "Bog'lanishlar", "Chuqur o'ylash"],
    content: `
# 🧠 Super Miya (Neyron Tarmoqlar)

Sening boshingda milliardlab kichkina "chiroqchalar" (neyronlar) bor. Sen biror narsani o'ylaganingda, ular yonadi va bir-biriga signal beradi. ⚡

Kompyuterda ham shunday "sun'iy miya" yasash mumkin!

## Bu qanday ishlaydi?
Tasavvur qil, ko'p qavatli bino bor:
*   **1-qavat**: Rasmni ko'radi (masalan, raqamni).
*   **2-qavat**: Chiziqlarni aniqlaydi.
*   **3-qavat**: Shakllarni birlashtiradi.
*   **Tom**: "Bu 5 raqami!" deb javob beradi.

Har bir qavat keyingisiga xabar beradi. Shunday qilib, kompyuter juda qiyin masalalarni ham yecha oladi!
`
  },
    {
    id: '4',
    title: "Rasmchi Robot (Generativ AI)",
    description: "So'zlaringdan yangi dunyo yaratuvchi sehrgar!",
    difficulty: "O'rta",
    topics: ["Ijod", "Rasm chizish", "Ertaklar"],
    content: `
# 🎨 Rasmchi Robot

Ba'zi robotlar shunchaki o'rganmaydi, ular **yaratadi**! Buni **Generativ AI** deymiz.

## U nima qila oladi?
*   **Rasm chizish**: Sen unga *"Kosmosda uchayotgan pushti fil"* desang, u senga shu rasmni chizib beradi! 🐘🚀
*   **Hikoya yozish**: *"Menga ajdaho haqida ertak aytib ber"* desang, u yangi ertak to'qiydi.
*   **Musiqa bastalash**: Ular hatto qo'shiq ham yozishi mumkin.

Bu xuddi sening qo'lingda sehrli tayoqcha borga o'xshaydi. Sen faqat nima xohlashingni ayt, AI esa uni yaratadi!
`
  }
];

export const NAV_ITEMS = [
  { id: AppView.DASHBOARD, label: 'Bosh Sahifa', icon: Rocket },
  { id: AppView.LESSON, label: 'Darslar', icon: BookOpen },
  { id: AppView.CHAT, label: 'Robo-Do\'st', icon: Bot },
  { id: AppView.QUIZ, label: 'O\'yin-Sinov', icon: Gamepad2 },
];
