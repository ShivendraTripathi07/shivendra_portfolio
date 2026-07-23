import React from 'react';
import { Github, Linkedin, Code2, Mail, ExternalLink, GraduationCap, Briefcase, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shivendra-tripathi-61a294274/',
      icon: Linkedin,
      color: 'hover:text-blue-400 hover:border-blue-500/30'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/ShivendraTripathi07/',
      icon: Github,
      color: 'hover:text-slate-200 hover:border-slate-700/50'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/ShivendraT03/',
      icon: Code2,
      color: 'hover:text-amber-500 hover:border-amber-500/30'
    },
    {
      name: 'Mail',
      url: 'mailto:shivendrat1105@gmail.com',
      icon: Mail,
      color: 'hover:text-cyan-400 hover:border-cyan-500/30'
    }
  ];

  const stats = [
    {
      label: 'SDE Intern',
      value: 'KFin Technologies',
      description: 'Backend & Cloud Developer',
      icon: Briefcase,
      color: 'text-blue-400 bg-blue-500/5 border-blue-500/10'
    },
    {
      label: 'Education',
      value: 'B.Tech CSE',
      description: 'IIIT Nagpur (2022 - 2026)',
      icon: GraduationCap,
      color: 'text-cyan-400 bg-cyan-500/5 border-cyan-500/10'
    },
    {
      label: 'LeetCode',
      value: '500+ Solved',
      description: 'DSA & Coding Badges',
      icon: Award,
      color: 'text-amber-400 bg-amber-500/5 border-amber-500/10'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto text-white">
      {/* Hero card panel */}
      <div className="relative rounded-3xl p-8 md:p-16 bg-slate-900/30 border border-slate-800/80 backdrop-blur-xl overflow-hidden shadow-2xl">
        {/* Futuristic glowing spot */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-blue-500/10 rounded-full blur-[90px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs font-semibold text-blue-400 uppercase tracking-widest"
          >
            Software Development Engineer
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            {"Shivendra Tripathi".split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
              >
                {char}
              </motion.span>
            ))}
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mb-8 leading-relaxed">
            SDE Intern at <span className="text-blue-400 font-semibold">KFin Technologies</span> | CSE Undergrad at <span className="text-cyan-400 font-semibold">IIIT Nagpur</span>.
            Focused on building high-performance backend systems, serverless architectures, and optimizing large database queries.
          </p>

          {/* Social Links Row */}
          <div className="flex justify-center flex-wrap gap-4 mb-10">
            {socialLinks.map((link) => (
              <motion.a
                whileHover={{ y: -3 }}
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950/40 border border-slate-800/80 text-slate-400 transition-all duration-300 ${link.color}`}
              >
                <link.icon className="w-5 h-5" />
                <span className="text-xs font-medium">{link.name}</span>
              </motion.a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 w-full max-w-sm">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://drive.google.com/file/d/1kR8XY-Kv9RSk70pxfRcaBHUigLKiX5vw/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <span>View Resume</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="flex items-center justify-center px-6 py-3.5 border border-slate-700 hover:border-slate-500 hover:bg-slate-800/30 text-slate-300 hover:text-white rounded-xl font-semibold transition-all duration-300"
            >
              <span>Get in Touch</span>
            </motion.a>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {stats.map((stat, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              key={index}
              className={`p-6 rounded-2xl border bg-slate-950/40 hover:border-blue-500/20 transition-all duration-300 flex items-start gap-4`}
            >
              <div className={`p-3 rounded-xl border ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold block mb-0.5">
                  {stat.label}
                </span>
                <span className="text-lg font-bold text-white block">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-400 block mt-1 leading-snug">
                  {stat.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
