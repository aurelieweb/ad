import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos'; 
import Prestations from './pages/Prestations'; 
import Realisations from './pages/Realisations'; 
import Contact from './pages/Contact';
import Calendly from './pages/CalendlyPage';
import Coaching from './pages/CoachingPage';
import Resource from './pages/Resource';
import RGPD from './pages/rgpd';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Route de la page d'accueil */}
          <Route path="/" element={<Accueil />} />
          {/* Nouvelle route pour la page "A propos" */}
          <Route path="/Prestations" element={<Prestations />} />
          {/* Nouvelle route pour la page "A propos" */}
          <Route path="/Realisations" element={<Realisations />} />
          {/* Nouvelle route pour la page "A propos" */}
          <Route path="/A-propos" element={<Apropos />} />
          {/* Nouvelle route pour la page "A propos" */}
          <Route path="/Contact" element={<Contact />} />
          {/* Nouvelle route pour la page "Calendly" */}
          <Route path="/Calendly" element={<Calendly />} />
          {/* Nouvelle route pour la page "Calendly" */}
          <Route path="/Coaching" element={<Coaching />} />
          {/* Nouvelle route pour la page "Leadmagnet" */}
          <Route path="/Ressources" element={<Resource />} />
          {/* Nouvelle route pour la page "RGPD" */}
          <Route path="/Rgpd" element={<RGPD />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
