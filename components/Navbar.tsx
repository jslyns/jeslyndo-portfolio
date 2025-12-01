
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

/* Version 1.2 */

const NavLink = ({ to, children, isActive }: { to: string; children: React.ReactNode; isActive: boolean }) => (
  <Link
    to={to}
    className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
      isActive 
        ? 'bg-brand-primary/10 text-brand-primary' 
        : 'text-brand-muted hover:bg-brand-primary/5 hover:text-brand-primary'
    }`}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 h-16 border-b border-brand-primary/10 bg-white/80 backdrop-blur-md">
      <div className="max-w-[1120px] mx-auto px-6 h-full flex items-center justify-between">
        {/* UPDATED: Removed 'uppercase' class so it respects lowercase 'jeslyndo' */}
        <div className="font-black text-lg tracking-widest text-brand-muted hover:text-brand-primary transition-colors">
          <Link to="/">jeslyndo</Link>
        </div>

        {/* Desktop Nav - Removed Contact Link */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink to="/about" isActive={isActive('/about')}>About</NavLink>
          <NavLink to="/projects" isActive={isActive('/projects')}>Projects</NavLink>
          <NavLink to="/resume" isActive={isActive('/resume')}>Resume</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-brand-muted hover:bg-brand-primary/5 rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown - Removed Contact Link */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white/95 backdrop-blur-md border-b border-brand-primary/10 shadow-xl animate-fade-in">
          <div className="flex flex-col p-4 space-y-2">
             <Link 
              to="/about" 
              className="block p-4 rounded-xl font-bold text-brand-muted hover:bg-brand-bg hover:text-brand-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className="block p-4 rounded-xl font-bold text-brand-muted hover:bg-brand-bg hover:text-brand-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/resume" 
              className="block p-4 rounded-xl font-bold text-brand-muted hover:bg-brand-bg hover:text-brand-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
