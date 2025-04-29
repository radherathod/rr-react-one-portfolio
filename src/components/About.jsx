import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // Animation variants
  const headingVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const textVariant = {
    // Adjusted delay slightly as it's the only content now
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.1 } },
  };

  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-20 px-4 pt-28 flex items-center"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        {/* Section Heading */}
        <motion.div
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="pb-10 text-center md:text-left"
        >
          <h2 className="text-4xl sm:text-5xl font-bold inline border-b-4 border-cyan-500 text-white pb-1">
            About Me
          </h2>
        </motion.div>

        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6 mt-8 md:mt-0"
        >
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed text-justify md:text-left">
            Passionate Frontend & UI Developer based in Pune, India, with 1+
            year of hands-on experience crafting engaging web experiences using
            React.js, Angular, SCSS, and modern frontend technologies. I
            specialize in building interactive dashboards, pixel-perfect UIs,
            and performance-optimized applications with clean, scalable code.
          </p>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed text-justify md:text-left">
            My experience spans eCommerce platforms, enterprise applications,
            and data-driven dashboards. I'm proficient with tools and libraries
            like AmCharts, Kendo UI, Tailwind CSS, and Redux, alongside robust
            API integrations. I have a strong foundation in responsive design
            principles using CSS Grid & Flexbox. I hold an MCA from Sinhgad
            Institute of Management, Pune.
          </p>
        </motion.div>

        {/* The image/placeholder motion.div has been completely removed */}
      </div>
    </div>
  );
};

export default About;
