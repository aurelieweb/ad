import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button'; // Corrigé ici

const ToolBox = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Resource');
  };

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

      <Button text="Accéder aux ressources" onClick={handleClick} />
    </div>
  );
};

export default ToolBox;
