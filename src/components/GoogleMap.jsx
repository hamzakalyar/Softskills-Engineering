import React from 'react';

export default function GoogleMap() {
  return (
    <div className="h-80 w-full rounded-[32px] overflow-hidden border border-white/10 bg-[#010521] relative z-0">
      <iframe 
        src="https://maps.google.com/maps?q=D-110%205th%20Floor,%206th%20Road,%20Satellite%20Town,%20Rawalpindi,%20Pakistan&t=&z=16&ie=UTF8&iwloc=&output=embed" 
        width="100%" 
        height="100%" 
        style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.1)' }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Softskills Engineering Office Location"
      ></iframe>
    </div>
  );
}
