import React from 'react';
import { motion } from 'framer-motion';

const corePillars = [
  {
    id: '01',
    title: 'Design Systems',
    desc: 'Reusable UI libraries built for ultimate consistency.',
    icon: '✦'
  },
  {
    id: '02',
    title: 'Engineering',
    desc: 'Performant, highly scalable code and maintainable architecture.',
    icon: '◈'
  },
  {
    id: '03',
    title: 'Collaboration',
    desc: 'Clear priorities and lightning-fast decisions across teams.',
    icon: '⚱'
  },
  {
    id: '04',
    title: 'AI Design',
    desc: 'Intelligent automation and features that feel entirely natural.',
    icon: '★'
  }
];

export default function About() {
  return (
    <section className="bg-background pt-4 pb-4 relative overflow-hidden">
      <div className="container relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="label-small text-accent mb-4 font-bold tracking-[0.3em] uppercase" data-reveal>
            Why we exist
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.1]" data-reveal>
            We turn product clarity into scalable software experiences.
          </h2>
        </div>

        {/* Infinite Scrolling Horizontal Marquee */}
        <div className="relative z-10 overflow-hidden w-full py-10 -mx-4 px-4" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
          <div
            className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]"
          >
            {[...corePillars, ...corePillars, ...corePillars, ...corePillars].map((item, index) => (
              <div 
                key={`${item.id}-${index}`}
                className="w-[280px] lg:w-[320px] flex-shrink-0"
              >
                <div 
                  className="relative bg-[#0f172a] rounded-2xl p-6 pt-12 border border-[#1e293b] shadow-[inset_0_0_40px_rgba(217,4,22,0.2),0_15px_40px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-2 hover:bg-[#1e293b] hover:border-[#d90416]/50 hover:shadow-[inset_0_0_50px_rgba(217,4,22,0.3),0_20px_50px_rgba(217,4,22,0.2)] group flex flex-col min-h-[220px] lg:min-h-[240px] h-full mt-2"
                >
                  {/* Persistent Red Top Glow Line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d90416]/60 to-transparent group-hover:via-[#d90416] transition-colors duration-500" />

                  {/* Overlapping Floating Icon (Breaks out of the top of the card) */}
                  <div className="absolute -top-6 left-6 w-12 h-12 rounded-2xl bg-[#010521] border border-white/10 shadow-2xl flex items-center justify-center text-white/40 text-lg group-hover:text-accent group-hover:border-accent/50 group-hover:bg-accent/5 transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-6">
                    {item.icon}
                  </div>

                  {/* Faded Watermark Number */}
                  <div className="absolute top-5 right-5 text-5xl font-black text-white/[0.02] group-hover:text-accent/[0.05] transition-colors duration-500 select-none pointer-events-none">
                    {item.id}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-accent transition-colors duration-500">{item.title}</h3>
                    <p className="text-white/50 leading-relaxed text-sm group-hover:text-white/80 transition-colors duration-500">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
