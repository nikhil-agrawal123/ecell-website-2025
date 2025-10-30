// components/DelayedLoader.tsx
"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from "react";
import Loading from "@/app/loading";
type DelayedLoaderProps = {
  children: React.ReactNode;
};

export default function DelayedLoader({ children }: DelayedLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return <>{children}</>;
}


export const LoadingComp = () => {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen bg-black px-6">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Logo on the left with pulse animation */}
       <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 1.2,
    ease: "easeOut",
  }}
>

          <Image
            src="/logo.png"
            width={200}
            height={200}
            alt="logo"
            priority
            className="drop-shadow-[0_0_25px_rgba(255,0,255,0.5)]"
          />
        </motion.div>

        {/* Stylish Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 2, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl md:text-5xl font-semibold italic bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-md tracking-wide leading-tight">
            “Where students <br className="hidden md:block" />
            don&apos;t just dream, they build.”
          </h1>

          <p className="mt-4 text-xl md:text-2xl font-medium bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent italic tracking-wider">
            — E-Cell IIIT Delhi 💙
          </p>
        </motion.div>
      </div>
    </div>
  )
}
