import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos'; 
import Prestations from './pages/Prestations'; 
import Processus from './pages/Processus'; 
import Realisations from './pages/Realisations'; 
import Contact from './pages/Contact';

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
          <Route path="/Processus" element={<Processus />} />
          {/* Nouvelle route pour la page "A propos" */}
          <Route path="/Realisations" element={<Realisations />} />
          {/* Nouvelle route pour la page "A propos" */}
          <Route path="/A-propos" element={<Apropos />} />
          {/* Nouvelle route pour la page "A propos" */}
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
