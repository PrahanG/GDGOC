import React, { useState } from 'react';
import { Event } from '../../types/event';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface EventCardProps {
  event: Event;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  const [currentImage, setCurrentImage] = useState(0);

  if (!event) {
    return null;
  }

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % event.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + event.images.length) % event.images.length);
  };

  const colorClasses = {
    blue: 'bg-blue-500',
    red: 'bg-red-500',
    yellow: 'bg-yellow-500',
    green: 'bg-green-500'
  };

  return (
    <div className={`w-full h-full ${colorClasses[event.color]} rounded-3xl shadow-xl overflow-hidden`}>
      <div className="flex flex-col lg:flex-row h-full">
        <div className="relative w-full lg:w-1/2 h-[250px] sm:h-[300px] lg:h-full">
          <motion.img
            key={currentImage}
            src={event.images[currentImage]}
            alt={event.title}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-2 rounded-full text-white transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-2 rounded-full text-white transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 flex flex-col text-white">
          <div className="mb-2 sm:mb-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/20">
              {event.date}
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">{event.title}</h2>
          <p className="text-white/90 text-sm sm:text-base mb-4 sm:mb-6">{event.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4 sm:mb-8">
            {event.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 sm:px-3 py-1 bg-white/20 rounded-full text-xs sm:text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;