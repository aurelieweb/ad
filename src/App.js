import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos'; 
import Services from './pages/Services'; 
import Realisations from './pages/Realisations'; 
import Contact from './pages/Contact';
import Articles from './pages/Blog';
import Article from "./pages/Article";
import Calendly from './pages/CalendlyPage';
import Coaching from './pages/CoachingPage';
import PimpeTonSite from './pages/PimpetonSite';
import KiffeTonSite from './pages/Kiffetonsite';
import Resource from './pages/Resource';
import Flyer from './pages/Flyer';
import RGPD from './pages/rgpd';
import Automatisation from './pages/Automatisation';
import Website from './pages/Website';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Route de la page d'accueil */}
          <Route path="/" element={<Accueil />} />
          <Route path="/services" element={<Services />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/a-propos" element={<Apropos />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/article/:slug" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calendly" element={<Calendly />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/kiffetonsite" element={<KiffeTonSite />} />
          <Route path="/pimpetonsite" element={<PimpeTonSite />} />
          <Route path="/ressources" element={<Resource />} />
          <Route path="/flyer" element={<Flyer />} />
          <Route path="/rgpd" element={<RGPD />} />
          <Route path="/automatisation" element={<Automatisation />} />
          <Route path="/website" element={<Website />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
