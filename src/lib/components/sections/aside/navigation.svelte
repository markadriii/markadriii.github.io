<script lang="ts">
	import type { TIcon } from '$lib/types';
	import SectionContainer from '$lib/components/layouts/section-container.svelte';
	import NavigationItem from '$lib/components/common/item/navigation-item.svelte';

	export let data: TIcon[];
	export let id: string;

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

<SectionContainer {id}>
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
