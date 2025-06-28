import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaUniversity } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const education = [
    {
      icon: <FaUniversity />,
      institution: "TKR College of Engineering and Technology, JNTUH",
      period: "2020 - 2024",
      course: "Electronics and Communication Engineering",
      grade: "CGPA: 8.95"
    },
    {
      icon: <FaSchool />,
      institution: "Narayana Junior College",
      period: "2018 – 2020",
      course: "Major: MPC",
      grade: "Percentage: 95%"
    },
    {
      icon: <FaGraduationCap />,
      institution: "Shantiniketan Educational Institution",
      period: "2017 - 2018",
      course: "SSC",
      grade: "CGPA: 9.2"
    }
  ];

  return (
    <section id="education" className="section education">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <div className="education-timeline">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              className="education-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="education-icon">
                {edu.icon}
              </div>
              <div className="education-content">
                <h3>{edu.institution}</h3>
                <p className="education-period">{edu.period}</p>
                <p className="education-course">{edu.course}</p>
                <p className="education-grade">{edu.grade}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 