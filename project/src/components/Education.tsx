import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';

const Education = () => {
  const education = {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Indian Institute of Information Technology, Nagpur',
    cgpa: '8.5 / 10.0',
    duration: 'Nov 2022 – Jun 2026',
    location: 'Nagpur, India',
    stats: [
      { value: '8.5', label: 'CGPA' },
      { value: '500+', label: 'DSA Problems' },
      { value: '25+', label: 'Core Projects' },
    ],
    description: 'Built a strong foundation in Computer Science through coursework in Data Structures, Algorithms, Systems Programming, Software Engineering, and Database Management Systems, reinforced by practical experience in full-stack development and systems engineering projects.'
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-white mb-16"
      >
        Academic Background
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content: Info and Stats */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0f172a]/30 backdrop-blur-md rounded-3xl p-8 border border-slate-900 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-blue-500/5 rounded-full blur-[60px] pointer-events-none" />

            <div className="flex items-center gap-4 mb-6">
              <div className="p-3.5 bg-cyan-500/10 rounded-2xl text-cyan-400 border border-cyan-500/20">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white tracking-wide">
                  {education.degree}
                </h3>
                <p className="text-slate-400 font-semibold mt-1">
                  {education.institution}
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-base leading-relaxed mb-6">
              {education.description}
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-slate-400 border-t border-slate-900 pt-6">
              <span className="flex items-center gap-1.5 bg-slate-950/50 px-3.5 py-2 rounded-xl border border-slate-900">
                <Calendar className="w-4 h-4 text-cyan-400" />
                {education.duration}
              </span>
              <span className="flex items-center gap-1.5 bg-slate-950/50 px-3.5 py-2 rounded-xl border border-slate-900">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                {education.location}
              </span>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4">
            {education.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-slate-900/40 border border-slate-900 hover:border-cyan-500/20 rounded-2xl p-5 flex flex-col items-center justify-center transition-all duration-300 text-center"
              >
                <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm text-slate-400 font-medium mt-1">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Content: Styled Graphic Frame */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 hidden lg:block"
        >
          <div className="relative group p-4 rounded-3xl border border-slate-900/60 bg-[#0f172a]/20 backdrop-blur-md overflow-hidden aspect-square">
            {/* Background cyber glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-500" />

            <div className="relative h-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
              <img
                src="https://iiitn.ac.in/media/9c461c64c62a4a529e233b2ab2a9b895.jpeg"
                alt="IIIT Nagpur Campus Study"
                className="w-full h-full object-cover object-center opacity-80 group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 text-cyan-400 mb-1">
                  <Award className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Academic Honors</span>
                </div>
                <p className="text-white text-sm font-semibold">
                  Secured 8.17 B.Tech CGPA at Indian Institute of Information Technology, Nagpur.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;