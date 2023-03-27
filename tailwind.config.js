module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}'
	],
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {}
	},
	variants: {},
	plugins: []
};