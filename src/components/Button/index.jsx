import React from 'react';
import '../../styles/styles.scss';

/* Fonction Button */

function Button({ text, className = '', onClick, type = 'button' }) {
  return (
    <button
      className={`button ${className}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
