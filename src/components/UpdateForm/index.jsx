import React, { useEffect } from 'react';

const UpdateForm = () => {
  const formId = '31EWJ4';

  useEffect(() => {
    const handleClick = () => {
      if (window.Tally) {
        window.Tally.openPopup(formId, {
          layout: 'modal',
          width: 700,
          hideTitle: true,
          overlay: true,
          emoji: {
            text: '🚀',
            animation: 'bounce'
          },
          autoClose: 5000,
          hiddenFields: {
            ref: 'site',
            email: 'contact@aureliedemetrio@gmail.com'
          },
          onOpen: () => {
            console.log('Popup ouvert');
          },
          onClose: () => {
            console.log('Popup fermé');
          },
          onPageView: (page) => {
            console.log('Page vue:', page);
          },
          onSubmit: (payload) => {
            console.log('Formulaire soumis:', payload);
          }
        });
      }
    };

    const button = document.getElementById('openQuizButton');
    if (button) {
      button.addEventListener('click', handleClick);
    }

    return () => {
      if (button) {
        button.removeEventListener('click', handleClick);
      }
    };
  }, []);

  return (
    <div>
      <button id="openQuizButton">Évaluer ma stratégie</button>
    </div>
  );
};

export default UpdateForm;