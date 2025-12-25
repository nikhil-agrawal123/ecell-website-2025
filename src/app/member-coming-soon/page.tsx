'use client';
import React from 'react';
import Link from 'next/link';

export default function MemberComingSoon() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-2xl mx-auto">
        {/* Animated emoji */}
        <div className="text-8xl mb-8 animate-bounce">
          🤫
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent">
          Plot Twist...
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-6">
          This team member&apos;s LinkedIn and email are still a mystery! 🕵️
        </p>

        <div className="bg-neutral-900 border-2 border-purple-500/50 rounded-2xl p-8 mb-8">
          <p className="text-lg text-gray-400 mb-4">
            They might be:
          </p>
          <ul className="text-gray-300 space-y-2 text-left inline-block">
            <li>✨ Too busy building the next unicorn</li>
            <li>🚀 Coding in a secret lab somewhere</li>
            <li>🎭 Undercover as an investor</li>
            <li>😎 Just vibing and being mysterious</li>
          </ul>
        </div>

        <p className="text-gray-400 mb-8">
          Come back later, or if you know them, give them a nudge to update their details! 😄
        </p>
{/* 
        <Link href="/team">
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 rounded-full" />
            <div className="px-8 py-3 bg-black rounded-full font-bold relative group transition duration-200 text-white hover:bg-transparent">
              Back to Team
            </div>
          </button>
        </Link> */}
      </div>
    </div>
  );
}
