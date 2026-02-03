import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <h4 className="text-xl font-semibold text-slate-800 mb-2">{project.title}</h4>
      
      {/* Language and Course Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
          {project.language}
        </span>
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
          {project.course}
        </span>
      </div>
      
      {/* Description */}
      <p className="text-slate-600 mb-4">{project.description}</p>
      
      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map(tech => (
          <span 
            key={tech} 
            className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
      
      {/* Links */}
      <div className="flex gap-4">
        {project.github && (
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
          >
            <Github size={16} className="mr-2" />
            GitHub
          </a>
        )}
        {project.demo && (
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-green-600 hover:text-green-800 font-medium text-sm"
          >
            <ExternalLink size={16} className="mr-2" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
