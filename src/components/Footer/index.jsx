import React from 'react';
import '../../styles/styles.scss';
import Menu from '../../components/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


//Fonction Footer
function Footer() {
    return (
        <footer className='footer'>
            <Menu />
            <div className='footer__media'>
                <span className='span-media'><a href='https://www.facebook.com/profile.php?id=100090450013493'><span className='sr-only'>aria-label='Facebook'</span> <FontAwesomeIcon icon={faFacebookF} /></a></span>
                <span className='span-media'><a href='https://www.instagram.com/ad.lagencedigitale/'><span className='sr-only'> aria-label='Instagram'</span> <FontAwesomeIcon icon={faInstagram} /></a></span>
                <span className='span-media'><a href='https://www.linkedin.com/in/aur%C3%A9lie-demetrio-361089118/'><span className='sr-only'> aria-label='Linkedin'</span> <FontAwesomeIcon icon={faLinkedinIn} /></a></span>
            </div>
            <p>Copyright 2023. Designed by L'agence Digitale</p>
        </footer>
    )
}

export default Footer;