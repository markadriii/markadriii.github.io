<script lang="ts">
	import ContentContainer from './content-container.svelte';

	export let id: string;
</script>

<section {id} class="flex min-h-fit scroll-m-20 items-center justify-start">
	<slot {ContentContainer} />
</section>
