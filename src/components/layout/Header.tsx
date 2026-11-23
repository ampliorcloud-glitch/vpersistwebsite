"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
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
  const pathname = usePathname();
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
        <Link href="/" aria-label="vPersist home">
          <Image src="/brand/vpersist-logo.png" alt="vPersist" width={164} height={40} unoptimized priority className="h-7 w-auto sm:h-10" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`text-[12px] uppercase tracking-widest font-semibold hover:text-vp-purple transition-colors duration-200 ${pathname === link.href ? "text-vp-purple" : "text-primary"}`}
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
