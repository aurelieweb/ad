import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner";
import Button from "../../components/Button";
import ServiceDetail from "../../components/ServiceDetail";
import Testimonies from "../../components/Testimonies";
import Faq from "../../components/Faq";
import { faPlay, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import imgArchitect from "../../assets/imgArchitecte.jpg";
import imgBatiment from "../../assets/imgBatiment.jpg";
import imgAutomatisation from "../../assets/imgBanner.jpg";
import imgBenefit2 from "../../assets/img_automatisation_pme.jpg";
import imgBenefit1 from "../../assets/imgBannerResource.jpeg";

const sectionsFlyer = [
  {
    title: "Pourquoi automatiser votre activité et transformer votre site peut changer votre quotidien",
    subtitle: null,
    icon: faPlay,
    image: imgBenefit1,
    items: [
      "Gagner du temps",
      "Réduire les tâches répétitives",
      "Simplifier votre gestion au quotidien",
    ],
  },
  {
    title: "Solutions concrètes pour optimiser votre activité",
    subtitle: null,
    icon: faPlay,
    image: imgBenefit2,
    items: [
      "Automatisation – Je relie vos outils métier (agenda, mails, formulaires, CRM…) pour centraliser les demandes, automatiser les tâches répétitives, et gagner un temps précieux.",
      "Connexion de vos outils",
      "Vous avez déjà un site ? Je le rends plus utile, plus efficace, et surtout... plus connecté.",
      "Création de site utile – Un site pensé dès le départ pour vous faire gagner du temps et soutenir votre activité.",
    ],
  },
];

const casConcretsFlyer = [
  {
    title: "Un formulaire connecté pour les demandes d’intervention",
    subtitle: null,
    icon: faPlay,
    image: imgBatiment,
    items: [
      "Un artisan gagne plusieurs heures par semaine grâce à un formulaire intégré à son site.",
      "Les demandes arrivent classées et complètes, même quand il est sur chantier ou en dehors des horaires.",
      "Son téléphone sonne moins, et il reste concentré sur les urgences."
    ]
  },
  {
    title: "Prise de rendez-vous automatisée pour une architecte",
    subtitle: null,
    icon: faPlay,
    image: imgArchitect,
    items: [
      "Une architecte propose directement ses créneaux disponibles via son site, connectés à son agenda Google.",
      "Fini les échanges de mails interminables.",
      "Les prospects choisissent eux-mêmes leur créneau, ce qui réduit le taux de no-show."
    ]
  },
  {
    title: "Génération automatique de devis et de dossiers de primes",
    subtitle: null,
    icon: faPlay,
    image: imgAutomatisation,
    items: [
      "Un installateur de PAC remplit un formulaire simplifié avec son client.",
      "Le devis et le dossier de demande de prime sont générés automatiquement.",
      "Un énorme gain de temps, et moins d’erreurs administratives."
    ]
  },
];


const faqFlyer = [
  {
    title: "Est-ce que c’est adapté à mon activité dans le bâtiment ?",
    content: [
      "Oui, totalement. Je travaille avec des artisans, indépendants et PME du bâtiment ou de l’immobilier. Mes solutions sont pensées pour répondre à vos réalités : appels fréquents, chantiers à gérer, devis à faire, plannings à optimiser.",
      "Votre site peut devenir un véritable outil de terrain : demande d’intervention, prise de rendez-vous, génération de devis, centralisation des contacts... on adapte à vos besoins."
    ],
    icon: faCircleQuestion,
  },
  {
    title: "Je n’ai pas encore de site, est-ce que c’est fait pour moi ?",
    content: [
      "Oui, bien sûr. Si vous partez de zéro, je vous aide à créer un site simple, utile, et prêt à évoluer. Pas besoin d’avoir toutes les idées en place : on construit ensemble un outil clair, accessible, et adapté à votre quotidien.",
      "Vous aurez une présence en ligne professionnelle, avec les bonnes bases, et un site qui vous fait gagner du temps dès le départ."
    ],
    icon: faCircleQuestion,
  },
  {
    title: "Je veux refaire mon site, est-ce que vous pouvez m’aider ?",
    content: [
      "Oui, c’est l’une de mes spécialités. Si votre site est ancien ou peu efficace, on garde ce qui est utile et on refond uniquement ce qui doit l’être.",
      "Vous repartez avec un site moderne, clair, pensé pour votre métier et vos clients – et surtout : un site qui vous fait gagner du temps."
    ],
    icon: faCircleQuestion,
  },
  {
    title: "Je ne suis pas à l’aise avec le digital, c’est un problème ?",
    content: [
      "Pas du tout. Je suis là pour vous simplifier la vie, pas pour vous noyer dans la technique. Je vous explique tout en langage clair, ou je m’occupe de tout si vous préférez déléguer.",
      "Vous restez concentré sur votre métier, pendant que je mets en place un outil fiable, utile et simple à utiliser."
    ],
    icon: faCircleQuestion,
  },
  {
    title: "Je manque de temps pour m’occuper de ça…",
    content: [
      "C’est exactement pour ça que mes prestations existent. Vous pouvez me confier tout ou partie du projet.",
      "On avance à votre rythme, selon vos disponibilités. Je vous demande uniquement ce qui est nécessaire, au bon moment, et je m’adapte à votre planning chargé."
    ],
    icon: faCircleQuestion,
  },
  {
    title: "J’ai déjà un site, est-ce que ça vaut le coup de l’améliorer ?",
    content: [
      "Oui ! Si votre site n’apporte pas de contacts, ne vous aide pas dans votre gestion quotidienne, ou ne reflète plus votre activité actuelle, il est temps de le transformer.",
      "Je peux y ajouter des formulaires intelligents, connecter des outils, automatiser certaines tâches et le rendre beaucoup plus utile."
    ],
    icon: faCircleQuestion,
  },
  {
    title: "Je reçois des appels en permanence, mon site peut m’aider ?",
    content: [
      "Oui, bien sûr. On peut mettre en place une demande d’intervention automatique, proposer des créneaux de rendez-vous liés à votre agenda, ou trier les demandes selon leur urgence.",
      "Résultat : moins d’allers-retours, moins de téléphone, plus de temps pour vos chantiers."
    ],
    icon: faCircleQuestion,
  },
  {
    title: "Est-ce que je peux être autonome après ?",
    content: [
      "Oui. Je livre des outils simples à utiliser, avec ou sans formation selon votre préférence. Et si vous voulez me déléguer la suite, je propose aussi un suivi ou des interventions ponctuelles.",
    ],
    icon: faCircleQuestion,
  },
  {
    title: "Je travaille déjà avec un webmaster, on peut quand même collaborer ?",
    content: [
      "Absolument. Je peux intervenir uniquement sur la partie automatisation, formulaires, prise de rendez-vous, etc. Mon travail complète celui d’un webmaster classique, sans conflit.",
    ],
    icon: faCircleQuestion,
  },
  {
    title: "Quels outils peut-on connecter à mon site ?",
    content: [
      "On peut connecter votre agenda (Google Calendar), vos formulaires (Tally, Typeform…), Airtable, Email, SMS, systèmes de devis, de signature électronique…",
      "Tout dépend de votre fonctionnement et de vos outils actuels. On s’adapte à vous."
    ],
    icon: faCircleQuestion,
  },
  {
    title: "Combien ça coûte ?",
    content: [
      "Ça dépend de ce que vous souhaitez mettre en place. L’appel de diagnostic est gratuit, et les prestations démarrent à 149€. Ensuite, tout est sur mesure et on avance étape par étape pour maîtriser le budget.",
    ],
    icon: faCircleQuestion,
  },
  {
    title: "Est-ce que c’est urgent de s’en occuper ?",
    content: [
      "Plus tôt vous améliorez votre site, plus vite vous gagnez du temps. Même une petite automatisation peut vous libérer plusieurs heures par semaine. N’attendez pas d’être débordé.",
    ],
    icon: faCircleQuestion,
  },
  {
    title: "Que se passe-t-il pendant l’appel gratuit ?",
    content: [
      "C’est un échange de 20 à 30 minutes. Vous m’expliquez comment vous travaillez, ce que votre site fait ou ne fait pas, et ce que vous aimeriez simplifier. Je vous propose des solutions concrètes, adaptées à votre quotidien, sans engagement.",
    ],
    icon: faCircleQuestion,
  },
];



function Flyer() {
  const pageTitle = "Un site web utile, qui travaille pour vous.";
  const bannerText =
    "Sites web connectés & automatisations pour vous faire gagner du temps, simplifier votre gestion et réduire les tâches répétitives.";
  const bannerImg = require("../../assets/imgBanner_blog_aurelie_demetrio_developpeuse_automatisation.jpg");

  return (
    <div className="main">
      <Banner
        pageTitle={pageTitle}
        bannerClass="banner banner-presentation"
        bannerImg={bannerImg}
        bannerText={bannerText}
        bannerImgClass="banner__img-presentation"
        buttons={[
          {
            text: "Réserver un appel",
            link: "/Calendly",
            className: "button",
          },
        ]}
      />
        <div className="pagevente__container flyer__intro">
  <h2>Un site web utile, qui travaille pour vous ?</h2>
  <p className="section-text">
    Vous avez découvert mon flyer ? Merci pour votre intérêt !
  </p>
  <p className="section-text">
    Je suis <strong>Aurélie</strong>, développeuse web & consultante en automatisation.
    J’aide les artisans, indépendants et PME à créer ou transformer leur site web,
    et à automatiser leur quotidien grâce à des outils connectés, simples et efficaces.
  </p>
</div>

      {/* Sections : Intro, Services, Cas concrets */}
      <ServiceDetail sections={sectionsFlyer} />

      <section className="pagevente__section flyer__casconcrets">
  <h2 className="section-title">
    Exemples concrets d'automatisation et de transformation digitale
  </h2>
  <ServiceDetail sections={casConcretsFlyer} />
</section>


      {/* Témoignages */}
      <section className="pagevente__section">
        <h2 className="section-title">Ils m’ont fait confiance</h2>
        <Testimonies />
      </section>

      {/* FAQ */}
      <section className="pagevente__section">
        <h2 className="section-title">Foire aux questions</h2>
        <Faq FaqData={faqFlyer} />
      </section>

      {/* CTA final */}
      <section className="home__cta-final flyer__cta">
        <div className="cta-final__wrapper">
          <h2>Prêt(e) à simplifier votre quotidien et gagner du temps ?</h2>
          <p>
            Je vous aide à mettre en place des solutions simples, utiles et connectées à vos outils
            métier.
            <br />
            Parlons de votre activité et trouvons ensemble la meilleure solution pour vous.
          </p>
          <Link to="/Calendly">
            <Button className="btn-secondary" text="Planifier un appel gratuit" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Flyer;
