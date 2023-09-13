/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
		"./icons/**/*.{js,ts,jsx,tsx}",
		"./utils/**/*.{js,ts,jsx,tsx}",
		"./atoms/**/*.{js,ts,jsx,tsx}",
		"./config/**/*.{js,ts,jsx,tsx}",
		"./types/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"primary-black": "var(--primary-black)",
			},
			animation: {
				'spin-slow': 'spin 20s linear infinite',
			},
			height: {
				'h-screen': '100dvh'
			},
			screens: {
				'8xl': '1350px',
				'lg.5': '1152px'
			},
			maxWidth: {
				'8xl': '1350px'
			}
		},
	},
	plugins: [],
}