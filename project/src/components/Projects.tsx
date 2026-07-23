import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Shield, MessageSquare, ShoppingBag, Landmark, HeartHandshake, Eye, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import local assets
import TrezzarImg from "./../assests/Trezzar.png";
import EvogymImg from "./../assests/Evogym.png";
import NikeShoesImg from "./../assests/NikeShoes.png";
import SanrakshakImg from "./../assests/Sanrakshak.png";
import ChittChattImg from "./../assests/chitt_chatt.png";
import YahtzeeImg from "./../assests/Yahtzee.png";
import ManasImg from "./../assests/Manas.png";
import SocioPediaImg from "./../assests/SocioPedia.png";
import SocialMediaImg from "./../assests/SocialMedia.png";

const Projects = () => {
  const projects = [
    {
      id: "trezzar",
      name: "Trezzar",
      subtitle: "Full-Stack E-Commerce Platform",
      category: "Full-Stack",
      description: "A comprehensive e-commerce platform featuring dynamic catalog categorization, secure checkouts, and a data-rich admin operations panel.",
      image: TrezzarImg,
      icon: ShoppingBag,
      tags: ["MERN", "TailwindCSS", "Razorpay", "React.js", "Node.js", "MongoDB"],
      source_code_link: "https://github.com/ShivendraTripathi07/Trezzar",
      demo: "https://superb-kheer-3d6fe2.netlify.app/",
      highlights: [
        "Developed a highly scalable e-commerce store supporting 13+ distinct product categories and fully integrated authentication.",
        "Engineered a centralized admin dashboard to manage 200+ test products, track sales orders, and oversee active customer accounts.",
        "Built responsive cart, checkout, and state management workflows spanning the entire purchase lifecycle.",
        "Optimized UI layout using TailwindCSS to ensure fluid, responsive performance across modern desktop and mobile viewports."
      ]
    },
    {
      id: "chittchatt",
      name: "ChittChattApp",
      subtitle: "Real-time Messaging Application",
      category: "Full-Stack",
      description: "A real-time, bi-directional chat application architected to support concurrent conversations, group workspaces, and instant system notifications.",
      image: ChittChattImg, // No asset, will render placeholder
      icon: MessageSquare,
      tags: ["MERN", "Socket.IO", "React.js", "Node.js", "Express.js", "MongoDB"],
      source_code_link: "https://github.com/ShivendraTripathi07/ChitChatt",
      demo: "https://gorgeous-cat-8bbd10.netlify.app/",
      highlights: [
        "Architected a real-time chat system using MERN stack and Socket.IO supporting 50+ concurrent connections in local testing.",
        "Implemented secure user authentication, protected REST APIs, and role-based access control (RBAC) for chats and groups.",
        "Developed one-to-one messaging, group chats, and real-time notification workflows covering 1,000+ test messages.",
        "Structured robust backend services and socket events to handle real-time message delivery and instant persistence."
      ]
    },
    {
      id: "sociopedia",
      name: "Sociopedia",
      subtitle: "Django Social Media Platform",
      category: "Backend",
      description: "A clean, performant full-stack social networking application focusing on modular design patterns, session management, and image upload pipelines.",
      image: SocioPediaImg,
      icon: Github,
      tags: ["Django", "Python", "SQLite", "HTML", "CSS", "MUI"],
      source_code_link: "https://github.com/ShivendraTripathi07/SocailMedia",
      demo: "https://661c3bb1740ddcb8a6de1c12--loquacious-pony-1376ad.netlify.app/",
      highlights: [
        "Engineered a Django-powered social media application with 10+ core modules (auth, posts, profiles, user connections).",
        "Implemented secure cookies, sessions, and authentication supporting 100+ concurrent test users.",
        "Developed image-based post upload pipelines, dynamic content feeds, and social interactions handling 500+ test posts.",
        "Designed normalized database schemas and reusable Django apps to ensure high maintainability and code readability."
      ]
    },
    {
      id: "sanrakshak",
      name: "Sanrakshak",
      subtitle: "Disaster Response Platform (SIH 2024)",
      category: "Full-Stack",
      description: "An aggregator platform developed for Smart India Hackathon 2024 to centralize social media alerts and resource distribution requests in crisis zones.",
      image: SanrakshakImg,
      icon: Shield,
      tags: ["MERN", "Machine Learning", "Data Visualization", "Chart.js"],
      source_code_link: "https://github.com/Tanay-22/SIH-24-1867",
      demo: "https://66f31609de5df22b14fc68f6--mellow-faun-faeaa2.netlify.app/",
      highlights: [
        "Aggregates real-time feeds from social media and news reports regarding ongoing natural disasters.",
        "Features secure forms for reporting missing persons, organizing local volunteers, donations, and resource mapping.",
        "Engineered a state-wise data analytics dashboard displaying ongoing incidents and state-level alerts via bar charts."
      ]
    },
    {
      id: "manas",
      name: "Manas",
      subtitle: "Student Mental Support Portal",
      category: "Full-Stack",
      description: "A secure college portal designed to support student mental wellness, balance campus social life, and enable confidential aid submissions.",
      image: ManasImg,
      icon: HeartHandshake,
      tags: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB"],
      source_code_link: "https://github.com/AjinkyaMuley/crispr-app/",
      highlights: [
        "Provides a safe environment for students to submit mental health support requests to college coordinators.",
        "Showcases upcoming college festivals and events to promote positive student engagement and integration.",
        "Tailored layout for local campus use, creating a secure, accessible web space for student wellness support."
      ]
    },
    {
      id: "evogym",
      name: "EvoGym",
      subtitle: "Gym Marketing Web App",
      category: "Frontend",
      description: "A fast, modern marketing web page built with TypeScript and React to showcase gym training schedules, custom plans, and contact details.",
      image: EvogymImg,
      icon: Eye,
      tags: ["React.js", "TypeScript", "TailwindCSS", "Framer Motion"],
      source_code_link: "https://github.com/ShivendraTripathi07/Evogym",
      demo: "https://evogym-app.onrender.com/",
      highlights: [
        "Built a responsive layout from scratch utilizing TypeScript to ensure static type-safety and robust UI interactions.",
        "Implemented smooth custom page transitions and animations using Tailwind CSS and Framer Motion.",
        "Integrated dynamic contact forms and class selection components for seamless lead generation."
      ]
    },
    {
      id: "django_social",
      name: "DjangoSocialMedia",
      subtitle: "Minimalist Photo Sharing Web App",
      category: "Backend",
      description: "A minimalist image sharing web application leveraging Django's static collection pipelines, session state, and default SQLite databases.",
      image: SocialMediaImg,
      icon: Terminal,
      tags: ["Django", "Python", "SQLite", "Bootstrap"],
      source_code_link: "https://github.com/ShivendraTripathi07/DjangoSocialMedia",
      highlights: [
        "Created an image-sharing workflow enabling user authentication, profile setup, and picture posts.",
        "Utilized Django template inheritance, standard views, and query filters for content rendering.",
        "Engineered clean database models for user profiles and media uploads, reducing schema overhead."
      ]
    },
    {
      id: "nike_shoes",
      name: "Nike Shoes App",
      subtitle: "E-Commerce Landing Page Clone",
      category: "Frontend",
      description: "A high-fidelity landing page clone focusing on modern typography, pixel-perfect alignment, and rich hover states.",
      image: NikeShoesImg,
      icon: ShoppingBag,
      tags: ["React.js", "TailwindCSS", "Responsive Layout"],
      source_code_link: "https://github.com/ShivendraTripathi07/Nike-shoes-app",
      demo: "https://661e12a35b690794bc85dae9--steady-faun-c7b3d9.netlify.app/",
      highlights: [
        "Engineered a pixel-perfect replica of the Nike e-commerce homepage layout.",
        "Developed custom product galleries, customer testimonial grids, and promotional sections.",
        "Optimized image loading assets and Tailwind media queries for fast response times across viewports."
      ]
    }
  ];

  const [activeProject, setActiveProject] = useState(projects[0]);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Full-Stack", "Backend", "Frontend"];

  const filteredProjects = projects.filter(p =>
    filter === "All" || p.category === filter
  );

  // Auto select first of filtered items when category changes
  useEffect(() => {
    if (filteredProjects.length > 0 && !filteredProjects.includes(activeProject)) {
      setActiveProject(filteredProjects[0]);
    }
  }, [filter]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Featured Projects
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Explore a curated selection of full-stack platforms, backend microservices, and interactive frontend applications.
        </p>
      </motion.div>

      {/* Category Tabs */}
      <div className="flex justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${filter === cat
              ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 border border-slate-900"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Split-Screen Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

        {/* Left Side: Interactive Sidebar Menu */}
        <div className="lg:col-span-4 flex flex-col gap-3 max-h-[620px] overflow-y-auto pr-2 custom-scrollbar">
          {filteredProjects.map((project) => {
            const isSelected = activeProject.id === project.id;
            const ProjectIcon = project.icon;
            return (
              <button
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${isSelected
                  ? "bg-[#0f172a]/70 border-blue-500/40 shadow-xl"
                  : "bg-[#0f172a]/20 border-slate-900/60 hover:bg-[#0f172a]/40 hover:border-slate-800"
                  }`}
              >
                <div className={`p-3 rounded-xl border flex items-center justify-center ${isSelected ? "bg-blue-500/10 text-cyan-400 border-blue-500/20" : "bg-slate-950/60 text-slate-500 border-slate-900"
                  }`}>
                  <ProjectIcon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-white text-base truncate block">
                      {project.name}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-slate-950/60 text-slate-400 border border-slate-900 shrink-0">
                      {project.category}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 block mt-1 truncate">
                    {project.subtitle}
                  </span>
                  <div className="flex gap-1.5 flex-wrap mt-2.5">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[10px] text-cyan-400 bg-cyan-950/20 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[10px] text-slate-500 px-1 py-0.5">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Side: Detailed Showcase Panel */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0f172a]/30 backdrop-blur-md border border-slate-900 rounded-3xl p-6 md:p-8 flex flex-col justify-between h-full shadow-2xl"
            >
              <div>
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-3xl font-extrabold text-white">
                      {activeProject.name}
                    </h3>
                    <p className="text-cyan-400 font-medium mt-1">
                      {activeProject.subtitle}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={activeProject.source_code_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all flex items-center justify-center shadow-inner"
                      title="View GitHub Code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {activeProject.demo && (
                      <a
                        href={activeProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-500 shadow-md shadow-blue-500/10 transition-all text-sm font-semibold"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Image Panel */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-900 bg-slate-950/50 aspect-video mb-6 max-h-[300px]">
                  {activeProject.image ? (
                    <img
                      src={activeProject.image}
                      alt={activeProject.name}
                      className="w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-slate-600 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 select-none">
                      <Terminal className="w-12 h-12 text-slate-700 mb-3 animate-pulse" />
                      <span className="text-sm font-mono tracking-wider uppercase text-slate-500">Real-Time Microservice System</span>
                      <span className="text-xs text-slate-600 mt-1">Ready for deployment</span>
                    </div>
                  )}
                </div>

                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  {activeProject.description}
                </p>

                {/* Key Engineered Accomplishments */}
                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-3">Key Features & Metrics</h4>
                  <ul className="space-y-2.5">
                    {activeProject.highlights.map((bullet, idx) => (
                      <li key={idx} className="text-sm text-slate-400 flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies Tag Group */}
              <div className="pt-6 border-t border-slate-900/60 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 bg-slate-950/50 text-slate-300 rounded-lg text-xs font-semibold border border-slate-900"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default Projects;