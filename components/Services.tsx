
import React from 'react';
import { Camera, Heart, Film, BookOpen, PenTool, Radio, ArrowUpRight } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    title: 'Branded Content & Storytelling',
    icon: <Camera className="w-10 h-10" />,
    description: 'Humanizing corporate narratives through cinematic visual craftsmanship and editorial rigor.'
  },
  {
    title: 'CSR & Social Impact',
    icon: <Heart className="w-10 h-10" />,
    description: 'Defining and communicating the soul of your corporate responsibility with dignity.'
  },
  {
    title: 'Films, Series & Podcasts',
    icon: <Film className="w-10 h-10" />,
    description: 'Developing original IP that positions brands at the heart of culture and conversation.'
  },
  {
    title: 'Corporate Publishing',
    icon: <BookOpen className="w-10 h-10" />,
    description: 'Editorial excellence for internal and external thought leadership in the modern era.'
  },
  {
    title: 'Brand Makeovers',
    icon: <PenTool className="w-10 h-10" />,
    description: 'Strategic repositioning for a modern audience that demands purpose and transparency.'
  },
  {
    title: 'Broadcast Amplification',
    icon: <Radio className="w-10 h-10" />,
    description: 'Ensuring your message resonates across global media channels with precision.'
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-40 bg-white overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-32 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="max-w-3xl">
            <h2 className="text-xs font-bold tracking-[0.5em] uppercase text-[#D4AF37] mb-8 flex items-center gap-4">
              <span className="w-12 h-px bg-[#D4AF37]"></span>
              Expertise & Verticals
            </h2>
            <h3 className="text-5xl md:text-7xl font-light tracking-tight text-[#1A1A1A] leading-[1.1]">
              The architecture of <br /> 
              <span className="italic font-bold text-[#D4AF37]">Brand Influence.</span>
            </h3>
          </div>
          <p className="text-slate-500 max-w-sm text-lg font-light leading-relaxed border-l border-[#D4AF37]/30 pl-8">
            Precision-engineered narratives for the world's most discerning organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#E6E6FA]">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-14 border border-[#E6E6FA] hover:z-10 transition-all duration-700 cursor-default overflow-hidden"
            >
              {/* Hover Background Glow */}
              <div className="absolute inset-0 bg-[#D4AF37]/[0.02] translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="mb-12 text-[#D4AF37] group-hover:scale-110 group-hover:text-black transition-all duration-500">
                  {service.icon}
                </div>
                
                <h4 className="text-2xl font-bold tracking-tight mb-6 group-hover:text-[#D4AF37] transition-colors duration-500">
                  {service.title}
                </h4>
                
                <p className="text-slate-500 text-sm font-light leading-[1.8] mb-12 max-w-[280px] group-hover:text-black transition-colors duration-500">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="w-12 h-px bg-[#D4AF37] group-hover:w-full transition-all duration-700"></div>
                  <ArrowUpRight className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500" />
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-transparent border-r-[40px] border-r-transparent group-hover:border-t-[#D4AF37]/10 group-hover:border-r-[#D4AF37]/10 transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
