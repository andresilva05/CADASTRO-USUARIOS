import React from 'react';
import ReactDOM from 'react-dom/client'; // Atualizado para 'react-dom/client'
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root')); // Cria a raiz do aplicativo
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
