import React from 'react';
import Banner from '../../components/Banner';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

//import Valeur from '../../components/Valeur';
import imgTimeline from '../../assets/TimelineCycle.png';
import Process from '../../sections/Process';
import logoReact from '../../assets/logoReact.jpeg';
import logoWP from '../../assets/logoWP.jpeg';
import logoJS from '../../assets/logoJS.jpeg';
import logoHTML from '../../assets/logoHTML.jpeg';
import logoCSS from '../../assets/logoCSS.jpeg';
import logoNode from '../../assets/logoNodeJS.jpeg';
import logoOxygen from '../../assets/logoOxygen.png';
import logoMake from '../../assets/make-advanced.png';
import badgeMake from "../../assets/make-advanced.png";
import imgTeam from "../../assets/imgTeam.png";
import imgMethodeComprendre from "../../assets/iconMethodeComprendre.png";
import imgMethodeConcevoir from "../../assets/iconMethodeConcevoir.png";
import imgMethodeMettreenplace from "../../assets/iconMethodeMettreenplace.png";
import imgMethodeOptimiser from "../../assets/iconMethodeOptimiser.png";

const buttons = [
    { text: 'Consultation gratuite', link: '/Calendly' }
  ];


function Apropos() {

    const pageTitle = "Entrepreneur, consultante et passionnée par l'oganisation et la tech.";
    const bannerText = "J'accompagne les entreprises dans leur transformation digitale avec une approche humaine, stratégique et pragmatique";
    const bannerImg = require('../../assets/imgBanner4.png');
    const bannerClass = "banner banner-presentation"
    const bannerImgClass = "banner__img-apropos banner__img-presentation";

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
              <div className='quisuisje__container-div'>
                <img src={imgTeam} alt="Aurélie DEMETRIO - Création de site web à Thonon" />
               <div className='quisuisje__container-text'>
    <p>
        Je suis Aurélie DEMETRIO, fondatrice de <strong>L’Agence Digitale</strong>.
        J’accompagne les entrepreneurs, PME et professionnels de terrain dans leur
        transformation digitale avec une approche humaine, stratégique et pragmatique.
    </p>

    <p>
        Avant le numérique, j’ai évolué pendant plus de 20 ans dans des environnements
        opérationnels exigeants liés au bâtiment et à l’immobilier : gestion,
        coordination, relation client, suivi de projets et organisation.
    </p>

    <p>
        Cette expérience de terrain influence encore aujourd’hui ma façon de travailler :
        je crée des systèmes pensés pour la réalité des entreprises, avec des outils
        utiles, structurés et adaptés au quotidien.
    </p>

    <p>
        Mon expertise combine aujourd’hui développement web, automatisation,
        outils connectés, structuration des process et intelligence artificielle
        pour aider les entreprises à gagner du temps et fluidifier leur organisation.
    </p>

    <p>
        Mon objectif est simple :
        permettre aux professionnels de se concentrer sur leur métier pendant que
        leurs outils travaillent enfin ensemble efficacement.
    </p>
</div>
              </div>
            </div>    
        </section>

                {/*<section className='mesvaleurs'>
                <h2>Quelles sont mes valeurs?</h2>
                    <Valeur/>
                </section>*/}
          {/*<div className="home__badge">
            <img 
              src={badgeMake} 
              alt="Certification Make - Aurélie DEMETRIO | Developpeuse et consultante en transformation digiale, | Experte en automatisation Make" 
              className="badge-make"
            />
            <p>
              <strong>Certifiée Make Advanced</strong> et forte de 20 ans d’expérience opérationnelle, 
              je conçois des systèmes digitaux qui relient votre site web, vos outils métiers et vos processus internes.
            </p>
          </div>*/}
                <section className='processus'>
                  <p className='section-tag'>MA METHODE</p>
          <h2>Comment se déroule un projet de site web avec l'Agence Digitale?</h2>
          <div className='container__processus'>
            <div className='expertise__container'>
              <div className='expertise__item'>
                <img className='expertise__img' src={imgMethodeComprendre} alt='Comprendre vos besoins' />
                <h4>Comprendre</h4>
                <p>
                  Analyse de votre fonctionnement, de vos outils et de vos problématiques
                  pour identifier les points de blocage et les opportunités d’optimisation.
                </p>
              </div>

              <div className='expertise__item'>
                <img className='expertise__img' src={imgMethodeConcevoir}  alt='Structurer les process' />
                <h4>Structurer</h4>
                <p>
                  Mise en place d’une organisation claire et fluide pour simplifier les
                  échanges, centraliser les informations et gagner du temps au quotidien.
                </p>
              </div>

              <div className='expertise__item'>
                <img className='expertise__img' src={imgMethodeMettreenplace} alt='Automatiser les tâches' />
                <h4>Automatiser</h4>
                <p>
                  Connexion de vos outils et automatisation des tâches répétitives afin de
                  fluidifier votre activité et limiter les actions manuelles.
                </p>
              </div>

              <div className='expertise__item'>
                <img className='expertise__img' src={imgMethodeOptimiser} alt='Faire évoluer votre activité' />
                <h4>Faire évoluer</h4>
                <p>
                  Création de solutions durables et évolutives pensées pour accompagner le
                  développement de votre activité sur le long terme.
                </p>
              </div>

            </div>
          </div>
          </section>

       {/*} <section>
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
                    <img src={logoMake}  alt="logo Oxygen builder - Aurélie DEMETRIO, Experte Make Certifiée"/>
                </div>
        </section>*/}
      <section className="home__cta-final">
        <div className="cta-final__wrapper">
          <h2>Travaillons ensemble</h2>
          <p>Un projet en tête? Parlons-en et voyons comment je peux vous aider à aller plus loin.</p>
          <Link to="/Calendly">
            <Button className="btn-secondary" text="Planifier un appel gratuit" />
          </Link>
        </div>
      </section>

            </div>
        </div>
    )
}

export default Apropos;