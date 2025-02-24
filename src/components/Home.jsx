import React from "react";
import profile from "../assets/profile.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between  h-full px-4 md:flex-row">
        {/* Text Section (h2 + p + Button) */}
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl font-bold text-white">
            I am a Frontend Developer
          </h2>

          <p className="text-gray-500 py-4 max-w-md">
            I'm a Front-End Developer with 6 months of experience in building
            responsive web applications. Skilled in React, Angular, JavaScript,
            Tailwind CSS, Kendo UI, and AMCharts 4 & 5, I focus on creating
            clean, efficient, and user-friendly interfaces.
          </p>

          {/* Button */}
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group flex items-center bg-gradient-to-r from-cyan-500 to-blue-500  text-white w-fit px-6 py-3 my-2 rounded-md cursor-pointer transition"
            >
              Portfolio
              <span className="ml-2 group-hover:rotate-90 transition-transform">
                <MdOutlineKeyboardArrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>

        {/* Image on the Right Side */}
        <div>
          <img
            src={profile}
            alt="My Profile"
            className="rounded-2xl mx-auto w-48 md:w-60 h-82 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
