import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../../styles/styles.scss';

function Card({ serviceName, servicePrice, prestation }) {
  return (
    <div className="card">
      <div className="card__content">
      <div className='card__content-text'>
        <h3>{serviceName}</h3>
        <div className='card__content-prestation'>
          <ul>
            {prestation && prestation.map((item, index) => (
              <li key={index}>
                <div>{item.inclus ? (
                  <FontAwesomeIcon icon={faCheck} className="icon-check" />
                ) : (
                  <FontAwesomeIcon icon={faTimes} className="icon-times" />
                )}</div>
                <p>{item.nom}</p>
              </li>
            ))}
          </ul>
        </div>
        </div>
        <div className='card__content-price'><p>A partir de: {servicePrice}</p></div>
      </div>
    </div>
  );
}

export default Card;
