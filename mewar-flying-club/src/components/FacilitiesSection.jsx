import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getImageWithFallback } from '../lib/imageUtils';

const FacilityCard = ({ image, title, description, icon }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
    >
      <div className="relative h-52">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url('${getImageWithFallback(image, title)}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4">
          <div className="bg-blue-600 p-3 rounded-lg shadow-lg inline-block">
            {icon}
          </div>
        </div>
      </div>
      
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
};

const DevelopmentPhase = ({ phase, status, items, color }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex items-center mb-4">
        <div className={`w-3 h-3 rounded-full bg-${color}-500 mr-2`} style={{ backgroundColor: color }}></div>
        <div className="text-xl font-bold text-gray-900">{phase}</div>
      </div>
      <div className="text-sm text-gray-500 uppercase tracking-wider mb-4">{status}</div>
      <ul className="space-y-3 text-gray-700">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <svg className={`w-5 h-5 text-${color}-500 mt-0.5 mr-2 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ color }}>
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const FacilitiesSection = () => {
  const facilities = [
    {
      image: "/images/hangar.jpg",
      title: "Aircraft Maintenance Hangar",
      description: "Dedicated space for practical training on actual aircraft components and systems, allowing students to work on real maintenance scenarios in a controlled environment.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      image: "/images/workshop.jpg",
      title: "Specialized Technical Workshops",
      description: "Fully equipped workshops for aircraft systems including hydraulics, pneumatics, electrical systems, and avionics with industry-standard tools and testing equipment.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      image: "/images/simulation.jpg",
      title: "Advanced Simulation Labs",
      description: "State-of-the-art simulation technology for aircraft systems training, allowing students to practice maintenance procedures in a safe, controlled virtual environment.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      image: "/images/engine-test.jpg",
      title: "Engine Test Cell",
      description: "Specialized facility for testing and diagnosing aircraft engine components, allowing students to understand performance parameters and troubleshooting techniques.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      image: "/images/library.jpg",
      title: "Technical Library & Documentation Center",
      description: "Comprehensive collection of maintenance manuals, technical publications, digital resources and regulatory documents essential for aircraft maintenance engineering studies.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      image: "/images/classroom.jpg",
      title: "Smart Classrooms",
      description: "Technology-enabled learning spaces with digital presentation tools, interactive whiteboards, and multimedia capabilities for enhanced theoretical instruction.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
  ];

  const developmentPhases = [
    {
      phase: "Phase 1: Foundation",
      status: "Completed",
      items: [
        "Smart Classrooms & Interactive Learning Spaces",
        "Technical Library & Documentation Center",
        "Basic Aviation Workshop & Training Equipment",
        "Computer Labs & Digital Resources"
      ],
      color: "#22c55e" // green-500
    },
    {
      phase: "Phase 2: Advanced Training Facilities",
      status: "In Progress",
      items: [
        "Specialized Technical Workshops (Avionics, Hydraulics, Pneumatics)",
        "Advanced Simulation & Virtual Reality Training Systems",
        "Aircraft Component Collections & Cutaway Models",
        "Non-Destructive Testing Laboratory"
      ],
      color: "#eab308" // yellow-500
    },
    {
      phase: "Phase 3: Industry-Level Infrastructure",
      status: "Future Development",
      items: [
        "Full-Scale Aircraft Maintenance Hangar",
        "Operational Aircraft for Hands-on Training",
        "Engine Test Cell & Powerplant Laboratory",
        "Industry Partnership Training Areas & Research Center"
      ],
      color: "#3b82f6" // blue-500
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#004080] font-semibold uppercase tracking-wider"
          >
            Training Infrastructure
          </motion.span>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4"
          >
            World-Class Facilities
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-700 text-lg"
          >
            State-of-the-art infrastructure designed specifically for aircraft maintenance training
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {facilities.map((facility, index) => (
            <FacilityCard
              key={index}
              image={facility.image}
              title={facility.title}
              description={facility.description}
              icon={facility.icon}
            />
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md mb-20">
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-center text-gray-900 mb-6"
          >
            Facility Development Roadmap
          </motion.h3>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-700 text-center mb-10 max-w-3xl mx-auto"
          >
            As Mewar University's dedicated aircraft maintenance program, we are systematically developing
            world-class facilities to provide students with hands-on experience in accordance with
            international aviation standards and DGCA requirements.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {developmentPhases.map((phase, index) => (
              <DevelopmentPhase
                key={index}
                phase={phase.phase}
                status={phase.status}
                items={phase.items}
                color={phase.color}
              />
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#004080] rounded-xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-6">Commitment to Excellence</h3>
          <p className="mb-8 max-w-3xl mx-auto">
            Our facility development plan is guided by aviation industry standards and DGCA requirements.
            We continuously invest in expanding our infrastructure to ensure our students receive training
            on the most current aircraft systems and maintenance technologies.
          </p>
          <a 
            href="#enroll" 
            className="inline-flex items-center px-6 py-3 bg-white text-[#004080] rounded-md font-medium hover:bg-blue-50 transition-colors"
          >
            Apply Now
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FacilitiesSection; 