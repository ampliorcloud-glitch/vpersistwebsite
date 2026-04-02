import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function EmployersPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative px-8 py-24 md:py-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold tracking-widest uppercase bg-secondary/10 text-secondary rounded-full">For Ambitious Employers</span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-primary leading-[0.9] mb-8">
              Not Ready for <br/>Long-Term Hiring? <span className="text-secondary">Start with a Pilot.</span>
            </h1>
            <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-10 max-w-xl">
              Scale your revenue operations without the risk of permanent overhead. Test markets, validate ROIs, and build high-performance teams with our architectural approach to staffing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact?interest=team">
                <Button variant="primary" size="lg" glow>
                  Talk to Our Team
                </Button>
              </Link>
              <Link href="/services#pilot">
                <Button variant="outline" size="lg">
                  View Pilot Packages
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            {/* Architectural System Visual */}
            <div className="relative aspect-square w-full">
              <div className="absolute inset-0 bg-primary rounded-3xl rotate-3 opacity-5"></div>
              <div className="absolute inset-0 bg-secondary rounded-3xl -rotate-3 opacity-5"></div>
              <div className="relative h-full w-full p-8 grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-revenue border-l-4 border-secondary flex flex-col justify-end">
                  <span className="material-symbols-outlined text-4xl text-secondary mb-4">insights</span>
                  <div className="text-2xl font-black tracking-tight leading-none text-primary">ROI Validation</div>
                </div>
                <div className="bg-primary p-6 rounded-xl shadow-revenue flex flex-col justify-end">
                  <span className="material-symbols-outlined text-4xl text-white mb-4">speed</span>
                  <div className="text-2xl font-black tracking-tight leading-none text-white">Rapid Setup</div>
                </div>
                <div className="col-span-2 bg-white p-8 rounded-xl shadow-revenue border-t-4 border-primary flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="material-symbols-outlined text-4xl text-primary">groups</span>
                    <div className="text-right">
                      <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest leading-none mb-1">Efficiency</div>
                      <div className="text-2xl font-black text-secondary">+42% Growth</div>
                    </div>
                  </div>
                  <div className="text-3xl font-black tracking-tight leading-none text-primary mt-8">Revenue Staffing Architecture</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Situation Section */}
      <section className="py-24 bg-surface-low border-y border-surface-high">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-primary">Your Situation</h2>
              <p className="text-lg text-text-muted font-medium">Traditional hiring is slow and risky. We specialize in the high-stakes phase where you need execution today, not promises for next quarter.</p>
            </div>
            <div className="hidden md:block h-px bg-surface-high flex-grow mx-12 mb-4"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Unsure ROI", desc: "You know you need growth, but committing to a full-time senior SDR or demand gen lead before the model is proven feels like a gamble." },
              { step: "02", title: "Testing New Markets", desc: "Entering a new vertical requires speed. You need a veteran team that can execute the 'Go-to-Market' without the overhead.", offset: true },
              { step: "03", title: "Building from Scratch", desc: "You're scaling from 0 to 1. You don't just need a person; you need the infrastructure, the playbooks, and the talent all at once." }
            ].map((item, idx) => (
              <div key={idx} className={`flex flex-col gap-6 ${item.offset ? 'md:pt-24' : ''}`}>
                <div className="text-6xl font-black text-surface-high tracking-tighter opacity-50">{item.step}</div>
                <h3 className="text-2xl font-black tracking-tight text-primary">{item.title}</h3>
                <p className="text-text-muted leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Precision Solutions (Bento) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-primary">Precision Solutions</h2>
            <p className="text-text-muted font-medium italic">Modular approaches to revenue growth staffing.</p>
          </div>
          <div className="grid md:grid-cols-12 gap-6">
            {/* Pilot Card */}
            <div className="md:col-span-7 bg-primary text-white rounded-2xl p-12 flex flex-col justify-between min-h-[500px] shadow-revenue relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <span className="material-symbols-outlined text-5xl text-secondary">rocket_launch</span>
                  <span className="bg-amber-500 text-white px-4 py-1 text-[10px] font-black rounded-full tracking-widest uppercase">Most Requested</span>
                </div>
                <h3 className="text-4xl font-black tracking-tight mb-6 leading-none">3-Month Pilot</h3>
                <p className="text-white/60 text-lg max-w-sm mb-12 italic leading-relaxed">
                  &quot;The ultimate de-risking tool. We deploy a full-stack revenue cell into your business for 90 days. We find the signal, you keep the results.&quot;
                </p>
                <div className="space-y-4 mb-12">
                  {["Immediate execution capability", "Weekly performance blueprints", "No long-term contractual lock-in"].map((li, i) => (
                    <div key={i} className="flex items-center gap-3 font-bold text-sm">
                      <span className="material-symbols-outlined text-secondary text-base">check_circle</span>
                      {li}
                    </div>
                  ))}
                </div>
              </div>
              <Link href="/contact?interest=pilot">
                <Button variant="tertiary" size="lg" className="w-full py-5 text-xl" glow>Apply for a Pilot</Button>
              </Link>
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            </div>
            
            {/* Setup & Ongoing Verticals */}
            <div className="md:col-span-5 flex flex-col gap-6">
              <div className="bg-surface-low border border-surface-high rounded-2xl p-10 flex flex-col justify-between flex-grow shadow-revenue border-l-8 border-secondary">
                <div>
                  <span className="material-symbols-outlined text-4xl text-secondary mb-6">hub</span>
                  <h3 className="text-2xl font-black tracking-tight mb-4 text-primary">Full Demand Gen Setup</h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-6">We don&apos;t just provide bodies; we provide the brain. We build your entire outbound and inbound revenue machine.</p>
                </div>
                <Link href="/demand-gen" className="text-secondary font-bold flex items-center gap-2 text-sm hover:underline">
                  Explore Setup Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
              <div className="bg-white border border-surface-high rounded-2xl p-10 flex flex-col justify-between flex-grow shadow-revenue">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">engineering</span>
                <h3 className="text-2xl font-black tracking-tight mb-4 text-primary">Ongoing Staffing</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-6">Transition to permanent or long-term embedded models. We handle the heavy lifting of management.</p>
                <div className="flex gap-3 flex-wrap">
                  {["AEs", "SDRs", "RevOps"].map((tag) => (
                    <span key={tag} className="bg-surface-low px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-primary border border-surface-high">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Diagnostic CTA */}
      <section className="py-24 bg-surface-low overflow-hidden">
        <div className="max-w-4xl mx-auto px-8">
          <div className="p-16 bg-white rounded-3xl shadow-revenue relative overflow-hidden text-center border border-surface-high">
            <div className="absolute top-0 left-0 w-2 h-full bg-secondary"></div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 leading-tight text-primary text-center">Ready to test your <br/><span className="text-secondary">revenue engine?</span></h2>
            <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto italic">
              &quot;Schedule a 15-minute diagnostic call with our staffing architects to determine if a pilot is right for your current stage.&quot;
            </p>
            <div className="flex justify-center">
              <Link href="/contact?interest=diagnostic">
                <Button variant="primary" size="lg" glow>Talk to Our Team</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
