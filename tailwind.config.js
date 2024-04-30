/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				nav: '0px 1px 4px 0px #0000001C',
			},
			colors: {
				garlic: '#f6f6f2',
				grease: '#252521',
				'garlic-100': '#FAFAF8',
				'garlic-300': '#EEEEE9',
				'garlic-400': '#D8D8D0',
				'garlic-500': '#c3c3bb',
				'garlic-600': '#9f9f99',
				'garlic-700': '#80807b',
				'garlic-800': '#61615b',
				'garlic-900': '#3A3A33',
				lime: '#b7f564',
				'lime-600': '#8ae215',
				blackColor: '#262622',
			},
			backgroundColor: {
				darkCard:
					'linear-gradient(180deg, #383835 0%, rgba(37, 37, 33, 0) 100%)',
			},
		},
	},
	plugins: [],
};
