import React from "react";
import Card from "../../components/Card";
import ImgSiteReact from '../../assets/imgMaintenance.png'
import ImgSiteWP from '../../assets/imgMaintenance.png'
import ImgIdentitéVisuelle from '../../assets/imgMaintenance.png'

/*Data services
    name:
    description:
    img:
    prix
*/ 
const servicesData = [
    { name: 'Site web One page', 
      description: 'Site 1 page',
      prestation: ['Charte graphique à partir d\'une maquette prédéfinie',
                  'Sélection d\'une palette de couleur',
                  'Domaine  + hébergement + e-mail pendant 12 mois',
                  'Site responsive (adapté tous supports)',
                  'Formulaire de contact',
                  'Lien de partage vers les réseaux sociaux',
                  'Optimisation du référencement et des performances',
                  'Mise en ligne du site',
                  'Délai : 4 semaines'
                ],
      imageUrl: ImgSiteWP, 
      price: '1299,00'
    },
    { name: 'Site web Vitrine', 
      description: 'Site 2 à 10 pages',
      prestation: ['Charte graphique à partir d\'une maquette prédéfinie',
      'Sélection d\'une palette de couleur',
                  'Domaine  + hébergement + e-mail pendant 12 mois',
                  'Site responsive (adapté tous supports)',
                  'Formulaire de contact',
                  'Lien de partage vers les réseaux sociaux',
                  'Optimisation du référencement et des performances',
                  'Mise en ligne du site',
      'Délai : 6 semaines'
    ],
      imageUrl: ImgSiteReact, 
      price: '2000,00'
    },
    { name: 'Site web personnalisé', 
    description: '2 à 10 pages',
    prestation: ['Création d\'une charte graphique personnalisée',
    'Sélection d\'une palette de couleur',
    'Fonctionnalité personnalisée',
    'Domaine  + hébergement + e-mail pendant 12 mois',
    'Site responsive (adapté tous supports)',
    'Formulaire de contact',
    'Lien de partage vers les réseaux sociaux',
    'Optimisation du référencement et des performances',
    'Mise en ligne du site',
    'Délai : 8 semaines'
    ],
    imageUrl: ImgIdentitéVisuelle,
    price: '3000,00' 
    },
    /*{
      name: 'Réseaux sociaux et Google My Business',
      description: 'Forfait',
      prestation: [
        'Création de pages attractives sur Facebook et Instagram',
        'Optimisation de la fiche Google My Business pour améliorer la visibilité locale',
        'Intégration de contenu percutant et adapté à votre identité visuelle',
        'Conseils pour maintenir une présence active et engager votre audience',
      ],
      // Ajoutez le chemin de votre image personnalisée
      price: 'A partir de 300,00€', // Ajoutez le prix ou indiquez "Sur Devis" si les tarifs varient
    },
    // Ajoutez d'autres services avec leurs prix ici*/
  ];

  function Services() {
    return (
      <section id='service'>
        <h2>Création de sites Web personnalisés</h2>
        <p className='section-text'>Optimisez votre présence en ligne avec nos solutions de développement de web sur mesure. De la création de sites web attractifs à la refonte complète, nous donnons vie à votre vision digitale.</p>
        <div className='container__card'>
          {servicesData.map((service, index) => (
            <Card
              key={index}
              serviceName={service.name}
              imageUrl={service.imageUrl}
              servicePrice={service.price}
              description={service.description}
              prestation={service.prestation}
            />
          ))}
        </div>
      </section>
    );
  }
  
  export default Services;
