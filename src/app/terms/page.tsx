import React from "react";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-8 py-24 md:py-32">
        <span className="text-secondary font-bold tracking-widest text-[10px] uppercase mb-4 block">Legal Framework</span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-primary mb-12">
          Terms of <span className="text-secondary text-base md:text-xl font-bold uppercase tracking-[0.2em] ml-4">Service</span>
        </h1>
        
        <div className="prose prose-slate max-w-none space-y-12 text-text-muted leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-6 border-l-4 border-secondary pl-4">01. Acceptance of Terms</h2>
            <p>
              By accessing or engaging with vPersist&apos;s Revenue Talent as a Service (RTaaS) platform, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, you must refrain from using our architectural services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-6 border-l-4 border-secondary pl-4">02. Engagement Model</h2>
            <p>
              Our &quot;3-Month Pilot&quot; and &quot;Revenue Staffing&quot; models are modular engagements subject to specific Master Service Agreements (MSAs). These terms provide the structural logic for all interactions within our ecosystem.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-6 border-l-4 border-secondary pl-4">03. Intellectual Property</h2>
            <p>
              All proprietary revenue methodologies, data scrapers, and architectural frameworks developed by vPersist remain the sole IP of vPersist. Partners are granted a limited license to utilize these frameworks during the term of their active engagement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-6 border-l-4 border-secondary pl-4">04. Professional Standards</h2>
            <p>
              vPersist maintains a standard of excellence for all deployed talent. Partners agree to provide a professional environment for all revenue specialists and adhere to the agreed-upon reporting structures.
            </p>
          </section>

          <section className="bg-surface-low p-8 rounded-xl border border-surface-high mt-16">
            <h3 className="text-sm font-black uppercase tracking-widest text-primary mb-4">Legal Inquiry</h3>
            <p className="text-sm italic">
              For questions regarding our service agreements or professional standards, please contact our legal desk:
            </p>
            <p className="font-bold text-primary mt-2">legal@vpersist.com</p>
          </section>
        </div>
      </main>
    </div>
  );
}
