'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const initiatives = [
  {
    name: 'E-Summit',
    desc: 'Flagship event connecting founders, investors, and visionaries through talks, pitches, and showcases.',
    img: '/art/1.png',
    link: '/e-summit',
  },
  {
    name: 'Eureka!',
    desc: 'A national-level startup pitch competition offering mentorship and funding to promising ideas.',
    img: '/art/2.png',
    link: '/eureka',
  }
];

const sampleCards = [
  {
    id: "sample-1",
    name: "Founders Talk",
    desc: "Real stories from startup founders about their struggles, lessons, and journey to success.",
    longDesc: "No mountain can be scaled within a day. Founders Talk exposes budding entrepreneurs to the harsh realities of entrepreneurship.",
    img: "/initiatives/founders-talk.png",
    link: "/founders-talk"
  },
  {
    id: "sample-2", 
    name: "Pitch Cafe",
    desc: "Pitch real-world solutions creatively and compete with your entrepreneurial insight.",
    longDesc: "Pitch Cafe is an intellectually stimulating event where participants identify real-life problems and build creative, feasible solutions.",
    img: "/initiatives/pitch-cafe.jpg",
    link: "/pitch-cafe"
  },
  {
    id: "sample-3",
    name: "Ideathon",
    desc: "Transform innovative ideas into viable solutions through intensive brainstorming sessions.",
    longDesc: "Ideathon brings together creative minds to tackle real-world problems through collaborative innovation and rapid prototyping.",
    img: "/art/3.png",
    link: "/ideathon"
  }
];

const TemplateShowcasePage = () => {
  const [selectedCard, setSelectedCard] = useState<typeof sampleCards[0] | null>(null);

  return (
    <div className="bg-black text-white font-sans min-h-screen">
      {/* Page Heading */}
      <div className="text-center pt-28 pb-12 px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-br from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent drop-shadow-lg">
          Component Showcase
        </h1>
        <p className="text-lg md:text-xl mt-4 text-gray-300 max-w-3xl mx-auto">
          A comprehensive template page showcasing all available components, elements, and designs. 
          Pick what you need and customize for your pages!
        </p>
      </div>

      {/* Button Showcase Section */}
      <section className="w-full px-6 md:px-12 py-16 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
            🎯 Button Variations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* White Pill Button */}
            <div className="text-center space-y-4">
              <h3 className="text-lg font-semibold text-gray-300">White Pill</h3>
              <button className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-purple-600 hover:text-white transition w-full">
                Click Me
              </button>
            </div>

            {/* Gradient Pill Button */}
            <div className="text-center space-y-4">
              <h3 className="text-lg font-semibold text-gray-300">Gradient Pill</h3>
              <button className="p-[3px] relative w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 rounded-full" />
                <div className="px-6 py-2 bg-black rounded-full font-bold relative group transition duration-200 text-white hover:bg-transparent">
                  Gradient Button
                </div>
              </button>
            </div>

            {/* Outline Pill Button */}
            <div className="text-center space-y-4">
              <h3 className="text-lg font-semibold text-gray-300">Outline Pill</h3>
              <button className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-semibold px-6 py-2 rounded-full transition w-full">
                Outline Style
              </button>
            </div>

            {/* Link Pill Button */}
            <div className="text-center space-y-4">
              <h3 className="text-lg font-semibold text-gray-300">Link Pill</h3>
              <Link
                href="#"
                className="inline-block bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-purple-600 hover:text-white transition w-full text-center"
              >
                Explore →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Card Showcase Section */}
      <section className="w-full px-6 md:px-12 py-16 border-t border-neutral-800 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
            🎴 Interactive Cards
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Click on any card to see the modal interaction. These cards can be used for initiatives, team members, gallery items, etc.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleCards.map((item, idx) => (
              <div key={idx} className="w-full">
                <button
                  onClick={() => setSelectedCard(item)}
                  className="group text-left w-full"
                >
                  <div className="min-h-[370px] bg-neutral-800 backdrop-blur-md border border-neutral-700 rounded-3xl p-6 flex flex-col justify-between h-full shadow-xl hover:shadow-purple-600/40 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500 relative">
                    <div>
                      <div className="w-full aspect-[1/1] rounded-xl overflow-hidden mb-4 relative">
                        <Image
                          src={item.img}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                    <span className="mt-6 text-sm text-purple-400 group-hover:underline underline-offset-4 transition">
                      Learn more →
                    </span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Showcase Card Style */}
      <section className="w-full px-6 md:px-12 py-16 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
            👥 Showcase Card Style
          </h2>
          <div className="relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 border border-neutral-700 rounded-3xl p-6 sm:p-10 shadow-lg hover:shadow-purple-700/40 hover:scale-[1.01] transition-all duration-300 cursor-pointer overflow-hidden group">
            
            {/* Left: Text Block */}
            <div className="w-full lg:w-2/3 z-10">
              <h3 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent">
                  Featured Section
                </span>
              </h3>
              <p className="text-gray-300 text-sm sm:text-base pb-4">
                This is a featured section style that can be used to highlight important content, 
                team sections, or call-to-action areas. It includes gradient text and hover effects.
              </p>
              <Link href="/team">
                <button className="p-[3px] relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 rounded-full" />
                  <div className="px-8 py-2 bg-black rounded-full font-bold relative group transition duration-200 text-white hover:bg-transparent">
                    View More
                  </div>
                </button>
              </Link>
            </div>

            {/* Right: Artwork Image */}
            <div className="w-full lg:w-1/3 flex justify-center z-10">
              <Image
                src="/art/10.png"
                alt="Featured Art"
                width={300}
                height={300}
                className="w-60 h-60 object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Floating Background Effect */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl z-0" />
          </div>
        </div>
      </section>

      {/* Initiative Sections (Your Original Content) */}
      <section className="w-full px-6 md:px-12 py-16 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
            📄 Text + Image Layouts
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Alternating left-right layouts perfect for feature descriptions, about sections, or detailed content.
          </p>
        </div>
      </section>
      {initiatives.map((item, index) => (
        <section
          key={item.name}
          className={`w-full px-6 md:px-12 py-16 border-t border-neutral-800 ${
            index % 2 === 0 ? 'bg-black' : 'bg-neutral-900'
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <div
              className={`flex flex-col-reverse lg:flex-row items-center gap-12 ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Text */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-md md:text-lg mb-6">{item.desc}</p>
                <Link
                  href={item.link}
                  className="inline-block bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-purple-600 hover:text-white transition"
                >
                  Explore →
                </Link>
              </div>

              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="overflow-hidden rounded-2xl shadow-xl group">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Gallery Style Showcase */}
      <section className="w-full px-6 md:px-12 py-16 border-t border-neutral-800 bg-neutral-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            🖼️ Gallery Stack Style
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mb-12 mx-auto">
            Stacked image gallery with hover effects. Perfect for showcasing multiple images in a compact space.
          </p>
          
          <div className="flex justify-center items-center">
            {["/gallery/1.png", "/gallery/6.png", "/gallery/8.png", "/gallery/11.png", "/gallery/5.png"].map((image, idx) => (
              <div
                key={`gallery-${idx}`}
                style={{
                  transform: `rotate(${Math.random() * 20 - 10}deg)`,
                }}
                className="rounded-xl -mr-4 mt-4 p-1 bg-gradient-to-r from-blue-400 to-pink-500 flex-shrink-0 overflow-hidden hover:scale-110 hover:rotate-0 hover:z-10 transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={image}
                  alt={`Gallery image ${idx + 1}`}
                  width={500}
                  height={500}
                  className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography Showcase */}
      <section className="w-full px-6 md:px-12 py-16 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
            📝 Typography Styles
          </h2>
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-br from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent drop-shadow-lg">
                Hero Title
              </h1>
              <p className="text-gray-400 mt-4">Main heading style with gradient effect</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div>
                <h2 className="text-4xl font-bold text-white mb-4">Section Heading</h2>
                <h3 className="text-2xl font-semibold text-gray-300 mb-4">Subsection Title</h3>
                <p className="text-gray-400 leading-relaxed">
                  Regular paragraph text with proper spacing and readability. 
                  This is how body text should look throughout the site.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-medium text-purple-400 mb-2">Highlighted Text</h4>
                <p className="text-sm text-gray-500 mb-4">Small descriptive text</p>
                <span className="text-purple-400 hover:underline underline-offset-4 transition cursor-pointer">
                  Interactive Link →
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Cards */}
      {selectedCard && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-2 sm:px-4"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="relative w-full max-w-md sm:max-w-4xl bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 border border-purple-500 rounded-3xl shadow-[0_0_40px_rgba(168,85,247,0.2)] backdrop-blur-lg p-6 sm:p-10 sm:pt-14 sm:pr-14 animate-scale-in overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 bg-neutral-800 text-white border border-neutral-600 hover:border-red-400 hover:text-red-400 rounded-full p-2 shadow-md transition duration-200"
              onClick={() => setSelectedCard(null)}
            >
              ✕
            </button>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-12">
              {/* Text Section */}
              <div className="flex-1">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white drop-shadow-lg leading-tight">
                  {selectedCard.name}
                </h2>
                <div className="pt-2 sm:pt-4 text-gray-300 text-sm sm:text-lg leading-relaxed tracking-wide">
                  {selectedCard.longDesc}
                </div>
              </div>

              {/* Image Section */}
              <div className="flex-1 mt-6 sm:mt-0">
                <div className="relative w-full aspect-square rounded-xl">
                  <Image
                    src={selectedCard.img}
                    alt={selectedCard.name}
                    fill
                    className="object-cover rounded-xl transition-transform duration-300 hover:scale-105 hover:drop-shadow-[0_0_12px_rgba(255,0,255,0.6)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animation Styles */}
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

export default TemplateShowcasePage;
