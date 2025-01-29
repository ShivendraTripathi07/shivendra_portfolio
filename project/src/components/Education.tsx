import React from 'react';

const Education = () => {
  const education = {
    degree: 'B.Tech in Electronics and Communication Engineering',
    institution: 'Indian Institute of Information Technology, Nagpur',
    cgpa: '8.17',
    stats: [
      { value: '8.19', label: 'CGPA' },
      { value: '15+', label: 'Projects' },
      { value: '2.5+', label: 'Years Coding' },
    ],
    description: 'As a passionate full-stack developer and DevOps enthusiast, I combine my technical expertise with a deep understanding of software development principles to create efficient, scalable solutions.'
  };

  return (
    <div className="min-h-screen bg-[#0a0a14] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <h1 className="text-5xl font-bold text-white mb-12 animate-fade-in relative from-pink-500 via-pink-900 to-slate-700">
          Pursuing Excellence in Technology
          {/* <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> */}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            {/* Education Info */}
            <p className="text-gray-300 text-lg animate-slide-up leading-relaxed">
              I'm currently pursuing my {education.degree} at {education.institution}, maintaining a strong CGPA of {education.cgpa}/10.
            </p>

            {/* Description */}
            <p className="text-gray-300 text-lg animate-slide-up delay-200 leading-relaxed">
              {education.description}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {education.stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-glow" />

                  {/* Card Content */}
                  <div className="relative bg-[#151625] p-6 rounded-xl flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 mt-2 text-sm md:text-base">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative group h-[400px] lg:h-[500px] mb-5 -mt3">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r  rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />

            {/* Image Container */}
            <div className="relative h-full overflow-hidden rounded-2xl">
              <img
                src="https://img.freepik.com/free-photo/elevated-view-laptop-earphones-crumpled-papers-pencil-blank-spiral-notepad-frame-black-background_23-2148080331.jpg"
                alt="Graduation cap and diploma"
                className="w-full h-full object-cover object-center rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient Overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

// Add these custom animations to your global CSS or Tailwind config
const styles = `
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slide-up {
    from { 
      opacity: 0;
      transform: translateY(20px);
    }
    to { 
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes glow {
    0% { opacity: 0; }
    50% { opacity: 0.3; }
    100% { opacity: 0; }
  }

  .animate-fade-in {
    animation: fade-in 0.8s ease-out forwards;
  }

  .animate-slide-up {
    animation: slide-up 0.8s ease-out forwards;
  }

  .animate-glow {
    animation: glow 2s ease-in-out infinite;
  }

  .delay-200 {
    animation-delay: 200ms;
  }
`;