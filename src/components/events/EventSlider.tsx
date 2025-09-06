import React, { useState, useRef, useEffect } from 'react';
import { Event } from '../../types/event';
import EventCard from './EventCard';
import { motion, AnimatePresence } from 'framer-motion';

interface EventSliderProps {
  events: Event[];
}

const ANIMATION_DURATION = 500; // ms

const EventSlider: React.FC<EventSliderProps> = ({ events }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Wheel handler
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (isAnimating) return;

      if (e.deltaY > 0 && currentIndex < events.length - 1) {
        setScrollDirection('down');
        setCurrentIndex((prev) => prev + 1);
        setIsAnimating(true);
      } else if (e.deltaY < 0 && currentIndex > 0) {
        setScrollDirection('up');
        setCurrentIndex((prev) => prev - 1);
        setIsAnimating(true);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: true });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [currentIndex, events.length, isAnimating]);

  // Unlock animation after duration
  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => setIsAnimating(false), ANIMATION_DURATION);
      return () => clearTimeout(timeout);
    }
  }, [isAnimating]);

  // Handle dot click
  const handleDotClick = (index: number) => {
    if (index === currentIndex || isAnimating) return;
    setScrollDirection(index > currentIndex ? 'down' : 'up');
    setCurrentIndex(index);
    setIsAnimating(true);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden rounded-xl"
      tabIndex={0}
      style={{ outline: 'none' }}
    >
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={scrollDirection}>
          <motion.div
            key={events[currentIndex].id}
            custom={scrollDirection}
            initial={{ x: scrollDirection === 'down' ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: scrollDirection === 'down' ? -300 : 300, opacity: 0 }}
            transition={{ duration: ANIMATION_DURATION / 1000, ease: 'easeInOut' }}
            className="absolute w-full h-full"
          >
            <EventCard event={events[currentIndex]} index={currentIndex} />
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Pagination dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {events.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default EventSlider;
