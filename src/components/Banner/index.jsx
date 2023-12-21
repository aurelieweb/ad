import React from 'react';
import '../../styles/styles.scss';
import bannerImg from '../../assets/imgBanner.jpg';

/*Fonction Banner*/ 
function Banner({ pageTitle }) {
  return (
    <div className="banner">
      <img className="banner-image" src={bannerImg} alt="Banner" />
      <div className="banner-content">
        <p>Aurélie Demetrio</p>
        <h1>{pageTitle}</h1>
      </div>
    </div>
  );
}

export default Banner;
