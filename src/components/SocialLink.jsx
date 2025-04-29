// /src/components/SocialLink.jsx
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs"; // Corrected icon import maybe? Use PersonFill if intended

const SocialLink = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/radheshyam-rathod-6b765625b/", // Ensure link is correct
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/radherathod", // Ensure link is correct
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:your.email@example.com", // *** IMPORTANT: Update this email ***
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} /> {/* Or BsFillPersonFill */}
        </>
      ),
      href: "/resume.pdf", // Make sure resume.pdf is in the /public folder
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    // Hidden on small screens (lg:flex), fixed position
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-40">
      {" "}
      {/* Ensure z-index is below modal backdrop */}
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              `flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-600 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 transition-all ease-out ${
                style || ""
              }` // Added gradient hover
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white font-medium"
              download={download}
              target="_blank"
              rel="noopener noreferrer" // Good practice for external links
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLink;
