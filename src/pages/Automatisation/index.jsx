import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Banner from "../../components/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faWandMagicSparkles,
  faTriangleExclamation,
  faEye,
  faRepeat,
  faSitemap,
  faChartSimple,
  faGears,
  faInbox,
  faDatabase,
  faLink,
  faChartLine,
  faRobot,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import imgPortrait from '../../assets/imgPortrait.png';

const painPoints = [
  {
    icon: faClock,
    title: "Tâches répétitives",
    text: "Des heures perdues chaque semaine sur des tâches manuelles.",
  },
  {
    icon: faWandMagicSparkles,
    title: "Outils dispersés",
    text: "Des informations éparpillées et des outils qui ne communiquent pas.",
  },
  {
    icon: faTriangleExclamation,
    title: "Erreurs & oublis",
    text: "Ressaisies, oublis, pertes de données : des erreurs qui coûtent cher.",
  },
  {
    icon: faEye,
    title: "Manque de visibilité",
    text: "Pas de vue d’ensemble pour piloter et prendre les bonnes décisions.",
  },
];

const benefits = [
  {
    icon: faClock,
    title: "Gain de temps",
    text: "Jusqu’à 10h par semaine récupérées sur les tâches à faible valeur ajoutée.",
  },
  {
    icon: faRepeat,
    title: "Moins d’erreurs",
    text: "Données centralisées et mises à jour automatiquement.",
  },
  {
    icon: faSitemap,
    title: "Processus fluides",
    text: "Les bonnes informations arrivent au bon endroit, au bon moment.",
  },
  {
    icon: faChartSimple,
    title: "Meilleure visibilité",
    text: "Des tableaux de bord clairs pour piloter votre activité en temps réel.",
  },
];

const solutions = [
  {
    icon: faGears,
    title: "Automatisation des tâches",
    text: "Workflows sur mesure pour automatiser vos process et enchaînements.",
  },
  {
    icon: faInbox,
    title: "Formulaires intelligents",
    text: "Collecte d’informations structurée et envoi automatique vers les bons outils.",
  },
  {
    icon: faDatabase,
    title: "CRM & suivi client",
    text: "Centralisation des contacts, suivi des échanges et opportunités.",
  },
  {
    icon: faLink,
    title: "Intégrations & connexions",
    text: "Connexion de vos outils : Make, Notion, Airtable, Google Workspace, etc.",
  },
  {
    icon: faChartLine,
    title: "Tableaux de bord & reporting",
    text: "Indicateurs clés, suivi d’activité et rapports automatisés.",
  },
  {
    icon: faRobot,
    title: "IA & optimisations",
    text: "Utilisation de l’IA pour aller plus vite et mieux analyser vos données.",
  },
];

function Automatisation() {
const pageTitle = "STRUCTURATION & AUTOMATISATION";
  const bannerText = "Structuration des process, connexion des outils et automatisation pour fluidifier l’activité, centraliser les données et gagner en efficacité. Je conçois des systèmes digitaux sur mesure : site web connecté, CRM, automatisations Make, intégrations IA et centralisation des données.";
  const bannerImg = require('../../assets/imgBanner3.png');
  const bannerClass = "banner banner-presentation";
  const bannerImgClass = "banner__img-presentation";

  const buttons = [
   {text: 'Optimiser mon organisation', link: '/prestations' },
  { text: 'Voir comment ça fonctionne', link: '/prestations' },
];

  return (
    <div className='main'>
      <Banner
        pageTitle={pageTitle}
        bannerClass={bannerClass}
        bannerImg={bannerImg}
        bannerText={bannerText}
        bannerImgClass={bannerImgClass}
        buttons={buttons}
      />

      <section className="automation-card">
        <h2>Les défis que vous rencontrez peut-être</h2>

        <div className="automation-grid automation-grid--4">
          {painPoints.map((item, index) => (
            <div className="automation-item" key={index}>
              <FontAwesomeIcon icon={item.icon} className="automation-icon" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="automation-card">
        <h2>Ce que l’automatisation change concrètement</h2>

        <div className="automation-grid automation-grid--4">
          {benefits.map((item, index) => (
            <div className="automation-item" key={index}>
              <FontAwesomeIcon icon={item.icon} className="automation-icon" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="automation-card">
        <h2>Les solutions que je mets en place</h2>

        <div className="automation-grid automation-grid--2">
          {solutions.map((item, index) => (
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

      <section className="automation-card automation-case">
        <h2>Exemple d’accompagnement</h2>

        <div className="automation-case__content">
          <div className="automation-case__visual">
            <img
              src={require("../../assets/automation-case.jpg")}
              alt="Exemple de tableau de bord automatisé"
              loading="lazy"
            />
          </div>

          <div>
            <h3>Automatisation du suivi client pour un cabinet de conseil</h3>
            <p>
              Mise en place d’un CRM connecté au site web, automatisation des
              emails de suivi, génération de propositions et tableau de bord
              d’activité.
            </p>
            <p>
              Résultat : 6h gagnées par semaine et un processus 100% tracé.
            </p>

            <Link to="/realisations" className="automation-link">
              Voir le projet <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>

{/*CTA*/}
      <section className="home__cta-final">
  <div className="cta-final__wrapper">
    <h2>Prêt(e) à gagner du temps et à fluidifier votre activité ?</h2>
    <p>Echangeons sur vos besoins et voyons comment je peux vous aider.</p>
    <Link to="/Calendly">
      <Button className="button" text="Planifier un appel gratuit" />
    </Link>
  </div>
</section>
    </div>
  );
}

export default Automatisation;