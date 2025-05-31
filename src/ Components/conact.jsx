import React from 'react';
import '../styles/contact.css'; // Adjust the path as necessary
import { Link } from 'react-router-dom';
const ContactPageContent = () => {
  return (
    <div className="contact-page-wrapper">
      <div className="contact-hero">
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-subtitle">
          Ready to start your clean living journey? We'd love to hear from you.
        </p>
      </div>
      
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            
            <h3>📧 Email Us</h3>
            <Link to="mailto:thecleanone@disroot.org">thecleanone@disroot.org</Link>

          </div>
          
          <div className="contact-item">
            <h3>📞 Call Us</h3>
            <p>+91 123456789</p>
          </div>
          
          <div className="contact-item">
            <h3>📍 Visit Us</h3>
            <p>63 sector Noida <br />H57 Near Metro-station</p>
          </div>
        </div>
        
        <div className="contact-form">
          <h3>Send us a message</h3>
          <form>
            <input type="text" placeholder="Your Name" className="form-input" />
            <input type="email" placeholder="Your Email" className="form-input" />
            <textarea placeholder="Your Message" rows="5" className="form-textarea"></textarea>
            <button type="submit" className="form-submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactPageContent;