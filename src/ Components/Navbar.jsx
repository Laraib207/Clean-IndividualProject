import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

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

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="marquee-wrapper">
        <marquee behavior="scroll" direction="left" scrollamount="5" className="marquee-text">
          Welcome to The Clean Individual
        </marquee>
      </div>
      
      <div className="navbar-content">
        {/* Mobile Menu Button - Only visible on mobile */}
        <button onClick={toggleMenu} className="menu-button">
          {isOpen ? '✕' : '≡'} MENU
        </button>

        {/* Desktop Navigation - Only visible on desktop */}
        <nav className="nav-links">
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/home" onClick={closeMenu}>Services</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </nav>
      </div>

      {/* Mobile Menu - Only shows on mobile when isOpen is true */}
      {isOpen && (
        <div className="mobile-menu">
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/home" onClick={closeMenu}>Services</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;