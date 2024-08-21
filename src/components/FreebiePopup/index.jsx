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
        <h2>Découvrez Nos Freebies!</h2>
        <p>Téléchargez des ressources gratuites pour booster votre activité.</p>
        <Link to="/Ressources"><Button className="button" text="En savoir plus" /></Link>
      </Modal>
    </div>
  );
};

export default FreebiePopup;
