import React from 'react';
import { skills } from '../data/projectsData';

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-slate-800 mb-6">Technical Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 rounded-lg p-6">
            <h4 className="font-semibold text-xl text-slate-800 mb-3">Languages</h4>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map(skill => (
                <span 
                  key={skill} 
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-slate-50 rounded-lg p-6">
            <h4 className="font-semibold text-xl text-slate-800 mb-3">Frameworks</h4>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map(skill => (
                <span 
                  key={skill} 
                  className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-slate-50 rounded-lg p-6">
            <h4 className="font-semibold text-xl text-slate-800 mb-3">Tools & Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map(skill => (
                <span 
                  key={skill} 
                  className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
