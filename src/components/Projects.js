import React, { useState } from 'react';
import { Filter, Code, BookOpen } from 'lucide-react';
import { projects } from '../data/projectsData';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState('all');

  // Extract unique languages and courses
  const languages = ['all', ...new Set(projects.map(p => p.language))];
  const courses = ['all', ...new Set(projects.map(p => p.course))];

  // Filter projects based on selected filters
  const filteredProjects = projects.filter(project => {
    const languageMatch = selectedLanguage === 'all' || project.language === selectedLanguage;
    const courseMatch = selectedCourse === 'all' || project.course === selectedCourse;
    return languageMatch && courseMatch;
  });

  return (
    <section id="projects" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-slate-800 mb-6">Projects</h3>
        
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <Filter className="mr-2 text-slate-600" size={20} />
            <h4 className="font-semibold text-lg text-slate-800">Filter Projects</h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Language Filter */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center">
                <Code size={16} className="mr-2" />
                Programming Language
              </label>
              <select 
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                {languages.map(lang => (
                  <option key={lang} value={lang}>
                    {lang === 'all' ? 'All Languages' : lang}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Course Filter */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center">
                <BookOpen size={16} className="mr-2" />
                Course
              </label>
              <select 
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                {courses.map(course => (
                  <option key={course} value={course}>
                    {course === 'all' ? 'All Courses' : course}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-slate-600">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg">
            <p className="text-slate-600 text-lg">No projects match the selected filters.</p>
            <button
              onClick={() => {
                setSelectedLanguage('all');
                setSelectedCourse('all');
              }}
              className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
