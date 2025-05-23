import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";

const Experience = () => {
  const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-400" },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-400" },
    { id: 4, src: react, title: "React", style: "shadow-blue-400" },
    { id: 5, src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
    { id: 6, src: github, title: "GitHub", style: "shadow-gray-400" },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map((tech) => (
            <div
              key={tech.id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${tech.style}`}
            >
              <img src={tech.src} alt={tech.title} className="w-20 mx-auto" />
              <p className="text-center mt-4">{tech.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
