import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton.jsx';

export default function Hero() {
  const headlineRef = useRef(null);

  useEffect(() => {
    if (!headlineRef.current) return;
    const characters = headlineRef.current.querySelectorAll('span');
    characters.forEach((char, index) => {
      char.style.opacity = '0';
      char.style.transform = 'translateY(12px)';
      setTimeout(() => {
        char.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
        char.style.opacity = '1';
        char.style.transform = 'translateY(0)';
      }, index * 45);
    });
  }, []);

  const headline = 'Empowering minds with AI skills. Building futures.';

  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-20">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 brightness-110 pointer-events-none"
        >
          <source src="/videos/bg.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient Overlay for smooth transition */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent z-0 pointer-events-none" />
        
        <div className="container relative z-10 flex flex-col items-center text-center max-w-6xl mx-auto">
          <div className="space-y-8 flex flex-col items-center">
            <div className="label-small text-white font-bold tracking-[0.2em] uppercase inline-block border border-white/20 rounded-full px-6 py-2 bg-white/5 shadow-lg">Learn Today. Lead Tomorrow.</div>
            <h1 ref={headlineRef} className="text-4xl sm:text-5xl md:text-5xl lg:text-[4.5rem] font-medium max-w-5xl tracking-tight uppercase leading-[1.05] drop-shadow-xl">
              {headline.split(' ').map((word, index) => {
                const isRed = word.toUpperCase().includes('BUILDING') || word.toUpperCase().includes('FUTURES');
                return (
                  <span key={`${word}-${index}`} className={`inline-block mr-2 ${isRed ? 'text-accent drop-shadow-[0_0_15px_rgba(211,32,39,0.4)]' : 'text-white'}`}>
                    {word}
                  </span>
                );
              })}
            </h1>
            <p className="section-copy max-w-2xl text-text/80 text-lg mx-auto">
              Master the power of AI with our industry-relevant training. From fundamentals to real-world applications, we help you grow smarter and build a future ready career.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8 w-full">
              <MagneticButton className="bg-accent text-white border-accent shadow-[0_0_20px_rgba(211,32,39,0.4)] hover:bg-accent hover:text-white px-10 py-4 text-base" onClick={() => (window.location.href = '/contact')}>
                Join the AI Revolution <span className="ml-2">→</span>
              </MagneticButton>
              <a href="/contact" className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-10 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-text transition duration-300 hover:border-white hover:bg-white/10">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
