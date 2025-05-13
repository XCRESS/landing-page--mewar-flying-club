import React from 'react';
import { motion } from 'framer-motion';
import { getImageWithFallback } from '../lib/imageUtils';

const FeatureCard = ({ title, description, image, delay }) => {
  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 h-full flex flex-col"
    >
      <div 
        className="h-48 bg-cover bg-center" 
        style={{ backgroundImage: `url('${getImageWithFallback(image, title)}')` }}
      ></div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-[#004080] mb-3">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
};

const ProgramDetails = () => {
  const programFeatures = [
    {
      title: "Comprehensive Curriculum",
      description: "Our program covers all aspects of aircraft maintenance including airframes, engines, avionics, and regulatory requirements based on DGCA norms and CAR 66 standards.",
      image: "/images/curriculum.jpg"
    },
    {
      title: "Program Duration",
      description: "This is a 3-year bachelor's degree program (6 semesters) with theoretical subjects, practical labs, On-Job Training (OJT), and regulatory subjects as per DGCA.",
      image: "/images/duration.jpg"
    },
    {
      title: "Eligibility Requirements",
      description: "Candidates must have completed 10+2 with Physics, Chemistry, and Mathematics from a recognized board with minimum 50% aggregate in PCM.",
      image: "/images/eligibility.jpg"
    },
    {
      title: "Career Prospects",
      description: "Graduates can pursue careers as aircraft maintenance engineers, technical services specialists, quality control inspectors, and more in airlines and MRO facilities.",
      image: "/images/prospects.jpg"
    }
  ];

  // Course structure from syllabus
  const courseStructure = [
    {
      semester: "1st Semester",
      courses: [
        "AME-101: Mathematics-I (Theory)",
        "AME-102: Physics (Theory)",
        "AME-103: Aircraft Materials (Theory)",
        "AME-104: Basics of Aircraft Systems (Theory)",
        "AME-105: Workshop Practice – I (Practical)",
        "AME-106: Communication Skills (Theory)",
        "AME-107: Environmental Science (Theory)"
      ]
    },
    {
      semester: "2nd Semester",
      courses: [
        "AME-201: Mathematics-II (Theory)",
        "AME-202: Chemistry (Theory)",
        "AME-203: Aircraft Structures (Theory)",
        "AME-204: Electrical Systems (Theory)",
        "AME-205: Workshop Practice – II (Practical)",
        "AME-206: Engineering Drawing (Practical)",
        "AME-207: Human Values & Ethics (Theory)"
      ]
    },
    {
      semester: "3rd Semester",
      courses: [
        "AME-301: Aircraft Propulsion – I (Theory)",
        "AME-302: Aircraft Instruments & Avionics (Theory)",
        "AME-303: Digital Electronics (Theory)",
        "AME-304: Thermodynamics (Theory)",
        "AME-305: Practical Lab – I (Avionics)",
        "AME-306: Practical Lab – II (Propulsion)",
        "AME-307: Project-I (Project)"
      ]
    },
    {
      semester: "4th Semester",
      courses: [
        "AME-401: Aircraft Propulsion – II (Theory)",
        "AME-402: Flight Dynamics (Theory)",
        "AME-403: Airframe Systems (Theory)",
        "AME-404: Control Systems (Theory)",
        "AME-405: Practical Lab – III (Control/Flight Systems)",
        "AME-406: Practical Lab – IV (Engines)",
        "AME-407: Project-II (Project)"
      ]
    },
    {
      semester: "5th Semester",
      courses: [
        "AME-501: Aircraft Maintenance Practices (Theory)",
        "AME-502: Aviation Legislation (Theory)",
        "AME-503: Non-Destructive Testing (Theory)",
        "AME-504: Aircraft Electrical & Instrument Systems (Theory)",
        "AME-505: Practical Lab – V (Practical)",
        "AME-506: Practical Lab – VI (Practical)",
        "AME-507: Project-III (Project)"
      ]
    },
    {
      semester: "6th Semester",
      courses: [
        "AME-601: Aircraft Safety & Quality Control (Theory)",
        "AME-602: Aircraft Maintenance Management (Theory)",
        "AME-603: Composite Materials in Aviation (Theory)",
        "AME-604: Practical Lab – VII (QA/QC)",
        "AME-605: On-Job Training (OJT)",
        "AME-606: Project-IV (Final Major Project)"
      ]
    }
  ];

  return (
    <section id="program" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#004080] font-semibold uppercase tracking-wider">Our Program</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">B.Sc. (Hons) Aircraft Maintenance</h2>
          <p className="text-gray-700 text-lg">
            Our specialized program is designed to provide students with the knowledge and skills needed to excel in aircraft maintenance engineering, adhering to regulatory standards like CAR 66 & DGCA norms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {programFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              delay={0.1 * index}
            />
          ))}
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-[#004080] mb-6 text-center">Program Structure</h3>
          
          <div className="mb-6">
            <p className="text-gray-700 text-center">
              This comprehensive 3-year program follows a semester-wise pattern with a balanced mix of 
              theoretical subjects, practical labs, and projects to ensure hands-on learning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseStructure.map((semester, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-blue-50 rounded-lg p-6"
              >
                <h4 className="font-bold text-gray-900 mb-4">{semester.semester}</h4>
                <ul className="space-y-2">
                  {semester.courses.map((course, courseIndex) => (
                    <li key={courseIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-[#004080] mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-gray-700">{course}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8">
            <p className="text-center text-gray-700">
              This program is affiliated with Mewar University and follows their approved curriculum.
              For complete program details and admission requirements, please contact the admissions office.
            </p>
          </div>
          
          <div className="flex justify-center mt-8">
            <a 
              href="#enroll" 
              className="inline-flex items-center px-5 py-3 bg-[#004080] text-white rounded-md hover:bg-[#003366] transition-colors"
            >
              Apply For This Program
              <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails; 