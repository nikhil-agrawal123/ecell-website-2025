'use client';
import React, { useState } from 'react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import Image from 'next/image'
import Link from 'next/link'
import eventsData from '@/data/PlannedEvents.json'

const page = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const tabs = [
    { id: 'upcoming', label: 'Upcoming Events' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'completed', label: 'Completed Events' }
  ];

  return (
    <div className='bg-black py-40 h-full text-white px-12'>
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-6xl mb-6">
          Planned Events
        </h1>
        <p className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center italic text-transparent text-xl max-w-2xl mx-auto">
          Discover upcoming opportunities, workshops, and past achievements
        </p>
      </div>

      <div className='mx-auto max-w-screen-xl'>
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900/50 backdrop-blur-sm p-2 rounded-full border border-gray-800">
            <div className="flex space-x-2">
              {tabs.map((tab) => {
                const getTabColors = (tabId: string, isActive: boolean) => {
                  if (isActive) {
                    switch (tabId) {
                      case 'upcoming':
                        return 'bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25';
                      case 'workshops':
                        return 'bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white shadow-lg shadow-orange-500/25';
                      case 'completed':
                        return 'bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white shadow-lg shadow-green-500/25';
                      default:
                        return 'bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-white shadow-lg';
                    }
                  }
                  return 'text-gray-400 hover:text-white hover:bg-gray-800/50';
                };

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 whitespace-nowrap ${getTabColors(tab.id, activeTab === tab.id)}`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === 'upcoming' && <UpcomingEvents />}
          {activeTab === 'workshops' && <Workshops />}
          {activeTab === 'completed' && <CompletedEvents />}
        </div>
      </div>
    </div>
  )
}

export default page

// Tab Content Components
const UpcomingEvents = () => {
  const { upcomingEvents } = eventsData;
  
  return (
    <div className="space-y-8">
      <div className='flex flex-row justify-center pb-4'>
        <SectionHeading>
          Upcoming&nbsp;
          <span className="bg-gradient-to-br from-blue-400 to-blue-700 bg-clip-text text-transparent">
            Events
          </span>
        </SectionHeading>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}

const Workshops = () => {
  const { workshops } = eventsData;
  
  return (
    <div className="space-y-8">
      <div className='flex flex-row justify-center pb-4'>
        <SectionHeading>
          Upcoming&nbsp;
          <span className="bg-gradient-to-br from-orange-400 to-orange-700 bg-clip-text text-transparent">
            Workshops
          </span>
        </SectionHeading>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workshops.map((workshop) => (
          <WorkshopCard key={workshop.id} workshop={workshop} />
        ))}
      </div>
    </div>
  )
}

const CompletedEvents = () => {
  const { completedEvents } = eventsData;
  
  return (
    <div className="space-y-8">
      <div className='flex flex-row justify-center pb-4'>
        <SectionHeading>
          Completed&nbsp;
          <span className="bg-gradient-to-br from-green-400 to-green-700 bg-clip-text text-transparent">
            Events
          </span>
        </SectionHeading>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {completedEvents.map((event) => (
          <CompletedEventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}

// Card Components
const EventCard = ({ event }: { event: any }) => {
  return (
    <div className="flex flex-col">
      {/* Featured Badge - Always takes space for consistency */}
      <div className="h-6 mb-2 flex justify-center">
        {event.featured && (
          <div className="bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg animate-pulse">
            ✨ FEATURED EVENT
          </div>
        )}
      </div>
      
      <div className="min-h-[500px] bg-neutral-900 backdrop-blur-md border border-neutral-800 rounded-3xl p-6 flex flex-col justify-between h-full shadow-xl hover:shadow-blue-600/40 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 relative group">
        <div>
          <div className="w-full aspect-[16/9] rounded-xl overflow-hidden mb-4 relative">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-lg text-xs font-medium">
              {event.category}
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 min-h-[56px] flex items-start">
            {event.title}
          </h3>
          
          <div className="space-y-2 text-sm text-gray-400 mb-4">
            <div className="flex items-center gap-2">
              <span>📅</span>
              <span className="truncate">{new Date(event.date).toLocaleDateString('en-US', { 
                weekday: 'short', 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🕒</span>
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span className="truncate">{event.location}</span>
            </div>
          </div>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 min-h-[63px]">
            {event.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {event.tags.slice(0, 3).map((tag: string) => (
              <span key={tag} className="bg-neutral-800 text-gray-300 px-3 py-1 rounded-full text-xs border border-neutral-700">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <Link href={event.registrationLink}>
          <button className="p-[3px] relative w-full group-hover:scale-105 transition-transform duration-200">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full" />
            <div className="px-8 py-3 bg-neutral-900 rounded-full font-bold relative group transition duration-200 text-white hover:bg-transparent text-center">
              Register Now
            </div>
          </button>
        </Link>
      </div>
    </div>
  )
}

const WorkshopCard = ({ workshop }: { workshop: any }) => {
  return (
    <div className="flex flex-col">
      {/* Featured Badge Placeholder - Always takes space for consistency */}
      <div className="h-6 mb-2 flex justify-center">
        {/* Workshops don't have featured status, but we maintain spacing */}
      </div>
      
      <div className="min-h-[500px] bg-neutral-900 backdrop-blur-md border border-neutral-800 rounded-3xl p-6 flex flex-col justify-between h-full shadow-xl hover:shadow-orange-600/40 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 relative group">
        <div>
          <div className="w-full aspect-[16/9] rounded-xl overflow-hidden mb-4 relative">
            <Image
              src={workshop.image}
              alt={workshop.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 right-3 bg-orange-600/90 text-white px-2 py-1 rounded-lg text-xs font-medium">
              {workshop.duration}
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 min-h-[56px] flex items-start">
            {workshop.title}
          </h3>
          
          <div className="space-y-2 text-sm text-gray-400 mb-4">
            <div className="flex items-center gap-2">
              <span>📅</span>
              <span className="truncate">{new Date(workshop.date).toLocaleDateString('en-US', { 
                weekday: 'short', 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>👨‍🏫</span>
              <span className="truncate">{workshop.instructor}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📊</span>
              <span>{workshop.level}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>👥</span>
              <span>Max {workshop.maxParticipants}</span>
            </div>
          </div>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 min-h-[63px]">
            {workshop.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {workshop.tags.slice(0, 3).map((tag: string) => (
              <span key={tag} className="bg-neutral-800 text-gray-300 px-3 py-1 rounded-full text-xs border border-neutral-700">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <Link href={workshop.registrationLink}>
          <button className="p-[3px] relative w-full group-hover:scale-105 transition-transform duration-200">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-full" />
            <div className="px-8 py-3 bg-neutral-900 rounded-full font-bold relative group transition duration-200 text-white hover:bg-transparent text-center">
              Join Workshop
            </div>
          </button>
        </Link>
      </div>
    </div>
  )
}

const CompletedEventCard = ({ event }: { event: any }) => {
  return (
    <div className="flex flex-col">
      {/* Featured Badge Placeholder - Always takes space for consistency */}
      <div className="h-6 mb-2 flex justify-center">
        {/* Completed events don't have featured status, but we maintain spacing */}
      </div>
      
      <div className="min-h-[500px] bg-neutral-900 backdrop-blur-md border border-neutral-800 rounded-3xl p-6 flex flex-col justify-between h-full shadow-xl hover:shadow-green-600/40 transition-all duration-300 hover:-translate-y-1 hover:border-green-500 relative group">
        <div>
          <div className="w-full aspect-[16/9] rounded-xl overflow-hidden mb-4 relative">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 right-3 bg-green-600/90 text-white px-2 py-1 rounded-lg text-xs font-medium">
              Completed ✓
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 min-h-[56px] flex items-start">
            {event.title}
          </h3>
          
          <div className="space-y-2 text-sm text-gray-400 mb-4">
            <div className="flex items-center gap-2">
              <span>📅</span>
              <span>{new Date(event.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
              })}</span>
            </div>
            {event.attendees && (
              <div className="flex items-center gap-2">
                <span>👥</span>
                <span>{event.attendees} attendees</span>
              </div>
            )}
            {event.participants && (
              <div className="flex items-center gap-2">
                <span>👨‍💻</span>
                <span>{event.participants} participants</span>
              </div>
            )}
          </div>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 min-h-[63px]">
            {event.description}
          </p>
          
          {event.highlights && (
            <div className="mb-4">
              <h4 className="text-sm font-medium text-white mb-2">Key Highlights:</h4>
              <ul className="text-xs text-gray-400 space-y-1">
                {event.highlights.slice(0, 2).map((highlight: string, index: number) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-green-400 flex-shrink-0 leading-none">•</span>
                    <span className="line-clamp-2">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {event.tags.slice(0, 3).map((tag: string) => (
            <span key={tag} className="bg-neutral-800 text-gray-300 px-3 py-1 rounded-full text-xs border border-neutral-700">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}