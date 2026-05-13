/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: "#8CC63F", // Approximate from logo
          blue: "#26B4E5",  // Approximate from logo
        },
        peace: {
          light: "#F8FAFC",
          dark: "#334155",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
