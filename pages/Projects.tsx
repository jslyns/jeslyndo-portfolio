
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProjectProps {
  title: string;
  sub: string;
  img: string;
  link: string;
  index: number;
  insight: string;
}

const ProjectCard = ({ title, sub, img, link, index, insight }: ProjectProps) => {
  return (
    <Link 
      to={link} 
      className="group relative bg-white rounded-3xl overflow-hidden border border-brand-light shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-in flex flex-col h-full"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden bg-brand-light/50 h-40">
        <div className="absolute inset-0 bg-brand-ink/0 group-hover:bg-brand-ink/5 transition-colors duration-300 z-10" />
        <img 
          src={img} 
          alt={title} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          {/* Standardized Title Size */}
          <h3 className="font-black text-brand-ink mb-1 group-hover:text-brand-primary transition-colors text-xl">
            {title}
          </h3>
          <p className="text-brand-muted text-sm font-bold mb-4 uppercase tracking-wide opacity-80">{sub}</p>
          
          {/* Personal Insight */}
          <div className="mb-6 relative pl-4 border-l-2 border-brand-accent">
            <p className="text-brand-muted italic text-lg leading-relaxed line-clamp-5">
              "{insight}"
            </p>
          </div>
        </div>

        <div className="mt-auto flex items-center text-brand-primary font-bold text-xs tracking-wide uppercase group-hover:gap-2 transition-all">
          View Case Study <ArrowRight size={14} className="ml-2" />
        </div>
      </div>
    </Link>
  );
};

export default function Projects() {
  return (
    <div className="py-12 md:py-20 bg-gradient-to-b from-brand-bg to-white min-h-screen font-['Poppins']">
      <div className="max-w-[1120px] mx-auto px-8 md:px-12">
        <div className="max-w-3xl mb-12 space-y-4 animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-black text-brand-ink tracking-tight">Explorations &amp; Case Studies</h1>
          <p className="text-lg md:text-xl text-brand-muted leading-relaxed">
            A look into how I break down problems, design solutions, and learn along the way.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <ProjectCard 
            index={0}
            title="TurnBased Studio" 
            sub="UX/UI Internship"
            img={new URL('../images/projects/TurnBasedStudio-Logo.jpg', import.meta.url).href}
            link="/projects/mobile-app"
            insight="With no established design system in place, I led the design direction of the app's basic user flow. My early prototype enabled stakeholders to visualize the app's future while in its early stages."
          />
          <ProjectCard 
            index={1}
            title="Road2"
            sub="UX/UI Internship"
            img={new URL('../images/projects/road2.png', import.meta.url).href}
            link="/projects/road2"
            insight="I designed the student dashboard to prioritize clarity, engagement, and actionable progress tracking."
          />
           <ProjectCard 
            index={2}
            title="Graphic Collection"
            sub="Brand & Visual Identity"
            img={new URL('../images/projects/graphic-design.png', import.meta.url).href}
            link="/projects/graphics"
            insight="Graphic design planted the very first seeds that led me to discover UI/UX and product design. Beyond creative expression, design became a medium for problem solving and identifying user needs."
          />
           <ProjectCard 
            index={3}
            title="HubSpot & AeroDefense"
            sub="Marketing AI Internship"
            img={new URL('../images/projects/Hubspot.png', import.meta.url).href}
            link="/projects/hubspot"
            insight="I learned to bridge the gap between developing user personas and understanding business goals through targeted content strategy."
          />
        </div>
      </div>
    </div>
  );
}
