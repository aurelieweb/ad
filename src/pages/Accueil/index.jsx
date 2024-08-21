import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from '../../components/Gallery';
import Banner from '../../components/Banner';
import CardService from '../../components/CardService';
import Button from '../../components/Button';
import CalendlyBooking from '../../components/CalendlyBooking';
import FreebiePopup from '../../components/FreebiePopup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenRuler, faCompassDrafting, faHouseChimneyWindow, faPlay } from '@fortawesome/free-solid-svg-icons';

import imgPortrait from '../../assets/imgPortrait.png';

const projetData = require('../../data/projetData.json');
const servicesType = [
  {
    name: "Architecte",
    content: [
      "Création de portfolio",
      "Mise en valeur de vos projets",
    ],
    icon: faCompassDrafting,
  },
  {
    name: "Bâtiment",
    content: [
      "Création de site one page ou site vitrine",
      "Offre clé en main",
    ],
    icon: faPenRuler,
  },
  {
    name: "Immobilier",
    content: [
      "Création de site one page ou site vitrine Immobilier ou location de courte durée",
    ],
    icon: faHouseChimneyWindow,
  }
];

const buttons = [
  { text: 'Consultation gratuite', link: '/Calendly' },
];

function Accueil() {
  const pageTitle = "Création de sites web : Architectes, Entreprise Bâtiment et Immobilier";
  const bannerText = "Mettez en avant votre savoir-faire avec Aurélie DEMETRIO de L'Agence Digitale. Offrez à votre expertise la visibilité qu'elle mérite.";
  const bannerImg = require('../../assets/imgPortrait.png');
  const bannerClass = "banner banner-presentation"
  const bannerImgClass = "banner__img-presentation";

  return (
    <div className='main'>
      <FreebiePopup/>
      <Banner
        pageTitle={pageTitle}
        bannerClass={bannerClass}
        bannerImg={bannerImg}
        bannerText={bannerText}
        bannerImgClass={bannerImgClass}
        buttons={buttons} />
      
      <section className='home__services'>
        <h2>Des sites web sur mesure pour Architecte et Pros du Bâtiment:<br/> Valorisez votre expertise en ligne </h2>
        <div className='container__card'>
          {servicesType.map((service, index) => (
            <Link className='card-link' key={index} to="/prestations">
              <CardService
                serviceName={service.name}
                icon={<FontAwesomeIcon icon={service.icon} className='service-icon' />}
                description={
                  <ul>
                    {service.content.map((item, idx) => (
                      <li className="service-icon-list" key={idx}><FontAwesomeIcon className='container__section-icon' icon={faPlay} /> {item}</li>
                    ))}
                  </ul>
                }
              />
            </Link>
          ))}
        </div>
        <p>Avec plus de <strong>20 ans d’expérience</strong> dans la gestion d’entreprise <strong>dans le bâtiment</strong>, je comprends les défis uniques auxquels vous faites face.</p>
        <p>Je crée des <strong>sites web</strong> personnalisés, <strong>pensés pour les architectes et les professionnels du bâtiment</strong>, afin de <strong>mettre en valeur votre savoir-faire</strong> et de simplifier votre quotidien. Que ce soit pour créer un site web professionnel d’architecte, intégrer des modules de demande d’intervention pour gagner du temps, ou concevoir des pages de vente efficaces, je suis là pour transformer votre expertise en succès en ligne. </p>
        <p>Ensemble, développons votre présence numérique avec des <strong>solutions sur mesure qui reflètent votre métier et boostent votre activité.</strong></p>
        
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

      <section className='offre'>
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
      </section>
    </div>
  );
}

export default Accueil;
