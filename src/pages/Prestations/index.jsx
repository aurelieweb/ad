import React from 'react';
import Banner from '../../components/Banner';
import Services from '../../sections/Services';



const buttons = [
    { text: 'Consultation gratuite', link: '/Calendly' }
  ];

function Prestations() {

    const pageTitle = "Création de site internet et automatisations pour artisans, entrepreneurs et PME";
    const bannerText = "Un site web vraiment utile, des outils connectés à votre quotidien, et plus de temps pour votre métier.";
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