'use client';
import Link from 'next/link';
import Image from 'next/image';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center sm:px-24 px-12 py-40 relative overflow-hidden">
      
      {/* Floating Glows */}
      <div className="absolute -top-10 -left-10 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full z-0" />
      <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-pink-400/10 blur-2xl rounded-full z-0" />

      {/* Content Block */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center gap-12 max-w-6xl w-full">
        
        {/* Left: Logo Block */}
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src="/logo.png"
            alt="E-Cell IIIT Delhi Logo"
            width={300}
            height={300}
            className="hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_20px_rgba(255,0,255,0.6)]"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-2/3 flex flex-col items-start">
          <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent drop-shadow-lg leading-tight">
            404 Page Not Found
            
          </h1>

          <p className="text-gray-400 my-4 text-base sm:text-lg max-w-xl">
            Oops! The page you&apos;re trying to reach doesn&apos;t exist. It might&apos;ve been moved or deleted.
          </p>

           <Link href="/">
<button className="p-[3px] relative">
  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 rounded-full" />
  <div className="px-8 py-2  bg-black rounded-full font-bold relative group transition duration-200 text-white hover:bg-transparent">
    Back to Homepage
  </div>
</button></Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
