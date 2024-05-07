import React from 'react';
import Banner from '../../components/Banner';
import Valeur from '../../components/Valeur';
import imgTimeline from '../../assets/TimelineCycle.svg'


function Apropos() {

    const pageTitle = "A propos : Mon expertise dans le secteur de la Construction et de l'Immobilier";
    const bannerText = "Découvrez notre histoire, notre engagement dans le secteur du bâtiment et de l'immobilier. Avec une expertise métier solide, nous simplifions la création de sites web pour artisans et PME, en vous offrant des solutions clé en main, rédigées sur mesure pour refléter vos valeurs et votre vision.";
    const bannerImg = require('../../assets/imgPortrait.png');
    const bannerClass = "banner banner-presentation"
    const bannerImgClass = "banner__img-presentation";
    const bannerButtonText = "Prendre rendez-vous"
    const buttonLink = "/Calendly";

    return (
      <div className='main'>
       <Banner 
            pageTitle={pageTitle} 
            bannerClass={bannerClass}
            bannerImg={bannerImg} 
            bannerText={bannerText} 
            bannerImgClass={bannerImgClass} 
            buttonLink={buttonLink} 
            bannerButtonText={bannerButtonText}/>

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


            </div>
        </div>
    )
}

export default Apropos;