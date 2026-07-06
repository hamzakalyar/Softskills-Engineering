import React from 'react';
import { testimonials } from '../data/testimonials.js';

export default function Testimonials() {
  return (
    <section className="bg-background pt-4 pb-20 relative">
      <div className="container relative z-10">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl md:text-[40px] font-bold tracking-tight text-white leading-tight" data-reveal>
            Trusted by partners building digital<br className="hidden md:block" /> growth engines.
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.id} className="bg-[#0f172a]/40 border border-white/5 rounded-2xl p-8 transition-all hover:bg-[#0f172a]/60">
              <p className="text-white/70 text-[15px] leading-relaxed">"{item.quote}"</p>
              <div className="mt-8">
                <p className="font-bold text-white text-[15px]">{item.name}</p>
                <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#d90416] mt-1">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
