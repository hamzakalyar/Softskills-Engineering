import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import ScrollProgressBar from '../components/ScrollProgressBar.jsx';
import { useLenis } from '../hooks/useLenis.js';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

export default function MainLayout() {
  useLenis();
  const revealRef = useRef(null);
  useScrollReveal(revealRef);

  return (
    <div className="min-h-screen bg-background text-text">
      <ScrollProgressBar />
      <Navbar />
      <main ref={revealRef}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
