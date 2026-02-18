
import React from 'react';

const services = [
  {
    title: "Brand Architecture",
    desc: "Crafting legendary identities for the world's most ambitious brands through structural precision and high-fashion aesthetics.",
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200",
    label: "01"
  },
  {
    title: "Performance Mastery",
    desc: "Aggressive, data-driven scaling that transforms prestige brands into market leaders with surgical precision and mathematical elegance.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    label: "02"
  },
  {
    title: "Content Cinema",
    desc: "Cinematic visual storytelling that transcends traditional advertising, creating an atmosphere of pure desire and exclusivity.",
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200",
    label: "03"
  },
  {
    title: "Elite Web Design",
    desc: "Digital experiences designed as virtual flagship stores, mirroring the tactile luxury of your physical products with seamless interaction.",
    img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200",
    label: "04"
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-32 px-8 bg-[#0b0b0b]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.4em] text-[#c5a059] font-bold mb-6 block">The Velora Standard</span>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight">Mastery of the <br/><span className="italic font-playfair text-white/20">Digital Craft.</span></h2>
          </div>
          <div className="mt-8 md:mt-0 text-white/30 max-w-xs text-[10px] uppercase tracking-[0.3em] leading-relaxed">
            Specialized solutions for enterprises that define the vanguard of their respective industries.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group relative h-[600px] overflow-hidden rounded-sm cursor-pointer shadow-2xl transition-all duration-700 hover:shadow-[#c5a059]/5">
              {/* Background Image */}
              <div className="absolute inset-0 transition-transform duration-[3s] ease-out group-hover:scale-105">
                <img 
                  src={s.img} 
                  alt={s.title} 
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-1000 grayscale group-hover:grayscale-0"
                />
              </div>

              {/* Enhanced Overlay Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent transition-opacity duration-700"></div>
              <div className="absolute inset-0 bg-[#c5a059]/0 group-hover:bg-[#c5a059]/5 transition-colors duration-700"></div>

              {/* Content Layout */}
              <div className="absolute inset-0 p-12 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="text-xl font-playfair italic text-[#c5a059]/40 group-hover:text-[#c5a059] transition-colors duration-500">{s.label}</span>
                  <div className="w-16 h-[1px] bg-white/10 mt-4 group-hover:bg-[#c5a059]/50 transition-all duration-700 group-hover:w-24"></div>
                </div>

                <div>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 group-hover:translate-x-2 transition-transform duration-700">{s.title}</h3>
                  <p className="max-w-sm text-white/40 text-sm leading-relaxed mb-10 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100">
                    {s.desc}
                  </p>
                  <div className="flex items-center">
                    <div className="h-[1px] w-0 bg-[#c5a059] transition-all duration-500 group-hover:w-12 mr-4"></div>
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 group-hover:text-white transition-colors">Capabilities</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
