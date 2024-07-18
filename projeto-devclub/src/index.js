import React from 'react';
import ReactDOM from 'react-dom/client'; // Atualizado para 'react-dom/client'
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Cria a raiz do aplicativo
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
