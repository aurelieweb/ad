import React from 'react';
import Banner from '../../components/Banner';
import Process from '../../sections/Process';

function Processus() {

    const pageTitle = "Comment se déroule un projet avec L'agence Digitale?";
    const bannerText = "Découvrez ma méthode pour créer votre site web en toute sérénité";
    const bannerImg = require('../../assets/imgBanner.jpg');
    const bannerClass = "banner banner-prestation"
    const bannerImgClass = "banner__image";
    const bannerButtonText = "En savoir plus"
    const buttonLink = "/contact";

    return (
      <div className='main'>
       <Banner 
            pageTitle={pageTitle} 
            bannerClass={bannerClass}
            bannerImg={bannerImg} 
            bannerText={bannerText} 
            bannerImgClass={bannerImgClass} 
            buttonLink={buttonLink} 
            bannerButtonText={bannerButtonText}/>
        <section className='processus'>
          <h2>Notre méthode</h2>
          <div className='container__processus'>
            <p>Chez L’agence Digitale, nous comprenons que votre temps est précieux.</p>
            <p>C'est pourquoi nous proposons une approche clé en main pour la création de votre site web. De la rédaction du contenu à l'optimisation des médias, nous nous chargeons de chaque détail pour vous permettre de vous concentrer sur ce qui compte vraiment : votre entreprise.</p>
            <p> Découvrez ci-dessous notre processus de création étape par étape :</p>
          </div>
          <Process />
        </section>
      </div>
    )
}

export default Processus;
