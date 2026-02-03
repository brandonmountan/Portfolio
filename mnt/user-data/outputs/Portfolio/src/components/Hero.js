import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/projectsData';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">{personalInfo.title}</h2>
        <p className="text-xl sm:text-2xl mb-8">{personalInfo.subtitle}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center justify-center"
          >
            <Github className="mr-2" size={20} />
            GitHub
          </a>
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition flex items-center justify-center"
          >
            <Linkedin className="mr-2" size={20} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
