'use client';
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import Calendar from '@/components/Calendar';
import { SectionHeading } from '@/components/ui/SectionHeading';
// Loading skeleton component
const CalendarLoadingSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-8 bg-neutral-800 rounded mb-6 w-1/3"></div>
    <div className="grid grid-cols-7 gap-4 mb-4">
      {[...Array(7)].map((_, i) => (
        <div key={i} className="h-6 bg-neutral-800 rounded"></div>
      ))}
    </div>
    <div className="grid grid-cols-7 gap-4">
      {[...Array(35)].map((_, i) => (
        <div key={i} className="h-24 bg-neutral-800 rounded"></div>
      ))}
    </div>
  </div>
);

export default function CalendarPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="sm:px-24 px-12 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <SectionHeading persistCenter>
            Event Calendar
            <br />
            <span className="bg-gradient-to-br from-blue-400 to-blue-700 py-4 bg-clip-text text-transparent">
              Plan Your Journey
            </span>
          </SectionHeading>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-400 mt-6 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Stay ahead of the curve with our comprehensive event calendar. From workshops and hackathons to 
            networking sessions and pitch events, discover all the opportunities that await you in the 
            entrepreneurship ecosystem at IIIT Delhi.
          </motion.p>
        </motion.div>

        {/* Statistics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          <StatCard
            title="Total Events"
            value="15+"
            description="Upcoming events this semester"
            gradient="from-blue-500 to-cyan-500"
          />
          <StatCard
            title="Workshops"
            value="8"
            description="Hands-on learning sessions"
            gradient="from-purple-500 to-pink-500"
          />
          <StatCard
            title="Networking"
            value="4"
            description="Community building events"
            gradient="from-green-500 to-emerald-500"
          />
          <StatCard
            title="Competitions"
            value="3"
            description="Hackathons and pitch events"
            gradient="from-orange-500 to-red-500"
          />
        </motion.div>

        {/* Main Calendar Component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl border border-neutral-800 p-6 sm:p-8"
        >
          <Suspense fallback={<CalendarLoadingSkeleton />}>
            <Calendar />
          </Suspense>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to organize an event?
            </h3>
            <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
              Have an idea for a workshop, talk, or networking event? We&apos;re always looking for 
              passionate individuals to contribute to our entrepreneurship community.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200"
            >
              Submit Event Proposal
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Statistics Card Component
interface StatCardProps {
  title: string;
  value: string;
  description: string;
  gradient: string;
}

const StatCard = ({ title, value, description, gradient }: StatCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-600 transition-all duration-200"
    >
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${gradient} mb-4`}>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-white mb-1">{value}</h3>
      <p className="text-neutral-400 text-sm font-medium mb-1">{title}</p>
      <p className="text-neutral-500 text-xs">{description}</p>
    </motion.div>
  );
};
