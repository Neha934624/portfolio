import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaTools, FaLaptopCode } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      icon: <FaCode />,
      title: "Programming Languages",
      skills: ["Java (Core & Advanced)", "JavaScript (ES6)", "SQL"]
    },
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap", "Tailwind CSS"]
    },
    {
      icon: <FaDatabase />,
      title: "Frameworks & Databases",
      skills: ["Node.js", "Express.js", "Spring Boot", "Hibernate", "MongoDB", "SQL"]
    },
    {
      icon: <FaTools />,
      title: "Tools & Other Skills",
      skills: ["Visual Studio Code", "Eclipse", "GitHub", "Postman", "Data Structures & Algorithms", "UI/UX Design"]
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="category-icon">
                {category.icon}
              </div>
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="languages-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Languages</h3>
          <div className="languages-list">
            <span className="language-tag">English</span>
            <span className="language-tag">Telugu</span>
            <span className="language-tag">Hindi</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 