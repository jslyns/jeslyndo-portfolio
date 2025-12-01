
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import PhonePrototype from '../../components/PhonePrototype';

/* Version 1.3 */

const TabButton = ({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) => (
  <button
    onClick={onClick}
    className={`px-5 py-2 rounded-full font-bold text-sm transition-all duration-200 ${
      active 
        ? 'bg-brand-primary text-white shadow-md' 
        : 'bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20'
    }`}
  >
    {children}
  </button>
);

export default function ProjectMobileApp() {
  const [activeTab, setActiveTab] = useState<'flows' | 'iterations' | 'deliverables' | 'results'>('flows');

  // Define your deliverable images here
  const deliverableImages = [
    new URL('../../images/turnbase/screen-1.png', import.meta.url).href,
    new URL('../../images/turnbase/screen-2.png', import.meta.url).href,
    new URL('../../images/turnbase/screen-3.png', import.meta.url).href,
    new URL('../../images/turnbase/screen-4.png', import.meta.url).href,
    new URL('../../images/turnbase/screen-5.png', import.meta.url).href,
    new URL('../../images/turnbase/screen-6.png', import.meta.url).href
  ];

  return (
    <div className="pb-20 font-['Poppins']">
      {/* Hero Section */}
      <div className="bg-brand-bg pt-0 pb-6 md:pb-0 border-b border-brand-light relative overflow-visible z-10">
        <div className="max-w-[1120px] mx-auto px-6 grid lg:grid-cols-[1.2fr_0.8fr] gap-4 items-start">
          
          {/* Text Column */}
          {/* Reduced padding from pt-20 to pt-10 to keep Back link high */}
          <div className="z-10 relative pt-10 mb-8 md:mb-12">
            {/* Back Link - Increased mb-6 to mb-16 to push title down ~48px (1/2 inch) */}
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-primary transition-colors mb-16 font-bold text-sm"
            >
              <ChevronLeft size={16} /> Back
            </Link>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-brand-ink mb-2">
              TurnBased Studio
            </h1>
            <div className="inline-block px-3 py-1 bg-brand-accent/20 text-brand-ink font-bold rounded-md text-sm mb-4 uppercase tracking-wide">
              UX/UI Intern
            </div>
            <p className="text-lg text-brand-muted leading-relaxed max-w-xl mb-8">
              Early-stage mobile/social concept. I mapped key flows, produced sketches and low-fi frames, and built a clickable prototype to validate onboarding and planning.
            </p>

            {/* Tags - Added to fill whitespace */}
            <div className="flex flex-wrap gap-2">
              {['Figma', 'Wireframing', 'Prototyping', 'iOS Design', 'User Research'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-blue-50 text-[#2774AE] border border-blue-100 rounded-full text-xs font-bold uppercase tracking-wide">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Phone Column - Scaled Down Significantly & Pulled Up */}
          {/* -translate-y-8 pulls phone up visually */}
          {/* -my-24 pulls the layout bounds tighter so the border bottom comes up */}
          <div className="flex justify-center lg:justify-start lg:-translate-x-6 mt-0 lg:mt-0 -translate-y-4 md:-translate-y-8 rotate-6 hover:rotate-0 transition-all duration-700 origin-center scale-[0.55] md:scale-[0.70] relative z-20 pointer-events-none -my-20 md:-my-24">
             <PhonePrototype />
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="max-w-[1120px] mx-auto px-6 mt-0 md:mt-4 relative z-0">
        <div className="flex flex-wrap gap-3 mb-8 p-2 bg-white rounded-full border border-brand-light w-fit shadow-sm">
          <TabButton active={activeTab === 'flows'} onClick={() => setActiveTab('flows')}>User Flows</TabButton>
          <TabButton active={activeTab === 'iterations'} onClick={() => setActiveTab('iterations')}>Iterations</TabButton>
          <TabButton active={activeTab === 'deliverables'} onClick={() => setActiveTab('deliverables')}>Deliverables</TabButton>
          <TabButton active={activeTab === 'results'} onClick={() => setActiveTab('results')}>Results</TabButton>
        </div>

        <div className="bg-white rounded-3xl border border-brand-light shadow-xl p-8 md:p-12 min-h-[500px]">
          
          {activeTab === 'flows' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div>
                <h3 className="text-2xl font-bold mb-4">Understanding User Flow Map</h3>
                <p className="text-brand-muted mb-6 max-w-2xl">
                  Began by reviewing the design specification sheet I was given to understand the app's purpose and identify its target users.
                </p>
                <ul className="list-disc pl-5 text-brand-muted space-y-2">
                  <li>Mapped out basic user task flows to visualize navigation</li>
                  <li>Identified essential screens needed to support core features</li>
                  <li>Established a basic skeleton of the app's structure</li>
                </ul>
              </div>
              
              <div className="space-y-12">
                <figure className="w-full">
                   <img src={new URL('../../images/turnbase/userflow-onboarding.png', import.meta.url).href} className="w-full h-auto rounded-xl border border-brand-light shadow-sm" alt="User Flow Onboarding" />
                   <figcaption className="text-center text-xs font-bold text-brand-muted mt-3 uppercase tracking-widest">User Flow — Onboarding</figcaption>
                </figure>
                
                <figure className="w-full">
                   <img src={new URL('../../images/turnbase/process-design-thinking.png', import.meta.url).href} className="w-full h-auto rounded-xl border border-brand-light shadow-sm" alt="Design Thinking Process" />
                   <figcaption className="text-center text-xs font-bold text-brand-muted mt-3 uppercase tracking-widest">Design Thinking — Process</figcaption>
                </figure>
              </div>
            </div>
          )}

          {activeTab === 'iterations' && (
             <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
               <div>
                 <h3 className="text-2xl font-bold mb-4">Sketches &amp; Wireframes</h3>
                 <p className="text-brand-muted mb-6 max-w-2xl">
                   Experimented with multiple variations of screens to test different ideas. Reworked congested or inefficient pages into cleaner versions.
                 </p>
               </div>
               
               <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">
                 
                 {/* Column 1 */}
                 <div className="space-y-8">
                    {/* Pic 1: Sketch - Onboarding (Portrait) */}
                    <div className="space-y-2">
                        <img src={new URL('../../images/turnbase/sketch-onboarding.png', import.meta.url).href} className="w-full rounded-xl border border-brand-light shadow-sm" alt="Sketch Onboarding" />
                        <p className="text-xs font-bold text-brand-muted uppercase tracking-widest text-center">Sketch — Onboarding</p>
                    </div>

                    {/* Pic 3: Sketch - Planning (Portrait) */}
                    <div className="space-y-2">
                        <img src={new URL('../../images/turnbase/sketch-planning.png', import.meta.url).href} className="w-full rounded-xl border border-brand-light shadow-sm" alt="Sketch Planning" />
                        <p className="text-xs font-bold text-brand-muted uppercase tracking-widest text-center">Sketch — Planning</p>
                    </div>
                 </div>

                 {/* Column 2 - Staggered */}
                 <div className="space-y-8 md:mt-12">
                    {/* Pic 2: Low-fi Flow - Onboarding Set A (Landscape) */}
                    <div className="space-y-2">
                        <img src={new URL('../../images/turnbase/flow-onboarding-a.png', import.meta.url).href} className="w-full rounded-xl border border-brand-light shadow-sm" alt="Low-fi Set A" />
                        <p className="text-xs font-bold text-brand-muted uppercase tracking-widest text-center">Low-fi Flow — User Onboarding</p>
                    </div>

                    {/* Pic 4: Low-fi Flow - Onboarding Set B (Landscape) */}
                    <div className="space-y-2">
                        <img src={new URL('../../images/turnbase/flow-onboarding-b.png', import.meta.url).href} className="w-full rounded-xl border border-brand-light shadow-sm" alt="Low-fi Set B" />
                        <p className="text-xs font-bold text-brand-muted uppercase tracking-widest text-center">Low-fi Flow — Preference learning UI</p>
                    </div>
                 </div>

               </div>
             </div>
          )}

          {activeTab === 'deliverables' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div>
                 <h3 className="text-2xl font-bold mb-4">Lo-fi Mockup &amp; Prototype</h3>
                 <p className="text-brand-muted max-w-2xl">
                   Created 100+ wireframes covering core app features. Developed into an interactive low-fidelity prototype to test flows and validate interactions.
                 </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {deliverableImages.map((src, i) => (
                  <img key={i} src={src} className="w-full rounded-lg border border-brand-light shadow-sm hover:shadow-md transition-shadow" alt={`Screen ${i + 1}`} />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'results' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Challenges</h3>
                  <p className="text-brand-muted leading-relaxed">
                    In early designs, user flows required too many steps. I simplified tasks by condensing them into fewer screens and reducing friction.
                    I also had to create reusable UI components from scratch as no design system existed.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">What I Learned</h3>
                  <p className="text-brand-muted leading-relaxed">
                    Since this was a self-guided project, it pushed me to research Figma basics and UI design best practices while learning as I went.
                    It taught me to work independently and adapt quickly.
                  </p>
                </div>
              </div>
              <div className="bg-brand-bg p-8 rounded-2xl">
                <h3 className="text-lg font-bold mb-2">Next Steps</h3>
                <p className="text-brand-muted">
                  If I had more time, I would continue refining the interactive prototype and run usability testing. I would also collaborate with the founder to establish a more concrete visual identity before moving to high-fidelity.
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
