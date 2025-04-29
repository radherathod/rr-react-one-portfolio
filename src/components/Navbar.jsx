// /src/components/Navbar.jsx
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home", title: "Home" },
    { id: 2, link: "about", title: "About" },
    { id: 3, link: "portfolio", title: "Portfolio" },
    { id: 4, link: "experience", title: "Experience" },
    { id: 5, link: "contact", title: "Contact" },
  ];

  const closeMobileNav = () => setNav(false);

  return (
    <nav className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed top-0 left-0 z-50 shadow-md shadow-gray-900">
      {/* === LOGO === */}
      <div>
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-80}
          className="text-3xl sm:text-4xl font-semibold ml-2 cursor-pointer hover:text-cyan-400 transition duration-200 flex items-center" // Adjusted size, removed font-signature, added flex
          onClick={closeMobileNav}
          // Using Raleway (or default sans) for a cleaner look
          // style={{ fontFamily: '"Raleway", sans-serif' }} // Optionally force font
        >
          {/* Text Logo: <Radhe/> */}
          <span className="text-cyan-400 font-medium">&lt;</span>
          Radhe
          <span className="text-cyan-400 font-medium">/&gt;</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {links.map(({ id, link, title }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 hover:text-cyan-400 transition-all duration-200 relative group"
          >
            <Link
              to={link}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="text-cyan-500"
              className="py-2 block"
            >
              {title}
            </Link>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
            <Link
              to={link}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="active-link-indicator" // Use a class to trigger the indicator
            ></Link>
          </li>
        ))}
        {/* Add CSS for the active indicator if using the separate class approach */}
        <style jsx>{`
          .active-link-indicator + span {
            transform: scaleX(1);
          }
        `}</style>
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-50 text-gray-400 md:hidden hover:text-cyan-400 transition duration-200"
        aria-label={nav ? "Close menu" : "Open menu"}
        aria-expanded={nav}
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </button>

      {/* Mobile Navigation Menu */}
      <ul
        className={`
          flex flex-col justify-center items-center
          absolute top-0 left-0 w-full h-screen
          bg-gradient-to-b from-black to-gray-800 text-gray-400
          transition-transform duration-300 ease-in-out md:hidden
          ${nav ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {links.map(({ id, link, title }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-cyan-400 transition duration-200"
          >
            <Link
              onClick={closeMobileNav}
              to={link}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="text-cyan-500"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
