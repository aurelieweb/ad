import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faCalendarCheck, faFileInvoice, faHandshake, faPersonDigging, faLaptopCode, faSwatchbook, faBrush, faRocket, } from '@fortawesome/free-solid-svg-icons';


const Process = () => {
  const [openIndices, setOpenIndices] = useState([]);

  const processSteps = [
    {
      title: "Rendez-vous initial (1h)",
      content: [
        "Discussion approfondie de votre projet par visio ou téléphone.",
        "Compréhension de vos besoins et objectifs spécifiques.",
      ],
      icon: faCalendarCheck
    },
    {
      title: "Devis gratuit",
      content: [
        "Élaboration d'un devis en fonction de vos exigences."
      ],
      icon: faFileInvoice
    },
    {
      title: "Acompte (30%)",
      content: [
        "Paiement d'un acompte de 30% pour démarrer le projet."
        
      ],
      icon: faHandshake
    },
    {
      title: "Cahier des charges collaboratif",
      content: [
        "Élaboration d'un cahier des charges détaillé en collaboration avec vous.",
        "Clarification de chaque aspect du projet pour éviter les imprévus."
      ], 
      icon: faPersonDigging
    },
    {
      title: "Design personnalisé",
      content: [
        "Proposition d'une charte graphique en accord avec votre identité visuelle."
      ],
      icon: faSwatchbook
    },
    {
      title: "Maquette numérique (si incluse dans votre forfait)",
      content: [
        "Création d'une maquette pour visualiser l'apparence et l'expérience utilisateur de votre site.",
        "Validation de la maquette avant de passer à la phase de développement."
      ],
      icon: faBrush
    },
    {
      title: "Développement et ajustements",
      content: [
        "Intégration du site web avec les technologies modernes pour une performance optimale.",
        "Présentation d'une première version pour recueillir vos retours et effectuer des ajustements si nécessaire."
      ],
      icon: faLaptopCode
    },
    {
      title: "Déploiement",
      content: [
        "Après validation, je t'envoie la facture.",
        "Mise en ligne du site à réception du paiement."
      ],
      icon: faRocket
    }
  ];

  const handleCardClick = (index) => {
    const currentIndex = openIndices.indexOf(index);
    if (currentIndex === -1) {
      // If the index is not in the openIndices array, add it
      setOpenIndices([...openIndices, index]);
    } else {
      // If the index is already in the openIndices array, remove it
      setOpenIndices(openIndices.filter((i) => i !== index));
    }
  };

  return (
    <section id='process'>
      <div className='process__container'>
        {processSteps.map((card, index) => (
          <div key={index} className='process__card' onClick={() => handleCardClick(index)}>
            <div className="process__card-title">
              <div className="card__title-div">
                <FontAwesomeIcon className="process__card-icon" icon={card.icon} />
                <h3>{card.title}</h3>
              </div>
              <FontAwesomeIcon icon={openIndices.includes(index) ? faChevronUp : faChevronDown} />
            </div>

            {openIndices.includes(index) && (
              <div className="process__card-text">
                {card.content.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;
