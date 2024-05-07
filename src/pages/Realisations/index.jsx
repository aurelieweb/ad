// Realisations.jsx
import React from 'react';
import Banner from '../../components/Banner';
import Portfolio from '../../sections/Portfolio';

function Realisations() {
  const pageTitle = "Découvrez nos réalisations";
  const bannerText = "Explorez notre portfolio pour trouver l'inspiration dont vous avez besoin pour votre projet. Chaque réalisation est le fruit d'un travail passionné et créatif, conçu pour mettre en valeur le potentiel unique de chaque client";


  const bannerImg = require('../../assets/imgBanner.jpg');
  const bannerClass = "banner banner-prestation"
  const bannerImgClass = "banner__image";
  const bannerButtonText = "En savoir plus"
  const buttonLink = "/contact";

  return (
    <div className='main'>
            <Banner 
            pageTitle={pageTitle} 
            bannerClass={bannerClass}
            bannerImg={bannerImg} 
            bannerText={bannerText} 
            bannerImgClass={bannerImgClass} 
            buttonLink={buttonLink} 
            bannerButtonText={bannerButtonText}/><Portfolio />
    </div>
  );
}

export default Realisations;
