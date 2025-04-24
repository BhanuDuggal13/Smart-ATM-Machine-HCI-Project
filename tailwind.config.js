/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#f0f5ff',
          100: '#e5effb',
          200: '#bfd7ff',
          300: '#94baff',
          400: '#609cff',
          500: '#3b82ff',
          600: '#0047AB',
          700: '#0039a6',
          800: '#002d85',
          900: '#001f5c',
        },
        green: {
          500: '#10b981',
          600: '#059669',
        },
        amber: {
          500: '#f59e0b',
          600: '#d97706',
        },
      },
    },
  },
  plugins: [],
};