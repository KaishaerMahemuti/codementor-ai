import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ChatUI from '../../components/ChatUI';
import LessonTracker from '../../components/LessonTracker';
import frameworkLessons from '../../data/frameworkLessons';

const FrameworkTutorPage = () => {
  const { framework } = useParams<{ framework: string }>();
  const fw = framework?.toLowerCase() ?? '';
  const lessons = frameworkLessons[fw] || ['Introduction'];

  const [currentLesson, setCurrentLesson] = useState(0);

  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      <LessonTracker
        lessons={lessons}
        currentLesson={currentLesson}
        onSelectLesson={(i) => setCurrentLesson(i)}
      />
      <div className="flex-grow-1 p-4">
        <h2>📚 Learning {fw.toUpperCase()}</h2>
        <ChatUI language={fw} lessonId={currentLesson} />
      </div>
    </div>
  );
};

export default FrameworkTutorPage;
