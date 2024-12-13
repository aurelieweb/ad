import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ServiceDetail({ sections }) {
  return (
    <div className="pagevente__section">
      {sections.map((section, index) => {
        const positionClass = index % 2 === 0 ? "image-left" : "image-right";
        console.log(`Section ${index + 1}: Applying class ${positionClass}`);

        return (
          <div key={index} className={`service-detail ${positionClass}`}>
            {/* Afficher l'image ou l'iframe à gauche */}
            {index % 2 === 0 && (
              <div className="service-detail__image">
                {typeof section.image === "string" ? (
                  <img src={section.image} alt={section.title} />
                ) : (
                  section.image
                )}
              </div>
            )}

            {/* Contenu textuel */}
            <div className="service-detail__content">
              <h3 className="customer-type">{section.title}</h3>
              {section.subtitle && (
                <h4 className="section-subtitle">{section.subtitle}</h4>
              )}
              <ul>
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <span className="icon-circle">
                      <FontAwesomeIcon icon={section.icon} />
                    </span>
                    <div className="icon-div">{item}</div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Afficher l'image ou l'iframe à droite */}
            {index % 2 !== 0 && (
              <div className="service-detail__image">
                {typeof section.image === "string" ? (
                  <img src={section.image} alt={section.title} />
                ) : (
                  section.image
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ServiceDetail;
