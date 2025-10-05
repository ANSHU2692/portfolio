import React from "react";

export default function Skills() {
  const skills = [
    "C",
    "C++",
    "Python",
    "JavaScript",
    "React",
    "React Native",
    "Tailwind CSS",
    "NativeWind",
    "Next.js",
    "Figma",
    "SQLite",
    "Git",
    "GitHub",
  ];
  return (
    <div className="flex flex-wrap justify-center gap-6 py-6 bg-[#161b22]">
      {skills.map((skill, i) => (
        <span key={i} className="text-gray-400 hover:text-white cursor-pointer">
          {skill}
        </span>
      ))}
    </div>
  );
}
