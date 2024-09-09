<script lang="ts">
	import SectionContainer from '$lib/components/layouts/section-container.svelte';
	export let data;
	export let id: string;
	export let spacing: string;
</script>

<SectionContainer {id} {spacing}>
	<article class="max-w-128 space-y-4 text-left">
		<h1 class="text-5xl font-bold text-secondary-300">{data.name}</h1>
		<h3 class="animate-character text-2xl font-bold">{data.header}</h3>
		<p class="max-w-sm text-base leading-relaxed antialiased">
			{data.info}
		</p>
	</article>
</SectionContainer>

<!-- https://codepen.io/alvarotrigo/pen/PoKMyNO -->
<!-- https://www.joshwcomeau.com/gradient-generator/ -->
<style>
	.animate-character {
		background-image: linear-gradient(
			90deg,
			hsl(0deg 100% 81%) 0%,
			hsl(336deg 92% 81%) 18%,
			hsl(297deg 56% 80%) 26%,
			hsl(243deg 100% 87%) 33%,
			hsl(245deg 100% 91%) 39%,
			hsl(246deg 100% 96%) 44%,
			hsl(0deg 0% 100%) 50%,
			hsl(2deg 100% 93%) 56%,
			hsl(1deg 100% 87%) 61%,
			hsl(0deg 100% 81%) 67%,
			hsl(336deg 92% 81%) 74%,
			hsl(297deg 56% 80%) 82%,
			hsl(243deg 100% 87%) 100%
		);
		background-size: 200% auto;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: textclip 2s linear infinite;
		display: inline-block;
	}

	@keyframes textclip {
		from {
			background-position: 200% center;
		}
	}
</style>
