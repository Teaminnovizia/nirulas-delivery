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
				"primary-red": "var(--primary-red)",
				"pink-red": "var(--pink-red)",
				"grey-red": "var(--grey-red)",
				"fade-red": "var(--fade-red)",
				"light-red": "var(--light-red)",
				"dark-red": "var(--dark-red)",
				"bold-red": "var(--bold-red)",
				"primary-white": "var(--primary-white)",
				"primary-brown": "var(--primary-brown)",
				"primary-black": "var(--primary-black)",
				"secondary-black": "var(--secondary-black)",
				"normal-black": "var(--normal-black)",
				"primary-grey": "var(--primary-grey)",
				"secondary-grey": "var(--secondary-grey)",
				"border-grey": "var(--border-grey)",
				"normal-grey": "var(--normal-grey)",
				"primary-green": "var(--primary-green)",
				"secondary-green": "var(--secondary-green)",
				"primary-skin": "var(--primary-skin)",
				"selected-addon-grey": "var(--selected-addon-grey)",
				"divider-grey": "var(--divider-grey)",
				"secondary-light-red": "var(--secondary-light-red)",
				"secondary-border-grey": "var(--secondary-border-grey)",
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