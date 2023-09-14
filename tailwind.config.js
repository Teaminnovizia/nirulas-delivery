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
				"secondary-brown": "var(--secondary-brown)",
				"chocolate-brown": "var(--chocolate-brown)",
				"primary-black": "var(--primary-black)",
				"primary-pink": "var(--primary-pink)",
				"light-pink": "var(--light-pink)",
				"primary-blue": "var(--primary-blue)",
				"primary-purple": "var(--primary-purple)",
				"secondary-purple": "var(--secondary-purple)",
				"primary-grey": "var(--primary-grey)",
				"secondary-grey": "var(--secondary-grey)",
				"primary-yellow": "var(--primary-yellow)",
				"secondary-yellow": "var(--secondary-yellow)",
				"secondary-pink": "var(--secondary-pink)",
				"secondary-blue": "var(--secondary-blue)",
				"dark-yellow": "var(--dark-yellow)",
				"light-yellow": "var(--light-yellow)",
				"light-blue": "var(--light-blue)",
				"new-purple": "var(--new-purple)",
				"new-yellow": "var(--new-yellow)",
				"selected-yellow": "var(--selected-yellow)",
				"default-yellow": "var(--default-yellow)",
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