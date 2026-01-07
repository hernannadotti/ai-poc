/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'helvetica': ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        'vag-rounded': ['Vag-Rounded', 'Arial', 'sans-serif'],
      },
      colors: {
        'dropdown-arrow-gray': '#6b7280',
      },
    },
  },
  plugins: [],
}
