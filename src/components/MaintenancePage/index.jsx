import React from 'react';
import '../../styles/styles.scss';
import imgMaintenance from '../../assets/imgMaintenance.png';

function Maintenance({ onClose }) {
  return (
    <div className='maintenance-overlay'>
      <div className='maintenance'>

        <button className="maintenance__close" onClick={onClose}>
          ✕
        </button>

        <div className='maintenance__div'>
          <img
            className="maintenance__div-img"
            src={imgMaintenance}
            alt="Page en cours de maintenance"
          />

          <div className='maintenance__div-text'>
            <p className='maintenance__div-title'>
              Votre site fait peau neuve…
            </p>

            <p className='maintenance__div-paragraph'>
              Il est en pleine métamorphose : relooking express,
              nouvelles fonctionnalités et optimisation.
            </p>

            <p className='maintenance__div-paragraph'>
              Quelques petits bugs peuvent se glisser pendant la manœuvre
              (promis, je les surveille de près).
              Merci pour votre visite et votre confiance —
              je reviens en version 2.0 plus vite que mon thé ne refroidit 🍵
            </p>

            <p className='maintenance__div-paragraph'>
              Aurélie
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maintenance;