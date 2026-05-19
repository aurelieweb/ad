import React from 'react';
import Banner from '../../components/Banner';
import Services from '../../sections/Services';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faRepeat, faForward, faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";

const buttons = [
  { text: 'Consultation gratuite', link: '/Calendly' }
];

const stats = [
  {
    icon: faClock,
    value: '+10h',
    text: 'Gagnées par semaine en moyenne'
  },
  {
    icon: faRepeat,
    value: '-40%',
    text: 'De tâches répétitives en moins'
  },
  {
    icon: faForward,
    value: '+25%',
    text: 'De productivité pour nos clients'
  },
  {
    icon: faPuzzlePiece,
    value: '100%',
    text: 'De solutions adaptées à votre activité'
  }
];

function Prestations() {
  const pageTitle = "Des solutions digitales pour des entreprises plus fluides et efficaces";
  const bannerText = "J'aide les indépendants, entreprises et équipes à structurer leurs processus, automatiser les tâches répétitives et connecter leurs outils pour gagner du temps et mieux piloter leur activité";
  const bannerClass = "banner banner-presentation";
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
        buttons={buttons}
      />

      <Services/>

      <section className="prestations__stats">
        {stats.map((stat, index) => (
          <div className="prestations__stat-item" key={index}>
            <FontAwesomeIcon icon={stat.icon} className="prestations__stat-icon" />
            <h3>{stat.value}</h3>
            <p>{stat.text}</p>
          </div>
        ))}
      </section>

      <section className="home__cta-final">
        <div className="cta-final__wrapper">
          <h2>Votre organisation digitale peut être plus simple.</h2>
          <p>Discutons de vos besoins et voyons comment je peux vous aider à gagner en efficacité</p>
          <Link to="/Calendly">
            <Button className="btn-secondary" text="Planifier un appel gratuit" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Prestations;