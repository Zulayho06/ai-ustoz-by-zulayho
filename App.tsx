import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import LessonView from './components/LessonView';
import ChatInterface from './components/ChatInterface';
import QuizArea from './components/QuizArea';
import { AppView } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);
  const [selectedLessonId, setSelectedLessonId] = useState<string | undefined>(undefined);

  const handleViewChange = (view: AppView, lessonId?: string) => {
    setCurrentView(view);
    if (lessonId) {
        setSelectedLessonId(lessonId);
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case AppView.DASHBOARD:
        return <Dashboard onChangeView={handleViewChange} />;
      case AppView.LESSON:
        return <LessonView initialLessonId={selectedLessonId} />;
      case AppView.CHAT:
        return <ChatInterface />;
      case AppView.QUIZ:
        return <QuizArea />;
      default:
        return <Dashboard onChangeView={handleViewChange} />;
    }
  };

  return (
    <Layout currentView={currentView} onChangeView={handleViewChange}>
      {renderContent()}
    </Layout>
  );
};

export default App;
