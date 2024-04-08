import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../../styles/styles.scss';
//import bannerImg from '../../assets/imgBanner.jpg';
import Button from '../../components/Button';

/*Fonction Banner*/ 
function Banner({ pageTitle, bannerText, bannerImg, bannerImgClass }) {
  return (
    <div className="banner" id='accueil'>
      <img className={bannerImgClass} src={bannerImg} alt="Banner" />
      <div className="banner__content">
 {/*}       <p className='banner__content-title'>Aurélie Demetrio</p>*/}
        <h1>{pageTitle}</h1>        
        <div className='banner__content-text'>
          <p>{bannerText}</p>
        </div>
        <Link to='/#contact'>
          <Button id="bannerButton" className="button" text="En savoir plus"/>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
