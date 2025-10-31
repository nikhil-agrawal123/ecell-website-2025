'use client';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiChevronLeft, 
  FiChevronRight, 
  FiCalendar, 
  FiList, 
  FiFilter,
  FiSearch,
  FiMapPin,
  FiClock,
  FiUsers
} from 'react-icons/fi';
import calendarEvents from '@/data/CalendarEvents.json';

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

interface CalendarProps {
  className?: string;
}

type ViewType = 'month' | 'list';

// Helper functions
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

const formatTime = (timeString: string) => {
  const [hours, minutes] = timeString.split(':');
  const date = new Date();
  date.setHours(parseInt(hours), parseInt(minutes));
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
};

const Calendar = ({ className = '' }: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewType, setViewType] = useState<ViewType>('month');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const events = calendarEvents.events as Event[];
  const categories = calendarEvents.categories;

  // Filter events based on search and category
  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [events, searchTerm, selectedCategory]);

  // Get events for current month
  const currentMonthEvents = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    return filteredEvents.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month;
    });
  }, [filteredEvents, currentDate]);

  // Get upcoming events for list view
  const upcomingEvents = useMemo(() => {
    const now = new Date();
    return filteredEvents
      .filter(event => new Date(event.date) >= now)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [filteredEvents]);

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(newDate.getMonth() - 1);
      } else {
        newDate.setMonth(newDate.getMonth() + 1);
      }
      return newDate;
    });
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    const currentIterDate = new Date(startDate);

    for (let i = 0; i < 42; i++) {
      const dayEvents = currentMonthEvents.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate.toDateString() === currentIterDate.toDateString();
      });

      days.push({
        date: new Date(currentIterDate),
        isCurrentMonth: currentIterDate.getMonth() === month,
        isToday: currentIterDate.toDateString() === new Date().toDateString(),
        events: dayEvents
      });

      currentIterDate.setDate(currentIterDate.getDate() + 1);
    }

    return days;
  };

  const calendarDays = generateCalendarDays();

  return (
    <div className={`text-white ${className}`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold">
            {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </h2>
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigateMonth('prev')}
              className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors"
            >
              <FiChevronLeft className="text-lg" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigateMonth('next')}
              className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors"
            >
              <FiChevronRight className="text-lg" />
            </motion.button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* View Toggle */}
          <div className="flex items-center bg-neutral-800 rounded-lg p-1">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewType('month')}
              className={`p-2 rounded-md transition-colors ${
                viewType === 'month' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <FiCalendar />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewType('list')}
              className={`p-2 rounded-md transition-colors ${
                viewType === 'list' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <FiList />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        {/* Search */}
        <div className="relative flex-1">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-neutral-400"
          />
        </div>

        {/* Category Filter */}
        <div className="relative">
          <FiFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="pl-10 pr-8 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-blue-500 text-white appearance-none cursor-pointer"
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Calendar Views */}
      <AnimatePresence mode="wait">
        {viewType === 'month' ? (
          <motion.div
            key="month-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Month View */}
            <div className="bg-neutral-900 rounded-xl border border-neutral-800 overflow-hidden">
              {/* Week Headers */}
              <div className="grid grid-cols-7 bg-neutral-800">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="p-4 text-center font-semibold text-neutral-300 border-r border-neutral-700 last:border-r-0">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7">
                {calendarDays.map((day, index) => (
                  <motion.div
                    key={index}
                    className={`min-h-[120px] p-2 border-r border-b border-neutral-700 last:border-r-0 ${
                      !day.isCurrentMonth ? 'bg-neutral-800/50' : ''
                    } ${day.isToday ? 'bg-blue-900/20' : ''}`}
                  >
                    <div className={`text-sm font-semibold mb-2 ${
                      !day.isCurrentMonth ? 'text-neutral-500' : day.isToday ? 'text-blue-400' : 'text-neutral-300'
                    }`}>
                      {day.date.getDate()}
                    </div>
                    
                    <div className="space-y-1">
                      {day.events.slice(0, 2).map((event) => (
                        <motion.div
                          key={event.id}
                          whileHover={{ scale: 1.02 }}
                          onClick={() => setSelectedEvent(event)}
                          className="text-xs p-1 rounded cursor-pointer truncate"
                          style={{ backgroundColor: event.color + '20', color: event.color }}
                        >
                          {event.title}
                        </motion.div>
                      ))}
                      {day.events.length > 2 && (
                        <div className="text-xs text-neutral-400">
                          +{day.events.length - 2} more
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="list-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* List View */}
            <div className="space-y-4">
              {upcomingEvents.length === 0 ? (
                <div className="text-center py-12 text-neutral-400">
                  <FiCalendar className="mx-auto text-4xl mb-4 opacity-50" />
                  <p>No events found</p>
                </div>
              ) : (
                upcomingEvents.map((event: Event) => (
                  <EventCard key={event.id} event={event} onClick={() => setSelectedEvent(event)} />
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Event Details Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-neutral-900 border border-neutral-700 rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <EventDetailsModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Event Card Component for List View
const EventCard = ({ event, onClick }: { event: Event; onClick: () => void }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 cursor-pointer hover:border-neutral-600 transition-all"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: event.color }}
            />
            <span className="text-xs px-2 py-1 rounded-full bg-neutral-800 text-neutral-300">
              {event.category}
            </span>
            {event.priority === 'high' && (
              <span className="text-xs px-2 py-1 rounded-full bg-red-600/20 text-red-400">
                High Priority
              </span>
            )}
          </div>
          
          <h3 className="text-xl font-semibold mb-2 text-white">{event.title}</h3>
          <p className="text-neutral-400 mb-4 line-clamp-2">{event.description}</p>
          
          <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
            <div className="flex items-center gap-1">
              <FiCalendar className="text-blue-400" />
              {formatDate(event.date)}
              {event.endDate && event.endDate !== event.date && ` - ${formatDate(event.endDate)}`}
            </div>
            <div className="flex items-center gap-1">
              <FiClock className="text-green-400" />
              {formatTime(event.time)}
              {event.endTime && ` - ${formatTime(event.endTime)}`}
            </div>
            <div className="flex items-center gap-1">
              <FiMapPin className="text-purple-400" />
              {event.location}
            </div>
            {event.capacity && (
              <div className="flex items-center gap-1">
                <FiUsers className="text-orange-400" />
                {event.capacity} seats
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Event Details Modal Component
const EventDetailsModal = ({ event, onClose }: { event: Event; onClose: () => void }) => {
  return (
    <div>
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div 
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: event.color }}
            />
            <span className="text-sm px-3 py-1 rounded-full bg-neutral-800 text-neutral-300">
              {event.category}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white">{event.title}</h2>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="text-neutral-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>
      </div>

      <div className="space-y-6">
        <p className="text-neutral-300 leading-relaxed">{event.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-neutral-300">
              <FiCalendar className="text-blue-400" />
              <span>
                {formatDate(event.date)}
                {event.endDate && event.endDate !== event.date && ` - ${formatDate(event.endDate)}`}
              </span>
            </div>
            <div className="flex items-center gap-2 text-neutral-300">
              <FiClock className="text-green-400" />
              <span>
                {formatTime(event.time)}
                {event.endTime && ` - ${formatTime(event.endTime)}`}
              </span>
            </div>
            <div className="flex items-center gap-2 text-neutral-300">
              <FiMapPin className="text-purple-400" />
              <span>{event.location}</span>
            </div>
          </div>

          <div className="space-y-3">
            {event.capacity && (
              <div className="flex items-center gap-2 text-neutral-300">
                <FiUsers className="text-orange-400" />
                <span>Capacity: {event.capacity} people</span>
              </div>
            )}
            <div className="text-neutral-300">
              <span className="text-neutral-400">Registration:</span> {event.registrationRequired ? 'Required' : 'Not Required'}
            </div>
            <div className="text-neutral-300">
              <span className="text-neutral-400">Type:</span> {event.type === 'multi-day' ? 'Multi-day Event' : 'Single Day'}
            </div>
          </div>
        </div>

        {event.tags && event.tags.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-neutral-400 mb-2">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {event.tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-1 bg-neutral-800 text-neutral-300 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {event.registrationRequired && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all"
          >
            Register Now
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default Calendar;