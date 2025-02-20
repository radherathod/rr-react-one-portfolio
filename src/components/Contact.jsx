import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-lg mx-auto h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <form
          action="https://getform.io/f/bllyyymb"
          method="POST"
          className="flex flex-col space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Enter your message"
            className="w-full p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          ></textarea>
          <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
            Let's Talk
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
