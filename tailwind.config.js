/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FFFAF0',
          100: '#FEEBC8',
          200: '#FBD38D',
          300: '#F6AD55',
          400: '#ED8936',
          500: '#FFD700',
          600: '#FFA500',
          700: '#C05621',
          800: '#9C4221',
          900: '#7B341E',
        },
        dark: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#1a1a1a',
          950: '#0a0a0a',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#a4a4a4',
            h1: {
              color: '#ffffff',
            },
            h2: {
              color: '#ffffff',
            },
            h3: {
              color: '#ffffff',
            },
            h4: {
              color: '#ffffff',
            },
            strong: {
              color: '#ffffff',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};