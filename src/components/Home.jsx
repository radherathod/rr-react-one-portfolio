// /src/components/Home.jsx
import React from "react";
import profile from "../assets/profile.jpeg"; // Ensure this path is correct
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation"; // Import TypeAnimation

const Home = () => {
  return (
    <div
      name="home" // Changed from "Home" to "home" to match Navbar link
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20" // Added pt-20 to account for fixed navbar
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row md:justify-between">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center h-full text-center md:text-left md:w-1/2"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            {/* I am a Frontend Developer */}
            <TypeAnimation
              sequence={[
                "Frontend & UI Developer",
                1800,
                "Designing Seamless Digital Experiences",
                2000,
                "Developing Performance-Driven Apps",
                2000,
                "Transforming Ideas into Web Reality",
                2000,
                () => {
                  // Optional callback
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: "inline-block" }} // Needed for TypeAnimation
            />
          </h2>

          <p className="text-gray-400 py-4 max-w-md mx-auto md:mx-0 text-lg leading-relaxed">
            With 1 year of experience building responsive web applications using
            React, Angular, JavaScript, Tailwind CSS, Kendo UI, and AMCharts. I
            focus on creating clean, efficient, and user-friendly interfaces.
          </p>

          {/* Button */}
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              offset={-80}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center justify-center mx-auto md:mx-0 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg shadow-cyan-500/30"
            >
              Portfolio
              <span className="ml-1 group-hover:rotate-90 transition-transform duration-300">
                <MdOutlineKeyboardArrowRight size={25} />
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 md:mt-0 md:w-1/3 flex justify-center items-center"
        >
          {/* Added a subtle border/gradient effect */}
          <div className="p-1 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-xl shadow-cyan-500/20">
            <img
              src={profile}
              alt="My Profile"
              className="rounded-xl mx-auto w-48 h-auto md:w-64 object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
