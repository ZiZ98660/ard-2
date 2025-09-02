/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "900px",
			// => @media (min-width: 768px) { ... }
			800: "800px",
			lg: "1054px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				dark: "#373435",
				light: "#FEFEFE",
				primary: {
					100: "#4FB847",
					200: "#449E3E",
					300: "#398634",
				},
				"green-yellow": "#A8CF45",
			},
		},
	},
	plugins: [],
};
