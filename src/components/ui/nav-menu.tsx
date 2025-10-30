import React from 'react';
import { motion as momo } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <momo.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer hover:opacity-[0.9] text-white"
      >
        {item}
      </momo.p>
      {active !== null && (
        <momo.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && children && (
            <div className="absolute top-[calc(100%_+_1.1rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <momo.div
                transition={transition}
                layoutId="active"
                className="bg-slate-500/70 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-500/[0.7] shadow-xl"
              >
                <momo.div layout className="w-max h-full p-4">
                  {children}
                </momo.div>
              </momo.div>
            </div>
          )}
        </momo.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="w-full bg-gradient-to-r from-indigo-500/60 via-purple-500/60 to-pink-500/60 
                 backdrop-blur-lg border-b border-white/20 shadow-lg py-3"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={200}
        height={10}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
        loading="lazy" // Lazy load images
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-white">{title}</h4>
        <p className="text-sm max-w-[10rem] text-neutral-300">{description}</p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-200 hover:text-black transition-colors duration-300"
    >
      {children}
    </Link>
  );
};
