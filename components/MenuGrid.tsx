"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { MENU_DATA, CATEGORIES, MenuItem } from "../data/menu";
import MenuLightbox from "./MenuLightbox";

export default function MenuGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [foodType, setFoodType] = useState<"all" | "veg" | "non-veg">("all");
  const [isBestsellerOnly, setIsBestsellerOnly] = useState(false);
  const [sortBy, setSortBy] = useState<"popular" | "price-low" | "price-high" | "rating">("popular");

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Track image load errors to fall back gracefully
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const getDisplayImage = (item: MenuItem) => {
    if (imageErrors[item.id] || !item.imageUrl) {
      switch (item.category) {
        case "bowls": return "/assets/menu_bowl.png";
        case "family": return "/assets/menu_family.png";
        case "starters": return "/assets/menu_starter.png";
        case "extras": return "/assets/menu_extra.png";
        default: return "/assets/menu_biryani.png";
      }
    }
    return item.imageUrl;
  };

  // Filter & Sort Logic
  const filteredItems = useMemo(() => {
    let items = MENU_DATA.filter((item) => {
      // Category filter
      if (activeCategory === "recommended") {
        if (!item.isBestseller) return false;
      } else if (activeCategory !== "all" && item.category !== activeCategory) {
        return false;
      }

      // Veg/Non-Veg filter
      if (foodType === "veg" && item.type !== "Veg") return false;
      if (foodType === "non-veg" && item.type !== "Non-veg") return false;

      // Bestseller only toggle
      if (isBestsellerOnly && !item.isBestseller) return false;

      // Search keyword filter (Fuzzy search)
      if (searchKeyword) {
        const keyword = searchKeyword.toLowerCase();
        return (
          item.name.toLowerCase().includes(keyword) ||
          item.description.toLowerCase().includes(keyword)
        );
      }

      return true;
    });

    // Sorting Logic
    if (sortBy === "price-low") {
      items = [...items].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      items = [...items].sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      items = [...items].sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    return items;
  }, [activeCategory, foodType, isBestsellerOnly, searchKeyword, sortBy]);

  const openLightbox = (item: MenuItem) => {
    const idx = filteredItems.findIndex((fi) => fi.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
      setLightboxOpen(true);
    }
  };

  return (
    <section id="menu" className="relative py-12 md:py-16 bg-cream-warm">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-[0.2em] text-orange-cta uppercase block mb-3">
            Royal Feast Menu
          </span>
          <h2 className="font-serif font-black text-3xl md:text-5xl text-purple-brand leading-tight mb-3">
            Explore Our Culinary Treasures
          </h2>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed">
            Organized from Nizam kitchens to Swiggy hotlists. Use filters below to customize your royal feast.
          </p>
        </div>

        {/* Filter Panel (Glassmorphism design) */}
        <div className="glass-panel p-5 rounded-2xl mb-8 shadow-sm border border-gold-border/30">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input (col-span-4) */}
            <div className="relative md:col-span-4 w-full">
              <svg
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-brand/60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search royal dishes..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-gold-border/60 focus:border-purple-brand focus:ring-2 focus:ring-purple-brand/20 outline-none transition-all text-sm font-medium text-text-primary shadow-sm"
              />
            </div>

            {/* Food Type Toggle (col-span-3) */}
            <div className="md:col-span-3 flex bg-white border border-gold-border/60 rounded-xl p-1 shadow-sm w-full">
              {(["all", "veg", "non-veg"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setFoodType(type)}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all focus-visible:outline-none ${
                    foodType === type
                      ? type === "veg"
                        ? "bg-green-600 text-white shadow-sm"
                        : type === "non-veg"
                        ? "bg-red-600 text-white shadow-sm"
                        : "bg-purple-brand text-white shadow-sm"
                      : "text-text-secondary hover:bg-gold-light/20"
                  }`}
                >
                  {type === "all" ? "All" : type === "veg" ? "Veg" : "Non-Veg"}
                </button>
              ))}
            </div>

            {/* Bestseller Toggle Checkbox (col-span-2) */}
            <div className="md:col-span-2 flex items-center justify-center bg-white border border-gold-border/60 rounded-xl px-4 py-2.5 shadow-sm w-full select-none">
              <label className="flex items-center gap-2.5 cursor-pointer w-full justify-between md:justify-center">
                <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Bestsellers</span>
                <input
                  type="checkbox"
                  checked={isBestsellerOnly}
                  onChange={(e) => setIsBestsellerOnly(e.target.checked)}
                  className="w-4 h-4 rounded text-orange-500 border-gold-border focus:ring-orange-500 accent-orange-cta cursor-pointer"
                />
              </label>
            </div>

            {/* Sorting Dropdown (col-span-3) */}
            <div className="md:col-span-3 relative w-full">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-4 py-2.5 bg-white rounded-xl border border-gold-border/60 focus:border-purple-brand focus:ring-2 focus:ring-purple-brand/20 outline-none transition-all text-sm font-bold text-text-secondary shadow-sm appearance-none cursor-pointer"
              >
                <option value="popular">Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating: High to Low</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-text-secondary">
                <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>

          </div>
        </div>

        {/* Sticky Horizontal Categories Bar */}
        <div className="sticky top-20 z-40 bg-cream-warm/95 backdrop-blur shadow-sm border-b border-gold-border/30 -mx-4 px-4 sm:-mx-6 sm:px-6 py-3 mb-8">
          <div className="max-w-7xl mx-auto overflow-x-auto no-scrollbar flex items-center gap-2.5 scroll-smooth snap-x">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`snap-start shrink-0 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all focus-visible:outline-none min-h-[38px] flex items-center justify-center border ${
                  activeCategory === cat.id
                    ? "bg-purple-brand text-white border-purple-brand shadow-md shadow-purple-brand/10"
                    : "bg-white text-text-secondary border-gold-border/60 hover:bg-gold-light/20"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid / List */}
        {filteredItems.length > 0 ? (
          <div>
            {/* Desktop View (Grid Layout) */}
            <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredItems.map((item) => {
                const isItemBestseller = item.isBestseller;
                return (
                  <div
                    key={item.id}
                    className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between border group relative ${
                      isItemBestseller ? "border-orange-cta/40 hover:border-orange-cta/80 ring-1 ring-orange-cta/5" : "border-gold-border/30"
                    }`}
                  >
                    <div>
                      {/* Image Container */}
                      <div 
                        className="relative w-full aspect-[4/3] bg-gold-light/10 overflow-hidden cursor-pointer select-none"
                        onClick={() => openLightbox(item)}
                      >
                        <Image
                          src={getDisplayImage(item)}
                          alt={item.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 30vw"
                          loading="lazy"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={() => handleImageError(item.id)}
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="bg-white/90 text-purple-brand font-bold text-xs px-3.5 py-1.5 rounded-full shadow flex items-center gap-1.5">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            View Details
                          </span>
                        </div>

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                          {isItemBestseller && (
                            <span className="font-bold text-white text-[9px] uppercase tracking-widest bg-orange-cta border border-orange-500/50 px-2 py-0.5 rounded shadow-sm">
                              Bestseller
                            </span>
                          )}
                          <span className="text-[10px] font-bold text-white uppercase tracking-wider bg-purple-brand/80 px-2 py-0.5 rounded shadow-sm w-max">
                            {item.category}
                          </span>
                        </div>

                        {/* Veg / Non-Veg Indicator */}
                        <span
                          className={`absolute top-3 right-3 w-5 h-5 rounded bg-white shadow-sm flex items-center justify-center border z-10 ${
                            item.type === "Veg" ? "border-green-600 p-[3px]" : "border-red-600 p-[3px]"
                          }`}
                        >
                          <span className={`w-2 h-2 rounded-full ${item.type === "Veg" ? "bg-green-600" : "bg-red-600"}`} />
                        </span>
                      </div>

                      {/* Content Section */}
                      <div className="p-5">
                        <div className="flex justify-between items-start gap-2 mb-2">
                          <h4 className="font-serif font-black text-text-primary text-base leading-tight group-hover:text-purple-brand transition-colors">
                            {item.name}
                          </h4>
                        </div>

                        {/* Rating block */}
                        {item.rating && (
                          <div className="flex items-center gap-1 mb-2 text-xs text-text-secondary font-bold">
                            <span className="text-orange-cta text-sm leading-none">★</span>
                            <span className="text-text-primary">{item.rating}</span>
                            <span className="font-medium text-text-secondary/70">({item.ratingCount})</span>
                          </div>
                        )}

                        <p className="text-text-secondary text-xs leading-relaxed line-clamp-3 mb-2 font-medium">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Pricing and Action row */}
                    <div className="px-5 pb-5 pt-3 border-t border-gold-border/20 flex items-center justify-between">
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-serif font-black text-lg text-purple-brand">
                          ₹{item.price}
                        </span>
                        {item.originalPrice && (
                          <span className="text-xs line-through text-text-secondary/50">
                            ₹{item.originalPrice}
                          </span>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <a
                          href="https://www.swiggy.com/search?query=Thalairaj+Biryani"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 bg-[#fc8019] text-white text-[10px] font-bold rounded-lg hover:bg-orange-600 transition-all flex items-center min-h-[30px]"
                        >
                          Swiggy
                        </a>
                        <a
                          href="https://www.zomato.com/ncr/thalairaj-biryani-tilak-nagar-new-delhi"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 bg-[#cb202d] text-white text-[10px] font-bold rounded-lg hover:bg-red-700 transition-all flex items-center min-h-[30px]"
                        >
                          Zomato
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile View (Swiggy-style Horizontal Row Cards) */}
            <div className="sm:hidden flex flex-col gap-1">
              {filteredItems.map((item) => {
                const isItemBestseller = item.isBestseller;
                return (
                  <div
                    key={item.id}
                    className={`flex items-start justify-between py-5 border-b border-gold-border/30 bg-white/40 backdrop-blur-sm px-3.5 rounded-xl mb-3 border ${
                      isItemBestseller ? "border-orange-cta/30" : "border-transparent"
                    }`}
                  >
                    {/* Left text column */}
                    <div className="flex-grow pr-4">
                      {/* Badge / Indicator Row */}
                      <div className="flex items-center gap-2 mb-1.5">
                        <span
                          className={`w-3.5 h-3.5 rounded-sm flex items-center justify-center border bg-white ${
                            item.type === "Veg" ? "border-green-600 p-[2px]" : "border-red-600 p-[2px]"
                          }`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${item.type === "Veg" ? "bg-green-600" : "bg-red-600"}`} />
                        </span>

                        {isItemBestseller && (
                          <span className="font-bold text-orange-600 uppercase tracking-widest text-[9px] bg-orange-100/60 border border-orange-200 px-1 py-0.5 rounded">
                            Bestseller
                          </span>
                        )}
                      </div>

                      {/* Name */}
                      <h4 className="font-serif font-black text-text-primary text-sm leading-snug mb-1">
                        {item.name}
                      </h4>

                      {/* Price */}
                      <div className="flex items-baseline gap-1.5 mb-1.5">
                        <span className="font-serif font-black text-sm text-purple-brand">
                          ₹{item.price}
                        </span>
                        {item.originalPrice && (
                          <span className="text-[10px] line-through text-text-secondary/50">
                            ₹{item.originalPrice}
                          </span>
                        )}
                      </div>

                      {/* Ratings */}
                      {item.rating && (
                        <div className="flex items-center gap-1 mb-2 text-[10px] text-text-secondary font-bold">
                          <span className="text-orange-cta text-xs leading-none">★</span>
                          <span className="text-text-primary">{item.rating}</span>
                          <span className="font-medium text-text-secondary/70">({item.ratingCount})</span>
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-text-secondary text-xs leading-normal line-clamp-2 pr-1 font-light">
                        {item.description}
                      </p>
                    </div>

                    {/* Right media column */}
                    <div className="flex flex-col items-center shrink-0 w-28 gap-2.5">
                      <div 
                        className="relative w-28 h-28 rounded-xl bg-gold-light/20 overflow-hidden cursor-pointer shadow-sm border border-gold-border/20"
                        onClick={() => openLightbox(item)}
                      >
                        <Image
                          src={getDisplayImage(item)}
                          alt={item.name}
                          fill
                          sizes="112px"
                          loading="lazy"
                          className="object-cover"
                          onError={() => handleImageError(item.id)}
                        />
                        {/* Zoom overlay indicator */}
                        <div className="absolute bottom-1 right-1 bg-black/60 rounded p-1 text-[8px] text-white flex items-center gap-0.5">
                          <svg className="w-2 h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                          Zoom
                        </div>
                      </div>

                      {/* Order Buttons */}
                      <div className="flex gap-1.5 w-full justify-between">
                        <a
                          href="https://www.swiggy.com/search?query=Thalairaj+Biryani"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-1.5 bg-[#fc8019] text-white text-[9px] font-bold rounded hover:bg-orange-600 transition-all text-center min-h-[26px] flex items-center justify-center focus-visible:outline-none"
                        >
                          Swiggy
                        </a>
                        <a
                          href="https://www.zomato.com/ncr/thalairaj-biryani-tilak-nagar-new-delhi"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-1.5 bg-[#cb202d] text-white text-[9px] font-bold rounded hover:bg-red-700 transition-all text-center min-h-[26px] flex items-center justify-center focus-visible:outline-none"
                        >
                          Zomato
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-gold-border/30 shadow-inner flex flex-col items-center justify-center p-6 max-w-md mx-auto">
            <svg
              className="w-12 h-12 text-gold-border mb-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h4 className="font-serif font-black text-text-primary text-lg mb-1">
              No Dishes Match Filters
            </h4>
            <p className="text-text-secondary text-xs">
              Try adjusting search terms, toggling the Veg/Non-Veg buttons, or resetting category selections.
            </p>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      <MenuLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={filteredItems}
        initialIndex={lightboxIndex}
      />
    </section>
  );
}
