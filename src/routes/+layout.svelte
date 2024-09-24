<script lang="ts">
	import '../app.css';

	export let data: any = null;
</script>

<svelte:head>
	<meta name="author" content={data.metadata.author} />
	<meta name="keywords" content={data.metadata.keywords} />
	<meta name="description" content={data.metadata.description} />
	<title>{data.metadata.title}</title>

	<link
		rel="preload"
		href="/fonts/inter/light.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		href="/fonts/inter/regular.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		href="/fonts/inter/medium.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		href="/fonts/inter/semibold.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		href="/fonts/inter/bold.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
</svelte:head>

<slot></slot>
