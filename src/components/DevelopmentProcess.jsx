import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { 
    title: 'Discover', 
    description: 'Align on business outcomes, user journeys, and technical constraints with a focused product sprint.',
    colorClasses: {
      bg: 'bg-cyan-400',
      text: 'text-cyan-400',
      border: 'border-cyan-500/30',
      shadow: 'shadow-[0_0_40px_rgba(34,211,238,0.25)]',
      gradient: 'from-cyan-500/20 to-transparent',
      hoverBorder: 'group-hover:border-cyan-400/80'
    },
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
        <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
        <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
        <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
      </svg>
    )
  },
  { 
    title: 'Design', 
    description: 'Define visual systems, interaction patterns, and accessible experiences for your product.',
    colorClasses: {
      bg: 'bg-indigo-400',
      text: 'text-indigo-400',
      border: 'border-indigo-500/30',
      shadow: 'shadow-[0_0_40px_rgba(99,102,241,0.25)]',
      gradient: 'from-indigo-500/20 to-transparent',
      hoverBorder: 'group-hover:border-indigo-400/80'
    },
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="9" y1="21" x2="9" y2="9"></line>
      </svg>
    )
  },
  { 
    title: 'Build', 
    description: 'Develop resilient front-end and back-end systems with test automation and observability.',
    colorClasses: {
      bg: 'bg-purple-400',
      text: 'text-purple-400',
      border: 'border-purple-500/30',
      shadow: 'shadow-[0_0_40px_rgba(168,85,247,0.25)]',
      gradient: 'from-purple-500/20 to-transparent',
      hoverBorder: 'group-hover:border-purple-400/80'
    },
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3"></circle>
        <circle cx="6" cy="12" r="3"></circle>
        <circle cx="18" cy="19" r="3"></circle>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
      </svg>
    )
  },
  { 
    title: 'Launch', 
    description: 'Deploy with confidence and hand over support-ready documentation for ongoing growth.',
    colorClasses: {
      bg: 'bg-red-500',
      text: 'text-red-500',
      border: 'border-red-500/30',
      shadow: 'shadow-[0_0_40px_rgba(239,68,68,0.3)]',
      gradient: 'from-red-500/20 to-transparent',
      hoverBorder: 'group-hover:border-red-500/80'
    },
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
      </svg>
    )
  },
];

export default function DevelopmentProcess() {
  return (
    <section className="bg-background pt-4 pb-12 relative overflow-hidden">
      
      {/* Sci-Fi Nebula Background Glows */}
      <div className="absolute top-0 left-[20%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-[20%] w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="mb-12 max-w-2xl">
          <p className="label-small" data-reveal>
            Delivery process
          </p>
          <h2 className="section-heading mt-4" data-reveal>
            Structured rhythm for product momentum and clear decision-making.
          </h2>
        </div>
        
        <div className="relative">
          
          {/* Fiber-Optic Track (Desktop) */}
          <div className="hidden lg:flex absolute top-[50%] -translate-y-1/2 left-[10%] right-[10%] h-12 flex-col justify-center gap-[6px] z-0 pointer-events-none opacity-40">
            <div className="h-[2px] w-full bg-cyan-500/30" />
            <div className="h-[1px] w-full bg-indigo-500/30" />
            <div className="h-[3px] w-full bg-red-500/30 blur-[1px]" />
            <div className="h-[1px] w-full bg-purple-500/30" />
          </div>
          
          <div className="grid gap-6 lg:gap-8 lg:grid-cols-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={step.title} 
                className="relative group perspective-1000"
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3
                }}
              >
                
                {/* 3D Glass Sci-Fi Card */}
                <div 
                  className={`relative p-8 md:p-10 h-full min-h-[420px] text-left transition-all duration-700 bg-slate-900/40 backdrop-blur-xl border-2 ${step.colorClasses.border} ${step.colorClasses.hoverBorder} group-hover:-translate-y-2 hover:${step.colorClasses.shadow}`}
                  style={{
                    // Sci-Fi Chamfered Corners
                    clipPath: 'polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px)'
                  }}
                >
                  {/* Inner glowing gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${step.colorClasses.gradient} opacity-30 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                  
                  {/* Giant Watermark Step Number */}
                  <div className={`absolute -bottom-8 -right-4 text-[10rem] font-black opacity-10 group-hover:opacity-30 transition-all duration-700 pointer-events-none leading-none select-none ${step.colorClasses.text}`}>
                    0{index + 1}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`flex items-center justify-center ${step.colorClasses.text}`}>
                        {step.icon}
                      </div>
                      <p className={`text-sm font-bold uppercase tracking-[0.25em] ${step.colorClasses.text}`}>Phase</p>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white tracking-tight mb-4">{step.title}</h3>
                    <p className="text-lg text-white/60 leading-relaxed mt-auto group-hover:text-white/90 transition-colors duration-700">{step.description}</p>
                  </div>
                </div>

                {/* Connection Nodes (Desktop) */}
                {/* Left Node */}
                {index > 0 && (
                  <div className={`hidden lg:flex absolute top-[50%] -translate-y-1/2 -left-4 w-8 h-8 items-center justify-center z-20`}>
                     <div className={`w-3 h-3 rounded-full ${step.colorClasses.bg} shadow-[0_0_10px_currentColor] ${step.colorClasses.text}`} />
                  </div>
                )}
                {/* Right Node */}
                {index < steps.length - 1 && (
                  <div className={`hidden lg:flex absolute top-[50%] -translate-y-1/2 -right-4 w-8 h-8 items-center justify-center z-20`}>
                     <div className={`w-3 h-3 rounded-full ${step.colorClasses.bg} shadow-[0_0_10px_currentColor] ${step.colorClasses.text}`} />
                  </div>
                )}
                
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
