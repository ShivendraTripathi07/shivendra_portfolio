import React from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const navItems = ['About', 'TechStack', 'Projects', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0A0B14]/95 backdrop-blur-sm z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Shivendra Tripathi
          </a>

          {/* Navigation Items */}
          <div className="flex items-center space-x-8">
            {/* Main Nav Items */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-xl font-medium transition-colors duration-200 ${activeSection === item.toLowerCase()
                    ? 'text-purple-400'
                    : 'text-gray-300 hover:text-purple-400'
                    }`}
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                </a>
              ))}
            </div>



          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;