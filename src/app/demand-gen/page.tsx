import React from "react";
import { Button } from "@/components/ui/Button";

export default function DemandGenPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative px-8 py-24 md:py-32 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <span className="text-secondary font-bold tracking-widest text-[10px] uppercase mb-4 block">Engineered for Performance</span>
            <h1 className="text-5xl md:text-7xl font-black text-primary tracking-tighter leading-[1.1] mb-8">
              Build Your Demand Generation <span className="text-secondary">Engine from Scratch.</span>
            </h1>
            <p className="text-xl text-text-muted leading-relaxed mb-10 max-w-xl">
              Stop treating pipeline growth as a guessing game. vPersist installs a high-performance outbound architecture tailored for startups and mid-market teams ready to scale with surgical precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" glow>
                Set Up My Demand Gen Engine
              </Button>
              <Button variant="outline" size="lg">
                View Process Flow
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full bg-surface-low absolute -top-12 -right-12 w-full blur-3xl opacity-50 -z-10"></div>
            <div className="bg-white p-8 rounded-xl shadow-revenue relative border-l-4 border-secondary">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 p-4 bg-surface-low rounded-lg border border-surface-high">
                  <span className="material-symbols-outlined text-secondary text-3xl">hub</span>
                  <div>
                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Input Architecture</p>
                    <p className="text-lg font-bold text-primary">1,200 Verified Leads / Month</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-surface-low rounded-lg border border-surface-high ml-8">
                  <span className="material-symbols-outlined text-primary text-3xl">monitoring</span>
                  <div>
                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Processing Logic</p>
                    <p className="text-lg font-bold text-primary">3.8% Demo Conversion</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-surface-low rounded-lg border border-surface-high">
                  <span className="material-symbols-outlined text-amber-500 text-3xl">account_balance_wallet</span>
                  <div>
                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Output (Revenue)</p>
                    <p className="text-lg font-bold text-primary">$1.2M Pipeline Injected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="bg-surface-low py-24 border-y border-surface-high">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl font-black tracking-tight mb-8 text-primary">Why Most Demand Gen <br/><span className="text-red-600">Programs Fail.</span></h2>
              <ul className="space-y-6">
                {[
                  { title: "Undefined ICP", desc: "Targeting everyone means reaching no one. Lack of focus drains your budget." },
                  { title: "Erratic Messaging", desc: "Generic pitches that sound like noise in a crowded inbox." },
                  { title: "Disconnected Tech Stack", desc: "CRM data silos prevent tracking what actually works." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="material-symbols-outlined text-red-600">cancel</span>
                    <div>
                      <p className="font-bold text-primary">{item.title}</p>
                      <p className="text-text-muted text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-12 rounded-2xl shadow-revenue border-t-8 border-secondary">
              <h2 className="text-3xl font-black tracking-tight mb-8 text-primary">The vPersist <br/><span className="text-secondary">Solution Blueprint.</span></h2>
              <p className="text-lg leading-relaxed text-text-muted mb-8 italic">
                "We don't provide leads. We provide a permanent infrastructure. We architect the system, train the talent, and deploy the execution framework that stays in your business forever."
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-surface-low rounded-lg border border-surface-high">
                  <p className="text-2xl font-black text-primary">100%</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Ownership</p>
                </div>
                <div className="p-4 bg-surface-low rounded-lg border border-surface-high">
                  <p className="text-2xl font-black text-primary">24/7</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Visibility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <span className="text-secondary font-bold tracking-widest text-[10px] uppercase mb-4 block">The Methodology</span>
          <h2 className="text-4xl font-black tracking-tight text-primary">Our 5-Step Architecture</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { step: "01", icon: "target", title: "ICP & Targeting", desc: "Deep-dive data mining to identify the exact accounts most likely to convert today.", color: "primary" },
            { step: "02", icon: "chat_bubble", title: "Messaging", desc: "Engineered copywriting that hits specific pain points and cuts through noise.", color: "secondary" },
            { step: "03", icon: "group_add", title: "Talent", desc: "Dedicated SDRs trained specifically on your brand and our performance engine.", color: "primary" },
            { step: "04", icon: "settings_input_component", title: "CRM & Workflow", desc: "Clean pipelines and automated hand-offs so nothing ever falls through cracks.", color: "secondary" },
            { step: "05", icon: "rocket_launch", title: "Execution", desc: "Daily sprint-based management and continuous A/B testing to optimize results.", color: "primary" }
          ].map((item, idx) => (
            <div key={idx} className={`bg-white p-8 rounded-xl shadow-revenue relative group border-t-4 ${item.color === 'primary' ? 'border-primary' : 'border-secondary'} transition-all hover:-translate-y-2`}>
              <span className="text-6xl font-black text-surface-low absolute top-4 right-4 opacity-30 z-0">{item.step}</span>
              <span className={`material-symbols-outlined ${item.color === 'primary' ? 'text-primary' : 'text-secondary'} mb-6 block text-4xl relative z-10`}>{item.icon}</span>
              <h3 className="text-xl font-bold mb-3 text-primary relative z-10">{item.title}</h3>
              <p className="text-xs text-text-muted leading-relaxed relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Outcome Section */}
      <section className="relative bg-primary py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,107,95,0.2),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-8">
            You don't just get people. <br/>You get a working demand generation engine.
          </h2>
          <p className="text-white/60 text-xl leading-relaxed mb-12">
            While others sell hours, we sell infrastructure. vPersist builds the pipeline factory so your sales team can focus purely on closing deals.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Button variant="tertiary" size="lg" glow>
              Set Up My Demand Gen Engine
              <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </Button>
          </div>
          <p className="text-white/40 mt-12 text-sm font-medium italic">Integrated with Salesforce, HubSpot, and Outreach in under 72 hours.</p>
        </div>
      </section>
    </div>
  );
}
