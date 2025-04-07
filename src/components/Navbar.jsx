// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importe o Link do react-router-dom
import '../assets/styles/Navbar.css';  // Arquivo CSS para estilos do navbar

const Navbar = () => {
  // Estado para controlar o menu (aberto ou fechado)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item"><a href="/meuportifolio/">Home</a></li>
          <li className="nav-item"><a href="/meuportifolio/portfolio">Portfólio</a></li>
          <li className="nav-item"><a href="/meuportifolio/contact">Contato</a></li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
