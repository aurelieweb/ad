import React from "react";
//import { Link } from 'react-router-dom';
import Card from "../../components/Card";
//import Button from '../../components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faPlay } from '@fortawesome/free-solid-svg-icons';


const servicesData = require('../../data/serviceData.json');
//const ButtonText = "Prendre rendez-vous";
//const buttonLink = "/Calendly";

function Services() {
  const webServices = servicesData.filter(service => service.type === "Site web");
  const otherServices = servicesData.filter(service => service.type !== "Site web");

  const customerTypeDetail = [
    {
      name: "Architecte",
      detail: [
        "site web de 2 à 5 pages",
        "Design esthétique et professionnel",
        "Gallerie (portfolio) pour présenter vos projets",
      ]
    },
    {
      name: "Bâtiment",
      detail: [
        "Deux options version:  one-page ou site vitrine",
        "Rédaction de contenu inclus dans l'offre",
      ]
    },
    {
      name: "Immobilier",
      detail: [
        "Deux options version : one-page ou site vitrine",
        "Mise en valeur de votre bien",
      ]
    },
    {
      name: "Autres prestations",
      detail: [
        "Charte graphique adaptée à votre logo existant",
        "Création de pages professionnelles",
      ]
    }
  ]

  // Group web services by customerType
  const webServicesByCustomerType = webServices.reduce((acc, service) => {
    if (!acc[service.customerType]) {
      acc[service.customerType] = [];
    }
    acc[service.customerType].push(service);
    return acc;
  }, {});

    // Group web services by customerType
    const otherServicesByCustomerType = otherServices.reduce((acc, service) => {
      if (!acc[service.customerType]) {
        acc[service.customerType] = [];
      }
      acc[service.customerType].push(service);
      return acc;
    }, {});



  return (
    <section id='service'>
      <div className="container__services"> 
        <h2>Nos services web sur mesure</h2>
        <p className='container__section-text'>Un site web professionnel est un <strong>atout</strong> précieux pour votre entreprise. Il vous permet de <strong>présenter vos produits et services </strong>de manière claire et attrayante, d'atteindre de <strong>nouveaux clients</strong> potentiels, et de <strong>renforcer votre crédibilité</strong> dans un monde de plus en plus numérique.</p>
        <div className="container__section">
          <div>
            <h3>Pourquoi un site web? </h3>
              <ul>
                <li><FontAwesomeIcon className='container__section-icon' icon={faPlay} />Présentation des vos produits et services</li>
                <li><FontAwesomeIcon className='container__section-icon' icon={faPlay} />Atteindre de nouveaux clients et propects</li>
                <li><FontAwesomeIcon className='container__section-icon' icon={faPlay} />Renforcer votre crédibilité sur le marché</li>
              </ul>
          </div>

          <div>
            <h3>Offre clé en main : </h3>
            <p className='container__section-text'>Notre offre clé en main vous garantit une création de site web sur mesure, prenant en compte vos idées et vos valeurs pour rédiger un contenu authentique qui reflète l'essence de votre entreprise. Grâce à notre équipe expérimentée, vous bénéficiez d'un accompagnement complet tout au long du processus, de la conception graphique à la rédaction de contenu, en passant par le développement sur mesure.</p>
          </div>
          <div>
            </div>          
            <h3>Avantages :</h3>
            <ul>
              <li><FontAwesomeIcon className='container__section-icon' icon={faPlus} /> Personnalisation : Chaque site est conçu selon vos besoins spécifiques et votre identité visuelle.</li>
              <li><FontAwesomeIcon className='container__section-icon' icon={faPlus} />  Simplicité du processus : Nous vous guidons à chaque étape, de la conception à la mise en ligne, pour une expérience fluide et sans stress.</li>
              <li><FontAwesomeIcon className='container__section-icon' icon={faPlus} /> Accompagnement personnalisé : Notre équipe est à votre écoute pour répondre à vos questions et ajuster le projet selon vos retours.</li>
              <li><FontAwesomeIcon className='container__section-icon' icon={faPlus} />  Rédaction de contenu : Nous valorisons votre expertise en rédigeant un contenu percutant qui met en avant vos services et valeurs.</li>
            </ul>
          </div>
        {/* Render container-cards for web services */}
        {Object.keys(webServicesByCustomerType).map((customerType, index) => (
  <div key={index} className="container__card">
    <div className="service-div">
      <div className="service-detail">
        <h3 className="customer-type">{customerType}</h3>
        <ul>
          {customerTypeDetail.map((detail, detailIndex) => {
            if (detail.name === customerType) {
              return detail.detail.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <span className="icon-circle"><FontAwesomeIcon icon={faPlay} /></span>
                  <div className="icon-div">{item}</div>
                </li>
              ));
            }
            return null;
          })}
        </ul>
        {/*<Link to={buttonLink}>
          <Button id="bannerButton" className="button" text={ButtonText}/>
        </Link>*/}
      </div>
      <div className="container__card-div">
      {webServicesByCustomerType[customerType].map((service, serviceIndex) => (
        <Card
          key={serviceIndex}
          serviceName={service.name}
          imageUrl={service.imageUrl}
          servicePrice={service.price}
          description={service.description}
          prestation={service.prestation}
        />
      ))}
      </div>
    </div>
  </div>
))}

      </div>

      <div className="container__services services-autre">
        <h2>Autres prestations</h2>
        <div className="container__section">
          <p className='container__section-text'>Découvrez également nos autres prestations spécialisées pour renforcer votre présence en ligne et dynamiser votre entreprise sur les réseaux sociaux.</p></div>
        {Object.keys(otherServicesByCustomerType).map((customerType, index) => (
  <div key={index} className='container__card'>
    <div className="service-div">
    <div className="service-detail">
    <h3 className="customer-type">{customerType}</h3>
    <ul>
      {customerTypeDetail.map((detail, detailIndex) => {
        if (detail.name === customerType) {
          return detail.detail.map((item, itemIndex) => (
            <li key={itemIndex}>
              <span className="icon-circle"><FontAwesomeIcon icon={faPlay} /></span>
              <div className="icon-div">{item}</div>
            </li>
          ));
        }
        return null;
      })}
    </ul>
    </div>
    <div className="container__card-div">
    {otherServicesByCustomerType[customerType].map((service, index) => (
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
  </div>
))}

      </div>
    </section>
  );
}

export default Services;
