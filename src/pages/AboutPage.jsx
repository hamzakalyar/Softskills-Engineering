import React from 'react';
import { Helmet } from 'react-helmet';
import About from '../components/About.jsx';
import DevelopmentProcess from '../components/DevelopmentProcess.jsx';
import Clients from '../components/Clients.jsx';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Nexus Labs | About</title>
        <meta
          name="description"
          content="Learn about Nexus Labs leadership, company values, and how we deliver product and engineering programs."
        />
      </Helmet>
      <section className="pt-28">
        <div className="container">
          <p className="label-small">About the agency</p>
          <h1 className="section-heading mt-4 max-w-3xl">Focused product partnerships for long-term software advantage.</h1>
          <p className="section-copy mt-6">We work with ambitious B2B and enterprise teams to reduce product risk, improve adoption, and accelerate digital transformation.</p>
        </div>
      </section>
      <About />
      <DevelopmentProcess />
      <Clients />
    </>
  );
}
