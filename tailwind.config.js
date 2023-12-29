/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
      },
      backgroundImage: {
        'mobile': "url('/images/pattern-bg-mobile.png')",
        
        'desktop': "url('/images/pattern-bg-desktop.png')",
      },
    },
  },
  plugins: [],
}

