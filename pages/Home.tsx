
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Globe from '../components/Globe.tsx';

export default function Home() {
  const [subIndex, setSubIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const subtitles = ["aspiring product designer", "cognitive science @ucla"];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setSubIndex((prev) => (prev + 1) % subtitles.length);
        setFade(true); // Start fade in
      }, 300); // Wait for fade out to finish
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center py-8 relative overflow-hidden">
      
      {/* Hero Inner: Grid Layout */}
      <div className="w-full max-w-[1120px] px-6 grid lg:grid-cols-[1fr_480px] gap-8 lg:gap-12 items-center">
        
        {/* LEFT COL: Content Stack */}
        <div className="flex flex-col items-start text-left relative z-20 order-2 lg:order-1 lg:translate-x-8 transition-transform">
          
          {/* 1. Animated Name with SVG Shimmer */}
          {/* Aligned left, removed negative margin to flush with text below */}
          <div className="w-full max-w-[500px] lg:max-w-[680px] mb-0">
            <svg viewBox="0 0 920 140" preserveAspectRatio="xMinYMid meet" className="w-full h-auto overflow-visible">
              <defs>
                {/* Radiating Blue -> Gold Gradient */}
                <linearGradient id="jeslynGrad" x1="-100%" y1="0%" x2="0%" y2="0%" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#2774AE" />
                  <stop offset="45%" stopColor="#2774AE" />
                  <stop offset="50%" stopColor="#FFD100" /> {/* Gold Core */}
                  <stop offset="55%" stopColor="#2774AE" />
                  <stop offset="100%" stopColor="#2774AE" />
                  {/* Moves the gradient across the text to create the radiation effect */}
                  <animate attributeName="x1" from="-100%" to="100%" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="x2" from="0%" to="200%" dur="4s" repeatCount="indefinite" />
                </linearGradient>
              </defs>
              
              <text 
                x="0" y="100" 
                textAnchor="start"
                fontFamily="'Poppins', system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
                fontWeight="900" 
                fontSize="110" 
                letterSpacing=".05em"
                className="hidden lg:block"
                fill="url(#jeslynGrad)"
              >
                jeslyndo
              </text>
              <text 
                x="50%" y="100" 
                textAnchor="middle"
                fontFamily="'Poppins', system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
                fontWeight="900" 
                fontSize="90" 
                letterSpacing=".05em"
                className="lg:hidden"
                fill="url(#jeslynGrad)"
              >
                jeslyndo
              </text>
            </svg>
          </div>

          {/* 2. Role / Subtitle (Flipping) */}
          <div className="h-10 mb-0 flex items-center justify-start pl-1">
            <h2 
              className={`text-xl md:text-3xl font-bold text-brand-ink tracking-wide transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}
            >
              {subtitles[subIndex]}
            </h2>
          </div>

          {/* 3. Tagline - Removed blue highlight, flushed left (pl-1) */}
          <div className="text-lg text-left text-brand-muted max-w-[500px] mb-0 font-medium flex flex-col gap-1 mt-2 pl-1">
            <span className="leading-tight">
              learning to craft with technology, express with design,
            </span>
            <span className="leading-tight">
              &amp; understand with empathy
            </span>
          </div>

          {/* 4. Call to Action Buttons - Flushed left (pl-1) */}
          <div className="flex gap-4 mt-6 pl-1">
            <Link 
              to="/projects" 
              className="px-8 py-3 bg-brand-primary text-white font-bold rounded-xl shadow-lg shadow-brand-primary/20 hover:bg-[#1e5f8f] hover:-translate-y-0.5 transition-all duration-200"
            >
              View Projects
            </Link>
          </div>

           {/* 5. Removed Caption Text */}
        </div>

        {/* RIGHT COL: Interactive Globe */}
        <div className="relative w-full max-w-[480px] aspect-square mx-auto lg:mx-0 flex items-center justify-center order-1 lg:order-2 lg:-translate-x-8 transition-transform">
          <div className="w-full h-full relative z-10"> 
            <Globe />
          </div>
          
          {/* RESTORED SPHERE SHADOW BELOW GLOBE */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-0"
            style={{
              top: '88%', // Positioned near bottom of sphere
              width: '112%', 
              height: '26%',
              borderRadius: '50%',
              mixBlendMode: 'multiply',
              filter: 'blur(6px)',
              background: `
                radial-gradient(62% 70% at 50% 42%, rgba(39,116,174,0.28) 0%, rgba(39,116,174,0.16) 46%, rgba(39,116,174,0.10) 68%, rgba(39,116,174,0) 100%),
                radial-gradient(75% 70% at 50% 58%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 70%),
                radial-gradient(80% 80% at 50% 50%, rgba(20,40,80,0.08) 0%, rgba(20,40,80,0) 70%)
              `,
              boxShadow: '0 16px 70px rgba(39,116,174,0.18), 0 36px 140px rgba(39,116,174,0.12)'
            }}
           />
        </div>

      </div>
      
      {/* Removed Mobile Caption */}
    </div>
  );
}
