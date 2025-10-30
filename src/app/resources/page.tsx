import React from 'react'
import Image from 'next/image'
import FaqSection from '@/components/FAQs'
// import VideoGallery from '@/components/VideoGallery'
import ImportantLinks from '@/components/ImportantLinks'
import Artpack from '@/components/ArtPack'

const page = () => {
  return (
        <div className="bg-black text-white font-sans min-h-screen sm:px-24 px-12 pt-40 ">
    
          {/* Header */}
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-br from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent leading-tight drop-shadow-lg">
                Resources
              </h1>
              <p className="text-lg md:text-xl text-gray-300">
                  Discover a curated collection of resources that reflect the vibrant spirit of entrepreneurship at IIIT Delhi. Whether you&apos;re a curious first-year, a budding founder, or an alumni changemaker, there&apos;s something here for everyone.

              </p>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src="/art/8.png"
                alt="Gallery Artwork"
                width={400}
                height={400}
                className="w-[18rem] md:w-[22rem] lg:w-[26rem] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          
          {/* <section id='Videos'><VideoGallery/></section> */}
          <section id='FAQs'><FaqSection/></section>
          <section id='ImpLinks'><ImportantLinks/></section>
          <Artpack/>
          
          
          
          
          
          
          
          </div>
  )
}

export default page