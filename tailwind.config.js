/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Backgrounds (Alpha Alliance editorial palette)
        bg: {
          DEFAULT: '#000000',
          1: '#0A0810',
          2: '#131019',
          3: '#1A1623',
          card: 'rgba(20, 16, 28, 0.55)',
          'card-hi': 'rgba(28, 22, 38, 0.85)',
        },
        // Sophisticated gold
        gold: {
          DEFAULT: '#D4A574',
          warm: '#E6BE8A',
          deep: '#B8895E',
          glow: 'rgba(212, 165, 116, 0.35)',
        },
        // Text scale
        text: {
          DEFAULT: '#F5F2EC',
          muted: '#A8A39A',
          dim: '#6B665F',
        },
        // Borders
        border: {
          DEFAULT: 'rgba(212, 165, 116, 0.10)',
          mid: 'rgba(212, 165, 116, 0.22)',
          hi: 'rgba(212, 165, 116, 0.45)',
        },
        // Accent
        green: '#6BBF80',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
      letterSpacing: {
        widest: '0.22em',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
