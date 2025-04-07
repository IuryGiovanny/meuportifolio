import React from 'react';
import '../assets/styles/Contato.css'; // Importando o arquivo de estilo

const Contact = () => {
  return (
    <div className="contato-container">
      <h2>Entre em Contato</h2>
      <p>Se você deseja entrar em contato, aqui estão minhas informações:</p>
      
      <div className="informacoes-contato">
        <div className="info-item">
          <h3>Email:</h3>
          <p>iurygiovannygallhardogc@gmail.com</p>
        </div>
        <div className="info-item">
          <h3>Telefone:</h3>
          <p>(84) 98127-8786</p>
        </div>

        <div className="info-item">
          <h3>Linkedin:</h3>
          <a href='https://www.linkedin.com/in/iury-giovanny-751588166a'>Iury Giovanny</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
