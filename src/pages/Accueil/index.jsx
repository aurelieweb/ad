import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from '../../components/Gallery';
import Banner from '../../components/Banner';
import CardService from '../../components/CardService';
import Button from '../../components/Button';
import CalendlyBooking from '../../components/CalendlyBooking';
import logoReact from '../../assets/logoReact.jpeg';
import logoWP from '../../assets/logoWP.jpeg';
import logoJS from '../../assets/logoJS.jpeg';
import logoHTML from '../../assets/logoHTML.jpeg';
import logoCSS from '../../assets/logoCSS.jpeg';
import logoNode from '../../assets/logoNodeJS.jpeg';
import logoOxygen from '../../assets/logoOxygen.png';
import imgPortrait from '../../assets/imgPortrait.jpg';

const servicesData = require('../../data/serviceData.json');
const projetData = require('../../data/projetData.json');

function Accueil() {

    const pageTitle = "Création de sites web pour artisans, PME Construction et Immobilier";
    const bannerText = "Bienvenue chez AD - L'agence Digitale ! Notre mission est de vous accompagner dans la transformation digitale pour atteindre vos objectifs en ligne.";
    const bannerImg = require('../../assets/imgBanner.jpg');
    const bannerImgClass = "banner__image"
    const bannerButtonText = "En savoir plus"
    const buttonLink = "/contact";

    return (
      <div className='main'>
       <Banner 
            pageTitle={pageTitle} 
            bannerImg={bannerImg} 
            bannerText={bannerText} 
            bannerImgClass={bannerImgClass} 
            buttonLink={buttonLink} 
            bannerButtonText={bannerButtonText}/>
        <section className='home__services'>
            <h2>Mes services et prestations </h2>
            <p className='section-text'>Optimisez votre présence en ligne avec nos solutions de développement de web sur mesure. De la création de sites web attractifs à la refonte complète, nous donnons vie à votre vision digitale.</p>
            <div className='container__card'>
            {servicesData.map((service, index) => (
                <Link className='card-link' key={index} to="/prestations"> 
                    <CardService 
                        serviceName={service.name}
                        imageUrl={service.imageUrl}
                        description={service.description}
                    />
                </Link>
                ))}
            </div>
        </section>
        <Gallery projects={projetData} />
        <CalendlyBooking />

        <section className='home'>
        <img src={imgPortrait} alt="Aurélie DEMETRIO - L'Agence Digitale"/>
            
            <div className='home__apropos'>
                <h2>A propos</h2>
                <p className='section-text'>Je suis Aurélie DEMETRIO, la fondatrice de L’agence digitale. Passionnée d’informatique, j'ai forgé mon chemin dans le monde numérique au fil d'une carrière riche en expériences. Forte de mes 20 ans d'expérience en gestion dans le domaine du bâtiment et de l'immobilier, je mets à votre service mon expertise pour créer des solutions web tout-en-un adaptées à vos besoins.</p>
                <Link to="/A-propos/#apropos__anchor"><Button className="button" text="En savoir plus"/></Link>
            </div>
        </section>
        <section>
            <h2>Mon expertise à votre service</h2>
            <p className='section-text'>Découvrez notre expertise dans la <strong>création de sites web</strong> sur mesure pour les artisans, PME et acteurs du secteur de la <strong>Construction</strong> et de l'<strong>Immobilier</strong>. Spécialisée dans le référencement naturel (SEO), Nous concevons des sites <strong>éco-conçus</strong>, optimisés pour les moteurs de recherche et respectueux de l'environnement. Confiez-nousvotre projet pour une présence en ligne qui se démarque.</p>
            <div className='container__label'>
                    <img src={logoHTML} alt="logo HTML - Aurélie DEMETRIO, Création de site web pour artisans et PME dans le secteur du bâtiment et de l'immobilier"/>
                    <img src={logoCSS} alt="logo CSS - Aurélie DEMETRIO, Création de site web pour artisans et PME dans le secteur du bâtiment et de l'immobilier"/>
                    <img src={logoJS}  alt="logo Javascript - Aurélie DEMETRIO, Création de site web pour artisans et PME dans le secteur du bâtiment et de l'immobilier"/>
                    <img src={logoReact}  alt="logo React - Aurélie DEMETRIO, Création de site web pour artisans et PME dans le secteur du bâtiment et de l'immobilier"/>
                    <img src={logoNode}  alt="logo NodeJS - Aurélie DEMETRIO, Création de site web pour artisans et PME dans le secteur du bâtiment et de l'immobilier"/>
                    <img src={logoWP}  alt="logo Wordpress - Aurélie DEMETRIO, Création de site web pour artisans et PME dans le secteur du bâtiment et de l'immobilier"/>
                    <img src={logoOxygen}  alt="logo Oxygen builder - Aurélie DEMETRIO, Création de site web pour artisans et PME dans le secteur du bâtiment et de l'immobilier"/>
                </div>
        </section>

        </div>
    );
}
export default Accueil;
