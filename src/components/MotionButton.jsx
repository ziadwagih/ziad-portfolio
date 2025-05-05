// src/components/MotionButton.jsx

import React from "react";
import { motion } from "framer-motion";

export default function MotionButton({ children, className = "", ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`px-6 py-3 rounded-xl bg-cyan-500 text-white font-bold shadow-md hover:bg-cyan-600 transition duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
