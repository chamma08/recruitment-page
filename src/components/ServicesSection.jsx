import React from 'react'
import { BsStack } from 'react-icons/bs'
import { HiLightBulb } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'
import { BiTime } from 'react-icons/bi'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const ServicesSection = () => {
  const services = [
    {
      icon: <BsStack className="w-8 h-8 text-[#800000]" />,
      title: "Candidate Sourcing",
      description: "Targeted sourcing for UK retail roles — front-of-house, stock, supervisors.",
      link: "#learn-more"
    },
    {
      icon: <HiLightBulb className="w-8 h-8 text-[#800000]" />,
      title: "Screening & Shortlisting", 
      description: "CV screening, telephone interviews and role-fit shortlists.",
      link: "#learn-more"
    },
    {
      icon: <FiSettings className="w-8 h-8 text-[#800000]" />,
      title: "Onboarding & Payroll",
      description: "Onboarding support and payroll-ready placements for overseas hires.",
      link: "#learn-more"
    },
    {
      icon: <BiTime className="w-8 h-8 text-[#800000]" />,
      title: "Training & Upskilling",
      description: "Role-specific training to ensure quick ramp-up and retention.",
      link: "#learn-more"
    }
  ]

  return (
    <section id="services" className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
     <motion.div 
      variants={fadeIn('up', 0.3)}
      className='flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24'
     >
       {/* Header */}
       <motion.div 
        variants={fadeIn('right', 0.4)}
        className="md:w-1/3"
       >
        <motion.h2 
          variants={textVariant(0.2)}
          className="text-3xl md:text-4xl font-bold mb-6 md:w-4/5"
        >
          Retail Recruitment Services
        </motion.h2>
        <motion.p 
          variants={fadeIn('up', 0.5)}
          className="text-gray-600 text-lg mb-4 md:w-4/5"
        >
          End-to-end hiring solutions for UK retail — sourcing, screening and onboarding from Sri Lanka.
        </motion.p>
        <motion.div 
          variants={fadeIn('up', 0.6)}
          className="space-y-3"
        >
          <motion.div 
            variants={fadeIn('right', 0.7)}
            className="flex items-center gap-2"
          >
            <div className="w-5 h-5 rounded-full bg-[#fff4f4] flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#800000]"></div>
            </div>
            <span className="text-gray-600">Screened, role-fit candidates</span>
          </motion.div>
          <motion.div 
            variants={fadeIn('right', 0.8)}
            className="flex items-center gap-2"
          >
            <div className="w-5 h-5 rounded-full bg-[#fff4f4] flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#800000]"></div>
            </div>
            <span className="text-gray-600">Fast turnaround and payroll-ready hires</span>
          </motion.div>
        </motion.div>
        <motion.a 
          variants={fadeIn('up', 0.9)}
          whileHover={{ scale: 1.02 }}
          href="https://www.retail-vacancies.uk"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block bg-[#800000] text-white px-10 py-4 min-w-[220px] rounded-full hover:bg-[#660000] transition-transform shadow-lg text-lg font-semibold"
        >
          Browse Retail Vacancies
        </motion.a>
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        variants={fadeIn('left', 0.4)}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {services.map((service, index) => (
          <motion.div 
            key={index}
            variants={fadeIn('up', 0.3 * (index + 1))}
            whileHover={{ scale: 1.04 }}
            className="bg-white w-full cursor-pointer rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
          >
            <motion.div 
              variants={fadeIn('down', 0.4 * (index + 1))}
              className="mb-4"
            >
              {service.icon}
            </motion.div>
            <motion.h3 
              variants={textVariant(0.3)}
              className="text-xl font-semibold mb-2"
            >
              {service.title}
            </motion.h3>
            <motion.p 
              variants={fadeIn('up', 0.5 * (index + 1))}
              className="text-gray-600 mb-4"
            >
              {service.description}
            </motion.p>
            <motion.a 
              variants={fadeIn('up', 0.6 * (index + 1))}
              href={service.link}
              className="text-[#800000] font-medium hover:text-[#660000] transition-colors"
            >
              Learn more
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
     </motion.div>
    </section>
  )
}

export default ServicesSection 