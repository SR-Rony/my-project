/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1400px',
      },
      fontFamily: {
        'poppins': [ 'Poppins', 'sans-serif'],
      },
      colors: {
        'primary': '#01C893',
      },
    },
  },
  plugins: [],
}

