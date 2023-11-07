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
			7.5: '15px',
			10: '20px',
			12.5: '25px',
			15: '30px',
			20: '40px'
		},
		fontFamily: {
			montreal: ['NeueMontreal', 'system-ui']
		},
		fontSize: {
			sm: ['0.875rem', '1.2'],
			'3xl': ['1.875rem', '1.2'],
			'4xl': ['2.25rem', '1.2'],
			'4.5xl': ['2.375rem', '1.2'],
			'5xl': ['3rem', '1.2'],
			'7xl': ['4.5rem', '1.2']
		},
		extend: {
			colors: {
				'light-gray': '#e8e5e480'
			}
		}
	},
	plugins: []
};
