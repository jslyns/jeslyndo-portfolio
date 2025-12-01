
import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ExternalLink, Check, ChevronLeft } from 'lucide-react';

export default function ProjectGraphics() {
  return (
    <div className="pb-24 font-['Poppins']">
      
      {/* 1. HERO & AWARD SECTION (The Hook) */}
      <div className="bg-brand-bg pt-20 pb-16 border-b border-brand-light">
        <div className="max-w-[1120px] mx-auto px-6 text-center">
          
          {/* Back Link - Moved up by reducing bottom margin to mb-3 and negative top margin if needed, 
              or we can place it absolutely. Here I'll just use a smaller mb and ensure it looks lifted. 
              Actually, "bring back link up 1/2 inch" implies less space between it and the top container edge.
              I will change pt-20 to pt-12 and mb-6 to mb-8 to balance it. 
          */}
          <div className="flex justify-start mb-8 -mt-8">
             <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-primary transition-colors font-bold text-sm"
            >
              <ChevronLeft size={16} /> Back
            </Link>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-brand-ink mb-8">Graphics Design Collection</h1>
          
          {/* Award Pill */}
          <div className="inline-flex items-center gap-3 bg-[#eaf1ff] border-2 border-[#d4e3ff] text-[#2b4c93] px-6 py-3 rounded-full text-lg md:text-xl font-bold mb-8 shadow-sm">
            <Award size={24} />
            <span>2023 OC Register • Finalist — Media Arts</span>
          </div>

          <div className="max-w-2xl mx-auto text-brand-muted text-lg leading-relaxed mb-12">
            <p className="mb-4">
              Nominated by my graphics design teacher and selected as 1 of 77 countywide nominees. 
              I advanced through interview phases to become one of 16 semifinalists, and ultimately the <strong>Finalist in Graphics Design</strong>.
            </p>
          </div>

          {/* Award Gallery (From Panel 6) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
             <div className="aspect-[4/5] bg-white p-2 rounded-2xl shadow-md border border-brand-light transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
               <img src={new URL('../../images/OC-Artist/Newspaper.jpeg', import.meta.url).href} className="w-full h-full object-cover rounded-xl" alt="Newspaper Feature" />
             </div>
             <div className="aspect-[4/5] bg-white p-2 rounded-2xl shadow-md border border-brand-light transform translate-y-4 hover:translate-y-0 transition-transform duration-300">
               <img src={new URL('../../images/OC-Artist/Explore.jpg', import.meta.url).href} className="w-full h-full object-cover rounded-xl" alt="Exploration Piece" />
             </div>
             <div className="aspect-[4/5] bg-white p-2 rounded-2xl shadow-md border border-brand-light transform rotate-[2deg] hover:rotate-0 transition-transform duration-300">
               <img src={new URL('../../images/OC-Artist/Building.png', import.meta.url).href} className="w-full h-full object-cover rounded-xl" alt="Building Illustration" />
             </div>
             <div className="aspect-[4/5] bg-white p-2 rounded-2xl shadow-md border border-brand-light transform translate-y-4 hover:translate-y-0 transition-transform duration-300">
               <img src={new URL('../../images/OC-Artist/Illustrations.png', import.meta.url).href} className="w-full h-full object-cover rounded-xl" alt="Character Illustrations" />
             </div>
          </div>
          
          <div className="mt-12">
             <a 
               href="https://www.ocregister.com/2023/04/30/artist-of-the-year-2023-for-media-arts-zachary-cramer/#:~:text=Jeslyn%20Do"
               target="_blank"
               rel="noreferrer"
               className="inline-flex items-center gap-2 font-bold text-brand-primary border-b-2 border-brand-primary/20 hover:border-brand-primary transition-colors pb-1"
             >
               Read the Article <ExternalLink size={16} />
             </a>
          </div>
        </div>
      </div>

      {/* 2. STAINLESS CAT (Sticky Sidebar Layout) */}
      <section className="max-w-[1120px] mx-auto px-6 py-24 border-b border-brand-light">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24 items-start">
          
          {/* Sticky Text Side */}
          <div className="lg:sticky lg:top-32 space-y-4">
            <div>
              <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 font-bold rounded-md text-xs uppercase tracking-wide mb-4">
                Branding &amp; UI Mockup
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-brand-ink leading-none mb-6">Stainless<br/>Cat</h2>
              
              {/* REMOVED Slogan / Pull Quote per request */}

              <div className="prose text-brand-muted leading-relaxed text-lg">
                <p>
                  An imaginative jewelry brand brought to life through visual graphics, comprehensive branding, and UI mockups.
                </p>
                <p>
                  This project was about setting a distinct visual tone and carrying that identity across different mediums, from a brand "stylescape" to a functional shopping app interface.
                </p>
              </div>
            </div>

            {/* Scope Checklist */}
            <div className="bg-brand-bg/50 p-6 rounded-2xl border border-brand-light mt-4">
               <h4 className="font-bold text-brand-ink uppercase text-xs tracking-widest mb-4">Project Scope</h4>
               <ul className="space-y-3 text-sm font-medium text-brand-muted">
                  <li className="flex items-center gap-3">
                    <div className="bg-brand-primary/10 p-1 rounded-full text-brand-primary"><Check size={12} /></div>
                    Brand Identity System
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-brand-primary/10 p-1 rounded-full text-brand-primary"><Check size={12} /></div>
                    Visual Stylescape
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-brand-primary/10 p-1 rounded-full text-brand-primary"><Check size={12} /></div>
                    Mobile App Interface (Adobe XD)
                  </li>
               </ul>
            </div>
            
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-gray-100 text-brand-muted text-xs font-bold rounded-full">Adobe Illustrator</span>
              <span className="px-3 py-1 bg-gray-100 text-brand-muted text-xs font-bold rounded-full">Adobe Photoshop</span>
              <span className="px-3 py-1 bg-gray-100 text-brand-muted text-xs font-bold rounded-full">Adobe XD</span>
            </div>
          </div>

          {/* Scrolling Image Side */}
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-sm border border-brand-light">
                 <img src={new URL('../../images/graphic-design/stainless-cat-stylescape.jpg', import.meta.url).href} alt="Brand Stylescape" className="w-full h-auto" />
              </div>
              <div className="p-2 text-center text-xs text-brand-muted font-bold uppercase tracking-widest">Brand Style Scape</div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <img src={new URL('../../images/graphic-design/stainless-cat1.jpg', import.meta.url).href} className="rounded-xl border border-brand-light shadow-sm" alt="Asset 1" />
              <img src={new URL('../../images/graphic-design/stainless-cat2.png', import.meta.url).href} className="rounded-xl border border-brand-light shadow-sm" alt="Asset 2" />
            </div>

            {/* App Section Header */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                 <div className="h-px flex-1 bg-brand-light"></div>
                 <h3 className="text-2xl font-black text-brand-ink uppercase tracking-tight">The App Interface</h3>
                 <div className="h-px flex-1 bg-brand-light"></div>
              </div>
              
              <div className="bg-brand-bg p-8 rounded-[2rem] border border-brand-light shadow-inner">
                 <p className="text-center text-brand-muted mb-8 max-w-lg mx-auto">
                   Designing a cohesive mobile shopping experience that reflects the brand's metallic and playful personality.
                 </p>
                 
                 {/* MASONRY LAYOUT: Uses 'columns' instead of 'grid' to pack varying heights tightly */}
                 <div className="columns-2 md:columns-3 gap-4 space-y-4">
                    
                    {/* Standard: Home Screen */}
                    <div className="break-inside-avoid bg-white p-1 rounded-xl shadow-sm border border-brand-light/50">
                      <img src={new URL('../../images/graphic-design/stainless-cat-app1.png', import.meta.url).href} className="rounded-lg w-full" alt="Home Screen" />
                    </div>
                    
                    {/* Standard: Product Detail */}
                    <div className="break-inside-avoid bg-white p-1 rounded-xl shadow-sm border border-brand-light/50">
                      <img src={new URL('../../images/graphic-design/stainless-cat-app2.png', import.meta.url).href} className="rounded-lg w-full" alt="Product Detail" />
                    </div>

                    {/* Standard: Cart */}
                    <div className="break-inside-avoid bg-white p-1 rounded-xl shadow-sm border border-brand-light/50">
                      <img src={new URL('../../images/graphic-design/stainless-cat-app3.png', import.meta.url).href} className="rounded-lg w-full" alt="Cart" />
                    </div>

                    {/* Standard: Profile */}
                    <div className="break-inside-avoid bg-white p-1 rounded-xl shadow-sm border border-brand-light/50">
                      <img src={new URL('../../images/graphic-design/stainless-cat-app4.png', import.meta.url).href} className="rounded-lg w-full" alt="Profile" />
                    </div>

                    {/* Long Vertical: About Us - MOVED TO END to fill far right column */}
                    <div className="break-inside-avoid bg-white p-1 rounded-xl shadow-sm border border-brand-light/50">
                      <img src={new URL('../../images/graphic-design/stainless-cat-app8.png', import.meta.url).href} className="rounded-lg w-full" alt="About Us" />
                    </div>

                 </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. IVC MARKETING (Grid) */}
      <section className="max-w-[1120px] mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-brand-ink mb-4">PR &amp; Marketing Director</h2>
          <p className="text-brand-muted">
            Created visual graphics, flyers, and social media posts to promote club events for the Business Leaders Society at Irvine Valley College.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {[
            { src: new URL('../../images/graphic-design/ivc-industry.png', import.meta.url).href, title: "Choose Your Industry" },
            { src: new URL('../../images/graphic-design/ivc-career-matchmaking.png', import.meta.url).href, title: "Career Matchmaking" },
            { src: new URL('../../images/graphic-design/ivc-summit.png', import.meta.url).href, title: "Summit Objectives" },
            { src: new URL('../../images/graphic-design/ivc-entrepreneur.png', import.meta.url).href, title: "Entrepreneur Workshop" },
            { src: new URL('../../images/graphic-design/resume-workshop.png', import.meta.url).href, title: "Resume Workshop" },
            { src: new URL('../../images/graphic-design/ivc-overview.png', import.meta.url).href, title: "Club Overview" },
          ].map((item, i) => (
            <div key={i} className="break-inside-avoid bg-white p-2 rounded-2xl border border-brand-light shadow-sm hover:shadow-lg transition-all duration-300">
              <img src={item.src} className="w-full rounded-xl" alt={item.title} />
              <div className="p-4">
                <h3 className="font-bold text-brand-ink text-sm">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
