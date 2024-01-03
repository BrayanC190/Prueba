// Inicio.tsx
import "./estilo.css";
import React from 'react';
import { Link } from 'react-router-dom';

const Inicio: React.FC = () => {
  return (
    <div>
      <h1>¿En que dipositivo estas?</h1>
      <div>
        <Link to="/computadora">
          <button>Computadora</button>
        </Link>
        <Link to="/celular">
          <button>Celular</button>
        </Link>
      </div>
    </div>
  );
};

export default Inicio;
