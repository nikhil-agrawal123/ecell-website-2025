'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import initiatives from '@/data/About.json'; // update the path as per your project structure


const AboutUs = () => {
  return (
    <div className="bg-black text-white font-sans min-h-screen sm:px-24 px-12 pt-60">
  {/* Header */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-br from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent leading-tight drop-shadow-lg">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-300 text-justify">
The 21st century has made us all realise the importance of developing and investing in startups that work upon adapting to evolving technologies and creating solutions for a better future. At a global level, India is emerging as one of the biggest startup ecosystems. Thus, following upon these footsteps we the Entrepreneurship Cell (E-Cell) of IIITD is a group consisting of the students of IIITD committed to foster the entrepreneurial spirit amongst the students by publishing a weekly Newsletter, organising Founder&apos;s & Wisdom talk, spreading awareness by posting insightful as well as informative content related to entrepreneurship and organising events like PitchCafe, Ideathon, the Perfect Escape, Scaleup and many more.
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

{/* <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-br pt-12 from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent drop-shadow-lg">
          Our Initiatives
        </h1>
        <p className="text-lg md:text-xl mt-4 text-gray-300 ">
          Each initiative is a step towards building an inclusive, founder-first ecosystem.
        </p> */}

        


      {/* Initiative Sections */}
      {initiatives.map((item, index) => (
        <section
          key={item.name}
          className={`w-full px-6 md:px-12 py-16  border-neutral-800 ${
            index % 2 === 0 ? 'bg-black' : 'bg-neutral-900 rounded-lg'
          }`}
        >
          <div
            className={`flex flex-col-reverse lg:flex-row items-center gap-12 ${
              index % 2 !== 0 ? 'lg:flex-row-reverse ' : ''
            }`}
          >
            {/* Text */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                {item.name}
              </h2>
              <p className="text-gray-400 text-md md:text-lg mb-6">{item.desc}</p>
              <Link href={item.link}>
<button className="p-[3px] relative">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
  <div className="px-8 py-2  bg-black rounded-full font-bold relative group transition duration-200 text-white hover:bg-transparent">
    Visit Website
  </div>
</button></Link>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="overflow-hidden rounded-2xl shadow-xl group">
                <Image
  src={item.img}
  alt={item.name}
  width={400}
  height={300}
  className="object-cover max-w-[40rem] mx-auto rounded-2xl group-hover:scale-105 transition-transform duration-500"
/>

              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default AboutUs;
