import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Faq = ({ FaqData }) => {
  const [openIndices, setOpenIndices] = useState([]);

  const handleCardClick = (index) => {
    const currentIndex = openIndices.indexOf(index);
    if (currentIndex === -1) {
      // If the index is not in the openIndices array, add it
      setOpenIndices([...openIndices, index]);
    } else {
      // If the index is already in the openIndices array, remove it
      setOpenIndices(openIndices.filter((i) => i !== index));
    }
  };

  return (
    <section id="process">
      <div className="process__container">
        {FaqData.map((card, index) => (
          <div key={index} className="process__card" onClick={() => handleCardClick(index)}>
            <div className="process__card-title">
              <div className="card__title-div">
                <FontAwesomeIcon className="process__card-icon" icon={card.icon} />
                <h3>{card.title}</h3>
              </div>
              <FontAwesomeIcon icon={openIndices.includes(index) ? faChevronUp : faChevronDown} />
            </div>

            {openIndices.includes(index) && (
              <div className="process__card-text">
                {card.content.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
