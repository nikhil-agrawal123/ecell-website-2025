import React from 'react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import Image from 'next/image'



// py-40 parent 
// px-12 parent
// each gap-12
// gap bw title to text is 4

const page = () => {
  return (
    <div className='bg-black py-40 h-full text-white px-12 '>
      <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-6xl">
        E-Cell &nbsp;
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span>IIIT Delhi</span>
          </div>
        </div>
      </h1>

      <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center  italic text-transparent text-2xl">
        Where students don&apos;t just dream, they build.
      </h1>

      

      <div className='mx-auto max-w-screen-xl text-justify flex flex-col pt-12 gap-12'>
        <div>
      <div className='flex flex-row justify-center  pb-4'>
        <SectionHeading>
          Driven by Vision&nbsp;
          <span className="bg-gradient-to-br from-blue-400 to-blue-700 bg-clip-text text-transparent">
            Defined by Impact
          </span>
        </SectionHeading>
      </div>
        <Image
          alt="img"
          src="/img/img1.jpg"
          width={1280}
          height={720}
          className="w-full h-96 object-cover rounded-xl"
        />
        </div> 
      </div>
    </div>
  )
}

export default page