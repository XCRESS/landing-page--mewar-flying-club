import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ProgramDetails from './components/ProgramDetails';
import FacilitiesSection from './components/FacilitiesSection';
import EnrollSection from './components/EnrollSection';
import Footer from './components/Footer';
import { getImageWithFallback, brandColors } from './lib/imageUtils';

function App() {
  // Parallax scrolling effect
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <div className="relative overflow-hidden min-h-screen bg-white">
      {/* University affiliation banner */}
      <div className="bg-sky-700 text-white px-4 py-1 text-center text-sm md:text-base" style={{ backgroundColor: brandColors.primary }}>
        An official program of Mewar University - Expanding Horizons in Aviation Education
      </div>

      {/* Background elements */}
      <div className="fixed inset-0 z-0 opacity-5 pointer-events-none">
        <motion.div 
          className="absolute w-full h-full"
          style={{ y: backgroundY }}
        >
          {/* Using background images with fallback colors */}
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-sky-100/30 rounded-full bg-contain bg-no-repeat opacity-30" 
               style={{ backgroundImage: `url('${getImageWithFallback('/images/engine-part.png')}')` }}></div>
          <div className="absolute top-2/3 right-1/4 w-96 h-96 bg-sky-100/20 rounded-full bg-contain bg-no-repeat rotate-12 opacity-20" 
               style={{ backgroundImage: `url('${getImageWithFallback('/images/wing-part.png')}')` }}></div>
          <div className="absolute bottom-1/4 left-1/5 w-52 h-52 bg-sky-100/25 rounded-full bg-contain bg-no-repeat -rotate-6 opacity-25" 
               style={{ backgroundImage: `url('${getImageWithFallback('/images/blueprint.png')}')` }}></div>
        </motion.div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center">
              {/* Animated logos section */}
              <motion.div 
                className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-blue-500/10 rounded-full filter blur-xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                  />
                  <img 
                    src="/images/mewar-flying-club-logo.jpg" 
                    alt="Mewar Flying Club Logo" 
                    className="h-28 md:h-32 relative z-10 rounded-full border-2 border-blue-100 shadow-lg"
                  />
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="flex items-center justify-center"
                >
                  <div className="flex items-center justify-center w-14 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent">
                    <motion.div 
                      className="h-2 w-2 bg-blue-600 rounded-full"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 1, 0.3]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </motion.div>
                
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-blue-500/10 rounded-lg filter blur-xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 1.5
                    }}
                  />
                  <img 
                    src="/images/Logo-Mewar-uni.jpg" 
                    alt="Mewar University Logo" 
                    className="h-28 md:h-32 relative z-10 rounded-lg border-2 border-blue-100 shadow-lg object-contain"
                  />
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="max-w-2xl text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-sky-800 mb-4" style={{ color: '#004080' }}>
                  Mewar University's First Aviation Program
                </h2>
                <p className="text-gray-700 text-lg">
                  As Mewar University's pioneering initiative in aviation education, our program 
                  provides a pathway to excellence in aircraft maintenance engineering. Located in 
                  Chittorgarh, Rajasthan, we bring the university's commitment to quality education 
                  to the aviation sector.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        <FeaturesSection />
        <ProgramDetails />
        <FacilitiesSection />
        <EnrollSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
