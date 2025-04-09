import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import Home from './pages/Home';
import Frameworks from './pages/Frameworks';
import Challenges from './pages/Challenges';
import CodeLab from './pages/CodeLab';
import Mentor from './pages/Mentor';
import Languages from './pages/Languages';
import TutorPage from './pages/languages/TutorPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/languages/:lang" element={<TutorPage />} />
          <Route path="/frameworks" element={<Frameworks />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/codelab" element={<CodeLab />} />
          <Route path="/mentor" element={<Mentor />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
