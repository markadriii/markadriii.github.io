<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { NavigationItem } from '../../../types/types';
	import { activeNav } from '$lib/stores/nav';

	export let item: NavigationItem;
	export let isHovered;

	$: isActive = $activeNav === item.name.toLowerCase();
	$: linkClasses = `group flex items-start space-x-4 p-2 ${isActive && !isHovered ? 'text-primary-500' : 'text-current hover:text-primary-500'}`;
	$: underlineClasses = `h-[2px] transition-all duration-500 ${isActive && !isHovered ? 'w-full bg-primary-500' : 'w-0 bg-transparent group-hover:w-full group-hover:bg-primary-500'}`;
</script>

<a href="#{item.name.toLowerCase()}" class={linkClasses}>
	<Icon icon={item.icon} height="1.5rem" />
	<div class=" flex flex-col items-start">
		<span class="font-bold">{item.name}</span>
		<div class={underlineClasses}></div>
	</div>
</a>
