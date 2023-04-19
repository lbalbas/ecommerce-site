/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				raisin: "#1E1E24",
				vanilla: "#dbd8ae",
				trueblue: "#3066be",
				powderblue: "#b4c5e4",
				ivory: "#fbfff1",
				jasper: "#DB504A"
			},
		},
	},
	plugins: [],
};
