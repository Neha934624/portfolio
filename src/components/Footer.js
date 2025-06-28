import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; 2024 Neha Balina. All rights reserved.</p>
          </div>
          <div className="footer-social">
            <a 
              href="https://github.com/Neha934624" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/neha-balina-3bb225340/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:balinaneha19@gmail.com" 
              className="social-link"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 