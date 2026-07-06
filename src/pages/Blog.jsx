import React from 'react';
import { Helmet } from 'react-helmet';

const posts = [
  { title: 'Designing enterprise workflows for clarity', summary: 'How to keep complex product experiences intuitive during large-scale deliveries.' },
  { title: 'Operationalizing SaaS platforms with speed', summary: 'Strategies for building reliable backend systems and fast release cycles.' },
  { title: 'AI product design patterns for business teams', summary: 'Practical AI experiences that reduce friction and increase adoption.' },
];

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Nexus Labs | Blog</title>
        <meta
          name="description"
          content="Insights on product design, software delivery, and AI-powered product strategy from Nexus Labs."
        />
      </Helmet>
      <section className="pt-28">
        <div className="container">
          <p className="label-small">Thought leadership</p>
          <h1 className="section-heading mt-4 max-w-3xl">Stories from the intersection of product and engineering.</h1>
          <p className="section-copy mt-6">Read practical insights for teams shipping modern software services and platforms.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="container grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="glass-panel rounded-3xl p-8">
              <h2 className="text-2xl font-semibold text-text">{post.title}</h2>
              <p className="mt-4 text-text/75">{post.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
