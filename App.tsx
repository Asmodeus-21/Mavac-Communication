
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WorkGallery from './components/WorkGallery';
import ConsultantAI from './components/ConsultantAI';
import Footer from './components/Footer';

function App() {
  // Sophisticated Reveal animations on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('section > div');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Full-bleed Cinematic Hero */}
        <Hero />
        
        {/* Expertise Section */}
        <Services />
        
        {/* Portfolio Gallery with high contrast and gold frames */}
        <WorkGallery />
        
        {/* Interactive AI Strategist tool */}
        <ConsultantAI />
        
        {/* Philosophical Statement with Gold Accents */}
        <section className="py-60 bg-white relative overflow-hidden" id="about">
          {/* Subtle gold background element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none"></div>
          
          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-xs font-bold tracking-[0.6em] uppercase text-[#D4AF37] mb-16 flex justify-center items-center gap-6">
              <span className="w-16 h-px bg-[#D4AF37]/30"></span>
              The Manifesto
              <span className="w-16 h-px bg-[#D4AF37]/30"></span>
            </h2>
            <p className="text-4xl md:text-7xl font-light tracking-tight leading-[1.2] text-[#1A1A1A]">
              "We believe that the most powerful brands are those that speak <span className="italic text-[#D4AF37] font-bold">less</span>, but mean <span className="italic text-[#D4AF37] font-bold">more</span>. True luxury is the <span className="underline decoration-[#D4AF37]/40 underline-offset-[12px]">clarity of intent</span>."
            </p>
            <div className="mt-24 w-40 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"></div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Persistent Gold CTA Button */}
      <div className="fixed bottom-12 right-12 z-40 hidden md:block">
        <a 
          href="#contact" 
          className="group relative w-20 h-20 bg-[#D4AF37] text-white flex items-center justify-center rounded-full transition-all duration-700 shadow-[0_10px_40px_rgba(212,175,55,0.4)] hover:shadow-[0_15px_50px_rgba(212,175,55,0.6)] hover:scale-110 active:scale-95"
          title="Consult with an Expert"
        >
          <div className="absolute inset-0 rounded-full border border-[#D4AF37] group-hover:scale-150 group-hover:opacity-0 transition-all duration-700"></div>
          <svg className="w-8 h-8 group-hover:rotate-12 transition-transform duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        </a>
      </div>
    </div>
  );
}

export default App;
