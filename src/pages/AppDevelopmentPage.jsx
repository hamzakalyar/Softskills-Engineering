import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Smartphone, Star } from 'lucide-react';

const apps = [
  {
    id: 'zeetech-app',
    name: 'Zeetech App',
    category: 'Technical Services',
    description: 'A powerful mobile platform for Zeetech\'s technical services. Book appointments, track technicians in real-time, and manage your complete service history — all from your phone.',
    tags: ['React Native', 'Real-Time Tracking', 'Service Booking'],
    gradient: 'from-[#060f24] via-[#0a1830] to-[#010521]',
    accent: '#3b82f6',
    accentClass: 'text-blue-400',
    badgeBg: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    iconGradient: 'from-blue-500 to-blue-700',
    animationDuration: '45s',
    screenshots: [
      '/images/app1.1.jpeg', '/images/app1.2.jpeg', '/images/app1.3.jpeg',
      '/images/app1.4.jpeg', '/images/app1.5.jpeg', '/images/app1.6.jpeg',
      '/images/app1.7.jpeg', '/images/app1.8.jpeg', '/images/app1.9.jpeg',
      '/images/app1.10.jpeg', '/images/app1.11.jpeg', '/images/app1.12.jpeg',
    ],
  },
  {
    id: 'softskills-app',
    name: 'SoftSkills Engineering App',
    category: 'EdTech & Training',
    description: 'A comprehensive learning companion for corporate training. Access courses, track progress, attend live sessions, and earn certifications — all on the go.',
    tags: ['Flutter', 'E-Learning', 'Certifications'],
    gradient: 'from-[#1a0606] via-[#200808] to-[#010521]',
    accent: '#ef4444',
    accentClass: 'text-red-400',
    badgeBg: 'bg-red-500/10 border-red-500/20 text-red-400',
    iconGradient: 'from-red-500 to-red-700',
    animationDuration: '28s',
    screenshots: [
      '/images/app2.1.jpeg', '/images/app2.2.jpeg', '/images/app2.3.jpeg',
      '/images/app2.4.jpeg', '/images/app2.5.jpeg',
    ],
  },
];

// Inject keyframe once
const marqueeStyle = `
  @keyframes marqueeScroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;

function FloatingPhone({ src, index, accent }) {
  const duration = 2.6 + (index % 5) * 0.35;
  const delay = (index % 6) * 0.22;
  const offsetY = [0, 18, 36, 10, 28, 12][index % 6];

  return (
    <div className="flex-shrink-0 px-2" style={{ marginTop: offsetY }}>
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ repeat: Infinity, duration, ease: 'easeInOut', delay }}
      >
        <div
          className="relative w-[110px] rounded-[1.8rem] overflow-hidden border-[4px] border-white/10 bg-black"
          style={{ boxShadow: `0 16px 50px ${accent}44, 0 0 0 1px rgba(255,255,255,0.05)` }}
        >
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-3 bg-black z-10 rounded-full" />
          <img
            src={src}
            alt={`screenshot ${index + 1}`}
            className="w-full object-cover object-top"
            style={{ height: '240px' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent pointer-events-none" />
        </div>
        <div
          className="mx-auto mt-1.5 w-2/3 h-3 blur-lg opacity-50 rounded-full"
          style={{ background: `radial-gradient(ellipse, ${accent}88, transparent)` }}
        />
      </motion.div>
    </div>
  );
}

function PhoneMarquee({ screenshots, accent, animationDuration }) {
  const doubled = [...screenshots, ...screenshots];
  return (
    <div className="relative w-full overflow-hidden py-6">
      <div className="absolute inset-y-0 left-0 w-10 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #010521, transparent)' }} />
      <div className="absolute inset-y-0 right-0 w-10 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #010521, transparent)' }} />

      <div
        className="flex w-max"
        style={{
          animation: `marqueeScroll ${animationDuration} linear infinite`,
        }}
      >
        {doubled.map((src, i) => (
          <FloatingPhone key={i} src={src} index={i % screenshots.length} accent={accent} />
        ))}
      </div>
    </div>
  );
}

function AppDetails({ app }) {
  return (
    <div className="relative z-10 flex flex-col justify-center px-8 md:px-12 py-12">
      <div className="flex items-center gap-4 mb-5">
        <div
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${app.iconGradient} flex items-center justify-center flex-shrink-0`}
          style={{ boxShadow: `0 8px 30px ${app.accent}55` }}
        >
          <Smartphone className="w-7 h-7 text-white" />
        </div>
        <div>
          <span className={`inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded-full border ${app.badgeBg} mb-1`}>
            {app.category}
          </span>
          <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">{app.name}</h2>
          <div className="flex items-center gap-0.5 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3 h-3 fill-current ${app.accentClass}`} />
            ))}
            <span className="text-xs text-white/30 ml-1">5.0</span>
          </div>
        </div>
      </div>

      <p className="text-white/55 leading-relaxed text-sm mb-6 max-w-sm">{app.description}</p>

      <div className="flex flex-wrap gap-2 mb-8">
        {app.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-full border border-white/10 text-white/40 bg-white/5">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-6">
        {[{ val: app.screenshots.length, label: 'Screens' }, { val: '5.0', label: 'Rating' }, { val: 'Mobile', label: 'Platform' }]
          .map(({ val, label }, i) => (
            <React.Fragment key={i}>
              {i > 0 && <div className="w-px bg-white/10" />}
              <div>
                <p className={`text-lg font-bold ${app.accentClass}`}>{val}</p>
                <p className="text-[10px] text-white/30 uppercase tracking-widest mt-0.5">{label}</p>
              </div>
            </React.Fragment>
          ))}
      </div>
    </div>
  );
}

export default function AppDevelopmentPage() {
  return (
    <>
      <style>{marqueeStyle}</style>
      <Helmet>
        <title>App Development | Softskills Engineering</title>
        <meta name="description" content="Explore our mobile app development portfolio." />
      </Helmet>

      {/* Header */}
      <section className="pt-24 pb-4 bg-background">
        <div className="container">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-4 transition-colors duration-300 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Projects
          </Link>
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent mb-2">Specialized Capability</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl leading-[1.1] mb-4">
            App Development
          </h1>
          <p className="text-sm md:text-base text-white/50 max-w-xl leading-relaxed">
            Native and cross-platform mobile experiences built for real business impact.
          </p>
        </div>
      </section>

      {/* App Sections */}
      <section className="pb-20 bg-background">
        <div className="flex flex-col gap-4">
          {apps.map((app, appIndex) => {
            const isEven = appIndex % 2 === 0;
            return (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: appIndex * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`relative overflow-hidden bg-gradient-to-br ${app.gradient} border-y border-white/5`}
              >
                {/* Grid texture */}
                <div className="absolute inset-0 opacity-[0.025]"
                  style={{
                    backgroundImage: `linear-gradient(${app.accent}55 1px, transparent 1px), linear-gradient(90deg, ${app.accent}55 1px, transparent 1px)`,
                    backgroundSize: '44px 44px',
                  }} />

                {/* Ambient glow — side depends on layout */}
                <div
                  className={`absolute top-1/2 -translate-y-1/2 ${isEven ? 'right-0' : 'left-0'} w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none`}
                  style={{ background: `radial-gradient(circle, ${app.accent}, transparent 65%)` }}
                />

                {/* Alternating grid — even: details left + phones right, odd: phones left + details right */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 min-h-[380px] ${!isEven ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}`}>
                  <AppDetails app={app} />
                  <div className="relative overflow-hidden flex items-center">
                    <PhoneMarquee
                      screenshots={app.screenshots}
                      accent={app.accent}
                      animationDuration={app.animationDuration}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}
