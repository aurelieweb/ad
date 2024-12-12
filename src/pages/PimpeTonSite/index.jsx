import React from "react";
import Banner from "../../components/Banner";
import ServiceDetail from "../../components/ServiceDetail";
import Testimonies from "../../components/Testimonies";
import Faq from "../../components/Faq";
import Button from "../../components/Button";
import { faPlay, faPlus, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import imgPimpeTonSite from "../../assets/imgPimpetonSite_lecoaching.png";

const buttons = [
  { text: "Réserve ton coaching", link: "/Coaching" },
];

const sections = [
  {
    title: "Pourquoi ?",
    subtitle: null,
    items: [
      `"Pourquoi mon site n'attire pas de visiteurs ?"`,

      `"Comment améliorer mon site internet sans être expert ?"`,

      "Avec l'audit, on débusque les problèmes.",
      "Avec le plan d'action, tu sais exactement quoi faire.",
      "Le coaching débloque les obstacles et booste la performance.",
    ],
    icon: faPlay,
    image: imgPimpeTonSite,
  },
  {
    title: "Ce que comprend 'Pimpe ton site'",
    subtitle: null,
    items: [
      "Un ebook pratique pour améliorer la performance de votre site.",
      "Un mini audit pour identifier les problèmes (ex. : site lent, visibilité Google).",
      "Un coaching 1:1 de deux heures pour corriger et optimiser votre site.",
      "Un rapport PDF avec un plan d’action concret.",
    ],
    icon: faPlay,
    image: imgPimpeTonSite,
  },
  {
    title: "Bénéfices",
    subtitle: null,
    items: [
      "Plus de visites grâce à un meilleur référencement.",
      "Un site professionnel et performant.",
      "Correction des erreurs techniques.",
      "Amélioration de l'expérience utilisateur.",
      "Un site qui reflète votre expertise.",
    ],
    icon: faPlus,
    image: imgPimpeTonSite,
  },
];

const faqDataPimpeTonSite = [
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

function PimpeTonSite() {
  const pageTitle = "Pimpe ton site : Le coaching qui va transformer ton site";
  const bannerText = "A modifier";
  const bannerImg = require('../../assets/imgBanner2.jpeg')
  const bannerClass = "banner banner-presentation";
  const bannerImgClass = "banner__img-presentation";

  return (
    <div className="main">
      <Banner
        pageTitle={pageTitle}
        bannerClass={bannerClass}
        bannerImg={bannerImg}
        bannerText={bannerText}
        bannerImgClass={bannerImgClass}
        buttons={buttons}
      />

      <div className="container__services">
        <h2>Boostez la performance de votre site web avec "Pimpe ton site"</h2>
        <p className="container__section-text">
          Vous avez créé votre propre site internet, mais vous n'obtenez pas les résultats que vous espériez ?
          "Pimpe ton site" est l’accompagnement qu’il vous faut pour transformer votre site et attirer plus de visiteurs.
        </p>

        {/* Sections dynamiques */}
        <ServiceDetail sections={sections} />

        <div className="prix">
          <p>299,00€</p>
          <p>Modalités de paiement : Explique que le paiement se fait via Stripe et que la réservation s’effectue via Zcal.</p>
        </div>

        <div className="testimonies">
          <Testimonies />
        </div>

        <Faq FaqData={faqDataPimpeTonSite} />
        <Button text="Passez à l'action" link="/Coaching" />
      </div>
    </div>
  );
}

export default PimpeTonSite;
