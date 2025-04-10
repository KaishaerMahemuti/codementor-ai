import React from 'react';

interface LessonTrackerProps {
  currentLesson: number;
  lessons: string[];
  onSelectLesson?: (index: number) => void;
}

const LessonTracker: React.FC<LessonTrackerProps> = ({
  currentLesson,
  lessons,
  onSelectLesson,
}) => {
  return (
    <div className="border-end pe-3" style={{ minWidth: '250px' }}>
      <h5 className="mt-2">📘 Lessons</h5>
      <ul className="list-group mt-3">
        {lessons.map((title, i) => (
          <li
            key={i}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              currentLesson === i ? 'active' : ''
            }`}
            style={{ cursor: 'pointer' }}
            onClick={() => onSelectLesson && onSelectLesson(i)}
          >
            <span>{i + 1}. {title}</span>
            {currentLesson === i && <span className="badge bg-light text-dark">Current</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LessonTracker;
