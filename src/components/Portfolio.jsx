import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";
// Import your project images - ensure paths are correct
import firebaseauth from "../assets/firebaseauth.jpg";
import quiz from "../assets/quiz.png";
import ecommerce from "../assets/ecommerce.jpg";
import auth from "../assets/auth.png";
import nav from "../assets/nav.png";
import pricing from "../assets/pricing.png";

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const portfolios = [
    {
      id: 1,
      src: firebaseauth,
      title: "Firebase Authentication App",
      description:
        "A simple React application demonstrating user sign-up, login, and authentication flow using Google Firebase.",
      technologies: [
        "React",
        "Firebase Auth",
        "Tailwind CSS",
        "Javascript",
        "HTML/CSS",
      ],
      href: "https://github.com/radherathod/firebase_auth",
      demo: "https://firebaseloginsignin.netlify.app",
    },
    {
      id: 2,
      src: quiz,
      title: "Interactive Quiz App",
      description:
        "A fun and interactive quiz application built using React. Features include timed questions, score tracking, and multiple categories.", // <-- *** VERIFY/UPDATE DESCRIPTION ***
      technologies: [
        "React",
        "JavaScript",
        "State Management",
        "Tailwind CSS",
        "HTML/CSS",
      ],
      href: "https://github.com/radherathod/your-quiz-repo-name",
      demo: "https://quizj.netlify.app/",
    },
    {
      id: 3,
      src: ecommerce,
      title: "E-commerce Platform UI",
      description:
        "Frontend design and implementation for a mock e-commerce website product listing and details page.",
      technologies: [
        "React",
        "CSS Modules",
        "Context API",
        "MongoDB",
        "Express",
        "Node.js",
        "React Icons",
        "Material UI",
      ],
      href: "https://github.com/yourusername/ecommerce-ui",
      demo: null,
    },
    {
      id: 4,
      src: auth,
      title: "Authentication Flow Diagram",
      description:
        "Visual representation or component demonstrating a user authentication process.",
      technologies: ["Diagramming Tool", "Conceptual"],
      href: null,
      demo: null,
    },
    {
      id: 5,
      src: nav,
      title: "Responsive Navbar Component",
      description:
        "A reusable and responsive navigation bar component built with React and Tailwind CSS.",
      technologies: ["React", "Tailwind CSS", "React Icons"],
      href: "https://github.com/yourusername/responsive-navbar", // Example link
      demo: null,
    },
    {
      id: 6,
      src: pricing,
      title: "Pricing Container Component",
      description:
        "A responsive pricing table component suitable for SaaS or service websites, built for a specific project (Proveway).",
      technologies: ["HTML", "CSS", "Javascript"],
      href: "https://github.com/radherathod/pricing_container_proveway",
      demo: "https://aesthetic-salmiakki-64af79.netlify.app/",
    },
  ];

  // --- Modal Handler Functions ---
  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80 },
    },
  };

  return (
    <>
      <div
        name="portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen pt-28 px-4"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="pb-8 text-center md:text-left"
          >
            <p className="text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className="py-6 text-lg text-gray-400">
              Check out some of my work right here. Click 'Info' for details.
            </p>
          </motion.div>

          {/* Grid layout */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0"
          >
            {/* Map through projects */}
            {portfolios.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="shadow-md shadow-gray-600 rounded-lg overflow-hidden bg-gray-800/50 flex flex-col group" // Added group class
              >
                {/* Image container for zoom effect */}
                <div className="overflow-hidden">
                  <img
                    src={project.src}
                    alt={project.title || `Project ${project.id}`}
                    className="rounded-t-md duration-300 group-hover:scale-105 object-cover h-48 w-full transition-transform ease-in-out" // Group hover effect
                    loading="lazy" // Lazy load images
                  />
                </div>
                {/* Button Container */}
                <div className="flex items-center justify-around p-3 gap-1 mt-auto bg-gray-800/40">
                  {" "}
                  {/* Pushes buttons down */}
                  {/* Info Button - Updated Color & Styles */}
                  <button
                    onClick={() => openModal(project)}
                    className="text-xs sm:text-sm w-1/3 py-2 px-1 text-center rounded-md text-white font-medium bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 duration-200 hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-emerald-400"
                    aria-label={`More information about ${
                      project.title || "this project"
                    }`}
                  >
                    Info
                  </button>
                  {/* Demo Button - Updated Styles */}
                  <a
                    href={project.demo ? project.demo : "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xs sm:text-sm w-1/3 py-2 px-1 text-center rounded-md text-white font-medium duration-200 hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 ${
                      project.demo
                        ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 focus:ring-cyan-400"
                        : "bg-gray-500 cursor-not-allowed opacity-60"
                    }`}
                    onClick={(e) => !project.demo && e.preventDefault()}
                    aria-disabled={!project.demo}
                  >
                    Demo
                  </a>
                  {/* Code Button - Updated Styles */}
                  <a
                    href={project.href ? project.href : "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xs sm:text-sm w-1/3 py-2 px-1 text-center rounded-md text-white font-medium duration-200 hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 ${
                      project.href
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 focus:ring-purple-400"
                        : "bg-gray-500 cursor-not-allowed opacity-60"
                    }`}
                    onClick={(e) => !project.href && e.preventDefault()}
                    aria-disabled={!project.href}
                  >
                    Code
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Render Modal Conditionally */}
      {modalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </>
  );
};

export default Portfolio;
