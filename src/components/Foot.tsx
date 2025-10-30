// components/Footer.tsx
'use client'
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube, FaXTwitter } from 'react-icons/fa6';
import { SpinningText } from './ui/spinning-text';
const Footer = () => {
  const footerLinks = {
    initiatives1: [
      { label: 'Founders Talk', href: '/initiatives#Founders-talk' },
      { label: 'Pitch Cafe', href: '/initiatives#Pitch-cafe' },{ label: 'Ideathon', href: '/initiatives#ideathon' },{ label: 'Open House', href: '/initiatives#open-house' },{ label: 'Snack Chat', href: '/initiatives#snackchat' },
    ],
    initiatives2: [
      { label: 'Resources', href: '/resources' },
      { label: 'FAQs', href: '/resources#FAQs' },
      { label: 'Video Highlights', href: '/resources#Videos' },
      { label: 'Important Links', href: '/resources#ImpLinks' },

    ],
    usefulLinks: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/team' },
      { label: 'Initiatives', href: '/initiatives' },
      // { label: 'Blog', href: '/blog' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Contact', href: '/contact' },
    ],
  };

  return (
    <footer className="bg-black text-white px-12 md:px-12 pt-20 pb-10 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-12">
        {/* Left: Logo + Tagline + Subscribe + Socials */}
        <div className="col-span-2 flex flex-col gap-6">
          {/* Logo + Text */}
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="E-Cell IIITD Logo"
              width={80}
              height={80}
              className="transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,0,255,0.6)]"
            />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-white">
                Entrepreneurship Cell <br /> of IIIT Delhi
              </h1>
            </div>
          </div>

{/* Subscribe */}
<div>
  <p className="text-base font-semibold mb-2">Subscribe to Our Newsletters</p>
  <form
    onSubmit={async (e) => {
      e.preventDefault();
      const emailInput = e.currentTarget.email;
      const email = emailInput.value;

      try {
        const res = await fetch('/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });

        const result = await res.json();
        if (res.ok) {
          alert(result.message || 'Subscribed successfully!');
          emailInput.value = '';
        } else {
          alert(result.message || 'Something went wrong.');
        }
      } catch (err) {
        console.error(err);
        alert('Subscription failed.');
      }
    }}
    className="flex items-center border border-gray-600 rounded-full overflow-hidden max-w-sm"
  >
    <input
      type="email"
      name="email"
      required
      placeholder="Enter your email"
      className="bg-black text-white px-4 py-2 flex-1 outline-none placeholder:text-gray-400"
    />
    <button
      type="submit"
      className="bg-white text-black px-4 py-2 font-bold hover:bg-purple-500 hover:text-white transition"
    >
      →
    </button>
  </form>
</div>


          {/* Social Icons */}
          <div>
            <p className="text-base font-semibold mb-2">Follow us</p>
            <div className="flex gap-4 text-xl text-gray-400">
             <div className="flex gap-4 text-xl">
  <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="hover:text-purple-400 hover:scale-110 transition duration-300 cursor-pointer" />
  </Link>
  <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="hover:text-pink-500 hover:scale-110 transition duration-300 cursor-pointer" />
  </Link>
  <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <FaXTwitter className="hover:text-yellow-300 hover:scale-110 transition duration-300 cursor-pointer" />
  </Link>
  <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
    <FaYoutube className="hover:text-red-500 hover:scale-110 transition duration-300 cursor-pointer" />
  </Link>
  <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <FaFacebook className="hover:text-blue-500 hover:scale-110 transition duration-300 cursor-pointer" />
  </Link>
</div>
            </div>
          </div>
        </div>

        {/* Initiatives Column 1 */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Our Initiatives</h4>
          <ul className="space-y-2 text-gray-400">
            {footerLinks.initiatives1.map(({ label, href }) => (
              <li key={label} className="hover:text-purple-400 hover:translate-x-1 transition duration-200">
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Initiatives Column 2 */}
        <div>
          <h4 className="text-lg font-semibold mb-4 invisible md:visible">More </h4>
          <ul className="space-y-2 text-gray-400">
            {footerLinks.initiatives2.map(({ label, href }) => (
              <li key={label} className="hover:text-pink-500 hover:translate-x-1 transition duration-200">
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
          <ul className="space-y-2 text-gray-400">
            {footerLinks.usefulLinks.map(({ label, href }) => (
              <li key={label} className="hover:text-yellow-300 hover:translate-x-1 transition duration-200">
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <div className="text-gray-400 leading-relaxed">
            <p>E-Cell Room, <br />Students Activity Center,</p>
            <p>IIIT Delhi, Okhla Phase III</p>
            <p>New Delhi, 110020</p>
            <p className="mt-2">
              📧{' '}
              <a
                href="mailto:ecell@iiitd.ac.in"
                className="underline hover:text-purple-400 transition"
              >
                ecell@iiitd.ac.in
              </a>
            </p>
            <br /><br />
            <br />
               <div className="">
          <SpinningText>
            Explore • Encounter • Endeavour •
          </SpinningText>
        </div>
          </div>
                  
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 mt-12 pt-6 border-t border-gray-800">
        &copy; {new Date().getFullYear()} E-Cell IIIT Delhi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
