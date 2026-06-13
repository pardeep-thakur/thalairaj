"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";

// Full menu database from original script
const MENU_DATA = [
  // Biryani Bowls
  {
    id: "bowl-boneless-chick",
    name: "Boneless Chicken Biryani Bowl",
    price: 219,
    desc: "Aromatic basmati rice layered with tender, spiced boneless chicken chunks. Perfect single-serving portion.",
    category: "bowls",
    isVeg: false,
    spicyLevel: 1,
  },
  {
    id: "bowl-pepper-chick",
    name: "Pepper Chicken Biryani Bowl",
    price: 219,
    desc: "Flavourful biryani rice served with a fiery topping of boneless pepper chicken fry.",
    category: "bowls",
    isVeg: false,
    spicyLevel: 2,
  },
  {
    id: "bowl-exotic-paneer",
    name: "Exotic Paneer Biryani Bowl",
    price: 219,
    desc: "Saffron-infused rice served with rich, pan-seared spiced cottage cheese cubes.",
    category: "bowls",
    isVeg: true,
    spicyLevel: 1,
  },
  {
    id: "bowl-pepper-shroom",
    name: "Pepper Mushroom Biryani Bowl",
    price: 219,
    desc: "Indulgent basmati rice bowl topped with black pepper stir-fried fresh mushrooms.",
    category: "bowls",
    isVeg: true,
    spicyLevel: 2,
  },
  // Biryanis & Rice
  {
    id: "biryani-boneless-chick",
    name: "Boneless Chicken Biryani",
    price: 289,
    desc: "Our signature boneless chicken biryani cooked with traditional long-grain rice and handpicked 21 spices.",
    category: "biryanis",
    isVeg: false,
    spicyLevel: 1,
  },
  {
    id: "biryani-dum-chick",
    name: "Chicken Dum Biryani",
    price: 295,
    desc: "Classic slow-cooked Hyderabadi-style basmati rice with bone-in tender chicken, infused with saffron.",
    category: "biryanis",
    isVeg: false,
    spicyLevel: 2,
  },
  {
    id: "biryani-kebab",
    name: "Kebab Biryani",
    price: 285,
    desc: "Unique blend of charcoal-grilled juicy chicken kebabs layered in flavorful biryani rice.",
    category: "biryanis",
    isVeg: false,
    spicyLevel: 1,
  },
  {
    id: "biryani-pep-chick",
    name: "Pepper Chicken Boneless Biryani",
    price: 289,
    desc: "Fragrant basmati rice served alongside Southern-style boneless black pepper chicken dry fry.",
    category: "biryanis",
    isVeg: false,
    spicyLevel: 2,
  },
  {
    id: "biryani-exotic-paneer",
    name: "Exotic Paneer Biryani",
    price: 289,
    desc: "Premium basmati rice slow-baked with marinated fresh paneer cubes, mint, and saffron.",
    category: "biryanis",
    isVeg: true,
    spicyLevel: 1,
  },
  {
    id: "biryani-pep-paneer",
    name: "Pepper Paneer Biryani",
    price: 275,
    desc: "Rich saffron rice baked with dry-spiced paneer cubes stir-fried with cracked black pepper.",
    category: "biryanis",
    isVeg: true,
    spicyLevel: 2,
  },
  {
    id: "biryani-pep-shroom",
    name: "Pepper Mushroom Biryani",
    price: 259,
    desc: "Aromatic basmati rice cooked with fresh mushrooms seasoned with Southern black pepper masala.",
    category: "biryanis",
    isVeg: true,
    spicyLevel: 2,
  },
  {
    id: "biryani-potato-dum",
    name: "Potato Dum Biryani",
    price: 239,
    desc: "Authentic dum-style vegetarian biryani cooked with herb-marinated baby potatoes.",
    category: "biryanis",
    isVeg: true,
    spicyLevel: 1,
  },
  {
    id: "biryani-egg",
    name: "Egg Biryani",
    price: 219,
    desc: "Savory basmati biryani rice served with hard-boiled eggs tossed in a spicy masala glaze.",
    category: "biryanis",
    isVeg: false,
    spicyLevel: 1,
  },
  {
    id: "biryani-rice-only",
    name: "Signature Biryani Rice",
    price: 199,
    desc: "Our highly aromatic seasoned basmati rice without meat, cooked in signature spices.",
    category: "biryanis",
    isVeg: true,
    spicyLevel: 1,
  },
  {
    id: "rice-plain",
    name: "Plain Basmati Rice",
    price: 129,
    desc: "Perfectly steamed, premium long-grain white basmati rice.",
    category: "biryanis",
    isVeg: true,
    spicyLevel: 0,
  },
  // Family Packs
  {
    id: "fam-boneless-chick",
    name: "Boneless Chicken Biryani Family Pack",
    price: 875,
    desc: "Feeds 3-4 people. Served with generous portions of boneless chicken biryani, extra raita, and salan.",
    category: "family",
    isVeg: false,
    spicyLevel: 1,
  },
  {
    id: "fam-pep-chick",
    name: "Pepper Chicken Boneless Biryani Family Pack",
    price: 875,
    desc: "Feeds 3-4 people. Saffron rice combined with extra-spicy boneless black pepper chicken fry.",
    category: "family",
    isVeg: false,
    spicyLevel: 2,
  },
  {
    id: "fam-dum-chick",
    name: "Dum Chicken Biryani Family Pack",
    price: 875,
    desc: "Feeds 3-4 people. Authentic classic slow-cooked bone-in chicken dum biryani, classic family size.",
    category: "family",
    isVeg: false,
    spicyLevel: 2,
  },
  {
    id: "fam-kebab-chick",
    name: "Kebab Chicken Biryani Family Pack",
    price: 849,
    desc: "Feeds 3-4 people. Perfect combination of charcoal-grilled chicken kebabs layered in biryani rice.",
    category: "family",
    isVeg: false,
    spicyLevel: 1,
  },
  {
    id: "fam-exotic-paneer",
    name: "Exotic Paneer Biryani Family Pack",
    price: 849,
    desc: "Feeds 3-4 people. Indulgent vegetarian feast of slow-baked paneer biryani for family gatherings.",
    category: "family",
    isVeg: true,
    spicyLevel: 1,
  },
  {
    id: "fam-pep-shroom",
    name: "Pepper Mushroom Biryani Family Pack",
    price: 825,
    desc: "Feeds 3-4 people. Loaded with delicious pepper-seasoned mushrooms layered in premium basmati.",
    category: "family",
    isVeg: true,
    spicyLevel: 2,
  },
  // Starters
  {
    id: "start-neruppu-21",
    name: "Neruppu Chicken 21 Boneless",
    price: 249,
    desc: "Our absolute bestseller! Fiery, hot pan-fried boneless chicken tossed in a secret spicy red glaze.",
    category: "starters",
    isVeg: false,
    spicyLevel: 3,
  },
  {
    id: "start-kebab-full",
    name: "Chicken Kebab Boneless (Full)",
    price: 229,
    desc: "Crispy, deep-fried spiced boneless chicken bites marinated in yogurt and traditional herbs.",
    category: "starters",
    isVeg: false,
    spicyLevel: 1,
  },
  {
    id: "start-pep-chick",
    name: "Pepper Chicken Fry Boneless",
    price: 249,
    desc: "Classic dry-fry chicken cooked with crushed black pepper, green chilies, and fresh curry leaves.",
    category: "starters",
    isVeg: false,
    spicyLevel: 2,
  },
  {
    id: "start-roast-chick",
    name: "Roasted Chicken Masala",
    price: 249,
    desc: "Tender boneless chicken roasted in a thick onion-tomato gravy with freshly ground spices.",
    category: "starters",
    isVeg: false,
    spicyLevel: 2,
  },
  {
    id: "start-roast-paneer",
    name: "Roasted Paneer Masala",
    price: 219,
    desc: "Spiced cottage cheese cubes pan-roasted in a fragrant, thick semi-dry gravy.",
    category: "starters",
    isVeg: true,
    spicyLevel: 1,
  },
  {
    id: "start-pep-paneer",
    name: "Pepper Paneer Fry",
    price: 219,
    desc: "Cottage cheese cubes wok-tossed with crushed black pepper, capsicum, and herbs.",
    category: "starters",
    isVeg: true,
    spicyLevel: 2,
  },
  {
    id: "start-pep-shroom",
    name: "Mushroom Pepper Fry",
    price: 219,
    desc: "Fresh button mushrooms stir-fried with black pepper, mustard seeds, and curry leaves.",
    category: "starters",
    isVeg: true,
    spicyLevel: 2,
  },
  {
    id: "start-pot-sholay",
    name: "Potato Sholay",
    price: 179,
    desc: "Crispy baby potatoes tossed in a spicy, tangy red chili and yogurt glaze.",
    category: "starters",
    isVeg: true,
    spicyLevel: 2,
  },
  // Extras
  {
    id: "extra-ghee-roti",
    name: "Ghee Wheat Roti",
    price: 30,
    desc: "Soft whole wheat flatbread baked on a tawa and brushed with rich pure ghee.",
    category: "extras",
    isVeg: true,
    spicyLevel: 0,
  },
  {
    id: "extra-plain-roti",
    name: "Wheat Roti",
    price: 20,
    desc: "Soft flame-baked whole wheat flatbread.",
    category: "extras",
    isVeg: true,
    spicyLevel: 0,
  },
  {
    id: "extra-raita",
    name: "Raita",
    price: 20,
    desc: "Cooling whipped yogurt condiment seasoned with onions, cucumber, and roasted cumin.",
    category: "extras",
    isVeg: true,
    spicyLevel: 0,
  },
  {
    id: "extra-egg",
    name: "Thalairaj Whole Egg",
    price: 20,
    desc: "A single, seasoned hard-boiled egg.",
    category: "extras",
    isVeg: false,
    spicyLevel: 0,
  },
  {
    id: "extra-curry",
    name: "Salan Curry",
    price: 20,
    desc: "Rich, spiced gravy peanut-sesame salan to accompany your biryani.",
    category: "extras",
    isVeg: true,
    spicyLevel: 1,
  },
];

// Mapping of categories to visual assets
const CATEGORY_IMAGES: Record<string, string> = {
  bowls: "/assets/menu_bowl.png",
  biryanis: "/assets/menu_biryani.png",
  family: "/assets/menu_family.png",
  starters: "/assets/menu_starter.png",
  extras: "/assets/menu_extra.png",
};



export default function MenuGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isVegOnly, setIsVegOnly] = useState(false);

  // Filter logic
  const filteredItems = useMemo(() => {
    return MENU_DATA.filter((item) => {
      if (activeCategory !== "all" && item.category !== activeCategory) {
        return false;
      }
      if (isVegOnly && !item.isVeg) {
        return false;
      }
      if (searchKeyword) {
        const keyword = searchKeyword.toLowerCase();
        return (
          item.name.toLowerCase().includes(keyword) ||
          item.desc.toLowerCase().includes(keyword)
        );
      }
      return true;
    });
  }, [activeCategory, searchKeyword, isVegOnly]);

  const categories = [
    { id: "all", label: "All Items" },
    { id: "bowls", label: "Biryani Bowls" },
    { id: "biryanis", label: "Biryanis & Rice" },
    { id: "family", label: "Family Packs" },
    { id: "starters", label: "Starters" },
    { id: "extras", label: "Extras" },
  ];

  return (
    <section id="menu" className="relative py-20 bg-cream-warm">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* ================= ROYAL FEAST MENU EXPLORER ================= */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-orange-cta uppercase block mb-3">
            Our Menu
          </span>
          <h2 className="font-serif font-black text-3xl md:text-5xl text-purple-brand leading-tight mb-4">
            Explore Our Full Royal Feast
          </h2>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed">
            Use search and filters below to browse our complete collection of starters, bowls, sides, and family packs.
          </p>
        </div>

          {/* Explorer Filter Controls */}
          <div className="glass-panel p-6 rounded-[24px] mb-10 flex flex-col lg:flex-row gap-6 items-center justify-between shadow-sm">
            {/* Search Box */}
            <div className="relative w-full lg:max-w-md">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary/60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search our royal menu..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border border-gold-border/60 focus:border-purple-brand focus:ring-1 focus:ring-purple-brand outline-none transition-all text-sm"
              />
            </div>

            {/* Category Slider Tabs */}
            <div className="w-full overflow-x-auto no-scrollbar py-1 flex items-center gap-2 max-w-full lg:justify-center">
              {categories.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 py-2 rounded-lg text-xs md:text-sm font-bold whitespace-nowrap transition-all focus-visible:outline-none min-h-[40px] flex items-center justify-center ${
                    activeCategory === tab.id
                      ? "bg-purple-brand text-white shadow-md"
                      : "bg-white text-text-secondary border border-gold-border hover:bg-gold-light/40"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Veg Switch */}
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-sm font-bold text-text-secondary">Veg Only</span>
              <button
                role="switch"
                aria-checked={isVegOnly}
                onClick={() => setIsVegOnly(!isVegOnly)}
                className={`w-12 h-6 rounded-full p-1 transition-all duration-300 focus-visible:outline-none ${
                  isVegOnly ? "bg-green-600" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-all duration-300 ${
                    isVegOnly ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Interactive Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => {
                const foodImg = CATEGORY_IMAGES[item.category] || "/assets/menu_biryani.png";
                return (
                  <div
                    key={item.id}
                    className="bg-white/80 rounded-[20px] p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gold-border/30 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top metadata */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-3 h-3 rounded-sm flex items-center justify-center border ${
                              item.isVeg ? "border-green-600 p-[1.5px]" : "border-red-600 p-[1.5px]"
                            }`}
                          >
                            <span
                              className={`w-1 h-1 rounded-full ${
                                item.isVeg ? "bg-green-600" : "bg-red-600"
                              }`}
                            />
                          </span>
                          <span className="text-[9px] font-bold text-text-secondary uppercase tracking-wider">
                            {item.category}
                          </span>
                        </div>

                        {item.spicyLevel > 0 && (
                          <div className="flex gap-0.5 text-orange-cta">
                            {Array.from({ length: item.spicyLevel }).map((_, i) => (
                              <svg
                                key={i}
                                className="w-3 h-3 fill-current"
                                viewBox="0 0 256 256"
                              >
                                <path d="M168,136a40,40,0,0,1-80,0c0-23.75,28-61.22,40-75.76C140,74.78,168,112.25,168,136Z" />
                              </svg>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Content split */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="relative w-16 h-16 rounded-lg bg-gold-light/10 overflow-hidden shrink-0 flex items-center justify-center p-1 border border-gold-border/20">
                          <Image
                            src={foodImg}
                            alt={item.name}
                            width={64}
                            height={64}
                            className="object-contain w-auto h-full drop-shadow-sm"
                          />
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-serif font-bold text-text-primary text-base leading-tight mb-1 group-hover:text-purple-brand transition-colors">
                            {item.name}
                          </h4>
                          <p className="text-text-secondary text-xs line-clamp-2 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom row */}
                    <div className="flex items-center justify-between border-t border-gold-border/20 pt-3 mt-auto">
                      <span className="font-serif font-black text-lg text-purple-brand">
                        ₹{item.price}
                      </span>
                      <div className="flex gap-1.5">
                        <a
                          href="https://www.swiggy.com/search?query=Thalairaj+Biryani"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 bg-[#fc8019] text-white text-[10px] font-bold rounded hover:bg-orange-600 transition-all flex items-center min-h-[30px]"
                        >
                          Swiggy
                        </a>
                        <a
                          href="https://www.zomato.com/bengaluru/restaurants?q=Thalairaj+Biryani"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 bg-[#cb202d] text-white text-[10px] font-bold rounded hover:bg-red-700 transition-all flex items-center min-h-[30px]"
                        >
                          Zomato
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-[24px] border border-gold-border/40 shadow-inner flex flex-col items-center justify-center p-6">
              <svg
                className="w-16 h-16 text-gold-border mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <h4 className="font-serif font-bold text-text-primary text-xl mb-1">
                No Royal Dishes Found
              </h4>
              <p className="text-text-secondary text-sm">
                Try adjusting your filters, resetting the veg toggle, or clearing the search query.
              </p>
            </div>
          )}
      </div>
    </section>
  );
}
