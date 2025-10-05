import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0d1117] text-gray-400 text-center py-6 border-t border-gray-800">
      <p>© 2025 Anshu Gour. All Rights Reserved.</p>
      <p className="mt-2">
        <a href="mailto:anshugour1999@gmail.com" className="hover:text-red-400">
          Email
        </a>{" "}
        |
        <a
          href="https://linkedin.com/in/Anshugour"
          className="hover:text-red-400 ml-2"
        >
          LinkedIn
        </a>{" "}
        |
        <a
          href="https://github.com/ANSHU2692"
          className="hover:text-red-400 ml-2"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}
