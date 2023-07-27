/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: "'Nunito', sans-serif",
      },
      colors: {
        primary: "#004E92",
        "primary-dark": "#000428",
        bright: "#F7F7F7",
        "custom-gray": "#636363",
        frontend: "#5FBC79",
        mobile: "#BA68C8",
      },
      keyframes: {
        "heart-attack": {
          "0%": { transform: "scale(1)" },
          "15%": { transform: "scale(1.25)" },
          "30%": { transform: "scale(1)" },
          "45%": { transform: "scale(1.5)" },
          "75%": { transform: "scale(1)" },
        },
        "go-down": {
          "0%": { transform: "translateY(-10px)", opacity: 1 },
          "10%": { transform: "translateY(0px)", opacity: 1 },
          "30%": { transform: "translateY(-10px)", opacity: 1 },
          "45%": { transform: "translateY(0px)", opacity: 1 },
          "100%": { transform: "translateY(-10px)", opacity: 1 },
        },
      },
      animation: {
        "heart-attack": "heart-attack 1.25s infinite",
        "go-down": "go-down 1.25s infinite",
      },
    },
  },
  plugins: [],
};
