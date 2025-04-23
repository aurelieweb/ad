// IconCard.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function IconCard({ icon, title, text }) {
  return (
    <div className="icon-card">
      <span className="icon-card__icon">
        <FontAwesomeIcon icon={icon} />
      </span>
      <h3 className="icon-card__title">{title}</h3>
      <p className="icon-card__text">{text}</p>
    </div>
  );
}

IconCard.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default IconCard;
