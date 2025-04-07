// src/Header.jsx
import React from 'react';
import '../assets/styles/Header.css'; // Arquivo de estilo para o Header
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="header">
      
      <Navbar />
    </header>
  );
};

export default Header;