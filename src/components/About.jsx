import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10 text-gray-500">
          Passionate Frontend & UI/UX Developer with 1 year of experience in
          React.js, Angular, SCSS, and modern frontend technologies. I
          specialize in building interactive dashboards, pixel-perfect UI, and
          performance-optimized applications with clean, scalable code.
        </p>
        <br />
        <p className="text-xl text-gray-500">
          Experienced in eCommerce, enterprise apps, and data-driven dashboards.
          Skilled in AmCharts, Kendo UI, Tailwind CSS, Redux, and API
          integrations. Strong background in responsive design using CSS Grid &
          Flexbox. MCA graduate from Sinhgad Institute of Management.
        </p>
      </div>
    </div>
  );
};

export default About;
