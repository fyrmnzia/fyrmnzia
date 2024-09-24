import React, { useEffect, useState } from "react";
import {
  FaDiagramProject,
  FaGraduationCap,
  FaHouse,
  FaPhone,
  FaScrewdriverWrench,
} from "react-icons/fa6";
import { Link } from "react-scroll";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    {
      name: "Home",
      icon: <FaHouse />,
      path: "/",
    },
    {
      name: "Education",
      icon: <FaGraduationCap />,
      path: "education",
    },
    {
      name: "Skill",
      icon: <FaScrewdriverWrench />,
      path: "education",
    },
    {
      name: "Project",
      icon: <FaDiagramProject />,
      path: "project",
    },
    {
      name: "Contact",
      icon: <FaPhone />,
      path: "contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPos = window.scrollY + 100; // Adjust the offset as needed

      sections.forEach((section, index) => {
        if (
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 z-50 backdrop-blur bg-[rgba(0,0,0,.1)] border-b-2 border-[#181818] w-full flex justify-between h-20 items-center">
      {/* logo */}
      <div className="ml-3">
        <a href="/">
          <img src="/logo.png" alt="Logo" />
        </a>
      </div>
      <div className="flex items-center mx-auto">
        {/* navigasi */}
        <div className="flex gap-20">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              smooth={true}
              duration={500}
              className={`relative px-6 cursor-pointer flex gap-2 items-center font-semibold transform transition-transform duration-100 ${
                activeIndex === index
                  ? "text-white scale-110"
                  : "hover:text-white hover:scale-110"
              }`}
            >
              {item.icon}
              <p
                className={`transition-transform duration-100 ${
                  activeIndex === index ? "hidden" : ""
                }`}
              >
                {item.name}
              </p>
              <span
                className={`absolute left-0 right-0 bottom-[-10px] h-[2px] bg-white transform transition-transform duration-200 ${
                  activeIndex === index ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
