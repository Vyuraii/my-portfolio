/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: {
          1: '#050816',
          2: '#0B1120',
          3: '#111827',
          opening: '#070B17'
        },
        accent: {
          cyan: '#00E5FF',
          purple: '#7C3AED',
          blue: '#60A5FA'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        cyanGlow: '0 0 20px rgba(0, 229, 255, 0.5)',
        purpleGlow: '0 0 20px rgba(124, 58, 237, 0.5)',
      }
    },
  },
  plugins: [],
}
