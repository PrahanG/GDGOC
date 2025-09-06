import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users } from "lucide-react";

const EventsSection = () => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  return (
    <div className="bg-white rounded-xl border shadow-sm p-8 max-w-2xl mx-auto font-inter">
      {/* Section Title */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
          Events Overview
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Discover what’s coming up and revisit our past highlights
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b mb-6">
        {["upcoming", "past"].map((tab) => (
          <button
            key={tab}
            className={cn(
              "flex-1 py-2 text-sm font-medium transition-colors",
              activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            )}
            onClick={() => setActiveTab(tab as "upcoming" | "past")}
          >
            {tab === "upcoming" ? "Upcoming Events" : "Past Events"}
          </button>
        ))}
      </div>

      {/* Event Cards */}
      <div className="space-y-5">
        {activeTab === "upcoming" ? (
          <>
            <EventCard
              title="Orientation"
              date="06/09/2025"
              location="Griet College"
              attendees="200+ Attendees"
              isNew
              registrationLink="https://docs.google.com/forms/d/e/1FAIpQLSftYyaj8HpzMhwTL0MvfRv48OT3Ak0iAJ64PN7J8z9WHO6FmA/viewform"
            />
            <EventCard
              title="Google-Powered Solution Challenge 2025"
              date="6th Jan - 2nd week of July"
              location="Online"
              attendees="200+ Attendees"
              registrationLink="https://example.com/solution-challenge"
            />
          </>
        ) : (
          <div className="space-y-5">
            <PastEventCard
              title="Build with AI"
              type="Speaker Session / Tech Talk"
              date="7 Feb 2025"
              location="Gokaraju Rangaraju Institute of Engineering & Technology - Hyderabad, India"
            />
            <PastEventCard
              title="Build with AI"
              type="Info Session"
              date="11 Oct 2024"
              location="Gokaraju Rangaraju Institute of Engineering & Technology - Hyderabad, India"
            />
            <PastEventCard
              title="GDGoC Orientation"
              type="Info Session"
              date="26 Sept 2024"
              location="Gokaraju Rangaraju Institute of Engineering & Technology - Hyderabad, India"
            />
          </div>
        )}
      </div>
    </div>
  );
};

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  attendees: string;
  isNew?: boolean;
  registrationLink: string;
}

const EventCard = ({ title, date, location, attendees, isNew, registrationLink }: EventCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-lg border p-5 relative shadow-sm hover:shadow-md transition-all"
      whileHover={{ scale: 1.01 }}
    >
      {isNew && (
        <span className="absolute right-3 top-3 bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full font-medium">
          New
        </span>
      )}

      <h3 className="font-semibold text-lg text-gray-900 mb-4">{title}</h3>

      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-gray-400" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-gray-400" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users size={16} className="text-gray-400" />
          <span>{attendees}</span>
        </div>
      </div>

      <a
        href={registrationLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full py-2 mt-5 text-center text-white font-medium rounded-md bg-blue-600 hover:bg-blue-700 transition-all"
      >
        Register Now
      </a>
    </motion.div>
  );
};

interface PastEventCardProps {
  title: string;
  type: string;
  date: string;
  location: string;
}

const PastEventCard = ({ title, type, date, location }: PastEventCardProps) => {
  return (
    <motion.div
      className="bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-all"
      whileHover={{ scale: 1.01 }}
    >
      <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500 mb-3 italic">{type}</p>
      <div className="text-sm text-gray-600 space-y-2">
        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-gray-400" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-gray-400" />
          <span>{location}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default EventsSection;
