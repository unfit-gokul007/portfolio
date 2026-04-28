import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-green-50 text-center px-6">
      
      <h2 className="text-3xl font-bold text-green-600">About Me</h2>

      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="mt-10 max-w-2xl mx-auto bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
      >
        <p className="text-gray-700 leading-relaxed text-lg">
          I'm a passionate <span className="font-semibold text-green-600">MERN Stack Developer</span> 
          and a recent graduate, eager to start my career in web development. 
          I enjoy building modern, scalable, and user-friendly applications using 
          technologies like <span className="font-medium">MongoDB, Express, React, and Node.js</span>.
          <br /><br />
          As a fresher, I am continuously learning, improving my skills, and 
          working on real-world projects to gain hands-on experience and deliver 
          high-quality solutions.
        </p>
      </motion.div>

    </section>
  );
}