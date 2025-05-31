// Components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Adjust the path as necessary

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="marquee-wrapper">
        <marquee behavior="scroll" direction="left" scrollamount="5" className="marquee-text">
          Welcome to The Clean Individual
        </marquee>
      </div>
      <div className="navbar-content">
        <button onClick={toggleMenu} className="menu-button md:hidden">
          {isOpen ? '✕' : '≡'} MENU
        </button>
        <nav className="nav-links hidden md:flex">
                    <Link to="/about" onClick={closeMenu}>About</Link>

          <Link to="/home" onClick={closeMenu}>Services</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </nav>
      </div>
      {isOpen && (
        <div className="mobile-menu md:hidden">
          <Link to="/home" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;