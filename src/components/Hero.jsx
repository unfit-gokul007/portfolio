import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Sphere } from "@react-three/drei";
import { useEffect } from "react";

export default function Hero() {

  // 🔥 Cursor Glow Effect
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");

    const move = (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400 text-white px-6">

      {/* 🔥 Cursor Glow */}
      <div
        id="cursor-glow"
        className="pointer-events-none fixed w-40 h-40 bg-blue-400/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0"
      ></div>

      {/* 🌐 3D BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <ambientLight intensity={1.2} />
          <directionalLight position={[2, 2, 5]} />

          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[1.5, 64, 64]}>
              <meshStandardMaterial
                color="#60a5fa"
                emissive="#2563eb"
                metalness={0.5}
                roughness={0.2}
              />
            </Sphere>
          </Float>

          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        </Canvas>
      </div>

      {/* 🧠 CONTENT */}
      <div className="relative z-10 text-center max-w-4xl">

        {/* 🔥 Title */}
        <h1 className="text-5xl md:text-6xl font-bold flex justify-center gap-3 flex-wrap">
          <span>Hi, I'm</span>

          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-gradient-to-r from-yellow-300 via-white to-blue-200 bg-clip-text text-transparent drop-shadow-[0_5px_20px_rgba(255,255,255,0.6)]"
          >
            Gokul Nath
          </motion.span>
        </h1>

        {/* ✨ Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-lg text-blue-100"
        >
          MERN Stack Developer building modern and scalable web applications
        </motion.p>

        {/* 🔘 Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-10 flex justify-center gap-6"
        >
          <a href="#projects">
            <button className="px-8 py-3 bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl shadow-lg hover:scale-110 hover:bg-white hover:text-blue-600 transition duration-300">
              View Projects
            </button>
          </a>

          <a href="#contact">
            <button className="px-8 py-3 border border-white/40 rounded-xl hover:bg-white hover:text-blue-600 hover:scale-110 transition duration-300">
              Contact Me
            </button>
          </a>
        </motion.div>

      </div>
    </section>
  );
}