import { Calendar } from "@/components/Calendar";
import plannedEventsData from "@/data/PlannedEvents.json";

interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  longDescription?: string;
  category: string;
  image?: string;
  featured?: boolean;
  tags?: string[];
  duration?: string;
  maxParticipants?: number;
  registrationLink?: string;
}

export default function CalendarPage() {
  // Combine events from both arrays and ensure all have a category
  const allEvents: EventItem[] = [
    ...(plannedEventsData.upcomingEvents || []),
    ...(plannedEventsData.workshops || []).map((event: any) => ({
      ...event,
      category: event.category || "Workshop", // Default to Workshop if not specified
    })),
  ];

  return (
    <main className="bg-black min-h-screen pt-20">
      <Calendar events={allEvents} />
    </main>
  );
}
