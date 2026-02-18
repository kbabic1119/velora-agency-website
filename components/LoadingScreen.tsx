
import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setFadeOut(true), 500);
          setTimeout(onComplete, 1200);
          return 100;
        }
        return prev + 1.5;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-[#0b0b0b] flex flex-col items-center justify-center transition-all duration-1000 ${fadeOut ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100'}`}>
      <div className="mb-8">
        <div className="w-12 h-12 bg-gradient-to-tr from-[#c5a059] to-[#b08d44] rounded-sm rotate-45 animate-pulse shadow-[0_0_40px_rgba(197,160,89,0.2)]"></div>
      </div>
      <h1 className="text-3xl font-bold tracking-[0.8em] mb-4 text-white">VELORA</h1>
      <div className="w-48 h-[1px] bg-white/5 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-[#c5a059] transition-all duration-200"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="mt-6 text-[9px] uppercase tracking-[0.4em] text-white/20 font-bold">Initializing Prestige {Math.floor(progress)}%</p>
    </div>
  );
};

export default LoadingScreen;
