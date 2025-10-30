'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import initiatives from '@/data/Initiatives.json';

type Initiative = {
  id: string;
  name: string;
  desc: string;
  longDesc: string;
  img: string;
  link: string;
};



const InitiativesPage = () => {
  const [selected, setSelected] = useState<Initiative | null>(null);

  return (
    <div className="bg-black text-white font-sans min-h-screen sm:px-24 px-12 pt-40">
      {/* Header
      <div className="text-center mb-24">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-br from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent drop-shadow-lg">
          Our Initiatives
        </h1>
        <p className="text-lg md:text-xl mt-4 text-gray-300 max-w-2xl mx-auto">
          Powerful programs that drive innovation, creativity, and founder culture at IIIT-Delhi.
        </p>
      </div> */}

        {/* Intro Section */}
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 pb-12">
              {/* Left Text Block */}
              <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-br from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent leading-tight drop-shadow-lg">
                  Our Initiatives
                </h1>
                <p className="text-lg md:text-xl text-gray-300">
                  Powerful programs that drive innovation, creativity, and founder culture at IIIT-Delhi.
                </p>
              </div>
      
              {/* Right Image Block */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <Image
                  src="/art/12.png"
                  alt="E-Cell Artwork"
                  width={400}
                  height={400}
                  className="w-[18rem] md:w-[22rem] lg:w-[26rem] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

      {/* Grid Section */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {initiatives.map((item, idx) => (
          <section key={idx} id={item.id} className="w-full">
            <button
              onClick={() => setSelected(item)}
              className="group text-left w-full"
            >
              <div className="min-h-[370px] bg-neutral-900 backdrop-blur-md border border-neutral-800 rounded-3xl p-6 flex flex-col justify-between h-full shadow-xl hover:shadow-purple-600/40 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500 relative">
                <div>
                  <div className="w-full aspect-[1/1] rounded-xl overflow-hidden mb-4 relative">
  <Image
    src={item.img}
    alt={item.name}
    fill
    className="object-cover group-hover:scale-105 transition-transform duration-500"
  />
</div>

                  <h2 className="text-xl font-bold text-white mb-2">{item.name}</h2>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
                <span className="mt-6 text-sm text-purple-400 group-hover:underline underline-offset-4 transition">
                  Learn more →
                </span>
              </div>
            </button>
          </section>
        ))}
      </div>


{/* Modal */}
{selected && (
  <div
    className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-2 sm:px-4"
    onClick={() => setSelected(null)}
  >
    <div
      className="relative w-full max-w-md sm:max-w-4xl bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 border border-purple-500 rounded-3xl shadow-[0_0_40px_rgba(168,85,247,0.2)] backdrop-blur-lg p-6 sm:p-10 sm:pt-14 sm:pr-14 animate-scale-in overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 bg-neutral-800 text-white border border-neutral-600 hover:border-red-400 hover:text-red-400 rounded-full p-2 shadow-md transition duration-200"
        onClick={() => setSelected(null)}
      >
        ✕
      </button>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-12">
        {/* Text Section */}
        <div className="flex-1">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white drop-shadow-lg leading-tight">
            {selected.name}
          </h2>
          <div className="pt-2 sm:pt-4 text-gray-300 text-sm sm:text-lg leading-relaxed tracking-wide">
            {selected.longDesc}
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 mt-6 sm:mt-0">
          <div className="relative w-full aspect-square rounded-xl">
            <Image
              src={selected.img}
              alt={selected.name}
              fill
              className="object-cover rounded-xl transition-transform duration-300 hover:scale-105 hover:drop-shadow-[0_0_12px_rgba(255,0,255,0.6)]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)}


      {/* Animation Style */}
     <style jsx>{`
  @keyframes scale-in {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  .animate-scale-in {
    animation: scale-in 0.25s ease-out forwards;
  }
`}</style>

    </div>
  );
};

export default InitiativesPage;
