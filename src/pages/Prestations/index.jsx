import React from 'react';
import Banner from '../../components/Banner';
import Services from '../../sections/Services';



const buttons = [
    { text: 'Consultation gratuite', link: '/Calendly' }
  ];

function Prestations() {

    const pageTitle = "Création de sites, intégrations Make & optimisation digitale";
    const bannerText = "CRM, workflows automatisés, formulaires intelligents, API et IA pour connecter votre site à vos outils métiers et réduire les tâches manuelles.";
    const bannerClass = "banner banner-presentation"
    const bannerImg = require('../../assets/ImgBanner2.jpg');
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
        <Services/>
        
        </div>
    )
}

export default Prestations;