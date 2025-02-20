import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";

const SocialLink = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          {" "}
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/radheshyam-rathod-6b765625b/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          {" "}
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/radherathod",
    },
    {
      id: 3,
      child: (
        <>
          {" "}
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:foo@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          {" "}
          Resume <BsFillPersonFill size={30} />
        </>
      ),
      href: "./resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              (link.style || "")
            }
          >
            <a
              href={link.href}
              className="flex justify-between items-center w-full text-white"
              download={link.download || false}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLink;
