import React from 'react';
import { pricing } from '../data/pricing.js';

export default function Pricing() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-12 max-w-2xl">
          <p className="label-small" data-reveal>
            Pricing approach
          </p>
          <h2 className="section-heading mt-4" data-reveal>
            Flexible engagement tiers for fast-moving digital teams.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {pricing.map((plan) => (
            <article key={plan.id} className={`rounded-3xl border ${plan.featured ? 'border-accent bg-white/10 shadow-glow' : 'border-white/10 bg-white/5'} p-8`}>
              <p className="text-sm uppercase tracking-[0.24em] text-accent">{plan.title}</p>
              <p className="mt-4 text-4xl font-semibold text-text">{plan.price}</p>
              <p className="mt-4 text-text/75">{plan.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-muted">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
