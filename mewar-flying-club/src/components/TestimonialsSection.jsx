import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getImageWithFallback, backgroundImageStyle } from '../lib/imageUtils';

const Testimonial = ({ name, position, company, image, quote, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 20 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className={`absolute inset-0 flex flex-col md:flex-row items-center gap-8 ${
        isActive ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      <div className="md:w-1/3 mb-6 md:mb-0">
        <div className="relative">
          <div className="w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-blue-500 mx-auto">
            <img 
              src={getImageWithFallback(image, name, '001845', 'FFFFFF', 200, 200)} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h10zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="md:w-2/3 text-center md:text-left">
        <svg className="w-10 h-10 text-blue-500/30 mb-4 mx-auto md:mx-0" fill="currentColor" viewBox="0 0 32 32">
          <path d="M10 8c-2.209 0-4 1.791-4 4v12h12v-12c0-2.209-1.791-4-4-4h-4zM26 8c-2.209 0-4 1.791-4 4v12h12v-12c0-2.209-1.791-4-4-4h-4z"></path>
        </svg>
        
        <p className="text-gray-300 text-lg italic mb-6">{quote}</p>
        
        <div>
          <h4 className="text-white font-semibold text-xl">{name}</h4>
          <p className="text-blue-400">{position}, {company}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Rahul Sharma",
      position: "Aircraft Maintenance Engineer",
      company: "IndiGo Airlines",
      image: "/images/testimonial-1.jpg",
      quote: "The hands-on training I received at Mewar Flying Club gave me a competitive edge in the industry. The instructors have real-world experience and the facilities are exceptional. I landed my dream job right after graduation."
    },
    {
      name: "Priya Mehta",
      position: "Technical Services Specialist",
      company: "Air India",
      image: "/images/testimonial-2.jpg",
      quote: "Joining Mewar Flying Club was the best decision of my life. The comprehensive curriculum and industry connections helped me secure a position at Air India. The practical experience I gained was invaluable."
    },
    {
      name: "Vikram Singh",
      position: "Quality Control Inspector",
      company: "SpiceJet",
      image: "/images/testimonial-3.jpg",
      quote: "The curriculum at Mewar Flying Club perfectly blends theoretical knowledge with practical skills. The focus on industry standards and safety protocols prepared me well for my role in quality control."
    },
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-indigo-950/80 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <svg className="w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <radialGradient id="radialGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#1e293b" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="50" fill="url(#radialGradient)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blue-500 font-semibold uppercase tracking-wider"
          >
            Success Stories
          </motion.span>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4"
          >
            Alumni Testimonials
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Hear from our graduates who are now successful aviation professionals
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/30 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-blue-500/20 shadow-xl relative">
            {/* Blueprint design element */}
            <div 
              className="absolute top-0 right-0 w-40 h-40 bg-no-repeat bg-contain opacity-20"
              style={backgroundImageStyle('/images/blueprint-corner.png', 'Blueprint Corner')}
            ></div>
            
            <div className="relative h-[300px] md:h-[220px]">
              {testimonials.map((testimonial, index) => (
                <Testimonial 
                  key={index}
                  {...testimonial}
                  isActive={activeIndex === index}
                />
              ))}
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeIndex === index ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                ></button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {/* Stats */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/10 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">98%</div>
              <div className="text-white font-medium">Placement Rate</div>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/10 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">850+</div>
              <div className="text-white font-medium">Alumni Network</div>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/10 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">25+</div>
              <div className="text-white font-medium">Industry Partners</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 