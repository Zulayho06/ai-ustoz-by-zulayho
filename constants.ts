import { Lesson, AppView, QuizQuestion } from './types';
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

// Local Data for Quiz and Explanations
export const LOCAL_EXPLANATIONS: Record<string, string> = {
  "Sehrli Kompyuter (AI Nima?)": "Kompyuter xuddi sehrgar kabi! U gapirishni, ko'rishni va sening do'sting bo'lishni o'rganadi. Bu sehr emas, bu ilm! ✨",
  "Robotlar Maktabi (Machine Learning)": "Robotlar ham senga o'xshab maktabga borishadi. Faqat ular kitob o'qimaydi, balki minglab rasmlarni ko'rib o'rganishadi! 📚🤖",
  "Super Miya (Neyron Tarmoqlar)": "Kompyuterning ichida milliardlab kichkina 'chiroqchalar' bor. Ular bir-biri bilan gaplashib, qiyin masalalarni yechishadi! 💡🧠",
  "Rasmchi Robot (Generativ AI)": "Bu robotlar - haqiqiy rassom! Sen ularga nima chizishni aytsang, ular xuddi shu narsani chizib berishadi. 🎨🖌️",
};

export const LOCAL_QUIZ_DATA: Record<string, QuizQuestion[]> = {
  "Sehrli Kompyuter (AI Nima?)": [
    {
      question: "AI (Sun'iy Intellekt) bu nima?",
      options: ["Sehrli tayoqcha 🪄", "Aqlli kompyuter dasturi 💻", "Mazali muzqaymoq 🍦", "Uchadigan gilam 🧞‍♂️"],
      correctAnswer: 1,
      explanation: "AI - bu kompyuterga o'ylashni o'rgatadigan maxsus dastur."
    },
    {
      question: "Tesla mashinasi nima qila oladi?",
      options: ["Ucha oladi ✈️", "Haydovchisiz yura oladi 🚗", "Ovqat pishiradi 🍳", "Suzishni biladi 🏊"],
      correctAnswer: 1,
      explanation: "Tesla AI yordamida yo'lni ko'radi va o'zi haydovchisiz yuradi."
    },
    {
      question: "Siri va Google kimlar?",
      options: ["Mening sinfdoshlarim 🎒", "Ovozli yordamchilar 🗣️", "Multfilm qahramonlari 📺", "Kosmonavtlar 👨‍🚀"],
      correctAnswer: 1,
      explanation: "Ular sening savollaringga javob beradigan aqlli yordamchilardir."
    }
  ],
  "Robotlar Maktabi (Machine Learning)": [
    {
      question: "Robotlar qanday o'rganadi?",
      options: ["Kitob o'qiydi 📖", "Ko'p misollar ko'radi 🖼️", "Uxlaydi 😴", "Ovqat yeydi 🍔"],
      correctAnswer: 1,
      explanation: "Biz ularga ko'p rasm ko'rsatamiz, ular esa farqini topib o'rganishadi."
    },
    {
      question: "Biz darsda robotga nimalarni ajratishni o'rgatdik?",
      options: ["Mushuk va Kuchuk 🐱🐶", "Olma va Anor 🍎", "Tosh va Qaychi ✂️", "Quyosh va Oy ☀️"],
      correctAnswer: 0,
      explanation: "Darsda biz unga 1000 ta mushuk va kuchuk rasmini ko'rsatdik."
    },
    {
      question: "Robot yangi rasmni ko'rsa nima qiladi?",
      options: ["Yig'laydi 😭", "Taniydi va aytadi 🗣️", "Qochib ketadi 🏃", "Hech narsa qilmaydi 😐"],
      correctAnswer: 1,
      explanation: "O'rganganidan keyin u rasmda nima borligini aniq topa oladi."
    }
  ],
  "Super Miya (Neyron Tarmoqlar)": [
    {
      question: "Neyronlar nima?",
      options: ["Miya hujayralari 🧠", "Kichkina robotlar 🤖", "Kompyuter simlari 🔌", "Shirinliklar 🍬"],
      correctAnswer: 0,
      explanation: "Neyronlar - bu miyamizdagi ma'lumot tashuvchi kichik hujayralar."
    },
    {
      question: "Kompyuter 'miyasi' qanday ishlaydi?",
      options: ["Benzin bilan ⛽", "Qavatma-qavat o'ylash orqali 🏢", "Sehr bilan ✨", "Suv bilan 💧"],
      correctAnswer: 1,
      explanation: "U xuddi ko'p qavatli bino kabi ma'lumotni qavatma-qavat tekshiradi."
    },
    {
      question: "1-qavat (kirish qismi) nima qiladi?",
      options: ["Javob beradi", "Uxlaydi", "Rasmni ko'radi 👀", "Raqsga tushadi 💃"],
      correctAnswer: 2,
      explanation: "Birinchi qavat faqat rasmni yoki ma'lumotni qabul qiladi."
    }
  ],
  "Rasmchi Robot (Generativ AI)": [
    {
      question: "Generativ AI nima qiladi?",
      options: ["Faqat hisoblaydi 🧮", "Yangi narsa yaratadi 🎨", "O'yin o'ynaydi 🎮", "Tozalik qiladi 🧹"],
      correctAnswer: 1,
      explanation: "Generativ AI yangi rasmlar, hikoyalar va musiqalar yaratadi."
    },
    {
      question: "Agar 'Pushti fil' desang, u nima qiladi?",
      options: ["Kuladi 😂", "Pushti fil rasmini chizadi 🐘", "Hech narsa 🤷", "Seni urshadi 😠"],
      correctAnswer: 1,
      explanation: "U sening so'zlaringni tushunib, shunga mos rasm chizib beradi."
    },
    {
      question: "AI nima yoza oladi?",
      options: ["Faqat raqamlar", "Ertak va hikoyalar 📚", "Faqat ismlar", "Hech narsa"],
      correctAnswer: 1,
      explanation: "Ular ajoyib ertaklar va she'rlar yoza olishadi."
    }
  ],
  "Robotlar": [
     {
      question: "Robotlarning yuragi bormi?",
      options: ["Ha, albatta ❤️", "Yo'q, ularda protsessor bor 💻", "Ularning qorni bor", "Bilmayman"],
      correctAnswer: 1,
      explanation: "Robotlarda yurak o'rniga kompyuter miyasi va batareya bor."
    },
    {
      question: "Eng aqlli robot nima qila oladi?",
      options: ["O'rganadi 🧠", "Faqat yuradi", "Faqat gapiradi", "Uxlaydi"],
      correctAnswer: 0,
      explanation: "Eng aqlli robotlar xatolaridan o'rganib, yanada aqlli bo'lishadi."
    },
    {
      question: "Robotlar charchaydimi?",
      options: ["Ha, juda", "Yo'q, faqat quvvati tugaydi 🔋", "Kechasi uxlaydi", "Tushlikka chiqadi"],
      correctAnswer: 1,
      explanation: "Robotlar charchamaydi, lekin batareyasi tugasa o'chib qoladi."
    }
  ],
  "Kelajak": [
      {
      question: "Kelajakda mashinalar qanday bo'ladi?",
      options: ["Uchadigan 🛸", "Ot qo'shilgan 🐎", "Yurmaydigan", "Ko'rinmas"],
      correctAnswer: 0,
      explanation: "Kelajakda uchar mashinalar va haydovchisiz taksilar bo'lishi mumkin."
    },
    {
      question: "Uyimiz aqlli bo'lsa nima qiladi?",
      options: ["Biz bilan gaplashadi 🏠", "Qochib ketadi", "Raqsga tushadi", "Yig'laydi"],
      correctAnswer: 0,
      explanation: "Aqlli uylar chiroqni o'zi yoqadi, eshikni ochadi va bizga yordam beradi."
    },
    {
      question: "Kelajakni kim yaratadi?",
      options: ["Faqat kattalar", "Biz - bolalar! 👧👦", "O'zga sayyoraliklar", "Sehrgarlar"],
      correctAnswer: 1,
      explanation: "Kelajakni bugungi bilimli bolalar, ya'ni sizlar yaratasiz!"
    }
  ]
};