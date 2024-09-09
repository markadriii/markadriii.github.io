<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { NavigationItem } from '../../../types/types';

	export let item: NavigationItem;
</script>

<a
	href="#{item.name.toLowerCase()}"
	class="group flex items-start space-x-4 hover:text-tertiary-500"
>
	<Icon icon={item.icon} height="1.5rem" />
	<div class=" flex flex-col items-start">
		<span class="font-bold">{item.name}</span>
		<div
			class="h-[2px] w-0 bg-surface-500 transition-all duration-500 group-hover:w-full group-hover:bg-tertiary-500"
		></div>
	</div>
</a>
