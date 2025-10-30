'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const images2 = [
  "/gallery/1.png",
  "/gallery/6.png",
  "/gallery/8.png",
  "/gallery/11.png",
  "/gallery/5.png",
];

export default function GalleryIntro() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 md:px-8">
      <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
        📸 Glimpse into Our Creative Gallery
      </h2>
      <p className="text-gray-400 text-sm md:text-base max-w-xl mb-6">
        Explore snapshots from our past events, projects, and artistic work. Click to view the full gallery!
      </p>

      <Link href="/gallery" className="group">
        <div className="flex justify-center items-center">
          {images2.map((image, idx) => (
            <motion.div
              key={"images" + idx}
              style={{
                rotate: Math.random() * 20 - 10,
              }}
              whileHover={{
                scale: 1.1,
                rotate: 0,
                zIndex: 100,
              }}
              whileTap={{
                scale: 1.1,
                rotate: 0,
                zIndex: 100,
              }}
              className="rounded-xl -mr-4 mt-4 p-1 bg-gradient-to-r from-blue-400 to-pink-500 flex-shrink-0 overflow-hidden"
            >
              <Image
                src={image}
                alt={`Gallery image ${idx + 1}`}
                width={500}
                height={500}
                className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
              />
            </motion.div>
          ))}
        </div>

 
      </Link><Link href="/gallery" className='pt-10' >
<button className="p-[3px] relative">
  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 rounded-full" />
  <div className="px-8 py-2  bg-black rounded-full font-bold relative group transition duration-200 text-white hover:bg-transparent">
    View Gallery
  </div>
</button></Link>
    </div>
  );
}
