import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import LoginPage from './app/pages/LoginPage';
import HomePage from './app/pages/HomePage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;