import React from 'react';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import ImgTeam from '../../assets/imgTeam.png';
import ImgSiteReact from '../../assets/imgMaintenance.png'
import ImgSiteWP from '../../assets/imgMaintenance.png'
import ImgIdentitéVisuelle from '../../assets/imgMaintenance.png'
import ImgProjet1 from '../../assets/imgProjet1.png';


function Accueil() {

    const pageTitle = "Bienvuenue sur L'agence Digitale";

/*Data services
    name:
    description:
    img:
    prix
*/ 
    const services = [
      { name: 'Site one page', 
      description: 'test',
      imageUrl: ImgSiteWP, 
      price: '1200,00'
      },
      { name: 'Site react', 
        description: 'test',
        imageUrl: ImgSiteReact, 
        price: '2000,00'
      },
      { name: 'Site react personnalisé', 
        description: 'test',
        imageUrl: ImgIdentitéVisuelle,
        price: '800,00' 
      },
      // Ajoutez d'autres services avec leurs prix ici
    ];

    

/*Data projets
    -Title
    -Description
    -img
*/ 
    const projets = [
        {
            title: 'Entreprise de Plomberie Chauffagiste',
            description: 'Refonte totale du site d\'un artisan plombier chauffagiste. Mise en avant de son éthique professionnelle, de ses services de qualité, et simplification du processus de contact pour ses clients.',
          imageUrl: ImgProjet1,
        },
      ];

    return (
        
        <div className='main'>
            <Banner pageTitle={pageTitle}/>
            <section >
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

            <section  id='service'>
              <h2>Services de Développement Web Personnalisés</h2>
              <p className='section-text'>Optimisez votre présence en ligne avec nos solutions de développement web sur mesure. De la création de sites web attractifs à la refonte complète, nous donnons vie à votre vision digitale.</p> 
              <div className='container__card'>
                  {services.map((service, index) => (
                  <Card
                    key={index}
                    serviceName={service.name}
                    imageUrl={service.imageUrl}
                    servicePrice={service.price}
                    description={service.description}
                  />
                        ))}
                </div>
            </section>
            <section id='nosProjets'>
        <h2>Nos Projets</h2>
        <p className='section-text'>
          Découvrez quelques-uns de nos projets récents, mettant en avant notre créativité et notre expertise.
        </p>
        <div className='container__projets'>
          {projets.map((projet, index) => (
            <div key={index} className='projet__card'>
              <img src={projet.imageUrl} alt={projet.title} />
              <h3 className='projet__card-title'>{projet.title}</h3>
              <p className='projet__card-text'>{projet.description}</p>
            </div>
          ))}
        </div>
      </section>


        </div>
    );
}
export default Accueil;