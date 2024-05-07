import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../../styles/styles.scss';
//import bannerImg from '../../assets/imgBanner.jpg';
import Button from '../../components/Button';


/*Fonction Banner*/ 
function Banner({ pageTitle, bannerClass, bannerText, bannerImg, bannerImgClass, buttonLink, bannerButtonText
 }) {
  return (
    <div className={bannerClass}>
  
      <img className={bannerImgClass} src={bannerImg} alt="Banner" />
      <div className='banner__div'>
      <div className="banner__content banner__content-presentation">
 {/*}       <p className='banner__content-title'>Aurélie Demetrio</p>*/}
        <h1>{pageTitle}</h1>        
        <div className='banner__content-text'>
          <p>{bannerText}</p>
        </div>
        <Link to={buttonLink}>
          <Button id="bannerButton" className="button" text={bannerButtonText}/>
        </Link>
      </div>
      </div>
    </div>
  );
}

export default Banner;
