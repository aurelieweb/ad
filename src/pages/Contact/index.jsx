import React from 'react';
import Banner from '../../components/Banner';
import ContactForm from '../../components/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationPin } from '@fortawesome/free-solid-svg-icons';
//import Maintenance from '../../components/MaintenancePage'

const buttons = [
  { text: 'Prendre rendez-vous', link: '/Calendly' }
];

function Contact() {

    const pageTitle = "Nous contacter";
    const bannerText = "Prêt à concrétiser votre projet digital ? Contactez-nous dès maintenant pour des conseils experts et une offre clé en main";
    const bannerClass = "banner banner-presentation"
    const bannerImg = require('../../assets/imgBanner_contact_aurelie_demetrio.jpg');
    const bannerImgClass = "banner__img-presentation";

    return (
      <div className='main'>
       <Banner 
            pageTitle={pageTitle} 
            bannerClass={bannerClass}
            bannerImg={bannerImg} 
            bannerText={bannerText} 
            bannerImgClass={bannerImgClass} 
            buttons={buttons}/>
            <section id='contact'>
                <h2>Besoin d'un site web pour votre entreprise du secteur de la Construction ou de l'Immobilier ?</h2>
                <p className='section-text'>
                Optimisez votre présence en ligne avec des sites web sur mesure. Que vous soyez un entrepreneur passionné ou une entreprise établie, nous sommes prêts à transformer vos idées en réalité numérique. Contactez-nous aujourd'hui et donnez vie à vos projets digitaux!
                </p>
                <section id='contact__section'>
        <div className="contact__container">
          <div className="contact__card">
            <h3 className='contact__card-title'>Adresse</h3>
            <span><FontAwesomeIcon icon={faLocationPin} className='contact__icon'/></span>
            <p>17, chemin des Troncs <br /> 74200 Allinges</p>
          </div>
          <div className="contact__card">
            <h3 className='contact__card-title'>Téléphone</h3>
            <span><FontAwesomeIcon icon={faPhone} className='contact__icon'/></span>
            <a href="tel:+33636869270">06 36 86 92 70</a>
          </div>
          <div className="contact__card">
            <h3 className='contact__card-title'>E-mail</h3>
            <span><FontAwesomeIcon icon={faEnvelope} className='contact__icon'/></span>
            <a href="mailto:contact@aureliededemetrio.fr">contact@aureliedemetrio.fr</a>
          </div>
        </div>
      </section>
                < ContactForm/>
            </section> 
        </div>
    )
}

export default Contact;