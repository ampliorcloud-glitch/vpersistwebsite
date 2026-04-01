import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1] text-text-main">
            Deploy Revenue Talent. <span className="text-primary">Test Fast.</span> Scale with Confidence.
          </h1>
          <p className="text-xl text-text-muted leading-relaxed max-w-xl">
            High-performance revenue teams for B2B companies. We provide the talent, the supervision, and the data-driven systems required to turn your product into a predictable revenue engine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="tertiary" size="lg" glow>
              Start with a 3-Month Pilot
              <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </Button>
            <Button variant="secondary" size="lg">
              Explore Revenue Staffing
            </Button>
          </div>
        </div>

        {/* System Visual: Flow Diagram */}
        <div className="relative bg-surface-low p-12 rounded-full shadow-revenue overflow-hidden min-h-[500px] flex items-center justify-center">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #002270 1px, transparent 0)", backgroundSize: "24px 24px" }}></div>
          <div className="relative w-full flex flex-col gap-6">
            {/* Layer 01: Talent */}
            <div className="flex items-center gap-4 bg-white p-6 rounded-xl border-l-4 border-secondary shadow-revenue self-start transform -rotate-2">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">groups</span>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-text-muted/60">Layer 01</div>
                <div className="text-lg font-bold text-text-main">Expert Talent Pool</div>
              </div>
            </div>
            
            {/* Connection Link */}
            <div className="ml-16 h-8 w-1 bg-secondary/20"></div>

            {/* Layer 02: Supervision */}
            <div className="flex items-center gap-4 bg-white p-6 rounded-xl border-l-4 border-primary shadow-revenue self-center w-full max-w-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-text-muted/60">Layer 02</div>
                <div className="text-lg font-bold text-text-main">Supervision & Management</div>
              </div>
            </div>

            {/* Connection Link */}
            <div className="mr-16 h-8 w-1 bg-primary/20 self-end"></div>

            {/* Layer 03: Output */}
            <div className="flex items-center gap-4 bg-primary text-white p-6 rounded-xl shadow-revenue self-end transform rotate-1">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/60">Layer 03</div>
                <div className="text-lg font-bold">Revenue Output</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-white py-24 border-y border-surface-high">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-secondary mb-6">Our Philosophy</h2>
              <h3 className="text-4xl lg:text-5xl font-bold tracking-tight text-text-main">Revenue Talent as a Service (RTaaS)</h3>
            </div>
            <div className="bg-surface-high p-8 rounded-xl max-w-sm shadow-revenue">
              <p className="text-text-muted mb-4 font-medium">De-risk your growth strategy with our signature entry point.</p>
              <div className="text-2xl font-black text-primary mb-4">3-Month Pilot</div>
              <Button className="w-full">Get Started Now</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-surface-low rounded-xl group hover:bg-surface-high transition-all duration-300">
              <span className="material-symbols-outlined text-4xl text-primary mb-6">bolt</span>
              <h4 className="text-xl font-bold mb-4 text-text-main">Fast Deployment</h4>
              <p className="text-text-muted leading-relaxed">Skip the 6-month hiring cycle. We deploy pre-vetted revenue professionals in under 14 days.</p>
            </div>
            <div className="p-8 bg-surface-low rounded-xl group hover:bg-surface-high transition-all duration-300">
              <span className="material-symbols-outlined text-4xl text-primary mb-6">monitoring</span>
              <h4 className="text-xl font-bold mb-4 text-text-main">Data Managed</h4>
              <p className="text-text-muted leading-relaxed">Our talent doesn't just work; they report into a rigorous, data-driven framework built for visibility.</p>
            </div>
            <div className="p-8 bg-surface-low rounded-xl group hover:bg-surface-high transition-all duration-300">
              <span className="material-symbols-outlined text-4xl text-primary mb-6">layers</span>
              <h4 className="text-xl font-bold mb-4 text-text-main">Scalable Structure</h4>
              <p className="text-text-muted leading-relaxed">Modular teams that grow as your revenue benchmarks are met. No bloated overhead.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <h2 className="text-center text-4xl lg:text-5xl font-extrabold text-text-main mb-20 tracking-tight">Flexible Service Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Revenue Staffing Card */}
          <div className="group bg-white p-12 rounded-2xl shadow-revenue flex flex-col gap-8 border-t-8 border-secondary">
            <div className="flex justify-between items-start">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-3xl">hub</span>
              </div>
              <span className="bg-secondary/10 text-secondary px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest">Modular</span>
            </div>
            <div>
              <h4 className="text-3xl font-bold mb-4 text-text-main">Revenue Staffing</h4>
              <p className="text-text-muted text-lg leading-relaxed">Plug specialized talent into your existing sales and marketing workflows. We provide the expertise, you provide the direction.</p>
            </div>
            <ul className="flex flex-col gap-4 text-text-main">
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary">check_circle</span> Specialized SDRs/BDRs</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary">check_circle</span> Sales Operations Support</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary">check_circle</span> Flexible Month-to-Month</li>
            </ul>
            <Button variant="outline" className="mt-auto py-4">Explore Staffing</Button>
          </div>

          {/* Demand Gen Card */}
          <div className="group bg-primary p-12 rounded-2xl shadow-revenue flex flex-col gap-8">
            <div className="flex justify-between items-start">
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-3xl">architecture</span>
              </div>
              <span className="bg-white/10 text-white px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest">Holistic</span>
            </div>
            <div>
              <h4 className="text-3xl font-bold mb-4 text-white">Demand Generation Setup</h4>
              <p className="text-white/60 text-lg leading-relaxed">For companies starting from zero or rebuilding. We build the engine, hire the team, and hand over the keys.</p>
            </div>
            <ul className="flex flex-col gap-4 text-white/80">
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-container">check_circle</span> Full CRM Implementation</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-container">check_circle</span> ICP & Messaging Framework</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-container">check_circle</span> Managed Performance Data</li>
            </ul>
            <Button variant="tertiary" className="mt-auto py-4">Build Your Engine</Button>
          </div>
        </div>
      </section>

      {/* Demand Gen Setup: Detailed Section */}
      <section className="bg-text-main text-white py-32 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,34,112,0.4),transparent)] opacity-50"></div>
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-12 tracking-tight">
              Precision-Engineered <br /><span className="text-secondary">Revenue Engines.</span>
            </h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 text-secondary font-black text-2xl">01</div>
                <div>
                  <h5 className="text-xl font-bold mb-2">ICP & Messaging</h5>
                  <p className="text-white/60">Deep-dive discovery to identify your highest-value customers and the triggers that make them buy.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 text-secondary font-black text-2xl">02</div>
                <div>
                  <h5 className="text-xl font-bold mb-2">Talent Alignment</h5>
                  <p className="text-white/60">Matching personality profiles and technical skills to your specific market segment (SMB to Enterprise).</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 text-secondary font-black text-2xl">03</div>
                <div>
                  <h5 className="text-xl font-bold mb-2">Process & CRM</h5>
                  <p className="text-white/60">Automated workflows and clean data structures that ensure nothing falls through the cracks.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual Block */}
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm shadow-revenue">
            <div className="aspect-square relative flex items-center justify-center p-8 bg-text-main/50 rounded-2xl overflow-hidden border border-white/5">
              <div className="grid grid-cols-2 gap-4 w-full h-full opacity-20">
                <div className="bg-primary rounded-lg"></div>
                <div className="bg-secondary rounded-lg translate-y-8"></div>
                <div className="bg-secondary rounded-lg -translate-y-4"></div>
                <div className="bg-primary rounded-lg"></div>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                <h4 className="text-3xl font-bold mb-6">Ready to scale?</h4>
                <p className="text-white/60 mb-8 max-w-sm font-medium">Stop guessing and start deploying proven revenue architecture.</p>
                <Button variant="tertiary" size="lg" glow>
                  Let's Build Your Revenue Engine
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
