'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // from lucide-react
import testimonials from '@/data/Testimonials.json';




const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const { name, role, image, text } = testimonials[index];

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-20 rounded-[2rem] bg-black/70 border border-neutral-700 shadow-[0_0_40px_rgba(255,255,255,0.05)] backdrop-blur-xl px-8 py-12 md:py-16 flex flex-col md:flex-row items-center gap-8 transition-all duration-500 overflow-hidden">
      
      {/* Glows */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-purple-500/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 z-0" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-pink-400/20 blur-2xl rounded-full z-0" />

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full border border-gray-600 backdrop-blur-md bg-white/10 text-white hover:bg-pink-400/20 hover:scale-110 transition"
        aria-label="Previous Testimonial"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full border border-gray-600 backdrop-blur-md bg-white/10 text-white hover:bg-purple-400/20 hover:scale-110 transition"
        aria-label="Next Testimonial"
      >
        <ChevronRight size={20} />
      </button>

      {/* Image */}
      <div className="relative z-10 w-32 h-32 md:w-40  md:h-40 rounded-full overflow-hidden border-4 border-purple-400/40 shadow-xl">
        <Image src={image} alt={name} width={160} height={160} className="object-cover" />
      </div>

      {/* Text */}
      <div className="relative z-10 flex flex-col gap-4 text-center md:text-left max-w-xl">
        <p className="text-lg sm:text-xl text-gray-200 font-light italic">“{text}”</p>
        <div className="mt-2">
          <p className="text-white text-xl font-semibold">{name}</p>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;