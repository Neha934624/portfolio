import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaDatabase, FaGitAlt, FaFigma, FaSass, FaDocker 
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 size={40} className="text-[#E34F26]" /> },
    { name: 'CSS3', icon: <FaCss3Alt size={40} className="text-[#1572B6]" /> },
    { name: 'JavaScript', icon: <FaJs size={40} className="text-[#F7DF1E]" /> },
    { name: 'TypeScript', icon: <SiTypescript size={40} className="text-[#3178C6]" /> },
    { name: 'React', icon: <FaReact size={40} className="text-[#61DAFB]" /> },
    { name: 'Node.js', icon: <FaNodeJs size={40} className="text-[#339933]" /> },
    { name: 'Express', icon: <SiExpress size={40} className="text-white" /> },
    { name: 'MongoDB', icon: <SiMongodb size={40} className="text-[#47A248]" /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss size={40} className="text-[#06B6D4]" /> },
    { name: 'Sass', icon: <FaSass size={40} className="text-[#CC6699]" /> },
    { name: 'Git', icon: <FaGitAlt size={40} className="text-[#F05032]" /> },
    { name: 'Figma', icon: <FaFigma size={40} className="text-[#F24E1E]" /> },
    { name: 'Docker', icon: <FaDocker size={40} className="text-[#2496ED]" /> },
    { name: 'SQL', icon: <FaDatabase size={40} className="text-[#4479A1]" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-primary/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-heading">Skills & Technologies</h2>
          
          <p className="mb-10 text-lightSlate">
            I've worked with a variety of technologies in the web development world.
            From front-end design to back-end systems, here are some of the technologies I enjoy working with:
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-4 rounded-lg bg-tertiary hover:bg-tertiary/80 transition-colors duration-300"
              >
                <div className="mb-3">{skill.icon}</div>
                <span className="text-lightestSlate text-sm">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
