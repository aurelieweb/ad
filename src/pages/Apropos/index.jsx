import React from 'react';
import Banner from '../../components/Banner';


function Apropos() {

    const pageTitle = "A propos : Mon expertise dans le secteur de la Construction et de l'Immobilier";
    const bannerText = "Découvrez notre histoire, notre engagement dans le secteur du bâtiment et de l'immobilier. Avec une expertise métier solide, nous simplifions la création de sites web pour artisans et PME, en vous offrant des solutions clé en main, rédigées sur mesure pour refléter vos valeurs et votre vision.";
    const bannerImg = require('../../assets/imgPortrait.png');
    const bannerImgClass = "banner__img-presentation"
    const bannerButtonText = "Prendre rendez-vous"
    const buttonLink = "/Calendly";

    return (
      <div className='main'>
       <Banner pageTitle={pageTitle} bannerImg={bannerImg} bannerText={bannerText} bannerImgClass={bannerImgClass} buttonLink={buttonLink} bannerButtonText={bannerButtonText}/>
        <section className='quisuisje' id='apropos__anchor'>
            <h2>Qui suis-je?</h2>
    
            <div className='apropos__container'>

                <div className='apropos__container-text'>
                    <p>Je suis Aurélie DEMETRIO, la fondatrice de <strong>L’Agence Digitale</strong>. 
                        Avec 20 ans d'expérience dans le domaine du bâtiment et de l'immobilier, mon parcours professionnel a été marqué par une transition vers le monde numérique. En tant que gestionnaire autodidacte, j'ai développé mes compétences numériques tout au long de ma carrière, nourrissant ma curiosité pour les possibilités offertes par la technologie.</p>
                    <p>En 2017, j'ai franchi un nouveau cap en créant mon premier site web. Cette étape a été suivie d'une décision audacieuse en 2021 : celle de reprendre mes études dans le domaine du développement web et du design.</p>
                    <p>Après avoir obtenu mon diplôme en 2023,  j'ai consolidé mon expertise dans le domaine numérique. Mon parcours atypique et mon expérience variée me confèrent une compréhension approfondie des besoins de mes clients.</p>
                </div>
            </div>    
        </section>

                <section className='mesvaleurs'>
                    <h2>Mes valeurs</h2>
                    
                    <div className='apropos__container'>
                        <div className='apropos__container-text'>
                            <p>L'écoute attentive de nos clients est au cœur de notre approche collaborative. Nous nous engageons à accompagner nos clients à chaque étape de la réalisation de leur projet, en validant régulièrement avec eux pour nous assurer que notre travail répond parfaitement à leurs attentes.</p>
                           <p>Nous croyons fermement en la qualité de notre travail et en l'importance de fournir des solutions numériques performantes et écologiques. Nous nous efforçons de réduire notre empreinte environnementale en proposant des sites web respectueux de l'éco-index. En utilisant des technologies modernes et légères, nous sommes en mesure de fournir des sites web à la fois performants et respectueux de l'environnement.</p>
                        </div>
                    </div>    
                </section>

                <section className='monoffre'>
                    <h2>Offre spéciale pour les artisans et PME du Bâtiment</h2>
                    
                    <div className='apropos__container offre-artisan'>
                        <div className='apropos__container-text'>
                            <p>En tant qu'artisan, je comprends l'importance de disposer d'une solution numérique clé en main pour promouvoir votre activité. Avec mon offre spéciale artisan, vous bénéficierez d'une solution tout-en-un comprenant la rédaction de contenu, grâce à mon expertise métier et ma connaissance approfondie du secteur. Nos offres sont conçues sur mesure pour s'adapter à votre budget et votre emploi du temps chargé. Mon objectif est de vous faire gagner du temps et de vous offrir une présence en ligne professionnelle qui vous distingue de la concurrence.</p>
                        </div>
                    </div>    
                </section>
   
        </div>
    )
}

export default Apropos;