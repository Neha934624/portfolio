import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 pb-0 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-secondary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="flex flex-col items-start justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible">
          <motion.p
            variants={itemVariants}
            className="text-secondary font-mono mb-4 relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-[2px] before:bg-secondary"
          >
            Hi, my name is
          </motion.p>
          
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-lightestSlate mb-4 relative"
          >
            Neha<span className="text-secondary">.</span>
          </motion.h1>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate mb-6 relative"
          >
            I build <span className="text-secondary">exceptional</span> digital experiences.
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate max-w-xl mb-12 leading-relaxed"
          >
            I'm a software developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="btn-primary flex items-center gap-2 group"
            >
              View My Work 
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="px-6 py-3 border border-lightSlate text-lightSlate rounded hover:bg-lightSlate/10 transition-all duration-300 backdrop-blur-sm"
            >
              Contact Me
            </Link>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="flex space-x-6"
          >
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lightSlate hover:text-secondary transition-colors duration-300 hover:-translate-y-1 inline-block"
              aria-label="GitHub"
            >
              <FiGithub size={22} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lightSlate hover:text-secondary transition-colors duration-300 hover:-translate-y-1 inline-block"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={22} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lightSlate hover:text-secondary transition-colors duration-300 hover:-translate-y-1 inline-block"
              aria-label="Twitter"
            >
              <FiTwitter size={22} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lightSlate hover:text-secondary transition-colors duration-300 hover:-translate-y-1 inline-block"
              aria-label="Instagram"
            >
              <FiInstagram size={22} />
            </a>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <span className="text-secondary text-sm font-mono mb-2">Scroll Down</span>
            <div className="w-[2px] h-8 bg-secondary/50 relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 w-full h-full bg-secondary"
                animate={{ 
                  y: ['-100%', '100%'],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5,
                  ease: "easeInOut" 
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
