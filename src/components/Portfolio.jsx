import React from "react";
import calcy from "../assets/calcy.jpg";
import destructure from "../assets/destructure.png";
import ecommerce from "../assets/ecommerce.jpg";
import mern from "../assets/mern.png";
import nav from "../assets/nav.png";
import reactWeather from "../assets/reactWeather.jpg";
import pricing from "../assets/pricing.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: calcy,
      href: "https://github.com/radherathod/calculator",
      demo:""
    },
    {
      id: 2,
      src: destructure,
    },
    {
      id: 3,
      src: ecommerce,
    },
    {
      id: 4,
      src: mern,
    },
    {
      id: 5,
      src: nav,
    },
    {
      id: 6,
      src: pricing,
      href: "https://github.com/radherathod/pricing_container_proveway",
      demo: "https://aesthetic-salmiakki-64af79.netlify.app/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-gray-500">
            Check out some of my work right here
          </p>
        </div>

        {/* Grid layout should be outside the map */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={`Project ${id}`}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className=" text-sm w-1/2 px-3 py-1 m-2 duration-200 hover:scale-105">
                  <a href={demo}> Demo</a>
                </button>
                <button className=" text-sm w-1/2 px-3 py-1 m-2 duration-200 hover:scale-105">
                  <a href={href}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
