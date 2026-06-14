"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { MenuItem } from "../data/menu";

interface MenuLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
  initialIndex: number;
}

export default function MenuLightbox({ isOpen, onClose, items, initialIndex }: MenuLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Sync index when initialIndex changes
  useEffect(() => {
    setCurrentIndex(initialIndex);
    setIsZoomed(false);
  }, [initialIndex]);

  const handlePrev = useCallback(() => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  }, [items.length]);

  const handleNext = useCallback(() => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  }, [items.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden"; // Prevent background scroll

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (swipeDistance > minSwipeDistance) {
      handleNext(); // Swiped left, show next
    } else if (swipeDistance < -minSwipeDistance) {
      handlePrev(); // Swiped right, show prev
    }
  };

  // Fallback image resolver
  const getDisplayImage = (item: MenuItem) => {
    if (item.imageUrl) return item.imageUrl;
    // Map categories to local fallbacks
    switch (item.category) {
      case "bowls": return "/assets/menu_bowl.png";
      case "family": return "/assets/menu_family.png";
      case "starters": return "/assets/menu_starter.png";
      case "extras": return "/assets/menu_extra.png";
      default: return "/assets/menu_biryani.png";
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col justify-between bg-black/90 backdrop-blur-md transition-opacity duration-300 animate-fadeIn">
      
      {/* Top Header Panel (z-50) */}
      <div className="relative z-50 flex items-center justify-between p-4 bg-gradient-to-b from-black/60 to-transparent text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus-visible:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Close gallery"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Counter */}
        <span className="text-sm font-bold tracking-widest text-gold-light/90">
          {currentIndex + 1} / {items.length}
        </span>

        {/* Zoom Button */}
        <button
          onClick={() => setIsZoomed(!isZoomed)}
          className={`p-2.5 rounded-full transition-colors focus-visible:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center ${
            isZoomed ? "bg-orange-cta text-white" : "bg-white/10 hover:bg-white/20 text-white"
          }`}
          aria-label="Zoom image"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            {isZoomed ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            )}
          </svg>
        </button>
      </div>

      {/* Main Image Display View */}
      <div 
        className="relative flex-grow flex items-center justify-center p-4 select-none touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Left Control Arrow (Desktop only) */}
        <button
          onClick={handlePrev}
          className="hidden md:flex absolute left-6 p-3 rounded-full bg-black/40 border border-white/10 text-white/80 hover:text-white hover:bg-black/60 hover:scale-105 transition-all focus-visible:outline-none min-h-[48px] min-w-[48px] items-center justify-center z-10"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Responsive Image Wrapper */}
        <div className="relative w-full max-w-3xl aspect-square sm:aspect-[4/3] md:aspect-[16/10] max-h-[60vh] flex items-center justify-center overflow-hidden">
          <Image
            src={getDisplayImage(currentItem)}
            alt={currentItem.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 80vw"
            className={`object-contain transition-all duration-300 ${
              isZoomed ? "scale-150 cursor-zoom-out" : "scale-100 cursor-zoom-in"
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          />
        </div>

        {/* Right Control Arrow (Desktop only) */}
        <button
          onClick={handleNext}
          className="hidden md:flex absolute right-6 p-3 rounded-full bg-black/40 border border-white/10 text-white/80 hover:text-white hover:bg-black/60 hover:scale-105 transition-all focus-visible:outline-none min-h-[48px] min-w-[48px] items-center justify-center z-10"
          aria-label="Next image"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Bottom Metadata Panel */}
      <div className="relative z-50 p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent text-white border-t border-white/5">
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          
          {/* Card Title, Rating, and Price */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2.5">
                {/* Veg / Non-Veg Icon */}
                <span
                  className={`w-3.5 h-3.5 rounded-sm flex items-center justify-center border ${
                    currentItem.type === "Veg" ? "border-green-500 p-[2px]" : "border-red-500 p-[2px]"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${currentItem.type === "Veg" ? "bg-green-500" : "bg-red-500"}`} />
                </span>
                <h3 className="font-serif font-black text-lg md:text-xl tracking-wide text-gold-light">
                  {currentItem.name}
                </h3>
              </div>
              
              <div className="flex items-center gap-3 text-xs text-white/70">
                <span className="font-semibold text-white uppercase tracking-wider bg-purple-brand/50 px-2 py-0.5 rounded border border-purple-brand/30">
                  {currentItem.category}
                </span>
                
                {currentItem.rating && (
                  <div className="flex items-center gap-1.5">
                    <span className="text-orange-400 text-sm">★</span>
                    <span className="font-bold text-white">{currentItem.rating}</span>
                    <span className="text-white/50">({currentItem.ratingCount})</span>
                  </div>
                )}

                {currentItem.isBestseller && (
                  <span className="font-bold text-orange-400 uppercase tracking-widest text-[9px] bg-orange-400/15 border border-orange-400/35 px-1.5 py-0.5 rounded">
                    Bestseller
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-baseline gap-2 shrink-0">
              <span className="font-serif font-black text-xl md:text-2xl text-gold-light">
                ₹{currentItem.price}
              </span>
              {currentItem.originalPrice && (
                <span className="text-xs line-through text-white/40">
                  ₹{currentItem.originalPrice}
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          {currentItem.description && (
            <p className="text-xs md:text-sm text-white/80 leading-relaxed max-w-2xl font-light">
              {currentItem.description}
            </p>
          )}

          {/* Delivery platforms shortcuts */}
          <div className="flex gap-3 pt-2">
            <a
              href="https://www.swiggy.com/search?query=Thalairaj+Biryani"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#fc8019] text-white text-xs font-bold rounded-lg hover:bg-orange-600 transition-all flex items-center gap-1.5 focus-visible:outline-none"
            >
              Order on Swiggy
            </a>
            <a
              href="https://www.zomato.com/ncr/thalairaj-biryani-tilak-nagar-new-delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#cb202d] text-white text-xs font-bold rounded-lg hover:bg-red-700 transition-all flex items-center gap-1.5 focus-visible:outline-none"
            >
              Order on Zomato
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
