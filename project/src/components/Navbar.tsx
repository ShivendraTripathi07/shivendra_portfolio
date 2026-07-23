import React, { useState } from 'react';
import { Terminal, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['About', 'TechStack', 'Experience', 'Projects', 'Education', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#030712]/80 backdrop-blur-lg border-b border-slate-900/60 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a 
            href="#" 
            onClick={() => setActiveSection('about')}
            className="flex items-center gap-2.5 text-2xl font-bold tracking-tight text-white hover:opacity-90 transition-opacity"
          >
            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 border border-blue-500/20">
              <Terminal className="w-5 h-5" />
            </div>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Shivendra
            </span>
          </a>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;
              return (
                <a
                  key={item}
                  href={`#${id}`}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    isActive
                      ? 'text-cyan-400 bg-slate-900/60 border border-slate-800'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-950/40'
                  }`}
                  onClick={() => setActiveSection(id)}
                >
                  {item === 'TechStack' ? 'Skills' : item}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-cyan-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 py-4 bg-[#030712]/95 border-b border-slate-900 space-y-2 backdrop-blur-lg">
          {navItems.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            return (
              <a
                key={item}
                href={`#${id}`}
                className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-all ${
                  isActive
                    ? 'text-cyan-400 bg-slate-900 border border-slate-800'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-950'
                }`}
                onClick={() => {
                  setActiveSection(id);
                  setIsOpen(false);
                }}
              >
                {item === 'TechStack' ? 'Skills' : item}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;