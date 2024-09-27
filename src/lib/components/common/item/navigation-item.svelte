<script lang="ts">
	import type { TIcon } from '$lib/types';
	import { activeNav } from '$lib/stores/nav';
	import Icon from '../icon.svelte';

	export let item: TIcon;
	export let isHovered: boolean;

	$: isActive = $activeNav === item.name.toLowerCase();
	$: linkClasses = `group flex items-start space-x-4 p-2 ${isActive && !isHovered ? 'text-primary-500' : 'text-current hover:text-primary-500'}`;
	$: underlineClasses = `h-[2px] transition-all duration-500 ${isActive && !isHovered ? 'w-full bg-primary-500' : 'w-0 bg-transparent group-hover:w-full group-hover:bg-primary-500'}`;
</script>

<a href={item.url} class={linkClasses}>
	<Icon color={false} icon={item.icon} height="size-6" />
	<div class=" flex flex-col items-start">
		<span class="font-bold">{item.name}</span>
		<div class={underlineClasses}></div>
	</div>
</a>
