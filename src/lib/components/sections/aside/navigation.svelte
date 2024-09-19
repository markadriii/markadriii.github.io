<script lang="ts">
	import SectionContainer from '$lib/components/layouts/section-container.svelte';
	import NavigationItem from '$lib/components/common/item/navigation-item.svelte';
	import type { NavigationLink } from '$lib/types';

	export let data: NavigationLink[];
	export let id: string;
	export let spacing: string;

	let isParentHovered: boolean = false;
	let isItemHovered: boolean = false;

	function handleGroupHover(isEntering: boolean) {
		if (isEntering) {
			isParentHovered = true;
		} else {
			isParentHovered = false;
			isItemHovered = false;
		}
	}
	function handleItemHover(isEntering: boolean) {
		isItemHovered = isEntering;
	}

	$: isHovered = isParentHovered && isItemHovered;
</script>

<SectionContainer {id} {spacing}>
	<nav>
		<ul
			class="w-fit text-sm uppercase"
			on:mouseenter={() => handleGroupHover(true)}
			on:mouseleave={() => handleGroupHover(false)}
		>
			{#each data as item}
				<li
					on:mouseenter={() => handleItemHover(true)}
					on:mouseleave={() => handleItemHover(false)}
				>
					<NavigationItem {item} {isHovered} />
				</li>
			{/each}
		</ul>
	</nav>
</SectionContainer>
