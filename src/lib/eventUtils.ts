// Utility functions for event management
export interface Event {
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

export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

export const formatTime = (timeString: string) => {
  const [hours, minutes] = timeString.split(':');
  const date = new Date();
  date.setHours(parseInt(hours), parseInt(minutes));
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
};

export const formatDateRange = (startDate: string, endDate?: string) => {
  if (!endDate || endDate === startDate) {
    return formatDate(startDate);
  }
  
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
    return `${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${end.getDate()}, ${end.getFullYear()}`;
  }
  
  return `${formatDate(startDate)} - ${formatDate(endDate)}`;
};

export const isEventToday = (dateString: string) => {
  const eventDate = new Date(dateString);
  const today = new Date();
  return eventDate.toDateString() === today.toDateString();
};

export const isEventUpcoming = (dateString: string) => {
  return new Date(dateString) > new Date();
};

export const isEventThisWeek = (dateString: string) => {
  const eventDate = new Date(dateString);
  const today = new Date();
  const weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  return eventDate >= today && eventDate <= weekFromToday;
};

export const getEventStatus = (event: Event): 'past' | 'today' | 'upcoming' | 'this-week' => {
  if (isEventToday(event.date)) return 'today';
  if (!isEventUpcoming(event.date)) return 'past';
  if (isEventThisWeek(event.date)) return 'this-week';
  return 'upcoming';
};

export const filterEventsByCategory = (events: Event[], category: string) => {
  if (category === 'all') return events;
  return events.filter(event => event.category === category);
};

export const searchEvents = (events: Event[], searchTerm: string) => {
  const term = searchTerm.toLowerCase();
  return events.filter(event => 
    event.title.toLowerCase().includes(term) ||
    event.description.toLowerCase().includes(term) ||
    event.location.toLowerCase().includes(term) ||
    event.tags.some(tag => tag.toLowerCase().includes(term)) ||
    event.category.toLowerCase().includes(term)
  );
};

export const sortEventsByDate = (events: Event[], order: 'asc' | 'desc' = 'asc') => {
  return [...events].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return order === 'asc' ? dateA - dateB : dateB - dateA;
  });
};

export const getEventsForMonth = (events: Event[], year: number, month: number) => {
  return events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month;
  });
};

export const getEventsForDay = (events: Event[], date: Date) => {
  const targetDateString = date.toDateString();
  return events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.toDateString() === targetDateString;
  });
};

export const getEventsByPriority = (events: Event[], priority: 'high' | 'medium' | 'low') => {
  return events.filter(event => event.priority === priority);
};

export const getRegistrationRequiredEvents = (events: Event[]) => {
  return events.filter(event => event.registrationRequired);
};

export const generateCalendarGrid = (year: number, month: number) => {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - firstDay.getDay());

  const days = [];
  const currentIterDate = new Date(startDate);

  for (let i = 0; i < 42; i++) {
    days.push({
      date: new Date(currentIterDate),
      isCurrentMonth: currentIterDate.getMonth() === month,
      isToday: currentIterDate.toDateString() === new Date().toDateString(),
      dayNumber: currentIterDate.getDate()
    });
    currentIterDate.setDate(currentIterDate.getDate() + 1);
  }

  return days;
};

// Color utility functions
export const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    'Workshop': '#8B5CF6',
    'Summit': '#3B82F6',
    'Hackathon': '#10B981',
    'Networking': '#F59E0B',
    'Showcase': '#EF4444',
    'Panel Discussion': '#EC4899',
    'Bootcamp': '#06B6D4',
    'Pitch Event': '#DC2626'
  };
  return colors[category] || '#6B7280';
};

export const getPriorityColor = (priority: string) => {
  const colors: Record<string, string> = {
    'high': '#DC2626',
    'medium': '#F59E0B',
    'low': '#10B981'
  };
  return colors[priority] || '#6B7280';
};

// Event duration helpers
export const getEventDuration = (event: Event): string => {
  if (!event.endTime) {
    return 'All day';
  }
  
  const start = new Date(`2000-01-01 ${event.time}`);
  const end = new Date(`2000-01-01 ${event.endTime}`);
  const durationMs = end.getTime() - start.getTime();
  const durationHours = Math.floor(durationMs / (1000 * 60 * 60));
  const durationMinutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));
  
  if (durationHours === 0) {
    return `${durationMinutes} min`;
  } else if (durationMinutes === 0) {
    return `${durationHours} hr`;
  } else {
    return `${durationHours}h ${durationMinutes}m`;
  }
};

export const isMultiDayEvent = (event: Event): boolean => {
  return !!event.endDate && event.endDate !== event.date;
};

// Calendar view helpers
export const getMonthName = (month: number): string => {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return monthNames[month];
};

export const getWeekdayNames = (): string[] => {
  return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
};