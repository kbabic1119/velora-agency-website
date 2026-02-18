
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import AIStrategist from './components/AIStrategist';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0b0b0b] text-white">
      <Navbar />

      <main>
        <Hero />

        <div id="services" className="fade-in-section">
          <Services />
        </div>

        <div id="work" className="fade-in-section">
          <Portfolio />
        </div>

        <div id="ai-strategist" className="fade-in-section">
          <AIStrategist />
        </div>

        <section id="about" className="py-48 px-8 text-center bg-[#0b0b0b] relative overflow-hidden fade-in-section">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#c5a059]/20 blur-[150px] rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#c5a059] mb-8 block font-black">Strategic Partnership</span>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-12">The Standard of Dominance.</h2>
            <p className="text-xl text-white/30 mb-16 max-w-2xl mx-auto font-light leading-relaxed">We select only four new global partners per quarter to maintain the uncompromising quality of our strategic output.</p>

            <a href="#contact" className="group relative inline-block px-20 py-8 overflow-hidden bg-[#c5a059] rounded-sm transition-all duration-500 hover:shadow-[0_20px_60px_rgba(197,160,89,0.3)]">
              <span className="relative z-10 text-black font-black uppercase tracking-[0.4em] text-[11px]">Request Consultation</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
