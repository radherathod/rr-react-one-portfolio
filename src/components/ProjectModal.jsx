// /src/components/ProjectModal.jsx
import React from "react";
import { FaTimes, FaExternalLinkAlt, FaCode } from "react-icons/fa"; // Import icons
import { motion, AnimatePresence } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  // Backdrop animation
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Modal animation
  const modalVariants = {
    hidden: { y: "-50%", x: "-50%", opacity: 0, scale: 0.8 },
    visible: {
      y: "-50%",
      x: "-50%",
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 20, delay: 0.1 },
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  // Determine if there are any links to show
  const hasLinks = project.demo || project.href;

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose} // Close modal on backdrop click
        className="fixed inset-0 bg-black bg-opacity-80 z-[60] flex justify-center items-center p-4" // Increased backdrop opacity slightly, added padding
        aria-modal="true"
        role="dialog"
      >
        {/* Modal Content */}
        <motion.div
          key="modal"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg shadow-xl p-6 sm:p-8 w-[95%] max-w-2xl max-h-[90vh] overflow-y-auto z-[70] border border-gray-700" // Added subtle border, adjusted padding/height/width
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-cyan-400 transition duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-full p-1" // Improved focus state
            aria-label="Close project details"
          >
            <FaTimes size={22} /> {/* Slightly smaller */}
          </button>

          {/* Project Title */}
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-5 pr-8 border-b-2 border-cyan-500 pb-2 inline-block">
            {" "}
            {/* Added padding-right for close button space */}
            {project.title || "Project Details"}
          </h3>

          {/* Project Image */}
          <div className="mb-5 max-h-64 overflow-hidden rounded shadow-md bg-black/20">
            {" "}
            {/* Adjusted max-height, added subtle bg */}
            <img
              src={project.src}
              alt={project.title || "Project screenshot"}
              className="w-full h-auto object-contain rounded"
              loading="lazy" // Add lazy loading
            />
          </div>

          {/* Description */}
          <div className="mb-5">
            {" "}
            {/* Consistent margin bottom */}
            <h4 className="text-lg font-semibold text-cyan-400 mb-1">
              Description:
            </h4>
            <p className="text-gray-300 leading-relaxed">
              {project.description || "No description available."}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            {" "}
            {/* Consistent margin bottom */}
            <h4 className="text-lg font-semibold text-cyan-400 mb-2">
              Technologies Used:
            </h4>
            {project.technologies && project.technologies.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-700/80 text-cyan-300 text-xs sm:text-sm font-medium px-3 py-1 rounded-full shadow-sm" // Slightly adjusted styling
                  >
                    {tech}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 italic">Technologies not listed.</p>
            )}
          </div>

          {/* --- LINKS SECTION (BUTTONS) - Increased Gap --- */}
          {/* Conditionally render this section only if there are links */}
          {hasLinks && (
            // Updated gap-4 to gap-x-6 gap-y-4
            <div className="flex flex-wrap gap-x-6 gap-y-4 pt-5 mt-4 border-t border-gray-600/70 justify-start items-center">
              {/* View Demo Button */}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md hover:shadow-lg hover:brightness-110 active:scale-[0.98] transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-400" // Enhanced styling
                >
                  <FaExternalLinkAlt />
                  <span>View Demo</span>
                </a>
              )}
              {/* View Code Button */}
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-md hover:shadow-lg hover:brightness-110 active:scale-[0.98] transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-pink-400" // Enhanced styling
                >
                  <FaCode />
                  <span>View Code</span>
                </a>
              )}
            </div>
          )}
          {/* --- END LINKS SECTION --- */}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
