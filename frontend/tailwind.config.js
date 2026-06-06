/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          850: '#0f172a',
          950: '#030712',
        }
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['dark'],
    darkTheme: 'dark',
  },
};