import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Users, Target, Layers, Clock, Layout } from 'lucide-react';

/* Version 3.0 - Text Header & Layout Reorder */

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

export default function ProjectRoad2() {
  const [activeTab, setActiveTab] = useState<'overview' | 'flow' | 'process' | 'iterations' | 'deliverables'>('overview');

  return (
    <div className="pb-20 font-['Poppins']">
      {/* Hero - bg-white */}
      <div className="bg-white border-b border-brand-light pt-10 pb-12 relative overflow-hidden">
        
        <div className="max-w-[1120px] mx-auto px-6 relative z-10">
          {/* Back Link */}
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-primary transition-colors mb-2 font-bold text-sm"
          >
            <ChevronLeft size={16} /> Back
          </Link>

          {/* Swapped Columns: Text First (Left), Image Second (Right) */}
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
             
             {/* Text Column */}
             <div className="-mt-4">
               {/* 1. Header Text (Replaces Logo) */}
               <h1 className="text-4xl md:text-6xl font-black tracking-tight text-brand-ink mb-2">
                 Road2
               </h1>
               
               {/* 2. Internship Pill */}
               <div className="inline-block px-3 py-1 bg-brand-accent/20 text-brand-ink font-bold rounded-md text-sm mb-4 uppercase tracking-wide">
                 UX/UI Design Internship
               </div>

               {/* 3. New Project Title */}
               <h2 className="text-3xl font-black mb-4 text-brand-ink leading-tight">Student Dashboard</h2>
               
               {/* Description */}
               <p className="text-brand-muted text-lg leading-relaxed font-medium mb-6">
                 Road2 is a secure educational platform empowering students to explore career paths while collaborating with teachers, parents, and industry experts worldwide.
               </p>

               {/* 4. Tags (Moved to Bottom) */}
               <div className="flex flex-wrap gap-2">
                 {['Figma', 'Wireframing', 'Prototyping', 'UX'].map(tag => (
                   <span key={tag} className="px-3 py-1 bg-brand-bg border border-brand-primary/20 rounded-full text-[#2774AE] text-xs font-bold uppercase tracking-wide shadow-sm">
                     {tag}
                   </span>
                 ))}
               </div>
             </div>

             {/* Image Column */}
             <div className="flex items-center justify-center">
               <img 
                 src={new URL('../../images/road2/bw-laptop.png', import.meta.url).href} 
                 alt="Road2 Dashboard" 
                 className="w-full max-h-[500px] object-contain" 
               />
             </div>

          </div>
        </div>
      </div>

      <div className="max-w-[1120px] mx-auto px-6 mt-12">
        
        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-8 p-2 bg-white rounded-full border border-brand-light w-fit shadow-sm">
          <TabButton active={activeTab === 'overview'} onClick={() => setActiveTab('overview')}>Overview</TabButton>
          <TabButton active={activeTab === 'flow'} onClick={() => setActiveTab('flow')}>User Flow</TabButton>
          <TabButton active={activeTab === 'process'} onClick={() => setActiveTab('process')}>Process</TabButton>
          <TabButton active={activeTab === 'iterations'} onClick={() => setActiveTab('iterations')}>Iterations</TabButton>
          <TabButton active={activeTab === 'deliverables'} onClick={() => setActiveTab('deliverables')}>Deliverables</TabButton>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl border border-brand-light shadow-xl p-8 md:p-12 min-h-[500px]">
          
          {activeTab === 'overview' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Rich Dark Blue Overview Section */}
              <section className="bg-brand-ink rounded-2xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                 {/* Decorative Background Elements */}
                 <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[60px] pointer-events-none"></div>

                 <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Context & Role */}
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-white/10 rounded-xl text-brand-accent backdrop-blur-sm border border-white/10">
                                    <Users size={24} />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Context & Team</h2>
                            </div>
                            <p className="text-brand-light/90 text-lg leading-relaxed">
                                My first internship introduction to UI/UX. I worked in a small, agile design team of 2 (myself + 1 teammate) to completely revamp the student learning experience.
                            </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                            <div className="flex items-center gap-2 mb-3 text-brand-primary">
                                <Layers size={18} />
                                <h3 className="text-sm font-bold uppercase tracking-widest">My Role</h3>
                            </div>
                            <p className="text-brand-light/80 leading-relaxed">
                                Designed student learning features including <strong className="text-white">progress tracking</strong>, <strong className="text-white">study streaks</strong>, and <strong className="text-white">engagement tools</strong>.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Goal & Stats */}
                    <div className="flex flex-col h-full justify-between gap-6">
                        <div className="bg-white text-brand-ink rounded-2xl p-8 shadow-xl border border-brand-light">
                            <div className="flex items-center gap-3 mb-4 text-brand-primary">
                                <Target size={28} />
                                <h3 className="font-bold text-xl">The Goal</h3>
                            </div>
                            <p className="text-brand-muted text-lg leading-relaxed">
                                To create a platform that helps students organize their learning, track progress, and stay engaged without feeling overwhelmed.
                            </p>
                        </div>

                        {/* Quick Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-brand-primary/20 border border-brand-primary/30 p-5 rounded-2xl text-center backdrop-blur-sm hover:bg-brand-primary/30 transition-colors">
                                <Clock className="w-6 h-6 text-brand-accent mx-auto mb-2" />
                                <div className="text-2xl font-bold text-white mb-0.5">6 Mo</div>
                                <div className="text-[10px] uppercase font-bold text-brand-light tracking-wider">Duration</div>
                            </div>
                            <div className="bg-brand-primary/20 border border-brand-primary/30 p-5 rounded-2xl text-center backdrop-blur-sm hover:bg-brand-primary/30 transition-colors">
                                <Layout className="w-6 h-6 text-brand-accent mx-auto mb-2" />
                                <div className="text-2xl font-bold text-white mb-0.5">Web</div>
                                <div className="text-[10px] uppercase font-bold text-brand-light tracking-wider">Platform</div>
                            </div>
                        </div>
                    </div>
                 </div>
              </section>
            </div>
          )}

          {activeTab === 'flow' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Horizontal Flowchart */}
              <section>
                <div className="text-center mb-12">
                  <div className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-2">User Flow</div>
                  <h2 className="text-3xl font-bold text-brand-ink">High-Level Navigation Flow</h2>
                  <p className="text-brand-muted mt-2">Mapping the student journey from onboarding to engagement.</p>
                </div>

                <div className="bg-white border border-brand-light rounded-3xl p-6 md:p-10 shadow-sm overflow-x-auto">
                  <div className="min-w-[900px]">
                    <svg viewBox="0 0 1000 350" className="w-full h-auto overflow-visible">
                      <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="#DAE1E9" />
                        </marker>
                      </defs>

                      {/* Connection Lines */}
                      <path d="M130 175 C160 175, 190 175, 220 175" fill="none" stroke="#2774AE" strokeWidth="2" />
                      <path d="M380 175 C410 175, 440 175, 470 175" fill="none" stroke="#2774AE" strokeWidth="2" />
                      <path d="M590 175 C640 175, 640 50, 690 50" fill="none" stroke="#DAE1E9" strokeWidth="2" markerEnd="url(#arrowhead)" />
                      <path d="M590 175 C640 175, 640 115, 690 115" fill="none" stroke="#DAE1E9" strokeWidth="2" markerEnd="url(#arrowhead)" />
                      <path d="M590 175 C640 175, 640 175, 690 175" fill="none" stroke="#DAE1E9" strokeWidth="2" markerEnd="url(#arrowhead)" />
                      <path d="M590 175 C640 175, 640 235, 690 235" fill="none" stroke="#DAE1E9" strokeWidth="2" markerEnd="url(#arrowhead)" />
                      <path d="M590 175 C640 175, 640 300, 690 300" fill="none" stroke="#DAE1E9" strokeWidth="2" markerEnd="url(#arrowhead)" />

                      {/* NODES */}
                      <g transform="translate(10, 155)">
                        <rect width="120" height="40" rx="20" fill="#E6EEFF" stroke="#2774AE" strokeWidth="2" />
                        <text x="60" y="25" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#16294E">Student/Learner</text>
                      </g>
                      <g transform="translate(220, 155)">
                        <rect width="160" height="40" rx="20" fill="#E6EEFF" stroke="#2774AE" strokeWidth="2" />
                        <text x="80" y="25" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#16294E">Create Account / Login</text>
                      </g>
                      <g transform="translate(470, 145)">
                        <rect width="120" height="60" rx="12" fill="#2774AE" className="shadow-lg" />
                        <text x="60" y="35" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#FFFFFF">Home Page</text>
                      </g>

                      {/* BRANCHES */}
                      <g transform="translate(690, 30)">
                        <rect width="140" height="40" rx="8" fill="white" stroke="#DAE1E9" strokeWidth="1" />
                        <text x="70" y="25" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#16294E">Dashboard</text>
                        <text x="150" y="25" fontSize="10" fill="#5A6B8F">• Progress & Analytics</text>
                      </g>
                      <g transform="translate(690, 95)">
                        <rect width="140" height="40" rx="8" fill="white" stroke="#DAE1E9" strokeWidth="1" />
                        <text x="70" y="25" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#16294E">Enrolled Courses</text>
                        <text x="150" y="25" fontSize="10" fill="#5A6B8F">• Resume where left off</text>
                      </g>
                      <g transform="translate(690, 155)">
                        <rect width="140" height="40" rx="8" fill="white" stroke="#DAE1E9" strokeWidth="1" />
                        <text x="70" y="25" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#16294E">Browse Courses</text>
                        <text x="150" y="25" fontSize="10" fill="#5A6B8F">• Search & Filtering</text>
                      </g>
                      <g transform="translate(690, 215)">
                        <rect width="140" height="40" rx="8" fill="white" stroke="#DAE1E9" strokeWidth="1" />
                        <text x="70" y="25" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#16294E">Popular / Trending</text>
                        <text x="150" y="25" fontSize="10" fill="#5A6B8F">• Recommended Topics</text>
                      </g>
                      <g transform="translate(690, 280)">
                        <rect width="140" height="40" rx="8" fill="white" stroke="#DAE1E9" strokeWidth="1" />
                        <text x="70" y="25" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#16294E">Community</text>
                        <text x="150" y="25" fontSize="10" fill="#5A6B8F">• Connect with peers</text>
                      </g>
                    </svg>
                  </div>
                </div>
              </section>
            </div>
          )}

          {activeTab === 'process' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Process */}
              <section>
                <div className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-2">Introduction to Wireframes</div>
                <h2 className="text-3xl font-bold mb-6">Understanding Maps &amp; Sketches</h2>
                
                <div className="bg-brand-bg/50 p-8 rounded-2xl mb-12 border border-brand-light">
                  <ul className="grid md:grid-cols-2 gap-6">
                    <li className="flex gap-3 items-start">
                      <span className="text-brand-primary text-xl">•</span>
                      <span className="text-brand-muted">Collaborated with teammate to outline target audience and key goals.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-brand-primary text-xl">•</span>
                      <span className="text-brand-muted">Created various user flow maps to visualize different student journeys and needs.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-brand-primary text-xl">•</span>
                      <span className="text-brand-muted">Sketched layouts by hand to brainstorm structure and features.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-brand-primary text-xl">•</span>
                      <span className="text-brand-muted">Mapped out multiple variations of the dashboard for different use cases.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-3">
                    <div className="bg-brand-bg border border-brand-light rounded-xl p-2 h-64 flex items-center justify-center">
                      <img src={new URL('../../images/road2/hand-sketch.png', import.meta.url).href} className="h-full object-contain mix-blend-multiply" alt="Hand Sketch" />
                    </div>
                    <p className="text-center text-xs font-bold text-brand-muted uppercase">First Pass Layout</p>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-brand-bg border border-brand-light rounded-xl p-2 h-64 flex items-center justify-center">
                      <img src={new URL('../../images/road2/alternate-home.png', import.meta.url).href} className="h-full object-contain mix-blend-multiply" alt="Shapes" />
                    </div>
                    <p className="text-center text-xs font-bold text-brand-muted uppercase">Alternate Home</p>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-brand-bg border border-brand-light rounded-xl p-2 h-64 flex items-center justify-center">
                      <img src={new URL('../../images/road2/navigation-pattern.png', import.meta.url).href} className="h-full object-contain mix-blend-multiply" alt="Wireframe" />
                    </div>
                    <p className="text-center text-xs font-bold text-brand-muted uppercase">Nav Pattern Test</p>
                  </div>
                </div>
              </section>
            </div>
          )}

          {activeTab === 'iterations' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Iterations Band */}
              <section className="bg-brand-bg rounded-2xl p-8 md:p-12">
                <div className="max-w-[1120px] mx-auto">
                  <h2 className="text-sm font-black text-brand-primary uppercase tracking-widest mb-8">Iterations</h2>
                  
                  <div className="space-y-16">
                    <div className="space-y-8">
                      <div className="max-w-3xl">
                        <h3 className="text-3xl font-bold text-brand-ink mb-4">Low to Mid Fidelity</h3>
                        <ul className="space-y-4 text-brand-muted">
                          <li className="flex gap-3">
                            <span className="text-brand-primary font-bold">•</span>
                            Built low-fidelity wireframes in Figma to test structure.
                          </li>
                          <li className="flex gap-3">
                            <span className="text-brand-primary font-bold">•</span>
                            Refined and iterated through designs to ensure navigation was clear for students.
                          </li>
                          <li className="flex gap-3">
                            <span className="text-brand-primary font-bold">•</span>
                            Gathered feedback from teammate and other teams, and refined flows based on collaboration.
                          </li>
                        </ul>
                      </div>

                      <div className="w-full max-w-4xl mx-auto bg-white p-2 rounded-xl shadow-lg border border-brand-light">
                         <img src={new URL('../../images/road2/iterations-1.png', import.meta.url).href} className="w-full h-auto object-cover rounded-lg" alt="Main Iteration Wide" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-6 items-start">
                      <div className="mt-0">
                        <img src={new URL('../../images/road2/iterations-2.png', import.meta.url).href} className="w-full rounded-lg border border-brand-light/50 shadow-sm hover:scale-105 transition-transform" alt="Iteration 1" />
                      </div>
                      <div className="mt-12">
                        <img src={new URL('../../images/road2/iterations-3.png', import.meta.url).href} className="w-full rounded-lg border border-brand-light/50 shadow-sm hover:scale-105 transition-transform" alt="Iteration 2" />
                      </div>
                      <div className="mt-4">
                        <img src={new URL('../../images/road2/iterations-4.png', import.meta.url).href} className="w-full rounded-lg border border-brand-light/50 shadow-sm hover:scale-105 transition-transform" alt="Iteration 3" />
                      </div>
                      <div className="mt-16">
                        <img src={new URL('../../images/road2/iterations-5.png', import.meta.url).href} className="w-full rounded-lg border border-brand-light/50 shadow-sm hover:scale-105 transition-transform" alt="Iteration 4" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}
          
          {activeTab === 'deliverables' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
               <section>
                 <div className="text-center mb-12">
                   <div className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-2">Final UI Designs</div>
                   <h2 className="text-3xl font-bold text-brand-ink">High Fidelity Deliverables</h2>
                   <p className="text-brand-muted mt-2">Key screens from the final student platform design.</p>
                 </div>

                 {/* UNIFORM GRID - All images same aspect ratio */}
                 <div className="grid md:grid-cols-2 gap-8">
                    {/* Dashboard */}
                    <div className="group space-y-3">
                       <div className="overflow-hidden rounded-xl border border-brand-light shadow-md aspect-[16/13]">
                          <img 
                            src={new URL('../../images/road2/Dashboard.png', import.meta.url).href} 
                            alt="Student Dashboard" 
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                          />
                       </div>
                       <div className="flex justify-between items-center px-1">
                          <p className="font-bold text-brand-ink text-sm uppercase tracking-wide">Student Dashboard</p>
                          <span className="text-xs text-brand-muted">Overview & Activity</span>
                       </div>
                    </div>

                    {/* Courses Grid - Mapped to Courses.png */}
                    <div className="group space-y-3">
                       <div className="overflow-hidden rounded-xl border border-brand-light shadow-md aspect-[16/13]">
                          <img 
                            src={new URL('../../images/road2/Courses.png', import.meta.url).href} 
                            alt="Courses Page" 
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                          />
                       </div>
                       <div className="flex justify-between items-center px-1">
                          <p className="font-bold text-brand-ink text-sm uppercase tracking-wide">My Courses</p>
                          <span className="text-xs text-brand-muted">Course Library</span>
                       </div>
                    </div>

                    {/* Course Overview - Mapped to Overview.png */}
                    <div className="group space-y-3">
                       <div className="overflow-hidden rounded-xl border border-brand-light shadow-md aspect-[16/13]">
                          <img 
                            src={new URL('../../images/road2/Overview.png', import.meta.url).href} 
                            alt="Course Detail" 
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                          />
                       </div>
                       <div className="flex justify-between items-center px-1">
                          <p className="font-bold text-brand-ink text-sm uppercase tracking-wide">Course Detail</p>
                          <span className="text-xs text-brand-muted">Syllabus & Progress</span>
                       </div>
                    </div>

                    {/* Lesson Page - PRESERVED FIX: object-[center_15%] */}
                    <div className="group space-y-3">
                       <div className="overflow-hidden rounded-xl border border-brand-light shadow-md aspect-[16/13]">
                          <img 
                            src={new URL('../../images/road2/LessonPage.png', import.meta.url).href} 
                            alt="Lesson Player" 
                            className="w-full h-full object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-500" 
                          />
                       </div>
                       <div className="flex justify-between items-center px-1">
                          <p className="font-bold text-brand-ink text-sm uppercase tracking-wide">Lesson View</p>
                          <span className="text-xs text-brand-muted">Video Learning</span>
                       </div>
                    </div>
                    
                    {/* Inbox - Now Uniform */}
                    <div className="group space-y-3">
                       <div className="overflow-hidden rounded-xl border border-brand-light shadow-md aspect-[16/13]">
                          <img 
                            src={new URL('../../images/road2/inbox.png', import.meta.url).href} 
                            alt="Student Inbox" 
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                          />
                       </div>
                       <div className="flex justify-between items-center px-1">
                          <p className="font-bold text-brand-ink text-sm uppercase tracking-wide">Messages</p>
                          <span className="text-xs text-brand-muted">Teacher Communication</span>
                       </div>
                    </div>

                 </div>
               </section>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}