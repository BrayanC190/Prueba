// Routes.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Computadora from './Computadora';
import Celular from './Celular';

const RoutesComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/computadora" element={<Computadora />} />
        <Route path="/celular" element={<Celular />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
