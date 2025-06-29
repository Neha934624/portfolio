import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-heading">About Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <p className="mb-4 text-lightSlate">
                Hello! I'm Neha, a passionate web developer with a keen interest in creating beautiful, 
                functional, and user-friendly websites. My journey in web development started back in 
                college when I built my first website for a student organization.
              </p>
              
              <p className="mb-4 text-lightSlate">
                Fast-forward to today, I've had the privilege of working at a 
                <span className="text-secondary"> startup</span>, a 
                <span className="text-secondary"> large corporation</span>, and a 
                <span className="text-secondary"> design studio</span>. My main focus these days is building accessible, 
                inclusive products and digital experiences for a variety of clients.
              </p>
              
              <p className="mb-4 text-lightSlate">
                I also recently launched a course that covers everything you need to build a web app with 
                the MERN stack. I love sharing my knowledge and helping others grow in their development journey.
              </p>
              
              <p className="text-lightSlate">
                When I'm not at the computer, I'm usually rock climbing, hiking, or exploring new coffee shops in the city.
              </p>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-secondary rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative">
                <div className="w-full h-full overflow-hidden rounded-lg bg-tertiary">
                  <div className="relative w-full h-full">
                    {/* Replace with your image */}
                    <div className="w-full h-64 md:h-full bg-gray-700 flex items-center justify-center text-lightSlate">
                      <p className="text-center">Your Photo Here</p>
                    </div>
                    <div className="absolute inset-0 bg-secondary/20 hover:bg-transparent transition duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
