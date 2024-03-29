import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './Inicio';
import Computadora from './Computadora';
import Celular from './Celular';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/computadora" element={<Computadora />} />
        <Route path="/celular" element={<Celular />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
