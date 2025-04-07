// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
        <Router >
          <Routes>
            <Route path="/meuportifolio/" element={<Home />} />
            <Route path="/meuportifolio/portfolio" element={<Portfolio />} />
            <Route path="/meuportifolio/contact" element={<Contact />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      <Footer />
    </div>
  );
};

export default App;