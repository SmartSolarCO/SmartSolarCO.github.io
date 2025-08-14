/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'smart-green': '#22543D',
        'smart-light-green': '#38A169',
        'smart-yellow': '#F59E0B',
        'smart-gray': '#4A5568',
        'smart-light-gray': '#F7FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.8s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      },
      keyframes: {
        'fade-in-down': {
          from: {
              opacity: '0',
              transform: 'translateY(-20px)',
          },
          to: {
              opacity: '1',
              transform: 'translateY(0)',
          },
        },
        'fade-in-up': {
            from: {
                opacity: '0',
                transform: 'translateY(20px)',
            },
            to: {
                opacity: '1',
                transform: 'translateY(0)',
            },
        },
      }
    },
  },
  plugins: [],
}
