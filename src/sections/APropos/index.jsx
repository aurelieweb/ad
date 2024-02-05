import React from "react";
import ImgTeam from '../../assets/imgTeam.png';

function APropos (){

    return (
        <section id='aPropos'>
                    <h2>Boostez votre présence digitale avec L’agence Digitale</h2>
                    <p className='section-text'>De la création de sites web personnalisés à la gestion de votre identité numérique, nous mettons notre expertise au service de votre réussite digitale.</p>
                    
                    <div className='apropos__container'>
                        <div className='apropos__container-img'>
                            <img src={ImgTeam} alt="Aurélie DEMETRIO - Création de site web à Thonon" />
                        </div>
                        <div className='apropos__container-text'>
                            <p>Je suis Aurélie DEMETRIO, créatrice de <strong>L’agence digitale</strong>, une passionnée d’informatique.</p>
                            <p>Mon parcours atypique de gestionnaire autodidacte dans le domaine du bâtiment a nourri ma curiosité pour le monde numérique, me permettant d'affiner mes compétences numériques tout au long de ma carrière.</p>
                            <p>En 2017, je crée mon premier site web, amorçant ainsi ma reconversion professionnelle en 2020. </p>
                            <p>Officiellement diplômée depuis 2023, j’ai consolidé mes connaissances et compétences dans le développement web, le design et les services numériques.</p>
                            <p>Chez L’agence Digitale, créativité et technologie s'unissent pour offrir des solutions numériques sur mesure. Nous nous engageons à accompagner les petites entreprises, artisans et indépendants dans la construction et la gestion de leur présence en ligne.</p>
                            <p>Explorez nos services et découvrez comment nous pouvons collaborer pour faire de votre présence en ligne une réussite.</p>
                        </div>
                    </div>    
                </section>
    )
}

export default APropos;