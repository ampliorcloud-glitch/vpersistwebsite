import React from "react";
import { Button } from "@/components/ui/Button";

export default function AcademyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <header className="pt-48 pb-32 px-8 max-w-7xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary font-black text-[10px] tracking-widest uppercase mb-8 rounded-full border border-secondary/20">
          The School of Persistence
        </span>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-primary leading-[0.9] mb-10 max-w-5xl mx-auto">
          The Revenue <br/>Talent <span className="text-secondary">Academy.</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto leading-relaxed italic mb-12">
          "We don't just find talent; we manufacture excellence. Our academy converts high-potential individuals into precision-engineered revenue architects."
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button variant="primary" size="lg" glow>Enroll as Talent</Button>
          <Button variant="outline" size="lg">Hire Academy Grads</Button>
        </div>
      </header>

      {/* Curriculum Section: Layered Logic */}
      <section className="py-32 bg-surface-low border-y border-surface-high">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl font-black tracking-tighter text-primary mb-8 underline decoration-secondary decoration-8 underline-offset-8">The Curriculum</h2>
              <p className="text-lg text-text-muted mb-12 italic">
                Our 12-week intensive program is designed to bridge the gap between "standard sales" and "architectural revenue growth."
              </p>
              <div className="space-y-4">
                {[
                  { title: "Psychology of Persistence", phase: "Wk 01-04" },
                  { title: "Revenue Infrastructure Mastery", phase: "Wk 05-08" },
                  { title: "Advanced Lead-to-Revenue Logic", phase: "Wk 09-12" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-6 bg-white border border-surface-high rounded-xl shadow-revenue group hover:border-secondary transition-all">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-black text-secondary tracking-widest uppercase">{item.phase}</span>
                      <span className="text-xl font-black text-primary">{item.title}</span>
                    </div>
                    <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-6"></div>
              <div className="relative bg-primary p-12 rounded-2xl shadow-revenue">
                <h3 className="text-2xl font-black text-white mb-8 italic">"The vPersist Certification"</h3>
                <p className="text-white/60 mb-10 leading-relaxed text-sm">
                  Graduates are certified in the <strong>Revenue Pilot Method</strong>, ensuring they can execute high-stakes diagnostic periods with 100% precision.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 bg-white/5 rounded border border-white/10 text-center">
                    <span className="block text-3xl font-black text-secondary mb-2">92%</span>
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Pilot Success Rate</span>
                  </div>
                  <div className="p-4 bg-white/5 rounded border border-white/10 text-center">
                    <span className="block text-3xl font-black text-secondary mb-2">140+</span>
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Graduates Placed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Persistence Coaching */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black tracking-tighter text-primary mb-4">Continuous Evolution</h2>
            <p className="text-text-muted italic">Learning doesn't stop at placement. We provide lifetime coaching for our graduates.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Monthly Syncs", icon: "sync", desc: "One-on-one sessions with veteran revenue architects to troubleshoot complex deal cycles." },
              { title: "Tooling Updates", icon: "terminal", desc: "Regular training on the latest vPersist-approved tech stack and CRM automation." },
              { title: "Elite Network", icon: "hub", desc: "Access to a private community of high-performance revenue leaders across the globe." }
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-8">
                <div className="w-20 h-20 bg-surface-low border border-surface-high text-primary rounded-2xl flex items-center justify-center mb-8 shadow-revenue rotate-3 group-hover:rotate-0 transition-transform">
                  <span className="material-symbols-outlined text-4xl">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-black text-primary mb-4">{feature.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applied Pilot CTA */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto bg-primary rounded-[2rem] p-16 md:p-24 shadow-revenue relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-none">Ready to upgrade <br/>your <span className="text-secondary">career trajectory?</span></h2>
          <Button variant="tertiary" size="lg" glow className="px-16 py-6 text-xl">Apply to Academy</Button>
          <p className="mt-8 text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">Next Cohort Starts June 2024</p>
        </div>
      </section>
    </div>
  );
}
