import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const projectsRef = useRef(null);
  const isInView = useInView(projectsRef, { once: true, amount: 0.2 });
  
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.',
      image: '/project1.jpg',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      live: 'https://project-demo.com',
      category: 'fullstack'
    },
    {
      title: 'Task Management App',
      description: 'A task management application with drag-and-drop functionality, user authentication, and real-time updates.',
      image: '/project2.jpg',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'React DnD'],
      github: 'https://github.com',
      live: 'https://project-demo.com',
      category: 'frontend'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations.',
      image: '/project3.jpg',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
      github: 'https://github.com',
      live: 'https://project-demo.com',
      category: 'frontend'
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays current weather and forecasts for multiple locations using a weather API.',
      image: '/project4.jpg',
      technologies: ['JavaScript', 'HTML/CSS', 'Weather API'],
      github: 'https://github.com',
      live: 'https://project-demo.com',
      category: 'frontend'
    },
    {
      title: 'Blog API',
      description: 'A RESTful API for a blog platform with authentication, post management, and comment functionality.',
      image: '/project5.jpg',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      github: 'https://github.com',
      category: 'backend'
    },
    {
      title: 'Real-time Chat App',
      description: 'A real-time chat application with private messaging, group chats, and online status indicators.',
      image: '/project6.jpg',
      technologies: ['React', 'Socket.io', 'Node.js', 'Express'],
      github: 'https://github.com',
      live: 'https://project-demo.com',
      category: 'fullstack'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filterButtons = [
    { name: 'All', value: 'all' },
    { name: 'Frontend', value: 'frontend' },
    { name: 'Backend', value: 'backend' },
    { name: 'Full Stack', value: 'fullstack' }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="py-20 bg-primary relative">
      {/* Background elements */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={projectsRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="section-heading">My Projects</motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filterButtons.map((button, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(button.value)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === button.value
                    ? 'bg-secondary text-primary font-medium shadow-lg shadow-secondary/20'
                    : 'bg-tertiary text-lightSlate hover:bg-tertiary/70'
                }`}
              >
                {button.name}
              </button>
            ))}
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="card group relative backdrop-blur-sm border border-gray-800/50 overflow-hidden"
              >
                {/* Folder icon in top right */}
                <div className="absolute top-6 right-6 text-secondary">
                  <FiFolder size={40} />
                </div>
                
                <div className="pt-6">
                  <h3 className="text-xl font-bold text-lightestSlate mb-2 group-hover:text-secondary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-lightSlate mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs bg-primary/80 px-2 py-1 rounded text-secondary font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 mt-auto">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lightSlate hover:text-secondary transition-colors duration-300 hover:-translate-y-1 inline-block"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <FiGithub size={20} />
                    </a>
                    
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-lightSlate hover:text-secondary transition-colors duration-300 hover:-translate-y-1 inline-block"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <FiExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="text-center mt-12"
          >
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 group shadow-lg shadow-secondary/20"
            >
              See More on GitHub <FiExternalLink className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
