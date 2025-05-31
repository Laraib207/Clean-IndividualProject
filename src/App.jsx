// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./ Components/Navbar";
import CardList from "./ Components/Card";
import Footer from "./ Components/Footer";
import CleanIndividual from "./ Components/CleanIndividual";
import './index.css';
import ContactPageContent from './ Components/conact';

// About Page Component (using CardList for rich content)
const AboutPage = () => {
  return (
    <div className="about-page">
      <CardList />
    </div>
  );
};

// Contact Page Component
// const ContactPageContent = () => {
//   return (
//     <div className="contact-page-wrapper">
//       <div className="contact-hero">
//         <h1 className="contact-title">Get In Touch</h1>
//         <p className="contact-subtitle">
//           Ready to start your clean living journey? We'd love to hear from you.
//         </p>
//       </div>
      
//       <div className="contact-content">
//         <div className="contact-info">
//           <div className="contact-item">
//             <h3>📧 Email Us</h3>
//             <p>hello@thecleanindividual.com</p>
//           </div>
          
//           <div className="contact-item">
//             <h3>📞 Call Us</h3>
//             <p>+1 (555) 123-4567</p>
//           </div>
          
//           <div className="contact-item">
//             <h3>📍 Visit Us</h3>
//             <p>123 Green Street<br />Eco City, EC 12345</p>
//           </div>
//         </div>
        
//         <div className="contact-form">
//           <h3>Send us a message</h3>
//           <form>
//             <input type="text" placeholder="Your Name" className="form-input" />
//             <input type="email" placeholder="Your Email" className="form-input" />
//             <textarea placeholder="Your Message" rows="5" className="form-textarea"></textarea>
//             <button type="submit" className="form-submit">Send Message</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<CleanIndividual />} />
            
            <Route path="/about" element={<AboutPage />} />
            <Route path="/home" element={<CleanIndividual />} />
            <Route path="/contact" element={<ContactPageContent />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;