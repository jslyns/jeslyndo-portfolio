
import React from 'react';
import { Check, Loader2, Signal, Wifi, Battery, Phone, Mail, MessageSquare, GraduationCap } from 'lucide-react';

export default function PhonePrototype() {
  return (
    <div className="phone-wrapper scale-90 sm:scale-100 origin-center select-none">
      <style>{`
        /* iPhone Shell */
        .phone-proto {
          width: 280px;
          height: 560px;
          padding: 12px;
          border-radius: 48px;
          background: #1F2937;
          box-shadow: 
            inset 0 0 0 2px #4B5563,
            0 0 0 4px #e4e9f2,
            0 24px 60px rgba(0,0,0,0.3);
          margin: 0 auto;
          position: relative;
        }

        .phone-proto::before { /* Power */
          content: ''; position: absolute; right: -4px; top: 120px; width: 4px; height: 40px; background: #9CA3AF; border-radius: 0 4px 4px 0;
        }
        .phone-proto::after { /* Volume */
          content: ''; position: absolute; left: -4px; top: 100px; width: 4px; height: 70px; background: #9CA3AF; border-radius: 4px 0 0 4px;
        }

        /* Screen */
        .screen-proto {
          width: 100%;
          height: 100%;
          border-radius: 36px;
          background: #F2F2F7; /* iOS Light Gray */
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          font-family: 'Poppins', sans-serif;
        }

        /* Notch */
        .dynamic-island {
          position: absolute; top: 11px; left: 50%; transform: translateX(-50%);
          width: 90px; height: 26px; background: #000; border-radius: 14px; z-index: 51;
        }

        /* Status Bar */
        .status-bar {
          height: 44px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 24px 0 26px;
          font-size: 13px;
          font-weight: 600;
          color: #000;
          z-index: 50;
        }

        /* Content Area */
        .app-content {
            flex: 1;
            padding: 16px;
            display: flex;
            flex-direction: column;
            gap: 16px;
            overflow: hidden;
            position: relative;
        }

        /* Dock */
        .dock-container {
            height: 90px;
            margin: 0 12px 12px;
            background: rgba(255, 255, 255, 0.45);
            backdrop-filter: blur(20px);
            border-radius: 32px;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            padding: 0 8px 6px; /* Added bottom padding for visual balance above home indicator */
            z-index: 50;
        }

        .app-icon {
            width: 50px;
            height: 50px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            position: relative;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            transition: transform 0.2s;
        }
        .app-icon:active { transform: scale(0.9); }
        
        .badge {
            position: absolute;
            top: -6px;
            right: -6px;
            background: #FF3B30;
            color: white;
            font-size: 11px;
            font-weight: 700;
            height: 20px;
            min-width: 20px;
            padding: 0 5px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid #F2F2F7;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        /* Mockup Skeletons */
        .skeleton { background: #CBD5E1; border-radius: 8px; }
        .sk-card { 
            width: 100%; height: 90px; 
            background: white; 
            border-radius: 16px; 
            padding: 12px; 
            display: flex; gap: 12px; 
            box-shadow: 0 2px 8px rgba(0,0,0,0.04); 
        }
        .sk-img { width: 56px; height: 56px; background: #E2E8F0; border-radius: 10px; }
        .sk-lines { flex: 1; display: flex; flex-direction: column; gap: 8px; justify-content: center; }
        .sk-line { height: 8px; border-radius: 4px; background: #F1F5F9; }
        
        /* Center Status Overlay */
        .status-overlay {
            position: absolute; inset: 0;
            background: rgba(242, 242, 247, 0.5); /* Match iOS bg */
            backdrop-filter: blur(4px);
            z-index: 40;
            display: flex; 
            align-items: center; 
            justify-content: center;
        }
        
        .central-status {
            background: rgba(255,255,255,0.9);
            border: 1px solid rgba(255,255,255,1);
            padding: 24px;
            border-radius: 24px;
            box-shadow: 0 20px 40px rgba(39, 116, 174, 0.15); /* Blue-ish shadow */
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            text-align: center;
            animation: popIn 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) backwards;
        }

        @keyframes popIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }

        .home-indicator {
          position: absolute; bottom: 8px; left: 50%; transform: translateX(-50%);
          width: 120px; height: 5px; background: #000; opacity: 1; border-radius: 100px; z-index: 60;
        }
      `}</style>

      <div className="phone-proto">
        {/* Notch */}
        <div className="dynamic-island"></div>

        {/* Screen Content */}
        <div className="screen-proto">
           
           {/* Status Bar */}
           <div className="status-bar">
              <span className="tracking-tight">AT&T</span>
              <div className="flex items-center gap-1.5">
                 <Signal size={16} fill="currentColor" strokeWidth={0} />
                 <Wifi size={16} strokeWidth={2.5} />
                 <div className="relative">
                    <Battery size={20} className="text-black opacity-40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[10px] h-[6px] bg-black rounded-[1px] ml-[-2px]"></div>
                    </div>
                 </div>
              </div>
           </div>

           {/* Main App Area */}
           <div className="app-content">
              
              {/* Fake UI Background */}
              <div className="flex justify-between items-center mb-2 px-1">
                 <div className="skeleton w-24 h-6 rounded-md bg-slate-300/80"></div>
                 <div className="skeleton w-8 h-8 rounded-full bg-slate-300/80"></div>
              </div>
              
              <div className="sk-card">
                 <div className="sk-img"></div>
                 <div className="sk-lines">
                    <div className="sk-line w-3/4 bg-slate-300"></div>
                    <div className="sk-line w-1/2"></div>
                 </div>
              </div>
              <div className="sk-card">
                 <div className="sk-img"></div>
                 <div className="sk-lines">
                    <div className="sk-line w-2/3 bg-slate-300"></div>
                    <div className="sk-line w-1/3"></div>
                 </div>
              </div>
              <div className="sk-card">
                 <div className="sk-img"></div>
                 <div className="sk-lines">
                    <div className="sk-line w-1/2 bg-slate-300"></div>
                    <div className="sk-line w-1/4"></div>
                 </div>
              </div>

               {/* Center Status Overlay */}
               <div className="status-overlay">
                  <div className="central-status">
                     <div className="flex items-center gap-1.5 text-[#15803d] text-[10px] font-extrabold uppercase tracking-wider bg-[#dcfce7] px-2 py-1 rounded-full mb-1 border border-[#15803d]/20">
                         <Check size={10} strokeWidth={4} />
                         <span>Prototype Complete</span>
                     </div>
                     <Loader2 size={42} className="text-[#2774AE] animate-spin" strokeWidth={2.5} />
                     <div className="text-[#2774AE] font-bold text-base tracking-tight">
                        In Development
                     </div>
                  </div>
               </div>
           </div>

           {/* Dock */}
           <div className="dock-container">
              {/* Phone */}
              <div className="app-icon bg-[#34C759]">
                 <Phone size={26} fill="currentColor" className="text-white" />
              </div>
              
              {/* Mail */}
              <div className="app-icon bg-[#007AFF]">
                 <Mail size={26} className="text-white" strokeWidth={2.5} />
                 <div className="badge">27</div>
              </div>

              {/* Messages */}
              <div className="app-icon bg-[#34C759]">
                 <MessageSquare size={26} fill="currentColor" className="text-white" />
              </div>

              {/* UCLA / App Icon */}
              <div className="app-icon bg-[#2774AE] border border-[#FFD100]/20">
                 <GraduationCap size={30} className="text-[#FFD100]" strokeWidth={2} />
              </div>
           </div>
           
           {/* Home Bar */}
           <div className="home-indicator"></div>
        </div>
      </div>
    </div>
  );
}
