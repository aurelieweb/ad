import React from 'react';
import Banner from '../../components/Banner';
import ResourceSection from '../../components/ResourceSection';
import '../../styles/styles.scss';

const resources = [
    {
        title: "Votre Stratégie de Référencement Local est-elle Optimale ?",
        description: "Participez à notre quiz gratuit pour évaluer votre stratégie de référencement local et recevez un guide personnalisé avec des conseils pratiques adaptés à vos résultats.",
        link: 'mB16ee', // Utilisez seulement l'ID du formulaire ici
        ctaText: "Répondre au Quiz",
        isQuiz: true
    },
    {
        title: "Guide SEO pour les Professionnels du Bâtiment",
        description: "Téléchargez notre guide complet pour améliorer votre SEO et attirer plus de clients en ligne. Des conseils pratiques et des stratégies éprouvées pour les architectes, ingénieurs et artisans.",
        link: '31EWJ4',
        ctaText: "Télécharger notre guide",
        isQuiz: true
    },
    {
        title: "Tuto: Rédiger des légendes insta avec ChatGPT",
        description: "Consulter notre mini tuto vidéo. Apprenner à rédiger et bosster ses légendes insta grâce à ChatGpt",
        link: "https://youtube.com/shorts/O6kI11PhM2s?feature=share",
        ctaText: "Accéder au tuto",
    },

];

const buttons = [
    { text: 'Consultation gratuite', link: '/Calendly' }
  ];

function Resource() {
    const pageTitle = "Notre expertise web à votre service";
    const bannerText = "Que vous soyez architecte, ingénieur, professionnel du bâtiment, promoteur immobilier ou propriétaire de Airbnb, découvrez nos ressources gratuites pour optimiser votre présence en ligne et attirer plus de clients";
    const bannerClass = "banner banner-prestation";
    const bannerImg = require('../../assets/imgBanner2.jpg');
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
