import React from 'react';
import Banner from '../../components/Banner';
import Process from '../../sections/Process';

function Processus() {

    const pageTitle = "Processus de développement";
    const bannerText = "Création et développement de site web sur mesure pour artisan et pme à Thonon";
    const bannerImg = require('../../assets/imgBanner.jpg');
    const bannerImgClass = "banner__image"

    return (
      <div className='main'>
        <Banner pageTitle={pageTitle} bannerImg={bannerImg} bannerText={bannerText} bannerImgClass={bannerImgClass}/>
        
        <section className='processus'>
          <h2>Processus de création</h2>
          <p>Chez L’agence Digitale, nous comprenons que votre temps est précieux. C'est pourquoi nous proposons une approche clé en main pour la création de votre site web. De la rédaction du contenu à l'optimisation des médias, nous nous chargeons de chaque détail pour vous permettre de vous concentrer sur ce qui compte vraiment : votre entreprise. Découvrez ci-dessous notre processus de création étape par étape.</p>
          <Process />

          <p>Mon processus de création est conçu pour vous offrir bien plus qu'un simple site web. Mon engagement est de comprendre votre entreprise, à saisir vos besoins spécifiques.</p>
          <p>Avec mon approche clé en main et mon attention méticuleuse aux détails, je suis là pour vous guider à chaque étape du chemin. Chez L’agence Digitale, je ne me contente pas de créer des sites web, je construis des partenariats durables.</p>
<p>Confiez-moi votre projet et laissez-moi transformer votre présence en ligne en une vitrine dynamique et efficace pour votre entreprise.</p>
        </section>
      </div>
    )
}

export default Processus;
