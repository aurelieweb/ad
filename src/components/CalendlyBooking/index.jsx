import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faEnvelope} from '@fortawesome/free-solid-svg-icons';

const CalendlyBooking = () => {
  return (
    <Link to="/Calendly" target="_blank" rel="noopener noreferrer" className='booking-link button-dark-background'>
    <div className="booking-card">
      <span className="booking-icon">
      <FontAwesomeIcon icon={faCalendarCheck} />
      </span>
      <div className="booking-text">
        <p>Réservez votre rendez-vous dès maintenant</p>
        <p>Vous pouvez également nous contacter par e-mail avant de prendre rendez-vous : <a href="mailto:contact@adlagencedigitale.fr"> <FontAwesomeIcon icon={faEnvelope} /></a></p>
        {/* Utilisation du composant Link pour rediriger vers la page Calendly */}
        
      </div>
    </div>
    </Link>
  );
}

export default CalendlyBooking;
