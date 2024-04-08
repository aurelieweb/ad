// Realisations.jsx
import React from 'react';
import Banner from '../../components/Banner';
import Portfolio from '../../sections/Portfolio';

function Realisations() {
  const pageTitle = "Nos réalisations";
  const bannerText = "Création et développement de site web sur mesure pour artisan et pme à Thonon";
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
