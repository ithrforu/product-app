/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'placeholder': '#8e8e8e',
        'grey77': '#c4c4c4',
      }
    },
  },
  plugins: [],
}