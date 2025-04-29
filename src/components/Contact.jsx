// /src/components/Contact.jsx
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white pt-28" // Adjusted padding top and added min-h-screen
    >
      <div className="flex flex-col p-4 justify-center max-w-lg mx-auto h-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="pb-8 text-center"
        >
          <p className="text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6 text-lg text-gray-400">
            Submit the form below to get in touch with me
          </p>
        </motion.div>

        <motion.form
          action="https://getform.io/f/bllyyymb"
          method="POST"
          className="flex flex-col space-y-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Added implicit labels via placeholder, consider explicit <label> for complex forms */}
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="w-full p-3 bg-transparent border-2 border-gray-500 rounded-md text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition duration-200"
            aria-label="Your Name"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full p-3 bg-transparent border-2 border-gray-500 rounded-md text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition duration-200"
            aria-label="Your Email"
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
            className="w-full p-3 bg-transparent border-2 border-gray-500 rounded-md text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition duration-200"
            aria-label="Your Message"
          ></textarea>
          <button
            type="submit"
            className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-8 py-3 my-4 mx-auto flex items-center rounded-md hover:scale-110 active:scale-105 duration-300 transition-transform shadow-lg shadow-cyan-500/30 font-semibold"
          >
            Let's Talk
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
