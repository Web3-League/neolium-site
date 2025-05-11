// src/components/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-logo-section">
            <h3 className="footer-logo">Néolium</h3>
            <p className="footer-tagline">Solutions innovantes pour le futur digital</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h4 className="footer-heading">Services</h4>
              <ul className="footer-list">
                <li><Link href="/web-development">Développement Web</Link></li>
                <li><Link href="/cloud-solutions">Solutions Cloud</Link></li>
                <li><Link href="/ai">Intelligence Artificielle</Link></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4 className="footer-heading">Entreprise</h4>
              <ul className="footer-list">
                <li><Link href="/about">À Propos</Link></li>
                <li><Link href="/#contact">Contact</Link></li>
                <li><Link href="/legal">Mentions Légales</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-contact">
            <h4 className="footer-heading">Contact</h4>
            <p>contact@neolium.fr</p>
            <p>+33 (0)1 23 45 67 89</p>
            <div className="footer-social">
              {/* Icônes de réseaux sociaux ici */}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {currentYear} Néolium. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;