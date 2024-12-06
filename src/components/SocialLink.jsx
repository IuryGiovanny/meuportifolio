// src/components/SocialLinks.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/SocialLinks.css';  // Adicione o arquivo CSS para o estilo


const SocialLinks = () => {
  return (
    <div className="social-links">
      <a className="botao__inst" href="https://www.instagram.com/?next=%2F" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className="icon" icon={faInstagram} />
        Instagram
      </a>
      
      <a className="botao__face" href="https://www.facebook.com/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className="icon" icon={faFacebook} />
        Facebook
      </a>
    </div>
  );
};

export default SocialLinks;
