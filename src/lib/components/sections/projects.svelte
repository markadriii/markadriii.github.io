<script lang="ts">
	import SectionContainer from '$lib/components/layouts/section-container.svelte';
	import ProjectCard from '$lib/components/common/project-card.svelte';
	import type { Project } from '../../../types/types';

	export let data: Project[];
	export let id: string;
	export let spacing: string;
</script>

<SectionContainer {id} {spacing}>
	<div class="flex w-full flex-col items-start justify-center space-y-8">
		<div class="w-full border-b-2 pb-2">
			<h1 class="text-left text-xl font-bold">Projects</h1>
		</div>
		{#each data as item}
			<ProjectCard {item} />
		{/each}
	</div>
</SectionContainer>
