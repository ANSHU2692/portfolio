import React from "react";
import mypic from "../assets/mypic.png";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 md:px-20">
      <div className="space-y-6 md:w-1/2">
        <p className="text-red-400 text-lg">Hello 👋</p>
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          I’m Anshu Gour <br />
          <span className="text-gray-400">Software Developer</span>
        </h1>
        <p className="text-gray-400 leading-relaxed">
          I’m a passionate software developer with hands-on experience in React,
          React Native, Tailwind CSS, and Python. I love building functional,
          aesthetic, and efficient digital experiences for users.
        </p>
        <div className="flex space-x-4">
          <a
            href="mailto:anshugour1999@gmail.com"
            className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-md text-white font-medium"
          >
            Get in touch
          </a>
          <a
            href="#"
            className="border border-red-500 px-5 py-3 rounded-md text-red-400 hover:bg-red-500 hover:text-white font-medium"
          >
            View Resume
          </a>
        </div>
      </div>

      <div className="relative mt-12 md:mt-0 md:w-1/2 flex justify-center">
        <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-red-500">
          <img
            src={mypic}
            alt="Anshu Gour"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute inset-0 border-4 border-red-500 rounded-full scale-110 opacity-20"></div>
      </div>
    </section>
  );
}
