import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-primary border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lightSlate hover:text-secondary transition-colors duration-300"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lightSlate hover:text-secondary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lightSlate hover:text-secondary transition-colors duration-300"
              aria-label="Twitter"
            >
              <FiTwitter size={20} />
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-lightSlate text-sm mb-2">
              Designed & Built by Neha
            </p>
            <p className="text-lightSlate text-sm flex items-center justify-center">
              © {currentYear} All Rights Reserved. Made with <FiHeart className="mx-1 text-secondary" size={14} /> using React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
