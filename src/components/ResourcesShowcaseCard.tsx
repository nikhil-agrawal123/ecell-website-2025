import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const ResourcesShowcaseCard = () => {
  return (
    <div> {/* Header */}
              <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                  <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-br from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent leading-tight drop-shadow-lg">
                    Resources
                  </h1>
                  <p className="text-lg md:text-xl text-gray-300">
                      Discover a curated collection of resources that reflect the vibrant spirit of entrepreneurship at IIIT Delhi. Whether you&apos;re a curious first-year, a budding founder, or an alumni changemaker, there&apos;s something here for everyone.
    
                  </p>
                  <Link href="/resources">
<button className="p-[3px] relative">
  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 rounded-full" />
  <div className="px-8 py-2  bg-black rounded-full font-bold relative group transition duration-200 text-white hover:bg-transparent">
    Explore Resources
  </div>
</button></Link>
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
              
              {/* CTA Button */}
         </div>
  )
}

export default ResourcesShowcaseCard