import React from 'react';
import '../styles/Footer.css'; // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-brand">The Clean Individual</h3>
            <p className="footer-description">
              Creating a cleaner, healthier world through sustainable living and mindful choices.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Follow Us</h4>
            <div className="social-icons">
              <a href="https://odysee.com/@TheCleanOne:2" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">📘</span>
                <span>Video</span>
               </a>
              
               
              <a href="https://earthstream.social/@thecleanone" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">📷</span>
                <span>Mastodon</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <p className="copyright">© 2025 The Clean Individual. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;