/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'beige': '#EEEDEB',
				'orange': '#E6B9A6',
				'brown': '#939185',
				'dark': '#2F3645'
			},
			height: {
				'9/10': '90%',
				'80vh': '80vh',
				'50vh': '50vh'
			},
		},
	},
	plugins: [],
}
