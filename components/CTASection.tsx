import React from "react";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative py-12 md:py-16 bg-purple-brand overflow-hidden text-center">
      {/* Decorative Ornaments/Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-purple-secondary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-cta/10 rounded-full blur-2xl -z-10" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold-border/10 rounded-full blur-2xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 md:px-6 z-10 flex flex-col items-center space-y-6 md:space-y-8">
        <Image
          src="/assets/thalairaj_logo.png"
          alt="Thalairaj Logo"
          width={48}
          height={48}
          className="object-contain rounded-full border border-gold-border/40 bg-white/10 shadow-sm"
        />

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
