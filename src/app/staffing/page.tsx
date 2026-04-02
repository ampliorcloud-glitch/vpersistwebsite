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
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring" as const, stiffness: 100, damping: 15 } 
  },
};

export default function StaffingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center space-x-2 bg-surface-low border border-surface-high px-4 py-1.5 rounded-full mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Start with a 3-Month Pilot</span>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h1 variants={cardVariants} className="text-5xl md:text-7xl font-black tracking-tight text-primary leading-[1.1] mb-8">
                vPersist Revenue Staffing
              </motion.h1>
              <motion.p variants={cardVariants} className="text-xl md:text-2xl text-text-muted leading-relaxed mb-10 max-w-xl italic">
                &quot;Deploy trained revenue talent with flexible engagement options. Scale your outbound and inbound operations without the overhead of traditional hiring.&quot;
              </motion.p>
              <motion.div variants={cardVariants} className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact?interest=3-month-pilot">
                  <Button variant="primary" size="lg" glow>
                    Start Your Pilot
                    <span className="material-symbols-outlined ml-2">arrow_forward</span>
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg">
                    View Case Studies
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary to-primary/80 rounded-3xl overflow-hidden shadow-revenue relative group">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shadow-revenue">
                      <span className="material-symbols-outlined text-black font-black">verified_user</span>
                    </div>
                    <div>
                      <div className="text-white font-bold">98% Success Rate</div>
                      <div className="text-white/70 text-xs uppercase tracking-widest">Pilot-to-Deployment Transition</div>
                    </div>
                  </div>
                  <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "98%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-secondary"
                    ></motion.div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary opacity-20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary opacity-10 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Model Section */}
      <section className="py-24 bg-surface-low border-y border-surface-high">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={containerVariants}
             className="mb-16"
          >
            <motion.h2 variants={cardVariants} className="text-3xl md:text-5xl font-black text-primary mb-4 tracking-tight">Choose Your Level of Support</motion.h2>
            <motion.p variants={cardVariants} className="text-text-muted text-lg italic">Architect your team based on operational maturity and internal bandwidth.</motion.p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "person_add", title: "1. Talent Only", desc: "Experienced revenue professionals ready to plug into your existing workflows and tools.", list: ["Vetted Revenue Specialists", "Direct Reporting Line"] },
              { icon: "verified", title: "2. Talent + Supervision", desc: "Includes a dedicated Quality Control manager ensuring output consistency and performance.", list: ["Weekly Performance Audits", "Automated QC Reporting"], badge: "Recommended" },
              { icon: "insights", title: "3. Full Ecosystem", desc: "The complete package: trained talent, QC, and full access to our revenue data stack.", list: ["Premium Data & Leads", "vPersist Tool Stack"] }
            ].map((option, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-revenue hover:shadow-xl transition-all border-b-4 border-transparent hover:border-secondary group relative overflow-hidden h-full flex flex-col"
              >
                {option.badge && <div className="absolute top-0 right-0 bg-secondary text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-bl-lg">{option.badge}</div>}
                <div className="w-14 h-14 bg-surface-low rounded-xl flex items-center justify-center mb-8 group-hover:bg-secondary/10 transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-secondary text-3xl">{option.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 tracking-tight">{option.title}</h3>
                <p className="text-text-muted mb-8 leading-relaxed text-sm italic">
                  &quot;{option.desc}&quot;
                </p>
                <ul className="space-y-4 mb-8 flex-grow">
                  {option.list.map((li, i) => (
                    <li key={i} className="flex items-start space-x-3 text-xs font-bold text-text-muted">
                      <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/contact?interest=${option.title.toLowerCase()}`}>
                  <Button variant="outline" className="w-full" glow>Select Model</Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Table */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black text-primary mb-16 tracking-tight text-center"
          >
            Engagement Framework
          </motion.h2>
          <div className="overflow-x-auto">
            <motion.table 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="w-full border-separate border-spacing-y-4"
            >
              <thead>
                <tr className="text-left text-text-muted/60 font-bold uppercase tracking-widest text-[10px]">
                  <th className="px-8 pb-4">Tier</th>
                  <th className="px-8 pb-4">Goal</th>
                  <th className="px-8 pb-4">Commitment</th>
                </tr>
              </thead>
              <tbody>
                <motion.tr whileHover={{ scale: 1.01 }} className="bg-surface-low rounded-2xl cursor-default group transition-colors hover:bg-surface-high">
                  <td className="px-8 py-8 rounded-l-2xl border-l-4 border-secondary">
                    <span className="font-black text-primary text-xl">3-Month Pilot</span>
                  </td>
                  <td className="px-8 py-8 text-text-muted font-bold tracking-tight">Validate Fit & Signal</td>
                  <td className="px-8 py-8 rounded-r-2xl text-text-muted font-black uppercase tracking-widest text-[10px]">Short-term Modular</td>
                </motion.tr>
                <motion.tr whileHover={{ scale: 1.01 }} className="bg-surface-low rounded-2xl cursor-default group transition-colors hover:bg-surface-high">
                  <td className="px-8 py-8 rounded-l-2xl border-l-4 border-primary">
                    <span className="font-black text-primary text-xl">6-Month Engagement</span>
                  </td>
                  <td className="px-8 py-8 text-text-muted font-bold tracking-tight">Scale Revenue Output</td>
                  <td className="px-8 py-8 rounded-r-2xl text-text-muted font-black uppercase tracking-widest text-[10px]">Mid-term Strategic</td>
                </motion.tr>
              </tbody>
            </motion.table>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(13,242,201,0.15),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-none">
            Ready to deploy?
          </h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto mb-12 font-medium italic">
            &quot;Stop the overhead of traditional hiring. Modular staffing built for performance, starting with a 90-day benchmark phase.&quot;
          </p>
          <div className="flex justify-center">
            <Link href="/contact?interest=staffing-start">
              <Button variant="tertiary" size="lg" glow>Initialize Staffing Pilot</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
