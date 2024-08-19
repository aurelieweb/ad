import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from '../../components/Gallery';
import Banner from '../../components/Banner';
import CardService from '../../components/CardService';
import Button from '../../components/Button';
import CalendlyBooking from '../../components/CalendlyBooking';


import imgPortrait from '../../assets/imgPortrait.png';
import imgArchitect from '../../assets/imgArchitecte.jpg';
import imgBatiment from '../../assets/imgBatiment.jpg';
import imgImmobilier from '../../assets/imgImmo.jpg';

//const servicesData = require('../../data/serviceData.json');
const projetData = require('../../data/projetData.json');
const servicesType= [
    {
      name: "Architecte",
      content: [
        "Création de portfolio",
        "Mise en valeur de vos projets",
      ],
      imgUrl: imgArchitect ,
    },
    {
        name: "Bâtiment",
        content: [
          "Création de site one page ou site vitrine",
          "Offre clé en main",
        ],
        imgUrl: imgBatiment ,
      },
      {
        name: "Immobilier",
        content: [
          "Création de site one page ou site vitrine Immobilier ou location de courte durée",

        ],
        imgUrl: imgImmobilier ,
      }
  ];

  const buttons = [
    { text: 'Consultation gratuite', link: '/Calendly' },
    { text: 'Quiz : Référencement local', link: '/Ressources' }
  ];

function Accueil() {

    const pageTitle = "Création de sites web pour Architectes, Entreprise Bâtiment et Immobilier";
    const bannerText = "Mettez en avant votre savoir-faire avec Aurélie DEMETRIO de L'Agence Digitale. Offrez à votre expertise la visibilité qu'elle mérite.";
    const bannerImg = require('../../assets/imgPortrait.png');
    const bannerClass = "banner banner-presentation"
    const bannerImgClass = "banner__img-presentation";


    return (
      <div className='main'>
       <Banner 
            pageTitle={pageTitle} 
            bannerClass={bannerClass}
            bannerImg={bannerImg} 
            bannerText={bannerText} 
            bannerImgClass={bannerImgClass} 
            buttons={buttons}/>
        <section className='home__services'>
            <h2>Mes services et prestations </h2>
            <p className='section-text'>Optimisez votre présence en ligne avec nos solutions de développement de web sur mesure. De la création de sites web attractifs à la refonte complète, nous donnons vie à votre vision digitale.</p>
            <div className='container__card'>
            {servicesType.map((service, index) => (
                <Link className='card-link' key={index} to="/prestations"> 
                    <CardService 
                        serviceName={service.name}
                        imageUrl={service.imgUrl}
                        description={
                            <div>
                                {service.content.map((item, idx) => (
                                    <p key={idx}>{item}</p>
                                ))}
                            </div>
                        }
                    />
                </Link>
                ))}
            </div>
        </section>
        <Gallery projects={projetData} />

        <section className='home'>
        <img src={imgPortrait} alt="Aurélie DEMETRIO - L'Agence Digitale"/>
            
            <div className='home__apropos'>
                <h2>A propos</h2>
                <p className='section-text'>Je suis développeuse web spécialisée dans le secteur du bâtiment et de l’immobilier, avec 20 ans d'expérience sur le terrain. Mon objectif : créer des sites sur mesure qui mettent en valeur votre expertise, simplifient vos processus, et boostent votre activité.</p> 

                <p className='section-text'>Chaque projet est unique, tout comme votre entreprise. J’écoute vos besoins pour concevoir des formulaires, pages de vente, et portfolios personnalisés, qui vous aideront à attirer vos clients idéaux et à faire évoluer votre business.</p> 

                <p className='section-text'>Offrez à votre savoir faire la visbilité qu'il mérite! </p>
                <Link to="/A-propos/#apropos__anchor"><Button className="button" text="En savoir plus"/></Link>
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
