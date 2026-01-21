
import React from 'react';
import { ChevronDown, Heart } from 'lucide-react';
import { DONATE_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />
      
      {/* Placeholder Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full opacity-60"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-dust-particles-moving-slowly-in-the-air-at-night-42171-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center -z-10 opacity-30"></div>
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full bg-kurdistan-red/20 border border-kurdistan-red text-kurdistan-red text-sm font-bold tracking-widest uppercase mb-6 animate-pulse">
          Urgent Assistance Needed
        </div>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white tracking-tighter mb-6">
          SAVE <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#ED2024] via-[#FEBD11] to-[#278E43] drop-shadow-[0_2px_10px_rgba(254,189,17,0.3)]">ROJAVA</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Providing critical aid and survival resources to the families caught in the crossfire. Your contribution saves lives directly.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 bg-kurdistan-yellow hover:bg-[#eab308] text-black rounded-full font-black text-xl flex items-center justify-center transition-all hover:scale-105 shadow-[0_20px_40px_rgba(254,189,17,0.3)] group"
          >
            <Heart className="w-6 h-6 mr-2 group-hover:animate-bounce" fill="currentColor" />
            Support Rojava Today
          </a>
          <a
            href="#who-are-we"
            className="w-full sm:w-auto px-10 py-5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-bold text-xl backdrop-blur-md transition-all"
          >
            Learn Our Story
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <a href="#who-are-we" className="text-white/50 hover:text-white transition-colors">
          <ChevronDown className="w-10 h-10" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
