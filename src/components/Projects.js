import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaRocket } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Weed Identification using Deep Learning",
      description: "Developed an innovative model to reduce the complexity of weed detection using deep learning techniques. Utilized image processing techniques for automated detection and enhanced training dataset efficiency.",
      technologies: ["Deep Learning", "Image Processing", "Python", "Computer Vision"],
      github: "https://github.com/Neha934624",
      live: null,
      icon: <FaRocket />
    },
    {
      title: "Wanderlust – Travel Listings Web Application",
      description: "Built a full-stack web application for sharing and exploring travel listings. Implemented secure user authentication using Passport.js and optimized performance with MongoDB.",
      technologies: ["Node.js", "MongoDB", "Passport.js", "Bootstrap", "EJS"],
      github: "https://github.com/Neha934624",
      live: null,
      icon: <FaDatabase />
    },
    {
      title: "Web Development Projects Collection",
      description: "Amazon Clone, Spotify Clone, Tic Tac Toe, Calculator, Weather App, To-Do List, Rock Paper Scissors, Theatre Management System with SpringBoot.",
      technologies: ["React.js", "Spring Boot", "JavaScript", "HTML/CSS", "Java"],
      github: "https://github.com/Neha934624",
      live: null,
      icon: <FaCode />
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="project-icon">
                {project.icon}
              </div>
              <div className="project-content">
                <h3 className="gradient-text">{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex} 
                      className="tech-tag"
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <motion.a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub /> Code
                </motion.a>
                {project.live && (
                  <motion.a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 