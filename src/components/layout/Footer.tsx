import React from "react";
import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Staffing Solutions", href: "/staffing" },
      { name: "Demand Gen Setup", href: "/demand-gen" },
      { name: "For Employers", href: "/employers" },
      { name: "Academy", href: "/academy" },
    ],
  },
  {
    title: "Core Differentiation",
    links: [
      { name: "Success Services", href: "/services" },
      { name: "Methodology", href: "/about" },
      { name: "Contact Architecture", href: "/contact" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-primary pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Branding Column */}
        <div className="flex flex-col gap-6">
          <Link href="/" aria-label="vPersist home">
            <Image src="/brand/vpersist-logo-white.svg" alt="vPersist" width={163} height={40} unoptimized />
          </Link>
          <p className="text-sm text-white/60 leading-relaxed max-w-[240px]">
            The high-performance architecture for modern B2B revenue teams. 
            Precision staffing, delivered at scale.
          </p>
        </div>

        {/* Dynamic Link Columns */}
        {footerLinks.map((column) => (
          <div key={column.title} className="flex flex-col gap-6">
            <h5 className="font-bold text-white text-sm uppercase tracking-widest">
              {column.title}
            </h5>
            <ul className="flex flex-col gap-4">
              {column.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact Column */}
        <div className="flex flex-col gap-6">
          <h5 className="font-bold text-white text-sm uppercase tracking-widest">
            Contact
          </h5>
          <p className="text-sm text-white/60 leading-relaxed">
            Ready to accelerate your revenue?
            <br />
            Reach out to our team today.
          </p>
          <Link
            href="mailto:hello@vpersist.com"
            className="text-sm font-bold text-white hover:underline"
          >
            hello@vpersist.com
          </Link>
        </div>
      </div>

      {/* Baseline Footer */}
      <div className="max-w-7xl mx-auto px-8 mt-24 pt-8 border-t border-white/10 flex justify-between items-center text-xs text-white/60">
        <p>© {new Date().getFullYear()} vPersist. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};
