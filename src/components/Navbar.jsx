import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../utils/constants.js';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';



const megaMenuProjects = [
  {
    id: 1,
    title: 'Web Development',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    color: 'group-hover:text-accent',
    bg: 'group-hover:bg-accent/10',
    path: '/portfolio/web-development'
  },
  {
    id: 2,
    title: 'App Development',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
    color: 'group-hover:text-accent',
    bg: 'group-hover:bg-accent/10',
    path: '/portfolio/app-development'
  },
  {
    id: 3,
    title: 'Digital Marketing',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
      </svg>
    ),
    color: 'group-hover:text-accent',
    bg: 'group-hover:bg-accent/10'
  },
  {
    id: 4,
    title: 'Video Editing',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"></polygon>
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
      </svg>
    ),
    color: 'group-hover:text-accent',
    bg: 'group-hover:bg-accent/10',
    path: '/portfolio/video-editing'
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isProjectsMegaMenuOpen, setIsProjectsMegaMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsProjectsMegaMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-xl bg-[#06080F]/80 border-b border-white/10 shadow-glow' : 'bg-transparent'}`}>
      <div className="container flex items-center justify-between py-4 lg:py-5">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 font-semibold text-lg tracking-[0.18em] uppercase text-text relative z-50">
          <img src="/favicon.png" alt="Logo" className="w-8 h-8 object-contain" />
          <span className="hidden sm:inline">
            <span className="text-white">SOFTSKILLS</span> <span className="text-accent">ENGINEERING</span>
          </span>
          <span className="sm:hidden text-white">SOFTSKILLS</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex relative">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            


            // Mega Menu Dropdown for "Projects"
            if (link.label === 'Projects') {
              return (
                <div 
                  key={link.path}
                  className="relative group py-6 -my-6" 
                  onMouseEnter={() => setIsProjectsMegaMenuOpen(true)}
                  onMouseLeave={() => setIsProjectsMegaMenuOpen(false)}
                >
                  <Link 
                    to={link.path} 
                    onClick={() => setIsProjectsMegaMenuOpen(false)}
                    className={`flex items-center text-sm uppercase tracking-[0.24em] transition-colors duration-300 hover:text-accent ${isActive ? 'text-accent font-bold' : 'text-muted'}`}
                  >
                    {link.label}
                    <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${isProjectsMegaMenuOpen ? 'rotate-180 text-accent' : ''}`} />
                  </Link>

                  <AnimatePresence>
                    {isProjectsMegaMenuOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full right-0 mt-4 w-[280px] z-50 origin-top-right"
                      >
                        <div className="bg-[#0a0f1a]/95 backdrop-blur-3xl border border-white/10 rounded-2xl p-2 shadow-2xl overflow-hidden relative">
                          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                          
                          <div className="flex flex-col space-y-1">
                            {megaMenuProjects.map((project, index) => (
                              <motion.div
                                key={project.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05, duration: 0.2 }}
                              >
                                <Link 
                                  to={project.path || link.path} 
                                  onClick={() => setIsProjectsMegaMenuOpen(false)}
                                  className="group/card flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 relative overflow-hidden"
                                >
                                  {/* Shimmer on hover */}
                                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 translate-x-[-100%] group-hover/card:translate-x-[100%] skew-x-12" />

                                  <div className={`relative z-10 flex-shrink-0 w-8 h-8 rounded-md bg-[#06080F] border border-white/10 flex items-center justify-center text-white/50 transition-all duration-300 group-hover/card:scale-110 group-hover/card:shadow-[0_0_15px_rgba(255,255,255,0.1)] ${project.color} ${project.bg}`}>
                                    <div className="scale-75">
                                      {project.icon}
                                    </div>
                                  </div>
                                  <h4 className="relative z-10 text-white/80 font-medium text-sm tracking-tight group-hover/card:text-white group-hover/card:translate-x-1 transition-all duration-300">{project.title}</h4>
                                  
                                  {/* Hover Arrow */}
                                  <svg className="w-4 h-4 ml-auto opacity-0 -translate-x-3 transition-all duration-300 group-hover/card:opacity-100 group-hover/card:translate-x-0 text-white/50 group-hover/card:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`text-sm uppercase tracking-[0.24em] transition-colors duration-300 hover:text-accent ${isActive ? 'text-accent font-bold' : 'text-muted'}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          className="md:hidden text-text relative z-50"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-background/95 backdrop-blur-xl md:hidden overflow-hidden"
          >
            <div className="container space-y-4 py-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link 
                    key={link.path} 
                    to={link.path} 
                    className={`block text-base uppercase tracking-[0.24em] transition-colors duration-300 hover:text-accent ${isActive ? 'text-accent font-bold' : 'text-text'}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
