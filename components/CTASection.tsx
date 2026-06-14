import React from "react";

export default function CTASection() {
  return (
    <section className="relative py-12 md:py-16 bg-purple-brand overflow-hidden text-center">
      {/* Decorative Ornaments/Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-purple-secondary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-cta/10 rounded-full blur-2xl -z-10" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold-border/10 rounded-full blur-2xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 md:px-6 z-10 flex flex-col items-center space-y-6 md:space-y-8">
        <svg
          className="w-10 h-10 text-orange-cta"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M240,96a16,16,0,0,0-21.49-15l-33.15,11-40-60a16,16,0,0,0-26.68,0l-40,60L25.49,81A16,16,0,0,0,4,96v88a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96ZM216,184H40V105.74l39.46,13.16a16,16,0,0,0,18.06-7.56L128,65.37l30.48,45.97a16,16,0,0,0,18.06,7.56l39.46-13.16Z" />
        </svg>

        <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gold-light leading-tight max-w-3xl">
          Experience the Royal Taste of Tradition
        </h2>

        <p className="text-gold-light/80 text-sm md:text-lg max-w-xl leading-relaxed">
          Order our legendary 21-spice biryanis, slow-cooked to dumpukht perfection, and delivered fresh to your doorstep.
        </p>

        <div className="pt-4">
          <a
            href="https://linktr.ee/thalairajbiryani"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 bg-orange-cta text-white font-bold rounded-lg shadow-lg hover:bg-orange-600 hover:shadow-xl hover:-translate-y-0.5 transition-all text-center uppercase tracking-wider text-sm md:text-base focus-visible:outline-none"
          >
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
}
