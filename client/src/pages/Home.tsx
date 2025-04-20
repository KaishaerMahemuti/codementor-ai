// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>🚀 Welcome to CodeMentor AI</h2>
      <p>Select a language to begin learning:</p>
      <ul>
        <li><Link to="/languages/javascript">Learn JavaScript</Link></li>
        <li><Link to="/languages/python">Learn Python</Link></li>
        <li><Link to="/languages/typescript">Learn TypeScript</Link></li>
      </ul>
    </div>
  );
};

export default Home;
