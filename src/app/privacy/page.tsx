import React from "react";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-8 py-24 md:py-32">
        <span className="text-secondary font-bold tracking-widest text-[10px] uppercase mb-4 block">Information Security</span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-primary mb-12">
          Privacy <span className="text-secondary text-base md:text-xl font-bold uppercase tracking-[0.2em] ml-4">Framework</span>
        </h1>
        
        <div className="prose prose-slate max-w-none space-y-12 text-text-muted leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-6 border-l-4 border-secondary pl-4">01. Overview</h2>
            <p>
              vPersist (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting the architectural integrity of our partners&apos; data. This Privacy Framework outlines how we collect, process, and secure information within our Revenue Talent as a Service (RTaaS) platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-6 border-l-4 border-secondary pl-4">02. Data Collection</h2>
            <p>
              We collect information necessary to architect revenue engines, including:
            </p>
            <ul className="list-none space-y-4 font-medium">
              <li className="flex gap-3"><span className="text-secondary">■</span> Professional contact details (Email, Phone, Title)</li>
              <li className="flex gap-3"><span className="text-secondary">■</span> Company operational data required for staffing alignment</li>
              <li className="flex gap-3"><span className="text-secondary">■</span> CRM metadata for integration and performance auditing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-6 border-l-4 border-secondary pl-4">03. Usage Protocols</h2>
            <p>
              Information is utilized strictly for the deployment and management of revenue talent. We do not sell or trade partner data to third-party entities. All data processing adheres to high-performance security standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-6 border-l-4 border-secondary pl-4">04. Governance</h2>
            <p>
              We maintain rigorous quality control (QC) over all information layers. Partners retain full ownership of their proprietary revenue data and may request architectural audits at any time.
            </p>
          </section>

          <section className="bg-surface-low p-8 rounded-xl border border-surface-high mt-16">
            <h3 className="text-sm font-black uppercase tracking-widest text-primary mb-4">Contact Data Architect</h3>
            <p className="text-sm italic">
              For inquiries regarding data governance and our privacy frameworks, please reach out directly:
            </p>
            <p className="font-bold text-primary mt-2">legal@vpersist.com</p>
          </section>
        </div>
      </main>
    </div>
  );
}
