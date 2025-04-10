import React from 'react';
import { Link } from 'react-router-dom';

const frameworks = ['react', 'redux', 'nodejs', 'express', 'nextjs'];

const Frameworks = () => {
  return (
    <div className="container mt-4">
      <h2>🚀 Learn a Framework</h2>
      <ul className="list-group mt-3">
        {frameworks.map((fw) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={fw}>
            <Link to={`/frameworks/${fw}`} className="text-decoration-none text-primary text-capitalize">
              {fw}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Frameworks;
