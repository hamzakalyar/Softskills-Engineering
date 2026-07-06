import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navLinks } from '../utils/constants.js';
import { Phone, Mail, Globe, MapPin, ArrowRight, Github, Linkedin, Twitter, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    // 1. Get existing subscriptions from localStorage or initialize empty list
    const existingSubs = JSON.parse(localStorage.getItem('newsletter_subscriptions') || '[]');
    
    // 2. Add new email if it doesn't already exist
    if (!existingSubs.includes(email.trim().toLowerCase())) {
      existingSubs.push(email.trim().toLowerCase());
      localStorage.setItem('newsletter_subscriptions', JSON.stringify(existingSubs));
    }

    setSubscribed(true);
    setEmail('');
  };
  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-[#010521] to-[#00020c] pt-20 pb-10 text-sm text-white/50 overflow-hidden">
      
      {/* Decorative background grid and glow */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-royalBlue/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
          
          {/* Brand block */}
          <div className="text-left flex flex-col items-start">
            <div className="flex items-center gap-3">
              <img src="/favicon.png" alt="Logo" className="w-8 h-8 object-contain" />
              <span className="font-semibold text-sm tracking-[0.2em] uppercase text-white">
                SOFTSKILLS <span className="text-accent">ENGINEERING</span>
              </span>
            </div>
            <p className="mt-5 text-white/50 text-xs leading-relaxed max-w-sm">
              Empowering minds with scalable tech and hands-on AI training. Master model training, prompt design, and engineering skills to launch a future-proof career.
            </p>
            {/* Social media links */}
            <div className="flex gap-3.5 mt-6">
              {[
                { icon: <Twitter className="w-4 h-4" />, url: '#' },
                { icon: <Github className="w-4 h-4" />, url: '#' },
                { icon: <Linkedin className="w-4 h-4" />, url: '#' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.url} 
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 hover:border-accent/40 text-white/60 hover:text-white flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_10px_rgba(176,5,21,0.3)] hover:-translate-y-0.5"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links block */}
          <div className="text-left md:pl-8">
            <h3 className="uppercase tracking-[0.25em] text-[10px] font-bold text-white mb-6">Navigation</h3>
            <ul className="space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-white/45 hover:text-white text-xs font-medium tracking-wide transition-all duration-300 hover:pl-1 flex items-center gap-1 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details block */}
          <div className="text-left">
            <h3 className="uppercase tracking-[0.25em] text-[10px] font-bold text-white mb-6">Connect With Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-xs">
                <div className="w-8 h-8 rounded-lg bg-royalBlue/20 border border-white/5 flex items-center justify-center text-accent flex-shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-wider text-white/30">Call Support</p>
                  <a href="tel:03002457241" className="text-white/70 hover:text-white transition-colors font-semibold">0300 2457241</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-xs">
                <div className="w-8 h-8 rounded-lg bg-royalBlue/20 border border-white/5 flex items-center justify-center text-accent flex-shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-wider text-white/30">Email Info</p>
                  <a href="mailto:info@softskills.com" className="text-white/70 hover:text-white transition-colors font-semibold">info@softskillsengineering.com</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-xs">
                <div className="w-8 h-8 rounded-lg bg-royalBlue/20 border border-white/5 flex items-center justify-center text-accent flex-shrink-0">
                  <Globe className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-wider text-white/30">Official Domain</p>
                  <a href="https://softskillsengineering.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors font-semibold">softskillsengineering.com</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscribe block */}
          <div className="text-left">
            <h3 className="uppercase tracking-[0.25em] text-[10px] font-bold text-white mb-6">Stay Updated</h3>
            
            {subscribed ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-semibold flex items-center gap-2"
              >
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Thank you for subscribing!</span>
              </motion.div>
            ) : (
              <>
                <p className="text-white/50 text-xs leading-relaxed mb-4">
                  Subscribe to get details about upcoming batches, workshops, and AI trends.
                </p>
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input 
                    type="email" 
                    required
                    placeholder="Enter email address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/5 border border-white/5 focus:border-accent/40 rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-accent/40 transition-all flex-grow min-w-0"
                  />
                  <button 
                    type="submit" 
                    aria-label="Subscribe"
                    className="w-10 h-10 rounded-xl bg-accent hover:bg-accent/80 text-white flex items-center justify-center transition-all duration-300 flex-shrink-0 shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </>
            )}
          </div>

        </div>

        {/* Footer Meta Bottom row */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-white/35">
            © {new Date().getFullYear()} Softskills Engineering. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-white/35">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
