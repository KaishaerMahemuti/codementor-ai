import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-light border-end vh-100 p-3" style={{ width: "240px" }}>
      <h5 className="mb-4">CodeMentor</h5>
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink className="nav-link" to="/" end>
            🏠 Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/challenges">
            🧪 Practice Challenges
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/codelab">
            🧠 CodeLab
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/mentor">
            🤖 AI Mentor
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
