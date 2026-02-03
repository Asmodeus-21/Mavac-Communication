
import React, { useState } from 'react';
import { Category, GalleryItem } from '../types';

const workItems: GalleryItem[] = [
  {
    id: '1',
    title: 'The Unseen Frontier',
    category: Category.FILMS,
    imageUrl: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2070&auto=format&fit=crop',
    description: 'A documentary series exploring sustainable architecture.'
  },
  {
    id: '2',
    title: 'Legacy of Impact',
    category: Category.CSR,
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?q=80&w=2013&auto=format&fit=crop',
    description: 'CSR reporting reimagined as high-end photography.'
  },
  {
    id: '3',
    title: 'Minds of the Future',
    category: Category.PUBLISHING,
    imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2098&auto=format&fit=crop',
    description: 'A biannual magazine for the world\'s leading innovators.'
  },
  {
    id: '4',
    title: 'Refined Identity',
    category: Category.BRANDED,
    imageUrl: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=2070&auto=format&fit=crop',
    description: 'Visual rebranding for a heritage luxury house.'
  },
  {
    id: '5',
    title: 'Echoes of Change',
    category: Category.FILMS,
    imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop',
    description: 'Award-winning branded film on social equity.'
  },
  {
    id: '6',
    title: 'Global Narrative',
    category: Category.CSR,
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    description: 'A strategic campaign for global humanitarian efforts.'
  }
];

const WorkGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Category>(Category.ALL);

  const filteredItems = activeFilter === Category.ALL
    ? workItems
    : workItems.filter(item => item.category === activeFilter);

  const categories = Object.values(Category);

  return (
    <section className="py-20 md:py-40 bg-gradient-to-br from-[#F9F9FB] via-white to-[#E6E6FA]/10 text-[#1A1A1A] overflow-hidden relative" id="work">
      {/* Subtle decorative background element */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.03)_0%,transparent_50%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 md:gap-16 mb-16 md:mb-32">
          <div>
            <h2 className="text-[10px] md:text-xs font-bold tracking-[0.4em] md:tracking-[0.5em] uppercase text-[#D4AF37] mb-6 md:mb-8">Selected Works</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light tracking-tight text-[#1A1A1A]">Our Portfolio</h3>
          </div>

          <div className="flex flex-wrap gap-x-6 md:gap-x-12 gap-y-4 md:gap-y-6">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-[10px] md:text-[11px] tracking-[0.3em] md:tracking-[0.4em] uppercase transition-all pb-2 border-b-2 relative min-h-[44px] flex items-center ${activeFilter === cat
                  ? 'border-[#D4AF37] text-[#1A1A1A] font-bold'
                  : 'border-transparent text-[#1A1A1A]/40 hover:text-[#1A1A1A]'
                  }`}
              >
                {cat}
                {activeFilter === cat && (
                  <span className="absolute -top-1 -right-2 w-1 h-1 bg-[#D4AF37] rounded-full animate-ping"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
          {filteredItems.map(item => (
            <div key={item.id} className="group relative transition-all duration-700">
              {/* Movie Poster Card */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-sm border border-[#E6E6FA]/30 group-hover:border-[#D4AF37]/50 transition-colors duration-700 shadow-lg group-hover:shadow-2xl">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-[1.5s] ease-out"
                />

                {/* Gold Frame Overlay on Hover */}
                <div className="absolute inset-4 border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/40 transition-all duration-1000 pointer-events-none scale-110 group-hover:scale-100 opacity-0 group-hover:opacity-100"></div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-700 flex flex-col justify-end p-10">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-bold mb-4 block">{item.category}</span>
                    <h4 className="text-3xl font-light tracking-tight mb-4">{item.title}</h4>
                    <p className="text-white/60 text-sm font-light leading-relaxed max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-700 delay-100 opacity-0 group-hover:opacity-100">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-medium tracking-tight text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors duration-500">{item.title}</h4>
                  <p className="text-[#1A1A1A]/50 text-[10px] tracking-[0.3em] uppercase mt-2">{item.category}</p>
                </div>
                <div className="w-10 h-10 border border-[#D4AF37]/30 flex items-center justify-center rounded-full text-[#1A1A1A] group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-500">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowUpRight = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
);

export default WorkGallery;
