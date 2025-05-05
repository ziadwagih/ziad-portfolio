// src/components/SectionWrapper.jsx

import React from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
}
const child = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

export default function SectionWrapper({ id, className = '', children }) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {React.Children.map(children, (childNode) => (
        <motion.div variants={child}>
          {childNode}
        </motion.div>
      ))}
    </motion.section>
  )
}
