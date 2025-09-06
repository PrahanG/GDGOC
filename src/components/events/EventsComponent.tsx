import React, { useState, useEffect, useCallback } from 'react';
import { Event } from '../../types/event';
import EventCard from './EventCard';
import { motion, AnimatePresence } from 'framer-motion';

interface EventsComponentProps {
  events?: Event[];
}

const EventsComponent: React.FC<EventsComponentProps> = ({ events = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [lastInteractionTime, setLastInteractionTime] = useState(0);

  const handleNavigation = useCallback((newDirection: number) => {
    const now = Date.now();
    const interactionDelay = 800; // Reduced from 1000ms for smoother feel
    
    if (isAnimating || now - lastInteractionTime < interactionDelay) return;

    const newIndex = currentIndex + newDirection;
    if (newIndex >= 0 && newIndex < events.length) {
      setDirection(newDirection);
      setCurrentIndex(newIndex);
      setIsAnimating(true);
      setLastInteractionTime(now);
    }
  }, [currentIndex, events.length, isAnimating, lastInteractionTime]);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
      const scrollThreshold = 30; // Reduced threshold for more sensitive scrolling
      
      if (Math.abs(e.deltaY) < scrollThreshold) return;
      handleNavigation(e.deltaY > 0 ? 1 : -1);
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [handleNavigation]);

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;

    const currentTouch = e.touches[0].clientY;
    const diff = touchStart - currentTouch;

    if (Math.abs(diff) > 50) { // Threshold for touch swipe
      handleNavigation(diff > 0 ? 1 : -1);
      setTouchStart(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  const handleDotClick = (index: number) => {
    if (index === currentIndex || isAnimating) return;
    const direction = index > currentIndex ? 1 : -1;
    setDirection(direction);
    setCurrentIndex(index);
    setIsAnimating(true);
    setLastInteractionTime(Date.now());
  };

  const safeIndex = Math.max(0, Math.min(currentIndex, events.length - 1));
  const currentEvent = events[safeIndex];

  return (
    <div 
      className="relative py-8 sm:py-12 lg:py-20 bg-white"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="text-center mb-6 sm:mb-8 lg:mb-12">
        <p className="text-gray-600 text-base sm:text-lg">Scroll to explore events</p>
      </div>
      
      <div className="relative w-full max-w-[90%] sm:max-w-[85%] lg:max-w-6xl mx-auto h-[500px] sm:h-[550px] lg:h-[450px] px-4">
        <AnimatePresence initial={false} mode="wait">
          {currentEvent && (
            <motion.div
              key={safeIndex}
              initial={{ 
                opacity: 0,
                x: direction > 0 ? 1000 : -1000
              }}
              animate={{ 
                opacity: 1,
                x: 0,
                scale: 1
              }}
              exit={{ 
                opacity: 0,
                x: direction > 0 ? -1000 : 1000
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 30,
                mass: 1,
                duration: 0.8
              }}
              className="absolute inset-0"
              onAnimationComplete={() => {
                setIsAnimating(false);
              }}
            >
              <EventCard event={currentEvent} index={safeIndex} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {events.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === safeIndex 
                ? `w-8 ${
                    idx === 0 ? 'bg-blue-500' :
                    idx === 1 ? 'bg-red-500' :
                    idx === 2 ? 'bg-yellow-500' :
                    'bg-green-500'
                  }`
                : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsComponent;