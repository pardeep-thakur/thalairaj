import React from "react";
import Image from "next/image";

export default function SpiceStory() {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-cream-warm border-y border-gold-border/40">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Heritage Story */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-orange-cta uppercase block mb-3">
                Our Heritage
              </span>
              <h2 className="font-serif font-black text-3xl md:text-5xl text-purple-brand leading-tight">
                The Legend of Thalaivar-Raja
              </h2>
            </div>

            <div className="space-y-4 text-text-secondary text-base md:text-lg leading-relaxed font-sans">
              <p>
                Nearly a century ago, Chinnasami Selvam was widely celebrated in Nellore as{" "}
                <strong className="text-purple-brand font-bold">"Thalaivar-Raja"</strong> (Thalairaj) for his outstanding culinary skills. Driven by ambition, the young cook migrated to Hyderabad, earning a coveted place in the kitchen of the Nizam of Hyderabad.
              </p>
              <p>
                For 17 glorious years, he worked alongside master chefs, creating custom formulations that delighted the royal court. When he eventually returned to Nellore to settle down, he carried with him the secret blending recipes he had crafted for the Nizam.
              </p>
              <p>
                By blending the delicate royal spices of Hyderabad with the fiery heat of Nellore and the traditional dum baking of his Tamil heritage, he perfected the legendary <strong className="text-purple-brand font-bold">21 Spice Masala</strong>. That recipe has been passed down intact, bringing royalty to your table today.
              </p>
            </div>

            {/* Heritage Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-gold-border/40">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/60 border border-gold-border/30">
                <div className="w-10 h-10 rounded-full bg-purple-brand/5 flex items-center justify-center text-purple-brand shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-text-primary text-sm">Nizam Royal Kitchens</h4>
                  <p className="text-text-secondary text-xs">Authentic court recipes</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/60 border border-gold-border/30">
                <div className="w-10 h-10 rounded-full bg-purple-brand/5 flex items-center justify-center text-purple-brand shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-text-primary text-sm">100-Year Heritage</h4>
                  <p className="text-text-secondary text-xs">Preserved spice secrets</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Sourced Spice Media */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/5] rounded-[24px] overflow-hidden shadow-lg border border-gold-border/60">
              <Image
                src="/assets/about_story.png"
                alt="Finest spices roasted for Thalairaj 21 Spice Masala"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              {/* Subtle elegant gradient overlay at the bottom for caption styling */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6" />
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <span className="text-xs uppercase tracking-widest text-orange-cta font-bold block mb-1">
                  Pure Craft
                </span>
                <p className="font-serif italic text-sm text-gray-200">
                  "Only organic, hand-selected spices from Nellore and Kashmir are ground daily."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
