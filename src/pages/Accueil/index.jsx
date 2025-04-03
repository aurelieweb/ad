import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Gallery from '../../components/Gallery';
import Banner from '../../components/Banner';
import CardService from '../../components/CardService';
import Button from '../../components/Button';
import CalendlyBooking from '../../components/CalendlyBooking';
import FreebiePopup from '../../components/FreebiePopup';
import Maintenance from '../../components/MaintenancePage';
import Toolbox from '../../components/ToolBox';

import imgPortrait from '../../assets/imgPortrait.png';

const projetData = require('../../data/projetData.json');
const servicesType = [
  {
    name: "Création de site",
    content: [
      "Création de portfolio",
      "Création de site One page ou Vitrine",
      "Mise en place de page de vente",
      "Mise en valeur de vos projets et savoir-faire",
    ],
    img: require('../../assets/img_creation_site_web.jpeg'), // Image à la place de l'icône
  },
  {
    name: "Accompagnement & Coaching",
    content: [
      "Audit de site",
      "Guide de création de site",
      "Accompagnement dans la création ou l'optimisation de ton site",
    ],
    img: require('../../assets/img_coaching_creation_site_web.jpeg'), // Image à la place de l'icône
  },
];

const buttons = [
  { text: 'Consultation gratuite', link: '/Calendly' },
];

function Accueil() {
  const pageTitle = "Création de sites web : Architectes, Entreprise Bâtiment et Immobilier";
  const bannerText = "Mettez en avant votre savoir-faire avec Aurélie DEMETRIO de L'agence Digitale. Offrez à votre expertise la visibilité qu'elle mérite.";
  const bannerImg = require('../../assets/img_coaching_creation_site_web.jpeg');
  const bannerClass = "banner banner-presentation";
  const bannerImgClass = "banner__img-presentation";

  //Gestion articles 
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

      <section className='home__services'>
        <h2>Des sites web sur mesure pour Architecte et Pros du Bâtiment:<br /> Valorisez votre expertise en ligne </h2>
        <p>Avec plus de <strong>20 ans d’expérience</strong> dans la gestion d’entreprise <strong>dans le bâtiment</strong>, je comprends les défis uniques auxquels vous faites face.</p>
        <p>Je crée des <strong>sites web</strong> personnalisés, <strong>pensés pour les architectes et les professionnels du bâtiment</strong>, afin de <strong>mettre en valeur votre savoir-faire</strong> et de simplifier votre quotidien. Que ce soit pour créer un site web professionnel d’architecte, automatiser vos process pour faire gagner du temps, concevoir des pages de vente efficaces, je suis là pour transformer votre expertise en succès en ligne.</p>
        <p>Ensemble, développons votre présence numérique avec des <strong>solutions sur mesure qui reflètent votre métier et boostent votre activité.</strong></p>
        
        <div className='container__card'>
          {servicesType.map((service, index) => (
            <Link className='card-link' key={index} to="/prestations">
              <CardService
                serviceName={service.name}
                img={<img src={service.img} alt={service.name} className='service-image' />} // Image à la place de l'icône
                description={
                  <ul>
                    {service.content.map((item, idx) => (
                      <li className="service-icon-list" key={idx}>{item}</li>
                    ))}
                  </ul>
                }
              />
            </Link>
          ))}
        </div>
      </section>

      <Gallery projects={projetData} />

      <section className='home'>
        <img src={imgPortrait} alt="Aurélie DEMETRIO - L'Agence Digitale" />
        <div className='home__apropos'>
          <h2>A propos</h2>
          <p>Je suis développeuse web spécialisée dans le secteur du bâtiment et de l’immobilier, avec 20 ans d'expérience sur le terrain.</p>
          <p>Mon objectif : créer des sites sur mesure qui <span className='text-color'><strong>mettent en valeur votre expertise, simplifient vos processus, et boostent votre activité.</strong></span></p>
          <p>Chaque projet est unique, tout comme votre entreprise. J’écoute vos besoins pour concevoir des formulaires, pages de vente, et portfolios personnalisés, qui vous aideront à <span className='text-color'><strong>attirer vos clients idéaux</strong></span> et à faire évoluer votre business.</p>
          <p>Offrez à votre savoir faire la visbilité qu'il mérite! </p>
          <Link to="/A-propos/#apropos__anchor"><Button className="button" text="En savoir plus" /></Link>
        </div>
      </section>

      <section className="home-blog">
        <h2 className="home-blog__title">Derniers articles</h2>
        <div className="home-blog__cards">
          {posts.slice(0, 3).map(post => {
            const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
            const postLink = `/article/${post.id}`;

            return (
              <div className="home-blog__card" key={post.id}>
                {featuredImage && <img src={featuredImage} alt={post.title.rendered} />}
                <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                <a href={postLink} className="btn btn-secondary">Lire l’article</a>
              </div>
            );
          })}
        </div>
        <a href="/blog" className="btn btn-secondary">Voir tous les articles</a>
      </section>


      {/*<section className='offre'>
        <h2>Offre spéciale pour les artisans et PME du Bâtiment</h2>
        <div className='offre__artisan'>
          <div className='offre__artisan-text'>
            <p>En tant qu'artisan, chef d'entreprise du Bâtiment, je comprends l'importance de disposer d'<strong>une solution numérique clé en main</strong> pour promouvoir votre activité.</p>
            <p>Avec mon offre spéciale artisan, vous bénéficierez d'une solution tout-en-un <strong>comprenant la rédaction de contenu</strong>, grâce à mon expertise métier et ma connaissance approfondie du secteur.</p>
            <p>Nos offres sont conçues sur mesure pour s'adapter à votre budget et votre emploi du temps chargé.</p>
            <p><strong>Mon objectif</strong> est de <strong>vous faire gagner du temps</strong> et de vous offrir une présence en ligne professionnelle qui vous distingue de la concurrence.</p>
          </div>
          <CalendlyBooking />
        </div>
      </section>*/}

      <section className='offre'>
  <h2>Boîte à outils digitale pour entrepreneurs et PME</h2>
  <div className='offre__artisan'>
    <div className='offre__artisan-text'>
      <p>
        Vous êtes entrepreneur, indépendant ou dirigeant d’une PME ? Votre site web peut être bien plus qu’une simple vitrine.
        Il peut devenir un véritable <strong>outil de productivité</strong> pour <strong>attirer des clients</strong>, <strong>automatiser des tâches</strong> et <strong>gagner un temps précieux</strong>.
      </p>
      <p>
        C’est pourquoi j’ai conçu une <strong>boîte à outils digitale</strong> regroupant des <strong>guides, prompts IA, tutos et ressources concrètes</strong>,
        spécialement pensés pour les professionnels qui veulent optimiser leur présence en ligne sans perdre de temps.
      </p>
      <p>
        Cette sélection est idéale si vous souhaitez <strong>améliorer votre référencement</strong>, <strong>rédiger plus efficacement</strong>, ou encore
        <strong>mettre en place des automatisations simples</strong> dans votre quotidien d’entrepreneur.
      </p>
      <p>
        Accédez gratuitement à la boîte à outils et commencez dès aujourd’hui à faire de votre site un véritable levier de croissance.
      </p>
    </div>

    {/* Boîte à outils intégrée ici */}
    <Toolbox />
  </div>
</section>

    </div>
  );
}

export default Accueil;
