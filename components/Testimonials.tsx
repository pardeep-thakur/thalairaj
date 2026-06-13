import React from "react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

function TestimonialCard({ quote, author, role, rating }: TestimonialCardProps) {
  return (
    <div className="glass-card p-8 rounded-[24px] shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between border border-gold-border/40 group">
      <div>
        {/* Rating Stars */}
        <div className="flex gap-1 text-orange-cta mb-6">
          {Array.from({ length: rating }).map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 fill-current"
              viewBox="0 0 256 256"
            >
              <path d="M240,96a16,16,0,0,0-21.49-15l-33.15,11-40-60a16,16,0,0,0-26.68,0l-40,60L25.49,81A16,16,0,0,0,4,96v88a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96ZM216,184H40V105.74l39.46,13.16a16,16,0,0,0,18.06-7.56L128,65.37l30.48,45.97a16,16,0,0,0,18.06,7.56l39.46-13.16Z" />
            </svg>
          ))}
        </div>

        {/* Quote */}
        <p className="font-serif italic text-text-primary text-base md:text-lg leading-relaxed mb-8">
          "{quote}"
        </p>
      </div>

      {/* Author details */}
      <div className="border-t border-gold-border/30 pt-6 mt-auto">
        <h4 className="font-bold text-purple-brand text-sm md:text-base leading-tight">
          {author}
        </h4>
        <p className="text-text-secondary text-xs md:text-sm mt-0.5">
          {role}
        </p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const reviews = [
    {
      quote: "The complexity of the 21 spice blend is incredible. It's not just heat — it is a fragrant, multi-layered experience. The rice was perfectly separated and cooked to absolute perfection.",
      author: "Aditya Verma",
      role: "Gourmet Food Critic, Bangalore",
      rating: 5,
    },
    {
      quote: "Thalairaj's biryani has become our default catering choice for family events. It tastes genuinely royal, like it was slow-cooked in a palace handi. The mutton is melt-in-your-mouth tender.",
      author: "Priyanka Reddy",
      role: "Founder, Nellore Heritage Club",
      rating: 5,
    },
    {
      quote: "Most food delivery biryanis feel greasy, but Thalairaj is clean, aromatic, and premium. The copper-handi feel is well preserved in their vacuum packaging. Absolutely worth it.",
      author: "Siddharth Menon",
      role: "Senior Executive, Indiranagar",
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="relative py-20 md:py-28 bg-gold-light">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-orange-cta uppercase block mb-3">
            Guest Reviews
          </span>
          <h2 className="font-serif font-black text-3xl md:text-5xl text-purple-brand leading-tight mb-4">
            Loved By Royalty
          </h2>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed">
            Read stories of guests who experienced the authentic taste of Nizam cuisine and our 21-spice secret recipe.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <TestimonialCard
              key={idx}
              quote={review.quote}
              author={review.author}
              role={review.role}
              rating={review.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
