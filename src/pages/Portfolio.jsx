import React, { useState, useEffect } from 'react';
import '../assets/styles/Portfolio.css'; // Estilos do portfólio

function Portfolio() {
  const [projects, setProjects] = useState([]);

  // Carregar os dados do JSON
  useEffect(() => {
    fetch('/portfolioData.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Erro ao carregar os dados do portfólio:', error));
  }, []);

  return (
    <div className="portfolio-container">
      <h1>Meu Portfólio</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.name} className="project-image" />
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                Ver no GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
