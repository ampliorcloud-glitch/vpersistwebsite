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
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring" as const, stiffness: 100, damping: 15 } 
  },
};

export default function DemandGenPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-8 py-24 md:py-32 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="z-10"
          >
            <motion.span variants={itemVariants} className="text-secondary font-bold tracking-widest text-[10px] uppercase mb-4 block">Engineered for Performance</motion.span>
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black text-primary tracking-tighter leading-[1.1] mb-8">
              Build Your Demand Generation <span className="text-secondary font-black">Engine from Scratch.</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-text-muted leading-relaxed mb-10 max-w-xl italic">
              &quot;Stop treating pipeline growth as a guessing game. vPersist installs a high-performance outbound architecture tailored for startups and mid-market teams ready to scale with surgical precision.&quot;
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link href="/contact?interest=demand-gen-setup">
                <Button variant="primary" size="lg" glow>
                  Set Up My Demand Gen Engine
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg">
                  View Process Flow
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-surface-low absolute -top-12 -right-12 w-full blur-3xl opacity-50 -z-10"></div>
            <div className="bg-white p-8 rounded-xl shadow-revenue relative border-l-8 border-secondary border border-surface-high">
              <div className="flex flex-col gap-6">
                {[
                  { icon: "hub", color: "text-secondary", label: "Input Architecture", value: "1,200 Verified Leads / Month", delay: 0.4 },
                  { icon: "monitoring", color: "text-primary", label: "Processing Logic", value: "3.8% Demo Conversion", delay: 0.6, offset: true },
                  { icon: "account_balance_wallet", color: "text-amber-500", label: "Output (Revenue)", value: "$1.2M Pipeline Injected", delay: 0.8 }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: stat.delay }}
                    className={`flex items-center gap-4 p-4 bg-surface-low rounded-lg border border-surface-high shadow-inner ${stat.offset ? 'ml-8' : ''}`}
                  >
                    <span className={`material-symbols-outlined ${stat.color} text-3xl transition-transform hover:scale-110 duration-300`}>{stat.icon}</span>
                    <div>
                      <p className="text-[10px] font-black text-text-muted uppercase tracking-widest leading-none mb-1">{stat.label}</p>
                      <p className="text-lg font-black text-primary tracking-tight">{stat.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="bg-surface-low py-24 border-y border-surface-high overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.h2 variants={itemVariants} className="text-4xl font-black tracking-tight mb-8 text-primary leading-none">Why Most Demand Gen <br/><span className="text-red-500 uppercase tracking-tighter">Programs Fail.</span></motion.h2>
              <ul className="space-y-6">
                {[
                  { title: "Undefined ICP", desc: "Targeting everyone means reaching no one. Lack of focus drains your budget." },
                  { title: "Erratic Messaging", desc: "Generic pitches that sound like noise in a crowded inbox." },
                  { title: "Disconnected Tech Stack", desc: "CRM data silos prevent tracking what actually works." }
                ].map((item, idx) => (
                  <motion.li key={idx} variants={itemVariants} className="flex gap-4 group">
                    <span className="material-symbols-outlined text-red-500 group-hover:scale-110 transition-transform">cancel</span>
                    <div>
                      <p className="font-bold text-primary">{item.title}</p>
                      <p className="text-text-muted text-sm italic">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-white p-12 rounded-2xl shadow-revenue border-t-8 border-secondary border border-surface-high relative"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-revenue">
                <span className="material-symbols-outlined text-black font-black">verified</span>
              </div>
              <h2 className="text-3xl font-black tracking-tight mb-8 text-primary leading-tight">The vPersist <br/><span className="text-secondary">Solution Blueprint.</span></h2>
              <p className="text-lg leading-relaxed text-text-muted mb-8 italic font-medium">
                &quot;We don&apos;t provide leads. We provide a permanent infrastructure. We architect the system, train the talent, and deploy the execution framework that stays in your business forever.&quot;
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-surface-low rounded-lg border border-surface-high shadow-inner">
                  <p className="text-2xl font-black text-primary">100%</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-text-muted">Ownership</p>
                </div>
                <div className="p-4 bg-surface-low rounded-lg border border-surface-high shadow-inner">
                  <p className="text-2xl font-black text-primary">24/7</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-text-muted">Visibility</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <span className="text-secondary font-black tracking-widest text-[10px] uppercase mb-4 block">The Methodology</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-primary leading-none">Our 5-Step Architecture</h2>
        </div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {[
            { step: "01", icon: "target", title: "ICP & Targeting", desc: "Data mining to identify exact accounts most likely to convert today.", color: "primary" },
            { step: "02", icon: "chat_bubble", title: "Messaging", desc: "Engineered copywriting that hits pain points and cuts through noise.", color: "secondary" },
            { step: "03", icon: "group_add", title: "Talent", desc: "Dedicated SDRs trained specifically on your brand and our engine.", color: "primary" },
            { step: "04", icon: "settings_input_component", title: "CRM & Workflow", desc: "Clean pipelines and automated hand-offs so nothing falls through.", color: "secondary" },
            { step: "05", icon: "rocket_launch", title: "Execution", desc: "Daily sprint-based management and continuous A/B testing.", color: "primary" }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`bg-white p-8 rounded-xl shadow-revenue relative group border-t-4 ${item.color === 'primary' ? 'border-primary' : 'border-secondary'} transition-all border border-surface-high overflow-hidden cursor-default`}
            >
              <span className="text-6xl font-black text-surface-low absolute top-4 right-4 opacity-30 z-0">{item.step}</span>
              <span className={`material-symbols-outlined ${item.color === 'primary' ? 'text-primary' : 'text-secondary'} mb-6 block text-4xl relative z-10 transition-transform group-hover:scale-110`}>{item.icon}</span>
              <h3 className="text-xl font-bold mb-3 text-primary relative z-10 tracking-tight leading-none">{item.title}</h3>
              <p className="text-xs text-text-muted leading-relaxed relative z-10 italic font-medium">{item.desc}</p>
              <div className="absolute bottom-0 left-0 h-1 bg-secondary w-0 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Outcome Section */}
      <section className="relative bg-primary py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(13,242,201,0.15),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-8">
              You don&apos;t just get people. <br/><span className="text-secondary">You get an engine.</span>
            </h2>
            <p className="text-white/60 text-xl leading-relaxed mb-12 italic font-medium">
              &quot;While others sell hours, we sell infrastructure. vPersist builds the pipeline factory so your sales team can focus purely on closing deals.&quot;
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link href="/contact?interest=demand-gen-outcome">
                <Button variant="tertiary" size="lg" glow>
                  Set Up My Demand Gen Engine
                  <span className="material-symbols-outlined ml-2">bolt</span>
                </Button>
              </Link>
            </div>
            <p className="text-white/40 mt-12 text-sm font-black uppercase tracking-widest">Integrated with Salesforce, HubSpot, and Outreach in under 72 hours.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
