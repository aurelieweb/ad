import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';


const Faq = () => {
  const [openIndices, setOpenIndices] = useState([]);

  const FaqData = [
    {
      title: "Combien de temps dure le coaching \"Pimpe ton site\" ?",
      content: [
        "Le coaching dure 2 heures. Cette session est entièrement personnalisée et dédiée à résoudre les problèmes spécifiques que vous rencontrez sur votre site web, avec des solutions immédiates et des conseils actionnables.",
      ],
      icon: faCircleQuestion
    },
    {
      title: "Que faire si je ne suis pas satisfait des résultats ?",
      content: [
        "Mon objectif est que vous repartiez avec des solutions concrètes et efficaces. Si à la fin du coaching vous n’êtes pas entièrement satisfait, nous évaluerons ensemble ce qui pourrait être amélioré, et un suivi complémentaire pourra être proposé si nécessaire."
      ],
      icon: faCircleQuestion
    },
    {
      title: "Quels types d’améliorations sont couvertes par le coaching ?",
      content: [
        "Le coaching couvre les aspects essentiels d'un site performant : l'amélioration de la vitesse de chargement, la correction des erreurs qui nuisent à l'expérience utilisateur, la structure du site, la visibilité sur les moteurs de recherche (SEO), et bien plus encore. Je m'adapte aux besoins spécifiques de votre site."
        
      ],
      icon: faCircleQuestion
    },
    {
      title: "Je ne suis pas un expert en informatique, ce coaching est-il fait pour moi ?",
      content: [
        "Absolument ! Le coaching est spécialement conçu pour les entrepreneurs qui gèrent eux-mêmes leur site, même sans compétences techniques avancées. Vous repartirez avec des solutions simples à mettre en place, expliquées de manière claire et accessible."
      ], 
      icon: faCircleQuestion
    },
    {
      title: "Que se passe-t-il si je ne connais pas les problèmes de mon site ?",
      content: [
        "Pas de souci ! C’est justement pour cela que j’inclus un mini audit dans le service. Je détecte les erreurs clés de votre site, et nous travaillons ensemble pour les corriger pendant le coaching."
      ],
      icon: faCircleQuestion
    },
    {
      title: "Puis-je bénéficier d’un suivi après le coaching ?",
      content: [
        "Oui, après le coaching, vous recevrez un compte-rendu avec un plan d'action détaillé à suivre. Si vous avez besoin de clarifications supplémentaires ou d’un suivi pour implémenter les recommandations, vous pouvez bénéficier d’un support complémentaire."
      ],
      icon: faCircleQuestion
    },
    {
      title: "Mon site est déjà en ligne, est-il trop tard pour l'améliorer ?",
      content: [
        "Il n’est jamais trop tard pour améliorer votre site ! Le coaching est justement fait pour ceux qui ont déjà un site en place et qui souhaitent l’optimiser pour attirer plus de visiteurs et mieux refléter leur professionnalisme."
      ],
      icon: faCircleQuestion
    },
    {
      title: "Est-ce que le coaching \"Pimpe ton site\" garantit plus de visiteurs ?",
      content: [
        "ABien que je ne puisse pas garantir un nombre précis de visiteurs, le coaching améliore considérablement les aspects techniques et structurels de votre site, augmentant ainsi vos chances d’apparaître mieux positionné dans les moteurs de recherche et d'attirer plus de trafic."
      ],
      icon: faCircleQuestion
    },
    {
        title: "Je manque de temps, est-ce que ce coaching demande beaucoup d’investissement après la session ?",
        content: [
          " coaching est conçu pour vous apporter des solutions rapides et actionnables. Le plan d’action que vous recevrez est structuré de manière à vous faire gagner du temps en optimisant efficacement votre site sans avoir à y passer des heures."],
        icon: faCircleQuestion
    },
    {
        title: "Est-ce que le coaching \"Pimpe ton site\" garantit plus de visiteurs ?",
        content: [
          "Le paiement pour le coaching \"Pimpe ton site\" se fait en une seule fois via Stripe lors de la réservation. Si vous avez des questions sur le paiement, n’hésitez pas à me contacter directement.",
        ],
        icon: faCircleQuestion
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
        {FaqData.map((card, index) => (
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

export default Faq;
