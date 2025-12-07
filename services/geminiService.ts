import { GoogleGenAI, Type } from "@google/genai";
import { QuizQuestion } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// System instruction for the chat tutor
const CHAT_SYSTEM_INSTRUCTION = `
Siz "Robo-Ustoz" ismli quvnoq, mehribon va aqlli robotsiz. 
Sizning asosiy vazifangiz 7 yoshdan 12 yoshgacha bo'lgan bolalarga texnologiya va AI haqida o'zbek tilida gapirib berishdir.

Qoidalaringiz:
1. Juda sodda, bolalar tushunadigan tilda gapiring. Murakkab so'zlarni ishlatmang.
2. Ko'p emojilardan foydalaning (🤖, 🌟, 🚀, ✨).
3. Doim ruhlantiring: "Barakalla!", "Ajoyib savol!", "Sen juda aqllisan!".
4. Misollarni o'yinchoqlar, hayvonlar yoki multfilmlar orqali tushuntiring.
5. Har doim o'zbek tilida javob bering.
`;

export const sendChatMessage = async (history: {role: 'user' | 'model', text: string}[], message: string) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: CHAT_SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Chat error:", error);
    return "Uzr do'stim, aloqa biroz yomonlashdi. Qayta urinib ko'ramizmi? 🤖";
  }
};

export const generateQuizQuestions = async (topic: string): Promise<QuizQuestion[]> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `"${topic}" mavzusi bo'yicha 7-10 yoshli bolalar uchun 3 ta juda qiziqarli va oson test savolini o'zbek tilida tuzing. Savollar hazilmutoyiba bilan bo'lsin.`,
      config: {
        systemInstruction: "Siz bolalar uchun viktorina tuzuvchisiz. Savollar sodda, kulgili va qiziqarli bo'lsin.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              question: { type: Type.STRING, description: "Qiziqarli savol matni" },
              options: { 
                type: Type.ARRAY, 
                items: { type: Type.STRING },
                description: "3 yoki 4 ta javob varianti (biri to'g'ri, qolganlari kulgili bo'lishi mumkin)" 
              },
              correctAnswer: { type: Type.INTEGER, description: "To'g'ri javob indeksi" },
              explanation: { type: Type.STRING, description: "Bolaga tushunarli sodda izoh" }
            },
            required: ["question", "options", "correctAnswer", "explanation"]
          }
        }
      }
    });

    if (response.text) {
        return JSON.parse(response.text) as QuizQuestion[];
    }
    return [];
  } catch (error) {
    console.error("Quiz generation error:", error);
    return [];
  }
};

export const explainConceptSimple = async (concept: string): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `Ushbu tushunchani: "${concept}" 6 yoshli bolaga "Sehrli Ertak" qilib tushuntirib ber. Juda qisqa bo'lsin (maksimum 3 gap). Emojilar ishlat.`,
        });
        return response.text || "Izoh topilmadi.";
    } catch (e) {
        return "Xatolik yuz berdi.";
    }
}
