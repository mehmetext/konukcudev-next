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
			},
		},
	},
	plugins: [],
};
