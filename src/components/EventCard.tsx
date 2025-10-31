'use client';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiMapPin, FiUsers, FiExternalLink } from 'react-icons/fi';

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

interface EventCardProps {
  event: Event;
  onClick?: () => void;
  variant?: 'default' | 'compact' | 'featured';
  showCategory?: boolean;
  className?: string;
}

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

const EventCard = ({ 
  event, 
  onClick, 
  variant = 'default', 
  showCategory = true,
  className = '' 
}: EventCardProps) => {
  const isUpcoming = new Date(event.date) > new Date();
  const isPastEvent = new Date(event.date) < new Date();

  const baseClasses = "bg-neutral-900 border border-neutral-800 rounded-xl cursor-pointer hover:border-neutral-600 transition-all duration-200";
  
  const variantClasses = {
    default: "p-6",
    compact: "p-4",
    featured: "p-8 bg-gradient-to-br from-neutral-900 to-neutral-800"
  };

  return (
    <motion.div
      whileHover={{ scale: variant === 'featured' ? 1.02 : 1.01, y: -2 }}
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className} ${
        isPastEvent ? 'opacity-60' : ''
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          {/* Header with category and priority */}
          <div className="flex items-center gap-3 mb-3">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: event.color }}
            />
            
            {showCategory && (
              <span className="text-xs px-2 py-1 rounded-full bg-neutral-800 text-neutral-300">
                {event.category}
              </span>
            )}
            
            {event.priority === 'high' && (
              <span className="text-xs px-2 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-600/30">
                High Priority
              </span>
            )}
            
            {!isUpcoming && (
              <span className="text-xs px-2 py-1 rounded-full bg-neutral-600/20 text-neutral-400">
                Past Event
              </span>
            )}
          </div>
          
          {/* Title */}
          <h3 className={`font-semibold mb-2 text-white ${
            variant === 'featured' ? 'text-2xl' : variant === 'compact' ? 'text-lg' : 'text-xl'
          }`}>
            {event.title}
          </h3>
          
          {/* Description */}
          {variant !== 'compact' && (
            <p className="text-neutral-400 mb-4 line-clamp-2 leading-relaxed">
              {event.description}
            </p>
          )}
          
          {/* Event Details */}
          <div className={`flex flex-wrap gap-4 ${
            variant === 'compact' ? 'text-xs' : 'text-sm'
          } text-neutral-400`}>
            <div className="flex items-center gap-1">
              <FiCalendar className="text-blue-400 flex-shrink-0" />
              <span>
                {formatDate(event.date)}
                {event.endDate && event.endDate !== event.date && 
                  ` - ${formatDate(event.endDate)}`
                }
              </span>
            </div>
            
            <div className="flex items-center gap-1">
              <FiClock className="text-green-400 flex-shrink-0" />
              <span>
                {formatTime(event.time)}
                {event.endTime && ` - ${formatTime(event.endTime)}`}
              </span>
            </div>
            
            <div className="flex items-center gap-1">
              <FiMapPin className="text-purple-400 flex-shrink-0" />
              <span className="truncate">{event.location}</span>
            </div>
            
            {event.capacity && (
              <div className="flex items-center gap-1">
                <FiUsers className="text-orange-400 flex-shrink-0" />
                <span>{event.capacity} seats</span>
              </div>
            )}
          </div>

          {/* Tags */}
          {variant === 'featured' && event.tags && event.tags.length > 0 && (
            <div className="mt-4">
              <div className="flex flex-wrap gap-2">
                {event.tags.slice(0, 4).map((tag) => (
                  <span 
                    key={tag} 
                    className="text-xs px-2 py-1 bg-neutral-700/50 text-neutral-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                {event.tags.length > 4 && (
                  <span className="text-xs text-neutral-500">
                    +{event.tags.length - 4} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Registration Status */}
          {variant !== 'compact' && (
            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm">
                {event.registrationRequired ? (
                  <span className="text-yellow-400 font-medium">Registration Required</span>
                ) : (
                  <span className="text-green-400 font-medium">Open Event</span>
                )}
              </div>
              
              {isUpcoming && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-1 text-blue-400 text-sm font-medium"
                >
                  <span>View Details</span>
                  <FiExternalLink className="text-xs" />
                </motion.div>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;