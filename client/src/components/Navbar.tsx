import React from 'react';
import { maybeCoerceBoolean } from 'openai/core';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a className="navbar-brand" href="#">CodeMentor AI</a>
    </nav>
  );
};

export default Navbar;
