
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-brand-primary/10 mt-auto">
      <div className="max-w-[1120px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-brand-muted">
        <div className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Jeslyn Do
        </div>
        <div className="flex space-x-6">
          <a href="mailto:jesdo0405@gmail.com" className="hover:text-brand-primary transition-colors">Email</a>
          <a href="https://www.linkedin.com/in/jeslyn-do-75216b357/" target="_blank" rel="noreferrer" className="hover:text-brand-primary transition-colors">LinkedIn</a>
          <Link to="/resume" className="hover:text-brand-primary transition-colors">Resume</Link>
        </div>
      </div>
    </footer>
  );
}
