import React from "react";
import { Button } from "@/components/ui/Button";

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <span className="text-secondary font-bold tracking-widest text-[10px] uppercase mb-4 block">Engineered Growth</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-primary leading-[0.9] mb-8">Modular Revenue Architecture.</h1>
            <p className="text-xl text-text-muted max-w-2xl leading-relaxed">
              Precision-built service modules designed to integrate seamlessly into your revenue engine. Deploy talent, technology, and strategy with surgical accuracy.
            </p>
          </div>
          <div className="lg:col-span-4 pb-4">
            <div className="p-8 bg-surface-low rounded-xl border-l-4 border-secondary shadow-revenue">
              <p className="text-sm font-medium text-primary mb-2 italic">"The architecture of vPersist allowed us to scale from zero to $2M ARR in six months without hiring a single internal recruiter."</p>
              <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">— VP Revenue, CloudScale</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Featured Sections */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Pilot Module */}
          <div className="md:col-span-7 bg-primary text-white p-12 rounded-xl relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-12">
                <span className="bg-amber-500 text-white px-3 py-1 text-[10px] font-black rounded">NEW</span>
                <span className="text-white/60 font-bold tracking-widest text-[10px] uppercase">Accelerated Onboarding</span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight mb-6">3-Month Pilot Deployment</h2>
              <p className="text-white/60 text-lg mb-12 max-w-md leading-relaxed">
                A high-velocity engagement designed to prove ROI within 90 days. We deploy a full revenue stack—talent, tech, and data—to validate your market hypothesis.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <span className="block text-2xl font-black text-white">14 Days</span>
                  <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Time to Launch</span>
                </div>
                <div>
                  <span className="block text-2xl font-black text-white">Full Stack</span>
                  <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Resource Access</span>
                </div>
              </div>
              <Button variant="tertiary" size="lg" glow>
                Request Pilot Framework
              </Button>
            </div>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          </div>

          {/* Setup Module */}
          <div className="md:col-span-5 bg-surface-low p-12 rounded-xl shadow-revenue flex flex-col justify-between border border-surface-high">
            <div>
              <div className="flex items-center gap-3 mb-12">
                <span className="bg-primary/10 text-primary px-3 py-1 text-[10px] font-black rounded uppercase">Setup</span>
                <span className="text-text-muted font-bold tracking-widest text-[10px] uppercase">Strategic Architecture</span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-primary mb-6">Demand Gen Setup</h2>
              <p className="text-text-muted leading-relaxed mb-8">
                We architect your outbound and inbound channels from the ground up. Custom data scrapers, personalized messaging at scale, and automated sequence logic.
              </p>
            </div>
            <ul className="space-y-4 mb-8">
              {["ICP & Persona Mapping", "Multi-Channel Sequence Design", "CRM Integration & Routing"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-bold text-primary">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Grid of Modular Services */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-secondary font-bold tracking-widest text-[10px] uppercase mb-2 block">Service Modules</span>
            <h2 className="text-5xl font-black tracking-tighter text-primary">Precision Components.</h2>
          </div>
          <p className="text-text-muted max-w-xs text-sm italic">
            "Select the specific modules your organization requires. No bloat, only performance."
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-surface-high">
          {[
            { title: "Revenue Talent Deployment", icon: "groups", desc: "Vetted SDRs, AEs, and CSMs deployed directly into your workflows." },
            { title: "Supervision & QC", icon: "verified_user", desc: "Rigorous quality control systems. We monitor calls, emails, and data for compliance." },
            { title: "Data Support", icon: "database", desc: "Custom lead list building and data enrichment. We find the hard-to-reach decision makers." },
            { title: "Tech Layer", icon: "layers", desc: "Implementation of best-in-class sales tech stacks. Automated outreach and real-time reporting." },
            { title: "Recruitment", icon: "person_search", desc: "We identify and pre-screen top 1% talent for your permanent revenue roles." },
            { title: "Training", icon: "school", desc: "Ongoing education for your revenue team. Modern methodologies and objection handling." }
          ].map((service, idx) => (
            <div key={idx} className="p-12 border-r border-b border-surface-high bg-white hover:bg-surface-low transition-colors group">
              <span className="material-symbols-outlined text-4xl text-primary mb-8">{service.icon}</span>
              <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-10">{service.desc}</p>
              <div className="h-1 w-12 bg-secondary group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Integration Logic */}
      <section className="max-w-7xl mx-auto px-8 mb-32 bg-white rounded-3xl p-16 shadow-revenue border border-surface-low">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-5xl font-black tracking-tighter text-primary mb-8">Zero-Friction Integration.</h2>
            <div className="space-y-12">
              {[
                { step: "01", title: "Identify the Gap", desc: "Our architects analyze your current funnel to pinpoint specific module needs." },
                { step: "02", title: "Deploy the Module", desc: "We launch your selected modules within 14 days, fully integrated into your CRM." },
                { step: "03", title: "Optimize and Scale", desc: "Continuous feedback loops and QC ensure the output only gets stronger." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-8">
                  <div className="text-secondary font-black text-4xl">{item.step}</div>
                  <div>
                    <h4 className="font-bold text-primary text-xl mb-2">{item.title}</h4>
                    <p className="text-text-muted text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-primary rounded-2xl overflow-hidden shadow-revenue relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,107,95,0.4),transparent)]"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-12">
                <div className="bg-white/10 backdrop-blur-xl p-8 rounded-xl border border-white/20">
                  <h4 className="text-2xl font-bold text-white mb-2">Architectural Logic</h4>
                  <p className="text-white/60 text-sm">Every module is built to interact. Your tech layer feeds your data support, which fuels your talent deployment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
