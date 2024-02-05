import React from "react";
import imgFusee from '../../assets/imgFusee.jpeg'

const cardsData = [
  {
    title: "Notre approche",
    content: "Nous croyons en une approche de développement web personnalisée et responsable. Notre objectif est de créer des sites légers et performants tout en répondant aux besoins spécifiques de nos clients."
  },
  {
    title: "Ecoute et compréhension",
    content: "Nous débutons chaque projet par un rendez-vous d'une heure dédié à comprendre vos besoins. Nous croyons en une communication ouverte pour créer une relation solide avec nos clients."
  },
  {
    title: "Cahier des charges collaboratif",
    content: "Nous fournissons un cahier des charges détaillé pour affiner vos attentes. Cette étape cruciale garantit que chaque élément de votre projet est pris en compte, tout en minimisant les imprévus."
  },
  {
    title: "Design personnalisé",
    content: "otre approche de design commence par la proposition d'une charte graphique. Nous travaillons en étroite collaboration avec vous pour garantir que chaque détail reflète votre identité tout en respectant les meilleures pratiques de design."
  },
  {
    title: "Maquette numérique",
    content: "Avant le développement complet, nous créons une maquette pour visualiser l'apparence et l'expérience utilisateur de votre site. Cela permet des ajustements avant d'entamer la phase d'intégration."
  },
  {
    title: "Technologies utilisées",
    content: "Nous utilisons des technologies modernes pour assurer la fiabilité et les performances de nos sites :",
    listItems: [
      "HTML, CSS, Javascript avec React: Pour des interfaces réactives et conviviales",
      "MongoDB: Base de données NoSQL pour la gestion efficace des données"
    ]
  },
  {
    title: "Développement et ajustements",
    content: "Après l'intégration, nous présentons une première version pour recueillir vos commentaires. Notre processus itératif nous permet d'ajuster rapidement le site en fonction de vos retours."
  },
  {
    title: "Déploiement responsable",
    content: "Nous nous engageons à maintenir un éco index optimal. Notre approche attentive aux performances garantit que votre site est rapide et respectueux de l'environnement."
  },
  {
    title: "Satisfaction Client",
    content: "La satisfaction de nos clients est notre priorité. Nous travaillons en étroite collaboration avec vous à chaque étape pour nous assurer que le résultat final répond à vos attentes."
  },

  
  // Ajoutez d'autres cartes au besoin
];

function Process() {


  return (
    <section id='process'>
      <h2>Découvrez notre méthode et technologies</h2>
      <p className='section-text'>
        Optimisez votre présence en ligne avec des sites web sur mesure. Que vous soyez un entrepreneur passionné ou une Entreprise établie, nous sommes prêts à transformer vos idées en réalité numérique. Contactez-nous aujourd'hui et donnez vie à vos projets digitaux!
      </p>

      <div className='process__container'>
      
        {cardsData.map((card, index) => (
          <div key={index} className='process__card'>
            <div className="process__card-title">
              <h3>{card.title}</h3>
            </div>

              <div className="process__card-text">
                <p>{card.content}</p>
                {card.listItems && (
                  <ul className="process__card-list">
                    {card.listItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
          </div>
        ))}
        <img className="process__container-img" src={imgFusee} alt=" fusée ordinateur" />
      </div>
    </section>
  );
}

export default Process;