import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gold-light"
    >
      {/* Video Background Layer (z-index: 0) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none"
      >
        <source src="/assets/Ultra_realistic_cinematic_food.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Soft Overlay Layer (z-index: 10) - rgba(250, 243, 224, 0.4) for higher video visibility */}
      <div className="absolute inset-0 bg-[#FAF3E0]/40 z-10 pointer-events-none" />

      {/* Content Layer (z-index: 20) */}
      <div className="relative w-full max-w-5xl mx-auto px-4 md:px-6 z-20 flex flex-col items-center text-center space-y-6 md:space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-border bg-white/70 shadow-sm">
          <svg className="w-4 h-4 text-orange-cta" fill="currentColor" viewBox="0 0 256 256">
            <path d="M240,96a16,16,0,0,0-21.49-15l-33.15,11-40-60a16,16,0,0,0-26.68,0l-40,60L25.49,81A16,16,0,0,0,4,96v88a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96ZM216,184H40V105.74l39.46,13.16a16,16,0,0,0,18.06-7.56L128,65.37l30.48,45.97a16,16,0,0,0,18.06,7.56l39.46-13.16Z" />
          </svg>
          <span className="text-xs font-bold tracking-[0.15em] text-orange-cta uppercase">
            Royal Taste. Authentic Tradition.
          </span>
        </div>

        <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-7xl text-purple-brand leading-[1.15] tracking-tight max-w-4xl">
          Thalairaj 21 Spice Biryani
        </h1>

        <p className="text-text-primary font-semibold text-base sm:text-xl max-w-3xl leading-relaxed">
          Experience the culinary masterpiece crafted with a royal blend of 21 handpicked signature spices, layered
          with premium long-grain Basmati rice and slow-cooked to dumpukht perfection. Inspired by the Nizam royal
          kitchens of Hyderabad and southern Nellore spices.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
          <a
            href="https://linktr.ee/thalairajbiryani"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-8 py-4 bg-orange-cta text-white font-bold rounded-lg shadow-md hover:bg-orange-600 hover:shadow-lg hover:-translate-y-0.5 transition-all text-center uppercase tracking-wider text-sm md:text-base focus-visible:outline-none min-h-[48px]"
          >
            Order Now
          </a>
          <a
            href="#menu"
            className="flex items-center justify-center px-8 py-4 border-2 border-purple-brand text-purple-brand font-bold rounded-lg hover:bg-purple-brand/10 hover:-translate-y-0.5 transition-all text-center uppercase tracking-wider text-sm md:text-base focus-visible:outline-none min-h-[48px]"
          >
            Explore Menu
          </a>
        </div>

        {/* Micro Highlights */}
        <div className="flex flex-wrap justify-center gap-y-4 gap-x-8 pt-8 border-t border-gold-border/60 w-full max-w-2xl">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-orange-cta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-bold text-sm text-purple-brand">21 Signature Spices</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-orange-cta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-bold text-sm text-purple-brand">Traditional Dum-Pukht</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-orange-cta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-bold text-sm text-purple-brand">Pure Ghee & Basmati</span>
          </div>
        </div>
      </div>
    </section>
  );
}
