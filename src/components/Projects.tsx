import fantacyCricket from "../assets/fantacyCricket.png";
import landingpage from "../assets/landing pages.png";

export default function Projects() {
  const projects = [
    {
      title: "Fantasy Cricket Game",
      desc: "Built using Python, Qt Designer, and SQLite — allowing users to create teams, manage stats, and simulate matches.",
      tech: ["Python", "SQLite", "Qt Designer"],
      img: fantacyCricket, // ✅ no curly braces
    },
    {
      title: "Landing Page Clones",
      desc: "Recreated responsive front pages of Amazon and Zomato using HTML and CSS with cross-browser compatibility.",
      tech: ["HTML", "CSS"],
      img: landingpage, // ✅ no curly braces
    },
  ];

  return (
    <section className="px-8 md:px-20 py-16 bg-[#161b22]">
      <h2 className="text-3xl font-bold mb-8 text-white">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="bg-[#0d1117] p-6 rounded-lg border border-gray-800 hover:border-red-500 transition"
          >
            <img
              src={proj.img}
              alt={proj.title}
              className="rounded-md mb-4 w-full h-56 object-contain"
            />
            <h3 className="text-xl font-semibold text-white mb-2">
              {proj.title}
            </h3>
            <p className="text-gray-400 mb-3">{proj.desc}</p>
            <p className="text-sm text-gray-500">
              Tech: {proj.tech.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
