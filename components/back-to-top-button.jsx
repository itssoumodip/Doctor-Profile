"use client";

import { useEffect, useState } from "react";

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button 
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-600 flex items-center justify-center shadow-lg transition-all duration-300 transform hover:-translate-y-1 group z-10 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`}
      aria-label="Back to top"
    >
      <svg 
        className="w-5 h-5 text-white group-hover:translate-y-[-2px] transition-transform duration-300" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}