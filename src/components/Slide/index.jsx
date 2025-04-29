import React, { useState } from 'react';
import '../../styles/styles.scss';
import ImgSlide from '../../assets/imgTeam.png';

//Fonction slide
function Slide() {
  const [selectedTab, setSelectedTab] = useState('aPropos');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="slide">
      <img className="slide__image" src={ImgSlide} alt="Création site web Thonon les Bains" loading='lazy' />

      <div className="slide__content">
        <div className='slide__content-tab'>
          <ul>
            <li
              onClick={() => handleTabClick('aPropos')}
              className={selectedTab === 'aPropos' ? 'active' : ''}
            >
              Notre histoire
            </li>
            <li
              onClick={() => handleTabClick('valeurs')}
              className={selectedTab === 'valeurs' ? 'active' : ''}
            >
              Nos valeurs
            </li>
          </ul>
        </div>

        <div className={`slide__content-text ${selectedTab === 'aPropos' ? 'text-a' : 'text-b'}`}>
          {/* affichage conditionnel */}
          {selectedTab === 'aPropos' ? (
            <>
              <p>Je suis Aurélie DEMETRIO, créatrice de L’agence digitale, une passionnée d’informatique qui a tracé son chemin dans le monde numérique à travers une carrière riche en apprentissages.</p>
              <p>Mon parcours atypique de gestionnaire autodidacte dans le domaine du bâtiment ont nourri ma curiosité pour l'informatique à chaque étape de mon parcours, me permettant d'affiner mes compétences numériques tout au long de ma carrière.</p>
              <p>En 2017, je crée mon premier site web, amorçant ainsi ma reconversion professionnelle en 2020. </p>
              <p>Officiellement diplômée depuis 2023, j’ai consolidé mes connaissances et compétences dans le développement web, le design et les services numériques.</p>
              <p>Chez L’agence Digitale, la créativité et la technologie s'unissent pour des solutions numériques sur mesure. Nous nous engageons à accompagner les petites entreprises, artisans et indépendants dans la construction et la gestion de leur présence en ligne.</p>
              <p>Explorez nos services et découvrez comment nous pouvons collaborer pour faire de votre présence en ligne une réussite.</p>
            </>
          ) : (
            <>
              <p>Engagé pour un avenir durable, nous privilégions des fournisseurs français et européens, marquant ainsi notre engagement envers l’environnement et l’économie locale. Chaque installation que nous réalisons est pensée pour allier efficacité énergétique et réduction des émissions de carbone, contribuant ainsi à un avenir plus durable</p>
              <p>Notre équipe expérimentée combine compétences techniques et conscience environnementale pour concevoir des solutions durables et performantes. Nous assurons un service après-vente fiable, garantissant votre tranquillité d’esprit à chaque étape.</p>
              <p>Explorez nos solutions complètes en plomberie, chauffage et pompe à chaleur. Ensemble, créons un avenir plus éthique et plus confortable.</p>

            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Slide;

