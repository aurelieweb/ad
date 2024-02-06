import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../../styles/styles.scss';
import bannerImg from '../../assets/imgBanner.jpg';
import Button from '../../components/Button';

/*Fonction Banner*/ 
function Banner({ pageTitle }) {
  return (
    <div className="banner" id='accueil'>
      <img className="banner__image" src={bannerImg} alt="Banner" />
      <div className="banner__content">
 {/*}       <p className='banner__content-title'>Aurélie Demetrio</p>*/}
        <h1>{pageTitle}</h1>        
        <div className='banner__content-text'>
          <p>Création et développement de site web sur mesure pour artisan et pme à Thonon</p>
        </div>
        <Link to='/#contact'>
          <Button id="bannerButton" className="button" text="En savoir plus"/>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
