/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		spacing: {
			0: '0px',
			1: '1px',
			2: '4px',
			3: '6px',
			4: '8px',
			5: '10px',
			6: '12px',
			15: '30px',
			20: '40px'
		},
		fontFamily: {
			montreal: ['NeueMontreal', 'system-ui']
		},
		extend: {
			colors: {
				'light-gray': '#e8e5e480'
			}
		}
	},
	plugins: []
};
