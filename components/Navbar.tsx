
import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { NAV_LINKS, LOGO_URL, DONATE_URL } from '../constants.tsx';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md py-3 shadow-2xl' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center text-white">
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-3">
              <img src={LOGO_URL} alt="Save Rojava" className="h-10 w-auto" />
              <span className="hidden md:block font-extrabold text-xl tracking-tighter text-white">SAVE ROJAVA</span>
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-kurdistan-yellow transition-colors font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
            <a
              href={DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-kurdistan-yellow hover:bg-[#eab308] text-black px-6 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 flex items-center shadow-[0_0_20px_rgba(254,189,17,0.3)]"
            >
              <Heart className="w-4 h-4 mr-2" fill="currentColor" />
              Donate Now
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black/98 backdrop-blur-xl border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-kurdistan-yellow border-b border-white/5"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 px-3 pb-4">
              <a
                href={DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-kurdistan-yellow text-black flex items-center justify-center px-4 py-4 rounded-xl font-bold text-lg"
              >
                <Heart className="w-5 h-5 mr-2" fill="currentColor" />
                Donate Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
