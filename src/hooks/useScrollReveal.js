import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal(sectionRef) {
  useEffect(() => {
    if (!sectionRef?.current) return;

    const targets = sectionRef.current.querySelectorAll('[data-reveal]');
    if (!targets || targets.length === 0) return;
    
    const ctx = gsap.context(() => {
      gsap.from(targets, {
        y: 24,
        opacity: 0,
        duration: 0.9,
        ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
        stagger: 0.07,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, [sectionRef]);
}
