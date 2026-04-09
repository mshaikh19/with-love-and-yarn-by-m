/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        blush: "#F2C4CE",
        mint: "#B5E2D8",
        cream: "#FDF6EC",
        lavender: "#D9C9E8",
        rose: "#E8A0AE",
        sage: "#8ECFC4",
        butter: "#F8E8C8",
        lilac: "#C3AADC",
        deepRose: "#C97080",
        textMain: "#4A3840",
        textLight: "#8A7080",
        primary: "#D9C9E8",
        secondary: "#C3AADC",
        tertiary: "#996883",
        neutralBg: "#FBF4FF"
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Lato", "sans-serif"],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-del': 'float 6s ease-in-out 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '33%': { transform: 'translateY(-15px) translateX(5px)' },
          '66%': { transform: 'translateY(5px) translateX(-5px)' },
        }
      }
    },
  },
  plugins: [],
};