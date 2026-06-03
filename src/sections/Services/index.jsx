import React from "react";
import Card from "../../components/Card";

const servicesData = require('../../data/serviceData.json');

function Services() {

  console.log("servicesData :", servicesData);

  const webServices = servicesData.filter(
    service => service.type === "Prestation"
  );

  console.log("webServices :", webServices);

  const customerTypeDetail = [
    {
      name: "Fluidifier & automatiser votre activité",
      detail: [
        "J’analyse vos processus et mets en place des automatisations sur mesure pour réduire les tâches répétitives, fiabiliser vos données et améliorer votre efficacité opérationnelle."
      ]
    },
    {
      name: "Site web connectés & outils métier",
      detail: [
        "Je conçois des sites web modernes et connectés à vos outils métiers, pour centraliser les informations, automatiser certains échanges et offrir une expérience plus fluide à vos clients."
      ]
    },
  ];

  const groupServicesByCustomerType = (services) => {
    return services.reduce((acc, service) => {

      console.log("service :", service);

      if (!acc[service.customerType]) {
        acc[service.customerType] = [];
      }

      acc[service.customerType].push(service);

      return acc;
    }, {});
  };

  const webServicesByCustomerType =
    groupServicesByCustomerType(webServices);

  console.log(
    "webServicesByCustomerType :",
    webServicesByCustomerType
  );

  console.log(
    "Object.keys :",
    Object.keys(webServicesByCustomerType)
  );

  return (
    <section id='service'>
      <div className="container__services">

        <h2>
          2 expertises complémentaires pour transformer votre organisation digitale
        </h2>

        <p className="section-text">
          J’accompagne les entreprises dans la mise en place de
          <strong> solutions digitales connectées</strong>,
          pensées pour structurer les processus,
          centraliser les informations et automatiser les tâches répétitives.
          <br /><br />
          L’objectif : créer un environnement digital plus fluide,
          plus fiable et mieux adapté à vos méthodes de travail,
          que ce soit à travers un
          <strong> site web connecté</strong>,
          des <strong>automatisations métier </strong>
          ou l’intégration de vos outils existants.
        </p>

        <div className="container__prestation">

          {Object.keys(webServicesByCustomerType).map(
            (customerType, index) => {

              console.log("customerType :", customerType);

              return (
                <div key={index} className="container__card">

                  <div className="service-div">

                    <div className="service-detail">

                      <h3 className="customer-type">
                        {customerType}
                      </h3>

                      <ul>
                        {customerTypeDetail.map(
                          (detail, detailIndex) => (

                            detail.name === customerType &&
                            detail.detail.map((item, itemIndex) => (

                              <li key={itemIndex}>
                                <div className="icon-div">
                                  {item}
                                </div>
                              </li>

                            ))
                          )
                        )}
                      </ul>

                    </div>

                    <div className="container__card-div">

                      {webServicesByCustomerType[customerType].map(
                        (service, serviceIndex) => {

                          console.log(
                            "service card :",
                            service
                          );

                          return (
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
                          );
                        }
                      )}

                    </div>

                  </div>

                </div>
              );
            }
          )}

        </div>
      </div>
    </section>
  );
}

export default Services;