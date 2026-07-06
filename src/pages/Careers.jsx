import React from 'react';
import { Helmet } from 'react-helmet';

const opportunities = [
  { role: 'Senior Product Engineer', focus: 'Build scalable SaaS platforms with distributed teams and modern architecture.' },
  { role: 'Lead UX/Product Designer', focus: 'Design enterprise workflows, systems, and polished digital experiences.' },
  { role: 'AI Solutions Architect', focus: 'Define AI product strategy and integrate intelligent automation into customer systems.' },
];

export default function Careers() {
  return (
    <>
      <Helmet>
        <title>Nexus Labs | Careers</title>
        <meta
          name="description"
          content="Join Nexus Labs and help shape product-led software systems for fast-moving enterprise teams."
        />
      </Helmet>
      <section className="pt-28">
        <div className="container">
          <p className="label-small">Careers</p>
          <h1 className="section-heading mt-4 max-w-3xl">Join our team of product builders, designers, and engineers.</h1>
          <p className="section-copy mt-6">We hire people who thrive in small, multidisciplinary teams and who enjoy solving complex product challenges with clarity.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="container grid gap-6 lg:grid-cols-3">
          {opportunities.map((opening) => (
            <div key={opening.role} className="glass-panel rounded-3xl p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-accent">{opening.role}</p>
              <p className="mt-4 text-text/75">{opening.focus}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-white/2 py-20">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div className="glass-panel rounded-[32px] p-10">
            <h2 className="text-3xl font-semibold text-text">Culture</h2>
            <p className="mt-4 text-text/80">We value direct communication, deliberate planning, and a strong sense of product ownership. Our team is remote-first with quarterly in-person collaboration hubs.</p>
          </div>
          <div className="glass-panel rounded-[32px] p-10">
            <h2 className="text-3xl font-semibold text-text">How to apply</h2>
            <p className="mt-4 text-text/80">Send your resume and a short note about your experience to hello@nexuslabs.agency. Include links to your product work or open-source contributions.</p>
          </div>
        </div>
      </section>
    </>
  );
}
