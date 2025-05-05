// src/components/Sidebar.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Home, Info, Code2, LayoutDashboard, Mail } from 'lucide-react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';

const links = [
  { id: 'hero', icon: <Home />, label: 'Home' },
  { id: 'about', icon: <Info />, label: 'About' },
  { id: 'skills', icon: <Code2 />, label: 'Skills' },
  { id: 'projects', icon: <LayoutDashboard />, label: 'Projects' },
  { id: 'contact', icon: <Mail />, label: 'Contact' },
];

export default function Sidebar({ activeSection }) {
  return (
    <motion.aside
      className="fixed left-0 top-0 h-full w-20 bg-gradient-to-b from-neutral-900 to-black flex flex-col items-center py-8 space-y-6 z-50"
      initial={{ x: -80 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      {/* Logo at top */}
      <img src={logo} alt="Ziad Logo" className="w-10 h-10 mb-8" />

      {/* Nav icons with smooth scroll */}
      {links.map((link) => (
        <Link
          key={link.id}
          to={link.id}
          spy={true}
          smooth={true}
          duration={500}
          offset={-40}
          className={`text-gray-500 hover:text-accent transition-colors cursor-pointer ${
            activeSection === link.id ? 'text-accent' : ''
          }`}
        >
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            {link.icon}
          </motion.div>
        </Link>
      ))}
    </motion.aside>
  );
}
