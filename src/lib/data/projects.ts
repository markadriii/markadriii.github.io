import type { TContentRaw } from '$lib/types';

export const projects: TContentRaw[] = [
	{
		src: '/assets/content/dev_portfolio_logo.png',
		alt: 'Developer Portfolio Logo',
		title: 'Developer Portfolio',
		url: 'https://github.com/markadriii/markadriii.github.io',
		subtitle: 'Personal Project',
		date: 'Sep 2024',
		info: 'A clear and informative portfolio website highlighting my development skills, professional growth, and notable projects.',
		stack: ['sveltekit', 'typescript', 'tailwindcss'],
		extra: [
			{
				icon: 'github',
				name: 'Source',
				url: 'https://github.com/markadriii/markadriii.github.io'
			}
		]
	}
];
