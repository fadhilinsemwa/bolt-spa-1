/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B2332', // Maroon/burgundy color
          light: '#A64D5B',
          dark: '#6B1B27',
        }
      }
    },
  },
  plugins: [],
};