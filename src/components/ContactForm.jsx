import React, { useState } from 'react';
import { Phone, Mail, ArrowRight, Hash, User, MessageSquare, Briefcase, Send, Sparkles } from 'lucide-react';

const serviceOptions = [
  'Web Development',
  'App Development',
  'Digital Marketing',
  'Video Editing',
  'AI / ML Solutions',
  'Other'
];

export default function ContactForm() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const recipientEmail = 'hamzaimtiaz9970@gmail.com';
    const emailSubject = subject || `New Inquiry from ${name || 'Website Visitor'}`;
    const body = `Hi Softskills Engineering,\n\nName: ${name}\nService Interested In: ${service || 'Not specified'}\n\n${message}\n\nLooking forward to hearing from you.`;

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const isFormValid = name.trim() && message.trim();

  return (
    <section className="pt-28 pb-12 bg-background relative overflow-hidden">
      
      {/* Decorative glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-royalBlue/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container max-w-6xl relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 items-stretch">
          
          {/* Left Column: Brand Info & Contact Channels (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full border border-accent/30 bg-[#010521] text-accent mb-6 w-max shadow-[0_0_10px_rgba(176,5,21,0.1)]">
                <Hash className="w-3 h-3 text-accent" /> CONNECT WITH US
              </span>
              <h2 className="text-4xl md:text-[56px] font-bold tracking-tight text-white leading-[1.05] mb-6">
                Let's build something<br />
                <span className="text-[#d90416] drop-shadow-[0_0_15px_rgba(217,4,22,0.3)]">extraordinary</span><br />
                together.
              </h2>
              <p className="text-white/60 leading-relaxed text-sm md:text-base mb-10 max-w-md">
                Have a web development, mobile application, or design project in mind? Reach out to align your product roadmap, discuss design architecture, or run a technical feasibility assessment.
              </p>
            </div>

            {/* Info Cards List */}
            <div className="space-y-4 relative z-10">
              
              {/* Phone card */}
              <a 
                href="tel:03002457241"
                className="group flex items-center gap-5 p-5 rounded-2xl bg-[#03081a] border border-[#1e293b]/50 hover:border-accent/40 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                <div className="w-10 h-10 rounded-full bg-[#d90416]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-4 h-4 text-[#d90416]" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest text-[#64748b] font-bold mb-0.5">Call Support</p>
                  <p className="text-sm font-bold text-white transition-colors">0300 2457241</p>
                </div>
              </a>

              {/* Email card */}
              <a 
                href="mailto:hamzaimtiaz9970@gmail.com"
                className="group flex items-center gap-5 p-5 rounded-2xl bg-[#03081a] border border-[#1e293b]/50 hover:border-accent/40 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                <div className="w-10 h-10 rounded-full bg-[#d90416]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-4 h-4 text-[#d90416]" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest text-[#64748b] font-bold mb-0.5">Email Inquiries</p>
                  <p className="text-sm font-bold text-white transition-colors">hamzaimtiaz9970@gmail.com</p>
                </div>
              </a>

            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 Cols) */}
          <div className="lg:col-span-7 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent blur-[80px] rounded-[24px] pointer-events-none" />
            <div className="relative rounded-[24px] overflow-hidden bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] group/form">
              
              {/* Top edge glare effects */}
              <div className="absolute top-0 right-1/4 w-[50%] h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-50 group-hover/form:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-0 right-0 w-[2px] h-[30%] bg-gradient-to-b from-white/40 to-transparent opacity-50 group-hover/form:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-0 right-[15%] w-48 h-48 bg-white/5 rounded-full blur-[40px] pointer-events-none group-hover/form:bg-white/10 transition-colors duration-700" />
              
              {/* Bottom right star */}
              <div className="absolute -bottom-2 -right-2 text-white/80 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] z-20 pointer-events-none rotate-12 animate-pulse">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C12 7.52285 16.4772 12 22 12C16.4772 12 12 16.4772 12 22C12 16.4772 7.52285 12 2 12C7.52285 12 12 7.52285 12 2Z" />
                </svg>
              </div>
              
              {/* Form header */}
              <div className="text-left mb-8 border-b border-[#1e293b] pb-6 relative">
                <div className="absolute bottom-0 left-0 w-1/3 h-[1px] bg-gradient-to-r from-accent to-transparent" />
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-red-900 flex items-center justify-center shadow-[0_0_20px_rgba(217,4,22,0.3)]">
                    <Send className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Send a Direct Message</h3>
                </div>
                <p className="text-[#64748b] text-sm flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-accent/60" />
                  Opens your email app so the message is sent from your real account.
                </p>
              </div>

              {/* Form element */}
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Row 1: Name + Service */}
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="space-y-2 text-[11px] font-bold text-[#64748b] uppercase tracking-widest text-left block group">
                    YOUR NAME
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#475569] group-focus-within:text-accent transition-colors duration-300" />
                      <input 
                        type="text" 
                        required 
                        placeholder="Hamza"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-[#020618] hover:border-white/20 focus:border-accent/60 pl-11 pr-4 py-3.5 text-sm text-white outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(217,4,22,0.15)] placeholder-[#334155]"
                      />
                    </div>
                  </label>

                  <label className="space-y-2 text-[11px] font-bold text-[#64748b] uppercase tracking-widest text-left block group">
                    SERVICE INTERESTED IN
                    <div className="relative">
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#475569] group-focus-within:text-accent transition-colors duration-300" />
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-[#020618] hover:border-white/20 focus:border-accent/60 pl-11 pr-4 py-3.5 text-sm text-white outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(217,4,22,0.15)] appearance-none cursor-pointer"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%2364748b' viewBox='0 0 24 24'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                      >
                        <option value="" className="bg-[#020618] text-[#475569]">Select a service...</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#020618] text-white">{opt}</option>
                        ))}
                      </select>
                    </div>
                  </label>
                </div>

                {/* Row 2: Subject */}
                <label className="space-y-2 text-[11px] font-bold text-[#64748b] uppercase tracking-widest text-left block group">
                  SUBJECT
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#475569] group-focus-within:text-accent transition-colors duration-300" />
                    <input 
                      type="text" 
                      placeholder="e.g. Need a corporate website redesign"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-[#020618] hover:border-white/20 focus:border-accent/60 pl-11 pr-4 py-3.5 text-sm text-white outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(217,4,22,0.15)] placeholder-[#334155]"
                    />
                  </div>
                </label>

                {/* Row 3: Message */}
                <label className="space-y-2 text-[11px] font-bold text-[#64748b] uppercase tracking-widest text-left block relative z-10 group">
                  PROJECT DETAILS
                  <textarea 
                    rows="4" 
                    required 
                    placeholder="Share your project scope, timelines, budget range, or any specific requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-[#020618] hover:border-white/20 focus:border-accent/60 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(217,4,22,0.15)] placeholder-[#334155] resize-none"
                  />
                </label>

                {/* Submit button */}
                <button 
                  type="submit" 
                  disabled={!isFormValid}
                  className="w-full bg-gradient-to-r from-[#d90416] to-[#b00515] hover:from-[#f20519] hover:to-[#cc0000] text-white rounded-xl py-4 font-bold transition-all duration-300 text-[13px] flex items-center justify-center gap-2.5 shadow-[0_0_40px_rgba(217,4,22,0.3)] hover:shadow-[0_0_50px_rgba(217,4,22,0.5)] hover:-translate-y-0.5 disabled:opacity-40 disabled:pointer-events-none disabled:hover:translate-y-0 relative z-10 group/btn"
                >
                  <Mail className="w-4 h-4 group-hover/btn:rotate-[-8deg] transition-transform duration-300" />
                  Open Email & Send
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>

                {/* Helper text */}
                <div className="flex items-center justify-center gap-2 pt-1">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/5" />
                  <p className="text-white/25 text-[10px] tracking-wider uppercase whitespace-nowrap">
                    Opens Gmail · Outlook · Apple Mail
                  </p>
                  <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/5" />
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
