import Link from 'next/link';
import Image from 'next/image';

const TeamShowcaseCard = () => {
  return (

      <div className="relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 border border-neutral-700 rounded-3xl p-6 sm:p-10 shadow-lg hover:shadow-purple-700/40 hover:scale-[1.01] transition-all duration-300 cursor-pointer overflow-hidden group">
        
        {/* Left: Text Block */}
        <div className="w-full lg:w-2/3 z-10">
          <h3 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h3>
          <p className="text-gray-300 text-sm sm:text-base pb-4">
            Discover the passionate minds behind E-Cell IIIT Delhi&apos;s dreamers, builders, leaders.
            They&apos;re not just running a club; they&apos;re shaping an ecosystem.
          </p>
          {/* <div className="mt-5 text-sm font-medium text-purple-400 group-hover:underline">
            → View Team
          </div> */}
         <Link href="/team">
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 rounded-full" />
              <div className="px-8 py-2  bg-black rounded-full font-bold relative group transition duration-200 text-white hover:bg-transparent">
                View Team
              </div>
            </button>
          </Link>
        </div>

        {/* Right: Artwork Image */}
        <div className="w-full lg:w-1/3 flex justify-center z-10">
          <Image
            src="/art/10.png" // Use any of your E-Cell art
            alt="Team Art"
            width={300}
            height={300}
            className="w-60 h-60 object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Floating Background Effect */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl z-0" />
      </div>

  );
};

export default TeamShowcaseCard;
