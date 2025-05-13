import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import gsap from 'gsap';
import { backgroundImageStyle, getImageWithFallback, brandColors } from '../lib/imageUtils';

const HeroSection = () => {
  const planeRef = useRef(null);
  
  useEffect(() => {
    // Animate plane path
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(planeRef.current, {
      y: -20,
      duration: 3,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section id="home" className={`relative pt-24 pb-20 md:pt-28 md:pb-28 overflow-hidden bg-gradient-to-br from-white to-[${brandColors.light}]`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
          <div className="md:w-1/2 md:pr-10 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className={`inline-block mb-4 px-4 py-1 bg-[${brandColors.light}] border border-[${brandColors.primary}]/20 rounded-full`}>
                <span className={`text-[${brandColors.primary}] font-medium`}>
                  <span className={`mr-2 inline-block w-2 h-2 bg-[${brandColors.primary}] rounded-full animate-pulse`}></span>
                  Mewar University's Official Aviation Program
                </span>
              </div>
              
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-[${brandColors.text.dark}] mb-6 leading-tight`}>
                <span className="block">Your <span className={`text-[${brandColors.primary}]`}>Journey</span> to</span>
                <span className="block">Aircraft Maintenance</span>
                <span className={`text-[${brandColors.primary}] block`}>Engineering</span>
              </h1>
              
              <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-xl">
                Launch your career in aviation with our specialized Bachelor's program in 
                Aircraft Maintenance Engineering at Mewar Flying Club.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className={`bg-[${brandColors.primary}] hover:bg-[${brandColors.secondary}] text-white font-semibold px-8 py-3 text-base rounded-md`}>
                  Apply Now
                </Button>
                <Button variant="outline" className={`border-[${brandColors.primary}] text-[${brandColors.primary}] hover:bg-blue-50 font-semibold px-8 py-3 text-base rounded-md`}>
                  Program Details
                </Button>
              </div>
              
              <div className="mt-8 flex items-center text-sm text-gray-600">
                <svg className={`w-4 h-4 mr-1 text-[${brandColors.primary}]`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                </svg>
                Applications open for 2025-26 academic year
              </div>
            </motion.div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 z-10">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Hero aircraft image with shadow */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 rounded-xl z-10"></div>
                <div 
                  className="w-full h-[400px] bg-white bg-contain bg-no-repeat bg-center relative rounded-xl overflow-hidden shadow-xl"
                  style={{ backgroundImage: `url('${getImageWithFallback('/images/hero-aircraft.png', 'Aircraft Maintenance')}')` }}
                >
                  {/* Club logo watermark */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                    <img 
                      src={getImageWithFallback('/images/mewar-flying-club-logo.png', 'Mewar Flying Club')}
                      alt="Logo Watermark"
                      className="w-full h-full"
                    />
                  </div>
                  
                  {/* Animated plane */}
                  <div className="absolute -top-10 -left-20" ref={planeRef}>
                    <div 
                      className="w-20 h-20 bg-contain bg-no-repeat"
                      style={{ backgroundImage: `url('${getImageWithFallback('/images/small-plane.png', 'Plane')}')` }}
                    ></div>
                  </div>
                  
                  {/* Animated blueprint elements */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute top-0 right-0 w-32 h-32 bg-contain bg-no-repeat"
                    style={{ backgroundImage: `url('${getImageWithFallback('/images/blueprint-element.png', 'Blueprint')}')` }}
                  ></motion.div>
                </div>
              </motion.div>
              
              {/* Information cards */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute -right-4 top-1/3 bg-white shadow-lg p-3 rounded-lg border border-gray-200"
              >
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full bg-[${brandColors.primary}] flex items-center justify-center mr-3`}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">University Program</p>
                    <p className="text-gray-600 text-sm">Mewar University approved</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="absolute -left-4 bottom-1/4 bg-white shadow-lg p-3 rounded-lg border border-gray-200"
              >
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full bg-[${brandColors.primary}] flex items-center justify-center mr-3`}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">Specialized Curriculum</p>
                    <p className="text-gray-600 text-sm">Industry-focused training</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements - Lotus-inspired shapes */}
      <div className={`absolute top-40 -left-64 w-96 h-96 bg-[${brandColors.light}] rounded-full filter blur-3xl opacity-30 animate-blob`}></div>
      <div className={`absolute bottom-40 -right-64 w-96 h-96 bg-[${brandColors.light}] rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000`}></div>
      
      {/* Decorative lotus petal shapes */}
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-10 overflow-hidden">
        <div className={`w-[800px] h-[800px] mx-auto -mb-[700px] rounded-[50%] border-[40px] border-[${brandColors.primary}]`}></div>
      </div>
    </section>
  );
};

export default HeroSection; 