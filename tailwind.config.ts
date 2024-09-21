import { join } from 'path';
import type { Config } from 'tailwindcss';
import { baseTheme } from './custom-theme';
import forms from '@tailwindcss/forms';
import { skeleton } from '@skeletonlabs/tw-plugin';

const config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {},
	plugins: [
		forms,
		skeleton({
			themes: {
				custom: [baseTheme]
			}
		})
	]
} satisfies Config;

export default config;
