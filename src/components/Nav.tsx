"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/nav-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export function Nav() {
  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md">
      <Navbar />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);  // State to control the hamburger menu

  const toggleMenu = () => setMenuOpen(!menuOpen);  // Function to toggle menu visibility

  return (
    // inset 2
    <div className={cn("top-0 left-0 w-full z-50", className)}>
      <Menu setActive={setActive}>
        <div className="max-w-full mx-auto flex justify-between items-center px-6">
          
          {/* Logo + Title */}
          <Link href="/" className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={48} height={48} />
          <div className="text-white  font-semibold text-[0.95rem] md:text-base leading-none space-y-[0.1rem]">
            <div className="m-0 p-0">Entrepreneurship Cell</div>
            <div className="text-white/70 m-0 p-0">of IIIT Delhi</div>
          </div>
        </Link>


          {/* Hamburger Icon for small screens */}
          <div className="lg:hidden">
          <MenuItem setActive={setActive} active={active} item="☰">
              <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/about">About Us</HoveredLink>
              <HoveredLink href="/team">Our Team</HoveredLink>
              <HoveredLink href="/initiatives">Initiatives</HoveredLink>
              <HoveredLink href="/gallery">Gallery</HoveredLink>
              <HoveredLink href="/upcoming-events">Upcoming Events</HoveredLink>
              <HoveredLink href="/contact">Contact Us</HoveredLink>
              <HoveredLink href="/submit-ideas">Submit Ideas</HoveredLink> 
         
              </div>
            </MenuItem>
          </div>

          {/* Menu items grouped on the right */}
          <div className={`flex items-center gap-6 ${menuOpen ? 'flex-col absolute bg-white top-16 left-4 right-4 p-6' : 'hidden lg:flex'}`}>
          <HoveredLink href="/about">About Us</HoveredLink>
          <HoveredLink href="/team">Our Team</HoveredLink>
          {/* <HoveredLink href="/blog">Blog</HoveredLink> */}
          <HoveredLink href="/gallery">Gallery</HoveredLink>
          <HoveredLink href="/upcomming-events">Events</HoveredLink>
          <HoveredLink href="/contact">Contact Us</HoveredLink>
                      
            {/* Submit Ideas Button */}
            <Link href="/submit-ideas">
              <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-400 rounded-full" />
                <div className="px-6 py-1.5 bg-black rounded-full font-bold relative group transition duration-200 text-white hover:bg-transparent text-sm">
                  Submit Ideas
                </div>
              </button>
            </Link>

           </div>
        </div> 
      </Menu>
    </div>
  );
}
