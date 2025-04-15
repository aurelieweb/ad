import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import HeroBlog from '../../components/HeroBlog';
import NewsletterForm from '../../components/NewsletterForm';

function Article() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ author_name: '', author_email: '', content: '' });
  const [submitted, setSubmitted] = useState(false);

  const bannerClass = "banner banner-blog";
  const heroBlogImg = require('../../assets/imgBlogBanner.png');
  const heroBlogImgClass = "banner__img-blog";

  // Charger l’article actuel
  useEffect(() => {
    axios.get(`https://aureliedemetrio.fr/blog/wp-json/wp/v2/posts?slug=${slug}&_embed`)
      .then(response => {
        if (response.data.length > 0) {
          setArticle(response.data[0]);
        } else {
          console.error("Aucun article trouvé avec ce slug.");
        }
      })
      .catch(error => {
        console.error("Erreur lors de la récupération de l’article :", error);
      });
  }, [slug]);

  // Charger tous les articles
  useEffect(() => {
    axios.get("https://aureliedemetrio.fr/blog/wp-json/wp/v2/posts?_embed&per_page=100")
      .then(response => {
        setAllPosts(response.data);
        const index = response.data.findIndex(post => post.slug === slug);
        setCurrentIndex(index !== -1 ? index : null);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération de la liste des articles :", error);
      });
  }, [slug]);

  // Récupérer les commentaires
  useEffect(() => {
    if (article) {
      axios.get(`https://aureliedemetrio.fr/blog/wp-json/wp/v2/comments?post=${article.id}`)
        .then(response => setComments(response.data))
        .catch(error => console.error("Erreur lors de la récupération des commentaires :", error));
    }
  }, [article]);

  // Gérer l’envoi du commentaire
  const handleCommentSubmit = (e) => {
    e.preventDefault();

    axios.post(`https://aureliedemetrio.fr/blog/wp-json/wp/v2/comments`, {
      ...newComment,
      post: article.id,
    })
    .then(() => {
      setSubmitted(true);
      setNewComment({ author_name: '', author_email: '', content: '' });
    })
    .catch(error => {
      console.error("Erreur lors de l’envoi du commentaire :", error);
      console.log("Détails :", error.response?.data);
    });
  };

  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex !== null && currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  if (!article) return <p>Chargement…</p>;

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

      {/* 🔙 Bouton retour */}
      <div className="article-back">
        <Link to="/blog" className="btn btn-secondary">← Retour au blog</Link>
      </div>

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

      {/* 📩 Formulaire de newsletter */}
      <NewsletterForm />

      {/* 💬 Commentaires */}
      <section className="comments-section">
        <h3>Commentaires</h3>
        {comments.length > 0 ? (
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <strong>{comment.author_name}</strong> : <span dangerouslySetInnerHTML={{ __html: comment.content.rendered }} />
              </li>
            ))}
          </ul>
        ) : (
          <p>Aucun commentaire pour l’instant.</p>
        )}

        <h4>Laisser un commentaire</h4>
        {submitted ? (
          <p>Merci pour votre commentaire ! Il sera publié après modération.</p>
        ) : (
          <form onSubmit={handleCommentSubmit} className="comment-form">
            <div className='comment-form-div'>
            <input
              type="text"
              placeholder="Votre nom"
              value={newComment.author_name}
              onChange={(e) => setNewComment({ ...newComment, author_name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Votre email"
              value={newComment.author_email}
              onChange={(e) => setNewComment({ ...newComment, author_email: e.target.value })}
              required
            />
            </div>
            <textarea
              placeholder="Votre commentaire"
              value={newComment.content}
              onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
              required
            />
            <button type="submit" className="btn btn-secondary">Envoyer</button>
          </form>
        )}
      </section>

      {/* ⬅️➡️ Articles précédent / suivant */}
      <div className="article-navigation">
        {previousPost && (
          <Link to={`/article/${previousPost.slug}`} className="btn btn-outline">
            ← {previousPost.title.rendered}
          </Link>
        )}
        {nextPost && (
          <Link to={`/article/${nextPost.slug}`} className="btn btn-outline">
            {nextPost.title.rendered} →
          </Link>
        )}
      </div>
    </div>
  );
}

export default Article;
