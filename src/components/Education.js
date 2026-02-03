import React from 'react';
import { education } from '../data/projectsData';

const Education = () => {
  return (
    <section id="education" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-slate-800 mb-6">Education</h3>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-2xl font-semibold text-slate-800 mb-2">
                {edu.degree}
              </h4>
              <p className="text-slate-600 mb-2">
                {edu.university} | {edu.location}
              </p>
              <p className="text-slate-600 mb-3 font-medium">
                {edu.period}
              </p>
              <p className="text-slate-700">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;