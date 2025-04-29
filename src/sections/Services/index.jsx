import React from "react";
import Card from "../../components/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPlay } from '@fortawesome/free-solid-svg-icons';
import imgNosServices1 from '../../assets/img_coaching.jpg';
import imgNosServices2 from '../../assets/img_automatisation_pme.jpg';
import imgNosServices3 from '../../assets/img_coaching_creation_site_web.jpg';

const servicesData = require('../../data/serviceData.json');

function Services() {
  const webServices = servicesData.filter(service => service.type === "Site web");
  const automationServices = servicesData.filter(service => service.type === "Automatisation");
  const otherServices = servicesData.filter(service => service.type === "Autres prestations");

  const customerTypeDetail = [
    {
      name: "Création de site internet artisans, entrepreneurs, PME",
      detail: [
        "Deux options version: one-page ou site vitrine",
        "Design esthétique et professionnel",
        "Mise en valeur de votre univers",
        "Gallerie (portfolio) pour présenter vos projets",
        "Offre spéciale Artisan: Rédaction de contenu inclus dans l'offre",
      ]
    },
    {
      name: "Automatiser son business",
      detail: [
        "Automatiser les tâches chronophages",
        "Connecter vos outils (site, CRM, agenda...)",
        "Centraliser les demandes clients dans vos outils métier"
      ]
    },
    {
      name: "Nos accompagnements pour la création de site internet",
      detail: [
        "Audit express de votre site",
        "Coaching en one to one pour optimiser ton site",
        "Un avis professionnel sur ton site"
      ]
    }
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
  const automationServicesByCustomerType = groupServicesByCustomerType(automationServices);
  const otherServicesByCustomerType = groupServicesByCustomerType(otherServices);

  return (
    <section id='service'>
      <div className="container__services">
        <h2>Nos services web sur mesure</h2>
        <p className='section-text'>Un site web professionnel est un <strong>atout</strong> précieux pour votre entreprise. Il vous permet de <strong>présenter vos produits et services</strong> de manière claire et attrayante, d'atteindre de <strong>clients qualifiés</strong>, et de <strong>mettre en avant votre savoir-faire unique</strong> dans un monde de plus en plus numérique.</p>
        <div className="container__section">
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
        </div>

        {Object.keys(webServicesByCustomerType).map((customerType, index) => (
          <div key={index} className="container__card">
            <div className="service-div">
              <div className="service-detail">
                <h3 className="customer-type">{customerType}</h3>
                <ul>
                  {customerTypeDetail.map((detail, detailIndex) => (
                    detail.name === customerType && detail.detail.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <span className="icon-circle"><FontAwesomeIcon icon={faPlay} /></span>
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
                    serviceName={service.name}
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

      <div className="container__services">
      <h2>Automatisation</h2>
    <p className='section-text'>
      Automatiser ton business, c’est arrêter de perdre du temps sur des tâches répétitives. C’est aussi <strong>fluidifier ton organisation</strong>, éviter les oublis, et te concentrer sur ce que tu fais de mieux : ton métier.
      Ensemble, on connecte tes outils pour que ton site, ton agenda, tes demandes clients et ton suivi soient synchronisés.
    </p>
    <div className="container__section">
      <div className="container__services-div">
      <img src={imgNosServices2} alt="Automatisations pros par Aurélie DEMETRIO" />
        <div>
          <h3>Pourquoi automatiser ?</h3>
          <ul>
            <li><FontAwesomeIcon className='container__section-icon' icon={faPlay} />Gagner du temps au quotidien</li>
            <li><FontAwesomeIcon className='container__section-icon' icon={faPlay} />Limiter les erreurs humaines</li>
            <li><FontAwesomeIcon className='container__section-icon' icon={faPlay} />Améliorer ton suivi client</li>
            <li><FontAwesomeIcon className='container__section-icon' icon={faPlay} />Recevoir les infos là où tu travailles déjà (Notion, Airtable, CRM...)</li>
          </ul>
        </div>
        <div>
          <h3>Avantages :</h3>
          <ul>
            <li><FontAwesomeIcon className='container__section-icon' icon={faPlus} /> Process simplifiés : Plus de copier-coller ou d’oublis, tout est relié.</li>
            <li><FontAwesomeIcon className='container__section-icon' icon={faPlus} /> Connexions intelligentes : Tes outils parlent entre eux grâce aux automatisations personnalisées.</li>
            <li><FontAwesomeIcon className='container__section-icon' icon={faPlus} /> Autonomie : Une fois configuré, ton système tourne tout seul.</li>
            <li><FontAwesomeIcon className='container__section-icon' icon={faPlus} /> Flexibilité : Ajout ou évolution des automatisations selon tes besoins.</li>
          </ul>
        </div>
      </div>
    </div>
        
        {Object.keys(automationServicesByCustomerType).map((customerType, index) => (
          <div key={index} className='container__card'>
            <div className="service-div">
              <div className="service-detail">
                <h3 className="customer-type">{customerType}</h3>
                <ul>
                  {customerTypeDetail.map((detail, detailIndex) => (
                    detail.name === customerType && detail.detail.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <span className="icon-circle"><FontAwesomeIcon icon={faPlay} /></span>
                        <div className="icon-div">{item}</div>
                      </li>
                    ))
                  ))}
                </ul>
              </div>
              <div className="container__card-div">
                {automationServicesByCustomerType[customerType].map((service, serviceIndex) => (
                  <Card
                    key={serviceIndex}
                    serviceName={service.name}
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

      <div className="container__services">
        <h2>Optimise ton site web : Audit & Accompagnement</h2>
        <p className='section-text'>
          Tu as déjà un site web mais tu sens qu’il pourrait être plus efficace ? Tu veux <strong>le rendre plus pro, plus clair, plus performant</strong> ?  
          Ces prestations sont pensées pour t’aider à prendre du recul, identifier ce qui bloque, et surtout <strong>mettre en place des améliorations concrètes</strong>, rapidement.
        </p>
        <div className="container__section">
          
          <div className="container__services-div">
          <img src={imgNosServices3} alt="Audit et coaching par Aurélie DEMETRIO" />
            <div>
              <h3>Pourquoi te faire accompagner ?</h3>
              <ul>
                <li><FontAwesomeIcon className='container__section-icon' icon={faPlay} />Avoir un regard pro sur ton site existant</li>
                <li><FontAwesomeIcon className='container__section-icon' icon={faPlay} />Identifier les points faibles (design, structure, SEO…)</li>
                <li><FontAwesomeIcon className='container__section-icon' icon={faPlay} />Trouver des solutions concrètes, applicables tout de suite</li>
              </ul>
            </div>
            <div>
              <h3>Avantages :</h3>
              <ul>
                <li><FontAwesomeIcon className='container__section-icon' icon={faPlus} /> Coaching personnalisé : tu poses tes questions, je t’accompagne avec des réponses concrètes.</li>
                <li><FontAwesomeIcon className='container__section-icon' icon={faPlus} /> Vision claire : un plan d’action priorisé pour ne pas t’éparpiller.</li>
                <li><FontAwesomeIcon className='container__section-icon' icon={faPlus} /> Gain de temps : tu sais quoi faire, dans quel ordre et avec quels outils.</li>
                <li><FontAwesomeIcon className='container__section-icon' icon={faPlus} /> Ressources prêtes à l’emploi : guides, prompts et outils pour avancer même après l'accompagnement.</li>
              </ul>
            </div>
          </div>
      </div>

        {Object.keys(otherServicesByCustomerType).map((customerType, index) => (
          <div key={index} className='container__card'>
            <div className="service-div">
              <div className="service-detail">
                <h3 className="customer-type">{customerType}</h3>
                <ul>
                  {customerTypeDetail.map((detail, detailIndex) => (
                    detail.name === customerType && detail.detail.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <span className="icon-circle"><FontAwesomeIcon icon={faPlay} /></span>
                        <div className="icon-div">{item}</div>
                      </li>
                    ))
                  ))}
                </ul>
              </div>
              <div className="container__card-div">
                {otherServicesByCustomerType[customerType].map((service, serviceIndex) => (
                  <Card
                    key={serviceIndex}
                    serviceName={service.name}
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
    </section>
  );
}

export default Services;