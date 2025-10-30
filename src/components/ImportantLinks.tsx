'use client';
import React from 'react';
import { ExternalLink } from 'lucide-react';
import links from '@/data/Links.json';

const ImportantLinks = () => {
  return (
    <div className="relative mt-24 z-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        <span className="bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          Important Links
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-black/70 border border-neutral-700 rounded-2xl shadow-lg backdrop-blur-md p-6 hover:scale-105 hover:shadow-pink-400/30 transition-all duration-300 flex flex-col justify-between gap-4"
          >
            <div>
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                {link.title}
                <ExternalLink className="group-hover:text-pink-400 transition" size={18} />
              </h3>
              <p className="text-gray-400 mt-2 text-sm">{link.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ImportantLinks;
