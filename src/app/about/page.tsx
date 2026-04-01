import React from "react";
import { Button } from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section: Editorial Authority */}
      <header className="pt-48 pb-32 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <span className="inline-block px-3 py-1 bg-surface-low text-primary font-bold text-[10px] tracking-widest uppercase mb-6 border border-surface-high">
              EST. 2024 / ARCHITECTURE
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-primary mb-8">
              Revenue Talent <br/>Architecture.
            </h1>
            <p className="text-xl md:text-2xl text-text-muted max-w-2xl leading-relaxed italic">
              "vPersist didn't start with a platform. It started with a persistence to solve the volatility of growth. We build the systems that house your revenue engines."
            </p>
          </div>
          <div className="md:col-span-4 hidden md:block">
            <div className="p-8 border-l-4 border-secondary bg-surface-low shadow-revenue">
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4">Core Thesis</p>
              <p className="text-text-muted italic leading-relaxed text-sm">
                "Precision in hiring is the only hedge against market unpredictability. We don't just fill seats; we engineer persistence."
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Evolution Section */}
      <section className="bg-primary text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,107,95,0.2),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-white">Our Evolution</h2>
            <div className="h-1 w-24 bg-secondary"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
            {[
              { step: "01", title: "Strategic Staffing", desc: "The origins. Identifying high-caliber talent for hyper-growth startups. We realized talent wasn't the bottleneck—integration was.", progress: "1/3" },
              { step: "02", title: "Growth Advisory", desc: "Moving beyond heads. We began designing the playbooks, the KPIs, and the compensation models that made talent actually perform.", progress: "2/3" },
              { step: "03", title: "Revenue Talent Platform", desc: "A full-stack architecture. RTaaS (Revenue Talent as a Service) combines precision hiring with the operational structure needed to scale.", progress: "3/3", current: true }
            ].map((phase, idx) => (
              <div key={idx} className={`p-12 bg-white/5 border-b md:border-b-0 md:border-r border-white/10 group hover:bg-white/10 transition-colors relative`}>
                <div className="text-secondary text-5xl font-black mb-8 opacity-40 group-hover:opacity-100 transition-opacity">{phase.step}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{phase.title}</h3>
                {phase.current && <span className="bg-secondary text-white text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded absolute top-12 right-12">Current State</span>}
                <p className="text-white/60 leading-relaxed mb-12 text-sm">
                  {phase.desc}
                </p>
                <div className="flex flex-col gap-2">
                  <div className="h-1 w-full bg-white/10"></div>
                  <div className={`h-1 bg-secondary ${idx === 0 ? 'w-1/3' : idx === 1 ? 'w-2/3' : 'w-full'}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-24 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-5xl font-black tracking-tighter text-primary mb-8 leading-none">Start Small, Scale Confidently</h2>
              <p className="text-lg text-text-muted leading-relaxed mb-10 italic">
                "The vPersist philosophy is built on the Revenue Pilot model. We reject the bloated 12-month contract. Instead, we architect 3-month performance windows that prove viability before you commit to scale."
              </p>
              <ul className="space-y-8">
                {[
                  { title: "Isolation of Variables", desc: "Identify exactly what drives your revenue." },
                  { title: "Measured Injection", desc: "Add talent only when the structure can support them." },
                  { title: "Persistent Iteration", desc: "Optimize the engine in real-time." }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary font-bold">check_circle</span>
                    <div>
                      <span className="font-bold text-primary block mb-1 text-lg">{item.title}</span>
                      <p className="text-text-muted text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* System Visual */}
            <div className="w-full md:w-1/2 relative aspect-square">
              <div className="absolute inset-0 bg-secondary/5 rounded-full blur-3xl"></div>
              <div className="relative z-10 grid grid-cols-2 gap-4 h-full p-4">
                <div className="flex flex-col gap-4 justify-end">
                  <div className="h-32 w-full bg-surface-low rounded-xl shadow-revenue border border-surface-high flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-4xl">architecture</span>
                  </div>
                  <div className="h-64 w-full bg-primary rounded-xl shadow-revenue flex items-center justify-center p-8 text-center border-t-8 border-secondary">
                    <span className="text-white font-black text-xl tracking-tighter uppercase">Infrastructure Layer</span>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="h-64 w-full bg-secondary rounded-xl shadow-revenue flex items-center justify-center p-8 text-center">
                    <span className="text-white font-black text-xl tracking-tighter uppercase">Execution Talent</span>
                  </div>
                  <div className="h-32 w-full bg-surface-low rounded-xl shadow-revenue border border-surface-high flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary text-4xl">trending_up</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-surface-low border-y border-surface-high">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black tracking-tighter text-primary mb-4 leading-none">Our Architecture Pillars</h2>
            <p className="text-text-muted max-w-xl mx-auto italic">The three foundational rules that guide every vPersist deployment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "biotech", title: "Precision", desc: "We don't deal in approximations. Every role we fill and every system we build is calibrated to your specific revenue goals.", color: "primary" },
              { icon: "bolt", title: "Execution", desc: "Strategy is worthless without high-velocity movement. We focus on the daily actions that compound into massive results.", color: "secondary" },
              { icon: "grid_view", title: "Structure", desc: "Growth without structure is chaos. We provide the architectural framework that allows your business to scale without breaking.", color: "primary" }
            ].map((val, idx) => (
              <div key={idx} className="bg-white p-12 shadow-revenue border-t-8 border-surface-high hover:border-secondary transition-all group">
                <div className={`w-16 h-16 ${val.color === 'primary' ? 'bg-primary/5 text-primary' : 'bg-secondary/5 text-secondary'} rounded-full flex items-center justify-center mb-10`}>
                  <span className="material-symbols-outlined text-3xl">{val.icon}</span>
                </div>
                <h3 className="text-2xl font-black text-primary mb-4">{val.title}</h3>
                <p className="text-text-muted leading-relaxed text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-32 text-center text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,107,95,0.4),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-8 relative z-10">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">Build Your Revenue <br/>Cockpit Today.</h2>
          <p className="text-white/60 text-xl mb-12 font-medium italic">"The 3-Month Pilot starts with a single audit. No long-term commitment, just results."</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button variant="tertiary" size="lg" glow>Launch Pilot</Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">View Models</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
