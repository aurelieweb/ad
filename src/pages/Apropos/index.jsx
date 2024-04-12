import React from 'react';
import Banner from '../../components/Banner';


function Apropos() {

    const pageTitle = "A propos de L'agence Digitale";
    const bannerText = "Création et développement de site web sur mesure pour artisan et pme à Thonon";
    const bannerImg = require('../../assets/imgPortrait.png');
    const bannerImgClass = "banner__img-presentation"

    return (
      <div className='main'>
        <Banner pageTitle={pageTitle} bannerImg={bannerImg} bannerText={bannerText} bannerImgClass={bannerImgClass}/>
        <section className='quisuisje' id='apropos__anchor'>
                    <h2>Qui-sui-je?</h2>
                    
                    <div className='apropos__container'>

                        <div className='apropos__container-text'>
                            <p>Je suis Aurélie DEMETRIO, créatrice de <strong>L’agence digitale</strong>, une passionnée d’informatique.</p>
                            <p>Mon parcours atypique de gestionnaire autodidacte dans le domaine du bâtiment a nourri ma curiosité pour le monde numérique, me permettant d'affiner mes compétences numériques tout au long de ma carrière.</p>
                        </div>
                    </div>    
                </section>

                <section className='parcours'>
                    <h2>Mon parcours</h2>
                    
                    <div className='apropos__container'>
                        <div className='apropos__container-text'>
                            <p>En 2017, je crée mon premier site web, amorçant ainsi ma reconversion professionnelle en 2020. </p>
                            <p>Officiellement diplômée depuis 2023, j’ai consolidé mes connaissances et compétences dans le développement web, le design et les services numériques.</p>
                        </div>
                    </div>    
                </section>

                <section className='mesatouts'>
                    <h2>Mes points forts</h2>
                    
                    <div className='apropos__container'>
                        <div className='apropos__container-text'>
                            <p>Mes 20 ans d'expérience dans le secteur du bâtiment et de l'immobilier constituent l'un de mes principaux atouts. Cette expertise métier me permet de comprendre parfaitement les besoins et les attentes de mes clients, et de leur offrir des solutions numériques adaptées et efficaces.</p>
                            <p>Je m'engage à accompagner les petites entreprises, artisans et indépendants dans la construction et la gestion de leur présence en ligne.</p>
                        </div>
                    </div>    
                </section>

                <section className='mesvaleurs'>
                    <h2>Mes valeurs</h2>
                    
                    <div className='apropos__container'>
                        <div className='apropos__container-text'>
                           <p>Au cœur de mon approche se trouvent l'intégrité, l'engagement et la qualité. Je crois fermement en la transparence et l'honnêteté dans toutes mes interactions professionnelles.</p>
                           <p>Sensible à la cause environnementale, je m'efforce de réduire l'empreinte écologique de mes activités en proposant des solutions numériques légères et respectueuses de l'éco-index.</p>
                        </div>
                    </div>    
                </section>

                <section className='monoffre'>
                    <h2>Offre spéciale pour les artisans et PME du bâtiment et de l'immobilier</h2>
                    
                    <div className='apropos__container'>
                        <div className='apropos__container-text'>
                            <p>En tant qu'artisan, je comprends l'importance de disposer d'une solution numérique clé en main pour promouvoir votre activité. Avec mon offre spéciale artisan, vous bénéficierez d'une solution tout-en-un comprenant la rédaction de contenu, grâce à mon expertise métier et ma connaissance approfondie du secteur. Nos offres sont conçues sur mesure pour s'adapter à votre budget et votre emploi du temps chargé. Mon objectif est de vous faire gagner du temps et de vous offrir une présence en ligne professionnelle qui vous distingue de la concurrence.</p>
                        </div>
                    </div>    
                </section>
   
        </div>
    )
}

export default Apropos;