<script lang="ts">
	import ContentContainer from './content-container.svelte';

	export let id: string;
	export let minHeight: string = 'min-h-fit';
	export let spacing: string = '';
</script>

<section {id} class="{minHeight} {spacing} flex scroll-m-20 items-center justify-start">
	<slot {ContentContainer} />
</section>
