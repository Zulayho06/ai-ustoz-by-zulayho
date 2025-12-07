export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string; // Markdown content
  difficulty: 'Boshlang\'ich' | 'O\'rta' | 'Yuqori';
  topics: string[];
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
  explanation: string;
}

export interface QuizState {
  questions: QuizQuestion[];
  currentQuestionIndex: number;
  score: number;
  isFinished: boolean;
  selectedAnswer: number | null;
  showExplanation: boolean;
}

export enum AppView {
  DASHBOARD = 'DASHBOARD',
  LESSON = 'LESSON',
  CHAT = 'CHAT',
  QUIZ = 'QUIZ'
}
