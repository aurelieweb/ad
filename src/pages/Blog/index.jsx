import React, { useState, useEffect } from 'react';
import axios from "axios";
import Button from '../../components/Button'; 
import Banner from '../../components/Banner';
import FreebiePopup from '../../components/FreebiePopup';
//import Maintenance from '../../components/MaintenancePage'

const buttons = [
  { text: 'En savoir plus', link: '/Calendly' },
];

function Blog() {
  const pageTitle = "Optimiser son site et automatiser son business - Le blog";
  const bannerText = "Mettez en avant votre savoir-faire avec Aurélie DEMETRIO de L'agence Digitale. Offrez à votre expertise la visibilité qu'elle mérite.";
  const bannerImg = require('../../assets/imgBanner_blog_aurelie_demetrio_developpeuse_automatisation.jpg');
  const bannerClass = "banner banner-presentation";
  const bannerImgClass = "banner__img-presentation";

  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Récupère les catégories au chargement
  useEffect(() => {
    axios.get("https://aureliedemetrio.fr/blog/wp-json/wp/v2/categories?per_page=100")
      .then(res => setCategories(res.data))
      .catch(err => console.error("Erreur catégories :", err));
  }, []);

  // Récupère les articles filtrés
  useEffect(() => {
    let url = `https://aureliedemetrio.fr/blog/wp-json/wp/v2/posts?_embed&per_page=5&page=${currentPage}`;
    if (selectedCategory) {
      url += `&categories=${selectedCategory}`;
    }

    axios.get(url)
      .then(response => {
        setPosts(response.data);
        setTotalPages(parseInt(response.headers['x-wp-totalpages'], 10));
      })
      .catch(error => console.error("Erreur API :", error));
  }, [currentPage, selectedCategory]);

  // Recherche texte locale sur les résultats déjà filtrés par catégorie
  const filteredPosts = posts.filter(post =>
    post.title.rendered.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

        {/* Barre de recherche */}
        <div className="blog_filters">
          <input
            type="text"
            placeholder="Rechercher un article..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Menu déroulant de catégories */}
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentPage(1); // Reset à la première page
            }}
          >
            <option value="">Toutes les catégories</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>

        {/* Affichage des articles */}
        {filteredPosts.map(post => {
          const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
          const postCategories = post._embedded?.['wp:term']?.[0]?.map(cat => cat.name).join(', ');
          const postLink = `/article/${post.slug}`;


          return (
            <div className='blog__card' key={post.id}>
              {featuredImage && (
                <img className='blog__card-img' src={featuredImage} alt={post.title.rendered} />
              )}
              <div className='blog__card-content'>
                <div>{postCategories && <p className="blog__card-categories">{postCategories}</p>}</div>
                <h2 className='blog__card-title' dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                <p className='blog__card-text' dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered || '' }} />
                <a href={postLink} className="blog__card-link">
                  <Button className="button" text="Lire l’article" />
                </a>
              </div>
            </div>
          );
        })}

        {/* Pagination */}
        <div className="pagination">
          <button
          className='pagination-button'
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
          >
            Page précédente
          </button>

          <span>Page {currentPage} sur {totalPages}</span>

          <button
            className='pagination-button'
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => prev + 1)}
          >
            Page suivante
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
