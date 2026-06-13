import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[95vh] lg:min-h-screen flex items-center pt-32 pb-20 md:pt-36 md:pb-24 lg:pt-44 lg:pb-28 overflow-hidden bg-gold-light"
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

      {/* Soft Light Gold Gradient Overlay Layer (z-index: 10) - rgba(250, 243, 224, 0.25-0.35) */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(250, 243, 224, 0.35) 0%, rgba(250, 243, 224, 0.28) 50%, rgba(250, 243, 224, 0.25) 100%)"
        }}
      />

      {/* Content Layer (z-index: 20) */}
      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-6 z-20">
        {/* Semi-transparent text container for visual separation and readability */}
        <div className="bg-white/75 backdrop-blur-lg rounded-luxury border border-white/20 p-5 sm:p-10 md:p-12 shadow-xl flex flex-col items-center text-center lg:items-start lg:text-left space-y-6 md:space-y-8 max-w-4xl mx-auto lg:mx-0">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-border bg-white/70 shadow-sm">
            <svg className="w-4 h-4 text-orange-cta" fill="currentColor" viewBox="0 0 256 256">
              <path d="M240,96a16,16,0,0,0-21.49-15l-33.15,11-40-60a16,16,0,0,0-26.68,0l-40,60L25.49,81A16,16,0,0,0,4,96v88a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96ZM216,184H40V105.74l39.46,13.16a16,16,0,0,0,18.06-7.56L128,65.37l30.48,45.97a16,16,0,0,0,18.06,7.56l39.46-13.16Z" />
            </svg>
            <span className="text-xs font-bold tracking-[0.15em] text-[#F97316] uppercase">
              Royal Taste. Authentic Tradition.
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-7xl text-[#3B0764] leading-[1.15] tracking-tight">
            Thalairaj 21 Spice Biryani
          </h1>

          {/* Paragraph Text */}
          <p className="text-[#374151] font-medium text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl">
            Experience the culinary masterpiece crafted with a royal blend of 21 handpicked signature spices, layered
            with premium long-grain Basmati rice and slow-cooked to dumpukht perfection. Inspired by the Nizam royal
            kitchens of Hyderabad and southern Nellore spices.
          </p>

          {/* Buttons: Primary & Secondary hierarchy */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
            <a
              href="https://linktr.ee/thalairajbiryani"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-4 bg-[#F97316] text-white font-bold rounded-lg shadow-md hover:bg-orange-600 hover:shadow-lg hover:-translate-y-0.5 transition-all text-center uppercase tracking-wider text-sm md:text-base focus-visible:outline-none min-h-[48px]"
            >
              Order Now
            </a>
            <a
              href="#menu"
              className="flex items-center justify-center px-8 py-4 border-2 border-purple-brand/35 text-purple-brand hover:bg-purple-brand/5 hover:border-purple-brand font-bold rounded-lg transition-all text-center uppercase tracking-wider text-sm md:text-base focus-visible:outline-none min-h-[48px]"
            >
              Explore Menu
            </a>
          </div>

          {/* Micro Highlights */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-y-4 gap-x-8 pt-8 border-t border-gold-border/60 w-full">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-cta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-bold text-sm text-[#3B0764]">21 Signature Spices</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-cta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-bold text-sm text-[#3B0764]">Traditional Dum-Pukht</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-cta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-bold text-sm text-[#3B0764]">Pure Ghee & Basmati</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

