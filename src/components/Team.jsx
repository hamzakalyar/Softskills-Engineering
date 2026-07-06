import React from 'react';
import { team } from '../data/team.js';

export default function Team() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-12 max-w-2xl">
          <p className="label-small" data-reveal>
            Leadership team
          </p>
          <h2 className="section-heading mt-4" data-reveal>
            Experienced product operators and engineering leaders.
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <article key={member.id} className="glass-panel rounded-3xl p-8 text-center">
              <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-white/10" />
              <h3 className="text-xl font-semibold text-text">{member.name}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-accent">{member.title}</p>
              <p className="mt-4 text-text/80">{member.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
