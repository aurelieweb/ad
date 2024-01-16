import React from 'react';
import Banner from '../../components/Banner';
import ImgTeam from '../../assets/imgTeam.png';


function Accueil() {

    const pageTitle = "L'agence Digitale";
    
    return (
        <div className='main'>
            <Banner pageTitle={pageTitle}/>
            <section>
                <h2>Boostez votre Présence Digitale avec L’agence Digitale : Expertise Web au Service de Votre Réussite</h2>
                <p className='section-text'>De la création de sites web personnalisés à la gestion de votre identité numérique, nous mettons notre expertise au service de votre réussite digitale.</p>
                
                <div className='apropos__container'>
                    <div className='apropos__container-img'>
                        <img src={ImgTeam} alt="Aurélie DEMETRIO - Création de site web à Thonon" />
                    </div>
                    <div className='apropos__container-text'>
                        <p>Je suis Aurélie DEMETRIO, créatrice de L’agence digitale, une passionnée d’informatique qui a tracé son chemin dans le monde numérique à travers une carrière riche en apprentissages.</p>
                        <p>Mon parcours atypique de gestionnaire autodidacte dans le domaine du bâtiment ont nourri ma curiosité pour l'informatique à chaque étape de mon parcours, me permettant d'affiner mes compétences numériques tout au long de ma carrière.</p>
                        <p>En 2017, je crée mon premier site web, amorçant ainsi ma reconversion professionnelle en 2020. </p>
                        <p>Officiellement diplômée depuis 2023, j’ai consolidé mes connaissances et compétences dans le développement web, le design et les services numériques.</p>
                        <p>Chez L’agence Digitale, la créativité et la technologie s'unissent pour des solutions numériques sur mesure. Nous nous engageons à accompagner les petites entreprises, artisans et indépendants dans la construction et la gestion de leur présence en ligne.</p>
                        <p>Explorez nos services et découvrez comment nous pouvons collaborer pour faire de votre présence en ligne une réussite.</p>
                    </div>
                </div>    
            </section>


        </div>
    );
}
export default Accueil;