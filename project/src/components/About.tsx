import { Github, Linkedin, Code2, Mail, ExternalLink, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shivendra-tripathi-61a294274/',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/ShivendraTripathi07',
      icon: Github,
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/ShivendraT03/',
      icon: Code2,
    },
    {
      name: 'CodeChef',
      url: 'https://www.codechef.com/users/tripathi_iiitn',
      icon: Code2,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto text-white">
      <div
        className="text-center mb-12 rounded-2xl p-12 backdrop-blur-lg bg-[#151625] relative overflow-hidden"
      >
        <div
          className="absolute inset-0 rounded-2xl border-4 border-transparent bg-gradient-to-r from-[#0A0B14] via-pink-500 to-slate-800 animate-gradient"
          style={{ maskImage: 'linear-gradient(#000, rgba(0,0,0,0.1))', WebkitMaskImage: 'linear-gradient(#000, rgba(0,0,0,0.1))' }}
        ></div>
        <motion.h1
          className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent relative"
        >
          {"Hi, I'm Shivendra Tripathi".split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <p className="text-xl text-gray-300 mb-8 leading-relaxed relative">
          MERN Stack Developer | Django Developer | DSA Enthusiast
          <br />
          <i className='mt-2'>Transforming ideas into intuitive digital solutions with a blend of technical expertise and creative vision.</i>
        </p>

        <div className="flex justify-center space-x-8 mb-8 relative">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transform hover:scale-110 transition-all duration-300"
            >
              <link.icon className="w-7 h-7" />
            </a>
          ))}
        </div>

        <div className="flex justify-center gap-4 relative">
          {/* <a
            href="#"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg inline-flex items-center transition-colors duration-300"
          >
            Get in touch
          </a> */}
          <a
            href="https://drive.google.com/file/d/1vc71wwdE4mFI6917JXNAa4J3ux9kTF2S/view"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white rounded-lg inline-flex items-center transition-all duration-300"
          >
            View My Resume
            {/* <Download className="ml-2 w-5 h-5" /> */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
