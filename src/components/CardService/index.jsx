import React from 'react';
import '../../styles/styles.scss';


function CardService({ serviceName, icon, description }) {
  return (
    <div className="card">
      <div className="card__content">
        {/* Affichage de l'icône passé en tant que prop */}
        <span className='card__content-icon'>
          {icon}  {/* L'icône est déjà JSX, pas besoin d'utiliser <i> */}
        </span>
        <h3>{serviceName}</h3>
        <div className='card__content-text'>
        
          {description}
        </div>
      </div>
    </div>
  );
}

export default CardService;
