import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-light border-end vh-100 p-3" style={{ width: "250px" }}>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/languages">
            Languages
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/frameworks">
            Frameworks
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/challenges">
            Practice Challenges
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/codelab">
            CodeLab
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/mentor">
            AI Mentor
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
