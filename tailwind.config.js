/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playwrite': ['Playwrite AR', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'pacifico':['Pacifico', 'sans-serif'],
        'audiowide':['Audiowide', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

