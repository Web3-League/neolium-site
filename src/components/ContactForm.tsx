// src/components/ContactForm.tsx
"use client";
import React, { useState } from 'react';
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xnnpklpk"); // Votre ID formspree
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Gérer la soumission du formulaire avec feedback visuel
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Utiliser le délai pour montrer l'état de soumission (amélioration UX)
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
    <div className="contact-form-container">
      <h3 className="contact-heading mb-6">Contactez-nous</h3>
      <p className="contact-subheading mb-8">
        Prêt à concrétiser votre projet ? Écrivez-nous et nous vous répondrons dans les plus brefs délais.
      </p>

      {state.succeeded ? (
        <div className="success-message">
          <svg xmlns="http://www.w3.org/2000/svg" className="success-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <h3>Merci pour votre message !</h3>
          <p>Nous vous répondrons dans les plus brefs délais.</p>
          
          <Button 
            className="reset-button mt-8"
            onClick={() => window.location.reload()}
          >
            Envoyer un nouveau message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label required-field">Adresse e-mail</label>
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
            <label htmlFor="message" className="form-label required-field">Votre message</label>
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

          <div className="form-group form-checkbox mb-8">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              required
              className="form-checkbox-input"
            />
            <label htmlFor="consent" className="form-checkbox-label">
              J'accepte que mes données soient traitées pour me recontacter
            </label>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting || state.submitting}
            className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
          >
            {isSubmitting || state.submitting ? (
              <>
                <svg className="spinner mr-2" viewBox="0 0 24 24">
                  <circle className="path" cx="12" cy="12" r="10" fill="none" strokeWidth="4"></circle>
                </svg>
                Envoi en cours...
              </>
            ) : 'Envoyer le message'}
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;