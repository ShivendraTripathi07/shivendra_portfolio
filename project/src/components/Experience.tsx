import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Database, Cpu, Zap, Layers } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Software Development Engineer Intern",
      company: "KFin Technologies Ltd.",
      duration: "Sep 2025 – Present",
      location: "Hyderabad, India",
      details: [
        {
          text: "Optimized reporting query performance using DuckDB by materializing base tables locally and converting nested SQL into flattened queries, reducing execution time from 2 min to 3–5 sec.",
          tech: "DuckDB, SQL, Query Optimization",
          icon: Database,
          metric: "97% faster queries"
        },
        {
          text: "Built a serverless AWS Lambda pipeline to process 1,000+ daily financial records, perform pivot aggregations, and auto-email operational reports to stakeholders.",
          tech: "AWS Lambda, Python, Serverless",
          icon: Cpu,
          metric: "1,000+ daily records"
        },
        {
          text: "Leveraged Redis and Celery to execute background tasks asynchronously, enabling parallel processing and optimizing API performance.",
          tech: "Redis, Celery, Async Tasks",
          icon: Zap,
          metric: "Asynchronous background processing"
        },
        {
          text: "Contributing to containerized microservices using Python, FastAPI, and Docker to establish robust, scalable services.",
          tech: "FastAPI, Docker, Microservices",
          icon: Layers,
          metric: "Containerized microservices"
        }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-white mb-16"
      >
        Professional Experience
      </motion.h2>

      <div className="relative border-l border-slate-800 ml-4 md:ml-12 pl-6 md:pl-10 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            {/* Timeline Dot Icon */}
            <span className="absolute -left-[43px] md:-left-[59px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 border-2 border-blue-500 text-blue-400 glow-blue">
              <Briefcase className="w-4 h-4" />
            </span>

            {/* Content Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#0f172a]/40 backdrop-blur-md rounded-2xl p-8 border border-slate-800 hover:border-blue-500/30 transition-all duration-500"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-wide">
                    {exp.role}
                  </h3>
                  <p className="text-lg font-semibold text-cyan-400 mt-1">
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 text-sm text-slate-400">
                  <span className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Achievements & Responsibilities */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {exp.details.map((detail, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4 }}
                    className="p-5 bg-slate-950/50 rounded-xl border border-slate-800/80 hover:border-blue-500/20 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                          <detail.icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/40 px-2.5 py-1 rounded">
                          {detail.metric}
                        </span>
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {detail.text}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-900 text-xs font-mono text-slate-500">
                      Tech: {detail.tech}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
