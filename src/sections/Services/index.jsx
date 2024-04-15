import React from "react";
import Card from "../../components/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const servicesData = require('../../data/serviceData.json');

function Services() {
  const webServices = servicesData.filter(service => service.type === "Site web");
  const otherServices = servicesData.filter(service => service.type !== "Site web");

  return (
    <section id='service'>
      <div className="container__services"> 
        <h2>Nos services web sur mesure</h2>
        <div className="container__section">
          <p className='container__section-text'>Un site web professionnel est un atout précieux pour votre entreprise. Il vous permet de présenter vos produits et services de manière claire et attrayante, d'atteindre de nouveaux clients potentiels, et de renforcer votre crédibilité dans un monde de plus en plus numérique.</p>
          <p className='container__section-text'>Explorez dès maintenant mes différentes offres de création de site web conçues pour répondre à vos besoins spécifiques. Que vous souhaitiez renforcer votre présence en ligne et mettre en valeur votre entreprise de manière efficace et moderne, je suis là pour vous accompagner dans la réalisation de vos objectifs numériques.</p>
          <p className='container__section-text'> Notre approche unique vous offre une expérience personnalisée et simplifiée pour concrétiser votre présence en ligne.</p>
          <h3>Offre clé en main : </h3>
          <p className='container__section-text'>Notre offre clé en main vous garantit une création de site web sur mesure, prenant en compte vos idées et vos valeurs pour rédiger un contenu authentique qui reflète l'essence de votre entreprise. Grâce à notre équipe expérimentée, vous bénéficiez d'un accompagnement complet tout au long du processus, de la conception graphique à la rédaction de contenu, en passant par le développement sur mesure.</p>
          <h3>Avantages :</h3>
          <ul>
            <li><FontAwesomeIcon className='container__section-icon' icon={faPlus} /> Personnalisation : Chaque site est conçu selon vos besoins spécifiques et votre identité visuelle.</li>
            <li><FontAwesomeIcon className='container__section-icon' icon={faPlus} />  Simplicité du processus : Nous vous guidons à chaque étape, de la conception à la mise en ligne, pour une expérience fluide et sans stress.</li>
            <li><FontAwesomeIcon className='container__section-icon' icon={faPlus} /> Accompagnement personnalisé : Notre équipe est à votre écoute pour répondre à vos questions et ajuster le projet selon vos retours.</li>
            <li><FontAwesomeIcon className='container__section-icon' icon={faPlus} />  Rédaction de contenu : Nous valorisons votre expertise en rédigeant un contenu percutant qui met en avant vos services et valeurs.</li>
          </ul>
        </div>
        <div className='container__card'>
          {webServices.map((service, index) => (
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
      </div>

      <div className="container__services">
        <h2>Autres prestations</h2>
        <div className="container__section">
          <p className='container__section-text'>Découvrez également nos autres prestations spécialisées pour renforcer votre présence en ligne et dynamiser votre entreprise sur les réseaux sociaux. Obtenez une charte graphique professionnelle, adaptée à votre logo existant, comprenant une palette de couleurs harmonieuse et des typographies percutantes.</p>
          <p className='container__section-text'>Dynamisez également votre présence sur Facebook, Instagram et LinkedIn avec des pages professionnelles complètes et attrayantes, intégrant des liens vers votre site web et d'autres informations pertinentes.</p>
        </div>
        <div className='container__card'>
          {otherServices.map((service, index) => (
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
      </div>
    </section>
  );
}

export default Services;
