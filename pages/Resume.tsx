
import React from 'react';
import { Download } from 'lucide-react';

/* 
  Resume Page
  - Layout: Two columns (Main Content Left, Sidebar Right)
  - Mobile: Sidebar moves to top (order-first)
  - Content: Preserved from user HTML with spelling fixes applied.
*/

export default function Resume() {
  return (
    <div className="bg-[#f6fbff] min-h-screen font-sans text-[#2c4a7a] pb-20">
      
      {/* Page Header */}
      <div className="max-w-[1180px] mx-auto px-5 pt-8 pb-4 flex items-center justify-between">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide text-[#1e2b4a]">Resume</h1>
        
        {/* Download Button */}
        <a 
          href="/JeslynDo.pdf" 
          download="Jeslyn_Do_Resume.pdf"
          className="flex items-center gap-2 bg-brand-primary text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-[#1e5f8f] transition-colors shadow-sm"
        >
          <Download size={16} />
          <span>Download PDF</span>
        </a>
      </div>

      {/* Layout Columns */}
      <div className="max-w-[1180px] mx-auto px-5 grid lg:grid-cols-[1fr_420px] gap-3">
        
        {/* RIGHT COLUMN (Sidebar) - Displayed FIRST on Mobile */}
        {/* CHANGED: Removed 'h-fit' so it stretches, added 'h-full' to inner div */}
        <aside className="order-1 lg:order-2">
          <div className="bg-gradient-to-b from-[#eaf3ff] to-[#e6f0ff] border border-[#d6e6ff] rounded-[18px] shadow-sm overflow-hidden p-6 text-[#1e2b4a] h-full">
            
            {/* CONTACT */}
            <div className="mb-6">
              <h2 className="text-[#213b70] font-extrabold text-base mb-1">Contact</h2>
              <div className="h-[3px] w-[180px] bg-[#5aa0ff] rounded-full mb-3"></div>
              
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-3">
                  <div className="w-5 flex justify-center text-[#1e2b4a]">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/></svg>
                  </div>
                  <a href="mailto:jesdo0405@gmail.com" className="underline hover:text-brand-primary">jesdo0405@gmail.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 flex justify-center text-[#1e2b4a]">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1.1-.23c1.26.41 2.56.63 3.9.63a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1A17.5 17.5 0 0 1 2 6a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.34.22 2.64.63 3.9a1 1 0 0 1-.23 1.1L6.6 10.8Z"/></svg>
                  </div>
                  <a href="tel:+19498121325" className="underline hover:text-brand-primary">(949)-812-1325</a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 flex justify-center text-[#1e2b4a]">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/></svg>
                  </div>
                  <span>Irvine, CA</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 flex justify-center text-[#1e2b4a]">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true"><path d="M4.98 3.5A2.48 2.48 0 1 1 0 3.5 2.48 2.48 0 0 1 4.98 3.5zM.5 8h4v15h-4V8zm8 0h3.8v2.05h.05c.53-1 1.82-2.05 3.75-2.05 4 0 4.75 2.63 4.75 6.06V23h-4v-6.65c0-1.58-.03-3.62-2.21-3.62-2.21 0-2.55 1.72-2.55 3.51V23h-4V8z"/></svg>
                  </div>
                  <a href="https://www.linkedin.com/in/jeslyn-do-75216b357/" target="_blank" rel="noreferrer" className="underline hover:text-brand-primary">LinkedIn</a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 flex justify-center text-[#1e2b4a]">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true"><path d="M3 3h8v8H3V3Zm10 0h8v8h-8V3ZM3 13h8v8H3v-8Zm10 0h8v8h-8v-8Z"/></svg>
                  </div>
                  <a href="/" className="underline hover:text-brand-primary">Design Portfolio</a>
                </li>
              </ul>
            </div>

            {/* EDUCATION */}
            <div className="mb-6">
              <h2 className="text-[#213b70] font-extrabold text-base mb-1">Education</h2>
              <div className="h-[3px] w-[180px] bg-[#5aa0ff] rounded-full mb-3"></div>

              <div className="mb-4">
                <p className="font-bold mb-0.5 text-[#1e2b4a]">Cognitive Science, BS</p>
                <p className="text-[#0A66C2] font-bold">University of California, Los Angeles</p>
                <p className="text-[#5c739b] text-sm mb-2">Sept 2025 – Present • GPA: N/A</p>
              </div>

              <div>
                <p className="font-bold mb-0.5 text-[#1e2b4a]">Cognitive Science &amp; Informatics</p>
                <p className="text-[#0A66C2] font-bold">Irvine Valley College</p>
                <p className="text-[#5c739b] text-sm mb-1">Aug 2023 – May 2025 • GPA: 3.9 | Magna Cum Laude | Dean’s List</p>
                <ul className="list-disc pl-5 text-sm text-[#1e2b4a]">
                  <li>Associates in Arts: Emphasis in Liberal Studies</li>
                  <li>Full Transfer Certification: UC IGETC</li>
                </ul>
              </div>
            </div>

            {/* COURSEWORK */}
            <div className="mb-6">
              <h2 className="text-[#213b70] font-extrabold text-base mb-1">Relevant Coursework</h2>
              <div className="h-[3px] w-[180px] bg-[#5aa0ff] rounded-full mb-3"></div>
              <ul className="list-disc pl-5 text-sm text-[#1e2b4a] leading-snug space-y-1">
                <li>CS 37: C++ Programming</li>
                <li>CS 36: C Programming</li>
                <li>DMA 55: Beg. Graphic Design</li>
                <li>CS 41: Data Structures &amp; Algorithms</li>
                <li>CS 10: Intro to Python</li>
                <li>CIMP 7A: Business Programming for Java</li>
              </ul>
            </div>

            {/* TOOLS */}
            <div className="mb-6">
              <h2 className="text-[#213b70] font-extrabold text-base mb-1">Tools</h2>
              <div className="h-[3px] w-[180px] bg-[#5aa0ff] rounded-full mb-3"></div>
              <p className="text-sm text-[#1e2b4a] leading-relaxed">
                Figma <span className="text-gray-400 px-1">|</span> Adobe XD <span className="text-gray-400 px-1">|</span>
                Adobe Illustrator <span className="text-gray-400 px-1">|</span> Photoshop <span className="text-gray-400 px-1">|</span> Premiere Pro
                <span className="text-gray-400 px-1">|</span> Google Workplace <span className="text-gray-400 px-1">|</span> Microsoft Office
                <span className="text-gray-400 px-1">|</span> Webflow <span className="text-gray-400 px-1">|</span> Slack
              </p>
            </div>

            {/* INTERESTS */}
            <div className="mb-6">
              <h2 className="text-[#213b70] font-extrabold text-base mb-1">Interests</h2>
              <div className="h-[3px] w-[180px] bg-[#5aa0ff] rounded-full mb-3"></div>
              <p className="text-sm text-[#1e2b4a] leading-relaxed">
                UX/UI Product Design <span className="text-gray-400 px-1">|</span> User Research
                <span className="text-gray-400 px-1">|</span> Web Development <span className="text-gray-400 px-1">|</span> Frontend Development
                <span className="text-gray-400 px-1">|</span> Product Management <span className="text-gray-400 px-1">|</span> Human-Computer Interaction
              </p>
            </div>

            {/* AWARDS */}
            <div>
              <h2 className="text-[#213b70] font-extrabold text-base mb-1">Awards/Honors</h2>
              <div className="h-[3px] w-[180px] bg-[#5aa0ff] rounded-full mb-3"></div>
              <ul className="list-disc pl-5 text-sm text-[#1e2b4a] space-y-2">
                <li>Orange County Register Artist of the Year in Media Arts: Nominee/Semifinalist/Finalist in Graphic Design (2023)</li>
                <li>City of Irvine Educational Partnership Fund Scholarship (2024)</li>
                <li>Waltmar Foundation Scholarship (2024)</li>
                <li>ASIVC Academic Excellence Scholarship (2025)</li>
                <li>ASIVC Transfer Scholarship (2025)</li>
                <li>ASIVC Social and Behavioral Sciences Scholarship (2025)</li>
              </ul>
            </div>

          </div>
        </aside>

        {/* LEFT COLUMN (Experience) - Displayed SECOND on Mobile */}
        <article className="order-2 lg:order-1 bg-white rounded-[18px] border border-[rgba(13,87,255,.08)] shadow-sm p-6 lg:p-8 h-full">
          
          <div className="mb-8">
            <h2 className="text-lg font-bold text-[#1e2b4a] mb-4 tracking-wide">Work Experience</h2>

            {/* Job 1 */}
            <div className="mb-6">
              <h3 className="text-[1.02rem] text-[#1e2b4a] font-bold">TurnBased Studio — <em className="font-medium text-[#2c4a7a]">UX/UI Design Intern</em></h3>
              <p className="text-[#66758f] text-sm mb-2">Jun 2025 – Present · Irvine, CA</p>
              <ul className="list-disc pl-5 text-[#1e2b4a] space-y-1.5 text-sm leading-relaxed">
                <li>Analyzed project requirements to define user needs and design goals that aligned with business objectives.</li>
                <li>Delivered 100+ low-fidelity wireframes to explore core flows and navigation.</li>
                <li>Partnered with founder to clarify business requirements and define design goals.</li>
                <li>Translated hand-drawn designs into interactive, low-fidelity Figma prototypes, enabling stakeholders to visualize functionality flow.</li>
              </ul>
            </div>

            {/* Job 2 */}
            <div className="mb-6">
              <h3 className="text-[1.02rem] text-[#1e2b4a] font-bold">Student Ambassador— <em className="font-medium text-[#2c4a7a]">Irvine Valley College Outreach</em></h3>
              <p className="text-[#66758f] text-sm mb-2">Aug 2024 – June 2025 · Irvine, CA</p>
              <ul className="list-disc pl-5 text-[#1e2b4a] space-y-1.5 text-sm leading-relaxed">
                <li>Represented IVC with campus tours, presentations, and community events, engaging with 30+ prospective students weekly and increasing visibility of IVC programs and services.</li>
                <li>Supported marketing campaign, conferences, and college fairs to increase outreach visibility across 20+ partner schools.</li>
                <li>Built click-through prototypes for early feedback and flow validation.</li>
              </ul>
            </div>

            {/* Job 3 */}
            <div className="mb-6">
              <h3 className="text-[1.02rem] text-[#1e2b4a] font-bold">HubSpot, AeroDefense— <em className="font-medium text-[#2c4a7a]">Marketing AI Intern</em></h3>
              <p className="text-[#66758f] text-sm mb-2">March 2025 – May 2025 · Remote</p>
              <ul className="list-disc pl-5 text-[#1e2b4a] space-y-1.5 text-sm leading-relaxed">
                <li>Produced a full marketing campaign (blogs, landing pages, automated emails) for AeroDefense</li>
                <li>Built buyer personas into AeroDefense’s HubSpot CRM and leveraged AI tools to personalize messaging, increasing campaign alignment with audience needs.</li>
              </ul>
            </div>

            {/* Job 4 */}
            <div className="mb-6">
              <h3 className="text-[1.02rem] text-[#1e2b4a] font-bold">Road2 Education Foundation — <em className="font-medium text-[#2c4a7a]">UX/UI Design Intern</em></h3>
              <p className="text-[#66758f] text-sm mb-2">April 2023 · December 2023</p>
              <ul className="list-disc pl-5 text-[#1e2b4a] space-y-1.5 text-sm leading-relaxed">
                <li>Mapped user journeys and simplified dashboard IA to reduce steps for key student tasks.</li>
                <li>Created reusable UI components; established a starter style guide to keep visuals consistent.</li>
                <li>Prototyped gamified interactions to increase completion and engagement.</li>
              </ul>
            </div>
          </div>

          {/* Extracurriculars */}
          <div>
            <h2 className="text-lg font-bold text-[#1e2b4a] mb-4 tracking-wide">Extracurricular Activities</h2>

            <div className="mb-6">
              <h3 className="text-[1.02rem] text-[#1e2b4a] font-bold">Hackathon Project — <em className="font-medium text-[#2c4a7a]">Front-end Designer</em></h3>
              <p className="text-[#66758f] text-sm mb-2">April 2025</p>
              <ul className="list-disc pl-5 text-[#1e2b4a] space-y-1.5 text-sm leading-relaxed">
                <li>Scoped landing + form pages; produced wireframes and visual directions used by the team.</li>
                <li>Implemented responsive layouts and interaction details that guided back-end integration.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-[1.02rem] text-[#1e2b4a] font-bold">USC Institute for Technology — <em className="font-medium text-[#2c4a7a]">USC AI &amp; Semiconductor Chips Summer Program</em></h3>
              <p className="text-[#66758f] text-sm mb-2">July 2024</p>
              <ul className="list-disc pl-5 text-[#1e2b4a] space-y-1.5 text-sm leading-relaxed">
                <li>Selected for a competitive certificate program focused on AI applications and semiconductor technology.</li>
                <li>Implemented responsive layouts and interaction details that guided back-end integration.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-[1.02rem] text-[#1e2b4a] font-bold">IVC Business Leaders Society — <em className="font-medium text-[#2c4a7a]">PR &amp; Marketing Director</em></h3>
              <p className="text-[#66758f] text-sm mb-2">Aug 2023 – May 2024</p>
              <ul className="list-disc pl-5 text-[#1e2b4a] space-y-1.5 text-sm leading-relaxed">
                <li>Designed and promoted event graphics across Instagram &amp; Discord, increasing attendance and reach.</li>
                <li>Attended expert-led lectures from USC faculty and industry professionals on the intersection of AI, big data, and consumer behavior.</li>
              </ul>
            </div>

          </div>

        </article>

      </div>
    </div>
  );
}
