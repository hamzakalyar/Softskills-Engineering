import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero.jsx';
import Clients from '../components/Clients.jsx';
import About from '../components/About.jsx';
import Statistics from '../components/Statistics.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import DevelopmentProcess from '../components/DevelopmentProcess.jsx';
import Portfolio from '../components/Portfolio.jsx';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Nexus Labs | Home</title>
        <meta
          name="description"
          content="Nexus Labs builds software platforms, SaaS products, and AI-powered experiences for ambitious teams."
        />
      </Helmet>
      <Hero />
      <WhyChooseUs />
      <Statistics />
      <Clients />
      <About />
      <DevelopmentProcess />
      <Portfolio />
    </>
  );
}
