'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import artworks from '@/data/Gallery.json';
import VideoGallery from '@/components/VideoGallery'

const GalleryPage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const next = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % artworks.length);
  }, [selectedIndex]);

  const prev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! - 1 + artworks.length) % artworks.length);
  }, [selectedIndex]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex !== null) {
        if (e.key === 'ArrowRight') next();
        else if (e.key === 'ArrowLeft') prev();
        else if (e.key === 'Escape') closeModal();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedIndex, next, prev]);

  return (
    <div className="bg-black text-white font-sans min-h-screen sm:px-24 px-12 pt-40 ">

      {/* Header */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-br from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent leading-tight drop-shadow-lg">
            Gallery of Impact
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Dive into our vibrant visual universe, from events and posters to raw creativity at E-Cell, IIIT Delhi.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/art/5.png"
            alt="Gallery Artwork"
            width={400}
            height={400}
            className="w-[18rem] md:w-[22rem] lg:w-[26rem] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="mt-24 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 place-items-center">
        {artworks.map((item, index) => (
          <div
            key={item.id}
            onClick={() => openModal(index)}
            className="group cursor-pointer transition-transform hover:scale-[1.03] duration-300 w-full max-w-[220px]"
          >
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg bg-gray-900/30">
              <Image
                src={`/gallery/${item.id}.png`}
                alt={item.title}
                width={720}
                height={720}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                priority={index === 0}
              />
            </div>
            <p className="mt-3 text-sm text-center text-gray-300 font-medium leading-tight">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* Video Gallery */}
      <section id='Videos'><VideoGallery/></section>

      {/* Attribution */}
      <div className="mt-16 text-center text-sm text-gray-500">
        All Media Are the intellectual property of <span className="text-purple-400">E-Cell IIIT Delhi</span>.
      </div>

      {/* Modal Viewer */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 border border-purple-500 rounded-3xl shadow-[0_0_40px_rgba(168,85,247,0.2)] backdrop-blur-lg p-6 sm:p-10 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">
              {artworks[selectedIndex].title}
            </h2>

            {/* Image */}
            <div className="relative w-full h-auto max-h-[70vh] flex justify-center items-center overflow-hidden rounded-xl">
              <Image
                src={`/gallery/${artworks[selectedIndex].id}.png`}
                alt={artworks[selectedIndex].title}
                width={1000}
                height={1000}
                className="max-h-[60vh] w-auto h-auto object-contain rounded-xl "
              />
            </div>

            {/* Controls */}
            <div className="flex justify-between mt-6 items-center text-white">
              <button
                onClick={prev}
                className="text-2xl bg-neutral-800 hover:bg-neutral-700 p-2 rounded-full transition"
              >
                ←
              </button>
              <div className="flex gap-4">
                {/* <a
                  href={`/gallery/${artworks[selectedIndex].id}.png`}
                  download
                  className="bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-500 text-sm transition"
                >
                  Download
                </a> */}
                <button
                  onClick={closeModal}
                  className="bg-red-600 px-4 py-2 rounded-full hover:bg-red-500 text-sm transition"
                >
                  Close
                </button>
              </div>
              <button
                onClick={next}
                className="text-2xl bg-neutral-800 hover:bg-neutral-700 p-2 rounded-full transition"
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}

   
      
    </div>
  );
};

export default GalleryPage;
