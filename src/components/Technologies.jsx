import React from 'react';

const techList = ['React', 'Node.js', 'Next.js', 'TypeScript', 'AWS', 'GraphQL', 'Python', 'PostgreSQL'];

export default function Technologies() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-12 max-w-2xl">
          <p className="label-small" data-reveal>
            Technology stack
          </p>
          <h2 className="section-heading mt-4" data-reveal>
            Reliable infrastructure and modern tooling for every product stage.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {techList.map((tech) => (
            <div key={tech} className="glass-panel rounded-3xl p-6 text-center text-sm font-semibold text-text/90">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
