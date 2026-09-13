/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
      keyframes: {
        "petal-fall": {
          "0%": { transform: "translateY(-10vh)", opacity: "0" },
          "10%": { opacity: "0.6" },
          "90%": { opacity: "0.6" },
          "100%": { transform: "translateY(110vh)", opacity: "0" },
        },
        "petal-sway": {
          "0%, 100%": { transform: "translateX(0) rotate(0deg)" },
          "50%": { transform: "translateX(20px) rotate(15deg)" },
        },
      },
      animation: {
        "petal-fall": "petal-fall 10s linear infinite",
        "petal-sway": "petal-sway 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};