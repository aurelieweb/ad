import React from 'react';
import Banner from '../../components/Banner';
import ResourceSection from '../../components/ResourceSection';
import '../../styles/styles.scss';

const resources = [
    {
        title: "Votre Stratégie de Référencement Local est-elle Optimale ?",
        description: "Participez à notre quiz gratuit pour évaluer votre stratégie de référencement local. Recevez un guide personnalisé avec des conseils sur les bonnes pratiques pour améliorer vos résultats dans les moteurs de recherche.",
        link: 'mB16ee', // Utilisez seulement l'ID du formulaire ici
        ctaText: "Répondre au Quiz",
        resourceImg:"./img/imgResource/AurelieDemetrio_Strategie_Referencement_Local.jpeg",
        resourceImgClass:"test",
        isQuiz: true
    },
    {
        title: "Comment améliorer son référencement pour les Professionnels du Bâtiment et les Architectes",
        description: "Téléchargez notre guide gratuit pour améliorer votre SEO et attirer plus de clients en ligne. Des conseils pratiques et des stratégies éprouvées pour les architectes et professionnels du bâtiment.",
        link: '31EWJ4',
        ctaText: "Télécharger notre guide",
        resourceImg:"./img/imgResource/AurelieDemetrio_guide_seo.jpeg",
        resourceImgClass:"test",
        isQuiz: true
    },
    {
        title: "Prompts IA pour rédiger les pages de votre site web pro",
        description: "Téléchargez gratuitement mes meilleurs prompts ChatGPT pour rédiger votre page d’accueil, vos services, votre page à propos, et plus encore.",
        link: '3XQdMV', // ou lien Notion / Tally / PDF hébergé
        ctaText: "Télécharger les prompts",
        resourceImg: "./img/imgResource/AurelieDemetrio_prompts_redaction_ia.jpeg",
        resourceImgClass: "test",
        isQuiz: true
    },
    {
        title: "Tuto: Comment rédiger des légendes insta avec ChatGPT",
        description: "Consulter notre mini tuto vidéo. Comment rédiger et booster ses légendes instagram avec ChatGpt",
        link: "https://youtube.com/shorts/O6kI11PhM2s?feature=share",
        ctaText: "Accéder au tuto",
        resourceImg:"./img/imgResource/AurelieDemetrio_rediger_ses_legendes_instagram_avec_chatgpt.jpeg",
        resourceImgClass:"test",
    },

];

const buttons = [
    { text: 'Consultation gratuite', link: '/Calendly' }
  ];

function Resource() {
    const pageTitle = "Créez un site web efficace : visibilité, automatisation et gain de temps";
    const bannerText = "Vous êtes pro, indépendant ou dirigez une PME ? Transformez votre site en un outil puissant pour attirer des clients, gérer vos demandes et gagner en productivité.";
    const bannerClass = "banner banner-presentation";
    const bannerImg = require('../../assets/imgBannerResource.jpeg');
    const bannerImgClass = "banner__image";


    return (
        <div className='main'>
            <Banner 
                pageTitle={pageTitle} 
                bannerClass={bannerClass}
                bannerImg={bannerImg} 
                bannerText={bannerText} 
                bannerImgClass={bannerImgClass} 
                buttons={buttons}
            />
            <ResourceSection resources={resources}/>
        </div>
    );
}

export default Resource;
