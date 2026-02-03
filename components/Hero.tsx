
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Cinematic Background */}
      <div
        className="absolute inset-0 opacity-40 bg-cover bg-center transition-transform duration-[10000ms] ease-out scale-110"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop&grayscale=true')`,
          animation: 'ken-burns 20s infinite alternate'
        }}
      ></div>

      {/* Gold Dust Particles Overlay Simulation */}
      <div className="absolute inset-0 pointer-events-none shimmer-gold opacity-10"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl fade-in">
        <div className="mb-6 md:mb-8 flex justify-center items-center gap-3 md:gap-4">
          <div className="h-px w-8 md:w-12 bg-[#D4AF37]"></div>
          <span className="text-[9px] md:text-[10px] font-bold tracking-[0.4em] md:tracking-[0.5em] uppercase text-[#D4AF37]">Strategic Narratives</span>
          <div className="h-px w-8 md:w-12 bg-[#D4AF37]"></div>
        </div>

        <h1 className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.1] md:leading-[0.9]">
          Storytelling with <br />
          <span className="italic font-light text-[#D4AF37]">Depth and Intent.</span>
        </h1>

        <p className="text-[#E6E6FA]/80 text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-wide max-w-3xl mx-auto mb-12 md:mb-16 leading-relaxed px-4">
          The global authority on strategic communication for brands that lead with
          <span className="text-white font-medium"> purpose</span> and <span className="text-[#D4AF37] font-medium">prestige</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center items-stretch sm:items-center px-4">
          <a
            href="#work"
            className="group relative px-8 sm:px-10 md:px-12 py-4 md:py-5 bg-[#D4AF37] text-white text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] text-center min-h-[48px] flex items-center justify-center"
          >
            <span className="relative z-10">Explore Our Work</span>
            <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <span className="absolute inset-0 flex items-center justify-center text-black text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">View Collection</span>
          </a>

          <a
            href="#contact"
            className="group relative px-8 sm:px-10 md:px-12 py-4 md:py-5 border border-white/30 text-white text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase hover:border-[#D4AF37] transition-all duration-500 text-center min-h-[48px] flex items-center justify-center"
          >
            Contact Strategy
            <div className="absolute bottom-0 left-0 w-0 h-px bg-[#D4AF37] group-hover:w-full transition-all duration-500"></div>
          </a>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 float-animation">
        <span className="text-white/40 text-[8px] tracking-[0.4em] uppercase">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>
      </div>

      <style>{`
        @keyframes ken-burns {
          from { transform: scale(1); }
          to { transform: scale(1.15); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
