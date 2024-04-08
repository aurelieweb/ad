import React from 'react';
import Banner from '../../components/Banner';
import CardService from '../../components/CardService';
import logoReact from '../../assets/logoReact.jpeg';
import logoWP from '../../assets/logoWP.jpeg';
import logoJS from '../../assets/logoJS.jpeg';
import logoHTML from '../../assets/logoHTML.jpeg';
import logoCSS from '../../assets/logoCSS.jpeg';
import logoNode from '../../assets/logoNodeJS.jpeg';
import logoOxygen from '../../assets/logoOxygen.png';
import imgPortrait from '../../assets/imgPortrait.png';


import Contact from '../../sections/Contact';

const servicesData = require('../../data/serviceData.json');

function Accueil() {

    const pageTitle = "Création de sites web pour artisans, PME Bâtiment et Immobilier";
    const bannerText = "Bienvenue chez AD - L'agence Digitale ! Spécialisée dans la création de sites web sur mesure pour les artisans, PME et entreprises du secteur du bâtiment et de l'immobilier. Ma mission: vous accompagner dans la transformation digitale de votre activité pour vous aider à atteindre vos objectifs en ligne.";
    const bannerImg = require('../../assets/imgBanner.jpg');
    const bannerImgClass = "banner__image"

    return (
      <div className='main'>
        <Banner pageTitle={pageTitle} bannerImg={bannerImg} bannerText={bannerText} bannerImgClass={bannerImgClass}/>
        <section className='home__services'>
            <h2>Mes services et prestations </h2>
            <p className='section-text'>Optimisez votre présence en ligne avec nos solutions de développement de web sur mesure. De la création de sites web attractifs à la refonte complète, nous donnons vie à votre vision digitale.</p>
            <div className='container__card'>
            {servicesData.map((service, index) => (
                <CardService 
                    key={index}
                    serviceName={service.name}
                    imageUrl={service.imageUrl}
                    description={service.description}
                 />
                ))}
            </div>
        </section>
        <section>
            <h2>Mon expertise à votre service</h2>
            <p className='section-text'>Découvrez mon expertise dans la création de sites web sur mesure pour les artisans, PME et acteurs du secteur du bâtiment et de l'immobilier. Spécialisée dans le référencement naturel (SEO), je conçois des sites éco-conçus, optimisés pour les moteurs de recherche et respectueux de l'environnement. Confiez-moi votre projet pour une présence en ligne qui se démarque.</p>
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
        <section>
            <h2>A propos</h2>
            <div className='home__apropos'>
                <img src={imgPortrait} alt="Aurélie DEMETRIO - L'Agence Digitale"/>
                <p className='section-text'>Je suis Aurélie DEMETRIO, la fondatrice de L’agence digitale. Passionnée d’informatique, j'ai forgé mon chemin dans le monde numérique au fil d'une carrière riche en expériences. Forte de mes 20 ans d'expérience en gestion dans le domaine du bâtiment et de l'immobilier, je mets à votre service mon expertise pour créer des solutions web adaptées à vos besoins.</p>
            </div>
        </section>

        <Contact/>
        </div>
    );
}
export default Accueil;