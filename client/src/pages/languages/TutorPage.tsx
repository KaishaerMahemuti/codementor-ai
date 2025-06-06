import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ChatUI from '../../components/ChatUI';
import LessonTracker from '../../components/LessonTracker';
import lessonData from '../../data/lessons';
import MiniCodeSandbox from '../../components/MiniCodeSandbox';

const TutorPage = () => {
  const { lang } = useParams<{ lang: string }>();
  const language = lang?.toLowerCase() ?? '';
  const lessons = lessonData[language] || ['Introduction'];

  const [currentLesson, setCurrentLesson] = useState(0);

  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      <LessonTracker
        lessons={lessons}
        currentLesson={currentLesson}
        onSelectLesson={(i) => setCurrentLesson(i)}
      />

      <div className="flex-grow-1 p-4">
        <h2>👨‍🏫 Learning {language.toUpperCase()}</h2>
        <ChatUI language={language} lessonId={currentLesson} />
        <MiniCodeSandbox language={language} lessonId={currentLesson} />
      </div>
    </div>
  );
};

export default TutorPage;
