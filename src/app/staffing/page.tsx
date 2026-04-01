import React from "react";
import { Button } from "@/components/ui/Button";

export default function StaffingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-surface-high px-4 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Start with a 3-Month Pilot</span>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-primary leading-[1.1] mb-8">
                vPersist Revenue Staffing
              </h1>
              <p className="text-xl md:text-2xl text-text-muted leading-relaxed mb-10 max-w-xl">
                Deploy trained revenue talent with flexible engagement options. Scale your outbound and inbound operations without the overhead of traditional hiring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" glow>
                  Start Your Pilot
                  <span className="material-symbols-outlined ml-2">arrow_forward</span>
                </Button>
                <Button variant="outline" size="lg">
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary to-primary/80 rounded-3xl overflow-hidden shadow-revenue relative group">
                {/* Visual Placeholder for high-performance staffing image */}
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                      <span className="material-symbols-outlined text-white">verified_user</span>
                    </div>
                    <div>
                      <div className="text-white font-bold">98% Success Rate</div>
                      <div className="text-white/70 text-xs uppercase tracking-widest">Pilot-to-Deployment Transition</div>
                    </div>
                  </div>
                  <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[98%]"></div>
                  </div>
                </div>
              </div>
              {/* Asymmetric Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary opacity-20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary opacity-10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Model Section */}
      <section className="py-24 bg-surface-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-primary mb-4 tracking-tight">Choose Your Level of Support</h2>
            <p className="text-text-muted text-lg">Architect your team based on operational maturity and internal bandwidth.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Option 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-revenue hover:shadow-xl transition-all border-b-4 border-transparent hover:border-secondary group">
              <div className="w-14 h-14 bg-surface-low rounded-xl flex items-center justify-center mb-8 group-hover:bg-secondary/10 transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-secondary text-3xl">person_add</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">1. Talent Only</h3>
              <p className="text-text-muted mb-8 leading-relaxed text-sm">
                Experienced revenue professionals ready to plug into your existing workflows and tools.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3 text-xs font-bold text-text-muted">
                  <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                  <span>Vetted Revenue Specialists</span>
                </li>
                <li className="flex items-start space-x-3 text-xs font-bold text-text-muted">
                  <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                  <span>Direct Reporting Line</span>
                </li>
              </ul>
            </div>
            {/* Option 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-revenue hover:shadow-xl transition-all border-b-4 border-transparent hover:border-secondary group relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-secondary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-bl-lg">Recommended</div>
              <div className="w-14 h-14 bg-surface-low rounded-xl flex items-center justify-center mb-8 group-hover:bg-secondary/10 transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-secondary text-3xl">verified</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">2. Talent + Supervision</h3>
              <p className="text-text-muted mb-8 leading-relaxed text-sm">
                Includes a dedicated Quality Control manager ensuring output consistency and performance.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3 text-xs font-bold text-text-muted">
                  <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                  <span>Weekly Performance Audits</span>
                </li>
                <li className="flex items-start space-x-3 text-xs font-bold text-text-muted">
                  <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                  <span>Automated QC Reporting</span>
                </li>
              </ul>
            </div>
            {/* Option 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-revenue hover:shadow-xl transition-all border-b-4 border-transparent hover:border-secondary group">
              <div className="w-14 h-14 bg-surface-low rounded-xl flex items-center justify-center mb-8 group-hover:bg-secondary/10 transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-secondary text-3xl">insights</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">3. Full Ecosystem</h3>
              <p className="text-text-muted mb-8 leading-relaxed text-sm">
                The complete package: trained talent, QC, and full access to our revenue data stack.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3 text-xs font-bold text-text-muted">
                  <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                  <span>Premium Data & Leads</span>
                </li>
                <li className="flex items-start space-x-3 text-xs font-bold text-text-muted">
                  <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                  <span>vPersist Tool Stack</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Table */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-16 tracking-tight text-center">Engagement Framework</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-y-4">
              <thead>
                <tr className="text-left text-text-muted/60 font-bold uppercase tracking-widest text-[10px]">
                  <th className="px-8 pb-4">Tier</th>
                  <th className="px-8 pb-4">Goal</th>
                  <th className="px-8 pb-4">Commitment</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-surface-low rounded-2xl">
                  <td className="px-8 py-8 rounded-l-2xl border-l-4 border-tertiary">
                    <span className="font-bold text-primary text-xl">3-Month Pilot</span>
                  </td>
                  <td className="px-8 py-8 text-text-muted font-medium">Validate Fit</td>
                  <td className="px-8 py-8 rounded-r-2xl text-text-muted font-medium">Short-term</td>
                </tr>
                <tr className="bg-surface-low rounded-2xl">
                  <td className="px-8 py-8 rounded-l-2xl border-l-4 border-secondary">
                    <span className="font-bold text-primary text-xl">6-Month Engagement</span>
                  </td>
                  <td className="px-8 py-8 text-text-muted font-medium">Scale Performance</td>
                  <td className="px-8 py-8 rounded-r-2xl text-text-muted font-medium">Mid-term</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
