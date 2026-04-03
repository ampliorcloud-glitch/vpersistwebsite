"use client";

import React, { useState, Suspense } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useSearchParams } from "next/navigation";
import { Turnstile } from "@marsidev/react-turnstile";

// Form Schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid business email"),
  company: z.string().min(2, "Company name is required"),
  message: z.string().min(10, "Please provide more details (min 10 characters)"),
  interest: z.string().optional(),
  botField: z.string().max(0, "Bot detected").optional(), // Honeypot
});

type ContactFormData = z.infer<typeof contactSchema>;

function ContactFormContent() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const searchParams = useSearchParams();
  const interestParam = searchParams.get("interest") || "general";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      interest: interestParam,
      botField: "",
    },
  });

  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (data: ContactFormData) => {
    setErrorMessage(null);
    
    if (!turnstileToken) {
      setErrorMessage("Please complete the security verification.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, turnstileToken }),
      });

      // Robust check: Ensure we got a JSON response
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const errorText = await response.text();
        console.error("Non-JSON response from server:", errorText);
        setErrorMessage("Network infrastructure error (403/Forbidden). Please check your domain connection.");
        return;
      }

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        reset();
        setTurnstileToken(""); // Reset for next time
      } else {
        setErrorMessage(result.message || "Security verification failed.");
        if (result.debug) console.warn("Diagnostic codes:", result.debug);
      }
    } catch (error) {
      setErrorMessage("System error. Please try again or contact hello@vpersist.com directly.");
      console.error("Submission crash:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="pt-48 pb-24 px-8 max-w-7xl mx-auto flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-5">
            <span className="text-secondary font-bold tracking-widest text-[10px] uppercase mb-4 block">Get In Touch</span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-primary leading-[1] mb-8">
              Let's architect your <span className="text-secondary">revenue engine.</span>
            </h1>
            <p className="text-lg md:text-xl text-text-muted mb-12 max-w-md italic">
              "Whether you're looking to scale your sales team or optimize your current infrastructure, our specialists are ready to design your path to predictable growth."
            </p>

            <div className="space-y-12">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 flex items-center justify-center bg-surface-low border border-surface-high rounded-xl text-primary shadow-revenue group-hover:border-secondary transition-colors">
                  <span className="material-symbols-outlined text-2xl">mail</span>
                </div>
                <div>
                  <h3 className="font-black text-xl text-primary mb-1">Direct Inquiry</h3>
                  <p className="text-text-muted text-sm mb-2 font-medium">Response within 24 hours</p>
                  <a className="text-secondary font-black hover:underline text-lg" href="mailto:hello@vpersist.com">
                    hello@vpersist.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 flex items-center justify-center bg-surface-low border border-surface-high rounded-xl text-primary shadow-revenue group-hover:border-secondary transition-colors">
                  <span className="material-symbols-outlined text-2xl">location_on</span>
                </div>
                <div>
                  <h3 className="font-black text-xl text-primary mb-1">Office HQ</h3>
                  <p className="text-text-muted text-sm font-medium">San Francisco, CA</p>
                  <p className="text-slate-400 text-xs mt-1 uppercase tracking-widest font-bold">SOMA District Architectural Studio</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form Container */}
          <div className="lg:col-span-7 bg-white p-10 md:p-16 rounded-3xl shadow-revenue relative border border-surface-high overflow-hidden min-h-[600px]">
            <div className="absolute top-0 right-0 w-32 h-3 bg-secondary rounded-tr-3xl"></div>
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      {/* Name */}
                      <div className="space-y-3">
                        <label className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2" htmlFor="name">
                          Full Name
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                        </label>
                        <input 
                          {...register("name")}
                          className={`w-full bg-surface-low border-b-2 rounded-xl px-6 py-4 text-primary focus:ring-0 transition-all outline-none text-base font-medium placeholder:text-slate-300 shadow-inner ${errors.name ? 'border-red-500' : 'border-transparent focus:border-secondary'}`}
                          id="name" 
                          placeholder="Enter your name" 
                        />
                        {errors.name && <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest">{errors.name.message}</p>}
                      </div>
                      {/* Email */}
                      <div className="space-y-3">
                        <label className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2" htmlFor="email">
                          Business Email
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                        </label>
                        <input 
                          {...register("email")}
                          className={`w-full bg-surface-low border-b-2 rounded-xl px-6 py-4 text-primary focus:ring-0 transition-all outline-none text-base font-medium placeholder:text-slate-300 shadow-inner ${errors.email ? 'border-red-500' : 'border-transparent focus:border-secondary'}`}
                          id="email" 
                          placeholder="name@company.com" 
                        />
                        {errors.email && <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest">{errors.email.message}</p>}
                      </div>
                    </div>

                    {/* Company */}
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-primary" htmlFor="company">Company Name</label>
                      <input 
                        {...register("company")}
                        className={`w-full bg-surface-low border-b-2 rounded-xl px-6 py-4 text-primary focus:ring-0 transition-all outline-none text-base font-medium placeholder:text-slate-300 shadow-inner ${errors.company ? 'border-red-500' : 'border-transparent focus:border-secondary'}`}
                        id="company" 
                        placeholder="vPersist Inc." 
                      />
                      {errors.company && <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest">{errors.company.message}</p>}
                    </div>

                    {/* Message */}
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-primary" htmlFor="message">How can we help?</label>
                      <textarea 
                        {...register("message")}
                        className={`w-full bg-surface-low border-b-2 rounded-xl px-6 py-4 text-primary focus:ring-0 transition-all outline-none text-base font-medium placeholder:text-slate-300 shadow-inner min-h-[150px] resize-none ${errors.message ? 'border-red-500' : 'border-transparent focus:border-secondary'}`}
                        id="message" 
                        placeholder="Briefly describe your requirements..." 
                        rows={4} 
                      />
                      {errors.message && <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest">{errors.message.message}</p>}
                    </div>

                    {/* Action */}
                    <div className="pt-6 space-y-8">
                      {/* Honeypot Field (Hidden) */}
                      <input type="text" {...register("botField")} className="hidden" tabIndex={-1} autoComplete="off" />

                      {/* Turnstile Widget */}
                      <div className="flex justify-center md:justify-start">
                        <Turnstile 
                          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""} 
                          onSuccess={(token) => setTurnstileToken(token)}
                          onExpire={() => setTurnstileToken("")}
                        />
                      </div>

                      {errorMessage && (
                        <p className="text-xs font-bold text-red-500 uppercase tracking-widest text-center md:text-left">
                          ⚠️ {errorMessage}
                        </p>
                      )}

                      <div className="flex flex-col md:flex-row items-center gap-8">
                        <Button variant="primary" size="lg" className="w-full md:w-auto px-12" glow type="submit" disabled={isSubmitting}>
                          {isSubmitting ? "Authorizing..." : "Execute Inquiry"}
                          {!isSubmitting && <span className="material-symbols-outlined text-lg ml-2">bolt</span>}
                        </Button>
                        <p className="text-[10px] font-bold text-slate-400 max-w-[220px] uppercase tracking-wider leading-relaxed">
                          By submitting, you agree to our <span className="text-primary hover:underline cursor-pointer">privacy framework</span> and terms.
                        </p>
                      </div>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full text-center py-20"
                >
                  <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-8">
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      className="material-symbols-outlined text-6xl"
                    >
                      check_circle
                    </motion.span>
                  </div>
                  <h2 className="text-3xl font-black text-primary mb-4 tracking-tight">System Authorized.</h2>
                  <p className="text-text-muted text-lg max-w-sm mb-12 italic">
                    "Your revenue inquiry has been successfully deployed. A specialist architect will contact you within 24 hours."
                  </p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                    Submit Another Inquiry
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Global Hub Section */}
      <section className="bg-surface-low py-32 overflow-hidden border-y border-surface-high">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-6 bg-secondary/5 rounded-3xl group-hover:bg-secondary/10 transition-colors duration-500"></div>
              <div className="aspect-video bg-primary-container/20 rounded-2xl overflow-hidden shadow-revenue relative">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                  alt="vPersist HQ" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-revenue border-l-8 border-secondary max-w-xs">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-secondary text-sm">verified</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">Headquarters</span>
                  </div>
                  <p className="text-sm font-bold text-primary leading-snug">Visit us in the heart of SOMA's innovation district.</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-primary mb-8 leading-none">Our Global Hub</h2>
              <p className="text-lg text-text-muted mb-12 leading-relaxed italic">
                "While our technology operates globally, our heart is in San Francisco. We host strategic revenue workshops and pilot deep-dives for our core partners on-site."
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="p-8 bg-white rounded-2xl border border-surface-high shadow-revenue group hover:border-secondary transition-all">
                  <h4 className="text-[10px] font-black uppercase tracking-tighter text-secondary mb-2">Timezone</h4>
                  <p className="text-xl font-black text-primary">Pacific Standard</p>
                </div>
                <div className="p-8 bg-white rounded-2xl border border-surface-high shadow-revenue group hover:border-secondary transition-all">
                  <h4 className="text-[10px] font-black uppercase tracking-tighter text-secondary mb-2">Status</h4>
                  <p className="text-xl font-black text-primary">Operational</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
          <p className="text-xs font-black uppercase tracking-widest text-primary italic">Initializing Architecture Studio...</p>
        </div>
      </div>
    }>
      <ContactFormContent />
    </Suspense>
  );
}
