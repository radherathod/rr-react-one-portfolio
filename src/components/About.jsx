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
          I am a passionate Frontend and UI/UX Developer with one year of
          experience in creating responsive, user-centric web applications. My
          expertise lies in React.js, Angular, SCSS, and modern frontend
          technologies. I specialize in building interactive dashboards,
          pixel-perfect UI components, and performance-optimized applications. I
          focus on crafting seamless user experiences through clean, efficient,
          and scalable code.
        </p>
        <br />
        <p className="text-xl  text-gray-500">
          I have worked on various projects, including eCommerce platforms,
          enterprise applications, and data-driven dashboards. My skill set
          includes AmCharts, Kendo UI, Tailwind CSS, Redux, and API
          integrations. With a strong background in responsive design using CSS
          Grid and Flexbox, I aim to deliver high-quality solutions. I hold a
          Master’s in Computer Applications from Sinhgad Institute of
          Management.
        </p>
      </div>
    </div>
  );
};

export default About;
