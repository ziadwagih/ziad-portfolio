// src/components/Skills.jsx

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFramer,
  SiVite,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "Vite", icon: <SiVite className="text-purple-500" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full py-20 px-8 text-gray-300 bg-gradient-to-b from-black via-[#0c0c20] to-black"
    >
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-white mb-10 font-['Orbitron'] drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]">
          Tech Stack
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-[#0f0f1a]/80 border border-cyan-400/10 hover:border-cyan-300/30 shadow-[0_0_20px_rgba(0,255,255,0.06)] hover:shadow-[0_0_25px_rgba(0,255,255,0.2)] transition-all duration-300 group"
              >
                <div className="text-4xl mb-2 group-hover:animate-pulse">
                  {skill.icon}
                </div>
                <p className="text-sm font-semibold tracking-wide font-['Sora'] text-gray-200 group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
