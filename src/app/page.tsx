"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const layerVariants = {
  hidden: { opacity: 0, x: -30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 } 
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col gap-8"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1] text-text-main"
          >
            Deploy Revenue Talent. <span className="text-secondary">Test Fast.</span> Scale with Confidence.
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-text-muted leading-relaxed max-w-xl"
          >
            High-performance revenue teams for B2B companies. We provide the talent, the supervision, and the data-driven systems required to turn your product into a predictable revenue engine.
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Link href="/contact?interest=3-month-pilot">
              <Button variant="tertiary" size="lg" glow>
                Start with a 3-Month Pilot
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </Button>
            </Link>
            <Link href="/staffing">
              <Button variant="secondary" size="lg">
                Explore Revenue Staffing
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* System Visual: Flow Diagram */}
        <div className="relative bg-surface-low p-12 rounded-full shadow-revenue overflow-hidden min-h-[500px] flex items-center justify-center">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #002270 1px, transparent 0)", backgroundSize: "24px 24px" }}></div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="relative w-full flex flex-col gap-6"
          >
            {/* Layer 01: Talent */}
            <motion.div 
              variants={layerVariants}
              whileHover={{ scale: 1.05, x: 10 }}
              className="flex items-center gap-4 bg-white p-6 rounded-xl border-l-4 border-secondary shadow-revenue self-start transform -rotate-2 cursor-pointer group"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined">groups</span>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-text-muted/60">Layer 01</div>
                <div className="text-lg font-bold text-text-main">Expert Talent Pool</div>
              </div>
            </motion.div>
            
            {/* Connection Link */}
            <motion.div variants={itemVariants} className="ml-16 h-8 w-1 bg-secondary/20"></motion.div>

            {/* Layer 02: Supervision */}
            <motion.div 
              variants={layerVariants}
              whileHover={{ scale: 1.05, x: -10 }}
              className="flex items-center gap-4 bg-white p-6 rounded-xl border-l-4 border-primary shadow-revenue self-center w-full max-w-md cursor-pointer group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-text-muted/60">Layer 02</div>
                <div className="text-lg font-bold text-text-main">Supervision & Management</div>
              </div>
            </motion.div>

            {/* Connection Link */}
            <motion.div variants={itemVariants} className="mr-16 h-8 w-1 bg-primary/20 self-end"></motion.div>

            {/* Layer 03: Output */}
            <motion.div 
              variants={layerVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="flex items-center gap-4 bg-primary text-white p-6 rounded-xl shadow-revenue self-end transform rotate-1 cursor-pointer group"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-secondary transition-colors duration-300">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/60">Layer 03</div>
                <div className="text-lg font-bold text-white">Revenue Output</div>
              </div>
            </motion.div>
          </motion.div>
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
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-surface-low border border-surface-high p-8 rounded-xl max-w-sm shadow-revenue"
            >
              <p className="text-text-muted mb-4 font-medium">De-risk your growth strategy with our signature entry point.</p>
              <div className="text-2xl font-black text-primary mb-4">3-Month Pilot</div>
              <Link href="/contact?interest=3-month-pilot">
                <Button className="w-full" glow>Get Started Now</Button>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "bolt", title: "Fast Deployment", desc: "Skip the 6-month hiring cycle. We deploy pre-vetted revenue professionals in under 14 days." },
              { icon: "monitoring", title: "Data Managed", desc: "Our talent doesn't just work; they report into a rigorous, data-driven framework built for visibility." },
              { icon: "layers", title: "Scalable Structure", desc: "Modular teams that grow as your revenue benchmarks are met. No bloated overhead." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}
                className="p-8 bg-surface-low rounded-xl group hover:bg-white border border-transparent hover:border-surface-high transition-all duration-300 cursor-default"
              >
                <span className="material-symbols-outlined text-4xl text-primary mb-6 transition-transform group-hover:scale-110 group-hover:text-secondary duration-300">{feature.icon}</span>
                <h4 className="text-xl font-bold mb-4 text-text-main">{feature.title}</h4>
                <p className="text-text-muted leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section className="max-w-7xl mx-auto px-8 py-24" id="models">
        <h2 className="text-center text-4xl lg:text-5xl font-extrabold text-text-main mb-20 tracking-tight">Flexible Service Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Revenue Staffing Card */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="group bg-white p-12 rounded-2xl shadow-revenue flex flex-col gap-8 border-t-8 border-secondary border border-surface-high"
          >
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
            <Link href="/staffing">
              <Button variant="outline" className="mt-auto py-4 w-full" glow>Explore Staffing</Button>
            </Link>
          </motion.div>

          {/* Demand Gen Card */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="group bg-primary p-12 rounded-2xl shadow-revenue flex flex-col gap-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(13,242,201,0.1),transparent)] opacity-50"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-3xl">architecture</span>
                </div>
                <span className="bg-white/10 text-white px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest">Holistic</span>
              </div>
              <div>
                <h4 className="text-3xl font-bold mb-4 text-white">Demand Gen Setup</h4>
                <p className="text-white/60 text-lg leading-relaxed mb-6">For companies starting from zero or rebuilding. We build the engine, hire the team, and hand over the keys.</p>
              </div>
              <ul className="flex flex-col gap-4 text-white/80 mb-8">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary">check_circle</span> Full CRM Implementation</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary">check_circle</span> ICP & Messaging Framework</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary">check_circle</span> Managed Performance Data</li>
              </ul>
              <Link href="/demand-gen">
                <Button variant="tertiary" className="mt-auto py-4 w-full" glow>Build Your Engine</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demand Gen Setup: Detailed Section */}
      <section className="bg-text-main text-white py-32 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,34,112,0.4),transparent)] opacity-50"></div>
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="relative"
          >
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
            <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-bold leading-tight mb-12 tracking-tight">
              Precision-Engineered <br /><span className="text-secondary">Revenue Engines.</span>
            </motion.h2>
            <div className="space-y-12">
              {[
                { step: "01", title: "ICP & Messaging", desc: "Discovery to identify your highest-value customers and the triggers that make them buy." },
                { step: "02", title: "Talent Alignment", desc: "Matching personality profiles and technical skills to your specific market segment." },
                { step: "03", title: "Process & CRM", desc: "Automated workflows and clean data structures that ensure nothing falls through the cracks." }
              ].map((item, idx) => (
                <motion.div key={idx} variants={itemVariants} className="flex gap-6">
                  <div className="flex-shrink-0 text-secondary font-black text-2xl">{item.step}</div>
                  <div>
                    <h5 className="text-xl font-bold mb-2">{item.title}</h5>
                    <p className="text-white/60">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Visual Block */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm shadow-revenue"
          >
            <div className="aspect-square relative flex items-center justify-center p-8 bg-text-main/50 rounded-2xl overflow-hidden border border-white/5">
              <div className="grid grid-cols-2 gap-4 w-full h-full opacity-20">
                <div className="bg-primary rounded-lg"></div>
                <div className="bg-secondary rounded-lg translate-y-8"></div>
                <div className="bg-secondary rounded-lg -translate-y-4"></div>
                <div className="bg-primary rounded-lg"></div>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                <h4 className="text-3xl font-bold mb-6 tracking-tight">Ready to scale?</h4>
                <p className="text-white/60 mb-8 max-w-sm font-medium italic">&quot;Stop guessing and start deploying proven revenue architecture.&quot;</p>
                <Link href="/contact?interest=build-engine">
                  <Button variant="tertiary" size="lg" glow>
                    Let&apos;s Build Your Engine
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
