/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: '#f5f4ee', // beige: '#f5f4ee'
				secondary:'#d6b594'  //light brown
			},
			fontFamily: {
                'inknut': ['Inknut Antiqua', 'serif'], // Added Playfair Display
            },
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
