import React from "react";
//import Button from '../../components/Button';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Testimonies from '../../components/Testimonies';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const buttons = [
  { text: 'Consultation gratuite', link: '/Calendly' }
];

function kiffetonsite() {
  const pageTitle = "Comment créer un site web facilement";
  const bannerText = "A modifier";

  const bannerImg = require('../../assets/imgPortrait.png');
  const bannerClass = "banner banner-presentation";
  const bannerImgClass = "banner__img-presentation";

  // Contenu de la section 2
  const whatYouLearn = [
    "À structurer et concevoir un site web professionnel, étape par étape.",
    "Les secrets pour capter l’attention de vos visiteurs et convertir.",
    "Comment gérer votre site en toute autonomie, sans galères techniques."
  ];

  const resources = [
    "eBook interactif : Un guide clair et détaillé.",
    "Workbooks : Des outils pratiques pour appliquer immédiatement ce que vous apprenez.",
    "Prompts personnalisés : Pour gagner du temps et rester efficace."
  ];

  const whyItWorks = [
    "Méthodes éprouvées par une développeuse experte.",
    "Un format adapté aux non-techniciens.",
    "Des résultats rapides, sans compromis sur la qualité."
  ];

  const packs = [
    {
        serviceName: "Pack Standard",
        servicePrice: "99,00€",
        prestation: [
            { "nom": "eBook interactif", "inclus": true },
            { "nom": "Workbooks détaillés", "inclus": true }
        ],
        buttonText: "Commander",
        link:"/Calendly",
    },
    {
        serviceName: "Pack Coaching Collectif",
        servicePrice: "349,00€",
        prestation: [
            { "nom": "Inclus : Pack Standard", "inclus": true },
            { "nom": "2 ateliers thématiques en petit groupe", "inclus": true }
        ],
        buttonText: "Nos prochaines dates",
        link:"/Calendly",
    },
    {
        serviceName: "Pack VIP",
        servicePrice: "599,00€",
        prestation: [
            { "nom": "Inclus : Pack Standard", "inclus": true },
            { "nom": "4 ateliers thématiques", "inclus": true },
            { "nom": "1 session individuelle avec une experte", "inclus": true }
        ],
        buttonText: "Nos prochaines dates",
        link:"/Calendly",
    }
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
      <div className="pagevente__container">
        <h2>Créer un site internet en 12 étapes</h2>
        <p className='section-text'>Vous rêvez d’un site web qui reflète votre vision et attire vos clients ? Avec 'Kiffe ton site', nous vous donnons les outils et les ressources nécessaires pour créer un site qui impressionne et performe. Ce n’est pas qu’un simple guide, c’est une transformation digitale sur mesure !</p>
      </div>

      {/* Section 2 : Pourquoi choisir "Kiffe ton site" ? */}
      <div className="pagevente__section">
        <h2 className="section-title">Pourquoi choisir "Kiffe ton site" ?</h2>
        <h3 className="section-subtitle">Une solution complète pour les entrepreneurs modernes</h3>

        <div className="service-detail">
          <h3 className="customer-type">Ce que vous allez apprendre :</h3>
          <ul>
            {whatYouLearn.map((item, index) => (
              <li key={index}>
                <span className="icon-circle"><FontAwesomeIcon icon={faPlay} /></span>
                <div className="icon-div">{item}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="service-detail">
          <h3 className="customer-type">Des ressources adaptées à vos besoins :</h3>
          <ul>
            {resources.map((item, index) => (
              <li key={index}>
                <span className="icon-circle"><FontAwesomeIcon icon={faPlay} /></span>
                <div className="icon-div">{item}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="service-detail">
          <h3 className="customer-type">Pourquoi ça marche ?</h3>
          <ul>
            {whyItWorks.map((item, index) => (
              <li key={index}>
                <span className="icon-circle"><FontAwesomeIcon icon={faPlay} /></span>
                <div className="icon-div">{item}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pagevente__section">
      <h2 className="section-title">Choisissez le pack qui vous correspond</h2>
      <div className="container__card-div">
        {packs.map((pack, index) => (
          <Card
            key={index}
            serviceName={pack.serviceName}
            servicePrice={pack.servicePrice}
            prestation={pack.prestation}
            buttonText={pack.buttonText}
            link={pack.link}
          />
        ))}
      </div>
    </div>
      <div className="pagevente__section">
      <h2 className="section-title">Pourquoi choisir "Kiffe ton site" ?</h2>
      <Testimonies />
      </div>
    </div>
  );
}

export default kiffetonsite;
