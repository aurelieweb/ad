import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Banner from "../../components/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInbox,
  faDatabase,
  faLink,
  faShieldHalved,
  faCalendarCheck,
  faCreditCard,
  faEnvelope,
  faChartSimple,
  faArrowRight,
  faMagnifyingGlassChart,
  faPenRuler,
  faPlug,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";

const differences = [
  {
    icon: faInbox,
    title: "Collecte automatique",
    text: "Les demandes et informations arrivent directement dans vos outils.",
  },
  {
    icon: faDatabase,
    title: "Centralisation",
    text: "Toutes les données clients sont regroupées au même endroit.",
  },
  {
    icon: faLink,
    title: "Automatisation",
    text: "Suivis, confirmations, relances : automatisés et sans effort.",
  },
  {
    icon: faShieldHalved,
    title: "Meilleure expérience",
    text: "Vos clients trouvent facilement, réservent, achètent à leur rythme.",
  },
];

const features = [
  {
    icon: faInbox,
    title: "Formulaires connectés",
    text: "Données envoyées automatiquement vers votre CRM.",
  },
  {
    icon: faCalendarCheck,
    title: "Prise de rendez-vous",
    text: "Agenda en ligne synchronisé et rappels automatiques.",
  },
  {
    icon: faShieldHalved,
    title: "Espace client",
    text: "Accès sécurisé aux documents, factures et suivis.",
  },
  {
    icon: faCreditCard,
    title: "Paiement en ligne",
    text: "Intégration de solutions de paiement sécurisées.",
  },
  {
    icon: faEnvelope,
    title: "Notifications & emails",
    text: "Emails automatiques pour confirmations, relances et suivis.",
  },
  {
    icon: faChartSimple,
    title: "Tableaux de bord",
    text: "Suivi des demandes, indicateurs et activité en temps réel.",
  },
];

const projects = [
  {
    image: require("../../assets/img_coaching_creation_site_web.jpg"),
    title: "Site pour architecte",
    text: "Formulaire projet, CRM, espace client et suivi de chantier.",
  },
  {
    image: require("../../assets/img_coaching_creation_site_web.jpg"),
    title: "Site pour coach",
    text: "Réservation en ligne, paiement et espace membre.",
  },
  {
    image: require("../../assets/ImgBanner_agence_digitale.jpg"),
    title: "Site pour cabinet",
    text: "Demandes de contact, CRM, automatisation des relances.",
  },
];

const method = [
  {
    icon: faMagnifyingGlassChart,
    title: "Comprendre",
    text: "Analyse de vos besoins, de votre activité et de vos objectifs.",
  },
  {
    icon: faPenRuler,
    title: "Concevoir",
    text: "Conception d’un site sur mesure et des connexions nécessaires.",
  },
  {
    icon: faPlug,
    title: "Connecter",
    text: "Intégration avec vos outils et automatisation des processus.",
  },
  {
    icon: faArrowTrendUp,
    title: "Optimiser",
    text: "Tests, ajustements et accompagnement pour aller plus loin.",
  },
];

function Website() {
  const pageTitle = "SITES WEB CONNECTÉS À VOS OUTILS MÉTIER";
  const bannerText =
    "Je conçois des sites WordPress sur mesure, connectés à vos outils et pensés pour automatiser, centraliser et offrir une expérience fluide à vos clients.";
  const bannerImg = require("../../assets/imgBanner3.png");
  const bannerClass = "banner banner-presentation";
  const bannerImgClass = "banner__img-presentation";

  const buttons = [
    { text: "Créer un site connecté", link: "/Calendly" },
    { text: "Me contacter", link: "/Contact" },
  ];

  return (
    <div className="main">
      <Banner
        pageTitle={pageTitle}
        bannerClass={bannerClass}
        bannerImg={bannerImg}
        bannerText={bannerText}
        bannerImgClass={bannerImgClass}
        buttons={buttons}
      />

      <section className="automation-card">
        <h2>Pourquoi un site connecté fait la différence ?</h2>

        <div className="automation-grid automation-grid--4">
          {differences.map((item, index) => (
            <div className="automation-item" key={index}>
              <FontAwesomeIcon icon={item.icon} className="automation-icon" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="automation-card">
        <h2>Fonctionnalités possibles</h2>

        <div className="automation-grid automation-grid--2">
          {features.map((item, index) => (
            <div className="automation-solution" key={index}>
              <FontAwesomeIcon icon={item.icon} className="automation-icon" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="automation-card">
        <h2>Exemples de réalisations</h2>

        <div className="automation-grid automation-grid--3">
          {projects.map((project, index) => (
            <div className="site-project-card" key={index}>
              <img src={project.image} alt={project.title} loading="lazy" />
              <h3>{project.title}</h3>
              <p>{project.text}</p>

              <Link to="/realisations" className="automation-link">
                Voir le projet <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="automation-card">
        <h2>Ma méthode</h2>

        <div className="automation-grid automation-grid--4">
          {method.map((item, index) => (
            <div className="automation-item" key={index}>
              <span className="method-number">{index + 1}</span>
              <FontAwesomeIcon icon={item.icon} className="automation-icon" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home__cta-final">
        <div className="cta-final__wrapper">
          <h2>Un site web qui vous simplifie la vie, ça vous tente ?</h2>
          <p>
            Parlons de votre projet et créons ensemble un outil qui fait la
            différence.
          </p>

          <Link to="/Calendly">
            <Button className="button" text="Planifier un appel gratuit" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Website;