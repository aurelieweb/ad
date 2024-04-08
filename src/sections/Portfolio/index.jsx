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
const immoImages = importAll(require.context("../../assets/imgProjet/immo", false, /\.(png)$/));
// Définition des projets
const projects = [
  {
    title: "Refonte totale du site web d'une entreprise de Plomberie Chauffagiste",
    description:
      "Mise en place d'un module personnalisé qui permet à l'utilisateur d'effectuer des demandes d'intervention ou de devis en ligne. Notre artisan reçoit une fiche d'intervention ou de demande de devis personnalisée par mail. Ce process simplifie la gestion commerciale de notre client, grâce au formatage des demandes clients",
    coverImage: demetrioImages[0],
    images: demetrioImages,
  },
  {
    title: "Création d'un site de promotion immobilière",
    description:
      "Création d'un site pour la mise en avant d'un programme neuf",
    coverImage: immoImages[0],
    images: immoImages,
  },
  {
    title: "Création d'une boutique en ligne",
    description:
      "Conception et création d'une boutique en ligne pour une entreprise spécialisée dans la vente de canapés. Mise en place d'un panier et d'un système de commande",
      coverImage: kanapImages[0],
      images: kanapImages,
  },
  {
    title: "Création d'une plateforme de location de vacances",
    description:
      "Développement d'une plateforme de location de vacances offrant une expérience conviviale et intuitive.",
    coverImage: kasaImages[0],
    images: kasaImages,
  },
  {
    title: "Création d'un site de réservation de menu en ligne",
    description:
    "Conception d'un site de réservation de menus en ligne, offrant aux utilisateurs la possibilité de prévoir et réserver leurs repas avec facilité.",
    coverImage: ohmyfoodImages[0],
    images: ohmyfoodImages,
  },
  {
    title: "Création d'un site de réservation de location de vacances et d'activités",
    description:
      "Création d'un site de réservation complet permettant aux utilisateurs de réserver des locations de vacances et des activités en toute simplicité.",
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
        Explorer notre portfolio pour découvrir comment nous donnons vie à vos idées, créant ainsi des expériences uniques. Chaque réalisation est le fruit d'une collaboration intéractive et de notre engagement envers la satisfaction de nos clients.
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
