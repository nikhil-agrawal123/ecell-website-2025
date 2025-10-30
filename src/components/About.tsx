"use client"
import Link from "next/link";
import { motion as momo } from "framer-motion";
import React from 'react';
import Image from 'next/image';
import { SectionHeading } from "./ui/SectionHeading";
const AboutCard = () => {
  return (
    <section className="  text-white ">

<div className="mx-auto max-w-screen-xl">

<SectionHeading >
Driven by Vision
            <br />
            <span className="bg-gradient-to-br from-blue-400  to-blue-700 bg-clip-text text-transparent">
            Defined by Impact
            </span>
          </SectionHeading>

      <div className="gap-12 items-center px-4  lg:grid lg:grid-cols-2 py-4 lg:px-0">
        
        <div>
          <p className="text-justify">
            The <span className="font-bold">E-Cell (Entrepreneurship Cell) of IIITD</span> is a remarkable group of students who are passionate about fostering an entrepreneurial spirit amongst their peers. In a world where startups are increasingly important for driving innovation and solving problems, 
          </p>
          <br />
          <p className="text-justify">
          E-Cell is working towards providing exposure, insights and awareness related to entrepreneurship. With a weekly Newsletter, Founder&apos;s and Wisdom talks, informative content, and exciting events like <span className="font-bold">PitchCafe, Ideathon, the Perfect Escape, and Scaleup</span>, E-Cell is creating a vibrant and dynamic startup ecosystem within IIITD.  The team&apos;s dedication is evident in their remarkable impact, with over <span className="font-bold">5,00,000 people reached over the years and more than 500 events</span> conducted. 





          </p>
          <div className="pt-4">
             
<Link href="/about">
<button className="p-[3px] relative">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
  <div className="px-8 py-2  bg-black rounded-full font-bold relative group transition duration-200 text-white hover:bg-transparent">
    Learn More
  </div>
</button></Link>
        {/* <Link href="/about#founder" passHref>
          <momo.a
            className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </momo.a>
        </Link> */}
      </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="relative w-full h-48 lg:h-64">
            <Image
              className="rounded-lg"
              src="/img/E-Cell(2).png"
              alt="Office content 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative w-full h-48 lg:h-64 mt-4 lg:mt-8">
            <Image
              className="rounded-lg"
              src="/img/E-Cell(1).png"
              alt="Office content 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
          
        </div>
       
        
      </div>
      </div>

    </section>
  );
};

export default AboutCard;