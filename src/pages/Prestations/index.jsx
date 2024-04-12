import React from 'react';
import Banner from '../../components/Banner';
import Services from '../../sections/Services';




function Prestations() {

    const pageTitle = "Nos services web pour Artisan et PME";
    const bannerText = "Découvrez nos services numériques sur mesure pour artisans et PME du secteur du bâtiment et de l'immobilier. De la création de sites web attractifs à la gestion de votre présence en ligne, nous vous proposons des solutions adaptées pour réussir sur internet.";
    const bannerImg = require('../../assets/imgBanner.jpg');
    const bannerImgClass = "banner__image"

    return (
      <div className='main'>
        <Banner pageTitle={pageTitle} bannerImg={bannerImg} bannerText={bannerText} bannerImgClass={bannerImgClass}/>
        <Services />
        
        </div>
    )
}

export default Prestations;