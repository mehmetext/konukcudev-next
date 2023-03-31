/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				nunito: "'Nunito', sans-serif",
			},
			colors: {
				primary: "#004E92",
				"primary-dark": "#000428",
				bright: "#F7F7F7",
				darken: "#333",
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
			},
			animation: {
				"heart-attack": "heart-attack 1.25s infinite",
			},
		},
	},
	plugins: [],
};
