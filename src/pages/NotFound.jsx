import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/NotFound.css';

function NotFound() {
  return (
    <div className="container">
      <h1 className="heading">404 - Página não encontrada</h1>
      <p>Desculpe, a página que você está procurando não existe.</p>
      <Link to="/" className="link">Voltar para a página inicial</Link>
    </div>
  );
}


export default NotFound;
