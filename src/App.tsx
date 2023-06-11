import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Welcome from './pages/Welcome';
import RegisterPage from './pages/RegisterPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};

export default App;


