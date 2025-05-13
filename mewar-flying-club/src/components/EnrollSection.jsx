import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const EnrollSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '10+2',
    message: '',
    agreed: false,
  });
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would submit the form data to a server
    alert('Your application inquiry has been received. Our admissions team will contact you shortly.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      education: '10+2',
      message: '',
      agreed: false,
    });
  };

  return (
    <section id="enroll" className="py-20 bg-gradient-to-b from-blue-900 to-[#003366]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-blue-300 font-semibold uppercase tracking-wider">Take The First Step</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                  Shape Your Future in Aviation
                </h2>
                <p className="text-blue-100 mb-6">
                  Begin your journey in aircraft maintenance engineering at Mewar Flying Club. Fill out this form, and our admissions team will guide you through the application process.
                </p>
                
                <div className="bg-blue-800/50 backdrop-blur-sm p-6 rounded-lg border border-blue-700 mb-8">
                  <h3 className="text-xl font-bold text-white mb-3">Admission Requirements</h3>
                  <ul className="space-y-3 text-blue-100">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-300 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Completed 10+2 with Physics, Chemistry, and Mathematics</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-300 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Minimum aggregate of 50% in PCM</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-300 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Valid entrance exam score (if applicable)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex items-center space-x-4">
                  <a 
                    href="https://www.mewaruniversity.org/pages/Course_Fee_Structure.aspx" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-300 font-medium hover:text-blue-200 hover:underline flex items-center transition-colors"
                  >
                    View Fee Structure
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a 
                    href="tel:18001218086" 
                    className="text-blue-300 font-medium hover:text-blue-200 hover:underline flex items-center transition-colors"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    Call: 18001218086
                  </a>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-blue-800/80 to-blue-900/80 backdrop-blur-sm shadow-xl rounded-xl p-6 md:p-8 border border-blue-700/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/10 background-mesh"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Request Information
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-1">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-blue-900/50 border border-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-blue-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-1">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-blue-900/50 border border-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-blue-300"
                          placeholder="Your email address"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-blue-200 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-blue-900/50 border border-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-blue-300"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="education" className="block text-sm font-medium text-blue-200 mb-1">Current Educational Level *</label>
                      <select
                        id="education"
                        name="education"
                        required
                        value={formData.education}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-blue-900/50 border border-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white"
                      >
                        <option value="10+2">10+2 Completed</option>
                        <option value="10+2 appearing">10+2 Appearing</option>
                        <option value="diploma">Diploma</option>
                        <option value="graduate">Graduate</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-blue-200 mb-1">Additional Information (Optional)</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-blue-900/50 border border-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-blue-300"
                        placeholder="Any specific questions or information you would like to know?"
                      ></textarea>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="agreed"
                          name="agreed"
                          type="checkbox"
                          required
                          checked={formData.agreed}
                          onChange={handleChange}
                          className="h-4 w-4 bg-blue-900/50 border border-blue-700 rounded focus:ring-blue-400"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="agreed" className="text-blue-200">
                          I agree to receive information about the program and understand that my data will be processed in accordance with Mewar University's privacy policy.
                        </label>
                      </div>
                    </div>
                    
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded transition-colors">
                      Submit Application Inquiry
                    </Button>
                  </form>

                  <style jsx>{`
                    .background-mesh {
                      background-image: 
                        radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.1) 2%, transparent 0%),
                        radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.1) 2%, transparent 0%);
                      background-size: 100px 100px;
                    }
                  `}</style>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollSection; 