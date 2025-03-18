import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Article = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        axios.get(`https://aureliedemetrio.fr/blog/wp-json/wp/v2/posts/${id}`)  // Mets ton URL WordPress
            .then(response => setArticle(response.data))
            .catch(error => console.error("Erreur API :", error));
    }, [id]);

    if (!article) return <p>Chargement...</p>;

    return (
        <div>
            <h1 dangerouslySetInnerHTML={{ __html: article.title.rendered }} />
            <div dangerouslySetInnerHTML={{ __html: article.content.rendered }} />
        </div>
    );
};

export default Article;