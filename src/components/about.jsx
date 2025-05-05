// src/components/About.jsx

import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/images/about-illustration.png";
import Reveal from "./Reveal"; // 👈 NEW: Import the Reveal component

const About = () => {
  return (
    <motion.section
      id="about"
      className="w-full py-20 px-8 text-gray-300 bg-gradient-to-b from-black via-gray-900 to-black"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Text Content */}
        <Reveal>
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4 font-['Orbitron'] drop-shadow-[0_0_5px_rgba(0,255,255,0.3)]">
              About Me
            </h2>
            <p className="text-lg leading-relaxed text-gray-400 max-w-2xl font-['Sora'] drop-shadow-[0_0_3px_rgba(125,211,252,0.2)]">
              I’m <span className="text-purple-400 font-semibold">Ziad</span>, a passionate front-end developer obsessed with dark, futuristic design.
              I craft interactive experiences that feel alive — built with <span className="text-cyan-400 font-semibold">React</span>, styled in <span className="text-cyan-400 font-semibold">Tailwind</span>,
              and animated using <span className="text-cyan-400 font-semibold">Framer Motion</span>.
            </p>
            <p className="mt-4 text-gray-500 font-['Sora'] italic">
              My mission is to build smooth, immersive sites that not only work — but feel <span className="text-white">epic</span>.
            </p>
          </motion.div>
        </Reveal>

        {/* Image */}
        <Reveal delay={0.2}>
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img
              src={aboutImg}
              alt="Futuristic digital art"
              className="rounded-2xl w-[400px] shadow-[0_0_30px_rgba(0,255,255,0.2)]"
            />
          </motion.div>
        </Reveal>

      </div>
    </motion.section>
  );
};

export default About;
