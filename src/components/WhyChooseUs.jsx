import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabData = [
  {
    id: 'expert',
    title: 'Expert Trainers',
    shortDesc: 'Learn from industry professionals',
    fullDesc: 'Master the intricacies of AI with curriculum designed and taught by industry veterans who have built scalable systems. Get real-world insights, not just textbook theory.',
    visual: '👨‍🏫'
  },
  {
    id: 'practical',
    title: 'Practical AI Learning',
    shortDesc: 'Hands-on projects & use cases',
    fullDesc: 'We believe in learning by building. Construct real-world applications, fine-tune models, and develop a portfolio of business-ready AI products that showcase your expertise.',
    visual: '💻'
  },
  {
    id: 'career',
    title: 'Career Growth',
    shortDesc: 'Structured for high-paying jobs',
    fullDesc: 'Our curriculum is reverse-engineered from current industry demands. We focus strictly on the skills required to accelerate your career and land high-paying tech roles.',
    visual: '📈'
  },
  {
    id: 'support',
    title: '24/7 Support',
    shortDesc: 'Help anytime on your journey',
    fullDesc: 'Never get stuck on a complex problem. Our dedicated support team and community of mentors are always available to help you debug and understand core concepts.',
    visual: '🎧'
  }
];

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative py-12 md:py-16 overflow-hidden z-10 bg-background">
      {/* Elegant Glowing Top Divider to seamlessly separate sections */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent blur-[2px]" />

      {/* Ambient glowing orbs behind the entire section */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] pointer-events-none z-0" />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="container relative z-10 flex flex-col max-w-6xl mx-auto"
      >
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Why Choose Us
          </h2>
          <p className="mt-3 text-text/70 max-w-2xl text-base md:text-lg">
            Our platform provides everything you need to master AI development and build scalable software solutions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
          {/* Vertical Tabs List */}
          <div className="w-full lg:w-[35%] flex flex-col gap-1.5">
            {tabData.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`text-left flex flex-col p-4 border-l-[3px] transition-all duration-300 rounded-r-lg ${isActive
                      ? 'border-accent bg-accent/10 shadow-[inset_0_0_20px_rgba(211,32,39,0.05)]'
                      : 'border-transparent hover:border-white/10 hover:bg-white/5'
                    }`}
                >
                  <span className={`text-base font-semibold transition-colors duration-300 ${isActive ? 'text-white' : 'text-text/70'}`}>
                    {tab.title}
                  </span>
                  <span className={`text-sm mt-0.5 transition-colors duration-300 ${isActive ? 'text-text/90' : 'text-text/50'}`}>
                    {tab.shortDesc}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Content Panel */}
          <div className="w-full lg:w-[65%] h-full">
            <div className="glass-panel rounded-3xl overflow-hidden relative min-h-[420px] border border-white/5 bg-gradient-to-br from-[#1c1115] via-[#0f0a0d] to-background p-6 md:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)]">

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex flex-col h-full z-10 relative"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-6">
                    <div className="max-w-md">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        {tabData[activeTab].title}
                      </h3>
                      <p className="text-text/80 text-base leading-relaxed mb-6">
                        {tabData[activeTab].fullDesc}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        <button className="bg-accent text-white text-sm font-semibold py-2.5 px-5 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(211,32,39,0.5)]">
                          Learn More
                        </button>
                        <button className="text-text/90 text-sm font-semibold py-2.5 px-5 rounded-full flex items-center transition-all duration-300 hover:text-white group">
                          Documentation
                          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </button>
                      </div>
                    </div>

                    {/* Abstract Visual representation */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="hidden sm:flex w-20 h-20 md:w-24 md:h-24 shrink-0 bg-accent/10 border border-accent/20 rounded-2xl items-center justify-center text-3xl md:text-4xl shadow-[0_0_30px_rgba(211,32,39,0.15)] relative overflow-hidden"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-accent/5 rounded-2xl animate-pulse" />

                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="relative z-10 drop-shadow-[0_0_15px_rgba(211,32,39,0.8)]"
                      >
                        {tabData[activeTab].visual}
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Code Snippet Mockup aligned at the bottom */}
                  <div className="mt-auto w-full bg-[#0d1117] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                    <div className="flex gap-2 px-4 py-2.5 bg-[#161b22] border-b border-white/5 items-center">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      <span className="ml-4 text-xs font-mono text-muted">terminal</span>
                    </div>
                    <div className="p-4 font-mono text-xs md:text-sm text-text/80">
                      <div className="flex flex-wrap">
                        <span className="text-accent mr-2">➜</span>
                        <span className="text-blue-400">softskills</span>
                        <span className="mx-2">~</span>
                        <span className="text-white break-all">./run_module --feature="{tabData[activeTab].id}"</span>
                      </div>
                      <div className="mt-1.5 text-green-400">
                        ✓ Initializing {tabData[activeTab].title.toLowerCase()} system...
                      </div>
                      <div className="mt-0.5 text-text/60">
                        [SUCCESS] Ready to build the future.
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Ambient Background Glow for the card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full blur-[100px] pointer-events-none z-0" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
