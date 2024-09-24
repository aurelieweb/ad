//import Button from '../../components/Button';
import Banner from '../../components/Banner';
import Faq from '../../components/Faq';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'; // Import des icônes FontAwesome
import Button from '../../components/Button';
import imgPimpeTonSite from '../../assets/imgPimpetonSite_lecoaching.png';
import Testimonies from '../../components/Testimonies';

const buttons = [
  { text: 'Réserve ton coaching', link: '/Coaching' }
];

function PimpeTonSite() {
  const pageTitle = "Pimpe ton site : Le coaching qui va transformer ton site";
  const bannerText = "A modifier";
  const bannerImg = require('../../assets/imgPortrait.png');
  const bannerClass = "banner banner-presentation";
  const bannerImgClass = "banner__img-presentation";

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

      <div className="container__services"> 
        <h2>Boostez la performance de votre site web avec "Pimpe ton site"</h2>
        <p className='container__section-text'>
        Vous avez créé votre propre site internet, mais vous n'obtenez pas les résultats que vous espériez ? "Pimpe ton site" est l’accompagnement qu’il vous faut pour transformer votre site et attirer plus de visiteurs. Grâce à notre coaching personnalisé, nous vous aidons à corriger les erreurs qui empêchent votre site d'être performant. Que ce soit pour rendre votre site plus visible sur Google ou pour améliorer la structure de votre site web, nous sommes là pour vous aider à obtenir un site internet plus professionnel et efficace.</p>

        <div className="container__section">
          <div className='pimpetonsite__container'>
            <img src={imgPimpeTonSite} alt="Pourquoi Pimpe ton site" className="img__pimpetonsite" /> {/* Image ajoutée */}
            <div className='pourquoi'>
              <h3>Pourquoi?</h3>
              <p>"Pimpe ton site" est conçu pour les entrepreneurs qui ont créer leur propre site web.  Vous vous demandez peut-être : "Pourquoi mon site n'attire pas de visiteurs ?" ou "Comment améliorer mon site internet sans être expert ?" . J'ai la solution. Avec l'audit, on débusque les problèmes. Avec le plan d'action tu sais exactement suoi faire. Quant au coaching, on avance sur et explose tes bloquage   </p>
            </div>
            </div>
            <div className='testimonies'>
                < Testimonies/>
            </div>
            <div className='comprend'><h3>Ce que comprend "Pimpe ton site"</h3>
            <ul>
              <li><FontAwesomeIcon className='container__section-icon' icon={faPlay} /> Un ebook pratique qui vous guide pour améliorer la performance de votre site par vous-même.</li>
              <li><FontAwesomeIcon className='container__section-icon' icon={faPlay} /> Un mini audit de votre site web, pour identifier ce qui ne fonctionne pas, comme un site lent ou des problèmes de visibilité sur Google.</li>
              <li><FontAwesomeIcon className='container__section-icon' icon={faPlay} /> Un coaching 1:1 de deux heures en visioconférence, durant lequel nous travaillons ensemble pour corriger les erreurs et booster la performance de votre site.</li>
              <li><FontAwesomeIcon className='container__section-icon' icon={faPlay} /> Un rapport PDFvec un plan d’action concret à suivre, pour que vous sachiez exactement comment rendre votre site plus attractif et efficace.</li>
            </ul>
          </div>

          <div className='benefice'>
            <h3>Bénéfices:</h3>
            <ul>
              <li><FontAwesomeIcon className='container__section-icon' icon={faPlus} /> Plus de visites sur votre site grâce à l'amélioration de son référencement.</li>
              <li><FontAwesomeIcon className='container__section-icon' icon={faPlus} /> Un site internet plus professionnel et performant.</li>
              <li><FontAwesomeIcon className='container__section-icon' icon={faPlus} /> La correction des erreurs techniques qui freinent la performance de votre site.</li>
              <li><FontAwesomeIcon className='container__section-icon' icon={faPlus} /> Des solutions concrètes pour rendre votre site plus visible et améliorer l'expérience utilisateur.</li>
              <li><FontAwesomeIcon className='container__section-icon' icon={faPlus} /> Un site professionnel.</li>
            </ul>
          </div>
        </div>
        <div>

        </div>
        <div className='prix'>
          <p>299,00€</p>
          <p>Modalités de paiement : Explique que le paiement se fait via Stripe et que la réservation s’effectue via Zcal.</p>
        </div>
        < Faq/>
        < Button text="Passez à l'action" link="/Coaching" />
      </div>
    </div>
  );
}

export default PimpeTonSite;
