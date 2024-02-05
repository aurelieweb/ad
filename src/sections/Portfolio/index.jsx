import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Fonction utilitaire pour importer dynamiquement les images d'un dossier
const importAll = (context) => context.keys().map(context);

// Import des images
const kanapImages = importAll(require.context("../../assets/imgProjet/kanap", false, /\.(jpg)$/));
const demetrioImages = importAll(require.context("../../assets/imgProjet/demetrio", false, /\.(jpg)$/));
const kasaImages = importAll(require.context("../../assets/imgProjet/kasa", false, /\.(jpg)$/));
const ohmyfoodImages = importAll(require.context("../../assets/imgProjet/ohmyfood", false, /\.(jpg)$/));
const reserviaImages = importAll(require.context("../../assets/imgProjet/reservia", false, /\.(jpg)$/));

// Définition des projets
const projects = [
  {
    title: "Entreprise de Plomberie Chauffagiste",
    description:
      "Refonte totale du site d'un artisan plombier chauffagiste. Mise en avant de son éthique professionnelle, de ses services de qualité, et simplification du processus de contact pour ses clients.",
    coverImage: demetrioImages[0],
    images: demetrioImages,
  },
  {
    title: "Projet 2",
    description:
      "Refonte totale du site d'un artisan plombier chauffagiste. Mise en avant de son éthique professionnelle, de ses services de qualité, et simplification du processus de contact pour ses clients.",
      coverImage: kanapImages[0],
      images: kanapImages,
  },
  {
    title: "Projet 3",
    description:
      "Refonte totale du site d'un artisan plombier chauffagiste. Mise en avant de son éthique professionnelle, de ses services de qualité, et simplification du processus de contact pour ses clients.",
    coverImage: kasaImages[0],
    images: kasaImages,
  },
  {
    title: "Projet 4",
    description:
      "Refonte totale du site d'un artisan plombier chauffagiste. Mise en avant de son éthique professionnelle, de ses services de qualité, et simplification du processus de contact pour ses clients.",
    coverImage: ohmyfoodImages[0],
    images: ohmyfoodImages,
  },
  {
    title: "Projet 5",
    description:
      "Refonte totale du site d'un artisan plombier chauffagiste. Mise en avant de son éthique professionnelle, de ses services de qualité, et simplification du processus de contact pour ses clients.",
    coverImage: reserviaImages[0],
    images: reserviaImages,
  },
  // Ajoutez d'autres projets au besoin
];

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
      <p className="section-text">
        Découvrez quelques-uns de nos projets récents, mettant en avant notre
        créativité et notre expertise.
      </p>
      <div className="container__projets">
    
  {projects.map((projet, index) => (
    <div key={index} className="projet__card" onClick={() => handleClick(projet)}>
      <img src={projet.coverImage} alt={projet.title} />
      <h3 className="projet__card-title">{projet.title}</h3>
    </div>
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
                  <img className="project__details-img" src={image} alt={`Project ${index}`} />
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
