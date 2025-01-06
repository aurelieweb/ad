import React from "react";
import Banner from "../../components/Banner";
import ServiceDetail from "../../components/ServiceDetail";
import Testimonies from "../../components/Testimonies";
import Faq from "../../components/Faq";
import Button from "../../components/Button";
import Card from "../../components/Card"
import { faPlay, faPlus, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import imgPimpeTonSite from "../../assets/imgPimpetonSite_lecoaching.png";

const buttons = [
  { text: "Réserve ton coaching", link: "/Coaching" },
];

const sections = [
  {
    title: "Les problèmes fréquents des sites web (et comment les résoudre)",
    subtitle: null,
    items: [
      "Pourquoi mon site n'attire pas de visiteurs ?",
      "Comment améliorer mon site internet sans être expert ?",
      "Avec un audit ciblé, identifiez et corrigez les problèmes techniques majeurs",
      "Avec le plan d'action, vous savez exactement quoi faire.",
      "Le coaching débloque les obstacles et booste la performance.",
    ],
    icon: faPlay,
    image: imgPimpeTonSite,
  },
  {
    title: "Coaching 'Pimpe ton site' : contenu et étapes clés",
    subtitle: null,
    items: [
     "Une session d'introduction pour comprendre vos objectifs et adapter l'accompagnement (15min)",
      "Un mini audit pour identifier les problèmes du site(ex. : site lent, visibilité Google, identité visuelle).",
      "Un coaching individuel (1h30)",
      "Un plan d'action PDF détaillé avec des étapes claires pour atteindre vos objectifs",
      "Une session finale (30 min)"
    ],
    icon: faPlay,
    image: (
      <iframe
      className="responsive-iframe" 
      src="https://www.youtube.com/embed/9RDeIwfJvhE"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>)
  },
  {
    title: "Ce que vous gagnez avec Pimpe ton site : performance et confiance.",
    subtitle: null,
    items: [
      "Plus de visites grâce à un meilleur référencement.",
      "Un site web rapide, ergonomique et professionnel.",
      "Diagnostic et correction des erreurs qui ralentissent votre site",
      "Amélioration de l'expérience utilisateur et du design.",
      "Un site qui reflète votre expertise et votre identité.",
    ],
    icon: faPlus,
    image: (
      <iframe
      className="responsive-iframe" 
      src="https://www.youtube.com/embed/YpyXQ_7Gk4w"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>)
  },
];

const packs = [
  {
    serviceName: "Pack Standard",
    servicePrice: "249,00€",
    prestation: [
      { "nom": "Analyse performance technique", "inclus": true },
      { "nom": "Audit de l'architecture du site et de la navigation ", "inclus": true },
      { "nom": "Analyse de contenu et de design", "inclus": true },
      { "nom": "Audit des fonctionnalités", "inclus": true },
      { "nom": "Rapport détaillé et recommandations", "inclus": true },
      { "nom": "Délai : 1 à 2 semaines", "inclus": true }
    ],
    buttonText: "Commander",
    link: "https://buy.stripe.com/bIY8ziaS43B52EobIM",
    isPromotion: false,
    promotionMessage: "Offre spéciale : 249,00€ jusqu'au 31/12"
  },
]

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
      "Le coaching est conçu pour être accessible même aux débutants : chaque étape est expliquée simplement et adaptée à votre niveau."
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
      "Bien que je ne puisse pas garantir un nombre précis de visiteurs, le coaching améliore considérablement les aspects techniques et structurels de votre site, augmentant ainsi vos chances d’apparaître mieux positionné dans les moteurs de recherche et d'attirer plus de trafic."
    ],
    icon: faCircleQuestion
  },
  {
      title: "Je manque de temps, est-ce que ce coaching demande beaucoup d’investissement après la session ?",
      content: [
        " coaching est conçu pour vous apporter des solutions rapides et actionnables. Le plan d’action que vous recevrez est structuré de manière à vous faire gagner du temps en optimisant efficacement votre site sans avoir à y passer des heures. Le Plan d'action est divisé en etapes pour vous permettre de solutionner les problemes un à un"],
      icon: faCircleQuestion
  },
  {
      title: "Comment s'effecutue la réservation pour le coaching \"Pimpte ton Site\"",
      content: [
        "Je réserve une session sur mon calendrier prévu à cette effet. J'effectue le paiement sur le module stripe. Le paiement pour le coaching \"Pimpe ton site\" se fait en une seule fois via Stripe lors de la réservation. Si vous avez des questions sur le paiement, n’hésitez pas à me contacter directement.",
      ],
      icon: faCircleQuestion
  }

];

function PimpeTonSite() {
  const pageTitle = "Pimpe ton site : Coaching web pour optimiser votre site et attirer plus de visiteurs";
  const bannerText = "Améliorez votre site web en 2 heures et boostez votre visibilité en ligne !";
  const bannerImg = require('../../assets/ImgBannerKiffetonsite.jpeg')
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

<div className="pagevente__section pagevente__section-card">
  <h2 className="section-title">Choisissez le pack qui vous correspond</h2>
  <div className="container__card-div">
{packs.map((pack, index) => (
<Card
key={index}
serviceName={pack.serviceName}
servicePrice={pack.servicePrice}
prestation={pack.prestation}
buttonText={pack.buttonText}
link={pack.link}
isPromotion={pack.isPromotion}
promotionMessage={pack.promotionMessage}
/>
))}
</div>
</div>

<div className="pagevente__section">
        <h2 className="section-title">Ils donnent leur avis</h2>
        <Testimonies />
      </div>

        <div className="pagevente__section">
        <h2 className="section-title">Foire aux Questions</h2>
        <Faq FaqData={faqDataPimpeTonSite}/>
      </div>

      </div>
    </div>
  );
}

export default PimpeTonSite;
