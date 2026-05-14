import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Gallery from '../../components/Gallery';
import Banner from '../../components/Banner';
import CardService from '../../components/CardService';
import Button from '../../components/Button';
import FreebiePopup from '../../components/FreebiePopup';
import Maintenance from '../../components/MaintenancePage';
import Toolbox from '../../components/ToolBox';
import IconCard from '../../components/IconCard'
import { faPlay, faBriefcase, faPenRuler, faBuilding  } from "@fortawesome/free-solid-svg-icons";
import imgBenefit from "../../assets/imgBenefice.jpg";
import imgPortrait from '../../assets/imgPortrait.png';
import ServiceDetail from "../../components/ServiceDetail";
import badgeMake from "../../assets/make-advanced.png"


const projetData = require('../../data/projetData.json');

//Détails des services
const servicesType = [
  {
    name: "Création de site",
    content: [
      "Site vitrine ou one-page",
      "Portfolio valorisant vos projets",
      "Pages de vente & tunnels personnalisés",
      "Intégration de vos outils métiers",
    ],
    img: require('../../assets/img_creation_site_web.jpg'),
  },
  {
    name: "Automatisation / Make / IA",
    content: [
      "Connexion de vos outils métier (CRM, agenda, base de données…)",
      "Automatisations Make, Tally, Airtable",
      "Centralisation et synchronisation des données",
    ],
    img: require('../../assets/img_automatisation_pme.jpg'),
  },
  {
    name: "Optimisation / évolution de site",
    content: [
      "Amélioration technique & performances",
      "Optimisation UX et conversion",
      "Connexion aux outils & automatisations",
    ],
    img: require('../../assets/img_coaching_creation_site_web.jpg'),
  },
];

//Détails des applications
const applicationType = [
  {
    name: "Gestion des demandes",
    content: [
      "Formulaire connecté, suivi centralisé et automatisation des échanges",
    ],
    img: require('../../assets/img_creation_site_web.jpg'),
  },
  {
    name: "Oragnisation de rendez-vous",
    content: [
      "Agenda connecté, prise de rendez-vous simplifié et rappel automatiques",
    ],
    img: require('../../assets/img_automatisation_pme.jpg'),
  },
  {
    name: "Automatisation de contenu",
    content: [
      "Création, planification et diffusion de contenus assistées par l'IA",
    ],
    img: require('../../assets/img_coaching_creation_site_web.jpg'),
  },
];

//Détails bénéfices
const benefitsSection = [
  {
    title: "Des système digitaux strucuturés et connectés pour une organisation fkuide",
    text: "Nous structurons vos processus, connectons vos outils et automatisons  ce qui peut l'être pour créer un système cohérent qui soutient votre activité",
    icon: faPlay,
    image: imgBenefit,
    items: [
      "Structuration des processus métier",
      "Connexion de vos outils (site web, CRM, agendas, etc)",
      "Automatisations des tâches répétitives avec MAke & l'IA",
      "Centralisation et fiabilisations des données",
      "Plus de temps pour vos clients, vos projets et les tâches à forte valeur ajoutée",
    ],
  },
];


//Détails Icone Cards 
// En haut du fichier Accueil.jsx (sous les imports par exemple)
const cards = [
  {
    icon: faBuilding,
    title: "Outils dispersés",
    text: "Vos outils ne sont pas connectés et les données sont dispersées",
  },  
  {
    icon: faPenRuler,
    title: "Tâches répétitives",
    text: "Vous perdez du temps sur des actions manuelles à faible valeur ajoutée",
  },
  {
    icon: faBriefcase,
    title: "Manque de fluidité",
    text: "Votre organisation manque de visibilité et de cohérence au quotidien",
  }
  
];


const buttons = [
   {text: 'Optimiser mon organisation', link: '/prestations' },
  { text: 'Voir comment ça fonctionne', link: '/prestations' },
];

function Accueil() {
  const pageTitle = "Structuration & automatisation";
  const bannerText = "Structuration des process, connexion des outils et automatisation pour fluidifier l’activité, centraliser les données et gagner en efficacité. Je conçois des systèmes digitaux sur mesure : site web connecté, CRM, automatisations Make, intégrations IA et centralisation des données.";
  const bannerImg = require('../../assets/imgPortrait2.png');
  const bannerClass = "banner banner-presentation";
  const bannerImgClass = "banner__img-presentation";

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://aureliedemetrio.fr/blog/wp-json/wp/v2/posts?_embed&per_page=3")
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des articles :", error);
      });
  }, []);

  return (
    <div className='main'>
      <FreebiePopup />
      <Banner
        pageTitle={pageTitle}
        bannerClass={bannerClass}
        bannerImg={bannerImg}
        bannerText={bannerText}
        bannerImgClass={bannerImgClass}
        buttons={buttons}
      />

{/*UN DEFI QUOTIDIEN*/}
      <section className='home__cible'>
        <p className='section-tag'>UN DEFI QUOTIDIEN</p>
        <h2>Votre activité avance,<br/>mais votre organisation vous ralentit</h2>
        <div className='home__cible-text'>
        <p>Des outils dispersés, des tâches répétitives, des informations qui circulent mal...</p>
        <p>Résultat : des pertes de temps, des erreurs et une charge mentale inutile.</p>
        </div>
        <div className="icon-card__container">
          {cards.map((card, idx) => (
            <IconCard
              key={idx}
              title={card.title}
              icon={card.icon}
              text={card.text}
            />
          ))}
</div>

        <Link to="/prestations"><Button text="Voir les solutions disponibles" className='btn-secondary ' /></Link>
      </section>

{/*NOTRE APPROCHE*/}
      <section>
        <p className='section-tag'>NOTRE APPROCHE</p>
      <ServiceDetail sections={benefitsSection} />
      <Link to="/Prestations" className="button btn-secondary">
            En savoir plus sur notre approche
          </Link>
      </section>

{/*DES SOLUTIONS CONCRETES*/}
      <section className='home__services'>
        <p className='section-tag'>DES SOLUTIONS CONCRETES</p>
        <h2>Mes prestations : sites web, automatisations & intégrations métiers</h2>
          <p className="home__services-intro">
            Création de sites web connectés, automatisations Make / IA et optimisation de sites existants pour 
            connecter vos outils métier, centraliser vos données et gagner du temps au quotidien.
          </p>
        <div className='container__card'>
          {applicationType.map((service, index) => (
            <Link className='card-link' key={index} to="/prestations">
              <CardService
              serviceName={service.name}
              imageUrl={service.img}
              alt={service.name}
              description={<ul>{service.content.map((item, idx) => <li key={idx}>{item}</li>)}</ul>}
            />
            </Link>
          ))}
        </div>
        <div className="home__services-meta">
          
          {/* CTA optionnel si tu veux renforcer la navigation */}
          <Link to="/Prestations" className="button btn-secondary">
            Découvrir toutes mes prestations
          </Link>

          </div>
      </section>

{/*UNE DOUBLE EXPERTISE*/}
      <section className='home'>
        <p className='section-tag'>UNE DOUBLE EXPERTISE</p>
        <div className='home__apropos'>
            <img
            src={imgPortrait} 
              alt="Certification Make - Aurélie DEMETRIO | Developpeuse et consultante en transformation digiale, | Experte en automatisation Make" 
              className="badge-make"
          />
  <div className='home__apropos-div'>
    <h2>L'expérience terrain,<br/>la maitrise du digital</h2>
      <p>
        Avec plus de 20 ans d'expérience dans la gestion d'entreprise, je comprends vos réalités opérationnelles.
      </p>
      <p>
        Je combine cette vision métier avec une expertise technique en automations, outils digitaux et stratégie
      </p>
      <div className='home__expertise'>
        <div className='home__expertise-container'>
          <img
            src={badgeMake} 
              alt="Certification Make - Aurélie DEMETRIO | Developpeuse et consultante en transformation digiale, | Experte en automatisation Make" 
              className="badge-make"
          />
          <div>
            <h4>20 - ans</h4>
            <p>d'expérience opérationnelle</p>
          </div>
        </div>
        <div className='home__expertise-container'>
          <img
            src={badgeMake} 
              alt="Certification Make - Aurélie DEMETRIO | Developpeuse et consultante en transformation digiale, | Experte en automatisation Make" 
              className="badge-make"
          />
          <div>
            <h4>Certifiée</h4>
            <p>Make Advanced</p>
          </div>
        </div>
        <div className='home__expertise-container'>
          <img
            src={badgeMake} 
              alt="Certification Make - Aurélie DEMETRIO | Developpeuse et consultante en transformation digiale, | Experte en automatisation Make" 
              className="badge-make"
          />
          <div>
            <h4>Développeuse Web</h4>
            <p>& Intégration d'outils</p>
          </div>
        </div>
      </div>
  </div>
  </div>
</section>

{/*DES SERVICES*/}
      <section className='home__services'>
        <p className='section-tag'>DES SERVICES</p>
        <h2>Mes prestations : sites web, automatisations & intégrations métiers</h2>
          <p className="home__services-intro">
            Création de sites web connectés, automatisations Make / IA et optimisation de sites existants pour 
            connecter vos outils métier, centraliser vos données et gagner du temps au quotidien.
          </p>
        <div className='container__card'>
          {servicesType.map((service, index) => (
            <Link className='card-link' key={index} to="/prestations">
              <CardService
              serviceName={service.name}
              imageUrl={service.img}
              alt={service.name}
              description={<ul>{service.content.map((item, idx) => <li key={idx}>{item}</li>)}</ul>}
            />
            </Link>
          ))}
        </div>
        <div className="home__services-meta">
          
          {/* CTA optionnel si tu veux renforcer la navigation */}
          <Link to="/Prestations" className="button btn-secondary">
            Découvrir toutes mes prestations
          </Link>
          </div>
      </section>

{/*ILS NOUS ONT FAIT CONFIANCE*/}
      <Gallery projects={projetData} />

{/*URESSOURCES-BLOG*/}
      <section className='home-blog'>
        <p className='section-tag'>RESSOURCES</p>
        <h2 className="home-blog__title">
          Conseils, outils et retours d'expérience</h2>
        <p>
          Découvrez des ressources pour optimiser vos processus métier et connecter vos outils digitaux : intégrations Make, CRM sur mesure, synchronisation des données, automatisation des tâches récurrentes, formulaires intelligents, génération de contenu assistée par IA, gestion centralisée de l’information et stratégie digitale orientée productivité. </p>
          <p> <strong>L’objectif</strong> : transformer votre site et vos outils numériques en un véritable collaborateur, réduire les tâches manuelles, fluidifier votre organisation et améliorer la performance de votre activité au quotidien.
        </p>
        <div className="home-blog__cards">
          {posts.map(post => {
            const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
            const postLink = `/article/${post.slug}`;
            return (
              <article className="home-blog__card" key={post.slug}>
                {featuredImage && <a href={postLink}><img src={featuredImage} alt={post.title.rendered} loading="lazy"nonce='' /></a>}
                <h3><a href={postLink} dangerouslySetInnerHTML={{ __html: post.title.rendered }} /></h3>
                <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                <a href={postLink} className="btn-arrow">Lire l’article</a>
              </article>
            );
          })}
        </div>
        <a href="/blog" className="button btn-secondary">Voir tous les articles</a>
      </section>

{/*
      <section className='offre'>
        <h2>Boîte à outils digitale pour entrepreneurs et PME</h2>
          <div className='offre__artisan'>
            <div className='offre__artisan-text'>
              <p>Votre site web et vos outils digitaux peuvent devenir de <strong>véritables leviers de productivité</strong>.</p>

              <p>J’ai conçu une <strong>boîte à outils digitale</strong> regroupant <strong>guides, prompts IA, tutos Make, modèles de workflows et ressources concrètes</strong> pour vous aider à automatiser vos processus et optimiser votre organisation sans complexité technique.</p>

              <p>Idéale pour <strong>connecter votre site à vos outils métier</strong>, <strong>centraliser vos données</strong>, <strong>améliorer votre efficacité</strong>, et <strong>mettre en place des automatisations utiles</strong> dans votre quotidien professionnel.</p>

              <p>Accédez gratuitement à la boîte à outils et commencez dès aujourd’hui à faire de votre digital <strong>un système qui travaille pour vous</strong>.</p>
            </div>

          <Toolbox />
        </div>
      </section>
*/}

{/*CTA*/}
      <section className="home__cta-final">
  <div className="cta-final__wrapper">
    <h2>Prêt(e) à simplifier votre quotidien et gagner du temps ?</h2>
    <p>Je vous aide à mettre en place des solutions simples, utiles et connectées à vos outils métier.<br />
    Parlons de votre activité et trouvons ensemble la meilleure solution pour vous.</p>
    <Link to="/Calendly">
      <Button className="btn-secondary" text="Planifier un appel gratuit" />
    </Link>
  </div>
</section>

    </div>
  );
}

export default Accueil;
