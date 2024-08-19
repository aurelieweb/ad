import React from 'react';
import Banner from '../../components/Banner';
import Valeur from '../../components/Valeur';
import imgTimeline from '../../assets/TimelineCycle.png';
import Process from '../../sections/Process';
import logoReact from '../../assets/logoReact.jpeg';
import logoWP from '../../assets/logoWP.jpeg';
import logoJS from '../../assets/logoJS.jpeg';
import logoHTML from '../../assets/logoHTML.jpeg';
import logoCSS from '../../assets/logoCSS.jpeg';
import logoNode from '../../assets/logoNodeJS.jpeg';
import logoOxygen from '../../assets/logoOxygen.png';

const buttons = [
    { text: 'Consultation gratuite', link: '/Calendly' }
  ];


function Apropos() {

    const pageTitle = "Mon expertise dans le secteur de la Construction et de l'Immobilier";
    const bannerText = "Découvrez notre histoire, notre engagement dans le secteur du bâtiment et de l'immobilier. Avec une expertise métier solide, nous simplifions la création de sites web pour artisans et PME, en vous offrant des solutions clé en main, rédigées sur mesure pour refléter vos valeurs et votre vision.";
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

            <div className='apropos'>
            <section className='quisuisje' id='apropos__anchor'>
            <h2>Qui suis-je?</h2>
    
            <div className='quisuisje__container'>

                <div className='quisuisje__container-text'>
                    <p>Je suis Aurélie DEMETRIO, la fondatrice de <strong>L’Agence Digitale</strong>. 
                        Avec 20 ans d'expérience dans le domaine du bâtiment et de l'immobilier, mon parcours professionnel a été marqué par une transition vers le monde numérique. En tant que gestionnaire autodidacte, j'ai développé mes compétences numériques tout au long de ma carrière, nourrissant ma curiosité pour les possibilités offertes par la technologie.</p>
                    <p>En 2017, j'ai franchi un nouveau cap en créant mon premier site web. Cette étape a été suivie d'une décision audacieuse en 2021 : celle de reprendre mes études dans le domaine du développement web et du design.</p>
                    <p>Après avoir obtenu mon diplôme en 2023,  j'ai consolidé mon expertise dans le domaine numérique. Mon parcours atypique et mon expérience variée me confèrent une compréhension approfondie des besoins de mes clients.</p>
                </div>
                <img className='timeline-cycle' src={imgTimeline} alt="Mon parcours en quelques dates" />
            </div>    
        </section>

                <section className='mesvaleurs'>
                <h2>Mes valeurs</h2>
                    <Valeur/>
                </section>

                <section className='processus'>
          <h2>Notre méthode</h2>
          <div className='container__processus'>
            <p>Chez L’agence Digitale, nous comprenons que votre temps est précieux.</p>
            <p>C'est pourquoi nous proposons une approche clé en main pour la création de votre site web. De la rédaction du contenu à l'optimisation des médias, nous nous chargeons de chaque détail pour vous permettre de vous concentrer sur ce qui compte vraiment : votre entreprise.</p>
            <p> Découvrez ci-dessous notre processus de création étape par étape :</p>
          </div>
          <Process />
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
        </div>
    )
}

export default Apropos;