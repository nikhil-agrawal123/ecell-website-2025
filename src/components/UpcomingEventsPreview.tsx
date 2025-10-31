'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';
import calendarEvents from '@/data/CalendarEvents.json';
import EventCard from './EventCard';

interface Event {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  time: string;
  endTime?: string;
  location: string;
  description: string;
  category: string;
  type: string;
  color: string;
  priority: string;
  registrationRequired: boolean;
  capacity?: number;
  tags: string[];
}

const UpcomingEventsPreview = () => {
  const events = calendarEvents.events as Event[];
  
  // Get next 3 upcoming events
  const upcomingEvents = events
    .filter(event => new Date(event.date) > new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);

  return (
    <section className="text-white">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Upcoming Events</h2>
          <p className="text-neutral-400">
            Don&apos;t miss out on our latest workshops, networking sessions, and competitions
          </p>
        </div>
        
        <Link href="/calendar">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
          >
            <FiCalendar />
            View Full Calendar
            <FiArrowRight />
          </motion.button>
        </Link>
      </div>

      {upcomingEvents.length === 0 ? (
        <div className="text-center py-12 bg-neutral-900 rounded-xl border border-neutral-800">
          <FiCalendar className="mx-auto text-4xl text-neutral-500 mb-4" />
          <p className="text-neutral-400">No upcoming events scheduled</p>
          <Link href="/calendar">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-4 px-6 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors"
            >
              View Calendar
            </motion.button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link href="/calendar">
                <EventCard 
                  event={event} 
                  variant="compact"
                  onClick={() => {}}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      )}

      <div className="mt-8 text-center">
        <Link href="/calendar">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium"
          >
            View all {events.length} events on our calendar
            <FiArrowRight />
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default UpcomingEventsPreview;