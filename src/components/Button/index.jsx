import React from 'react';
import '../../styles/styles.scss';

/* Fonction Button */

function Button({ text, className = '', onClick, type = 'button' }) {
  return (
    <span className="button-wrapper">
      <button
        className={`button ${className}`}
        type={type}
        onClick={onClick}
      >
        {text}
      </button>

    </span>
  );
}

export default Button;