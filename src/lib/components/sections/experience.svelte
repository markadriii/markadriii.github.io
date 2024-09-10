<script lang="ts">
	import SectionContainer from '$lib/components/layouts/section-container.svelte';
	import ExperienceCard from '$lib/components/common/experience-card.svelte';
	import type { Experience } from '../../../types/types';

	export let data: Experience[];
	export let id: string;
	export let spacing: string;
</script>

<SectionContainer {id} {spacing}>
	<div class="flex w-full flex-col items-start justify-center space-y-8">
		<div class="w-full border-b-2 pb-2">
			<h1 class="text-left text-xl font-bold">Experience</h1>
		</div>
		<div class="flex w-full flex-col items-start justify-center space-y-4">
			{#each data as item}
				<ExperienceCard {item} />
			{/each}
		</div>
	</div>
</SectionContainer>
