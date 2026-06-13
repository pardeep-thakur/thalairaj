"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "h-20 bg-white/95 shadow-md border-b border-gold-border/60"
          : "h-20 bg-white/80 border-b border-gold-border/40"
      } backdrop-blur-md flex items-center`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2 group focus-visible:outline-none">
          {/* Crown Icon */}
          <svg
            className="w-5.5 h-5.5 text-orange-cta transition-transform duration-300 group-hover:scale-110"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M240,96a16,16,0,0,0-21.49-15l-33.15,11-40-60a16,16,0,0,0-26.68,0l-40,60L25.49,81A16,16,0,0,0,4,96v88a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96ZM216,184H40V105.74l39.46,13.16a16,16,0,0,0,18.06-7.56L128,65.37l30.48,45.97a16,16,0,0,0,18.06,7.56l39.46-13.16Z" />
          </svg>
          <span className="font-serif font-extrabold text-xl md:text-2xl tracking-widest text-purple-brand leading-none">
            THALAIRAJ
          </span>
        </Link>

        {/* Navigation Links (Center) */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Home", href: "#home" },
            { label: "Our Menu", href: "#menu" },
            { label: "21 Spices", href: "#spices" },
            { label: "Our Story", href: "#about" },
            { label: "Reviews", href: "#reviews" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative py-2 font-medium text-text-secondary hover:text-purple-brand transition-colors duration-200 group text-sm md:text-base focus-visible:outline-none"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-cta transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Action Button (Right) */}
        <div className="hidden md:block">
          <a
            href="https://linktr.ee/thalairajbiryani"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-orange-cta text-white font-bold rounded-lg shadow-md hover:bg-orange-600 hover:shadow-lg transition-all duration-200 active:scale-95 text-sm uppercase tracking-wider focus-visible:outline-none"
          >
            Order Now
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden items-center justify-center w-11 h-11 rounded-full bg-purple-brand/5 border border-gold-border hover:bg-purple-brand/10 transition-colors focus-visible:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg className="w-6 h-6 text-purple-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-purple-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu (z-index: 60, absolute positioning below header) */}
      <div
        className={`absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-b border-gold-border/40 z-[60] flex flex-col p-6 gap-4 md:hidden transform transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {[
          { label: "Home", href: "#home" },
          { label: "Our Menu", href: "#menu" },
          { label: "21 Spices", href: "#spices" },
          { label: "Our Story", href: "#about" },
          { label: "Reviews", href: "#reviews" },
        ].map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-base font-bold text-gray-900 hover:text-orange-cta transition-colors py-2 focus-visible:outline-none min-h-[44px] flex items-center"
          >
            {link.label}
          </Link>
        ))}
        <div className="mt-2 border-t border-gold-border/30 pt-4">
          <a
            href="https://linktr.ee/thalairajbiryani"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-full px-5 py-3 bg-orange-cta text-white font-bold rounded-lg shadow-md hover:bg-orange-600 transition-all text-center uppercase tracking-wider text-sm min-h-[48px] focus-visible:outline-none"
          >
            Order Now
          </a>
        </div>
      </div>
    </header>
  );
}
