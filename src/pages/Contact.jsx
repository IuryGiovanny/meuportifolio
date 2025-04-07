// src/components/Contato.jsx
import React, { useState } from 'react';
import '../assets/styles/Contato.css'; // Importando o arquivo de estilo

const Contact = () => {
  // Gerenciamento de estado para cada campo
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [error, setError] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário

    // Validação simples
    if (!nome || !email || !mensagem) {
      setError('Todos os campos devem ser preenchidos.');
      return;
    }

    setError('');
    alert(`Mensagem enviada!\nNome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`);

    // Limpar campos após o envio (opcional)
    setNome('');
    setEmail('');
    setMensagem('');
  };

  return (
    <div className="contato-container">
      <h2>Contato</h2>
      <form onSubmit={handleSubmit} className="form-contato">
        <div className="campo">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome"
          />
        </div>
        <div className="campo">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
          />
        </div>
        <div className="campo">
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            placeholder="Digite sua mensagem"
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="btn-enviar">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
