import React from 'react';
import { useParams } from 'react-router-dom';
import ChatUI from '../../components/ChatUI';

const TutorPage = () => {
  const { lang } = useParams<{ lang: string }>();

  return (
    <div>
      <h2>👨‍🏫 Learning {lang?.toUpperCase()} with AI Mentor</h2>
      <ChatUI language={lang ?? ''} />
    </div>
  );
};

export default TutorPage;
