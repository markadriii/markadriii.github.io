<script lang="ts">
	import SectionContainer from '$lib/components/layouts/section-container.svelte';
	import SkillCard from '$lib/components/common/skill-card.svelte';
	import type { Skills, SkillCategory } from '../../../types/types';

	export let data: Skills;
	export let id: string;
	export let spacing: string;

	let categories = Object.keys(data) as SkillCategory[];
</script>

<SectionContainer {id} {spacing}>
	<div class="flex w-full flex-col items-start justify-center space-y-8">
		<div class="w-full border-b-2 pb-2">
			<h1 class="text-left text-xl font-bold">Skills</h1>
		</div>
		<div class="flex size-full flex-col space-y-4">
			{#each categories as category}
				<div class="flex h-full w-full flex-col items-start space-y-2">
					<h1 class="text-foreground font-semibold">{category}:</h1>
					<div class="flex flex-wrap justify-start gap-2">
						{#each data[category] as item}
							<SkillCard {item} />
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</SectionContainer>
