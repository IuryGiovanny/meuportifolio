import React, { useState, useEffect } from 'react';
import '../assets/styles/Portfolio.css'; // Estilos do portfólio

function Portfolio() {
  const [projects, setProjects] = useState([]);

  // Carregar os dados do JSON
  useEffect(() => {
    fetch('/meuportifolio/portfolioData.json')
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
            {project.image ? (
                <img src={`${process.env.PUBLIC_URL}${project.image}`} alt={project.name} className="project-image" />) 
              : (<span> </span>)
            }
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <div className="project-links">
            {project.github  ? (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
              {project.tipo =='github' ? (
                  <span>Ver no GitHub</span>
                ) : (
                  <span>Ver no figma</span>
                )}
               
              </a>
            ): (<span> </span>)
            }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
