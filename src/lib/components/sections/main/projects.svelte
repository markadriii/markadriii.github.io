<script lang="ts">
	import SectionContainer from '$lib/components/layouts/section-container.svelte';
	import type { Content } from '$lib/types';
	import ContentCard from '../../common/card/content-card.svelte';

	export let data: Content[];
	export let id: string;
	export let spacing: string;
</script>

<SectionContainer {id} {spacing} let:ContentContainer>
	<ContentContainer title={'Projects'}>
		<div class="flex w-full flex-col items-start justify-center space-y-4">
			{#each data as item}
				<ContentCard {item} />
			{/each}
		</div>
	</ContentContainer>
</SectionContainer>
