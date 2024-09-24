import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// Base de données des témoignages
const adviceData = [
    { 
      name: 'Aline',
      advice: 'Aurélie a été incroyablement patiente. Grâce à elle, mon site fonctionne à nouveau parfaitement. Si vous cherchez quelqu\'un qui sait ce qu\'elle fait et qui parle français, je vous la recommande!',
      note: 5,
      date: '15 Septembre 2024'
    },
    { 
      name: 'Elodie',
      advice: 'Aurélie a littéralement transformé mon site ! En une session, elle m\'a montré ce qui clochait et comment y remédier. J\'ai gagné en visibilité et reçois enfin des demandes de contact depuis mon site. Merci encore pour ta disponibilité!',
      note: 5,
      date: '8 Septembre 2024'
    },
    { 
      name: 'Isabelle',
      advice: 'Je ne savais pas par où commencer pour améliorer mon site. Aurélie m\'a donné les clés pour structurer mon contenu et optimiser mes pages. Aurélie à la capacité à rendre les choses compliquées tellement simples. Mon site est plus pro maintenant. Merci',
      note: 5,
      date: '20 Septembre 2024'
    },
    { 
      name: 'Marc',
      advice: 'Le coaching avec Aurélie m\'a ouvert les yeux sur des erreurs que je n\'aurais jamais repérées seul. Elle a une approche très pragmatique et son mini-audit a vraiment boosté la performance de mon site. J\'ai déjà vu une amélioration dans mon trafic. C\'est du concret. Je recommande !',
      note: 4,
      date: '10 Septembre 2024'
    }
];

// Fonction pour afficher les étoiles
function renderStars(note) {
  return Array(5).fill(0).map((_, index) => (
    <FontAwesomeIcon 
      key={index} 
      icon={faStar} 
      className={index < note ? 'star-filled' : 'star-empty'}
    />
  ));
}

function Testimonies() {
  const [expanded, setExpanded] = useState({}); // Stocke l'état d'expansion pour chaque témoignage

  const toggleExpand = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index] // Inverse l'état pour cet index
    }));
  };

  const MAX_LENGTH = 100; // Longueur maximale pour le texte réduit

  return (
    <div className='advice-container'>
      {adviceData.map((testimonial, index) => {
        const isExpanded = expanded[index]; // Vérifie si le texte est actuellement étendu
        const shouldShowExpandButton = testimonial.advice.length > MAX_LENGTH;

        return (
          <div key={index} className="testimonial-item">
            <p className="testimonial-text">
              {isExpanded ? testimonial.advice : `${testimonial.advice.slice(0, MAX_LENGTH)}...`}
              {shouldShowExpandButton && (
                <span 
                  className="toggle-button" 
                  onClick={() => toggleExpand(index)}
                >
                  {isExpanded ? " Lire moins" : " Lire plus"}
                </span>
              )}
            </p>
            <p className="testimonial-author">
              <strong>{testimonial.name}</strong> - <em>{testimonial.date}</em>
            </p>
            <div className="testimonial-stars">
              {renderStars(testimonial.note)} {/* Affichage des étoiles */}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Testimonies;
