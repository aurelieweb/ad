import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../../styles/styles.scss';
import Button from '../../components/Button';

/* Fonction Banner */
function Banner({ pageTitle, bannerClass, bannerText, bannerImg, bannerImgClass, buttons }) {
  return (
    <div className={bannerClass}>
      <span className='background'>
        <img className={bannerImgClass} src={bannerImg} alt="Banner" />
        <div className='banner__div'>
          <div className="banner__content banner__content-prestation">
            <h1>{pageTitle}</h1>
            <div className='banner__content-text'>
              <p>{bannerText}</p>
            </div>
            <div className="banner__buttons">
              {buttons.map((button, index) => (
                <Link key={index} to={button.link}>
                  <Button id={`bannerButton-${index}`} className="button" text={button.text} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </span>
    </div>
  );
}

export default Banner;
