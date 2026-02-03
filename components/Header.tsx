
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#work' },
    { name: 'CSR Impact', href: '#ai-consultant' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-[#E6E6FA]">
      {/* Scroll Progress Bar */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-[#D4AF37] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3 group cursor-pointer">
          <span className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tighter text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors duration-500">MAVAC</span>
          <div className="w-1 md:w-1.5 h-6 md:h-8 bg-[#D4AF37] group-hover:scale-y-125 transition-transform duration-500"></div>
          <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] text-[#D4AF37] opacity-80">COMMUNICATION</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="gold-underline text-[10px] font-bold tracking-[0.2em] hover:text-[#D4AF37] transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-3 border border-[#D4AF37] text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#D4AF37] hover:text-white transition-all duration-500 rounded-sm"
          >
            Start Project
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-[#1A1A1A] p-2 hover:text-[#D4AF37] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-24 bg-white z-40 px-6 py-12 flex flex-col space-y-8 animate-in slide-in-from-top duration-500">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-3xl font-light tracking-widest border-b border-[#E6E6FA] pb-4 hover:text-[#D4AF37] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
