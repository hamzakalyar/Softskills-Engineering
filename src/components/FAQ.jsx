import React, { useState } from 'react';
import { faq } from '../data/faq.js';

export default function FAQ() {
  const [openId, setOpenId] = useState(faq[0]?.id || '');

  return (
    <section className="bg-white/2 py-20">
      <div className="container">
        <div className="mb-12 max-w-2xl">
          <p className="label-small" data-reveal>
            FAQs
          </p>
          <h2 className="section-heading mt-4" data-reveal>
            Answers for product leaders and bold engineering teams.
          </h2>
        </div>
        <div className="space-y-4">
          {faq.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setOpenId((prev) => (prev === item.id ? '' : item.id))}
              className="w-full rounded-3xl border border-white/10 bg-white/5 p-6 text-left transition hover:border-accent"
              aria-expanded={openId === item.id}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-text font-semibold">{item.question}</span>
                <span className="text-accent">{openId === item.id ? '−' : '+'}</span>
              </div>
              {openId === item.id && <p className="mt-4 text-text/80">{item.answer}</p>}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
