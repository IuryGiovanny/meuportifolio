// src/App.jsx
import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import "./App.css";

const App = () => {

  return (
    <Router >
      <RedirectToHome />
      <div>
        <Header />
            <Routes>
              <Route path="/meuportifolio/" element={<Home />} />
              <Route path="/meuportifolio/meusprojetos" element={<Portfolio />} />
              <Route path="/meuportifolio/contato" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const RedirectToHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar se o pathname é "/meuportifolio/" e se o hash está vazio
    const pathname = window.location.pathname;
    const hash = window.location.hash;

    // Redirecionar se estiver em https://iurygiovanny.github.io/meuportifolio/ (sem hash)
    if (pathname === '/meuportifolio/' && !hash) {
      navigate('/meuportifolio/');  // Mantém o hash após o redirecionamento, se necessário
    }
  }, [navigate]);

  return null; // Não renderiza nada
};


export default App;