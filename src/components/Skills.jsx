import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiPostman } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact size={40} className="text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-600" /> },
    { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-700" /> },
    { name: "Express", icon: <SiExpress size={40} className="text-gray-800" /> },
    { name: "Tailwind", icon: <SiTailwindcss size={40} className="text-cyan-500" /> },
    { name: "Postman", icon: <SiPostman size={40} className="text-orange-500" /> },
    { name: "GitHub", icon: <FaGithub size={40} className="text-black" /> },
  ];

  return (
    <section id="skills" className="pt-24 py-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-green-600">Skills</h2>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="p-6 bg-green-50 rounded-xl shadow hover:scale-110 transition flex flex-col items-center gap-3"
          >
            {skill.icon}
            <p className="font-medium text-gray-700">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}