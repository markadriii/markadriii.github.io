<script lang="ts">
	import SectionContainer from '$lib/components/layouts/section-container.svelte';
	import SocialItem from '$lib/components/common/item/social-item.svelte';
	import type { SocialLink } from '$lib/types';

	export let data: SocialLink[];
	export let id: string;
	export let spacing: string;
</script>

<SectionContainer {id} {spacing}>
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
