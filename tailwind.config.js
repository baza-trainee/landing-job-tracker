/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    fontWeight: {
      light: "300",
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    fontSize: {
      xs: "12px",
      s: "14px",
      m: "16px",
      sm: "18px",
      md: "20px",
      l: "22px",
      lg: "26px",
      xl: "28px",
      "2xl": "30px",
      "3xl": "32px",
      "4xl": "34px",
      "5xl": "36px",
      "6xl": "40px",
      "7xl": "44px",
      "8xl": "56px",
      "9xl": "48px",
    },
    screens: {
      smallMobile: "320px",

      mobile: "480px",

      desktop: "1440px",
    },
    extend: {
      backgroundImage: {
        "bg-vector": "url('./src/assets/bg.svg')",
      },
      boxShadow: {
        filters: "0 0 3px 0 rgba(0, 0, 0, 0.2)",
      },
      colors: {
        backgroundMain: "#fdfeff",
        backgroundSecondary: "#eceff6",
        blackText: "#333",
        btn: "#bfdef5",
        text: "#288dd5",
        whiteText: "#ecf0f6",
        iconHover: "#436b88",
        heroBlue: "#c6e7ff",
        heroGreen: "#d0e8c5",
        textheroBlue: "#2378b5",
        textheroGreen: "#4f6d34",
        addbtn: "#fc8972",
        filtersBlue: "#c6e7ff",
        filterslightGreen: "#d0e8c5",
        filtersPerpule: "#cdc1ff",
        filtersRed: "#fc8972",
        filtersGrey: "#a6aebf",
        filtersGreen: "#b1d690",
      },
    },
  },
  plugins: [],
};
