'use client';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const InitiativesShowcaseCard = () => {
  return (
   <div className="relative w-full rounded-[2rem] bg-black/80 border border-neutral-700 overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-pink-600/20 backdrop-blur-xl transition-all duration-300 group">
      
      {/* Background Glow Overlay */}
      <div className="absolute -top-10 -left-10 w-60 h-60 bg-purple-500/20 blur-3xl rounded-full z-0"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-pink-400/10 blur-2xl rounded-full z-0"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 p-6 sm:p-10">
        
        {/* Left: Interactive Image */}
        <div className="w-full lg:w-1/3 overflow-hidden rounded-2xl">
          <div className="group-hover:scale-105 transition-transform duration-500">
            <Image
              src="/art/12.png"
              alt="E-Cell Initiatives"
              width={400}
              height={400}
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            <span className="bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              The E-Cell Engine
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            From pitch cafes to founder`s talks, Explore the powerhouse initiatives that turn vision into ventures at IIIT Delhi.
          </p>

          {/* CTA Button */}
         <Link href="/initiatives">
<button className="p-[3px] relative">
  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 rounded-full" />
  <div className="px-8 py-2  bg-black rounded-full font-bold relative group transition duration-200 text-white hover:bg-transparent">
    Explore Initiatives
  </div>
</button></Link>

          
        </div>
      </div>
    </div>
  );
};

export default InitiativesShowcaseCard;
