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
import imgPortrait from '../../assets/imgPortrait.jpg';
import ServiceDetail from "../../components/ServiceDetail";


const projetData = require('../../data/projetData.json');

//Détails des services
const servicesType = [
  {
    name: "Création de site",
    content: [
      "Création de portfolio",
      "Création de site One page ou Vitrine",
      "Mise en place de page de vente",
      "Mise en valeur de vos projets et savoir-faire",
    ],
    img: require('../../assets/img_creation_site_web.jpg'),
  },
  {
    name: "Automatisation",
    content: [
      "Connexion outils métier",
      "Automatisations Make / Tally / Airtable",
      "Centralisation des demandes",
    ],
    img: require('../../assets/img_automatisation_pme.jpg'),
  },
  {
    name: "Accompagnement & Coaching",
    content: [
      "Audit de site",
      "Guide de création de site",
      "Accompagnement dans la création ou l'optimisation de ton site",
    ],
    img: require('../../assets/img_coaching_creation_site_web.jpg'),
  },
];

//Détails bénéfices
const benefitsSection = [
  {
    title: "Des bénéfices concrets pour votre quotidien",
    icon: faPlay,
    image: imgBenefit,
    items: [
      "Moins de saisie manuelle, moins d’allers-retours",
      "Des outils simples et pensés pour votre métier",
      "Des demandes centralisées automatiquement",
      "Un site pro qui met en valeur votre métier",
      "Plus de temps pour vos chantiers, vos clients, votre vie",
    ],
  },
];

//Détails Icone Cards 
// En haut du fichier Accueil.jsx (sous les imports par exemple)
const cards = [
  {
    icon: faBuilding,
    title: "Entreprise du bâtiment",
    text: "Une PME qui économise 10h par semaine grâce à un formulaire de demande d’intervention accessible même quand le standard est indisponible.",
  },  
  {
    icon: faPenRuler,
    title: "Architecte indépendant",
    text: "Un architecte qui valorise ses projets dans un portfolio en ligne, et propose des rendez-vous directement dans son agenda, selon ses disponibilités.",
  },
  {
    icon: faBriefcase,
    title: "Consultante ou prestataire",
    text: "Une indépendante qui envoie ses devis automatiquement après un formulaire client, sans copier-coller ni allers-retours inutiles.",
  }
  
];


const buttons = [
  { text: 'Prendre rendez-vous', link: '/Calendly', className: 'button' },
];

function Accueil() {
  const pageTitle = "Création de sites web et outils connectés pour entrepreneurs et PME";
  const bannerText = "Un site web utile et connecté à vos outils, qui valorise votre savoir-faire et vous fait gagner un temps précieux.";
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
      <Maintenance />
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
        <h2>Vous êtes artisan, entrepreneur ou dirigeant de PME ?</h2>
        <p>Vous gérez un quotidien chargé, souvent dans l’urgence. Et votre site web ne vous aide pas autant qu’il le pourrait.</p>
        <p>Je conçois des sites web et des outils digitaux qui s’adaptent à votre façon de travailler pour vous faire <strong>gagner du temps</strong>, <strong>automatiser les tâches répétitives</strong> et <strong>valoriser votre savoir-faire</strong>.</p>
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
        <h2>Mes solutions sur mesure</h2>
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
      </section>

      <ServiceDetail sections={benefitsSection} />

      <section className='home'>
        <img src={imgPortrait} alt="Aurélie DEMETRIO - L'Agence Digitale" />
        <div className='home__apropos'>
          <h2>A propos</h2>
          <p>Je suis développeuse web spécialisée dans le secteur du bâtiment et de l’immobilier, avec 20 ans d'expérience sur le terrain.</p>
          <p>Mon objectif : créer des sites sur mesure qui <span className='text-color'><strong>mettent en valeur votre expertise, simplifient vos processus, et boostent votre activité.</strong></span></p>
          <p>Chaque projet est unique, tout comme votre entreprise. J’écoute vos besoins pour concevoir des formulaires, pages de vente, et portfolios personnalisés, qui vous aideront à <span className='text-color'><strong>attirer vos clients idéaux</strong></span> et à faire évoluer votre business.</p>
          <p>Offrez à votre savoir faire la visibilité qu'il mérite !</p>
          <Link to="/A-propos/#apropos__anchor"><Button className="button" text="En savoir plus" /></Link>
        </div>
      </section>

      <Gallery projects={projetData} />

      <section className='home-blog'>
        <h2 className="home-blog__title">
          Stratégie web, outils connectés et création de site :<br /> les essentiels pour entrepreneurs et PME
        </h2>
        <div className="home-blog__cards">
          {posts.map(post => {
            const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
            const postLink = `/article/${post.slug}`;
            return (
              <article className="home-blog__card" key={post.slug}>
                {featuredImage && <a href={postLink}><img src={featuredImage} alt={post.title.rendered} loading="lazy" /></a>}
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
            <p>Votre site web peut devenir un <strong>véritable outil de productivité</strong>.</p>
            <p>J’ai conçu une <strong>boîte à outils digitale</strong> regroupant <strong>guides, prompts IA, tutos et ressources concrètes</strong> pour vous aider à optimiser votre présence en ligne sans perdre de temps.</p>
            <p>Idéale pour <strong>améliorer votre référencement</strong>, <strong>rédiger plus efficacement</strong>, ou encore <strong>mettre en place des automatisations simples</strong> dans votre quotidien d’entrepreneur.</p>
            <p>Accédez gratuitement à la boîte à outils et commencez dès aujourd’hui à faire de votre site un véritable levier de croissance.</p>
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
