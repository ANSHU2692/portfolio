import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const navLinks = [
    { name: "Home", path: "hero", type: "scroll" },
    { name: "Skills", path: "skills", type: "scroll" },
    { name: "About", path: "about", type: "scroll" },
    { name: "Projects", path: "projects", type: "scroll" },
    { name: "Experience", path: "experience", type: "scroll" },
    { name: "Certifications", path: "certifications", type: "scroll" },
    { name: "Contact", path: "/contact", type: "route" }, // separate page
  ];

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#0d1117] border-b border-gray-800 sticky top-0 z-50">
      <h1 className="text-xl font-semibold text-white">Anshu Gour</h1>
      <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
        {navLinks.map((link, i) => (
          <li key={i} className="hover:text-white cursor-pointer">
            {link.type === "scroll" ? (
              <ScrollLink
                to={link.path}
                smooth={true}
                spy={true}
                offset={-80} // navbar height offset
                duration={500}
                activeClass="text-blue-500 font-bold"
              >
                {link.name}
              </ScrollLink>
            ) : (
              <RouterLink to={link.path}>{link.name}</RouterLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
