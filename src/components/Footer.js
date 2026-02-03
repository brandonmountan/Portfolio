import React from 'react';
import { personalInfo } from '../data/projectsData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
