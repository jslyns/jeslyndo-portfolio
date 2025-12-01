
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Layout, Database, FileText, Mail, ChevronLeft } from 'lucide-react';

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

// A reusable "Card" component to keep things consistent
const ContentCard = ({ title, icon: Icon, children }: { title: string; icon: any; children: React.ReactNode }) => (
  <div className="bg-white border border-brand-light p-6 md:p-8 rounded-2xl shadow-sm h-full">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-brand-primary/10 text-brand-primary rounded-lg">
        <Icon size={20} />
      </div>
      <h3 className="font-bold text-brand-ink text-lg">{title}</h3>
    </div>
    {children}
  </div>
);

export default function ProjectHubspot() {
  const [activeTab, setActiveTab] = useState<'challenge' | 'strategy' | 'deliverables' | 'reflection'>('challenge');

  return (
    <div className="pb-20 animate-fade-in font-['Poppins']">
      
      {/* 1. Header / Context */}
      <div className="bg-brand-bg border-b border-brand-light pt-12 pb-16">
        <div className="max-w-[1120px] mx-auto px-6">
          
          {/* Back Link */}
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-primary transition-colors mb-6 font-bold text-sm"
          >
            <ChevronLeft size={16} /> Back
          </Link>

          {/* Grid Removed: Just content now since graphic was removed */}
          <div className="max-w-4xl">
               {/* Updated Pill to match MobileApp styling */}
               <div className="inline-block px-3 py-1 bg-brand-accent/20 text-brand-ink font-bold rounded-md text-sm mb-6 uppercase tracking-wide">
                 Marketing AI Internship
               </div>
               
               <h1 className="text-4xl md:text-6xl font-black mb-6 text-brand-ink leading-tight">
                 HubSpot &amp; AeroDefense
               </h1>
               
               <p className="text-lg text-brand-muted leading-relaxed mb-8">
                 Developed a comprehensive AI marketing campaign for a drone detection technology firm. I created detailed user personas, blog posts, email workflows, and landing pages within HubSpot CRM.
               </p>

               <div className="flex flex-wrap gap-4 text-sm font-medium text-brand-ink">
                 <span className="px-3 py-1 bg-white rounded-md border border-brand-light">HubSpot CRM</span>
                 <span className="px-3 py-1 bg-white rounded-md border border-brand-light">HubSpot AI Tools</span>
                 <span className="px-3 py-1 bg-white rounded-md border border-brand-light">Persona Development</span>
                 <span className="px-3 py-1 bg-white rounded-md border border-brand-light">B2B Strategy</span>
               </div>
          </div>
        </div>
      </div>

      {/* 2. Main Content */}
      <div className="max-w-[1120px] mx-auto px-6 mt-12">
        
        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-8 p-2 bg-white rounded-full border border-brand-light w-fit shadow-sm">
          <TabButton active={activeTab === 'challenge'} onClick={() => setActiveTab('challenge')}>The Challenge</TabButton>
          <TabButton active={activeTab === 'strategy'} onClick={() => setActiveTab('strategy')}>Strategy &amp; Execution</TabButton>
          <TabButton active={activeTab === 'deliverables'} onClick={() => setActiveTab('deliverables')}>Deliverables</TabButton>
          <TabButton active={activeTab === 'reflection'} onClick={() => setActiveTab('reflection')}>Reflection</TabButton>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl border border-brand-light shadow-xl p-8 md:p-12 min-h-[500px]">
          
          {activeTab === 'challenge' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* The Challenge */}
              <section className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-6">The Challenge</h2>
                  <p className="text-lg text-brand-muted leading-relaxed mb-4">
                    AeroDefense needed a structured marketing campaign to promote its drone defense technology to a very specific audience: professionals in Defense, Government, and Law Enforcement.
                  </p>
                  <p className="text-lg text-brand-muted leading-relaxed">
                    The challenge was to create a cohesive content strategy that was targeted, delivered across multiple channels (blogs, landing pages, emails), and visually consistent with the brand.
                  </p>
                </div>
                {/* Abstract Stat Card */}
                <div className="grid grid-cols-2 gap-4">
                   <div className="bg-brand-bg p-6 rounded-xl border border-brand-light text-center">
                      <div className="text-3xl font-black text-brand-primary mb-1">B2B</div>
                      <div className="text-xs font-bold uppercase text-brand-muted">Target Audience</div>
                   </div>
                   <div className="bg-brand-bg p-6 rounded-xl border border-brand-light text-center">
                      <div className="text-3xl font-black text-brand-primary mb-1">3 Mo</div>
                      <div className="text-xs font-bold uppercase text-brand-muted">Campaign Duration</div>
                   </div>
                </div>
              </section>
            </div>
          )}

          {activeTab === 'strategy' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* 3. Visualizing the Strategy */}
              <section>
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-4">Strategy &amp; Execution</h2>
                  <p className="text-brand-muted max-w-2xl text-lg">
                    I bridged the gap between UX research and marketing automation. My role required using design thinking to build personas and tailor content to specific customer audiences.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Step 1: Research */}
                  <ContentCard title="1. Research & Personas" icon={Users}>
                    <p className="text-sm text-brand-muted mb-4 leading-relaxed">
                      Created detailed buyer personas in HubSpot CRM (Defense, Government, Security). This informed the emotional tone and technical depth of the content.
                    </p>
                    <div className="bg-brand-bg rounded-lg p-4 border border-brand-light space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-brand-light rounded-full"></div>
                        <div className="h-2 w-24 bg-brand-light rounded"></div>
                      </div>
                      <div className="flex gap-2 mt-2">
                        <span className="px-2 py-0.5 bg-brand-primary/10 text-[10px] text-brand-primary rounded font-bold">Govt</span>
                        <span className="px-2 py-0.5 bg-brand-primary/10 text-[10px] text-brand-primary rounded font-bold">Defense</span>
                      </div>
                    </div>
                  </ContentCard>

                  {/* Step 2: Content */}
                  <ContentCard title="2. Content & Design" icon={FileText}>
                    <p className="text-sm text-brand-muted mb-4 leading-relaxed">
                      Designed visual assets and wrote content for an 8-part blog series. Iterated weekly with the Marketing Manager to ensure brand consistency.
                    </p>
                    <div className="space-y-2">
                       <div className="flex items-center justify-between text-xs font-bold text-brand-ink bg-brand-bg p-2 rounded border border-brand-light">
                          <span>Blog Series</span>
                          <span className="text-green-600">8 Posts</span>
                       </div>
                       <div className="flex items-center justify-between text-xs font-bold text-brand-ink bg-brand-bg p-2 rounded border border-brand-light">
                          <span>Visual Assets</span>
                          <span className="text-green-600">Brand Aligned</span>
                       </div>
                    </div>
                  </ContentCard>

                  {/* Step 3: Automation */}
                  <ContentCard title="3. CRM Execution" icon={Layout}>
                    <p className="text-sm text-brand-muted mb-4 leading-relaxed">
                      Built the campaign in HubSpot. Leveraged HubSpot's AI tools to fine-tune tone and set up automated email workflows mapping the user journey.
                    </p>
                    <div className="flex flex-col items-center gap-2 text-brand-muted">
                       <div className="px-3 py-1 bg-white border border-brand-light rounded text-xs font-bold">User Journey</div>
                       <div className="h-3 w-0.5 bg-brand-light"></div>
                       <div className="px-3 py-1 bg-brand-primary/10 text-brand-primary border border-brand-primary/20 rounded text-xs font-bold">AI Optimization</div>
                       <div className="h-3 w-0.5 bg-brand-light"></div>
                       <div className="px-3 py-1 bg-white border border-brand-light rounded text-xs font-bold">Automated Flow</div>
                    </div>
                  </ContentCard>
                </div>
              </section>
            </div>
          )}

          {activeTab === 'deliverables' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* 4. Outcomes & Deliverables */}
              <section className="bg-brand-ink rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
                 
                 <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">Deliverables</h2>
                      <p className="text-brand-light/80 leading-relaxed text-lg">
                         The outcome was a complete, ready-to-launch campaign tailored to the client's specific customer audience. I successfully connected UX research methods with marketing strategy.
                      </p>
                    </div>
                    
                    <div className="grid gap-6">
                       <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
                          <div className="p-3 bg-brand-accent text-brand-ink rounded-lg">
                             <FileText size={24} />
                          </div>
                          <div>
                             <div className="text-3xl font-black">8 Blogs</div>
                             <div className="text-sm font-medium text-brand-light/70">Content Series Created</div>
                          </div>
                       </div>
                       
                       <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
                          <div className="p-3 bg-brand-primary text-white rounded-lg">
                             <Mail size={24} />
                          </div>
                          <div>
                             <div className="text-3xl font-black">8 Emails</div>
                             <div className="text-sm font-medium text-brand-light/70">Automated Workflows</div>
                          </div>
                       </div>

                       <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
                          <div className="p-3 bg-brand-primary text-white rounded-lg">
                             <Layout size={24} />
                          </div>
                          <div>
                             <div className="text-3xl font-black">3 Pages</div>
                             <div className="text-sm font-medium text-brand-light/70">Landing Pages Designed</div>
                          </div>
                       </div>
                    </div>
                 </div>
              </section>
            </div>
          )}

          {activeTab === 'reflection' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* 5. Reflection */}
              <section className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-ink mb-6">What I Learned & Next Steps</h2>
                
                <div className="grid md:grid-cols-2 gap-8 text-left bg-brand-bg p-8 rounded-2xl border border-brand-light">
                   <div>
                     <h4 className="font-bold text-brand-ink text-lg mb-4 text-brand-primary">What I Learned</h4>
                     <ul className="list-disc pl-5 space-y-3 text-sm text-brand-muted leading-relaxed">
                       <li>
                         Learned to connect <strong>UX research methods</strong> (personas, iteration, feedback) with <strong>marketing strategy</strong>.
                       </li>
                       <li>
                         Gained experience in designing digital assets for a real world client.
                       </li>
                       <li>
                         Built confidence in presenting ideas to a client and incorporating feedback.
                       </li>
                       <li>
                         Discovered how user-centered thinking extends beyond products and into marketing and communication.
                       </li>
                     </ul>
                   </div>
                   <div>
                     <h4 className="font-bold text-brand-ink text-lg mb-4 text-brand-primary">Next Steps</h4>
                     <p className="text-sm text-brand-muted mb-3">If I were to extend this project, I would:</p>
                     <ul className="list-disc pl-5 space-y-3 text-sm text-brand-muted leading-relaxed">
                       <li>
                         Conduct usability testing on landing pages and emails.
                       </li>
                       <li>
                         Build a design system for campaign assets to ensure scalability.
                       </li>
                       <li>
                         Leverage <strong>HubSpot's analytic tools</strong> to track customer engagement (email open rates, click-throughs, conversions) and use these insights to further optimize campaign performance.
                       </li>
                     </ul>
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
