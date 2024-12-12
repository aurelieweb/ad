import React from "react";
//import { Link } from 'react-router-dom';
import Card from "../../components/Card";
//import Button from '../../components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faPlay } from '@fortawesome/free-solid-svg-icons';
import imgNosServices from '../../assets/imgBanner2.jpeg';


const servicesData = require('../../data/serviceData.json');
//const ButtonText = "Prendre rendez-vous";
//const buttonLink = "/Calendly";

function Services() {
  const webServices = servicesData.filter(service => service.type === "Site web");
  const otherServices = servicesData.filter(service => service.type !== "Site web");

  const customerTypeDetail = [
    {
      name: "Création de site",
      detail: [
        
      ]
    },
    {
      name: "Création de site internet Bâtiment & Architecte",
      detail: [
        "Deux options version:  one-page ou site vitrine",
        "Design esthétique et professionnel",
        "Mise en valeur de votre univers",
        "Gallerie (portfolio) pour présenter vos projets",
        "Offre spéciale Artisan: Rédaction de contenu inclus dans l'offre",
      ]
    },
    {
      name: "Nos accompagnements pour la création de site internet",
      detail: [
        "Audit express de votre site",
        'Coaching en one to one pour optimiser ton site',
        "Un avis professionnel sur ton site"
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
        <p className='container__section-text'>Un site web professionnel est un <strong>atout</strong> précieux pour votre entreprise. Il vous permet de <strong>présenter vos produits et services </strong>de manière claire et attrayante, d'atteindre de <strong>clients qualifiés</strong>, et de <strong>mettre en avant votre savoir-faire unique</strong> dans un monde de plus en plus numérique.</p>
        <div className="container__section">
        <img src={imgNosServices} alt="Aurélie DEMETRIO - L'Agence Digitale" />
        <div className="container__services-div">
          <div>
            <h3>Pourquoi un site web? </h3>
              <ul>
                <li><FontAwesomeIcon className='container__section-icon' icon={faPlay} />Présentation des vos produits et services</li>
                <li><FontAwesomeIcon className='container__section-icon' icon={faPlay} />Atteindre de nouveaux clients et propects</li>
                <li><FontAwesomeIcon className='container__section-icon' icon={faPlay} />Renforcer votre crédibilité sur le marché</li>
              </ul>
          </div>

          {/*<div>
            <h3>Offre clé en main : </h3>
            <p className='container__section-text'>Notre offre clé en main vous garantit une création de site web sur mesure, prenant en compte vos idées et vos valeurs pour rédiger un contenu authentique qui reflète l'essence de votre entreprise. Grâce à notre équipe expérimentée, vous bénéficiez d'un accompagnement complet tout au long du processus, de la conception graphique à la rédaction de contenu, en passant par le développement sur mesure.</p>
          </div>*/}
          <div>
       
            <h3>Avantages :</h3>
            <ul>
              <li><FontAwesomeIcon className='container__section-icon' icon={faPlus} /> Personnalisation : Chaque site est conçu selon vos besoins spécifiques et votre identité visuelle.</li>
              <li><FontAwesomeIcon className='container__section-icon' icon={faPlus} />  Simplicité du processus : Nous vous guidons à chaque étape, de la conception à la mise en ligne, pour une expérience fluide et sans stress.</li>
              <li><FontAwesomeIcon className='container__section-icon' icon={faPlus} /> Accompagnement personnalisé : Notre équipe est à votre écoute pour répondre à vos questions et ajuster le projet selon vos retours.</li>
              <li><FontAwesomeIcon className='container__section-icon' icon={faPlus} />  Rédaction de contenu : Nous valorisons votre expertise en rédigeant un contenu percutant qui met en avant vos services et valeurs.</li>
            </ul>
            </div>
            </div>
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
          buttonText={service.buttonText}
          prestation={service.prestation}
          link={service.link}
        />
      ))}
      </div>
    </div>
  </div>
))}

      </div>

      <div className="container__services services-autre">
        <h2>Comment optimiser ton site web : Nos autres prestations</h2>
        <div className="container__section">
          <p className='container__section-text'>Vous avez besoin d'aide pour mettre en valeur votre savoir-faire? <strong>Je vous accompagne</strong> pour renforcer votre présence en ligne. Je mets mon expertise à votre service <strong>pour optimiser votre site</strong> et <strong>booster votre activité</strong>. Vous vous occupez de la gestion de votre site internet? Vous avez besoin d'un avis professionnel ou d'un acompagnement? Parlons-en.</p></div>
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
        buttonText={service.buttonText}
        prestation={service.prestation}
        link={service.link}
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
