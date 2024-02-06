import React from "react";
import imgFusee from '../../assets/imgFusee.jpeg'

const cardsData = [
  {
    title: "Notre approche",
    content: "Nous sommes convaincus qu'une approche de développement web personnalisée et responsable est la clé pour créer des sites qui se demarque. Notre objectif est de créer des sites légers et performants et répondants aux besoins spécifiques de nos clients."
  },
  {
    title: "Ecoute et compréhension",
    content: "Chaque projet commence par un rendez-vous d'une heure dédié à comprendre vos besoins. Nous croyons en une communication ouverte et claire pour créer une relation solide avec nos clients."
  },
  {
    title: "Cahier des charges collaboratif",
    content: "Nous fournissons un cahier des charges détaillé pour affiner vos attentes. Cette étape cruciale garantit que chaque élément de votre projet est pris en compte, tout en minimisant les imprévus."
  },
  {
    title: "Design personnalisé",
    content: "Notre approche de design commence par la proposition d'une charte graphique. Nous travaillons en étroite collaboration avec vous pour garantir que chaque détail reflète votre identité tout en respectant les meilleures pratiques de design."
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
    content: "Nous nous engageons à maintenir un éco-index optimal. Notre approche attentive aux performances garantit que votre site est rapide et respectueux de l'environnement, assurant une présence en ligne responsable."
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
      Explorez notre approche méthodique du développement web personnalisé. De la conception initiale à la mise en ligne, notre processus est axé sur l'écoute, la collaboration et l'innovation. Nous croyons en la création de solutions digitales uniques qui reflètent l'identité de votre entreprise. Découvrez comment nous transformons vos idées en réalité numérique.
</p>

      <div className='process__container'>
      <div className="process__header">
          <img className="process__header-img" src={imgFusee} alt=" fusée ordinateur" />
          
          <div className="process__header-div">
            <p className="process__header-title">"Chaque projet a une histoire. Laissez-nous raconter la vôtre!"</p>
            <div className="process__header-text">
              <p>Chaque collaboration est bien plus que la simple création de sites web. Nous nous engageons à donner vie à l'histoire unique de chaque projet, en mettant en lumière ce qui rend votre vision exceptionnelle.</p>
              <p>Nous sommes là pour vous guider à chaque étape du processus. De la conception initiale à la réalisation finale, nous nous efforçons de façonner des solutions digitales qui vous reflète votre identité et répondent à vos attentes.</p>
            </div>
          </div>
        </div>
      
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
        
      </div>
    </section>
  );
}

export default Process;