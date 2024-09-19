import React from 'react';
import '../../styles/styles.scss';


function CardService({ serviceName, img, description }) {
  return (
    <div className="card">
      {img}  {/* L'icône est déjà JSX, pas besoin d'utiliser <i> */}
      <div className="card__content">
        {/* Affichage de l'icône passé en tant que prop */}

        
        
        <h3>{serviceName}</h3>
        <div className='card__content-text'>
        
          {description}
        </div>
      </div>
    </div>
  );
}

export default CardService;
