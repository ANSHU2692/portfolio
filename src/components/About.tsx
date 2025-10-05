import React from "react";

export default function About() {
  return (
    <section className="px-8 md:px-20 py-16 bg-[#0d1117]">
      <h2 className="text-3xl font-bold mb-8 text-white">About Me</h2>
      <div className="md:flex md:space-x-12">
        <div className="space-y-4 text-gray-400 md:w-2/3">
          <p>
            I'm a Computer Science student at the University of Lucknow (B.Tech,
            2022–2025) with a Diploma in Mechanical Engineering. Currently
            interning at Serviingo Technologies Pvt. Ltd. as an App Developer
            Intern, building and improving web and mobile applications using
            React, React Native, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
