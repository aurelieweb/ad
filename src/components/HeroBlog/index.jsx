import React from 'react';
import '../../styles/styles.scss';

function HeroBlog({ pageTitle, bannerClass, heroBlogImg, heroBlogImgClass }) {
  return (
    <div className={bannerClass}>
      <div className="hero__wrapper">
        <img className={heroBlogImgClass} src={heroBlogImg} alt="Blog" />
        <span className="hero__overlay" />
        <div className="hero__content">
          <p>Article</p>
          <h1>{pageTitle}</h1>
        </div>
      </div>
    </div>
  );
}

export default HeroBlog;
