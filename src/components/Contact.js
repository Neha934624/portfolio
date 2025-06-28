import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in new opportunities and collaborations. 
              Feel free to reach out if you'd like to discuss potential projects, 
              job opportunities, or just want to say hello!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:balinaneha19@gmail.com">balinaneha19@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <FaLinkedin className="contact-icon" />
                <div>
                  <h4>LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/neha-balina-3bb225340/" target="_blank" rel="noopener noreferrer">
                    neha-balina-3bb225340
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <FaGithub className="contact-icon" />
                <div>
                  <h4>GitHub</h4>
                  <a href="https://github.com/Neha934624" target="_blank" rel="noopener noreferrer">
                    Neha934624
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Location</h4>
                  <span>Hyderabad, India</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Send Message</h3>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 