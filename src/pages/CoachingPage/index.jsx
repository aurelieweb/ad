import React, { useEffect } from "react";
import Button from '../../components/Button';
import Banner from '../../components/Banner';

const buttons = [
  { text: 'Consultation gratuite', link: '/Calendly' }
];

function CoachingPage() {
  const pageTitle = "Pimpe ton site : Le coaching qui va transfomer ton site";
  const bannerText = "A modifier";
  const bannerImg = require('../../assets/img_coaching_creation_site_web.jpg');
  const bannerClass = "banner banner-presentation";
  const bannerImgClass = "banner__img-presentation";


  useEffect(() => {
    // Chargement du script Zcal
    const script = document.createElement("script");
    script.src = "https://static.zcal.co/embed/v1/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='main'>
    <Banner
      pageTitle={pageTitle}
      bannerClass={bannerClass}
      bannerImg={bannerImg}
      bannerText={bannerText}
      bannerImgClass={bannerImgClass}
      buttons={buttons}
    />
    <div className="zcal-page">
      <h1>Planifiez votre rendez-vous</h1>
      <div className="zcal-inline-widget">
        <a href="https://zcal.co/i/C-ofsADs">Pimpe ton site - Schedule a meeting</a>
      </div>
    </div>
    </div>
  );

}


export default CoachingPage;
