import React from 'react';
import '../../styles/styles.scss';


function CardService({ serviceName, imageUrl, description, }) {
  return (
    <div className="card">
      <div className="card__content">
        <img className='card__content-img' src={imageUrl} alt={serviceName} />
        <h3>{serviceName}</h3>
        <div className='card__content-text'>
          {description}
        </div>
      </div>
    </div>
  );
}

export default CardService;
