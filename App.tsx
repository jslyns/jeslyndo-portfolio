
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Projects from './pages/Projects.tsx';
import Contact from './pages/Contact.tsx';
import Resume from './pages/Resume.tsx';
import ProjectMobileApp from './pages/projects/MobileApp.tsx';
import ProjectRoad2 from './pages/projects/Road2.tsx';
import ProjectGraphics from './pages/projects/Graphics.tsx';
import ProjectHubspot from './pages/projects/Hubspot.tsx';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-brand-ink antialiased">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/mobile-app" element={<ProjectMobileApp />} />
            <Route path="/projects/road2" element={<ProjectRoad2 />} />
            <Route path="/projects/graphics" element={<ProjectGraphics />} />
            <Route path="/projects/hubspot" element={<ProjectHubspot />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
