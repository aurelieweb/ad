import React from 'react';
import Banner from '../../components/Banner';
import ResourceSection from '../../components/ResourceSection';
import '../../styles/styles.scss';


const resources = [
    {
        title: "Votre Stratégie de Référencement Local est-elle Optimale ?",
        description: "Participez à notre quiz gratuit pour évaluer votre stratégie de référencement local et recevez un guide personnalisé avec des conseils pratiques adaptés à vos résultats.",
        link: "#quiz",
        ctaText: "Participez au Quiz Maintenant"
    },
    {
        title: "Guide SEO pour les Professionnels du Bâtiment",
        description: "Téléchargez notre guide complet pour améliorer votre SEO et attirer plus de clients en ligne. Des conseils pratiques et des stratégies éprouvées pour les architectes, ingénieurs et artisans.",
        link: "#guide-seo",
        ctaText: "Téléchargez le Guide"
    },
    {
        title: "Webinaire Gratuit : Les Bases du Marketing Digital",
        description: "Inscrivez-vous à notre webinaire gratuit pour découvrir les bases du marketing digital et comment elles peuvent s'appliquer à votre entreprise. Parfait pour les débutants et les professionnels souhaitant améliorer leurs connaissances.",
        link: "#webinar",
        ctaText: "Inscrivez-vous au Webinaire"
    },
    {
        title: "Consultation Gratuite avec un Expert en Référencement",
        description: "Réservez une consultation gratuite de 30 minutes avec l'un de nos experts en référencement pour obtenir des conseils personnalisés et des recommandations spécifiques à votre entreprise.",
        link: "#consultation",
        ctaText: "Réservez Votre Consultation"
    }
];


function Leadmagnet() {

    const pageTitle = "Notre expertise web à votre service";
    const bannerText = "Que vous soyez architecte, ingénieur, professionnel du bâtiment, promoteur immobilier ou propriétaire de Airbnb, découvrez nos ressources gratuites pour optimiser votre présence en ligne et attirer plus de clients";
    const bannerClass = "banner banner-prestation"
    const bannerImg = require('../../assets/imgBanner2.jpg');
    const bannerImgClass = "banner__image";
    const bannerButtonText = "En savoir plus"
    const buttonLink = "/contact";

    return (
      <div className='main'>
       <Banner 
            pageTitle={pageTitle} 
            bannerClass={bannerClass}
            bannerImg={bannerImg} 
            bannerText={bannerText} 
            bannerImgClass={bannerImgClass} 
            buttonLink={buttonLink} 
            bannerButtonText={bannerButtonText}/>
        <ResourceSection resources={resources}/>
        </div>
    )
}

export default Leadmagnet;