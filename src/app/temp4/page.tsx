'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
  },
  {
    name: 'Illuminate',
    desc: 'Workshop series empowering students with entrepreneurial insights from successful founders.',
    img: '/art/3.png',
    link: '/illuminate',
  },
  {
    name: 'Startup Bootcamp',
    desc: 'An intensive sprint that converts early ideas into real MVPs with expert mentorship.',
    img: '/art/4.png',
    link: '/bootcamp',
  },
  {
    name: 'Investor Connect',
    desc: 'Bringing early-stage founders face-to-face with VCs and angel investors for growth.',
    img: '/art/5.png',
    link: '/investors',
  },
  {
    name: 'Hackathons',
    desc: 'High-energy sprints for innovators to build tech that solves real-world problems.',
    img: '/art/6.png',
    link: '/hackathons',
  },
];

const InitiativesPage = () => {
  return (
    <div className="bg-black text-white font-sans min-h-screen">
      {/* Page Heading */}
      <div className="text-center pt-28 pb-12 px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-br from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent drop-shadow-lg">
          Our Initiatives
        </h1>
        <p className="text-lg md:text-xl mt-4 text-gray-300 max-w-2xl mx-auto">
          Each initiative is a step towards building an inclusive, founder-first ecosystem.
        </p>
      </div>

      {/* Initiative Sections */}
      {initiatives.map((item, index) => (
        <section
          key={item.name}
          className={`w-full px-6 md:px-12 py-16 border-t border-neutral-800 ${
            index % 2 === 0 ? 'bg-black' : 'bg-neutral-900'
          }`}
        >
          <div
            className={`flex flex-col-reverse lg:flex-row items-center gap-12 ${
              index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Text */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                {item.name}
              </h2>
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
        </section>
      ))}
    </div>
  );
};

export default InitiativesPage;
