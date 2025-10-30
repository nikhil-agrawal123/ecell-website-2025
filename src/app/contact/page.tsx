'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaFacebook,
} from 'react-icons/fa6';

const ReachOutPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    Phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [responseType, setResponseType] = useState<'success' | 'error' | ''>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
const validateForm = () => {
  const { name, email, Phone, subject, message } = formData;

  // Check if any field is empty
  if (!name || !email || !Phone || !subject || !message) {
    setResponseMessage('Please fill in all fields.');
    setResponseType('error');
    return false;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setResponseMessage('Please enter a valid email address.');
    setResponseType('error');
    return false;
  }

  // Validate phone number (basic check for 10 digits)
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(Phone)) {
    setResponseMessage('Please enter a valid 10-digit phone number.');
    setResponseType('error');
    return false;
  }

  return true;
};
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);
  setResponseMessage('');
  setResponseType('');

  if (!validateForm()) {
    setLoading(false);
    return;
  }

  try {
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      setResponseMessage(result.message || 'Message sent successfully!');
      setResponseType('success');
      setFormData({ name: '', email: '', Phone: '', subject: '', message: '' });
    } else {
      setResponseMessage(result.message || 'Something went wrong. Please try again.');
      setResponseType('error');
    }
  } catch (error) {
    setResponseMessage('An error occurred while sending the email.');
    setResponseType('error');
  }

  setLoading(false);
};


  return (
    <div className="relative min-h-screen bg-black text-white px-6 py-40 overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-pink-500/10 blur-2xl rounded-full"></div>

      <div className="flex flex-col items-center mb-12 z-10">
        <Image
          src="/logo.png"
          alt="E-Cell Logo"
          width={96}
          height={96}
          className="hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_12px_rgba(255,0,255,0.6)]"
        />
        <h1 className="mt-4 text-center text-4xl md:text-6xl font-bold bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          Contact E-Cell IIIT Delhi
        </h1>
        <p className="text-gray-400 text-center mt-2 max-w-xl italic">
          &quot;Have a question or want to collaborate? We&apos;d love to hear from you.&quot;
        </p>
      </div>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto z-10">
  {/* Left Column - Contact Form */}
  <div className="bg-black/80 border border-gray-800 p-6 rounded-xl shadow-lg">
    <h2 className="text-xl font-semibold mb-4">📩 Send us a Message</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <LabelInput id="name" value={formData.name} onChange={handleChange} placeholder="Your Full Name" />
      <LabelInput id="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" />
      <LabelInput id="Phone" value={formData.Phone} onChange={handleChange} placeholder="Your Contact Number" />
      <LabelInput id="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" />
      <LabelInput id="message" isTextarea value={formData.message} onChange={handleChange} placeholder="Your message..." />
      <button className="p-[3px] relative w-full mt-2">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 rounded-full" />
        <div className="w-full px-6 py-2 bg-black rounded-full font-bold relative z-10 text-white hover:bg-transparent text-center transition">
          {loading ? 'Sending...' : 'Send'}
        </div>
      </button>
      {responseMessage && (
        <div className={`mt-3 text-sm text-center px-4 py-2 rounded-md font-medium ${
          responseType === 'success'
            ? 'bg-blue-500/10 text-blue-300 border border-blue-500/20'
            : 'bg-red-500/10 text-red-300 border border-red-500/20'
        }`}>
          {responseMessage}
        </div>
      )}
    </form>
  </div>

  {/* Right Column with 2 rows */}
  <div className="flex flex-col gap-8">
    {/* Address Box */}
    <div className="bg-black/80 border border-gray-800 p-6 rounded-xl shadow-lg flex flex-col justify-between h-full">
      <h2 className="text-xl font-semibold ">📍 Our Address</h2>
      <p className="text-gray-400 text-sm leading-relaxed">
        E-Cell Room, <br />
        Students Activity Center, <br />
        IIIT Delhi, Okhla Phase III, <br />
        New Delhi, 110020 <br />
        📧 <a href="mailto:ecell@iiitd.ac.in" className="text-purple-400 underline">ecell@iiitd.ac.in</a>
      </p>
      <div className="bg-black/80 border border-gray-800 p-3 rounded-xl shadow-lg mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.777121084556!2d77.27070841143887!3d28.546418175610576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3f4d90d641f%3A0x463184c4bba507ae!2sE-Cell%20IIIT%20Delhi!5e0!3m2!1sen!2sin!4v1748638121786!5m2!1sen!2sin"
          width="100%"
          height="250"
          className="rounded-md w-full border border-gray-600"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>

    {/* Connect With Us */}
    <div className="bg-black/80 border border-gray-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">🌐 Connect With Us</h2>
      <div className="flex gap-5 text-2xl text-gray-400">
        <Link href="https://linkedin.com" target="_blank">
          <FaLinkedin className="hover:text-purple-400 hover:scale-110 transition duration-300" />
        </Link>
        <Link href="https://instagram.com" target="_blank">
          <FaInstagram className="hover:text-pink-500 hover:scale-110 transition duration-300" />
        </Link>
        <Link href="https://twitter.com" target="_blank">
          <FaXTwitter className="hover:text-yellow-300 hover:scale-110 transition duration-300" />
        </Link>
        <Link href="https://youtube.com" target="_blank">
          <FaYoutube className="hover:text-red-500 hover:scale-110 transition duration-300" />
        </Link>
        <Link href="https://facebook.com" target="_blank">
          <FaFacebook className="hover:text-blue-500 hover:scale-110 transition duration-300" />
        </Link>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

const LabelInput = ({
  id,
  type = 'text',
  isTextarea,
  value,
  onChange,
  placeholder,
}: {
  id: string;
  type?: string;
  isTextarea?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
}) => {
  return (
    <div>
      <label htmlFor={id} className="block mb-1 text-sm font-medium text-gray-300 capitalize">
        {id}
      </label>
      {isTextarea ? (
        <textarea
          id={id}
          rows={5}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="block w-full rounded-lg p-2.5 bg-black/[0.96] border border-gray-600 placeholder-gray-400 text-blue-400 text-sm focus:ring-purple-500 focus:border-purple-500"
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="block w-full rounded-lg p-2.5 bg-black/[0.96] border border-gray-600 placeholder-gray-400 text-blue-400 text-sm focus:ring-purple-500 focus:border-purple-500"
        />
      )}
    </div>
  );
};

export default ReachOutPage;
