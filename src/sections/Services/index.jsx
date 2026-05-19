import React from "react";
import Card from "../../components/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPlay } from '@fortawesome/free-solid-svg-icons';
import imgNosServices1 from '../../assets/img_coaching.jpg';
import imgNosServices2 from '../../assets/img_automatisation_pme.jpg';
import imgNosServices3 from '../../assets/img_coaching_creation_site_web.jpg';

const servicesData = require('../../data/serviceData.json');

function Services() {
  const webServices = servicesData.filter(service => service.type === "Prestation");

  const customerTypeDetail = [
    {
      name: "Fluidifier & automatiser votre activité",
      detail: [
        "J'analyse vos processus et mets en place des automatisations sur mesure pour éliminer les tâches répétitives et reduire la charge mentale"
      ]
    },
    {
      name: "Site web connectés & outils métier",
      detail: [
        "Je conçois des sites web modernes et connectés à vos outils pour centraliser les informations, automatiser et offrir une meilleure expérience à vos clients"
      ]
    },
  ];

  const groupServicesByCustomerType = (services) => {
    return services.reduce((acc, service) => {
      if (!acc[service.customerType]) {
        acc[service.customerType] = [];
      }
      acc[service.customerType].push(service);
      return acc;
    }, {});
  };

  const webServicesByCustomerType = groupServicesByCustomerType(webServices);

  return (
    <section id='service'>
      <div className="container__services">
        <h2>2 expertises complémentaires pour transformer votre organisation digitale</h2>
        <p className='section-text'>Un site web professionnel est un <strong>atout</strong> précieux pour votre entreprise. Il vous permet de <strong>présenter vos produits et services</strong> de manière claire et attrayante, d'atteindre de <strong>clients qualifiés</strong>, et de <strong>mettre en avant votre savoir-faire unique</strong> dans un monde de plus en plus numérique.</p>
        {/*<div className="container__section">
          <div className="container__services-div">
          <img src={imgNosServices1} alt="Aurélie DEMETRIO - L'Agence Digitale" />
            <div>
              <h3>Pourquoi un site web?</h3>
              <ul>
                <li><FontAwesomeIcon className='container__section-icon' icon={faPlay} />Présentation des vos produits et services</li>
                <li><FontAwesomeIcon className='container__section-icon' icon={faPlay} />Atteindre de nouveaux clients et prospects</li>
                <li><FontAwesomeIcon className='container__section-icon' icon={faPlay} />Renforcer votre crédibilité sur le marché</li>
              </ul>
            </div>
            <div>
              <h3>Avantages :</h3>
              <ul>
                <li><FontAwesomeIcon className='container__section-icon' icon={faPlus} /> Personnalisation : Chaque site est conçu selon vos besoins spécifiques et votre identité visuelle.</li>
                <li><FontAwesomeIcon className='container__section-icon' icon={faPlus} /> Simplicité du processus : Nous vous guidons à chaque étape, de la conception à la mise en ligne, pour une expérience fluide et sans stress.</li>
                <li><FontAwesomeIcon className='container__section-icon' icon={faPlus} /> Accompagnement personnalisé : Notre équipe est à votre écoute pour répondre à vos questions et ajuster le projet selon vos retours.</li>
                <li><FontAwesomeIcon className='container__section-icon' icon={faPlus} /> Rédaction de contenu : Nous valorisons votre expertise en rédigeant un contenu percutant qui met en avant vos services et valeurs.</li>
              </ul>
            </div>
          </div>
        </div>*/}

        <div className="container__prestation">
        {Object.keys(webServicesByCustomerType).map((customerType, index) => (
          <div key={index} className="container__card">
            <div className="service-div">
              <div className="service-detail">
                <h3 className="customer-type">{customerType}</h3>
                <ul>
                  {customerTypeDetail.map((detail, detailIndex) => (
                    detail.name === customerType && detail.detail.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <div className="icon-div">{item}</div>
                      </li>
                    ))
                  ))}
                </ul>
              </div>
              <div className="container__card-div">
                {webServicesByCustomerType[customerType].map((service, serviceIndex) => (
                  <Card
                    key={serviceIndex}
                    imageUrl={service.imageUrl}
                    servicePrice={service.price}
                    description={service.description}
                    buttonText={service.buttonText}
                    prestation={service.prestation}
                    link={service.link}
                    isPromotion={service.isPromotion}
                    promotionMessage={service.promotionMessage}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}

export default Services;