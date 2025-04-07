// src/App.jsx
import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
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

export default App;