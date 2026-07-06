import React, { useRef } from 'react';

const testimonials = [
  {
    company: 'NEXUS',
    icon: '✦',
    color: 'text-blue-500',
    review: 'This platform completely revolutionized how we ship software. We replaced 4 different legacy tools and accelerated our deployment lifecycle by over 40%.',
    linkText: 'Read the case study'
  },
  {
    company: 'AURA',
    icon: '✧',
    color: 'text-purple-500',
    review: 'The automated scaling and intuitive interface allowed our small engineering team to punch way above our weight class. Essential for growth-stage startups.',
    linkText: 'Read the case study'
  },
  {
    company: 'QUANTUM',
    icon: '◈',
    color: 'text-cyan-500',
    review: 'Unparalleled reliability and enterprise-grade security right out of the box. We trust this infrastructure with our most critical customer data.',
    linkText: 'Read the case study'
  },
  {
    company: 'ZEPHYR',
    icon: '⚱',
    color: 'text-rose-500',
    review: 'Integrating this into our machine learning pipeline saved us months of custom development time. The support team is also exceptionally responsive.',
    linkText: 'Read the case study'
  },
  {
    company: 'TECHFLOW',
    icon: '≈',
    color: 'text-sky-500',
    review: 'A game-changer for cross-team collaboration. We went from chaotic weekly deployments to seamless daily releases with zero downtime.',
    linkText: 'Read the case study'
  }
];

export default function Clients() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-12 pb-12 border-t border-white/5 bg-background overflow-hidden">
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-stretch">
          
          {/* Left Column: Heading & Controls */}
          <div className="w-full lg:w-[35%] flex flex-col justify-center shrink-0 pr-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-6 leading-[1.1] tracking-tight">
              Trusted By<br/>Growth-Stage Teams
            </h2>
            <p className="text-text/80 text-lg mb-8 leading-relaxed max-w-md">
              Discover how industry leaders use our platform to scale their operations, accelerate deployments, and build robust software anywhere.
            </p>
            
            {/* Removed Customer Stories link as requested */}
            <div className="mb-6"></div>


          </div>

          {/* Right Column: Carousel */}
          <div className="w-full lg:w-[65%] relative">
            <div 
              ref={scrollRef}
              className="flex overflow-x-auto gap-6 pb-8 pt-4 snap-x snap-mandatory hide-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {testimonials.map((testi, idx) => (
                <div 
                  key={idx}
                  className="bg-red-950/40 backdrop-blur-md rounded-3xl p-8 md:p-10 shrink-0 w-[300px] md:w-[380px] flex flex-col justify-between snap-center shadow-[0_20px_40px_rgba(153,27,27,0.15)] border border-red-900/50 hover:-translate-y-2 hover:bg-red-900/40 hover:border-red-700/50 transition-all duration-300 group/card"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-6 bg-red-950 w-max px-4 py-2 rounded-full border border-red-900/50 group-hover/card:bg-red-900 transition-colors">
                      <span className={`text-2xl ${testi.color} drop-shadow-[0_0_8px_currentColor]`}>
                        {testi.icon}
                      </span>
                      <h3 className="text-sm font-bold text-white tracking-[0.2em] uppercase">
                        {testi.company}
                      </h3>
                    </div>
                    <p className="text-white/70 text-base leading-relaxed group-hover/card:text-white/90 transition-colors">
                      {testi.review}
                    </p>
                  </div>
                  
                  <a href="#" className="flex items-center text-white/80 font-bold mt-8 group-hover:text-white transition-colors w-max">
                    {testi.linkText}
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              ))}
            </div>
            
            {/* Floating Navigation Arrows (Desktop) */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 z-20 hidden md:block">
              <button 
                onClick={scrollLeft}
                className="w-14 h-14 rounded-full bg-accent hover:bg-accent/80 text-white flex items-center justify-center transition-all shadow-[0_0_15px_rgba(176,5,21,0.3)] hover:shadow-[0_0_25px_rgba(176,5,21,0.6)]"
              >
                ←
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 z-20 hidden md:block">
              <button 
                onClick={scrollRight}
                className="w-14 h-14 rounded-full bg-accent hover:bg-accent/80 text-white flex items-center justify-center transition-all shadow-[0_0_15px_rgba(176,5,21,0.3)] hover:shadow-[0_0_25px_rgba(176,5,21,0.6)]"
              >
                →
              </button>
            </div>

            {/* Fade masks for the carousel edges to make it look smooth */}
            <div className="absolute top-0 bottom-0 left-0 w-8 md:w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
      
      {/* CSS to hide scrollbar for webkit browsers */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
