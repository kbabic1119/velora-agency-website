
import React, { useState } from 'react';
import { generateBrandStrategy } from '../services/gemini';
import { BrandStrategy } from '../types';

const AIStrategist: React.FC = () => {
  const [brandName, setBrandName] = useState('');
  const [industry, setIndustry] = useState('');
  const [loading, setLoading] = useState(false);
  const [strategy, setStrategy] = useState<BrandStrategy | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandName || !industry) return;
    setLoading(true);
    try {
      const result = await generateBrandStrategy(brandName, industry);
      setStrategy(result);
    } catch (err) {
      console.error(err);
      alert("Failed to generate strategy. Please check your API key.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-strategist" className="py-32 px-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c5a059]/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-[#c5a059] font-bold mb-4 block">Artificial Intelligence</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">Brand Architect.</h2>
          <p className="text-white/40 max-w-xl mx-auto font-light">Leverage the Velora methodology through our proprietary neural engine to synthesize market dominance strategies instantly.</p>
        </div>

        {!strategy ? (
          <form onSubmit={handleGenerate} className="bg-white/5 border border-white/10 p-12 rounded-sm backdrop-blur-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.4em] text-white/30 block font-bold">Brand Name</label>
                <input 
                  type="text" 
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  placeholder="e.g., L'ELIXIR"
                  className="w-full bg-transparent border-b border-white/10 pb-4 outline-none focus:border-[#c5a059] transition-colors text-2xl font-playfair placeholder:text-white/10"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.4em] text-white/30 block font-bold">Target Sector</label>
                <input 
                  type="text" 
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  placeholder="e.g., Haute Couture"
                  className="w-full bg-transparent border-b border-white/10 pb-4 outline-none focus:border-[#c5a059] transition-colors text-2xl font-playfair placeholder:text-white/10"
                />
              </div>
            </div>

            <button 
              disabled={loading}
              className={`w-full py-6 rounded-sm font-black uppercase tracking-[0.4em] text-[10px] transition-all duration-700 ${loading ? 'bg-white/5 text-white/20 cursor-wait' : 'bg-white text-black hover:bg-[#c5a059] shadow-2xl'}`}
            >
              {loading ? 'Synthesizing Intelligence...' : 'Initiate Strategy Session'}
            </button>
          </form>
        ) : (
          <div className="bg-white/5 border border-white/10 p-12 rounded-sm backdrop-blur-xl animate-fade-in">
            <div className="flex justify-between items-start mb-12">
              <h3 className="text-4xl font-playfair italic text-white/90">{strategy.name} Protocol</h3>
              <button onClick={() => setStrategy(null)} className="text-[10px] uppercase tracking-[0.4em] text-white/30 hover:text-[#c5a059] transition-colors font-bold">New Architect</button>
            </div>

            <div className="space-y-12">
              <div className="border-l border-[#c5a059] pl-8">
                <p className="text-[10px] uppercase tracking-[0.4em] text-[#c5a059] mb-4 font-bold">Positioning Directive</p>
                <p className="text-2xl font-light leading-relaxed text-white/80">{strategy.positioningStatement}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-[#c5a059] mb-4 font-bold">Target Demographic</p>
                  <p className="text-white/50 leading-relaxed font-light">{strategy.targetAudience}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-[#c5a059] mb-4 font-bold">Visual Language</p>
                  <p className="text-white/50 leading-relaxed font-light">{strategy.visualIdentityNotes}</p>
                </div>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-[#c5a059] mb-8 font-bold">Strategic Pillars</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {strategy.keyTactics.map((tactic, idx) => (
                    <div key={idx} className="flex items-center space-x-4 border border-white/5 p-6 bg-white/[0.02]">
                      <div className="w-1.5 h-1.5 bg-[#c5a059] rounded-full"></div>
                      <span className="text-[11px] uppercase tracking-widest font-bold text-white/70">{tactic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIStrategist;
