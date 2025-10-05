import React from "react";

export default function Experience() {
  const jobs = [
    {
      role: "App Developer Intern",
      company: "Serviingo Technologies Pvt. Ltd.",
      period: "Aug 2025 – Present",
      desc: "Developed and enhanced web and mobile apps using React, React Native, and Tailwind CSS. Worked with APIs and collaborated on UI fixes and feature enhancements.",
    },
  ];

  return (
    <section className="px-8 md:px-20 py-16 bg-[#0d1117]">
      <h2 className="text-3xl font-bold mb-8 text-white">Work Experience</h2>
      <div className="space-y-6">
        {jobs.map((job, i) => (
          <div
            key={i}
            className="border-l-4 border-red-500 pl-6 hover:bg-[#161b22] py-4 transition"
          >
            <h3 className="text-xl font-semibold text-white">{job.role}</h3>
            <p className="text-gray-400">
              {job.company} • {job.period}
            </p>
            <p className="text-gray-400 mt-2">{job.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
