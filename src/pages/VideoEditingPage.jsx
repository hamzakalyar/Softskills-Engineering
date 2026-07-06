import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Film, Sparkles, Code, Play, Pause, Volume2, VolumeX, X, Maximize2 } from 'lucide-react';

const videosList = [
  {
    id: 'video-1',
    title: 'Brand Anthem Commercial',
    category: 'Cinematic Advertising',
    description: 'A cinematic brand storytelling commercial designed for high visual impact. Highlights advanced color grading, custom sound design, and fluid transitions to establish premium brand authority.',
    src: '/videos/Video1.mp4',
    software: ['Premiere Pro', 'DaVinci Resolve', 'Audition'],
    metrics: [
      { val: '0:15', label: 'Duration' },
      { val: '4K UHD', label: 'Resolution' },
      { val: '24 fps', label: 'Frame Rate' }
    ],
    accent: '#d90416',
    accentClass: 'text-[#d90416]',
    badgeBg: 'bg-[#d90416]/10 border-[#d90416]/20 text-[#d90416]',
    iconGradient: 'from-[#d90416] to-[#500207]',
    gradient: 'from-[#1a0606] via-[#200808] to-[#010521]'
  },
  {
    id: 'video-2',
    title: 'SaaS Product Showcase',
    category: 'App Motion Graphics',
    description: 'A high-energy product showcase video utilizing sleek motion design and dynamic keyframing to explain complex software features in a punchy, engaging format.',
    src: '/videos/Video2.mp4',
    software: ['After Effects', 'Premiere Pro', 'Illustrator'],
    metrics: [
      { val: '0:35', label: 'Duration' },
      { val: '1080p', label: 'Resolution' },
      { val: '60 fps', label: 'Frame Rate' }
    ],
    accent: '#3b82f6',
    accentClass: 'text-blue-400',
    badgeBg: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    iconGradient: 'from-blue-500 to-blue-900',
    gradient: 'from-[#060f24] via-[#0a1830] to-[#010521]'
  },
  {
    id: 'video-3',
    title: 'Social Media Reel Campaign',
    category: 'Vertical Marketing',
    description: 'High-retention social media reel utilizing fast-paced jump cuts, dynamic zoom transitions, kinetic typography, and sound effects custom tailored to maximize viewer retention.',
    src: '/videos/Video3.mp4',
    software: ['Premiere Pro', 'After Effects', 'CapCut Pro'],
    metrics: [
      { val: '0:15', label: 'Duration' },
      { val: '1080x1920', label: 'Resolution' },
      { val: '30 fps', label: 'Frame Rate' }
    ],
    accent: '#ea580c',
    accentClass: 'text-orange-400',
    badgeBg: 'bg-orange-500/10 border-orange-500/20 text-orange-400',
    iconGradient: 'from-orange-500 to-orange-950',
    gradient: 'from-[#1f0e06] via-[#140a04] to-[#010521]'
  }
];

function CustomVideoPlayer({ src, accent, onOpenLightbox }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const handleMouseEnter = () => {
    setShowControls(true);
  };

  const handleMouseLeave = () => {
    setShowControls(false);
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      if (duration) {
        setProgress((current / duration) * 100);
      }
    }
  };

  return (
    <div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onOpenLightbox}
      className="relative w-full h-full cursor-pointer group/player overflow-hidden select-none"
    >
      <video
        ref={videoRef}
        src={src}
        preload="metadata"
        playsInline
        muted={isMuted}
        loop
        autoPlay
        onTimeUpdate={handleTimeUpdate}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="w-full h-full object-cover"
        style={{ height: '360px' }}
      />
      
      {/* Dark overlay */}
      <div 
        className={`absolute inset-0 bg-black/35 transition-opacity duration-300 pointer-events-none ${
          isPlaying ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Center expand view badge */}
      <div 
        className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-300 ${
          showControls ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div 
          className="px-3.5 py-2 rounded-full flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold tracking-widest uppercase shadow-2xl transition-all duration-300 hover:bg-white/20 hover:scale-105"
          style={{ boxShadow: `0 8px 30px ${accent}44` }}
        >
          <Maximize2 className="w-3.5 h-3.5" />
          Play video
        </div>
      </div>

      {/* Muted toggle */}
      <button
        onClick={toggleMute}
        className={`absolute bottom-3 right-3 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all duration-300 ${
          showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
      </button>

      {/* Preview tag */}
      <div 
        className={`absolute top-3 left-3 z-20 px-2 py-1 rounded bg-[#010521]/80 backdrop-blur-md border border-white/10 text-[9px] font-bold uppercase tracking-wider text-white transition-opacity duration-300 ${
          isPlaying ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Preview
      </div>

      {/* Bottom Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20">
        <div 
          className="h-full transition-all duration-100"
          style={{ 
            width: `${progress}%`,
            background: `linear-gradient(90deg, ${accent}, #ffffff)`
          }}
        />
      </div>
    </div>
  );
}

export default function VideoEditingPage() {
  const [modalVideo, setModalVideo] = useState(null);

  useEffect(() => {
    if (modalVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modalVideo]);

  return (
    <>
      <Helmet>
        <title>Video Editing Portfolio | Softskills Engineering</title>
        <meta name="description" content="Explore our cinematic video editing and product demo portfolio." />
      </Helmet>

      {/* Header */}
      <section className="pt-24 pb-4 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container relative z-10">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-xs uppercase tracking-widest mb-4 transition-colors duration-300 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Projects
          </Link>
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent mb-2">Specialized Capability</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl leading-[1.1] mb-4">
            Video Editing
          </h1>
          <p className="text-sm md:text-base text-white/50 max-w-xl leading-relaxed">
            High-impact editing designed to capture attention and deliver information flawlessly. From high-retention vertical marketing reels to cinematic brand anthem commercials.
          </p>
        </div>
      </section>

      {/* Adjustable Video Cards Grid */}
      <section className="py-12 pb-24 bg-background min-h-screen">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {videosList.map((video, idx) => {
              // Different float configurations to make them dance asynchronously
              const floatY = idx === 0 ? [0, -10, 0] : idx === 1 ? [0, -6, 0] : [0, -12, 0];
              const floatRotate = idx === 0 ? [0, 0.6, -0.6, 0] : idx === 1 ? [0, -0.5, 0.5, 0] : [0, 0.7, -0.5, 0];
              const floatDuration = idx === 0 ? 5 : idx === 1 ? 4.2 : 5.8;
              const floatDelay = idx === 0 ? 0 : idx === 1 ? 0.3 : 0.6;

              return (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative rounded-[32px] bg-white/[0.02] border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col"
                >
                  {/* Floating Content Wrapper (The Dancing Animation Loop) */}
                  <motion.div
                    animate={{
                      y: floatY,
                      rotate: floatRotate
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: floatDuration,
                      delay: floatDelay,
                      ease: "easeInOut"
                    }}
                    whileHover={{ 
                      scale: 1.03, 
                      y: -12, 
                      rotate: 0,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    className="group w-full h-full flex flex-col bg-transparent rounded-[32px] overflow-hidden border border-transparent hover:border-white/10 hover:bg-white/[0.04] transition-colors duration-500 relative cursor-pointer"
                  >
                    {/* Accent glow top shadow */}
                    <div 
                      className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity duration-700 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 50% 0%, ${video.accent}22, transparent 65%)`
                      }}
                    />

                    {/* Top card glowing border beam */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-[1px] opacity-20 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${video.accent}, transparent)`
                      }}
                    />

                    {/* Top Half: Smartphone Player Container */}
                    <div className="p-6 pb-0 flex justify-center bg-black/20 select-none">
                      <div className="relative py-4 flex flex-col items-center w-full">
                        <div
                          className="relative w-[150px] sm:w-[170px] md:w-[180px] rounded-[2.2rem] overflow-hidden border-[6px] border-white/10 bg-black shadow-2xl transition-all duration-300 hover:border-white/20"
                          style={{ 
                            boxShadow: `0 16px 50px ${video.accent}44, 0 0 0 1px rgba(255,255,255,0.05)`,
                            height: '370px'
                          }}
                        >
                          {/* Phone Notch */}
                          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-black z-10 rounded-full" />
                          <CustomVideoPlayer 
                            src={video.src} 
                            accent={video.accent} 
                            onOpenLightbox={() => setModalVideo(video)}
                          />
                        </div>
                        {/* Glow ring */}
                        <div
                          className="mx-auto mt-2 w-2/3 h-3 blur-lg opacity-40 rounded-full"
                          style={{ background: `radial-gradient(ellipse, ${video.accent}, transparent)` }}
                        />
                      </div>
                    </div>

                    {/* Bottom Half: Project Information details */}
                    <div className="p-6 flex flex-col justify-between flex-grow text-left">
                      <div>
                        {/* Category Badge */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${video.iconGradient} flex items-center justify-center flex-shrink-0 border border-white/5`}>
                            <Film className="w-3.5 h-3.5 text-white" />
                          </div>
                          <span className={`inline-block px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest rounded-full border ${video.badgeBg}`}>
                            {video.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-xl md:text-2xl font-bold text-white leading-tight mb-3">
                          {video.title}
                        </h2>

                        {/* Description */}
                        <p className="text-white/50 leading-relaxed text-sm mb-6 line-clamp-3">
                          {video.description}
                        </p>
                      </div>

                      {/* Software tags & stats row */}
                      <div className="border-t border-white/5 pt-6 mt-auto">
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {video.software.map((tool) => (
                            <span 
                              key={tool}
                              className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest rounded-lg border border-white/5 text-white/50 bg-white/[0.01]"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>

                        {/* Video stats */}
                        <div className="grid grid-cols-3 gap-2 bg-white/[0.01] border border-white/5 rounded-2xl p-4 text-center">
                          {video.metrics.map(({ val, label }, i) => (
                            <div key={i} className="flex flex-col justify-center">
                              <p className={`text-xs md:text-sm font-bold ${video.accentClass} tracking-tight`}>{val}</p>
                              <p className="text-[8px] text-white/30 uppercase tracking-widest mt-0.5 whitespace-nowrap">{label}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cinematic Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {modalVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-2xl z-[999] flex items-center justify-center p-4 md:p-8"
          >
            {/* Ambient Backlight matching the active video accent */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none blur-[150px]"
              style={{
                background: `radial-gradient(circle, ${modalVideo.accent}, transparent 60%)`
              }}
            />

            {/* Modal Container */}
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-4xl bg-[#020618]/90 border border-white/10 rounded-3xl p-4 md:p-6 shadow-2xl flex flex-col items-center gap-4 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setModalVideo(null)}
                className="absolute -top-12 md:top-4 md:right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header Info */}
              <div className="text-left w-full border-b border-white/5 pb-4">
                <span className={`inline-block px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest rounded-full border ${modalVideo.badgeBg} mb-1.5`}>
                  {modalVideo.category}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{modalVideo.title}</h3>
              </div>

              {/* Theater Viewport */}
              <div className="relative w-full flex items-center justify-center overflow-hidden rounded-2xl bg-black max-w-[300px] aspect-[9/16]">
                <video
                  src={modalVideo.src}
                  autoPlay
                  controls
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Software & Tags */}
              <div className="w-full flex flex-wrap gap-2 pt-2 justify-center">
                {modalVideo.software.map((tool) => (
                  <span 
                    key={tool}
                    className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest rounded-lg border border-white/10 text-white/60 bg-white/5"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
