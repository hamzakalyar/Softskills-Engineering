import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

const stats = [
  { value: 120, label: 'Products launched' },
  { value: 85, label: 'AI workflows delivered' },
  { value: 50, label: 'CRM and ERP integrations' },
  { value: 98, label: 'Client satisfaction' },
];

export default function Statistics() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4" ref={ref}>
          {stats.map((item) => (
            <div key={item.label} className="glass-panel rounded-3xl p-8 text-center">
              <p className="text-4xl font-semibold text-text">
                {isVisible ? <CountUp end={item.value} duration={2.2} /> : 0}
                {item.label === 'Client satisfaction' ? '%' : '+'}
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.24em] text-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
