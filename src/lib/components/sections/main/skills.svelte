<script lang="ts">
	import SectionContainer from '$lib/components/layouts/section-container.svelte';
	import type { Skills, SkillCategory } from '$lib/types';
	import SkillCard from '../../common/card/skill-card.svelte';

	export let data: Skills;
	export let id: string;
	export let spacing: string;

	let categories = Object.keys(data) as SkillCategory[];
</script>

<SectionContainer {id} {spacing} let:ContentContainer>
	<ContentContainer title={'Skills'}>
		<div class="flex size-full flex-col space-y-4">
			{#each categories as category}
				<div class="flex h-full w-full flex-col items-start space-y-2">
					<h1 class="font-semibold">{category}:</h1>
					<div class="flex flex-wrap justify-start gap-2">
						{#each data[category] as item}
							<SkillCard {item} />
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</ContentContainer>
</SectionContainer>
