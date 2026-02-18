
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setTimeout(() => setOpacity(1), 500);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden px-8" style={{ opacity, transition: 'opacity 1.5s ease-in' }}>
      {/* Background elements - Updated to Gold/Amber glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#e2c18d]/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 text-center max-w-5xl">
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.9] text-white">
          We Build Brands <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c5a059] via-[#e2c18d] to-white italic font-playfair">
            That Print Money.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
          Velora is a boutique digital architectural firm specializing in the aggressive scaling of high-prestige brands.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
          {/* New Primary Button Design */}
          <a href="#contact" className="group relative px-12 py-6 overflow-hidden">
            <div className="absolute inset-0 border border-[#c5a059]/30 transition-colors duration-500 group-hover:border-[#c5a059]"></div>
            <div className="absolute inset-0 bg-[#c5a059] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            <span className="relative z-10 text-white group-hover:text-black font-black uppercase tracking-[0.4em] text-[10px] transition-colors duration-500">
              Start Your Ascent
            </span>
          </a>
          
          {/* New Secondary Button Design */}
          <a href="#work" className="group relative py-4 flex items-center space-x-4">
            <span className="text-white/60 group-hover:text-white font-black uppercase tracking-[0.4em] text-[10px] transition-colors duration-500">
              View Showreel
            </span>
            <div className="relative w-12 h-[1px] bg-white/20 overflow-hidden">
              <div className="absolute inset-0 bg-[#c5a059] -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </div>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#c5a059] transition-colors duration-500">
              <svg className="w-3 h-3 text-white fill-current group-hover:text-[#c5a059]" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </a>
        </div>
      </div>

      {/* Floating labels */}
      <div className="absolute bottom-12 left-12 hidden md:block border-l border-[#c5a059]/40 pl-4">
        <p className="text-[10px] uppercase tracking-[0.5em] text-white/20 mb-1">Portfolio Highlights</p>
        <p className="text-[11px] font-bold tracking-widest text-white/60">LVMH / ROLEX / TESLA</p>
      </div>
      
      <div className="absolute bottom-12 right-12 hidden md:block border-r border-[#c5a059]/40 pr-4 text-right">
        <p className="text-[10px] uppercase tracking-[0.5em] text-white/20 mb-1">Global Presence</p>
        <p className="text-[11px] font-bold tracking-widest text-white/60">NYC — LON — TKY</p>
      </div>
    </section>
  );
};

export default Hero;
