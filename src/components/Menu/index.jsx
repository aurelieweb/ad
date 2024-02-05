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
        <a href="#accueil" className="menu__item-link" onClick={closeMenu}>
            Accueil
          </a>
        </li>
        <li className="menu__item">
          <a href="#service" className="menu__item-link" onClick={closeMenu}>
            Nos services
          </a>
        </li>
        <li className="menu__item">
          <a href="#nosProjets" className="menu__item-link" onClick={closeMenu}>
            Nos réalisations
          </a>
        </li>
        <li className="menu__item">
          <a href="#devis" className="menu__item-link" onClick={closeMenu}>
            Devis en ligne
          </a>
        </li>
        <li className="menu__item">
          <a href="#contact" className="menu__item-link" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
