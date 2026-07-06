import React, { Suspense, lazy } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import MainLayout from './layouts/MainLayout.jsx';
import Loader from './components/Loader.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage.jsx'));
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'));
const Careers = lazy(() => import('./pages/Careers.jsx'));
const Blog = lazy(() => import('./pages/Blog.jsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'));
const WebDevelopmentPage = lazy(() => import('./pages/WebDevelopmentPage.jsx'));
const AppDevelopmentPage = lazy(() => import('./pages/AppDevelopmentPage.jsx'));
const VideoEditingPage = lazy(() => import('./pages/VideoEditingPage.jsx'));

const routeAnimation = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.36, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] } },
};

function App() {
  const location = useLocation();

  return (
    <Suspense fallback={<Loader />}>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={
                <motion.div {...routeAnimation}>
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="portfolio"
              element={
                <motion.div {...routeAnimation}>
                  <PortfolioPage />
                </motion.div>
              }
            />
            <Route
              path="portfolio/web-development"
              element={
                <motion.div {...routeAnimation}>
                  <WebDevelopmentPage />
                </motion.div>
              }
            />
            <Route
              path="portfolio/app-development"
              element={
                <motion.div {...routeAnimation}>
                  <AppDevelopmentPage />
                </motion.div>
              }
            />
            <Route
              path="portfolio/video-editing"
              element={
                <motion.div {...routeAnimation}>
                  <VideoEditingPage />
                </motion.div>
              }
            />
            <Route
              path="about"
              element={
                <motion.div {...routeAnimation}>
                  <AboutPage />
                </motion.div>
              }
            />
            <Route
              path="careers"
              element={
                <motion.div {...routeAnimation}>
                  <Careers />
                </motion.div>
              }
            />
            <Route
              path="blog"
              element={
                <motion.div {...routeAnimation}>
                  <Blog />
                </motion.div>
              }
            />
            <Route
              path="contact"
              element={
                <motion.div {...routeAnimation}>
                  <ContactPage />
                </motion.div>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default App;
