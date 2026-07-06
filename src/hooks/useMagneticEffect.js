import { useEffect } from 'react';

export function useMagneticEffect(buttonRef) {
  useEffect(() => {
    if (!buttonRef?.current) return;

    const handleMouseMove = (event) => {
      const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
      const x = event.clientX - left - width / 2;
      const y = event.clientY - top - height / 2;
      buttonRef.current.style.transform = `translate3d(${x * 0.16}px, ${y * 0.16}px, 0)`;
    };

    const handleMouseLeave = () => {
      buttonRef.current.style.transform = 'translate3d(0, 0, 0)';
    };

    buttonRef.current.addEventListener('mousemove', handleMouseMove);
    buttonRef.current.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      buttonRef.current?.removeEventListener('mousemove', handleMouseMove);
      buttonRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [buttonRef]);
}
