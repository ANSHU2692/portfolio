import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  const navLinks = [
    { name: "Home", path: "#hero", type: "scroll" },
    { name: "Skills", path: "#skills", type: "scroll" },
    { name: "About", path: "#about", type: "scroll" },
    { name: "Projects", path: "#projects", type: "scroll" },
    { name: "Experience", path: "#experience", type: "scroll" },
    { name: "Certifications", path: "#certifications", type: "scroll" },
    { name: "Contact", path: "/contact", type: "route" },
  ];

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#0d1117] border-b border-gray-800 sticky top-0 z-50">
      <h1 className="text-xl font-semibold text-white">Anshu Gour</h1>

      <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
        {navLinks.map((link, i) => (
          <li key={i} className="hover:text-white cursor-pointer">
            {link.type === "scroll" ? (
              <a href={link.path}>{link.name}</a>
            ) : (
              <RouterLink to={link.path}>{link.name}</RouterLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
