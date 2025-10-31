import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Hero from '@/components/Hero'
import { Events } from '@/components/Events'
import AboutCard from '@/components/About'
import Artpack from '@/components/ArtPack'
import TeamShowcaseCard from '@/components/TeamShowcaseCard'
import InitiativesShowcaseCard from '@/components/InitiativesShowcaseCard'
import GalleryIntro from '@/components/GalleryShowcaseCard'
import TestimonialCarousel from '@/components/Testimonials'
import FaqSection from '@/components/FAQs'
import ResourcesShowcaseCard from '@/components/ResourcesShowcaseCard'

export default function Home() {
  return (
    <div className='bg-black'>
      {/* bg-neutral-950 */}
    
   <Hero/>
   <div className='sm:px-24 px-12 py-12 flex flex-col space-y-12'>
   <AboutCard/>

   <Events/>
 <TeamShowcaseCard />
 <GalleryIntro/>
       <TestimonialCarousel/>
 
 <InitiativesShowcaseCard/>
 
 <FaqSection/>
 <ResourcesShowcaseCard/>

   {/* <Artpack/> */}

   </div>
  
    </div>
  )
}
