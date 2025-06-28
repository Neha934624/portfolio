import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
      
      // Calculate scroll progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <>
      <div className="scroll-indicator">
        <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
      </div>
      
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <h2 className="gradient-text">Neha Balina</h2>
            </div>
            
            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
              <ul className="nav-list">
                <li><button onClick={() => scrollToSection('home')}>Home</button></li>
                <li><button onClick={() => scrollToSection('about')}>About</button></li>
                <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
                <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
                <li><button onClick={() => scrollToSection('education')}>Education</button></li>
                <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
              </ul>
            </nav>

            <div className="mobile-menu-btn" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header; 