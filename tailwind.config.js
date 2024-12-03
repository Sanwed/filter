/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    "projects-grid": "display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px;"
  },
  plugins: [],
}

