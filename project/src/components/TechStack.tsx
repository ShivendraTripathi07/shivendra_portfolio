const TechStack = () => {
  const skills = {
    Languages: ['C', 'C++', 'JavaScript', 'Python', 'TypeScript'],
    'Developer Tools': ['Git/GitHub', 'VS Code', 'Jupyter Notebook'],
    'Frontend Technologies': ['HTML', 'CSS', 'TailwindCSS', 'ReactJS', 'MUI'],
    'Backend Technologies': ['Node.js', 'Express.js', 'MongoDB', 'SQL', 'PostgreSQL'],
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        My Technical Arsenal
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="bg-[#151625] rounded-xl p-8 transform hover:scale-[1.02] transition-all duration-300 border border-purple-900/30 hover:shadow-2xl hover:shadow-purple-900/40 hover:border-purple-500/50"
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-purple-900/20 text-purple-400 rounded-lg text-sm font-medium border border-purple-500/30 hover:bg-purple-900/30 hover:border-purple-500 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TechStack;


