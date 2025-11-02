"use client";

import React, { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, Grid3x3, List, Search, X, Clock, MapPin, Users } from "lucide-react";
import Image from "next/image";

interface EventData {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  image?: string;
  featured?: boolean;
  tags?: string[];
  duration?: string;
  maxParticipants?: number;
  registrationLink?: string;
}

const CATEGORY_COLORS = {
  Summit: { bg: "bg-gradient-to-br from-orange-600 to-orange-700", text: "text-orange-100", badge: "bg-orange-900/50 text-orange-200 border-orange-700" },
  Hackathon: { bg: "bg-gradient-to-br from-blue-600 to-blue-700", text: "text-blue-100", badge: "bg-blue-900/50 text-blue-200 border-blue-700" },
  Workshop: { bg: "bg-gradient-to-br from-purple-600 to-purple-700", text: "text-purple-100", badge: "bg-purple-900/50 text-purple-200 border-purple-700" },
  Webinar: { bg: "bg-gradient-to-br from-green-600 to-green-700", text: "text-green-100", badge: "bg-green-900/50 text-green-200 border-green-700" },
  Networking: { bg: "bg-gradient-to-br from-pink-600 to-pink-700", text: "text-pink-100", badge: "bg-pink-900/50 text-pink-200 border-pink-700" },
  Other: { bg: "bg-gradient-to-br from-gray-600 to-gray-700", text: "text-gray-100", badge: "bg-gray-900/50 text-gray-200 border-gray-700" },
};

interface CalendarProps {
  events: EventData[];
}

export function Calendar({ events }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date()); // Current date (Nov 2025)
  const [viewType, setViewType] = useState<"calendar" | "list">("calendar");
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories from events
  const categories = useMemo(() => {
    const cats = new Set(events.map(e => e.category));
    return Array.from(cats);
  }, [events]);

  // Filter events
  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           event.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || event.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [events, searchQuery, selectedCategory]);

  // Get events for current month
  const monthEvents = useMemo(() => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    return filteredEvents.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getMonth() === month && eventDate.getFullYear() === year;
    });
  }, [filteredEvents, currentDate]);

  // Calendar grid generation
  const getDaysInMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const calendarDays = Array.from({ length: 42 }, (_, i) => {
    const dayNumber = i - firstDay + 1;
    return dayNumber > 0 && dayNumber <= daysInMonth ? dayNumber : null;
  });

  const getEventsForDay = (day: number) => {
    if (!day) return [];
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return monthEvents.filter(event => event.date === dateStr);
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const monthName = currentDate.toLocaleString("default", { month: "long", year: "numeric" });

  const getColorScheme = (category: string) => {
    return CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS] || CATEGORY_COLORS.Other;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Event Calendar</h1>
          <p className="text-gray-400">Stay updated with all upcoming workshops, summits, and events</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === null
                  ? "bg-orange-600 text-white"
                  : "bg-gray-900 text-gray-300 hover:bg-gray-800"
              }`}
            >
              All Events
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-orange-600 text-white"
                    : "bg-gray-900 text-gray-300 hover:bg-gray-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-sm text-gray-400">
            {monthEvents.length} event{monthEvents.length !== 1 ? "s" : ""} in {monthName}
          </div>
          <div className="flex gap-2 bg-gray-900 p-1 rounded-lg">
            <button
              onClick={() => setViewType("calendar")}
              className={`flex items-center gap-2 px-4 py-2 rounded transition-all ${
                viewType === "calendar"
                  ? "bg-gray-800 text-orange-400"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              <Grid3x3 size={18} /> Calendar
            </button>
            <button
              onClick={() => setViewType("list")}
              className={`flex items-center gap-2 px-4 py-2 rounded transition-all ${
                viewType === "list"
                  ? "bg-gray-800 text-orange-400"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              <List size={18} /> List
            </button>
          </div>
        </div>

        {/* Calendar View */}
        {viewType === "calendar" && (
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
            
            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={goToPreviousMonth}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold">{monthName}</h2>
                <button
                  onClick={() => setCurrentDate(new Date())}
                  className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors"
                >
                  Today
                </button>
              </div>

              <button
                onClick={goToNextMonth}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Weekday Headers */}
            <div className="grid grid-cols-7 gap-2 mb-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                <div key={day} className="text-center font-semibold text-gray-400 py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((day, index) => {
                const dayEvents = day ? getEventsForDay(day) : [];
                const isToday = 
                  day === new Date().getDate() &&
                  currentDate.getMonth() === new Date().getMonth() &&
                  currentDate.getFullYear() === new Date().getFullYear();

                return (
                  <div
                    key={index}
                    className={`min-h-28 p-2 rounded-lg border transition-all cursor-pointer ${
                      day
                        ? isToday
                          ? "bg-gradient-to-br from-orange-600/20 to-orange-700/20 border-orange-500 shadow-lg shadow-orange-500/20"
                          : "bg-gray-800/50 border-gray-700 hover:border-gray-600"
                        : "bg-transparent border-transparent"
                    }`}
                  >
                    {day && (
                      <>
                        <div className={`font-semibold mb-1 relative ${isToday ? "text-orange-300" : "text-gray-300"}`}>
                          {day}
                          {isToday && (
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                          )}
                        </div>
                        <div className="space-y-1">
                          {dayEvents.slice(0, 2).map(event => {
                            const colors = getColorScheme(event.category);
                            return (
                              <button
                                key={event.id}
                                onClick={() => setSelectedEvent(event)}
                                className={`w-full text-left text-xs px-2 py-1 rounded truncate ${colors.bg} ${colors.text} hover:shadow-lg transition-all`}
                              >
                                {event.title}
                              </button>
                            );
                          })}
                          {dayEvents.length > 2 && (
                            <div className="text-xs text-gray-400 px-2">
                              +{dayEvents.length - 2} more
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* List View */}
        {viewType === "list" && (
          <div className="space-y-4">
            {monthEvents.length > 0 ? (
              monthEvents
                .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                .map(event => {
                  const colors = getColorScheme(event.category);
                  return (
                    <button
                      key={event.id}
                      onClick={() => setSelectedEvent(event)}
                      className="w-full text-left bg-gray-900/50 border border-gray-800 rounded-lg p-4 hover:border-gray-700 hover:bg-gray-900 transition-all group"
                    >
                      <div className="flex gap-4">
                        {event.image && (
                          <div className="hidden md:block w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={event.image}
                              alt={event.title}
                              width={80}
                              height={80}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors">
                                {event.title}
                              </h3>
                              <p className="text-sm text-gray-400">{event.description}</p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors.badge} border`}>
                              {event.category}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-1">
                              <Clock size={16} />
                              {event.date} at {event.time}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={16} />
                              {event.location}
                            </div>
                            {event.duration && (
                              <div className="flex items-center gap-1">
                                <Clock size={16} />
                                {event.duration}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No events found for this month</p>
              </div>
            )}
          </div>
        )}

        {/* Event Detail Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-800">
              {selectedEvent.image && (
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                </div>
              )}

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedEvent.title}</h2>
                    <p className="text-gray-400">{selectedEvent.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className={`inline-block px-4 py-2 rounded-full font-medium mb-6 ${getColorScheme(selectedEvent.category).badge} border`}>
                  {selectedEvent.category}
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Clock size={20} className="text-orange-400" />
                    <div>
                      <p className="text-sm text-gray-400">Date & Time</p>
                      <p className="font-medium">{selectedEvent.date} at {selectedEvent.time}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin size={20} className="text-orange-400" />
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="font-medium">{selectedEvent.location}</p>
                    </div>
                  </div>

                  {selectedEvent.duration && (
                    <div className="flex items-center gap-3 text-gray-300">
                      <Clock size={20} className="text-orange-400" />
                      <div>
                        <p className="text-sm text-gray-400">Duration</p>
                        <p className="font-medium">{selectedEvent.duration}</p>
                      </div>
                    </div>
                  )}

                  {selectedEvent.maxParticipants && (
                    <div className="flex items-center gap-3 text-gray-300">
                      <Users size={20} className="text-orange-400" />
                      <div>
                        <p className="text-sm text-gray-400">Max Participants</p>
                        <p className="font-medium">{selectedEvent.maxParticipants}</p>
                      </div>
                    </div>
                  )}
                </div>

                {selectedEvent.tags && selectedEvent.tags.length > 0 && (
                  <div className="mb-6">
                    <p className="text-sm text-gray-400 mb-2">Tags</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedEvent.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedEvent.registrationLink && (
                  <button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold py-3 rounded-lg transition-all">
                    Register Now
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Calendar;
