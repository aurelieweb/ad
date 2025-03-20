import React, { useState, useEffect } from 'react';
import axios from "axios";
import Button from '../../components/Button'; 
import Banner from '../../components/Banner';
import FreebiePopup from '../../components/FreebiePopup';

const buttons = [
  { text: 'En savoir plus', link: '/Calendly' },
];

function Blog() {
  const pageTitle = "Optimiser son site et automatiser son business - Le blog";
  const bannerText = "Mettez en avant votre savoir-faire avec Aurélie DEMETRIO de L'agence Digitale. Offrez à votre expertise la visibilité qu'elle mérite.";
  const bannerImg = require('../../assets/img_coaching_creation_site_web.jpeg');
  const bannerClass = "banner banner-presentation";
  const bannerImgClass = "banner__img-presentation";

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://aureliedemetrio.fr/blog/wp-json/wp/v2/posts?_embed") // Ajout de _embed pour récupérer les images
      .then(response => {
        console.log("Données API :", response.data); // Affiche les articles dans la console
        setPosts(response.data);
      })
      .catch(error => console.error("Erreur API :", error));
  }, []);

  return (
    <div className='main'>
      <FreebiePopup />
      <Banner
        pageTitle={pageTitle}
        bannerClass={bannerClass}
        bannerImg={bannerImg}
        bannerText={bannerText}
        bannerImgClass={bannerImgClass}
        buttons={buttons}
      />
      
      <div className='container-blog'>
        {posts.map(post => {
          const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
          const categories = post._embedded?.['wp:term']?.[0]?.map(cat => cat.name).join(', ');
          const postLink = `/article/${post.id}`;

          return (
            <div className='blog_card' key={post.id}>
              {featuredImage && (
                <img className='blog_card-img' src={featuredImage} alt={post.title.rendered} />
              )}
              <div className='blog_card-content'>
                {/* Ajout des catégories */}
                <div>
                {categories && <p className="blog_card-categories">{categories}</p>}
                </div>
                <h2 className='blog_card-title' dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                <p className='blog_card-text' dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered || '' }} />
                
                {/* Bouton vers l'article complet */}
                <a href={postLink} className="blog_card-link">
                  <Button className="button" text="Lire l’article" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
