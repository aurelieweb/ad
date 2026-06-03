import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../../styles/styles.scss';
import Button from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faChartLine, faGear } from '@fortawesome/free-solid-svg-icons';

/* Fonction Banner */
function Banner({ pageTitle, bannerClass, bannerText, bannerImg, bannerImgClass, buttons }) {
  const bannerBenefits = [
  {
    icon: faClock,
    text: ["Gain de temps", "immédiat"],
  },
  {
    icon: faChartLine,
    text: ["Organisation", "optimisée"],
  },
  {
    icon: faGear,
    text: ["Processus", "automatisés"],
  },
];

  return (
    <div className={bannerClass}>
      <img className={bannerImgClass} src={bannerImg} alt="Banner" />

      <div className="banner__div">
        <div className="banner__content">
          <h1>
            {pageTitle}
          </h1>
            <div>
              <p className='banner__subtitle'>Moins de tâches.</p>
              <p className='banner__subtitle'>Plus d'efficacité.</p>
              <span className='banner__trait'></span>
            </div>


          <div className="banner__content-text">
            <p>{bannerText}</p>
          </div>

          <div className="banner__buttons">
            {buttons.map((button, index) => {
              const isPrimary = index === 0;

              return (
                <Link
                  key={index}
                  to={button.link}
                  className={`banner__button-link ${
                    isPrimary ? 'banner__button-link--primary' : 'banner__button-link--secondary'
                  }`}
                >
                  {isPrimary ? (
                    <Button
                      id={`bannerButton-${index}`}
                      className="button banner__button-primary"
                      text={button.text}
                      
                    />
                  ) : (
                    <span className="banner__button-secondary">
                      {button.text}
                      <span className="banner__button-arrow"> →</span>
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
          <div className="banner__benefits">
            <div className="banner__separator-benefits" />
            {bannerBenefits.map((benefit, index) => (
              <React.Fragment key={index}>
                <div className="banner__benefit">
                  <FontAwesomeIcon icon={benefit.icon} className="banner__benefit-icon" />
                  <p>
                    {benefit.text[0]}<br />
                    {benefit.text[1]}
                  </p>
                </div>

                {index < bannerBenefits.length - 1 && (
                  <div className="banner__separator" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;