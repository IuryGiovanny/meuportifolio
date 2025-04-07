// src/Footer.jsx
import React from 'react';
import '../assets/styles/Footer.css'; // Importa o arquivo de estilos para o Footer

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {year} Meu Portfolio. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
