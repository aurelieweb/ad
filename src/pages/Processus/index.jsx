import React from 'react';
import Banner from '../../components/Banner';

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
          
          <ul className="processus-liste">
            <li>
              <h3>Rendez-vous initial (30 minutes) :</h3>
              <ul>
                <li>Discussion approfondie de votre projet par visio ou téléphone.</li>
                <li>Compréhension de vos besoins et objectifs spécifiques.</li>
              </ul>
            </li>
            <li>
              <h3>Devis gratuit :</h3>
              <ul>
                <li>Élaboration d'un devis en fonction de vos exigences.</li>
              </ul>
            </li>
            <li>
              <h3>Acompte (30%) :</h3>
              <ul>
                <li>Paiement d'un acompte de 30% pour démarrer le projet.</li>
              </ul>
            </li>
            <li>
              <h3>Cahier des charges collaboratif :</h3>
              <ul>
                <li>Élaboration d'un cahier des charges détaillé en collaboration avec vous.</li>
                <li>Clarification de chaque aspect du projet pour éviter les imprévus.</li>
              </ul>
            </li>
            <li>
              <h3>Design personnalisé :</h3>
              <ul>
                <li>Proposition d'une charte graphique en accord avec votre identité visuelle.</li>
              </ul>
            </li>
            <li>
              <h3>Maquette numérique (si incluse dans votre forfait) :</h3>
              <ul>
                <li>Création d'une maquette pour visualiser l'apparence et l'expérience utilisateur de votre site.</li>
                <li>Validation de la maquette avant de passer à la phase de développement.</li>
              </ul>
            </li>
            <li>
              <h3>Développement et ajustements :</h3>
              <ul>
                <li>Intégration du site web avec les technologies modernes pour une performance optimale.</li>
                <li>Présentation d'une première version pour recueillir vos retours et effectuer des ajustements si nécessaire.</li>
              </ul>
            </li>
            <li>
              <h3>Déploiement :</h3>
              <ul>
                <li>Après validation, je t'envoie la facture.</li>
                <li>Mise en ligne du site à réception du paiement.</li>
              </ul>
            </li>
          </ul>

          <p>Mon processus de création est conçu pour vous offrir bien plus qu'un simple site web. Mon engagement est de comprendre votre entreprise, à saisir vos besoins spécifiques.</p>
          <p>Avec mon approche clé en main et mon attention méticuleuse aux détails, je suis là pour vous guider à chaque étape du chemin. Chez L’agence Digitale, je ne me contente pas de créer des sites web, je construis des partenariats durables.</p>
<p>Confiez-moi votre projet et laissez-moi transformer votre présence en ligne en une vitrine dynamique et efficace pour votre entreprise.</p>
        </section>
      </div>
    )
}

export default Processus;
