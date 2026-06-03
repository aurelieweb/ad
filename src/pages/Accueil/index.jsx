import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Gallery from '../../components/Gallery';
import Banner from '../../components/Banner';
import CardService from '../../components/CardService';
import Button from '../../components/Button';
//import FreebiePopup from '../../components/FreebiePopup';
import Maintenance from '../../components/MaintenancePage';
//import Toolbox from '../../components/ToolBox';
import IconCard from '../../components/IconCard'
import { faPlay, faBriefcase, faPenRuler, faBuilding  } from "@fortawesome/free-solid-svg-icons";
import imgBenefit from "../../assets/imgHome.jpeg";
import imgPortrait from '../../assets/imgPortrait.png';
//import ServiceDetail from "../../components/ServiceDetail";
import badgeMake from "../../assets/make-advanced.png";
import iconDev from "../../assets/icon_dev.png";
import iconExp from "../../assets/icon_experience.png";


const projetData = require('../../data/projetData.json');

//Détails des services
const servicesType = [
  {
    name: "Templates & automatisations",
    content: [
      "Scénarios Make et templates prêts à l’emploi",
      "Solutions rapides pour gagner du temps",
    ],
    img: require('../../assets/img_creation_site_web.jpg'),
  },

  {
    name: "Automatisation métier",
    content: [
      "Connexion de vos outils et workflows",
      "Optimisation et maintenance de scénarios existants",
    ],
    img: require('../../assets/img_automatisation_pme.jpg'),
  },

  {
    name: "Systèmes digitaux connectés",
    content: [
      "Sites web connectés, IA et outils sur mesure",
      "Organisation modernisée et plus fluide",
    ],
    img: require('../../assets/img_coaching_creation_site_web.jpg'),
  },
];

//Détails des applications
const applicationType = [
  {
    name: "Centraliser les informations clés",
    content: [
      "Formulaires connectés, suivi centralisé et circulation plus fluide des informations entre vos outils, vos équipes et vos processus métier.",
    ],
    img: require('../../assets/img_creation_site_web.jpg'),
  },

  {
    name: "Fluidifier les processus métier",
    content: [
      "Organisation des échanges, automatisation des tâches répétitives et outils connectés pour simplifier le quotidien et améliorer l’efficacité opérationnelle.",
    ],
    img: require('../../assets/img_automatisation_pme.jpg'),
  },

  {
    name: "Automatiser et moderniser les méthodes de travail",
    content: [
      "Automatisations Make, intégrations IA et systèmes digitaux conçus pour moderniser vos méthodes de travail et optimiser votre organisation.",
    ],
    img: require('../../assets/img_coaching_creation_site_web.jpg'),
  },
];

//Détails bénéfices
const benefitsSection = [
  {
    title: "Des systèmes digitaux structurés pour moderniser et fluidifier votre organisation",
    text: "Nous structurons vos processus, connectons vos outils et automatisons ce qui peut l’être afin de construire un système digital cohérent, fiable et réellement adapté à votre organisation. L’objectif : fluidifier les échanges, améliorer le pilotage de l’activité et simplifier le quotidien",
    icon: faPlay,
    image: imgBenefit,
    items: [
      "Analyse et structuration des processus métier",
      "Connexion de vos outils : site web, CRM, agendas, formulaires, bases de données…",
      "Automatisation des tâches répétitives avec Make et l’IA",
      "Centralisation, fiabilisation et synchronisation des données",
      "Amélioration du pilotage, du suivi et de la visibilité sur l’activité",
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

  //Banner
  const pageTitle = "STRUCTURATION & AUTOMATISATION";
  const bannerText = "Structuration des process, connexion des outils et automatisation pour fluidifier l’activité, centraliser les données et gagner en efficacité.";
  const bannerImg = require('../../assets/imgPortrait2.png');
  const bannerClass = "banner banner-presentation";
  const bannerImgClass = "banner__img-presentation";

  //Current word
  const words = ['des entreprises', 'des organisations','des équipes', 'des process' ];
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [posts, setPosts] = useState([]);
    useEffect(() => {
      let index = 0;
  
      const interval = setInterval(() => {
        index = (index + 1) % words.length;
        setCurrentWord(words[index]);
      }, 2000);
  
      return () => clearInterval(interval);
    }, []);

  useEffect(() => {
    axios.get("https://aureliedemetrio.fr/blog/wp-json/wp/v2/posts?_embed&per_page=3")
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des articles :", error);
      });
  }, []);
//Maintenance

const [showMaintenance, setShowMaintenance] = useState(true);

  return (
    <div className='main'>
      {showMaintenance && (<Maintenance onClose={() => setShowMaintenance(false)} />
)}
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
    
        <h2>
          La transformation digitale est devenue indispensable pour moderniser les méthodes de travail
        </h2>

        <div className="home__cible-text">
          <p>
            Aujourd’hui, la <strong>transformation digitale</strong> ne se limite plus à avoir un site web.
            Elle consiste à <strong>moderniser les méthodes de travail</strong>,
            fluidifier les processus et connecter les outils pour améliorer
            l’<strong>efficacité opérationnelle</strong>.
          </p>

          <p>
            <strong>Site web</strong>, formulaires, CRM, gestion administrative,
            outils métier, automatisation, centralisation des données, intégrations IA……
            <br /><br />
            Lorsqu’ils sont correctement structurés et connectés,
            les systèmes digitaux deviennent de véritables
            <strong> leviers de performance</strong>.
          </p>

          <p>
            Une organisation digitale bien pensée permet aux entreprises de
            <strong> gagner en fluidité</strong>,
            améliorer le suivi des opérations et
            <strong> réduire les tâches répétitives</strong>
            sans complexifier le quotidien des équipes.
          </p>
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

        <Link to="/prestations"><Button text="Voir les solutions disponibles" className='button ' /></Link>
      </section>

{/*NOTRE APPROCHE*/}
      <section className='section__approche'>
        <p className='section-tag'>NOTRE APPROCHE</p>
              <div className="pagevente__section">
                {benefitsSection.map((section, index) => {
                  const positionClass = index % 2 === 0 ? "image-left" : "image-right";
                  console.log(`Section ${index + 1}: Applying class ${positionClass}`);
          
                  return (
                    <div key={index} className={`service-detail ${positionClass}`}>
                      {/* Afficher l'image ou l'iframe à gauche */}
                      {index % 2 === 0 && (
                        <div className="service-detail__image">
                          {typeof section.image === "string" ? (
                            <img src={section.image} alt={section.title} />
                          ) : (
                            section.image
                          )}
                        </div>
                      )}
          
                      {/* Contenu textuel */}
                      <div className="service-detail__content">
                        <h2 className="customer-type">{section.title}</h2>
                        <p>{section.text}{" "}<strong className="banner__dynamic-word">{currentWord}</strong>.</p>
                        {section.subtitle && (
                          <h4 className="section-subtitle">{section.subtitle}</h4>
                        )}
                        <ul>
                          {section.items.map((item, idx) => (
                            <li key={idx}>
                              <span className="icon-circle">
                                <FontAwesomeIcon icon={section.icon} />
                              </span>
                              <div className="icon-div">{item}</div>
                            </li>
                          ))}
                        </ul>
                        <Link to="/Services" className="button">
                          En savoir plus sur notre approche
                        </Link>
                      </div>
          
                      {/* Afficher l'image ou l'iframe à droite */}
                      {index % 2 !== 0 && (
                        <div className="service-detail__image">
                          {typeof section.image === "string" ? (
                            <img src={section.image} alt={section.title} />
                          ) : (
                            section.image
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
      </section>

{/*DES SOLUTIONS CONCRETES*/}
      <section className='home__services'>
        <p className='section-tag'>DES SOLUTIONS CONCRETES</p>
        <h2>Des solutions digitales pour connecter vos outils et moderniser votre organisation</h2>
          <p className="home__services-intro">
            J’accompagne les entreprises dans leur <strong>transformation digitale</strong> à travers
            des solutions concrètes et connectées :
            <strong> sites web sur mesure</strong>, automatisations Make,
            intégrations IA, centralisation des données et optimisation des outils existants.
            <br /><br />
            L’objectif : construire des <strong>systèmes digitaux plus fluides, plus fiables et plus efficaces</strong>
            pour moderniser les méthodes de travail, améliorer le pilotage de l’activité
            et réduire les tâches répétitives à faible valeur ajoutée.
            <br /><br />
            Chaque solution est pensée pour s’intégrer à votre organisation,
            connecter vos outils métier et créer un environnement digital cohérent,
            adapté à vos processus et à vos enjeux opérationnels.
          </p>
        <div className='container__card'>
          {applicationType.map((service, index) => (
            <Link className='card-link' key={index} to="/Services">
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
          
          {/* CTA optionnel*/}
          <Link to="/Services" className="button">
            Découvrir toutes mes prestations
          </Link>

          </div>
      </section>

{/* UNE DOUBLE EXPERTISE */}
<section className="home">
  <p className="section-tag">UNE DOUBLE EXPERTISE</p>

  <div className="home__apropos">
    <img
      src={imgPortrait}
      alt="Aurélie Demetrio, consultante en transformation digitale et automatisation"
      className="home__apropos-img"
    />

    <div className="home__apropos-div">
      <h2>
        L’expérience terrain,<br />
        la maîtrise du digital
      </h2>

      <p>
        Avec plus de <strong>20 ans d’expérience en gestion d’entreprise</strong>,
        je comprends les réalités opérationnelles, les contraintes métier et les enjeux d’organisation.
      </p>

      <p>
        J’associe cette vision terrain à une expertise technique en
        <strong> automatisation, outils digitaux, intégrations web et stratégie digitale </strong> 
        pour créer des solutions concrètes, utiles et adaptées.
      </p>

      <div className="home__expertise">
        <div className="home__expertise-container">
          <img
            src={iconExp}
            alt="Icône expérience opérationnelle"
            className="badge-make"
          />
          <div>
            <h4>20 ans</h4>
            <p>d’expérience opérationnelle</p>
          </div>
        </div>

        <div className="home__expertise-container">
          <img
            src={badgeMake}
            alt="Certification Make Advanced"
            className="badge-make"
          />
          <div>
            <h4>Certifiée</h4>
            <p>Make Advanced</p>
          </div>
        </div>

        <div className="home__expertise-container">
          <img
            src={iconDev}
            alt="Icône développement web et intégration d’outils"
            className="badge-make"
          />
          <div>
            <h4>Développeuse web</h4>
            <p>& intégration d’outils</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*DES SERVICES*/}
      <section className='home__services'>
        <p className='section-tag'>DES SERVICES</p>
        <h2>Sites web connectés, automatisations et outils digitaux au service de votre organisation</h2>
        <p className="home__services-intro">
          Chaque entreprise possède un niveau de maturité digitale différent.
          Certaines ont besoin d’une automatisation ciblée,
          d’autres d’un système digital plus structuré, connecté et évolutif.
          <br /><br />
          J’accompagne les entreprises dans la mise en place de
          <strong> solutions digitales concrètes, évolutives et adaptées à leurs enjeux opérationnels</strong> :
          automatisations Make, outils connectés, intégrations IA,
          centralisation des données, optimisation des processus métier
          et systèmes digitaux sur mesure.
          <br /><br />
          L’objectif : <strong>moderniser les méthodes de travail</strong>,
          fluidifier les échanges et construire une organisation plus efficace,
          plus fiable et mieux structurée.
        </p>
        <div className='container__card'>
          {servicesType.map((service, index) => (
            <Link className='card-link' key={index} to="/Services">
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
          <Link to="/Prestations" className="button">
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
        <a href="/blog" className="button">Voir tous les articles</a>
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
      <Button className="button" text="Planifier un appel gratuit" />
    </Link>
  </div>
</section>

    </div>
  );
}

export default Accueil;
