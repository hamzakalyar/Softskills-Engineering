import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Monitor, Sparkles, Filter, Code } from 'lucide-react';

const webProjects = [
  {
    id: 'softskills',
    title: 'EdTech Platform',
    category: 'EdTech & AI Solutions',
    filterTag: 'ai-saas',
    description: 'An advanced educational environment delivering industry-relevant AI training and career path mapping through a bespoke interactive interface.',
    url: 'https://softskillsengineering.com/',
    image: '/2.png',
    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    stats: { speed: '98%', conversion: '+42%', tech: 'React / Vite' },
    accent: '#B00515',
    accentClass: 'text-[#d90416]',
    badgeBg: 'bg-[#d90416]/10 border-[#d90416]/20 text-[#d90416]',
    iconGradient: 'from-[#d90416] to-[#500207]',
    gradient: 'from-[#1a0606] via-[#200808] to-[#010521]'
  },
  {
    id: 'vantra',
    title: 'AI SaaS Platform',
    category: 'AI Lead Gen & Prospecting',
    filterTag: 'ai-saas',
    description: 'A state-of-the-art B2B SaaS platform that scans millions of daily signals to identify, qualify, and convert high-value prospects in a live pipeline.',
    url: 'https://dumm1.vercel.app/',
    image: '/vantra.png',
    tags: ['React / Vite', 'AI Pipelines', 'Framer Motion'],
    stats: { speed: '99%', conversion: '+48%', tech: 'Tailwind CSS' },
    accent: '#3b82f6',
    accentClass: 'text-blue-400',
    badgeBg: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    iconGradient: 'from-blue-500 to-blue-950',
    gradient: 'from-[#0b1329] via-[#080d1a] to-[#010521]'
  },
  {
    id: 'zeetech',
    title: 'Corporate Web Portal',
    category: 'Enterprise Cloud SaaS',
    filterTag: 'ai-saas',
    description: 'A scalable corporate web presence engineered for high traffic, featuring dynamic service integrations, animations, and global performance optimization.',
    url: 'https://zeetech26.com/',
    image: '/3.png',
    tags: ['Enterprise CMS', 'GSAP', 'Vite / Tailwind'],
    stats: { speed: '96%', conversion: '+28%', tech: 'Headless CMS' },
    accent: '#101D54',
    accentClass: 'text-blue-400',
    badgeBg: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    iconGradient: 'from-blue-500 to-blue-900',
    gradient: 'from-[#060f24] via-[#0a1830] to-[#010521]'
  },
  {
    id: 'zeetech-store',
    title: 'Kitchen & Home Store',
    category: 'Digital Storefront',
    filterTag: 'ecommerce',
    description: 'A modern commerce interface featuring real-time inventory state management, localized currency gateways, and a frictionless checkout funnel.',
    url: 'https://zeetech-store.vercel.app/',
    image: '/4.png',
    tags: ['React Router', 'Stripe API', 'State Sync'],
    stats: { speed: '99%', conversion: '+55%', tech: 'Shopify SDK' },
    accent: '#B00515',
    accentClass: 'text-[#d90416]',
    badgeBg: 'bg-[#d90416]/10 border-[#d90416]/20 text-[#d90416]',
    iconGradient: 'from-[#d90416] to-[#500207]',
    gradient: 'from-[#1a0606] via-[#200808] to-[#010521]'
  },
  {
    id: 'forge',
    title: 'Gym & Fitness Center',
    category: 'Gym & Physical Coaching',
    filterTag: 'ecommerce',
    description: 'A premium coaching landing page showcasing real coaching, raw iron philosophy, built-in workout calculators, and structural fitness programming.',
    url: 'https://dummy-mauve-six.vercel.app/',
    image: '/forge.png',
    tags: ['React', 'Framer Motion', 'Structured UX'],
    stats: { speed: '97%', conversion: '+31%', tech: 'Tailwind CSS' },
    accent: '#ea580c',
    accentClass: 'text-orange-400',
    badgeBg: 'bg-orange-500/10 border-orange-500/20 text-orange-400',
    iconGradient: 'from-orange-500 to-orange-950',
    gradient: 'from-[#1f0e06] via-[#140a04] to-[#010521]'
  },
  {
    id: 'elite-auto',
    title: 'Auto Repair & Detailing',
    category: 'Automotive & Detailing',
    filterTag: 'ecommerce',
    description: 'A premium workshop showcase highlighting precise automotive craftsmanship, high-end detailing portfolios, and dynamic online service scheduling.',
    url: 'https://automobile-workshop-gold.vercel.app/',
    image: '/auto.png',
    tags: ['Vite', 'CSS Transitions', 'Booking Engine'],
    stats: { speed: '98%', conversion: '+38%', tech: 'Tailwind CSS' },
    accent: '#dc2626',
    accentClass: 'text-red-500',
    badgeBg: 'bg-red-500/10 border-red-500/20 text-red-500',
    iconGradient: 'from-red-500 to-red-950',
    gradient: 'from-[#1c0808] via-[#120505] to-[#010521]'
  },
  {
    id: 'voyara',
    title: 'Travel Agency',
    category: 'Bespoke Travel Design',
    filterTag: 'luxury',
    description: 'An immersive luxury editorial digital experience presenting bespoke private route planning, hotel portfolios, and bespoke itinerary mapping.',
    url: 'https://travel-company-seven.vercel.app/',
    image: '/voyara.png',
    tags: ['Next.js', 'Framer Motion', 'Editorial Grid'],
    stats: { speed: '96%', conversion: '+45%', tech: 'Tailwind CSS' },
    accent: '#c8a662',
    accentClass: 'text-amber-400',
    badgeBg: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
    iconGradient: 'from-amber-600 to-amber-950',
    gradient: 'from-[#1c160e] via-[#120e09] to-[#010521]'
  },
  {
    id: 'ferretti',
    title: 'Law Firm',
    category: 'Boutique Legal Services',
    filterTag: 'luxury',
    description: 'A high-end corporate digital presence for an Italian-American boutique law firm, prioritizing brand authority, cross-border transactions, and client intake.',
    url: 'https://ferretti-firm.vercel.app/',
    image: '/ferretti.png',
    tags: ['Brand Strategy', 'Static SSR', 'Luxury UX'],
    stats: { speed: '95%', conversion: '+24%', tech: 'React / Vite' },
    accent: '#d4b26f',
    accentClass: 'text-amber-300',
    badgeBg: 'bg-amber-500/10 border-amber-500/20 text-amber-300',
    iconGradient: 'from-amber-500 to-amber-950',
    gradient: 'from-[#1c170f] via-[#120f0a] to-[#010521]'
  },
  {
    id: 'noir-ember',
    title: 'Creative Agency',
    category: 'Design & Motion Agency',
    filterTag: 'luxury',
    description: 'A high-end showcase website presenting cinematic transitions, custom physics-based UI, and immersive portfolio presentations.',
    url: 'https://noir-ember-five.vercel.app/',
    image: '/noir.png',
    tags: ['3D WebGL', 'ScrollTrigger', 'Next.js'],
    stats: { speed: '94%', conversion: '+35%', tech: 'GSAP Physics' },
    accent: '#101D54',
    accentClass: 'text-blue-400',
    badgeBg: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    iconGradient: 'from-blue-500 to-blue-900',
    gradient: 'from-[#060f24] via-[#0a1830] to-[#010521]'
  },
  {
    id: 'moshaz-luxury',
    title: 'Luxury Beauty Salon',
    category: 'Luxury Fashion Editorial',
    filterTag: 'luxury',
    description: 'An ultra-premium visual presence highlighting exquisite craftsmanship, minimal fashion grid structures, and editorial brand storytelling.',
    url: 'https://moshaz-luxury.vercel.app/',
    image: '/moshaz.png',
    tags: ['Minimal UI', 'Typography', 'Frictionless SEO'],
    stats: { speed: '97%', conversion: '+22%', tech: 'Responsive CSS' },
    accent: '#B00515',
    accentClass: 'text-[#d90416]',
    badgeBg: 'bg-[#d90416]/10 border-[#d90416]/20 text-[#d90416]',
    iconGradient: 'from-[#d90416] to-[#500207]',
    gradient: 'from-[#1a0606] via-[#200808] to-[#010521]'
  }
];

const cssStyle = `
  .browser-viewport {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
  }
  @media (min-width: 768px) {
    .browser-viewport {
      height: 250px;
    }
  }
  .browser-image {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(0);
    transition: transform 6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .project-card-group:hover .browser-image {
    transform: translateY(calc(-100% + 200px));
  }
  @media (min-width: 768px) {
    .project-card-group:hover .browser-image {
      transform: translateY(calc(-100% + 250px));
    }
  }
`;

const categories = [
  { id: 'all', label: 'All Cases' },
  { id: 'ai-saas', label: 'AI & SaaS Platforms' },
  { id: 'ecommerce', label: 'E-Commerce & Service' },
  { id: 'luxury', label: 'Luxury & Creative' }
];

export default function WebDevelopmentPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all' 
    ? webProjects 
    : webProjects.filter(p => p.filterTag === activeFilter);

  return (
    <>
      <style>{cssStyle}</style>
      <Helmet>
        <title>Web Development Portfolio | Softskills Engineering</title>
        <meta name="description" content="Explore our high-performance B2B SaaS, custom web development, and digital marketing storefronts portfolio." />
      </Helmet>

      {/* Hero Header Section */}
      <section className="pt-24 pb-4 bg-background relative overflow-hidden">
        {/* Aesthetic background glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-royalBlue/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container relative z-10">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center gap-2 text-white/40 hover:text-white text-xs uppercase tracking-widest mb-4 transition-colors duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Projects
          </Link>
          
          <div className="max-w-4xl text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full border border-accent/20 bg-accent/5 text-accent mb-2 shadow-[0_0_15px_rgba(217,4,22,0.05)]">
              <Sparkles className="w-3 h-3 text-accent" /> Specialized Capability
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-4">
              Web <span className="text-[#d90416] drop-shadow-[0_0_15px_rgba(217,4,22,0.3)]">Development</span>
            </h1>
            <p className="text-white/60 leading-relaxed text-sm md:text-base max-w-2xl">
              From enterprise SaaS systems with live AI pipelines to elegant luxury storefronts. We build lighting-fast interfaces focused on pixel perfection, brand authority, and digital conversions.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-4 bg-background border-y border-white/5 sticky top-[60px] z-30 backdrop-blur-md bg-background/80">
        <div className="container flex items-center justify-between overflow-x-auto py-2 scrollbar-none">
          <div className="flex items-center gap-3">
            <Filter className="w-3.5 h-3.5 text-white/40 flex-shrink-0" />
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mr-2 hidden sm:inline">Filter Cases:</span>
            <div className="flex gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                    activeFilter === cat.id
                      ? 'border-[#d90416] bg-[#d90416] text-white shadow-[0_0_15px_rgba(217,4,22,0.3)]'
                      : 'border-white/5 hover:border-white/20 text-white/50 hover:text-white bg-white/[0.02]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
          <div className="text-white/35 text-[10px] font-mono tracking-widest hidden lg:block">
            SHOWING {filteredProjects.length} OF {webProjects.length} CASES
          </div>
        </div>
      </section>

      {/* Bento Grid Projects Showcase */}
      <section className="py-16 bg-background min-h-screen">
        <div className="container">
          <motion.div 
            layout 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    key={project.id}
                    className="project-card-group group relative rounded-[32px] overflow-hidden bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between"
                  >
                    {/* Unique gradient background */}
                    <div 
                      className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 50% 0%, ${project.accent}22, transparent 65%)`
                      }}
                    />
                    
                    {/* Hover Glow Edge line */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-[1px] opacity-20 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`
                      }}
                    />

                    {/* Top Portion: Browser Showcase Mockup */}
                    <div className="p-6 pb-0 select-none">
                      <div className="relative w-full rounded-2xl border border-white/10 bg-black/60 overflow-hidden shadow-2xl transition-colors duration-500 group-hover:border-white/20">
                        {/* OS Top Header */}
                        <div className="flex items-center justify-between px-4 py-2.5 bg-white/5 border-b border-white/10">
                          <div className="flex gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-red-500/50" />
                            <span className="w-2 h-2 rounded-full bg-yellow-500/50" />
                            <span className="w-2 h-2 rounded-full bg-green-500/50" />
                          </div>
                          <span className="text-[9px] font-mono text-white/30 truncate max-w-[200px]">
                            {project.url.replace('https://', '')}
                          </span>
                          <div className="w-8 h-1" />
                        </div>

                        {/* Viewport with hover scrolling */}
                        <div className="browser-viewport bg-black/50">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="browser-image"
                          />
                          {/* Live link overlay on mobile / hover */}
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer" 
                            className="absolute inset-0 z-30 flex items-center justify-center bg-black/50 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                          >
                            <div className="flex items-center gap-1.5 bg-[#010521]/95 backdrop-blur-md px-4 py-2 rounded-full text-white font-bold text-[10px] tracking-widest border border-white/10 shadow-lg hover:scale-105 transition-transform duration-300">
                              VISIT LIVE SITE <ArrowUpRight className="w-3.5 h-3.5 text-[#d90416]" />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Portion: Custom Details Card */}
                    <div className="p-6 md:p-8 flex flex-col justify-between flex-grow text-left">
                      <div>
                        {/* Category Badge + Tech Icon */}
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className={`w-9 h-9 rounded-xl bg-gradient-to-br ${project.iconGradient} flex items-center justify-center flex-shrink-0 border border-white/5`}
                          >
                            <Code className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <span className={`inline-block px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest rounded-full border ${project.badgeBg}`}>
                              {project.category}
                            </span>
                          </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-xl md:text-2xl font-bold text-white leading-tight mb-3 group-hover:text-white/90 transition-colors">
                          {project.title}
                        </h2>

                        {/* Description */}
                        <p className="text-white/50 leading-relaxed text-sm mb-6 max-w-xl">
                          {project.description}
                        </p>
                      </div>

                      {/* Tags & Stats Row */}
                      <div className="border-t border-white/5 pt-6 mt-auto">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.tags.map((tag) => (
                            <span 
                              key={tag} 
                              className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest rounded-lg border border-white/5 text-white/45 bg-white/[0.01]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Stats block */}
                        <div className="flex gap-4 sm:gap-6 bg-white/[0.01] border border-white/5 rounded-2xl p-4">
                          {[
                            { val: project.stats.speed, label: 'Performance' },
                            { val: project.stats.conversion, label: 'Conversion' },
                            { val: project.stats.tech.split(' ')[0], label: 'Core Stack' }
                          ].map(({ val, label }, i) => (
                            <React.Fragment key={i}>
                              {i > 0 && <div className="w-px bg-white/10" />}
                              <div className="flex-1">
                                <p className={`text-sm md:text-base font-bold ${project.accentClass} tracking-tight`}>{val}</p>
                                <p className="text-[9px] text-white/30 uppercase tracking-widest mt-0.5 whitespace-nowrap">{label}</p>
                              </div>
                            </React.Fragment>
                          ))}
                        </div>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
