/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",   // ← this line is the magic

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
