<script lang="ts">
	import SectionContainer from '$lib/components/layouts/section-container.svelte';
	import NavigationItem from '$lib/components/common/navigation-item.svelte';
	import type { NavigationLink } from '../../../types/types';

	export let data: NavigationLink[];
	export let id: string;
	export let spacing: string;
</script>

<SectionContainer {id} {spacing}>
	<nav>
		<ul class="w-56 space-y-1 text-sm uppercase text-surface-500">
			{#each data as item}
				<li class="w-fit p-2">
					<NavigationItem {item} />
				</li>
			{/each}
		</ul>
	</nav>
</SectionContainer>
