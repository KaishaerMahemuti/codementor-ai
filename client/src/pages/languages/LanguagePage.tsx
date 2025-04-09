import React from 'react';
import { useParams } from 'react-router-dom';

const LanguagePage: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();

  const lessons: Record<string, string[]> = {
    javascript: [
      'Variables and Data Types',
      'Functions and Scope',
      'Loops and Conditionals',
      'Arrays and Objects',
      'DOM Manipulation',
    ],
    python: [
      'Variables & Input',
      'Data Types',
      'Loops and Conditionals',
      'Functions and Modules',
      'File I/O',
    ],
    cpp: [
      'Variables and Data Types',
      'Input/Output',
      'Control Flow',
      'Functions and Pointers',
      'OOP in C++',
    ],
  };

  const languageLessons = lessons[lang ?? ''];

  return (
    <div>
      <h2>📘 Learn {lang?.toUpperCase()}</h2>

      {languageLessons ? (
        <ul className="list-group mt-4">
          {languageLessons.map((lesson, idx) => (
            <li className="list-group-item" key={idx}>
              {idx + 1}. {lesson}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-danger mt-4">⚠️ No lessons found for this language.</p>
      )}
    </div>
  );
};

export default LanguagePage;
