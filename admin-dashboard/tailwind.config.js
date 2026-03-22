/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'admin-dark': '#085041',
        'admin-gold': '#EF9F27',
        'admin-cream': '#F7F5F0',
        'admin-white': '#FFFFFF',
        'admin-success': '#1D9E75',
        'admin-danger': '#E24B4A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
