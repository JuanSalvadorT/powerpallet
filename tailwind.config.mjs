/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			colors: {
				brown: {
					100: '#e8d6c3',
					200: '#d1ae87',
					300: '#ba864b',
					400: '#a35e0f',
					500: '#8c5a2b',
					600: '#734422',
					700: '#5a2e19',
					800: '#411810',
					900: '#280406',
				},
			},
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
	darkMode: 'class',
}
