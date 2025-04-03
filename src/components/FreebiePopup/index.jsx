import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

const FreebiePopup = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalOpen(true);
    }, 3000); // 3000 ms = 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer if the component is unmounted
  }, []);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Boostez votre activité avec mes ressources gratuites</h2>
        <p>Accédez à des outils concrets pour : Améliorer votre visibilité, Gagner du temps, Travailler plus efficacement</p>
        <p>
          👉 Pensé pour les entrepreneurs, indépendants et PME.
        </p>
        <Link to="/Ressources"><Button className="button" text="En savoir plus" /></Link>
      </Modal>
    </div>
  );
};

export default FreebiePopup;
