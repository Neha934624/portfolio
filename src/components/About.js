import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaUsers, FaRocket, FaGraduationCap, FaTrophy, FaCode, FaDatabase, FaMobile } from 'react-icons/fa';
import './About.css';

const About = () => {
  const strengths = [
    {
      icon: <FaLightbulb />,
      title: "Problem Solving",
      description: "Strong analytical and debugging skills with proven ability to tackle complex challenges.",
      highlight: "DSA Expert"
    },
    {
      icon: <FaUsers />,
      title: "Team Collaboration",
      description: "Excellent communication and teamwork abilities, capable of working effectively in diverse teams.",
      highlight: "Leadership Ready"
    },
    {
      icon: <FaRocket />,
      title: "Quick Learner",
      description: "Eager to adopt new technologies and tools, continuously enhancing technical knowledge.",
      highlight: "Fast Adapter"
    },
    {
      icon: <FaGraduationCap />,
      title: "Academic Excellence",
      description: "Maintained high academic performance with CGPA of 8.95 in Electronics and Communication Engineering.",
      highlight: "Top Performer"
    }
  ];

  const achievements = [
    { icon: <FaTrophy />, text: "8.95 CGPA", color: "#ffd700" },
    { icon: <FaCode />, text: "3+ Major Projects", color: "#00d4ff" },
    { icon: <FaDatabase />, text: "Full-Stack Skills", color: "#ff6b6b" },
    { icon: <FaMobile />, text: "Responsive Design", color: "#4ecdc4" }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="about-header">
              <h3 className="gradient-text">Professional Summary</h3>
              <div className="achievement-badges">
                {achievements.map((achievement, index) => (
                  <motion.div 
                    key={index}
                    className="achievement-badge"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className="badge-icon" style={{ color: achievement.color }}>
                      {achievement.icon}
                    </div>
                    <span>{achievement.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <p>
              I am a motivated and dedicated Electronics and Communication Engineering student 
              with a strong foundation in Web Development, Java Programming, and Data Structures & Algorithms. 
              My passion lies in leveraging technical skills to deliver efficient, innovative solutions 
              that make a real impact.
            </p>
            <p>
              Currently pursuing my degree at TKR College of Engineering and Technology, JNTUH, 
              I maintain a strong academic record with a CGPA of 8.95. I am actively seeking 
              opportunities to contribute to organizational and personal growth while continuously 
              learning and expanding my skill set.
            </p>
            <p>
              I am proficient in multiple programming languages including Java, JavaScript, and SQL, 
              with hands-on experience in modern web development technologies like React.js, Node.js, 
              and various frameworks. My projects demonstrate my ability to work with both frontend 
              and backend technologies, creating full-stack applications.
            </p>
          </motion.div>

          <motion.div 
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="stats-grid">
              <motion.div 
                className="stat-item floating-card"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="stat-number">8.95</div>
                <div className="stat-label">CGPA</div>
                <div className="stat-subtitle">Academic Excellence</div>
              </motion.div>
              <motion.div 
                className="stat-item floating-card"
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="stat-number">95%</div>
                <div className="stat-label">Intermediate</div>
                <div className="stat-subtitle">Consistent Performance</div>
              </motion.div>
              <motion.div 
                className="stat-item floating-card"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="stat-number">9.2</div>
                <div className="stat-label">SSC CGPA</div>
                <div className="stat-subtitle">Strong Foundation</div>
              </motion.div>
              <motion.div 
                className="stat-item floating-card"
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="stat-number">3+</div>
                <div className="stat-label">Major Projects</div>
                <div className="stat-subtitle">Hands-on Experience</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="strengths-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="gradient-text">Key Strengths</h3>
          <div className="strengths-grid">
            {strengths.map((strength, index) => (
              <motion.div 
                key={index}
                className="strength-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="strength-header">
                  <div className="strength-icon">
                    {strength.icon}
                  </div>
                  <div className="strength-highlight">{strength.highlight}</div>
                </div>
                <h4>{strength.title}</h4>
                <p>{strength.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 