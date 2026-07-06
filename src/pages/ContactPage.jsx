import React from 'react';
import { Helmet } from 'react-helmet';
import ContactForm from '../components/ContactForm.jsx';
import GoogleMap from '../components/GoogleMap.jsx';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Softskills Engineering</title>
        <meta
          name="description"
          content="Get in touch with Softskills Engineering to discuss your next web portal, app project, or corporate training requirements."
        />
      </Helmet>
      
      <ContactForm />
      
      <section className="pb-24 bg-background">
        <div className="container max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center bg-gradient-to-br from-royalBlue/10 to-transparent rounded-[40px] p-8 md:p-12 border border-white/5 shadow-2xl">
            
            {/* Left Column: Exact Address Details */}
            <div className="flex flex-col text-left justify-center pr-0 lg:pr-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/10 bg-white/5 text-white/70 mb-6 w-max">
                Headquarters
              </span>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
                Come visit our <span className="text-accent">innovation lab</span>.
              </h3>
              <p className="text-white/60 mb-10 leading-relaxed text-base md:text-lg max-w-md">
                Our doors are always open for ambitious founders, enterprise partners, and tech talent looking to build the future. 
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <p className="text-accent font-bold text-[10px] tracking-widest uppercase mb-2">Exact Location</p>
                  <p className="text-white font-semibold text-lg mb-1">D-110 5th Floor</p>
                  <p className="text-white/60 text-sm">6th Road, Satellite Town<br/>Rawalpindi, Pakistan</p>
                </div>
                
                <div>
                  <p className="text-accent font-bold text-[10px] tracking-widest uppercase mb-2">Working Hours</p>
                  <p className="text-white font-semibold text-lg mb-1">Monday – Saturday</p>
                  <p className="text-white/60 text-sm">10:00 AM – 6:00 PM (PKT)<br/>Closed on Sundays</p>
                </div>
              </div>
            </div>

            {/* Right Column: The Map */}
            <div className="w-full flex items-center justify-center">
               <GoogleMap />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
