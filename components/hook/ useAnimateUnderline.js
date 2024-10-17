import { useEffect, useRef } from 'react';

export const useAnimateUnderline = () => {
  const underlineRef = useRef(null);

  useEffect(() => {
    const underline = underlineRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animation when in view

            setTimeout(() => {
              underline.style.animation = 'underline-grow 2s ease-in-out forwards';
            }, 10);
          }
          underline.style.animation = 'none'; // Reset
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (underline) {
      observer.observe(underline);
    }

    return () => observer.disconnect();
  }, []);

  return underlineRef;
};
