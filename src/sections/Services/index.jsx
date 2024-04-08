import React from "react";
import Card from "../../components/Card";

const servicesData = require('../../data/serviceData.json');


  function Services() {
    return (
      <section id='service'>
        <h2>Nos services web sur mesure</h2>
        <p className='section-text'>Un site web professionnel est un atout précieux pour votre entreprise. Il vous permet de présenter vos produits et services de manière claire et attrayante, d'atteindre de nouveaux clients potentiels, et de renforcer votre crédibilité dans un monde de plus en plus numérique. <br/> Explorez dès maintenant mes différentes offres de création de site web conçues pour répondre à vos besoins spécifiques. Que vous souhaitiez renforcer votre présence en ligne et mettre en valeur votre entreprise de manière efficace et moderne, je suis là pour vous accompagner dans la réalisation de vos objectifs numériques.</p>
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
