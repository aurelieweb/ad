import React from 'react';
import Banner from '../../components/Banner';
import Services from '../../sections/Services';



const buttons = [
    { text: 'Consultation gratuite', link: '/Calendly' }
  ];

function Prestations() {

    const pageTitle = "Nos services web pour Artisan et PME";
    const bannerText = "Découvrez nos services numériques sur mesure pour artisans et PME du secteur de la Construction et de l'Immobilier. De la création de sites web attractifs à la gestion de votre présence en ligne, nous vous proposons des solutions adaptées pour réussir sur internet.";
    const bannerClass = "banner banner-prestation"
    const bannerImg = require('../../assets/imgBanner2.jpg');
    const bannerImgClass = "banner__image";

    return (
      <div className='main'>
       <Banner 
            pageTitle={pageTitle} 
            bannerClass={bannerClass}
            bannerImg={bannerImg} 
            bannerText={bannerText} 
            bannerImgClass={bannerImgClass} 
            buttons={buttons}/>
        <Services/>
        
        </div>
    )
}

export default Prestations;