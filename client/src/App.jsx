import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout'; // Or rename this to DashboardLayout for clarity
import Home from './pages/Home';
import Challenges from './pages/Challenges';
import CodeLab from './pages/CodeLab';
import Mentor from './pages/Mentor';
import Languages from './pages/Languages';
import TutorPage from './pages/languages/TutorPage';

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/languages/:lang" element={<TutorPage />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/codelab" element={<CodeLab />} />
          <Route path="/mentor" element={<Mentor />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
