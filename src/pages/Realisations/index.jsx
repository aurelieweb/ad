// Realisations.jsx
import React from 'react';
import Banner from '../../components/Banner';
import Portfolio from '../../sections/Portfolio';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const buttons = [
  { text: 'Prendre rendez-vous', link: '/Calendly' }
];

function Realisations() {
  const pageTitle = "Des projets concrets, des impacts réels.";
  const bannerText = "Découvrez commetn j'ai aidé des entreprises à structurer, automatiser et connecter leurs outils pour gagner en efficacité.";


  const bannerImg = require('../../assets/imgBanner_realisation_site_internet.jpg');
  const bannerClass = "banner banner-presentation"
  const bannerImgClass = "banner__img-presentation";

  return (
    <div className='main main-realisation'>
            <Banner 
            pageTitle={pageTitle} 
            bannerClass={bannerClass}
            bannerImg={bannerImg} 
            bannerText={bannerText} 
            bannerImgClass={bannerImgClass} 
            buttons={buttons}/>
            <Portfolio />
            {/*CTA*/}
                  <section className="home__cta-final">
              <div className="cta-final__wrapper">
                <h2>Votre projet mérite une solution sur mesure.</h2>
                <p>Parlons de vos besoins et voyons comment je peux vous aider à atteindre vos objectifs</p>
                <Link to="/Calendly">
                  <Button className="btn-secondary" text="Planifier un appel gratuit" />
                </Link>
              </div>
            </section>
    </div>
  );
}

export default Realisations;
