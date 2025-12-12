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
import imgBenefit from "../../assets/imgArchitecte.jpg";
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

//Détails bénéfices
const benefitsSection = [
  {
    title: "Des bénéfices concrets pour votre activité",
    icon: faPlay,
    image: imgBenefit,
    items: [
      "Données synchronisées automatiquement entre vos outils (site, CRM, base de données…)",
      "Formulaires intelligents reliés à vos process métier (demandes, devis, rendez-vous…)",
      "Automatisations Make pour réduire les tâches répétitives et limiter les erreurs humaines",
      "Un site web opérationnel qui soutient votre organisation, pas une simple vitrine",
      "Plus de temps pour vos clients, vos projets et les tâches à forte valeur ajoutée",
    ],
  },
];


//Détails Icone Cards 
// En haut du fichier Accueil.jsx (sous les imports par exemple)
const cards = [
  {
    icon: faBuilding,
    title: "Formulaire connecté & CRM intégré",
    text: "Une PME qui économise 10h par semaine grâce à un formulaire de demande d’intervention accessible même quand le standard est indisponible.",
  },  
  {
    icon: faPenRuler,
    title: "Prise rendez-vous en ligne",
    text: "Un architecte qui valorise ses projets dans un portfolio en ligne, et propose des rendez-vous directement dans son agenda, selon ses disponibilités.",
  },
  {
    icon: faBriefcase,
    title: "Génération de contenu",
    text: "Une indépendante qui génére automatiquement sa stratégie de contenu grâce à l'automatisation et l'Intelligence Artificielle",
  }
  
];


const buttons = [
  { text: 'Prendre rendez-vous', link: '/Calendly', className: 'button' },
];

function Accueil() {
  const pageTitle = "Création de sites web et transformation digitale";
  const bannerText = "Création de sites web connectés et mise en place d’outils et d’automatisations pour fluidifier votre activité, centraliser vos données et gagner du temps au quotidien.";
  const bannerImg = require('../../assets/img_coaching_creation_site_web.jpg');
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

      <section className='home__cible'>
        <h2>Votre activité a besoin d’un site web connecté et d’outils digitaux adaptés, pas d’un simple site vitrine.</h2>
        <div className='home__cible-text'>
        <p>Vous gérez un quotidien chargé, souvent dans l’urgence. Et votre site web ne vous aide pas autant qu’il le pourrait.</p>
        <p>Création de <strong>sites web connectés</strong> et mise en place d’<strong>outils digitaux</strong> adaptés à votre façon de travailler <strong>pour gagner du temps</strong>, <strong>automatiser les tâches répétitives</strong> et <strong>valoriser votre savoir-faire.</strong>.</p>
        <p>Automatisations, CRM sur mesure, formulaires intelligents, data centralisée, Intelligence Artificielle et intégrations Make pour fluidifier votre activité.</p>
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

      <section className='home__services'>
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
          <div className="home__badge">
            <img 
              src={badgeMake} 
              alt="Certification Make - Aurélie DEMETRIO | Developpeuse et consultante en transformation digiale, | Experte en automatisation Make" 
              className="badge-make"
            />
            <p>
              <strong>Certifiée Make Advanced</strong> et forte de 20 ans d’expérience opérationnelle, 
              je conçois des systèmes digitaux qui relient votre site web, vos outils métiers et vos processus internes.
            </p>
          </div>
          {/* CTA optionnel si tu veux renforcer la navigation */}
          <Link to="/Prestations" className="button btn-secondary">
            Découvrir toutes mes prestations
          </Link>
          </div>
      </section>

      <ServiceDetail sections={benefitsSection} />

      <section className='home'>
  <img src={imgPortrait} alt="Aurélie DEMETRIO - L'Agence Digitale" />
  <div className='home__apropos'>
    <h2>À propos</h2>
      <p>
        Avant de devenir développeuse web, j’ai passé 20 ans à gérer des opérations en entreprise : RH, administratif, gestion commerciale, coordination, suivi terrain, planning, matériel, appels d’offres… 
        J’ai une solide expérience du fonctionnement interne des structures et de leurs contraintes au quotidien.
      </p>

      <p>
        Aujourd’hui, je combine cette expertise opérationnelle avec le développement web et les intégrations techniques 
        (Make, IA, APIs, CRM, bases de données) pour créer des outils digitaux connectés et adaptés à votre manière de travailler.
      </p>

      <p>
        Je transforme votre site et vos outils numériques en un <span className='text-color'><strong>système utile et automatisé</strong></span> :
        formulaires intelligents, synchronisation des données, workflows Make, CRM, pages de vente, génération de contenu, automatisation des tâches récurrentes…
      </p>

      <p>
        Mon objectif : <span className='text-color'><strong>fluidifier vos processus, réduire la charge manuelle et faire du digital un levier de croissance durable pour votre activité</strong></span>.
      </p>

    <Link to="/A-propos/#apropos__anchor"><Button className="button" text="En savoir plus" /></Link>
  </div>
</section>


      <Gallery projects={projetData} />

      <section className='home-blog'>
        <h2 className="home-blog__title">
          Optimisation de l’activité, sites web et outils métiers connectés :<br /> les essentiels pour entrepreneurs et PME
        </h2>
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
                <a href={postLink} className="button btn-secondary">Lire l’article</a>
              </article>
            );
          })}
        </div>
        <a href="/blog" className="button btn-secondary">Voir tous les articles</a>
      </section>

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
