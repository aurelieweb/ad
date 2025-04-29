import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projectData from '../../data/projetData.json'; // Importation des données des projets depuis le fichier JSON

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleClick = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <section id="nosProjets">
      <h2>Portfolio</h2>
     
      <div className="container__projets">
        {projectData.map((project, index) => (
          <a
          key={index}
          href={project.url || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={`projet__card ${project.url ? "with-url" : ""}`}
          onClick={(e) => {
            if (!project.url) {
              e.preventDefault();
              handleClick(project);
            }
          }}
        >
          <img src={project.coverImage} alt={project.title} loading="lazy"/>
          <h3 className="projet__card-title">{project.title}</h3>
          {project.url && <button className="view-online-btn">Voir en ligne</button>}
        </a>
        ))}
      </div>

      {selectedProject && (
        <div className="project__details-modal">
          <div className="project__details-content">
            <button className="close-btn" onClick={handleClose}>
              x
            </button>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <Slider {...settings}>
              {selectedProject.images.map((image, index) => (
                <div key={index}>
                  <img className="project__details-img" src={image} alt={`Project ${index}`} loading="lazy" /> {/* Utilisation des chemins d'images depuis les données du projet */}
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
