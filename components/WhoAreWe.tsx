
import React from 'react';
import { Quote, ShieldCheck, CreditCard, HeartHandshake } from 'lucide-react';

const WhoAreWe: React.FC = () => {
  return (
    <section id="who-are-we" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 text-kurdistan-yellow font-bold uppercase tracking-wider text-sm">
              <span className="w-8 h-[2px] bg-kurdistan-yellow"></span>
              <span>The Mission</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Founded by <span className="text-kurdistan-red">Lawen Shwany</span> for the People.
            </h2>
            <div className="relative p-8 bg-white/5 border-l-4 border-kurdistan-yellow rounded-r-2xl italic">
              <Quote className="absolute -top-4 -left-4 w-10 h-10 text-kurdistan-yellow/30" />
              <p className="text-2xl text-gray-200 font-light leading-relaxed">
                "I don't need anything in return for this work,"
              </p>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Save Rojava was established to bridge the gap for international donors. We provide a secure, simple way for people outside of Kurdistan to donate via card, ensuring that geographic distance doesn't prevent solidarity.
            </p>
            <div className="bg-kurdistan-green/10 border border-kurdistan-green/30 p-6 rounded-2xl flex items-start space-x-4">
              <div className="bg-kurdistan-green p-3 rounded-full shrink-0">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">100% Commitment</h4>
                <p className="text-gray-400">
                  Every cent donated through this platform is transferred directly to the <span className="text-white font-bold">Baxtawarae Foundation (Haji Karwan)</span>. We ensure the funds reach those who need it most.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-kurdistan-yellow/50 transition-all group">
              <CreditCard className="w-12 h-12 text-kurdistan-yellow mb-6 transition-transform group-hover:scale-110" />
              <h3 className="text-xl font-bold text-white mb-3">Global Access</h3>
              <p className="text-gray-400">Supporting international credit and debit cards for seamless global donations.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-kurdistan-red/50 transition-all group">
              <ShieldCheck className="w-12 h-12 text-kurdistan-red mb-6 transition-transform group-hover:scale-110" />
              <h3 className="text-xl font-bold text-white mb-3">Proven Impact</h3>
              <p className="text-gray-400">Directly funding the Baxtawarae Foundation's relief efforts on the ground.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-kurdistan-green/50 transition-all group sm:col-span-2">
              <HeartHandshake className="w-12 h-12 text-kurdistan-green mb-6 transition-transform group-hover:scale-110" />
              <h3 className="text-xl font-bold text-white mb-3">Direct Support</h3>
              <p className="text-gray-400">Your money buys food, medicine, and shelter materials for displaced families in Rojava.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
