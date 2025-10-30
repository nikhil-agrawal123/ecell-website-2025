// components/Artpack.tsx
import { div } from "framer-motion/client";
import Image from "next/image";

const files = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12  ]; // => /art/1.png … /art/6.png

export default function Artpack() {
  return (
    <div className=" py-12 ">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        <span className="bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          Official ECell IIIT Delhi&apos;s ArtPack
        </span>
      </h2>
    <div className="flex flex-wrap gap-4justify-center items-center">
      
      {files.map((n) => (
        <div
          key={n}
          className="flex justify-center items-center
                     w-[40%] sm:w-[30%] md:w-[22%] lg:w-[18%] xl:w-[15%]"
        >
          <Image
            src={`/art/${n}.png`}
            alt={`ECell IIIT Delhi art ${n}`}
            width={720}
            height={720}
            className="w-full h-auto object-contain"
            priority={n === 1}          // (optional) eager-load the first one
          />
        </div>
      ))}
      <div className="text-white">All ArtWork are Unique Intellectual Property of
ECell
 IIIT Delhi</div>
    </div></div>
  );
}


// Generate icon with this JSON style:{
// "icon\_style": {
// "perspective": "isometric",
// "geometry": {
// "proportions": "1:1 ratio canvas, with objects fitting comfortably within margins",
// "element\_arrangement": "central dominant object, with supporting elements symmetrically or diagonally placed"
// },
// "composition": {
// "element\_count": "2–4 main objects",
// "spatial\_depth": "layered to create sense of dimension and slight elevation",
// "scale\_consistency": "uniform object scale across icon set",
// "scene\_density": "minimal to moderate, maintaining clarity and visual focus"
// },
// "lighting": {
// "type": "soft ambient light",
// "light\_source": "subtle top-right or front-top direction",
// "shadow": "gentle drop shadows below and behind objects",
// "highlighting": "mild edge illumination to define forms"
// },
// "textures": {
// "material\_finish": "semi-matte to satin surfaces",
// "surface\_treatment": "smooth with light tactile variation (e.g., wood grain, soft textures)",
// "texture\_realism": "stylized naturalism without hyper-realistic noise"
// },
// "render\_quality": {
// "resolution": "high-resolution octane 3D rendering",
// "edge\_definition": "crisp, no outlines; separation achieved via lighting and depth",
// "visual\_clarity": "clean, readable shapes with minimal clutter"
// },
// "color\_palette": {
// "tone": "naturalistic with slight saturation boost",
// "range": "harmonious muted tones with gentle contrast",
// "usage": "distinct colors per object to improve identification and readability"
// },
// "background": { no background
// //"color": "#FFFFFF",
// //"style": "pure white, flat",
// //"texture": "none"
// },
// "stylistic\_tone": "premium, friendly, clean with lifestyle or service-oriented appeal",
// "icon\_behavior": {
// "branding\_alignment": "neutral enough for broad applications",
// "scalability": "legible at small and medium sizes",
// "interchangeability": "part of a cohesive icon system with interchangeable subject matter"
// }
// }
// }


// Here's a clean list of visuals (symbols, icons, illustrations) you can include in your artpack for E-Cell IIIT-Delhi, categorized by theme:

// 🔖 1. Money Moves
// Flying rupee/dollar bills


// Coin stacks


// UPI scan QR codes


// Wallets (open with cash)


// Crypto coin icons (optional)


// Financial graphs with ₹ symbols



// 📈 2. Startup Growth
// Upward bar charts


// Rocket launch from laptop


// Seed → plant → tree metaphor


// Staircase with milestones


// Timeline with year markers


// Trophy or unicorn icon



// 💡 3. Innovation & Ideas
// Glowing lightbulbs


// Brain with circuitry lines


// Gears turning


// Origami bird opening


// Puzzle pieces connecting


// Sketchpad and pen icons



// 🚀 4. Hustle Mode
// Alarm clock and coffee mug


// Laptop with 10+ tabs open


// Deadline calendar


// Person running with briefcase


// “Loading...” or progress bars


// Energy bar UI (like in games)



// 💳 5. Finance & Fundraising
// Piggy banks


// Investment graph


// Rupee/dollar coins with wings


// Handshake with cash


// Cap table icons


// Safe vault door



// 🌐 6. The Digital Founder
// Laptop screen with code


// Mobile with analytics dashboard


// ChatGPT-style icon


// Canva + Figma symbols


// Wi-Fi signal with bulb


// App wireframes



// 🧑‍🎓 7. From Dorm Room to Boardroom
// Student in hoodie + CEO in suit


// Transition illustration (split panel)


// Hostel bunk bed + office chair


// Zoom logo + IPO banner


// Blazer over casuals


// Laptop stickers (GitHub, Notion, etc.)



// 🎤 8. Pitch Perfect
// Microphone drop


// Hand holding pitch deck


// Shark Tank chairs


// Spotlight on founder


// Speech bubble with ₹ or %


// Timer countdown



// 🌿 9. Social Impact & Sustainability
// Recycle arrows around bulb


// People holding globe


// Green startup leaf symbol


// ₹ with a heart symbol


// Tree growing from coin


// Solar panel + startup logo mashup



// 🤝 10. Team & Culture
// Group huddle


// Virtual meeting icons


// Whiteboard planning


// Coffee cup cheers


// Diverse team avatars


// Office space with sticky notes


