<script lang="ts">
	import type { TSocial } from '$lib/types';
	import SectionContainer from '$lib/components/layouts/section-container.svelte';
	import SocialItem from '$lib/components/common/item/social-item.svelte';

	export let data: TSocial[];
	export let id: string;
</script>

<SectionContainer {id}>
	<nav>
		<ul class="flex space-x-2 text-sm uppercase">
			{#each data as item}
				<li class="w-fit p-2">
					<SocialItem {item} />
				</li>
			{/each}
		</ul>
	</nav>
</SectionContainer>
