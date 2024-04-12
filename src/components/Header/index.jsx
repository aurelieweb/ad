import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/styles.scss';
import Menu from '../../components/Menu';
import logo from '../../assets/logo1.png';


//import Fontawesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="header__container">
        

        <div className='header__contact-container'>
          <div className='header__contact'>
            <div className='header__contact-details'>
              {/*Vérifier la méthode*/}
              <a href="tel:+33636869270"><FontAwesomeIcon icon={faPhone} /> 06 36 86 92 70</a>
              <a href="mailto:contact@adlagencedigitale.fr"> <FontAwesomeIcon icon={faEnvelope} />contact@adlagencedigitale.fr</a>
            </div>
            <div className='header__contact-media'>
              <a href='https://www.facebook.com/profile.php?id=100090450013493'><span className='sr-only'>aria-label='Facebook'</span> <FontAwesomeIcon icon={faFacebookF} /></a>
              <a href='https://www.instagram.com/ad.lagencedigitale/'><span className='sr-only'> aria-label='Instagram'</span> <FontAwesomeIcon icon={faInstagram} /></a>
              <a href='https://www.linkedin.com/in/aur%C3%A9lie-demetrio-361089118/'><span className='sr-only'> aria-label='Linkedin'</span> <FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
          
        </div>
        <div className='header__logo'>
          <Link to="/">
            <img className="logo" src={logo} alt="Logo Aurélie DEMETRIO, L'agence Digitale, développeur freelance " />
          </Link>
          {/*<div className='header__logo-text'> 
            <p>Aurélie Demetrio</p>
            <p>L'agence Digitale</p>
  </div>*/}
          <Menu/>
        </div>
        
    </header>
  );
}

export default Header;
