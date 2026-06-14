"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const REVIEWS = [
  {
    name: "Rohan Sharma",
    text: "Absolutely authentic taste! The 21-spice blend in the boneless chicken biryani is perfect—spicy but packed with flavor. Reminds me of traditional Hyderabad dum biryani. Must try!",
    avatar: "RS",
    date: "2 days ago"
  },
  {
    name: "Sneha Iyer",
    text: "The paneer biryani bowl is a lifesaver. Saffron rice is so fragrant and non-greasy, and the paneer is super soft. The portion is perfect for a quick lunch at office.",
    avatar: "SI",
    date: "1 week ago"
  },
  {
    name: "Vikram Goel",
    text: "Hands down the best biryani in Gurgaon. Ordered the family pack for a weekend get-together and my guests were blown away. The chicken was cooked perfectly, fell off the bone.",
    avatar: "VG",
    date: "3 days ago"
  },
  {
    name: "Ananya Sen",
    text: "I love their pepper chicken starter! Extremely fiery and flavorful. The packaging is premium and vacuum-sealed so it arrived steaming hot. Ordering again soon!",
    avatar: "AS",
    date: "5 days ago"
  },
  {
    name: "Karthik Nair",
    text: "Tastes like a royal feast. The rice grains are long and separate. Raita and salan are delicious additions. Truly worth the premium price.",
    avatar: "KN",
    date: "2 weeks ago"
  },
  {
    name: "Priya Chawla",
    text: "Excellent hospitality and super fast delivery. The potato sholay and dum biryani is my absolute favorite combo. 5 stars all the way!",
    avatar: "PC",
    date: "4 days ago"
  },
  {
    name: "Abhishek Rao",
    text: "Ardee Mall outlet never disappoints. Ordered their signature mutton biryani last night and it was sublime. Authentic spices and pure ghee aroma.",
    avatar: "AR",
    date: "1 month ago"
  },
  {
    name: "Meera Deshmukh",
    text: "Love that they have a clean packaging system. The food is fresh, hot, and hygienic. The spice level is just right for people who enjoy real Indian flavors.",
    avatar: "MD",
    date: "3 weeks ago"
  },
  {
    name: "Sanjay Dutt",
    text: "Extremely flavorful pepper mushroom biryani. Perfect option for vegetarians who want something spicy and robust. Highly recommend Thalairaj!",
    avatar: "SD",
    date: "1 week ago"
  },
  {
    name: "Neha Gupta",
    text: "The Nizam royal taste is real. The blending of Nellore spices with Hyderabad dum style is masterclass. Best biryani packaging I have ever seen.",
    avatar: "NG",
    date: "2 days ago"
  }
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      if (!isHovered) {
        emblaApi.scrollNext();
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [emblaApi, isHovered]);

  return (
    <section id="reviews" className="relative py-12 md:py-16 bg-gold-light border-b border-gold-border/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-[0.2em] text-orange-cta uppercase block mb-2">
            Loved by Foodies ❤️
          </span>
          <h2 className="font-serif font-black text-3xl md:text-5xl text-purple-brand leading-tight mb-3">
            Real Reviews From Our Happy Customers
          </h2>
          
          {/* Rating Summary Bar */}
          <div className="inline-flex items-center gap-2.5 bg-purple-brand/5 border border-gold-border/40 px-4 py-2 rounded-full mt-2 shadow-sm">
            <div className="flex text-orange-500">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="text-xs md:text-sm font-bold text-purple-brand uppercase tracking-wider">
              4.8/5 based on 500+ Google Reviews
            </span>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative px-2 sm:px-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Viewport wrapper for Embla */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4 md:-ml-6">
              {REVIEWS.map((review, idx) => (
                <div 
                  key={idx} 
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 md:pl-6 pb-4"
                >
                  {/* Premium Review Card */}
                  <div className="bg-gradient-to-br from-white to-purple-brand/[0.02] border border-gold-border/30 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full min-h-[260px] md:min-h-[280px]">
                    <div>
                      {/* Top Header inside Card: Avatar & Name */}
                      <div className="flex items-center gap-3.5 mb-4">
                        <div className="w-11 h-11 rounded-full bg-purple-brand/5 border border-gold-border/40 flex items-center justify-center font-bold text-sm text-purple-brand shrink-0">
                          {review.avatar}
                        </div>
                        <div>
                          <h4 className="font-bold text-purple-brand text-sm md:text-base leading-tight">
                            {review.name}
                          </h4>
                          <span className="text-[10px] text-text-secondary font-medium">
                            {review.date}
                          </span>
                        </div>
                        
                        {/* G Logo Icon on right */}
                        <div className="ml-auto shrink-0 opacity-70">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.24 10.285V13.4h6.887C18.2 15.614 15.645 18 12.24 18c-3.86 0-7-3.14-7-7s3.14-7 7-7c1.7 0 3.3.6 4.5 1.7l2.44-2.44C17.3 1.42 14.9.77 12.24.77c-5.65 0-10.24 4.59-10.24 10.23s4.59 10.23 10.24 10.23c5.9 0 9.8-4.15 9.8-9.98 0-.67-.06-1.3-.16-1.97H12.24z" />
                          </svg>
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex gap-0.5 text-orange-500 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>

                      {/* Review Text */}
                      <p className="text-text-primary text-sm leading-relaxed italic line-clamp-4">
                        "{review.text}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Left/Right Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-x-6 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-gold-border shadow-md hover:bg-gold-light/20 transition-all items-center justify-center text-purple-brand focus-visible:outline-none"
            aria-label="Previous review"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="hidden lg:flex absolute right-0 top-1/2 translate-x-6 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-gold-border shadow-md hover:bg-gold-light/20 transition-all items-center justify-center text-purple-brand focus-visible:outline-none"
            aria-label="Next review"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                selectedIndex === index ? "bg-orange-cta w-6" : "bg-purple-brand/20 hover:bg-purple-brand/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/maps/place/Thalairaj+Biryani+@+Ardee+Mall/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#F97316] text-white font-bold rounded-lg shadow-md hover:bg-orange-600 hover:shadow-lg hover:-translate-y-0.5 transition-all text-center uppercase tracking-wider text-sm md:text-base focus-visible:outline-none min-h-[48px]"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.24 10.285V13.4h6.887C18.2 15.614 15.645 18 12.24 18c-3.86 0-7-3.14-7-7s3.14-7 7-7c1.7 0 3.3.6 4.5 1.7l2.44-2.44C17.3 1.42 14.9.77 12.24.77c-5.65 0-10.24 4.59-10.24 10.23s4.59 10.23 10.24 10.23c5.9 0 9.8-4.15 9.8-9.98 0-.67-.06-1.3-.16-1.97H12.24z" />
            </svg>
            View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
