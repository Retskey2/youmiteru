/** @type {import('prettier').Config} */

module.exports = {
	tabWidth: 2,
	singleQuote: true,
	jsxSingleQuote: true,
	arrowParens: 'always',
	useTabs: true,
	printWidth: 100,
	trailingComma: 'none',
	semi: true,
	importOrder: [
		'<THIRD_PARTY_MODULES>',
		'^@/screens/(.*)$',
		'^@/components/(.*)$',
		'^@/ui/(.*)$',
		'^@/hooks/(.*)$',
		'^@/shared/(.*)$',
		'^@/services/(.*)$',
		'^@/assets/(.*)$',
		'^@/utils/(.*)$',
		'^@/configs/(.*)$',
		'^@/store/(.*)$',
		'^../(.*)',
		'^./(.*)',
		'(.scss)$'
	],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,

	plugins: [require('prettier-plugin-tailwindcss')]
};
