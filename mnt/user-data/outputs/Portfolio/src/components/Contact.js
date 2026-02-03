import React from 'react';
import { Mail } from 'lucide-react';
import { personalInfo } from '../data/projectsData';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-slate-800 mb-6">Contact</h3>
        <div className="bg-slate-50 rounded-lg p-8 text-center">
          <Mail className="mx-auto mb-4 text-blue-600" size={48} />
          <h4 className="text-2xl font-semibold text-slate-800 mb-2">Let's Connect</h4>
          <p className="text-slate-600 mb-6">
            I'm always open to discussing new opportunities and collaborations.
          </p>
          <a 
            href={`mailto:${personalInfo.email}`}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
