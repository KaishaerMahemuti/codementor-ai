import { Link } from 'react-router-dom';

const Languages: React.FC = () => {
  return (
    <div>
      <h2>🧠 Choose a Language</h2>
      <ul className="list-group mt-4">
        <li className="list-group-item">
          <Link to="/languages/javascript">JavaScript</Link>
        </li>
        <li className="list-group-item">
          <Link to="/languages/python">Python</Link>
        </li>
        <li className="list-group-item">
          <Link to="/languages/cpp">C++</Link>
        </li>
        <li className="list-group-item">
          <Link to="/languages/go">Go (no content yet)</Link>
        </li>
      </ul>
    </div>
  );
};

export default Languages;
