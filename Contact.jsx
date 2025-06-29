import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-primary/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-heading">Get In Touch</h2>
          
          <p className="mb-12 text-lightSlate text-center max-w-2xl mx-auto">
            I'm currently looking for new opportunities! Whether you have a question or just want to say hi,
            I'll do my best to get back to you as soon as possible.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center p-6 bg-tertiary rounded-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-secondary/20 text-secondary rounded-full mb-4">
                <FiMail size={20} />
              </div>
              <h3 className="text-lg font-medium text-lightestSlate mb-2">Email</h3>
              <a href="mailto:hello@neha.dev" className="text-lightSlate hover:text-secondary transition-colors duration-300">
                hello@neha.dev
              </a>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-tertiary rounded-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-secondary/20 text-secondary rounded-full mb-4">
                <FiPhone size={20} />
              </div>
              <h3 className="text-lg font-medium text-lightestSlate mb-2">Phone</h3>
              <a href="tel:+1234567890" className="text-lightSlate hover:text-secondary transition-colors duration-300">
                +1 (234) 567-890
              </a>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-tertiary rounded-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-secondary/20 text-secondary rounded-full mb-4">
                <FiMapPin size={20} />
              </div>
              <h3 className="text-lg font-medium text-lightestSlate mb-2">Location</h3>
              <p className="text-lightSlate text-center">
                New York, NY
              </p>
            </div>
          </div>
          
          <div className="bg-tertiary p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-lightestSlate mb-6 text-center">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-lightSlate mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-primary border border-gray-700 rounded focus:outline-none focus:border-secondary text-lightSlate"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-lightSlate mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-primary border border-gray-700 rounded focus:outline-none focus:border-secondary text-lightSlate"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-lightSlate mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-primary border border-gray-700 rounded focus:outline-none focus:border-secondary text-lightSlate"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-lightSlate mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 bg-primary border border-gray-700 rounded focus:outline-none focus:border-secondary text-lightSlate resize-none"
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Send Message <FiSend />
                    </>
                  )}
                </button>
                
                {submitStatus === 'success' && (
                  <p className="mt-4 text-green-400">
                    Your message has been sent successfully!
                  </p>
                )}
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
