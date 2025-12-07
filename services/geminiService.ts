import { QuizQuestion } from "../types";
import { LOCAL_QUIZ_DATA, LOCAL_EXPLANATIONS } from "../constants";

// LOCAL MOCK SERVICE
// Gemini API integratsiyasi olib tashlandi va lokal ma'lumotlar bilan almashtirildi.

// Simple local chat logic
export const sendChatMessage = async (history: {role: 'user' | 'model', text: string}[], message: string) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  const lowerMsg = message.toLowerCase();

  // Basic keyword matching
  if (lowerMsg.includes('salom') || lowerMsg.includes('qalaysan') || lowerMsg.includes('assalom')) {
      return "Salom do'stim! 🤖 Men juda yaxshiman. Sen tayyormisan? Bugun nima o'rganamiz?";
  }
  if (lowerMsg.includes('isming') || lowerMsg.includes('kim')) {
      return "Mening ismim Robo-Do'st! Men sening shaxsiy yordamchingman. 🚀";
  }
  if (lowerMsg.includes('ai') || lowerMsg.includes('sun\'iy')) {
      return "AI - bu kompyuterlarning o'ylash qobiliyati. Ular bizga yordam berish uchun yaratilgan! 🧠";
  }
  if (lowerMsg.includes('robot')) {
      return "Robotlar bizning do'stlarimiz. Ular og'ir ishlarni bajarishadi va hatto koinotga ham uchishadi! 🌌";
  }
  if (lowerMsg.includes('rahmat')) {
      return "Arzimaydi! Yana savollaring bormi? 😊";
  }
  if (lowerMsg.includes('ertak')) {
      return "Bir bor ekan, bir yo'q ekan... Katta bir shahar ichida kichkina aqlli robot yashar ekan. U hamma narsani bilishga qiziqar ekan! 📖";
  }

  // Random generic responses
  const randomResponses = [
      "Juda qiziq savol! 🌟 Bu haqda o'ylab ko'rish kerak.",
      "Barakalla! Sen juda aqlli ekansan. 👏",
      "Bu savolga javob berish uchun biroz o'ylayapman... 🤔 Ha, topdim! Bu texnologiya mo'jizasi.",
      "Ajoyib! Davom etamizmi? 🚀",
      "Menga yana biror narsa aytib ber! Men tinglayapman. 👂",
      "Sen kelajakda kim bo'lmoqchisan? Dasturchimi? 💻",
      "Bilim olish - bu super kuch! 💪"
  ];
  return randomResponses[Math.floor(Math.random() * randomResponses.length)];
};

export const generateQuizQuestions = async (topic: string): Promise<QuizQuestion[]> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Clean up topic string to match keys if necessary, but exact match is preferred from constants
  // Try to find exact match first
  if (LOCAL_QUIZ_DATA[topic]) {
      return LOCAL_QUIZ_DATA[topic];
  }
  
  // Check for partial matches
  const keys = Object.keys(LOCAL_QUIZ_DATA);
  for (const key of keys) {
      if (topic.includes(key) || key.includes(topic)) {
          return LOCAL_QUIZ_DATA[key];
      }
  }

  // Fallback to the first available topic if nothing matches (shouldn't happen with UI selection)
  return LOCAL_QUIZ_DATA["Sehrli Kompyuter (AI Nima?)"];
};

export const explainConceptSimple = async (concept: string): Promise<string> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    if (LOCAL_EXPLANATIONS[concept]) {
        return LOCAL_EXPLANATIONS[concept];
    }
    
    // Fallback logic
    const parts = concept.split('(');
    const mainKey = parts[0].trim();
    
    // Search in keys
    const keys = Object.keys(LOCAL_EXPLANATIONS);
    for (const key of keys) {
        if (key.includes(mainKey)) {
            return LOCAL_EXPLANATIONS[key];
        }
    }
    
    return "Bu juda qiziq mavzu! Uni o'rganish senga super kuch beradi! 🌟";
}