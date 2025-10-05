import React from "react";

export default function Certifications() {
  const items = [
    { title: "Programming with Python", org: "Internshala Trainings" },
    { title: "Samsung Innovation Campus", org: "Samsung" },
  ];

  const achievements = [
    "Participated in a 3-day Hackathon by Samsung Innovation Campus focusing on AI-based crop disease identification.",
    "Achieved perfect score in the final assessment of Python Programming training.",
  ];

  return (
    <section className="px-8 md:px-20 py-16 bg-[#161b22]">
      <h2 className="text-3xl font-bold mb-8 text-white">
        Certifications & Achievements
      </h2>
      <div className="space-y-4 mb-10">
        {items.map((item, i) => (
          <p key={i} className="text-gray-400">
            <span className="text-white font-semibold">{item.title}</span> –{" "}
            {item.org}
          </p>
        ))}
      </div>
      <ul className="list-disc list-inside text-gray-400 space-y-2">
        {achievements.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
    </section>
  );
}
