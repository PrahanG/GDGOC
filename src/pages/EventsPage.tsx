import React from 'react';
import { eventsData } from '../data/events';
import EventsComponent from '../components/events/EventsComponent';
import Navbar from '../components/Navbar';
import SnowfallEffect from "@/components/ui/SnowfallEffect";

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      <SnowfallEffect />
      <Navbar />
      <br />
      <br />
      <br />
      <main>
      <EventsComponent events={eventsData} />
      </main>
      <footer className="bg-white py-6 text-center text-gray-500 text-sm">
        <p>© 2025 GDGOC GRIET. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default EventsPage;