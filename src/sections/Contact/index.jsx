import React from "react";
import ContactForm from '../../components/ContactForm';

function Contact() {

    return (
        <section id='contact'>
            <h2>Contactez-nous pour des solutions web personnalisées</h2>
            <p className='section-text'>
            Optimisez votre présence en ligne avec des sites web sur mesure. Que vous soyez un entrepreneur passionné ou une entreprise établie, nous sommes prêts à transformer vos idées en réalité numérique. Contactez-nous aujourd'hui et donnez vie à vos projets digitaux!
            </p>
            
                < ContactForm/>
         </section> 
    )
}

export default Contact;