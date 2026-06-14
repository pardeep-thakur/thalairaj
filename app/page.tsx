import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeatureBar from "../components/FeatureBar";
import MenuGrid from "../components/MenuGrid";
import SpiceStory from "../components/SpiceStory";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gold-light">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeatureBar />
        <MenuGrid />
        <SpiceStory />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
