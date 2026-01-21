
import React from 'react';
import { ExternalLink, FileCheck, Info, Sparkles } from 'lucide-react';
import { RECEIPTS } from '../constants';

const Transparency: React.FC = () => {
  const hasReceipts = RECEIPTS.length > 0;

  return (
    <section id="transparency" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-kurdistan-green font-bold uppercase tracking-wider text-sm mb-4">
            <span className="w-8 h-[2px] bg-kurdistan-green"></span>
            <span>Proof of Impact</span>
            <span className="w-8 h-[2px] bg-kurdistan-green"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Weekly Transfer Receipts</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Complete transparency is our foundation. Below are the records of every transfer sent to the Baxtawarae Foundation. We believe you should know exactly where your money goes.
          </p>
        </div>

        <div className="bg-white/5 rounded-3xl border border-white/10 overflow-hidden backdrop-blur-sm">
          {hasReceipts ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    <th className="px-8 py-5 text-sm font-bold text-gray-400 uppercase tracking-wider">Reference ID</th>
                    <th className="px-8 py-5 text-sm font-bold text-gray-400 uppercase tracking-wider">Aid Period</th>
                    <th className="px-8 py-5 text-sm font-bold text-gray-400 uppercase tracking-wider text-right">Amount Sent</th>
                    <th className="px-8 py-5 text-sm font-bold text-gray-400 uppercase tracking-wider">Status</th>
                    <th className="px-8 py-5 text-sm font-bold text-gray-400 uppercase tracking-wider text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {RECEIPTS.map((receipt) => (
                    <tr key={receipt.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="px-8 py-6 font-mono text-white text-sm">{receipt.id}</td>
                      <td className="px-8 py-6 text-gray-300 font-medium">{receipt.weekRange}</td>
                      <td className="px-8 py-6 text-right font-bold text-white text-lg">{receipt.amount}</td>
                      <td className="px-8 py-6">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${
                          receipt.status === 'Completed' 
                          ? 'bg-kurdistan-green/10 text-kurdistan-green border-kurdistan-green/20' 
                          : 'bg-kurdistan-yellow/10 text-kurdistan-yellow border-kurdistan-yellow/20'
                        }`}>
                          {receipt.status === 'Completed' ? <FileCheck className="w-3 h-3 mr-1" /> : <Info className="w-3 h-3 mr-1" />}
                          {receipt.status}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <a 
                          href={receipt.proofUrl} 
                          className="inline-flex items-center text-kurdistan-yellow hover:text-white transition-colors text-sm font-bold group"
                        >
                          View Receipt <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="py-24 px-8 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-kurdistan-yellow/10 text-kurdistan-yellow mb-6">
                <Sparkles className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No transactions have been made yet</h3>
              <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
                Because our project is new, we are currently gathering our first batch of donations. 
                As soon as the first transfer is sent to the Baxtawarae Foundation, the receipt will be posted here.
              </p>
            </div>
          )}
          
          <div className="p-8 bg-black/40 text-center">
            <p className="text-gray-500 text-sm flex items-center justify-center">
              <Info className="w-4 h-4 mr-2 text-kurdistan-yellow" />
              Receipts are updated every Monday for the preceding week. All values in USD.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-kurdistan-red/10 via-kurdistan-yellow/5 to-kurdistan-green/10 border border-white/10 p-10 rounded-3xl text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Have Questions About Funding?</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            If you have a question, you can email us and we will answer as soon as possible.
          </p>
          <a href="mailto:saverojavanow@gmail.com" className="text-white font-black border-b-2 border-kurdistan-yellow pb-1 hover:text-kurdistan-yellow transition-colors">
            saverojavanow@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Transparency;
