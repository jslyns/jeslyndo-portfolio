
import React, { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

/* Version 11.3 - Fixed to Lowercase Extensions per Repository State */
export default function About() {
  const [showLeaderModal, setShowLeaderModal] = useState(false);

  return (
    <div className="py-12 md:py-24 overflow-hidden font-['Poppins']">
      <div className="max-w-[1120px] mx-auto px-6 space-y-20">
        
        {/* Hero Section */}
        <section className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start animate-fade-in">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase text-brand-ink mb-2">
                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-[#4C9AFF] to-brand-primary animate-shimmer bg-[length:200%_100%]">Jeslyn</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-muted">
                Aspiring product designer &amp; UX researcher
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-brand-muted leading-relaxed max-w-prose">
              <p>
                Based in Irvine, CA, I am currently majoring in <strong className="text-brand-primary">Cognitive Science at UCLA</strong>.
              </p>
              <p>
                Ultimately, my passion for design comes from noticing how often good design is overlooked in favor for what is flashier, more complex, or technically impressive.
              </p>
              <p>
                I believe digital products are only truly successful when they’re intuitive, user-centered, and provide a seamless experience. While many focus on logic and optimization, I want to extend that work by designing products that aren’t just functional, but also meaningful and enjoyable to use.
              </p>
              <p className="italic text-base opacity-80">
                When I'm not designing, you'll see me studying at cafes (trying to justify the price of the $9 matcha I just bought), enjoying nice sunsets, and collecting Smiskis.
              </p>
            </div>
          </div>
          
          <div className="relative group cursor-grab active:cursor-grabbing transform-gpu">
             {/* Decorative elements behind image */}
             <div className="absolute -inset-4 bg-brand-light rounded-[2rem] -rotate-2 scale-95 group-hover:rotate-1 transition-transform duration-500 will-change-transform" />
             <div className="absolute -inset-4 bg-brand-primary/5 rounded-[2rem] rotate-3 scale-95 group-hover:-rotate-1 transition-transform duration-700 delay-75 will-change-transform" />
             
             <div className="relative aspect-[4/5] bg-white rounded-2xl shadow-2xl border border-white p-2 rotate-1 group-hover:rotate-0 transition-transform duration-500 overflow-hidden will-change-transform">
               {/* FIXED: Reverted to .jpg (lowercase) to match repository */}
               <img 
                 src={new URL('../images/about/Jes-Croatia.jpg', import.meta.url).href}
                 onError={(e) => e.currentTarget.src = "https://picsum.photos/seed/bruin/800/1000"}
                 alt="Jeslyn at UCLA" 
                 className="w-full h-full object-cover rounded-xl" 
                 decoding="async"
               />
             </div>
          </div>
        </section>

        {/* Skills / Roles */}
        <section className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-brand-primary/10"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-brand-bg px-4 text-sm font-black text-brand-primary uppercase tracking-widest">Outside UX</span>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Graphic Designer", 
                src: new URL('../images/about/graphic-designer.png', import.meta.url).href, 
                isVideo: false, 
                link: "/projects/graphics" 
              },
              { 
                title: "Student Leader", 
                src: new URL('../images/ivc/ivc-video.mp4', import.meta.url).href, 
                isVideo: true, 
                action: () => setShowLeaderModal(true) 
              },
              { 
                title: "Web UI Designer", 
                src: new URL('../images/about/web-designer.jpg', import.meta.url).href, 
                isVideo: false 
              }
            ].map((skill, i) => {
              // Common card content
              const CardContent = (
                <>
                  <div className="relative z-20 bg-brand-light/20 p-6 border-b border-brand-light flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-xl text-brand-ink">{skill.title}</h3>
                      {skill.title === "Student Leader" && (
                        <button 
                          type="button"
                          className="cursor-pointer text-xs font-bold text-brand-primary bg-brand-primary/10 px-3 py-1.5 rounded-md hover:bg-brand-primary hover:text-white transition-colors z-30 relative"
                        >
                          Learn More
                        </button>
                      )}
                      {skill.link && (
                         <div className="text-xs font-bold text-brand-primary bg-brand-primary/10 px-3 py-1.5 rounded-md hover:bg-brand-primary hover:text-white transition-colors z-30 relative flex items-center gap-1">
                           View
                         </div>
                      )}
                    </div>
                  </div>
                  <div className="aspect-[4/3] overflow-hidden relative z-10">
                    <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/10 transition-colors z-20 pointer-events-none" />
                    
                    {skill.isVideo ? (
                      <video 
                        src={skill.src} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform"
                        autoPlay 
                        muted 
                        loop 
                        playsInline 
                        preload="metadata"
                      />
                    ) : (
                      <img 
                        src={skill.src} 
                        alt={skill.title} 
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform" 
                      />
                    )}
                  </div>
                </>
              );

              // Conditional Wrapper: Link for Graphics, Div for others (with click handler for modal)
              const cardClasses = "group bg-white rounded-2xl overflow-hidden border border-brand-light shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform-gpu will-change-transform cursor-pointer block";

              if (skill.link) {
                return (
                  <Link key={i} to={skill.link} className={cardClasses}>
                    {CardContent}
                  </Link>
                );
              }

              return (
                <div 
                  key={i} 
                  className={cardClasses}
                  onClick={skill.action ? skill.action : undefined}
                >
                  {CardContent}
                </div>
              );
            })}
          </div>
        </section>

        {/* Philosophy */}
        <section className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-gradient-to-br from-[#16294E] to-[#274B8F] p-10 md:p-12 rounded-[2.5rem] text-white shadow-2xl flex flex-col transform-gpu">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-4 opacity-80">Origin Story</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">The art of noticing.</h3>
            <div className="space-y-6 text-brand-light/90 leading-relaxed text-lg">
              <p>I often noticed public restrooms that weren't accessible, with wide gaps in stall doors and a lack of basic accommodations.</p>
              <p>I found apps that frustrated me, ones filled with unnecessary, complicated, and overwhelming features.</p>
              <div className="pt-4 border-t border-white/10">
                <p className="font-medium text-white">But it also allowed me to recognize good design, so seamless you barely notice it at all.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-brand-light shadow-xl flex flex-col transform-gpu">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4">My Design Philosophy</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-brand-ink leading-tight">Good things have intention.</h3>
            <div className="space-y-6 text-brand-muted leading-relaxed text-lg">
              <p>Just like meaningful conversations and thoughtful actions, good design begins with intention.</p>
              <p>It starts with understanding people and finding ways to make their everyday experiences better.</p>
              <div className="pt-4 border-t border-brand-light">
                <p className="font-bold text-brand-ink">Good design isn't arbitrary. It is the result of deliberate choices, purposeful planning, and a clear sense of purpose.</p>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* COMPACT MODAL FOR STUDENT LEADER */}
      {showLeaderModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-brand-ink/60 backdrop-blur-sm animate-fade-in">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-[800px] flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setShowLeaderModal(false)}
              className="absolute top-4 right-4 z-50 p-2 bg-white/80 rounded-full hover:bg-brand-light transition-colors cursor-pointer shadow-sm"
            >
              <X size={20} />
            </button>

            {/* Left Picture - Compact Square-ish */}
            <div className="md:w-[300px] bg-gray-100 min-h-[200px] md:min-h-full relative">
              {/* FIXED: Reverted to .jpeg (lowercase) to match repository */}
              <img 
                src={new URL('../images/ivc/Student Leader/jeslyn-ivc.jpeg', import.meta.url).href}
                onError={(e) => e.currentTarget.src = "https://picsum.photos/seed/ivc/400/400"} 
                alt="Student Leader" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Right Text */}
            <div className="p-8 md:p-10 md:flex-1 flex flex-col bg-white">
              <div className="text-xs font-black uppercase tracking-widest text-brand-primary mb-3">Student Leadership</div>
              <h3 className="text-3xl font-bold text-brand-ink mb-4 leading-tight">IVC Student Ambassador</h3>
              
              <div className="prose prose-sm text-brand-muted leading-relaxed mb-8">
                <p>
                  As 1 of 12 student ambassadors working alongside outreach specialists, I represented Irvine Valley College across campus and community outreach initiatives.
                </p>
                <p className="mt-3">
                  I provided campus tours, tabled at high schools, and participated in conferences, presentations, and college fairs. Most importantly, I shared my own student story, giving others a voice and perspective they could resonate with.
                </p>
              </div>

              {/* FEATURED ARTICLE LINK */}
              <div className="mt-auto pt-6 border-t border-brand-light">
                 <h4 className="text-xs font-bold uppercase tracking-widest text-brand-muted mb-3">Featured In</h4>
                 <a 
                  href="https://www.ivc.edu/article-news/jeslyn-do-irvine-high-school-graduate-cognitive-science-and-informatics-major-and" 
                  target="_blank" 
                  rel="noreferrer"
                  className="group block bg-brand-bg hover:bg-brand-primary/5 border border-brand-light rounded-xl p-4 transition-all"
                 >
                   <div className="flex items-start justify-between">
                      <div>
                        <div className="font-bold text-brand-ink group-hover:text-brand-primary transition-colors">IVC Student Success Story</div>
                        <div className="text-xs text-brand-muted mt-1">"Jeslyn Do: Cognitive Science and Informatics Major"</div>
                      </div>
                      <ExternalLink size={16} className="text-brand-muted group-hover:text-brand-primary transition-colors mt-1" />
                   </div>
                 </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
