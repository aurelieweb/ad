import React from 'react';
import '../../styles/styles.scss';

function CardService({ serviceName, imageUrl, alt, description }) {
  return (
    <div className="card">
      <img
        src={imageUrl}
        alt={alt || serviceName}
        loading="lazy"
        className="service-image"
      />
      <div className="card__content">
        <h3>{serviceName}</h3>
        <div className="card__content-text">
          {description}
        </div>
      </div>
    </div>
  );
}

export default CardService;
