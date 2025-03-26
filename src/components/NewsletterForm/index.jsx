import React, { useState } from 'react';
import '../../styles/styles.scss'; // Assure-toi que les styles sont chargés

function NewsletterForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    activity: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 🔁 Ici tu pourras brancher à ton système (MailerLite, Make, etc.)
    console.log('Formulaire soumis :', formData);
    setSubmitted(true);
  };

  return (
    <div className="newsletter-form">
      <h2>Reçois mes conseils personnalisés directement dans ta boîte mail</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              className="form-group-name"
              type="text"
              name="lastName"
              placeholder="Nom"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              className="form-group-name"
              name="firstName"
              placeholder="Prénom"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Adresse email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="activity"
            placeholder="Ton activité (ex : architecte, artisan, coach...)"
            value={formData.activity}
            onChange={handleChange}
          />

          <button type="submit" className="button">Je m’inscris</button>
        </form>
      ) : (
        <p className="success-message">Merci pour ton inscription ! 🎉</p>
      )}
    </div>
  );
}

export default NewsletterForm;
