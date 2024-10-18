import { getUrl } from '$lib/utils/helpers';

const title = 'Mark Adrian Escobar | Developer Portfolio';
const description =
	'Mark Adrian Escobar is an enthusiastic developer focused on coding solutions that streamline everyday tasks and improve efficiency.';
const url = getUrl();

export const metadata = {
	title: title,
	// metadata array
	metadata: [
		{
			name: 'title',
			content: title
		},
		{
			name: 'author',
			content: 'Mark Adrian Escobar'
		},
		{
			name: 'keywords',
			content:
				'Mark, Adrian, Escobar, Software Developer, Web Developer, Developer, Portfolio, Coding, Programming'
		},
		{
			name: 'description',
			content: description
		},
		{
			name: 'image',
			content: `${url}assets/og.png`
		},
		// og
		{
			property: 'og:title',
			content: title
		},
		{
			property: 'og:url',
			content: url
		},
		{
			property: 'og:description',
			content: description
		},
		{
			property: 'og:image',
			content: `${url}assets/og.png`
		},
		{
			property: 'og:type',
			content: 'website'
		},
		// twitter
		{
			property: 'twitter:card',
			content: 'summary_large_image'
		},
		{
			property: 'twitter:site',
			content: '@markadriii'
		},
		{
			property: 'twitter:creator',
			content: '@markadriii'
		},
		{
			property: 'twitter:title',
			content: title
		},
		{
			property: 'twitter:description',
			content: description
		},
		{
			property: 'twitter:url',
			content: url
		},
		{
			property: 'twitter:image',
			content: `${url}assets/og.png`
		}
	],
	// favicon from https://favicon.io/
	favicon: [
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '16x16',
			href: '/assets/favicon/favicon-16x16.png'
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '32x32',
			href: '/assets/favicon/favicon-32x32.png'
		},
		{
			rel: 'apple-touch-icon',
			sizes: '180x180',
			href: '/assets/favicon/apple-touch-icon.png'
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '192x192',
			href: '/assets/favicon/android-chrome-192x192.png'
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '512x512',
			href: '/assets/favicon/android-chrome-512x512.png'
		},
		{
			rel: 'manifest',
			href: '/assets/favicon/site.webmanifest'
		}
	],
	// font preload
	preload: [
		{
			rel: 'preload',
			href: '/fonts/inter/light.woff2',
			as: 'font',
			type: 'font/woff2',
			crossorigin: 'anonymous'
		},
		{
			rel: 'preload',
			href: '/fonts/inter/regular.woff2',
			as: 'font',
			type: 'font/woff2',
			crossorigin: 'anonymous'
		},
		{
			rel: 'preload',
			href: '/fonts/inter/medium.woff2',
			as: 'font',
			type: 'font/woff2',
			crossorigin: 'anonymous'
		},
		{
			rel: 'preload',
			href: '/fonts/inter/semibold.woff2',
			as: 'font',
			type: 'font/woff2',
			crossorigin: 'anonymous'
		},
		{
			rel: 'preload',
			href: '/fonts/inter/bold.woff2',
			as: 'font',
			type: 'font/woff2',
			crossorigin: 'anonymous'
		}
	]
};
