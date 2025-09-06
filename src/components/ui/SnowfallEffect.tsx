import React, { useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation from react-router-dom

const RaindropEffect: React.FC = () => {
  const location = useLocation(); // Get the current location (page)

  // Only render raindrop effect on the landing page (Index page)
  if (location.pathname !== "/") {
    return null; // Don't render anything on other pages
  }

  useEffect(() => {
    const createRaindrops = () => {
      const numberOfRaindrops = 100; // Number of raindrops
      const raindropsContainer = document.createElement("div");
      raindropsContainer.style.position = "fixed";
      raindropsContainer.style.top = "0";
      raindropsContainer.style.left = "0";
      raindropsContainer.style.width = "100%";
      raindropsContainer.style.height = "100%";
      raindropsContainer.style.pointerEvents = "none";
      raindropsContainer.style.zIndex = "9999";
      document.body.appendChild(raindropsContainer);

      // Create raindrops
      for (let i = 0; i < numberOfRaindrops; i++) {
        const raindrop = document.createElement("div");
        raindrop.style.position = "absolute";
        raindrop.style.backgroundColor = "#A9D6FF"; // Light blue color for raindrops
        raindrop.style.borderRadius = "50%";
        raindrop.style.opacity = (Math.random() * 0.5 + 0.5).toString(); // Random opacity for a softer effect

        // Increased size for the raindrops (range from 5px to 12px)
        const size = Math.random() * 7 + 5; // Random size between 5px to 12px
        raindrop.style.width = `${size}px`;
        raindrop.style.height = raindrop.style.width;

        // Randomize the position and animation delay
        raindrop.style.left = `${Math.random() * 100}vw`; // Random X position
        raindrop.style.animation = `fall ${Math.random() * 6 + 4}s linear infinite`; // Slow fall speed (between 4s to 10s)
        raindrop.style.animationDelay = `${Math.random() * 3}s`; // Random delay for variety

        raindropsContainer.appendChild(raindrop);
      }
    };

    createRaindrops();

    // Clean up raindrops when component unmounts
    return () => {
      const raindropsContainer = document.querySelector("div");
      if (raindropsContainer) {
        raindropsContainer.remove();
      }
    };
  }, []);

  return (
    <style >{`
      @keyframes fall {
        0% {
          transform: translateY(-100px); /* Start from above the screen */
        }
        100% {
          transform: translateY(100vh); /* Raindrops fall all the way down */
        }
      }
    `}</style>
  );
};

export default RaindropEffect;
