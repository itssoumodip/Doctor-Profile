"use client";

import React from 'react';

export function FallbackImage({ src, fallbackSrc, alt, className }) {
  const handleError = (e) => {
    e.target.onerror = null;
    e.target.src = fallbackSrc;
  };

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
}