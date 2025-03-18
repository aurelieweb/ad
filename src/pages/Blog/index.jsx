import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

import Banner from '../../components/Banner';
import FreebiePopup from '../../components/FreebiePopup';

const buttons = [
  { text: 'Consultation gratuite', link: '/Calendly' },
];

function Blog() {
  const pageTitle = "Création de sites web : Architectes, Entreprise Bâtiment et Immobilier";
  const bannerText = "Mettez en avant votre savoir-faire avec Aurélie DEMETRIO de L'agence Digitale. Offrez à votre expertise la visibilité qu'elle mérite.";
  const bannerImg = require('../../assets/img_coaching_creation_site_web.jpeg');
  const bannerClass = "banner banner-presentation";
  const bannerImgClass = "banner__img-presentation";

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://aureliedemetrio.fr/blog/wp-json/wp/v2/posts")
        .then(response => {
            console.log("Données API :", response.data); // 🔍 Affiche les articles dans la console
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
        {posts.map(post => (
            <div key={post.id}>
                <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                <Link to={`/article/${post.id}`}>Lire l’article</Link>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
