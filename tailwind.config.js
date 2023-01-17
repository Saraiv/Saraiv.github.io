/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'top-bar-black': '#1F1F1F',
        'background-black': '#4B4B4B',
        'close-button-red': '#EC4545',
        'terminal-tab': '#3D3D3D',
        'background-console': '#3E3D3D'
      },
      screens: {
        'medium': { 'raw': '(min-width: 900px)' },
        'medium-plus': { 'raw': '(min-width: 1000px)' },
        'large': { 'raw': '(min-width: 1250px' },
      }
    },
  },
  plugins: [],
}
