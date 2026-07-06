import React from 'react';
import { projects } from '../data/projects.js';

export default function Projects() {
  return (
    <section className="bg-white/2 py-20">
      <div className="container">
        <div className="mb-12 max-w-2xl">
          <p className="label-small" data-reveal>
            Case studies
          </p>
          <h2 className="section-heading mt-4" data-reveal>
            Detailed delivery stories from our most impactful engagements.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.id} className="glass-panel rounded-3xl p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-accent">{project.category}</p>
              <h3 className="mt-4 text-xl font-semibold text-text">{project.title}</h3>
              <p className="mt-3 text-text/75">{project.description}</p>
              <p className="mt-5 text-sm text-muted">Outcome: {project.outcome}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
