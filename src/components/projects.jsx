// src/components/Projects.jsx

import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A dark-themed personal portfolio built with React, Tailwind CSS, and Framer Motion.",
    image: project1,
  },
  {
    id: 2,
    title: "Crypto Dashboard",
    description: "A real-time cryptocurrency dashboard with dynamic charts and futuristic UI.",
    image: project2,
  },
  {
    id: 3,
    title: "E-Commerce UI",
    description: "A sleek e-commerce interface with product cards, filters, and animations.",
    image: project3,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-8 bg-gradient-to-b from-black via-gray-900 to-black text-gray-300"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white font-['Orbitron'] mb-12 text-center drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.2}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="backdrop-blur-lg bg-[#0f0f1a]/80 border border-cyan-500/10 rounded-2xl p-4 shadow-[0_0_25px_rgba(0,255,255,0.05)] hover:shadow-[0_0_30px_rgba(0,255,255,0.25)] transition duration-300 group"
              >
                <div className="overflow-hidden rounded-xl mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width="400"
                    height="224"
                    className="w-full h-56 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105 shadow-[0_0_20px_rgba(0,255,255,0.1)]"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white font-['Orbitron'] mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 font-['Sora'] text-sm">
                  {project.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
