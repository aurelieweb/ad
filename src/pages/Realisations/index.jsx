// Realisations.jsx
import React from 'react';
import Banner from '../../components/Banner';
import Portfolio from '../../sections/Portfolio';
import Maintenance from '../../components/MaintenancePage'

const buttons = [
  { text: 'Prendre rendez-vous', link: '/Calendly' }
];

function Realisations() {
  const pageTitle = "Découvrez nos réalisations";
  const bannerText = "Explorez notre portfolio pour trouver l'inspiration dont vous avez besoin pour votre projet. Chaque réalisation est le fruit d'un travail passionné et créatif, conçu pour mettre en valeur le potentiel unique de chaque client";


  const bannerImg = require('../../assets/imgBanner_realisation_site_internet.jpg');
  const bannerClass = "banner banner-presentation"
  const bannerImgClass = "banner__img-presentation";

  return (
    <div className='main main-realisation'>
            <Maintenance />
            <Banner 
            pageTitle={pageTitle} 
            bannerClass={bannerClass}
            bannerImg={bannerImg} 
            bannerText={bannerText} 
            bannerImgClass={bannerImgClass} 
            buttons={buttons}/>
            <Portfolio />
    </div>
  );
}

export default Realisations;
