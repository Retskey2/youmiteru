module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}'
	],
	plugins: [],
	theme: {
		extend: {
			colors: {
				grey: '#757575',
				greyLight: '#e5e5e5',
				primary: '#111',
				secondary: '#ccc',
				white: '#fff'
			},
			fontFamily: {
				nike: ['Nike', 'sans-serif'],
				sans: ['Helvetica', 'Arial', 'sans-serif'],
				sono: ['Sono', 'sans-serif']
			}
		}
	},
	variants: {}
};
