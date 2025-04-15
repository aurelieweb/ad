import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button'; // Corrigé ici

const ToolBox = () => {
  return (
    <div className="booking-card">
      <span className="booking-icon">
        <FontAwesomeIcon icon={faToolbox} />
      </span>

      <div className="booking-text">
        <h3>Ma boîte à outils digitale</h3>
        <p>
          Prompts, tutos, guides pratiques… Ce que j’utilise (et recommande) pour passer à l’action sans vous noyer dans la technique.
        </p>
      </div>

      <Link to="/ressources">
        <Button text="Accéder aux ressources" />
      </Link>
    </div>
  );
};

export default ToolBox;
