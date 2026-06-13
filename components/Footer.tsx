import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-purple-brand text-gold-light border-t border-gold-border/20 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 pb-12 border-b border-gold-border/10">
          
          {/* Col 1: Bio */}
          <div className="space-y-4">
            <Link href="#home" className="flex items-center gap-2 focus-visible:outline-none">
              <Image
                src="/assets/thalairaj_logo.png"
                alt="Thalairaj Logo"
                width={48}
                height={48}
                className="object-contain w-12 h-12 rounded-full border border-gold-border/30"
              />
              <span className="font-serif font-black text-xl tracking-widest text-gold-light leading-none">
                THALAIRAJ
              </span>
            </Link>
            <p className="text-gold-light/70 text-sm leading-relaxed max-w-xs">
              Rooted in heritage, packed with flavor. Elevating the art of Dum Biryani for a new generation of food lovers.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://instagram.com/thalairaj_biryani"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold-border/30 flex items-center justify-center text-gold-light hover:text-orange-cta hover:border-orange-cta transition-colors focus-visible:outline-none"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 256 256">
                  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM172,36H84A48.05,48.05,0,0,0,36,84v88a48.05,48.05,0,0,0,48,48h88a48.05,48.05,0,0,0,48-48V84A48.05,48.05,0,0,0,172,36Zm32,136a32,32,0,0,1-32,32H84a32,32,0,0,1-32-32V84A32,32,0,0,1,84,52h88a32,32,0,0,1,32,32ZM192,72a12,12,0,1,1-12-12A12,12,0,0,1,192,72Z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/thalairaj21"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold-border/30 flex items-center justify-center text-gold-light hover:text-orange-cta hover:border-orange-cta transition-colors focus-visible:outline-none"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 256 256">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,104H112v88H96V128H80V112H96V96a32,32,0,0,1,32-32h24V80H128a16,16,0,0,0-16,16v16h24Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-gold-light text-base tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gold-light/70">
              <li>
                <Link href="#home" className="hover:text-orange-cta transition-colors focus-visible:outline-none">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-orange-cta transition-colors focus-visible:outline-none">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-orange-cta transition-colors focus-visible:outline-none">
                  About Legacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Policy */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-gold-light text-base tracking-wider">
              Policy & FAQs
            </h4>
            <ul className="space-y-2 text-sm text-gold-light/70">
              <li>
                <Link href="#menu" className="hover:text-orange-cta transition-colors focus-visible:outline-none">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-cta transition-colors focus-visible:outline-none">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-cta transition-colors focus-visible:outline-none">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact details */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-gold-light text-base tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-gold-light/70">
              <li className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-orange-cta shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:8047192229" className="hover:text-orange-cta transition-colors focus-visible:outline-none">
                  80 4719 2229
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-orange-cta shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:thalairajbiryani@gmail.com" className="hover:text-orange-cta transition-colors focus-visible:outline-none">
                  thalairajbiryani@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-5 h-5 text-orange-cta shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Bengaluru, Karnataka, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gold-light/45 gap-4">
          <p>&copy; {new Date().getFullYear()} Thalairaj Biryani. All Rights Reserved. Crafted with passion.</p>
          <p>Designed for Royal South Indian Dining Identity</p>
        </div>

      </div>
    </footer>
  );
}
