import React, { useRef } from 'react';
import { useMagneticEffect } from '../hooks/useMagneticEffect.js';

export default function MagneticButton({ children, className = '', ...props }) {
  const buttonRef = useRef(null);
  useMagneticEffect(buttonRef);

  return (
    <button
      ref={buttonRef}
      type="button"
      className={`group relative inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-text transition duration-300 ease-custom hover:border-accent hover:text-accent ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
