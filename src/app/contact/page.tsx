"use client";

import React from "react";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Inquiry triggered");
  };

  return (
    <div className="flex flex-col">
      <main className="pt-48 pb-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-5">
            <span className="text-secondary font-bold tracking-widest text-[10px] uppercase mb-4 block">Get In Touch</span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-primary leading-[1] mb-8">
              Let's architect your <span className="text-secondary">revenue engine.</span>
            </h1>
            <p className="text-lg md:text-xl text-text-muted mb-12 max-w-md italic">
              "Whether you're looking to scale your sales team or optimize your current infrastructure, our specialists are ready to design your path to predictable growth."
            </p>

            <div className="space-y-12">
              {/* Contact Method 1 */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 flex items-center justify-center bg-surface-low border border-surface-high rounded-xl text-primary shadow-revenue group-hover:border-secondary transition-colors">
                  <span className="material-symbols-outlined text-2xl">mail</span>
                </div>
                <div>
                  <h3 className="font-black text-xl text-primary mb-1">Direct Inquiry</h3>
                  <p className="text-text-muted text-sm mb-2 font-medium">Response within 24 hours</p>
                  <a className="text-secondary font-black hover:underline text-lg" href="mailto:hello@vpersist.com">
                    hello@vpersist.com
                  </a>
                </div>
              </div>

              {/* Contact Method 2 */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 flex items-center justify-center bg-surface-low border border-surface-high rounded-xl text-primary shadow-revenue group-hover:border-secondary transition-colors">
                  <span className="material-symbols-outlined text-2xl">location_on</span>
                </div>
                <div>
                  <h3 className="font-black text-xl text-primary mb-1">Office HQ</h3>
                  <p className="text-text-muted text-sm font-medium">San Francisco, CA</p>
                  <p className="text-slate-400 text-xs mt-1 uppercase tracking-widest font-bold">SOMA District Architectural Studio</p>
                </div>
              </div>
            </div>

            {/* Subtle Decorative Element */}
            <div className="mt-24 p-10 bg-surface-low rounded-3xl relative overflow-hidden border border-surface-high">
              <div className="relative z-10">
                <p className="text-base font-bold text-primary mb-4 italic leading-relaxed">
                  "Precision in communication is the first step toward excellence."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-primary/20"></div>
                  <p className="text-[10px] uppercase font-black tracking-widest text-text-muted">vPersist Leadership Team</p>
                </div>
              </div>
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-secondary/5 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Right Column: Form Container */}
          <div className="lg:col-span-7 bg-white p-10 md:p-16 rounded-3xl shadow-revenue relative border border-surface-high">
            {/* Accent Corner */}
            <div className="absolute top-0 right-0 w-32 h-3 bg-secondary rounded-tr-3xl"></div>
            
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Name */}
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2" htmlFor="name">
                    Full Name
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                  </label>
                  <input 
                    className="w-full bg-surface-low border-b-2 border-transparent focus:border-secondary rounded-xl px-6 py-4 text-primary focus:ring-0 transition-all outline-none text-base font-medium placeholder:text-slate-300 shadow-inner" 
                    id="name" 
                    placeholder="Enter your name" 
                    required
                    type="text" 
                  />
                </div>
                {/* Email */}
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2" htmlFor="email">
                    Business Email
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                  </label>
                  <input 
                    className="w-full bg-surface-low border-b-2 border-transparent focus:border-secondary rounded-xl px-6 py-4 text-primary focus:ring-0 transition-all outline-none text-base font-medium placeholder:text-slate-300 shadow-inner" 
                    id="email" 
                    placeholder="name@company.com" 
                    required
                    type="email" 
                  />
                </div>
              </div>

              {/* Company */}
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-primary" htmlFor="company">Company Name</label>
                <input 
                  className="w-full bg-surface-low border-b-2 border-transparent focus:border-secondary rounded-xl px-6 py-4 text-primary focus:ring-0 transition-all outline-none text-base font-medium placeholder:text-slate-300 shadow-inner" 
                  id="company" 
                  placeholder="vPersist Inc." 
                  type="text" 
                />
              </div>

              {/* Message */}
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-primary" htmlFor="message">How can we help?</label>
                <textarea 
                  className="w-full bg-surface-low border-b-2 border-transparent focus:border-secondary rounded-xl px-6 py-4 text-primary focus:ring-0 transition-all outline-none text-base font-medium placeholder:text-slate-300 shadow-inner min-h-[150px] resize-none" 
                  id="message" 
                  placeholder="Briefly describe your requirements..." 
                  rows={4} 
                />
              </div>

              {/* Action */}
              <div className="pt-6 flex flex-col md:flex-row items-center gap-8">
                <Button variant="primary" size="lg" className="w-full md:w-auto px-12" glow type="submit">
                  Execute Inquiry
                  <span className="material-symbols-outlined text-lg ml-2">bolt</span>
                </Button>
                <p className="text-[10px] font-bold text-slate-400 max-w-[220px] uppercase tracking-wider leading-relaxed">
                  By submitting, you agree to our <span className="text-primary hover:underline cursor-pointer">privacy framework</span> and terms.
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Global Hub Hub Section */}
      <section className="bg-surface-low py-32 overflow-hidden border-y border-surface-high">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-6 bg-secondary/5 rounded-3xl group-hover:bg-secondary/10 transition-colors duration-500"></div>
              <div className="aspect-video bg-primary-container/20 rounded-2xl overflow-hidden shadow-revenue relative">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdorIe4u7cEWRcUB6ayLocLFAWGGSym3VvQLDIVrn_ZwhEz1x4ioiPAZj8IPJ6UK5Cbrnw5Q06YVMU6XxFO0eTyQi-9ysV8gLOGG-dWH6UczjzuoOqvXsp8TAC0z1Dqo_sDkXXKY_sP0CYxzDIjzPvwitM277Se3T9rZKGskcupbw2f90QIX1JIcGbmgO5UMGlmshmw-rZfEaA_qaNgiBHevxmA6XdOf-A_nI76RaXyuMUZF76sGFoGAO-KxcE0RmeeiDqSpxb0F07" 
                  alt="vPersist HQ" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-revenue border-l-8 border-secondary max-w-xs">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-secondary text-sm">verified</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">Headquarters</span>
                  </div>
                  <p className="text-sm font-bold text-primary leading-snug">Visit us in the heart of SOMA's innovation district.</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-primary mb-8 leading-none">Our Global Hub</h2>
              <p className="text-lg text-text-muted mb-12 leading-relaxed italic">
                "While our technology operates globally, our heart is in San Francisco. We host strategic revenue workshops and pilot deep-dives for our core partners on-site."
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="p-8 bg-white rounded-2xl border border-surface-high shadow-revenue group hover:border-secondary transition-all">
                  <h4 className="text-[10px] font-black uppercase tracking-tighter text-secondary mb-2">Timezone</h4>
                  <p className="text-xl font-black text-primary">Pacific Standard</p>
                </div>
                <div className="p-8 bg-white rounded-2xl border border-surface-high shadow-revenue group hover:border-secondary transition-all">
                  <h4 className="text-[10px] font-black uppercase tracking-tighter text-secondary mb-2">Status</h4>
                  <p className="text-xl font-black text-primary">Operational</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
