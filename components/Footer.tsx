
import React from 'react';
import { LOGO_URL, DONATE_URL } from '../constants.tsx';
import { Heart, Globe, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src={LOGO_URL} alt="Save Rojava" className="h-10 w-auto" />
              <span className="font-extrabold text-2xl tracking-tighter text-white">SAVE ROJAVA</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Dedicated to immediate humanitarian relief for the people of Rojava. We facilitate direct financial aid with absolute transparency.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-kurdistan-yellow transition-all flex items-center space-x-2">
                <Globe className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Official Site</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-500 hover:text-white transition-colors">Home</a></li>
              <li><a href="#who-are-we" className="text-gray-500 hover:text-white transition-colors">Who Are We</a></li>
              <li><a href="#news" className="text-gray-500 hover:text-white transition-colors">News & Updates</a></li>
              <li><a href="#transparency" className="text-gray-500 hover:text-white transition-colors">Transparency</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Get Involved</h4>
            <ul className="space-y-4">
              <li><a href={DONATE_URL} className="text-gray-500 hover:text-kurdistan-yellow transition-colors font-bold">Donate Now</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Volunteer</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Share the Mission</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 h-fit">
            <div className="flex items-center space-x-3 text-kurdistan-green font-bold text-sm mb-4">
              <ShieldCheck className="w-5 h-5" />
              <span>Direct Aid Channel</span>
            </div>
            <p className="text-gray-400 text-xs mb-6">
              All transfers are documented and verified through receipt records provided by the recipient foundation.
            </p>
            <a 
              href={DONATE_URL}
              className="w-full bg-kurdistan-yellow py-3 rounded-xl text-black font-bold flex items-center justify-center hover:scale-[1.02] transition-all"
            >
              <Heart className="w-4 h-4 mr-2" fill="currentColor" />
              Support Now
            </a>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-600 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Save Rojava Project. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 text-gray-600 text-xs">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Transparency FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
