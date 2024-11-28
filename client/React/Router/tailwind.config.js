/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      left:{
        '10rem':'63rem'
      }
    },
  },
  plugins: [],
}

