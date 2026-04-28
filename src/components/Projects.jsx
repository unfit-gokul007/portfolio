import { motion } from "framer-motion";

import notesImg from "../assets/projects/notes.png"
import funnyImg from "../assets/projects/food.png";
import hospitalImg from "../assets/projects/hospital.png";


export default function Projects() {
  const projects = [
  {
    title: "Notes App (MERN)",
    desc: "Secure notes app with JWT authentication...",
    tech: "MongoDB, Express, React, Node.js, JWT",
    img: notesImg,
    live: "https://va-nanba-1.onrender.com",
    code: "https://github.com/unfit-gokul007/va-nanba.git"
  },
  {
    title: "Funny Market",
    desc: "Online food ordering app with admin dashboard...",
    tech: "MERN Stack, Admin Panel",
    img: funnyImg,
    live: "https://funny-marketing-app-1.onrender.com",
    code: "https://github.com/unfit-gokul007/funny-marketing-app.git"
  },
  {
    title: "Gokul Hospital",
    desc: "Hospital management system...",
    tech: "MERN Stack, WhatsApp API",
    img: hospitalImg,
    live: "https://gokul-hospital-frontend.onrender.com",
    code: "https://github.com/unfit-gokul007/gokul-hospital.git"
  },
];

  return (
    <section id="projects" className="py-20 bg-blue-50 text-center">
      
      <h2 className="text-3xl font-bold text-blue-600">Projects</h2>

      <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden"
          >
          <img
  src={p.img}
  className="w-full h-48 object-cover hover:scale-110 transition duration-500"
/>

            
            {/* Content */}
            <div className="p-6 text-left">
              
              <h3 className="text-xl font-bold text-gray-900">
                {p.title}
              </h3>

              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {p.desc}
              </p>

              <p className="text-blue-600 text-sm mt-3 font-medium">
                {p.tech}
              </p>

              <div className="mt-4 flex gap-3">
  
  <a href={p.live} target="_blank" rel="noopener noreferrer">
    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:scale-105 transition">
      Live
    </button>
  </a>

  <a href={p.code} target="_blank" rel="noopener noreferrer">
    <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg text-sm hover:scale-105 transition">
      Code
    </button>
  </a>

</div>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}