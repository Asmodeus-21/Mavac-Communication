
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white py-32 border-t border-[#D4AF37]/20" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-24 mb-32">
          <div className="lg:col-span-2">
            <h2 className="text-xs font-bold tracking-[0.5em] uppercase text-[#D4AF37] mb-10 flex items-center gap-4">
              <span className="w-10 h-px bg-[#D4AF37]"></span>
              Engagement
            </h2>
            <p className="text-5xl md:text-7xl font-light tracking-tight max-w-2xl mb-16 leading-[1.1]">
              Crafting stories that <br /> 
              <span className="text-[#D4AF37] italic font-bold underline decoration-[#D4AF37]/30 underline-offset-8">define legacies.</span>
            </p>
            <div className="group relative inline-block">
              <a 
                href="mailto:strategy@mavac.com" 
                className="text-3xl md:text-4xl font-light hover:text-[#D4AF37] transition-all duration-500"
              >
                strategy@mavac.com
              </a>
              <div className="h-0.5 w-0 group-hover:w-full bg-[#D4AF37] transition-all duration-700 mt-4"></div>
            </div>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.4em] uppercase font-bold text-[#D4AF37] mb-10">Global Studios</h3>
            <ul className="space-y-6 text-sm font-light text-white/50">
              <li className="hover:text-white transition-colors cursor-default">Paris — 8th Arrondissement</li>
              <li className="hover:text-white transition-colors cursor-default">London — Marylebone</li>
              <li className="hover:text-white transition-colors cursor-default">New York — TriBeCa</li>
              <li className="hover:text-white transition-colors cursor-default">Tokyo — Ginza</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.4em] uppercase font-bold text-[#D4AF37] mb-10">Network</h3>
            <ul className="space-y-6 text-sm font-light text-white/50">
              <li className="hover:text-[#D4AF37] transition-all duration-300"><a href="#" className="flex items-center gap-2">LinkedIn <ArrowRight size={12}/></a></li>
              <li className="hover:text-[#D4AF37] transition-all duration-300"><a href="#" className="flex items-center gap-2">Vimeo <ArrowRight size={12}/></a></li>
              <li className="hover:text-[#D4AF37] transition-all duration-300"><a href="#" className="flex items-center gap-2">Instagram <ArrowRight size={12}/></a></li>
              <li className="hover:text-[#D4AF37] transition-all duration-300"><a href="#" className="flex items-center gap-2">Brand Portal <ArrowRight size={12}/></a></li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4 group cursor-pointer">
            <span className="text-3xl font-bold tracking-tighter text-white group-hover:text-[#D4AF37] transition-colors duration-500">MAVAC</span>
            <div className="w-1 h-6 bg-[#D4AF37]"></div>
            <span className="text-[9px] tracking-[0.5em] uppercase text-white/30 group-hover:text-white/60 transition-colors">© 2025 S.A. DE C.V.</span>
          </div>
          
          <div className="flex gap-12 text-[9px] tracking-[0.4em] uppercase text-white/30">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Charter</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Legal Terms</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Impact 2025</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ArrowRight = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);

export default Footer;
