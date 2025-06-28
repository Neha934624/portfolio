import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaCode, FaRocket, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const [particles, setParticles] = useState([]);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const texts = [
    "Electronics & Communication Engineering Student",
    "Full-Stack Web Developer",
    "Java Programming Expert",
    "Problem Solver & Innovator"
  ];

  useEffect(() => {
    // Create floating particles
    const particleCount = 50;
    const newParticles = [];
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 2
      });
    }
    
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % texts.length;
      const fullText = texts[current];

      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, typingSpeed, texts]);

  return (
    <section id="home" className="hero">
      {/* Particle Effects */}
      <div className="particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>
      
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <FaStar className="badge-icon" />
              <span>Available for Opportunities</span>
            </motion.div>

            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm <span className="highlight">Neha Balina</span>
            </motion.h1>
            
            <motion.h2 
              className="hero-subtitle typing-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {currentText}
              <span className="cursor">|</span>
            </motion.h2>
            
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Motivated and dedicated student with a strong foundation in Web Development, 
              Java Programming, and Data Structures & Algorithms. Passionate about 
              leveraging technical skills to deliver efficient, innovative solutions.
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a 
                href="#projects" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a 
                href="#contact" 
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            <motion.div 
              className="hero-social"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <motion.a 
                href="https://github.com/Neha934624" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, y: -5, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/neha-balina-3bb225340/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, y: -5, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                href="mailto:balinaneha19@gmail.com" 
                className="social-link"
                whileHover={{ scale: 1.2, y: -5, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaEnvelope />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="hero-avatar floating-card">
              <div className="avatar-placeholder">
                <span className="gradient-text">NB</span>
              </div>
              <div className="avatar-glow"></div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="scroll-indicator-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div 
            className="scroll-arrow"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaArrowDown />
          </motion.div>
          <p>Scroll to explore</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 