import React from 'react'
import { SectionHeading } from './ui/SectionHeading'
const Hero = () => {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-[0.45]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* The work of this given below div is just to push the main content down */}
      {/* <div className='block h-16 lg:hidden'></div>
        <div className='relative z-10 max-w-5xl mx-auto p-4 w-full text-center'>
          <p className="text-lg md:text-3xl mt-4  text-white font-bold inter-var text-center">
          Fostering a culture of innovation, entrepreneurship, and startup spirit at IIIT-Delhi.
          </p>

                      <span className="bg-gradient-to-br text-3xl font-bold from-blue-400  to-blue-700 bg-clip-text text-transparent">
                      Defined by Impact
                      </span> */}
      {/* <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Exploding beams.</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">Exploding beams.</span>
          </div>
        </div> */}
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4">
        <p className="mx-auto mt-4 max-w-lg text-center font-bold text-3xl text-neutral-300">
          Welcome to
        </p>
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-6xl">
          E-Cell 	&nbsp;
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span className="">IIIT Delhi</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span className="">IIIT Delhi</span>
            </div>
          </div>
        </h1>
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-3xl italic  text-transparent md:text-2xl">
          Where students don&apos;t just dream, they build.
        </h1>

        <p className="mx-auto mt-4 max-w-5xl text-center  text-base font-normal text-neutral-300">
          We&apos;re the driving force behind IIITD&apos;s startup spirit, crafting ideas, launching ventures, and shaping tomorrow&apos;s leaders. Whether you&apos;re a founder, a learner, or just curious, this is where your entrepreneurial journey begins.
        </p>

        {/* Action Buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center items-center">
          <a href="/submit-ideas">
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-400 rounded-full" />
              <div className="px-8 py-2 bg-transparent rounded-full font-bold relative group transition duration-200 text-white hover:bg-white hover:text-black">
                Submit Ideas
              </div>
            </button>
          </a>
          <a href="/planned-events/">
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 rounded-full" />
              <div className="px-8 py-2 bg-black rounded-full font-bold relative group transition duration-200 text-white hover:bg-transparent">
                View Events
              </div>
            </button>
          </a>
        </div> */}
      </div>

      {/* </div> */}
      {/* The work of this given below div is just to push the main content down */}

    </div>
  )
}

export default Hero