// src/components/Contact.jsx

import React from "react";
import { motion } from "framer-motion";
import MotionButton from "./MotionButton";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6 font-['Orbitron'] text-cyan-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Let’s Build Something Epic
        </motion.h2>

        <motion.p
          className="text-lg text-gray-400 mb-12 font-['Sora']"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          I’m always looking for exciting collaborations and freelance opportunities. Reach out—let’s turn vision into pixels.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a href="mailto:ziad@example.com">
            <MotionButton className="text-lg font-['Orbitron'] bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600">
              Get in Touch
            </MotionButton>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
