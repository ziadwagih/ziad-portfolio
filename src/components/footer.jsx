// src/components/Footer.jsx
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Reveal from './Reveal';

export default function Footer() {
  return (
    <footer className="relative bg-black py-10 px-6 text-gray-400 overflow-hidden">
      {/* Top border glow */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-transparent to-cyan-500 opacity-30 blur-sm" />

      {/* Glowing grid/mesh background */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="cyan"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Main content */}
      <Reveal>
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-sm font-['Sora'] tracking-wide text-gray-400">
            © {new Date().getFullYear()}{" "}
            <span className="text-cyan-400 font-semibold hover:brightness-125 transition duration-300">
              Ziad
            </span>. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noopener"
              className="hover:text-cyan-400 transition duration-300 hover:scale-110"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener"
              className="hover:text-cyan-400 transition duration-300 hover:scale-110"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:ziad75022@gmail.com"
              className="hover:text-cyan-400 transition duration-300 hover:scale-110"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
