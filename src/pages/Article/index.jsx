import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import HeroBlog from '../../components/HeroBlog';
import NewsletterForm from '../../components/NewsletterForm';

function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  const bannerClass = "banner banner-blog";
  const heroBlogImg = require('../../assets/imgBlogBanner.png');
  const heroBlogImgClass = "banner__img-blog";

  useEffect(() => {
    const url = `https://aureliedemetrio.fr/blog/wp-json/wp/v2/posts/${id}?_embed`;

    axios.get(url)
      .then(response => {
        setArticle(response.data);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération de l’article :", error);
      });
  }, [id]);

  if (!article) return <p>Chargement...</p>;

  const featuredImage = article._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const pageTitle = article.title.rendered;

  return (
    <div className='main'>
      <HeroBlog
        pageTitle={pageTitle}
        bannerClass={bannerClass}
        heroBlogImg={heroBlogImg}
        heroBlogImgClass={heroBlogImgClass}
      />

      <div className="single-article">
        {featuredImage && (
          <img 
                src={featuredImage} 
                alt={article.title.rendered}
                className="featured-image"
            />
        )}
        <div dangerouslySetInnerHTML={{ __html: article.content.rendered }} />
      </div>

      <NewsletterForm />
    </div>
  );
}

export default Article;
