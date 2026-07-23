import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="min-h-screen bg-[#030712] relative overflow-hidden text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid pointer-events-none z-0" />

      {/* Ambient Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none z-0 animate-pulse-slow" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[150px] pointer-events-none z-0 animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[130px] pointer-events-none z-0 animate-pulse-slow" style={{ animationDelay: '4s' }} />

      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="container mx-auto px-4 pt-24 relative z-10">
        <section id="about" className="py-16 md:py-24">
          <About />
        </section>
        
        <section id="techstack" className="py-16 md:py-24 border-t border-slate-900/60">
          <TechStack />
        </section>
        
        <section id="experience" className="py-16 md:py-24 border-t border-slate-900/60">
          <Experience />
        </section>
        
        <section id="projects" className="py-16 md:py-24 border-t border-slate-900/60">
          <Projects />
        </section>
        
        <section id="education" className="py-16 md:py-24 border-t border-slate-900/60">
          <Education />
        </section>
        
        <section id="contact" className="py-16 md:py-24 border-t border-slate-900/60">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-slate-500 border-t border-slate-900/80 bg-[#030712]/80 backdrop-blur-md relative z-10">
        <p>© {new Date().getFullYear()} Shivendra Tripathi. Built with passion & precision.</p>
      </footer>
    </div>
  );
};

export default App;