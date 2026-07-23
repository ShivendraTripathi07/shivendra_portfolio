import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Layout } from 'lucide-react';

const TechStack = () => {
  const skills = {
    "Languages & Core": {
      items: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript', 'Data Structures & Algorithms'],
      gradient: 'from-blue-500 to-indigo-500',
      shadow: 'hover:shadow-blue-500/10'
    },
    "Backend & Databases": {
      items: ['Node.js', 'Express.js', 'Django', 'FastAPI', 'MongoDB', 'SQL', 'PostgreSQL', 'DuckDB', 'Parquet', 'Redis', 'Celery'],
      gradient: 'from-cyan-500 to-blue-500',
      shadow: 'hover:shadow-cyan-500/10'
    },
    "Frontend Technologies": {
      items: ['React.js', 'HTML', 'CSS', 'Tailwind CSS', 'MUI'],
      gradient: 'from-teal-500 to-cyan-500',
      shadow: 'hover:shadow-teal-500/10'
    },
    "Tools, DevOps & Cloud": {
      items: ['Git/GitHub', 'Docker', 'Kubernetes', 'AWS Lambda', 'VS Code', 'Jupyter Notebook', 'DBeaver'],
      gradient: 'from-blue-600 to-teal-500',
      shadow: 'hover:shadow-blue-600/10'
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Technical Arsenal
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          A comprehensive suite of programming languages, frameworks, databases, and DevOps tools built to solve complex engineering challenges.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, details], index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -4 }}
            key={category}
            className={`bg-slate-900/30 backdrop-blur-md rounded-2xl p-8 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 shadow-xl ${details.shadow}`}
          >
            <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${details.gradient} bg-clip-text text-transparent tracking-wide`}>
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {details.items.map((skill) => (
                <span
                  key={skill}
                  className=" w-32 text-center px-4.5 py-2.5 bg-slate-950/40 text-slate-300 rounded-xl text-sm font-medium border border-slate-800/80 hover:border-slate-700 hover:text-white hover:bg-slate-900 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
