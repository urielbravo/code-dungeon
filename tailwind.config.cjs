/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// solarized theme
				solarized_base03: "#002b36",
				solarized_base02: "#073642",
				solarized_base01: "#586e75",
				solarized_base00: "#657b83",
				solarized_base0:    "#839496",
				solarized_base1:    "#93a1a1",
				solarized_base2:    "#eee8d5",
				solarized_base3:    "#fdf6e3",
				solarized_yellow:   "#b58900",
				solarized_orange:   "#cb4b16",
				solarized_red:      "#dc322f",
				solarized_magenta:   "#d33682",
				solarized_violet:   "#6c71c4",
				solarized_blue:     "#268bd2",
				solarized_cyan:     "#2aa198",
				solarized_green:    "#859900",

				// Matrix like theme
				matrix_green: "#00E100",
				matrix_black: "#000000"
			},
			typography: ({ theme }) => ({
				matrix: {
					css: {
						'--tw-prose-body': theme('colors.matrix_green'),
						'--tw-prose-headings': theme('colors.matrix_green'),
                        '--tw-prose-strong': theme('colors.matrix_green'),
						'--tw-prose-counters': theme('colors.matrix_green'),
						'--tw-prose-bullets': theme('colors.matrix_green'),
					}
				}	
			})
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
