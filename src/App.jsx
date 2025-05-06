import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useActiveSection from './hooks/useActiveSection';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import Cursor from './components/Cursor'; // ✅ Correct import
import Sidebar from './components/sidebar';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
//import ProjectDetail from "./components/ProjectDetail"; //
import Contact from './components/contact';
import Footer from './components/footer';

export default function App() {
  const activeSection = useActiveSection([
    'hero',
    'about',
    'skills',
    'projects',
    'contact',
  ]);

  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    fullScreen: { enable: true, zIndex: -1 },
    background: {
      color: 'transparent',
    },
    particles: {
      number: { value: 50 },
      color: { value: '#7dd3fc' },
      shape: { type: 'circle' },
      opacity: { value: 0.5 },
      size: { value: { min: 1, max: 3 } },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        outModes: 'out',
      },
      links: {
        enable: true,
        distance: 150,
        color: '#7dd3fc',
        opacity: 0.2,
        width: 1,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        onClick: { enable: true, mode: 'push' },
      },
      modes: {
        repulse: { distance: 100 },
        push: { quantity: 3 },
      },
    },
  };

  return (
    <BrowserRouter>
      {/*<Particles init={particlesInit} options={particlesOptions} />*/}
      <Cursor />
      <Sidebar activeSection={activeSection} />
      <main className="ml-20">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}