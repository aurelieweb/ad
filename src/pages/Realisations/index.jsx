// Realisations.jsx
import React from 'react';
import Banner from '../../components/Banner';
import Portfolio from '../../sections/Portfolio';

function Realisations() {
  const pageTitle = "Découvrez nos réalisations";
  const bannerText = "Explorez notre portfolio pour trouver l'inspiration dont vous avez besoin pour votre projet. Chaque réalisation est le fruit d'un travail passionné et créatif, conçu pour mettre en valeur le potentiel unique de chaque client";


  const bannerImg = require('../../assets/imgBanner.jpg');
  const bannerImgClass = "banner__image"


  return (
    <div className='main'>
      <Banner pageTitle={pageTitle} bannerImg={bannerImg} bannerText={bannerText} bannerImgClass={bannerImgClass}/>
      <Portfolio />
    </div>
  );
}

export default Realisations;
