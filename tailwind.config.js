/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        backgroundMain: "#fdfeff",
        backgroundSecondary: "#eceff6",
        blackText: "#333",
        btn: "#bfdef5",
        text: "#288dd5",
        whiteText: "#ecf0f6",
        iconHover: "#436b88",
      },
    },
  },
  plugins: [],
};
