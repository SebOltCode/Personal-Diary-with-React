/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green":"#a3e635",
        "yellow":"#fef08a",
      },
    },
  },
  plugins: [require('daisyui'),],
}

