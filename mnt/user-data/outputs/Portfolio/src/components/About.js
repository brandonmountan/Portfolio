import React from 'react';
import { personalInfo } from '../data/projectsData';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-slate-800 mb-6">About Me</h3>
        <p className="text-lg text-slate-600 leading-relaxed">
          {personalInfo.about}
        </p>
      </div>
    </section>
  );
};

export default About;
