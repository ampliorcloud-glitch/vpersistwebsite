"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Staffing", href: "/staffing" },
  { name: "Setup", href: "/demand-gen" },
  { name: "Services", href: "/services" },
  { name: "For Employers", href: "/employers" },
  { name: "Academy", href: "/academy" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-header shadow-revenue py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-black tracking-tighter text-primary">
          vPersist
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[12px] uppercase tracking-widest font-black text-text-muted hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden lg:block">
            <Button variant="outline" size="sm">
              Talk to Team
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="primary" size="sm">
              Start 3-Month Pilot
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
