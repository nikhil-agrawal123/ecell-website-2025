'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaEnvelope, FaUser } from 'react-icons/fa';
import teamData from '@/data/TeamMembers.json';

type TeamMember = {
  name: string;
  role: string;
  img: string;
  linkedin: string;
  email: string;
};

type TeamData = Record<string, TeamMember[]>;

const typedTeamData = teamData as TeamData;
const availableYears = Object.keys(typedTeamData).sort((a, b) => b.localeCompare(a)); // latest first

// Helper for icon gradient colors
const getIconColor = (index: number) => {
  const colors = [
    'text-purple-400',
    'text-pink-500',
    'text-cyan-400',
    'text-blue-400',
    'text-green-400',
    'text-orange-400',
  ];
  return colors[index % colors.length];
};

const TeamPage = () => {
  const [selectedYear, setSelectedYear] = useState<string>(availableYears[0]);
  const teamMembers = typedTeamData[selectedYear] || [];

  return (
    <div className="bg-black text-white font-sans min-h-screen sm:px-24 px-12 pt-40">
      {/* Intro Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-br from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent leading-tight drop-shadow-lg">
            Meet the Team <br /> Behind E-Cell
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            We are a diverse and passionate group of innovators, hustlers, and dreamers
            committed to building a strong entrepreneurial ecosystem at IIIT-Delhi.
          </p>

          {/* Stylish Year Selector */}
          <div className="flex flex-wrap gap-4 mt-4">
            {availableYears.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  selectedYear === year
                    ? 'bg-purple-600 border-purple-500 text-white'
                    : 'bg-neutral-800 border-neutral-700 text-gray-300 hover:bg-neutral-700'
                }`}
              >
                Team {year}
              </button>

              
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/art/10.png"
            alt="E-Cell Artwork"
            width={400}
            height={400}
            className="w-[18rem] md:w-[22rem] lg:w-[26rem] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Team Grid */}
      <div className="mt-24 grid gap-12 sm:grid-cols-2 md:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-neutral-900 hover:bg-neutral-800 transform hover:-translate-y-1 transition-all duration-300 rounded-3xl p-6 flex flex-col items-center text-center shadow-xl hover:shadow-purple-600/30 border border-neutral-800 hover:border-purple-500"
          >
            {/* Uniform square image container */}
            <div className="relative w-40 h-40 md:w-44 md:h-44 rounded-xl overflow-hidden mb-4">
              {member.img && member.img !== '/team/dumy.png' ? (
                <Image
                  src={member.img}
                  alt={`${member.name} - ${member.role}`}
                  fill
                  sizes="(max-width: 768px) 10rem, 11rem"
                  className="object-cover"
                  priority={index < 6}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-neutral-800 via-neutral-900 to-black flex items-center justify-center">
                  <FaUser className={`text-8xl ${getIconColor(index)}`} />
                </div>
              )}
            </div>
            <h2 className="text-xl font-semibold text-white">{member.name}</h2>
            <p className="text-sm text-gray-400 mb-4">{member.role}</p>
            <div className="flex gap-4 mt-auto">
              <a href={member.linkedin || '/member-coming-soon'} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-500 hover:text-blue-300 text-xl transition-all duration-200" />
              </a>
              <a href={member.email ? `mailto:${member.email}` : '/member-coming-soon'} target="_blank" rel="noopener noreferrer">
                <FaEnvelope className="text-yellow-300 hover:text-yellow-100 text-xl transition-all duration-200" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
