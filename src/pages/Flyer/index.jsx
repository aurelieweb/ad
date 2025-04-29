import React from "react";
import Banner from "../../components/Banner";
import Button from "../../components/Button";

function Flyer() {
  const pageTitle = "Un site web utile, qui travaille pour vous.";
  const bannerText = "Sites web connectés & automatisations pour vous faire gagner du temps, simplifier votre gestion et réduire les tâches répétitives.";
  const bannerImg = require("../../assets/img_coaching_creation_site_web.jpg");
  const bannerClass = "banner banner-presentation";
  const bannerImgClass = "banner__img-presentation";

  return (
    <div className="main">
      <Banner
        pageTitle={pageTitle}
        bannerClass={bannerClass}
        bannerImg={bannerImg}
        bannerText={bannerText}
        bannerImgClass={bannerImgClass}
        buttons={[{ text: "Réserver un appel", link: "/Calendly", className: "button" }]}
      />

      <section className="flyer__intro">
        <p>Vous avez découvert mon flyer ? Merci pour votre intérêt 🙏</p>
        <p>Je suis <strong>Aurélie</strong>, développeuse web & consultante en automatisation.</p>
        <p>J’aide les artisans et les PME à créer ou transformer leur site web, et à automatiser leur quotidien grâce à des outils connectés, simples et efficaces.</p>
        <ul>
          <li>➡️ Gagner du temps</li>
          <li>➡️ Réduire les tâches répétitives</li>
          <li>➡️ Simplifier votre gestion au quotidien</li>
        </ul>
      </section>

      <section className="flyer__services">
        <h2>Ce que je peux faire pour vous</h2>
        <ul>
          <li><strong>Automatisation & connexion de vos outils</strong> – Je relie vos outils métier (agenda, mails, formulaires, CRM…) pour centraliser les demandes, automatiser les tâches répétitives, et gagner un temps précieux.</li>
          <li><strong>Transformation de site existant</strong> – Vous avez déjà un site ? Je le rends plus utile, plus efficace, et surtout... plus connecté.</li>
          <li><strong>Création de site utile</strong> – Un site pensé dès le départ pour vous faire gagner du temps et soutenir votre activité.</li>
        </ul>
      </section>

      <section className="flyer__benefits">
        <h2>Pourquoi travailler ensemble ?</h2>
        <ul>
          <li>✔️ Vous voulez un site qui vous aide vraiment</li>
          <li>✔️ Moins de tâches manuelles, plus de temps pour votre métier</li>
          <li>✔️ Accompagnement humain, sans jargon technique</li>
        </ul>
      </section>

      <section className="flyer__cases">
        <h2>Cas concrets</h2>
        <ul>
          <li>🔧 Un artisan gère ses <strong>demandes d’intervention via un formulaire connecté</strong> sur son site, comme un Doctolib pour les pros du bâtiment. <a href="/article/gerer-ses-demandes-dintervention">Lire l'article</a></li>
          <li>📐 Une architecte propose <strong>des rendez-vous en ligne</strong> directement dans son agenda automatisé.</li>
          <li>💨 Un installateur de pompe à chaleur génère automatiquement ses <strong>devis et dossiers de primes</strong> via un formulaire spécifique connecté à son outil d'automatisation. (👉 Le SaaS en cours de développement)</li>
        </ul>
      </section>

      <section className="flyer__cta">
        <h2>Et maintenant ?</h2>
        <p>Je vous propose un échange gratuit pour discuter de votre site ou de vos besoins en automatisation.</p>
        <Button className="btn-secondary" text="Réserver un appel" link="/Calendly" />
      </section>

      <footer className="flyer__footer">
        <p><strong>Aurélie Demetrio</strong> – Développeuse web & consultante en automatisation</p>
        <p>contact@aureliedemetrio.fr | <a href="https://www.linkedin.com/in/aureliedemetrio" target="_blank" rel="noreferrer">LinkedIn</a></p>
      </footer>
    </div>
  );
}

export default Flyer;
