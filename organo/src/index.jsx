import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Em produção, não faz nada, mas durante o desenvolvimento, ajuda na identificação de erros
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);
