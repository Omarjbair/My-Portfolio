/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        abrilFatface: ["Abril Fatface", "serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
    colors: {
      'backgroundColor': "#020A13",
      'cw': "#e1e1e1",
      'mark': '#080f18',
      'cursor': '#9e9e9c',
      'cursorBorder': '#434343',
      'pageHeading': '#0A2027',
      'article-color': '#c6c6c6',
      'navLink': 'rgba(255, 255, 255, 0.8)',
      'border-color': '#14202b'
    },
  },
  plugins: [],
}