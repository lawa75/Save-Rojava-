
import React, { useState } from 'react';
import { Bell, ArrowRight, X, Calendar } from 'lucide-react';
import { NEWS_UPDATES } from '../constants';
import { NewsUpdate } from '../types';

const NewsFeed: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsUpdate | null>(null);

  const openModal = (news: NewsUpdate) => {
    setSelectedNews(news);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedNews(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="news" className="py-24 bg-[#111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-kurdistan-red font-bold uppercase tracking-wider text-sm mb-4">
              <span className="w-8 h-[2px] bg-kurdistan-red"></span>
              <span>Live Updates</span>
            </div>
            <h2 className="text-4xl font-black text-white">Latest from Rojava</h2>
          </div>
          <p className="text-gray-400 max-w-md">
            Critical developments regarding the Syrian Army assaults and the evolving humanitarian situation on the ground.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_UPDATES.map((update) => (
            <div key={update.id} className="bg-black border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 transition-all flex flex-col group">
              <div className="p-8 flex-grow">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-semibold text-gray-500">{update.date}</span>
                  {update.severity === 'urgent' && (
                    <span className="flex items-center text-xs font-bold text-kurdistan-red bg-kurdistan-red/10 px-2.5 py-1 rounded-full uppercase tracking-tighter">
                      <Bell className="w-3 h-3 mr-1" />
                      Critical
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-kurdistan-yellow transition-colors">
                  {update.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm line-clamp-3">
                  {update.content}
                </p>
              </div>
              <div className="px-8 pb-8">
                <div className="w-full h-px bg-white/10 mb-6"></div>
                <button 
                  onClick={() => openModal(update)}
                  className="flex items-center text-white font-bold text-sm hover:text-kurdistan-yellow transition-colors group/btn"
                >
                  Read Full Report <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Report Modal */}
      {selectedNews && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={closeModal}
          ></div>
          <div className="relative bg-[#111] w-full max-w-2xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-8 sm:p-10">
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-gray-500 text-sm font-bold">
                    <Calendar className="w-4 h-4 mr-2" />
                    {selectedNews.date}
                  </div>
                  {selectedNews.severity === 'urgent' && (
                    <span className="text-xs font-bold text-kurdistan-red bg-kurdistan-red/10 px-3 py-1 rounded-full uppercase">
                      Urgent Alert
                    </span>
                  )}
                </div>
                <button 
                  onClick={closeModal}
                  className="p-2 hover:bg-white/5 rounded-full transition-colors text-gray-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <h2 className="text-3xl font-black text-white mb-6 leading-tight">
                {selectedNews.title}
              </h2>

              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-wrap">
                  {selectedNews.content}
                </p>
                <div className="mt-10 p-6 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-sm text-gray-400 italic">
                    Note: Information is gathered from on-the-ground reports and humanitarian monitors including the Rojava Information Center. Situation is subject to change.
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={closeModal}
                  className="flex-1 bg-white/10 hover:bg-white/20 text-white font-bold py-4 rounded-xl transition-all"
                >
                  Close Report
                </button>
                <a 
                  href="https://donate.stripe.com/dRmbJ15smgSZ1ri7aR93y09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-kurdistan-yellow text-black font-black py-4 rounded-xl transition-all text-center hover:scale-[1.02]"
                >
                  Support This Relief
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NewsFeed;
