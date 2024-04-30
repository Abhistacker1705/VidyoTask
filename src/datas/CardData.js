export const PlansPricing = [
	{
		planName: 'Free',
		recommended: false,
		price: {
			amount: 0,
			currency: 'USD',
			discount: 0,
		},
		features: [
			{
				text: '75 mins per month',
			},
			{
				text: '720p render quality',
			},
			{
				text: 'Multi-Lingual feature',
			},
			{
				text: 'Cut Magic',
			},
		],
	},

	{
		planName: 'Essential',
		recommended: false,
		price: {
			amount: 42,
			currency: 'USD',
			discount: 22,
		},

		features: [
			{
				text: 'Everything in Free plan',
			},
			{
				text: '200-500 mins per month',
			},
			{
				text: '1080p render quality',
			},
			{
				text: 'Import with integrations (Drive, Dropbox, Box)',
			},
			{
				text: 'Intelliclips',
			},
		],
	},

	{
		planName: 'Growth',
		recommended: true,
		price: {
			amount: 68,
			currency: 'USD',
			discount: 35,
		},

		features: [
			{
				text: 'Everything in Essential plan',
			},
			{
				text: '200-1000 mins per month',
			},
			{
				text: '1080p render quality',
			},
			{
				text: 'Bulk export (upto 5)',
			},
			{
				text: 'Bulk multi-social publishing',
			},
		],
	},
];

export const CustomPricing = {
	planName: 'Custom',
	recommended: false,
	price: {
		1200: {amount: 80, currency: 'USD', discount: 42},
		1400: {amount: 84, currency: 'USD', discount: 46},
		1600: {amount: 88, currency: 'USD', discount: 49},
		1800: {amount: 92, currency: 'USD', discount: 51},
	},

	features: [
		{
			text: 'Everything in Growth plan',
		},
		{
			text: '400-1000 mins per month',
		},
		{
			text: '4K render quality',
		},
		{
			text: 'Bulk export',
		},
		{
			text: 'Multiple brand kits',
		},
	],
};
