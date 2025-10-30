'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import faqs from '@/data/Faqs.json';


const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-24 px-6 md:px-10 py-12 rounded-3xl bg-black/70 border border-neutral-700 backdrop-blur-lg shadow-[0_0_40px_rgba(255,255,255,0.05)]">
      {/* Glow Overlays */}
      <div className="absolute -top-10 -left-10 w-60 h-60 bg-purple-500/20 blur-3xl rounded-full z-0"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-pink-400/20 blur-2xl rounded-full z-0"></div>

      <div className="relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
          <span className="bg-gradient-to-r from-blue-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </span>
        </h2>

        <div className="flex flex-col gap-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-neutral-700 rounded-xl bg-neutral-800/50">
              <button
                className="w-full flex justify-between items-center text-left p-4 sm:p-6 text-white text-base sm:text-lg font-medium"
                onClick={() => toggle(idx)}
              >
                {faq.question}
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`px-4 sm:px-6 pb-4 sm:pb-6 text-gray-400 text-sm transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 overflow-hidden opacity-0'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
