import React from 'react';
import '../../styles/styles.scss';
import bannerImg from '../../assets/imgBanner.jpg';
import Button from '../../components/Button';

/*Fonction Banner*/ 
function Banner({ pageTitle }) {
  return (
    <div className="banner">
      <img className="banner__image" src={bannerImg} alt="Banner" />
      <div className="banner__content">
 {/*}       <p className='banner__content-title'>Aurélie Demetrio</p>*/}
        <h1>{pageTitle}</h1>        
        <div className='banner__content-text'>
          <p>Création et développement de site web sur mesure</p>
        </div>
        <Button id="bannerButton" text="Devis en ligne" />
      </div>
    </div>
  );
}

export default Banner;
