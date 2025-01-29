import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, X } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/navigation';
import Trezzar from "./../assests/Trezzar.png";
import Evogym from "./../assests/Evogym.png";
import NikeShoes from "./../assests/NikeShoes.png";
import Sanrakshak from "./../assests/Sanrakshak.png";
import Yahtzee from "./../assests/Yahtzee.png";
import Manas from "./../assests/Manas.png";
import SocioPedia from "./../assests/SocioPedia.png";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      name: "Trezzar",
      description:
        "Trezzar is a comprehensive e-commerce platform developed with the MERN stack, featuring robust category-based browsing, secure Razorpay integration, and streamlined order management. The application includes a powerful admin dashboard for efficient oversight of users, products, and transactions, optimizing operational control and user engagement.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "mongodb", color: "green-text-gradient" },
        { name: "tailwind", color: "pink-text-gradient" },
      ],
      image: Trezzar,
      source_code_link: "https://github.com/ShivendraTripathi07/Trezzar",
      demo: "https://superb-kheer-3d6fe2.netlify.app/",
    },
    {
      name: "SocioPedia",
      description:
        "SocioPedia is a dynamic social platform enabling users to share posts, engage by liking content, and explore user profiles. Users can connect by adding friends and viewing friend lists, creating an interactive and personalized experience.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "redux", color: "green-text-gradient" },
        { name: "MUI", color: "pink-text-gradient" },
      ],
      image: SocioPedia,
      source_code_link: "https://github.com/ShivendraTripathi07/SocailMedia",
      demo: "https://661c3bb1740ddcb8a6de1c12--loquacious-pony-1376ad.netlify.app/",
    },
    {
      name: "EvoGym",
      description:
        "EvoGym is a responsive frontend application built with TypeScript and React, showcasing a range of gym classes. It offers a streamlined user interface with easy access to class information and a convenient 'Contact Us' feature for inquiries.",
      tags: [
        { name: "typeScript", color: "blue-text-gradient" },
        { name: "tailwind", color: "green-text-gradient" },
        { name: "react", color: "pink-text-gradient" },
      ],
      image: Evogym,
      source_code_link: "https://github.com/ShivendraTripathi07/Evogym",
      demo: "https://evogym-app.onrender.com/",
    },
    {
      name: "Sanrakshak",
      description:
        "Sanrakshak is a disaster-response platform developed for SIH 2024, aggregating real-time data from social media and news sources on recent disasters. The application features forms for missing persons, volunteering, donations, and resource requests, along with a dashboard displaying total alerts, ongoing incidents, red/safe zones, and statewise alert data visualized in a bar chart.",
      tags: [
        { name: "mongodb", color: "blue-text-gradient" },
        { name: "react", color: "green-text-gradient" },
        { name: "ml", color: "pink-text-gradient" },
      ],
      image: Sanrakshak,
      source_code_link: "https://github.com/Tanay-22/SIH-24-1867",
      demo: "https://66f31609de5df22b14fc68f6--mellow-faun-faeaa2.netlify.app/",
    },
    {
      name: "Manas",
      description:
        "Manas is a thoughtfully designed platform built using the MERN stack, aimed at supporting students dealing with depression. Users can submit details about students in need of support, while the platform maintains a positive and inclusive atmosphere by showcasing upcoming events at the college. This ensures the platform doesn't feel exclusively centered around mental health struggles. Manas is tailored specifically for students at our college, creating a safe, accessible space for those seeking help while also keeping them connected with campus life.",
      tags: [
        { name: "mongodb", color: "blue-text-gradient" },
        { name: "react", color: "green-text-gradient" },
        { name: "tailwind", color: "pink-text-gradient" },
      ],
      image: Manas,
      source_code_link: "https://github.com/AjinkyaMuley/crispr-app/",
      // demo: "https://661c3bb1740ddcb8a6de1c12--loquacious-pony-1376ad.netlify.app/",
    },
    {
      name: "Nike Shoes App",
      description:
        "Nike Shoes App is a one-page frontend clone of the Nike app, built with React and Tailwind CSS. It showcases product listings, customer reviews, and sections such as popular products and an about page, delivering a clean and responsive user experience.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "tailwind", color: "green-text-gradient" },
      ],
      image: NikeShoes,
      source_code_link: "https://github.com/ShivendraTripathi07/Nike-shoes-app",
      demo: "https://661e12a35b690794bc85dae9--steady-faun-c7b3d9.netlify.app/",
    },
    {
      name: "Yahtzee",
      description:
        "Yahtzee Game App is a frontend-based recreation of the classic dice game Yahtzee, providing an interactive and enjoyable experience. The app lets users roll dice, strategize, and score just like the traditional game, all within a smooth, responsive interface.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "css", color: "pink-text-gradient" },
      ],
      image: Yahtzee,
      source_code_link: "https://github.com/ShivendraTripathi07/Yahtzee",
      demo: "https://661e1590826bb197a01dde35--sparkling-sunburst-dd003e.netlify.app/",
    },
  ];
  // Close modal on escape key press
  useEffect(() => {
    const handleEsc = (event: string) => {
      if (event.keyCode === 27) setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);



  const truncateDescription = (text, length = 100) => {
    if (text.length <= length) return text;
    return text.slice(0, length).trim() + '...';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Featured Projects
      </h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#151625] rounded-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 border border-purple-900/30">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.name}
                </h3>
                <div className="h-24 text-gray-400 mb-4">
                  <p className="leading-relaxed">
                    {truncateDescription(project.description)}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-purple-400 hover:text-purple-300 ml-2 font-medium"
                    >
                      Read More
                    </button>
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tech) => (
                    <span
                      key={tech.name}
                      className="px-3 py-1 bg-purple-900/20 text-purple-400 rounded-full text-sm font-medium"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.source_code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  {project.demo ? (<a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-purple-600 text-purple-400 rounded-lg hover:bg-purple-600 hover:text-white transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>) : ("")}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
            onClick={() => setSelectedProject(null)}
          />

          {/* Modal Content */}
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
            <div className="relative bg-[#1a1b2e] rounded-lg overflow-hidden shadow-xl transform transition-all max-w-2xl w-full mx-auto">
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {selectedProject.name}
                </h3>

                {selectedProject.image && (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                )}

                <p className="text-gray-300 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tech) => (
                    <span
                      key={tech.name}
                      className="px-3 py-1 bg-purple-900/20 text-purple-400 rounded-full text-sm font-medium"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={selectedProject.source_code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View Code
                  </a>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-purple-600 text-purple-400 rounded-lg hover:bg-purple-600 hover:text-white transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;