/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        arcade: ['"Press Start 2P"', 'cursive'],
      },
      animation: {
        'flicker': 'flicker 0.15s infinite',
        'nav-float': 'navFloat 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-bg': 'slideBackground 20s linear infinite',
        'box-glow': 'boxGlow 2s ease-in-out infinite',
        'text-pulse': 'textPulse 2s ease-in-out infinite',
        'button-float': 'buttonFloat 3s ease-in-out infinite',
        'grid-move': 'gridMove 10s linear infinite',
        'icon-bounce': 'iconBounce 2s ease-in-out infinite',
        'slide-pattern': 'slidePattern 20s linear infinite',
        'number-glow': 'numberGlow 2s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'pattern-shift': 'patternShift 30s linear infinite',
        'blink': 'blink 1s infinite',
        'section-fade-in': 'sectionFadeIn 1s ease-out forwards',
        'bg-zoom': 'bgZoom 20s ease-in-out infinite alternate',
      },
      keyframes: {
        flicker: {
          '0%': { opacity: '0.97' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0.97' },
        },
        navFloat: {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
          '50%': { transform: 'translateX(-50%) translateY(-5px)' },
        },
        pulseGlow: {
          '0%, 100%': { 
            transform: 'scale(1)', 
            boxShadow: '0 0 0 rgba(255, 0, 0, 0.7)' 
          },
          '50%': { 
            transform: 'scale(1.1)', 
            boxShadow: '0 0 20px rgba(255, 0, 0, 0.9)' 
          },
        },
        slideBackground: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(50px, 50px)' },
        },
        boxGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 30px rgba(255, 0, 0, 0.5), inset 0 0 20px rgba(255, 0, 0, 0.1)' 
          },
          '50%': { 
            boxShadow: '0 0 50px rgba(255, 0, 0, 0.8), inset 0 0 30px rgba(255, 0, 0, 0.2)' 
          },
        },
        textPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.9' },
        },
        buttonFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' },
        },
        gridMove: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(20px, 20px)' },
        },
        iconBounce: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-10px) rotate(-5deg)' },
          '75%': { transform: 'translateY(-10px) rotate(5deg)' },
        },
        slidePattern: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '100%': { transform: 'translate(50px, 50px) rotate(360deg)' },
        },
        numberGlow: {
          '0%, 100%': { 
            textShadow: '2px 2px #000, 0 0 20px #ff0000' 
          },
          '50%': { 
            textShadow: '2px 2px #000, 0 0 40px #ff0000' 
          },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        patternShift: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(80px, 80px)' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        sectionFadeIn: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        bgZoom: {
          '0%': { 
            transform: 'scale(1)',
          },
          '100%': { 
            transform: 'scale(1.1)',
          },
        },
      },
    },
  },
  plugins: [],
};
