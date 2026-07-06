export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#010521',
        royalBlue: '#101D54',
        accent: '#B00515',
        surface: 'rgba(255, 255, 255, 0.04)',
        text: '#F5F5F7',
        muted: '#9CA3AF',
      },
      boxShadow: {
        glow: '0 24px 80px rgba(99, 102, 241, 0.12)',
      },
      transitionTimingFunction: {
        custom: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'marquee-slow': 'marquee 50s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
      },
    },
  },
  plugins: [],
};

// Force Tailwind to recompile to pick up the red accent color!
