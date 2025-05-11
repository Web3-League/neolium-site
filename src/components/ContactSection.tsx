// src/components/ContactSection.tsx
"use client";
import React, { useState } from 'react';
import { useForm, ValidationError } from "@formspree/react";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("xnnpklpk"); // Votre ID formspree
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Gérer la soumission du formulaire avec feedback visuel
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await handleSubmit(e);
    } finally {
      // Dans tous les cas, on réinitialise l'état après un délai (pour UX)
      setTimeout(() => {
        setIsSubmitting(false);
      }, 500);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Prêt à démarrer votre projet ?</h2>
        <p className="contact-subtitle">
          Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
        </p>

        <div className="contact-grid">
          {/* Colonne des informations */}
          <div className="contact-info">
            <h3 className="info-title">Nos informations</h3>
            
            <div className="info-item">
              <div className="info-icon email-icon"></div>
              <div>
                <h4>Email</h4>
                <p>contact@neolium.fr</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon phone-icon"></div>
              <div>
                <h4>Téléphone</h4>
                <p>+33 (0)1 23 45 67 89</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon location-icon"></div>
              <div>
                <h4>Bureaux</h4>
                <p>123 Avenue des Champs-Élysées<br />75008 Paris, France</p>
              </div>
            </div>
            
            <div className="info-hours">
              <h4>Horaires d'ouverture</h4>
              <p>Lundi - Vendredi: 9h00 - 18h00</p>
              <p>Samedi - Dimanche: Fermé</p>
            </div>
          </div>
          
          {/* Colonne du formulaire */}
          <div className="contact-form-wrapper">
            <h3 className="form-title">Contactez-nous</h3>
            <p className="form-subtitle">
              Prêt à concrétiser votre projet ? Écrivez-nous et nous vous répondrons dans les plus brefs délais.
            </p>
            
            {state.succeeded ? (
              <div className="success-message">
                <div className="success-icon"></div>
                <h3>Merci pour votre message !</h3>
                <p>Nous vous répondrons dans les plus brefs délais.</p>
                <button 
                  className="reset-button"
                  onClick={() => window.location.reload()}
                >
                  Envoyer un nouveau message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="form-element">
                <div className="form-group">
                  <label htmlFor="email" className="form-label required">Adresse e-mail</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="votre@email.fr"
                    required
                    className="form-input"
                    autoComplete="email"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="form-error" />
                </div>

                <div className="form-group">
                  <label htmlFor="name" className="form-label">Nom (optionnel)</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Votre nom ou celui de votre entreprise"
                    className="form-input"
                    autoComplete="name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label required">Votre message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Décrivez votre projet ou votre demande..."
                    required
                    className="form-textarea"
                    rows={5}
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="form-error" />
                </div>

                <div className="form-checkbox">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="checkbox-input"
                  />
                  <label htmlFor="consent" className="checkbox-label">
                    J'accepte que mes données soient traitées pour me recontacter
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || state.submitting}
                  className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                >
                  {isSubmitting || state.submitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;