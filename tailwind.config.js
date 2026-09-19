/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aura: {
          purple: '#6B21A8',
          gold: '#F59E0B',
          success: '#10B981',
          alert: '#F59E0B',
          danger: '#EF4444',
          dark: '#1F2937',
          light: '#F9FAFB'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
