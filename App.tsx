
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import WhoAreWe from './components/WhoAreWe.tsx';
import NewsFeed from './components/NewsFeed.tsx';
import Transparency from './components/Transparency.tsx';
import Footer from './components/Footer.tsx';
import { Heart } from 'lucide-react';
import { DONATE_URL } from './constants.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative selection:bg-kurdistan-yellow selection:text-black bg-[#0a0a0a]">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Urgent Call-to-Action Bar */}
        <div className="bg-kurdistan-red py-4 overflow-hidden whitespace-nowrap border-y border-white/10">
          <div className="flex animate-marquee-slower space-x-12 items-center">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-white font-black uppercase tracking-tighter text-xl">
                Emergency Support Needed • Help Rojava Survive • Donate Now • Sending Aid To Baxtawarae Foundation
              </span>
            ))}
          </div>
        </div>

        <WhoAreWe />
        <NewsFeed />
        <Transparency />
        
        {/* Bottom CTA Section */}
        <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-black">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-12 flex justify-center">
              <div className="w-24 h-24 bg-kurdistan-yellow rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(254,189,17,0.4)]">
                <Heart className="w-12 h-12 text-black animate-pulse" fill="currentColor" />
              </div>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              Ready to make a <span className="text-kurdistan-yellow">difference</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Every dollar goes directly to Haji Karwan's foundation on the ground. We provide the channel, you provide the hope.
            </p>
            <a
              href={DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-12 py-6 bg-kurdistan-yellow text-black text-2xl font-black rounded-full hover:scale-110 transition-transform shadow-[0_20px_60px_rgba(254,189,17,0.3)]"
            >
              Donate Now via Stripe
            </a>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a
          href={DONATE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-kurdistan-yellow text-black p-4 rounded-full shadow-2xl flex items-center space-x-2 font-bold animate-bounce"
        >
          <Heart className="w-6 h-6" fill="currentColor" />
          <span>Help Now</span>
        </a>
      </div>

      <style>{`
        @keyframes marquee-slower {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slower {
          animation: marquee-slower 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
