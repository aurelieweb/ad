import React from "react";
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Testimonies from '../../components/Testimonies';
import Faq from "../../components/Faq";
import ServiceDetail from "../../components/ServiceDetail";
import { faPlay, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import imgKiffeTonSite2 from "../../assets/imgKiffeTonSite_LAtelier2.png";
import imgKiffeTonSite from "../../assets/imgKiffeTonSite_LAterlier.png";
import imgKiffeTonSite3 from "../../assets/imgKiffeTonSite_LAtelier2.png";


const buttons = [
  { text: 'Consultation gratuite', link: '/Calendly' }
];

const sections = [
  {
    title: "Ce que vous allez apprendre :",
    subtitle: null,
    items: [
      "À structurer et concevoir un site web professionnel, étape par étape.",
      "Les secrets pour capter l’attention de vos visiteurs et convertir.",
      "Comment gérer votre site en toute autonomie, sans galères techniques."
    ],
    icon: faPlay,
    image: imgKiffeTonSite, // Image de test
  },
  {
    title: "Des ressources adaptées à vos besoins :",
    subtitle: null,
    items: [
      "eBook interactif : Un guide clair et détaillé.",
      "Workbooks : Des outils pratiques pour appliquer immédiatement ce que vous apprenez.",
      "Prompts personnalisés : Pour gagner du temps et rester efficace."
    ],
    icon: faPlay,
    image: imgKiffeTonSite2,  // Même image pour le test
  },
  {
    title: "Pourquoi ça marche ?",
    subtitle: null,
    items: [
      "Méthodes éprouvées par une développeuse experte.",
      "Un format adapté aux non-techniciens.",
      "Des résultats rapides, sans compromis sur la qualité."
    ],
    icon: faPlay,
    image: imgKiffeTonSite,  // Même image pour le test
  },
];



const packs = [
  {
    serviceName: "Pack Standard",
    servicePrice: "99,00€",
    prestation: [
      { "nom": "eBook interactif", "inclus": true },
      { "nom": "Prompt Rédaction de contenu", "inclus": true },
      { "nom": "Workbooks détaillés", "inclus": true }
    ],
    buttonText: "Commander",
    link: "https://buy.stripe.com/00gg1Kf8kefJceYbIJ",
  },
  {
    serviceName: "Pack Coaching Collectif",
    servicePrice: "349,00€",
    prestation: [
      { "nom": "Inclus : Pack Standard", "inclus": true },
      { "nom": "2 ateliers thématiques en petit groupe", "inclus": true }
    ],
    buttonText: "Nos prochaines dates",
    link: "https://buy.stripe.com/5kAdTC9O0c7B6UE4gi",
  },
  {
    serviceName: "Pack VIP",
    servicePrice: "599,00€",
    prestation: [
      { "nom": "Inclus : Pack Standard", "inclus": true },
      { "nom": "4 ateliers thématiques", "inclus": true },
      { "nom": "1 session individuelle avec une experte", "inclus": true }
    ],
    buttonText: "Nos prochaines dates",
    link: "https://buy.stripe.com/4gweXG9O0b3x6UEeUX",
  }
];

const faqDataKiffeTonSite = [
  {
    title: "À qui s’adresse l’offre \"Kiffe ton site\" ?",
    content: [
      "\"Kiffe ton site\" est conçu pour les entrepreneurs, freelances, et petites entreprises qui souhaitent créer ou améliorer un site web professionnel sans compétences techniques avancées. Que vous soyez novice ou déjà à l’aise avec WordPress, cette offre vous guide pas à pas."
    ],
    icon: faCircleQuestion,
  },
  {
    title: "Puis-je créer un site web professionnel si je n’ai aucune expérience ?",
    content: [
      "Absolument ! \"Kiffe ton site\" propose des ressources claires et interactives, comme un eBook, des workbooks, et des prompts pratiques. Vous serez guidé à chaque étape pour concevoir un site attractif et fonctionnel, même si vous débutez."
    ],
    icon: faCircleQuestion,
  },
  {
    title: "Pourquoi choisir \"Kiffe ton site\" plutôt qu’une agence web ?",
    content: [
      "Avec \"Kiffe ton site\", vous économisez sur les coûts élevés d’une agence tout en apprenant à gérer votre site de manière autonome. Ce programme est conçu pour vous rendre indépendant et vous offrir un site qui reflète parfaitement votre vision."
    ],
    icon: faCircleQuestion,
  },
  {
    title: "Quels sont les outils inclus dans l’offre ?",
    content: [
      "Vous recevrez un eBook interactif détaillé, des workbooks pratiques pour appliquer les concepts directement, et des prompts personnalisés pour simplifier les tâches techniques. Si vous optez pour les packs avancés, vous bénéficiez également d’ateliers en groupe ou individuels."
    ],
    icon: faCircleQuestion,
  },
  {
    title: "Combien de temps faut-il pour créer mon site avec \"Kiffe ton site\" ?",
    content: [
      "La durée dépend de votre rythme, mais grâce à nos guides clairs et à notre méthode pas à pas, de nombreux utilisateurs lancent leur site en 2 à 4 semaines. Les ressources vous permettent d’avancer efficacement, même si vous ne pouvez y consacrer qu’une heure par jour."
    ],
    icon: faCircleQuestion,
  },
  {
    title: "Quelles compétences vais-je acquérir en suivant ce programme ?",
    content: [
      "Avec \"Kiffe ton site\", vous apprendrez à :",
      "- Structurer et concevoir un site web professionnel.",
      "- Optimiser votre site pour attirer et convertir vos visiteurs.",
      "- Gérer votre site de manière autonome (mises à jour, contenu, SEO)."
    ],
    icon: faCircleQuestion,
  },
  {
    title: "Les workbooks et tutoriels sont-ils adaptés à mon secteur d’activité ?",
    content: [
      "Oui, les ressources incluses sont conçues pour être flexibles et applicables à tous les secteurs. Que vous soyez dans le bâtiment, le coaching, ou le e-commerce, les principes et méthodes s’adaptent à vos besoins."
    ],
    icon: faCircleQuestion,
  },
  {
    title: "Que se passe-t-il si je rencontre des difficultés techniques ?",
    content: [
      "Si vous choisissez le Pack Coaching Collectif ou le Pack VIP, vous bénéficiez d’ateliers où vos questions seront traitées en direct. De plus, notre eBook et nos workbooks contiennent des solutions aux problèmes courants que rencontrent les débutants."
    ],
    icon: faCircleQuestion,
  },
  {
    title: "Quels résultats puis-je espérer obtenir avec ce programme ?",
    content: [
      "En suivant notre méthode, vous obtiendrez un site web professionnel, fonctionnel, et optimisé pour le SEO. Cela vous permettra d’attirer plus de visiteurs, de renforcer votre crédibilité en ligne, et de convertir vos prospects en clients."
    ],
    icon: faCircleQuestion,
  },
  {
    title: "Que contient le \"Pack VIP\" ?",
    content: [
      "Le Pack VIP inclut :",
      "- L’eBook interactif.",
      "- Les workbooks pratiques.",
      "- 4 ateliers thématiques en petit groupe pour approfondir vos connaissances.",
      "- 1 session individuelle avec une experte pour un accompagnement personnalisé."
    ],
    icon: faCircleQuestion,
  },
  {
    title: "Quels sont les bénéfices de suivre des ateliers en groupe ou en individuel ?",
    content: [
      "Les ateliers en groupe vous permettent d’échanger avec d’autres entrepreneurs et de bénéficier de retours collectifs. Les sessions individuelles, incluses dans le Pack VIP, offrent un accompagnement personnalisé pour répondre à vos besoins spécifiques."
    ],
    icon: faCircleQuestion,
  },
  {
    title: "Puis-je utiliser ce programme si je veux créer une boutique en ligne ?",
    content: [
      "Oui, notre méthode s’adapte parfaitement à la création de boutiques en ligne. Vous apprendrez à intégrer des fonctionnalités comme les paiements sécurisés et à optimiser votre boutique pour attirer et fidéliser vos clients."
    ],
    icon: faCircleQuestion,
  },
  {
    title: "Et si je ne suis pas satisfait(e) ?",
    content: [
      "Votre satisfaction est notre priorité. Si vous estimez que le programme ne répond pas à vos attentes, contactez-nous dans les 14 jours suivant votre achat pour discuter d’une solution."
    ],
    icon: faCircleQuestion,
  },
  {
    title: "Comment démarrer avec \"Kiffe ton site\" ?",
    content: [
      "C’est simple ! Choisissez le pack qui correspond à vos besoins, complétez votre achat, et accédez immédiatement à vos ressources. Vous êtes à un clic de transformer vos idées en un site web qui cartonne !"
    ],
    icon: faCircleQuestion,
  },
];


function kiffetonsite() {
  const pageTitle = "Comment créer un site web facilement";
  const bannerText = "A modifier";

  const bannerImg = require('../../assets/imgBanner2.jpeg')
  const bannerClass = "banner banner-presentation";
  const bannerImgClass = "banner__img-presentation";


  return (
    <div className='main'>
      <Banner
        pageTitle={pageTitle}
        bannerClass={bannerClass}
        bannerImg={bannerImg}
        bannerText={bannerText}
        bannerImgClass={bannerImgClass}
        buttons={buttons}
      />
      <div className="pagevente__container">
        <h2>Créer un site internet en 12 étapes avec "Kiffe ton site" </h2>
        <p className='section-text'>Vous rêvez d’un site web qui reflète votre vision et attire vos clients ? Avec 'Kiffe ton site', nous vous donnons les outils et les ressources nécessaires pour créer un site qui impressionne et performe. Ce n’est pas qu’un simple guide, c’est une transformation digitale sur mesure !</p>
      </div>

      {/* Sections dynamiques avec ServiceDetail */}
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
        <Faq FaqData={faqDataKiffeTonSite}/>
      </div>
    </div>
  );
}

export default kiffetonsite;
