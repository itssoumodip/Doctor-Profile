'use client';

import { useEffect, useRef, useState } from 'react';

export function ScrollReveal({ 
  children, 
  threshold = 0.1,
  animation = 'animate-slide-up', 
  delay = 0,
  className = "",
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div 
      ref={ref} 
      className={`${className} ${isVisible ? animation : 'opacity-0'}`} 
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionDuration: '800ms',
        transitionProperty: 'all',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {children}
    </div>
  );
}