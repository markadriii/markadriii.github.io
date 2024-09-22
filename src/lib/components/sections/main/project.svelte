<script lang="ts">
	import type { TContent } from '$lib/types';
	import SectionContainer from '$lib/components/layouts/section-container.svelte';
	import ContentCard from '../../common/card/content-card.svelte';

	export let data: TContent[];
	export let id: string;
</script>

<SectionContainer {id} let:ContentContainer>
	<ContentContainer title={'Projects'}>
		<div class="flex w-full flex-col items-start justify-center space-y-4">
			{#each data as item}
				<ContentCard {item} />
			{/each}
		</div>
	</ContentContainer>
</SectionContainer>
