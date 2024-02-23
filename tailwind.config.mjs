/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
			  "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
			  "gradient-conic":
				"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops)) ",
			},

			colors:{
				'black-for-gradient': '#0A0A21',
				'blue-for-gradient': '#0F143A', 
			  },
		},
		
	},
	plugins: [],
}