import React, { useState } from 'react';

// Fonction menu
function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="menu">
      <button className="menu__burger" onClick={toggleMenu}>
        ☰
      </button>
      {menuOpen && (
        <button className="close-button" onClick={closeMenu}>
          ✕
        </button>
      )}
      <ul className={`menu__list ${menuOpen ? 'open' : ''}`}>
        <li className="menu__item">
          <span className="menu__item-link" onClick={closeMenu}>
            Accueil
          </span>
        </li>
        <li className="menu__item">
          <span className="menu__item-link" onClick={closeMenu}>
            Nos services
          </span>
        </li>
        <li className="menu__item">
          <span className="menu__item-link" onClick={closeMenu}>
            Nos réalisations
          </span>
        </li>
        <li className="menu__item">
          <span className="menu__item-link" onClick={closeMenu}>
            Devis en ligne
          </span>
        </li>
        <li className="menu__item">
          <span className="menu__item-link" onClick={closeMenu}>
            Contact
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
