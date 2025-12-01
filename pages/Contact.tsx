
import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    if (name && email && message) {
      setStatus('success');
      form.reset();
      setTimeout(() => setStatus('idle'), 5000);
    } else {
        setStatus('error');
    }
  };

  return (
    <div className="py-12 md:py-24 px-6 font-['Poppins']">
      <div className="max-w-[1120px] mx-auto">
        
        {/* Deep Tint Panel - Updated to match Home Page Button Blue (#2774AE) */}
        <div className="rounded-2xl p-8 md:p-12 bg-[#2774AE] text-white shadow-2xl border border-[#1e325a]/10 overflow-hidden">
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">Let's Talk</h1>
          
          <form onSubmit={handleSubmit} className="max-w-none" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
              <div>
                <label htmlFor="cname" className="block text-[#E9F0FF] font-extrabold tracking-widest uppercase text-xs mb-2">Name</label>
                <input 
                  id="cname" 
                  name="name" 
                  type="text" 
                  placeholder="Enter your name" 
                  required 
                  className="w-full px-4 py-3.5 rounded-xl bg-white text-brand-ink border border-[#e6efff] outline-none placeholder-[#a4b7db] focus:border-white focus:ring-4 focus:ring-white/20 transition-all"
                />
              </div>
              <div>
                <label htmlFor="cemail" className="block text-[#E9F0FF] font-extrabold tracking-widest uppercase text-xs mb-2">Email Address</label>
                <input 
                  id="cemail" 
                  name="email" 
                  type="email" 
                  placeholder="Enter your email" 
                  required 
                  className="w-full px-4 py-3.5 rounded-xl bg-white text-brand-ink border border-[#e6efff] outline-none placeholder-[#a4b7db] focus:border-white focus:ring-4 focus:ring-white/20 transition-all"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="cmsg" className="block text-[#E9F0FF] font-extrabold tracking-widest uppercase text-xs mb-2">Write a message</label>
              <textarea 
                id="cmsg" 
                name="message" 
                placeholder="Enter your message" 
                required 
                rows={6}
                className="w-full px-4 py-3.5 rounded-xl bg-white text-brand-ink border border-[#e6efff] outline-none placeholder-[#a4b7db] focus:border-white focus:ring-4 focus:ring-white/20 transition-all resize-y min-h-[150px]"
              ></textarea>
            </div>

            <div className="flex items-center gap-4">
              {/* Changed Button to White for contrast against the Blue background */}
              <button 
                type="submit" 
                className="px-8 py-3.5 rounded-xl font-bold text-base bg-white text-[#2774AE] shadow-lg hover:bg-blue-50 active:scale-95 transition-all outline-none focus:ring-2 focus:ring-white/50"
              >
                Submit
              </button>
            </div>

            {status === 'success' && (
              <div className="mt-4 p-3.5 rounded-lg bg-[#e0f0e8] border border-[#b3e0c7] text-[#16294e] font-bold text-sm animate-fade-in">
                Message sent successfully! Thank you for reaching out.
              </div>
            )}
             {status === 'error' && (
              <div className="mt-4 p-3.5 rounded-lg bg-[#ffe0e0] border border-[#e0b3b3] text-[#16294e] font-bold text-sm animate-fade-in">
                Please complete all fields.
              </div>
            )}
          </form>
        </div>

      </div>
    </div>
  );
}
