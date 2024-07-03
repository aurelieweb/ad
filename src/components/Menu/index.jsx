import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importez Link depuis react-router-dom pour les liens internes

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
          <Link to="/" className="menu__item-link" onClick={closeMenu}>
            Accueil
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/Prestations" className="menu__item-link" onClick={closeMenu}>
            Prestations
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/Realisations" className="menu__item-link" onClick={closeMenu}>
            Réalisations
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/A-propos" className="menu__item-link" onClick={closeMenu}>
            A propos
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/Contact" className="menu__item-link" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
